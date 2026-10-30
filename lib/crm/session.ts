import "server-only";
import { cookies, headers } from "next/headers";
import { first, isDatabaseConfigured, newId, nowIso, run } from "@/lib/db/d1";

/**
 * CRM administrator sessions.
 *
 * ── The shape, and why ────────────────────────────────────────────────────
 * The cookie carries `<token>.<hmac>`. The database stores the SHA-256 of
 * the token and never the token itself, so the `crm_sessions` table holds a
 * verifier rather than a credential: reading every row does not let anyone
 * mint a cookie.
 *
 * The HMAC is not what makes the session secure — the database lookup is.
 * It earns its place by rejecting junk before a query runs, which keeps a
 * flood of forged cookies from turning into a flood of D1 reads, and it is
 * what makes these sessions "signed" in the sense the requirement asked for.
 *
 * ── Why the row is authoritative ──────────────────────────────────────────
 * A signed stateless cookie would need no table, and could not be revoked.
 * "Log out" would mean "forget it in this browser" while a captured cookie
 * stayed valid until it expired. Here, logout deletes the row, so a replayed
 * cookie finds nothing. That is the difference between a session ending and
 * a session merely being forgotten.
 *
 * ── Two clocks ────────────────────────────────────────────────────────────
 * Absolute expiry (12 h) bounds a session no matter what. Idle timeout (2 h)
 * ends one that stopped being used, which is the case that matters for an
 * unattended browser. Both are enforced in SQL, in the same statement that
 * fetches the session, so there is no window where application code could
 * forget to check.
 */

const COOKIE_NAME = "crm_session";

/** 12 hours from login, whatever happens in between. */
export const SESSION_ABSOLUTE_MS = 12 * 60 * 60 * 1000;
/** 2 hours without a request ends it. */
export const SESSION_IDLE_MS = 2 * 60 * 60 * 1000;

/**
 * `last_seen_at` is only written when it is this stale, so that a burst of
 * requests does not become a burst of writes. Well under the idle timeout,
 * so it cannot cause a spurious expiry.
 */
const TOUCH_INTERVAL_MS = 5 * 60 * 1000;

export type CrmSession = {
  id: string;
  username: string;
  expiresAt: string;
};

function secret(): string | null {
  const value = process.env.CRM_SESSION_SECRET;
  // A short secret is a weak HMAC key; refuse rather than pretend.
  return value && value.length >= 32 ? value : null;
}

function toBytes(value: string): Uint8Array<ArrayBuffer> {
  const encoded = new TextEncoder().encode(value);
  const out = new Uint8Array(new ArrayBuffer(encoded.length));
  out.set(encoded);
  return out;
}

function toHex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function base64Url(input: Uint8Array): string {
  let binary = "";
  for (const byte of input) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** The database key for a token. SHA-256 does not run backwards. */
async function tokenId(token: string): Promise<string> {
  return toHex(await crypto.subtle.digest("SHA-256", toBytes(token)));
}

async function sign(token: string, key: string): Promise<string> {
  const hmacKey = await crypto.subtle.importKey(
    "raw",
    toBytes(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", hmacKey, toBytes(token));
  return base64Url(new Uint8Array(mac));
}

/** Compare without revealing the length of the matching prefix. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/**
 * The CSRF token for a session.
 *
 * Derived rather than stored: it is an HMAC over the session id under a
 * different label from the cookie signature, so it is unguessable without
 * the secret, it cannot be confused with a session signature, and it needs
 * no column and no second lookup. It changes when the session changes, which
 * is exactly the lifetime a CSRF token should have.
 */
export async function csrfTokenFor(sessionId: string): Promise<string> {
  const key = secret();
  if (!key) return "";
  return sign(`csrf:${sessionId}`, key);
}

export async function assertCsrf(sessionId: string, supplied: unknown): Promise<boolean> {
  if (typeof supplied !== "string" || supplied.length === 0) return false;
  const expected = await csrfTokenFor(sessionId);
  if (!expected) return false;
  return timingSafeEqual(expected, supplied);
}

/** True when the three secrets this depends on are all present. */
export function isSessionConfigured(): boolean {
  return Boolean(
    process.env.CRM_ADMIN_USERNAME &&
      process.env.CRM_ADMIN_PASSWORD_HASH &&
      secret(),
  );
}

/**
 * Whether to mark the cookie `Secure`.
 *
 * True for every real hostname, which is what matters: production, previews,
 * the workers.dev URL. It is relaxed only for a loopback host, because a
 * `Secure` cookie is discarded by the browser over plain http and `wrangler
 * dev` serves http — so without this, signing in locally appears to fail
 * while the session row is created perfectly well.
 *
 * Written as an allow-list of loopback names rather than a check for
 * "production", so an unrecognised host gets the safe answer. There is no
 * environment variable that can turn this off.
 */
async function shouldMarkSecure(): Promise<boolean> {
  const store = await headers();
  const host = (store.get("host") ?? "").toLowerCase().split(":")[0];
  return !(host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host === "::1");
}

async function clientIp(): Promise<string> {
  const store = await headers();
  // CF-Connecting-IP is set by Cloudflare and cannot be overridden by the
  // client on a request that actually arrived through Cloudflare. It is still
  // only used for rate limiting and diagnostics, never to authenticate.
  return store.get("cf-connecting-ip") ?? store.get("x-real-ip") ?? "unknown";
}

/**
 * Create a session and set the cookie. Returns the raw token only so the
 * caller can be tested; nothing needs to store it.
 */
export async function createSession(username: string): Promise<string | null> {
  const key = secret();
  if (!key || !isDatabaseConfigured()) return null;

  const raw = new Uint8Array(new ArrayBuffer(32));
  crypto.getRandomValues(raw);
  const token = base64Url(raw);
  const id = await tokenId(token);

  const now = Date.now();
  const store = await headers();

  await run(
    `INSERT INTO crm_sessions (id, username, created_at, expires_at, last_seen_at, ip, user_agent)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`,
    [
      id,
      username,
      new Date(now).toISOString(),
      new Date(now + SESSION_ABSOLUTE_MS).toISOString(),
      new Date(now).toISOString(),
      await clientIp(),
      (store.get("user-agent") ?? "").slice(0, 300),
    ],
  );

  const jar = await cookies();
  jar.set(COOKIE_NAME, `${token}.${await sign(token, key)}`, {
    httpOnly: true, // unreadable from JavaScript, so XSS cannot exfiltrate it
    secure: await shouldMarkSecure(), // HTTPS only, everywhere but loopback
    sameSite: "lax", // not sent on cross-site POSTs; survives following a link in
    path: "/",
    maxAge: Math.floor(SESSION_ABSOLUTE_MS / 1000),
  });

  return token;
}

/**
 * The current session, or null.
 *
 * Expiry is part of the WHERE clause rather than a later comparison, so an
 * expired row cannot be returned and then forgotten about.
 */
export async function readSession(): Promise<CrmSession | null> {
  const key = secret();
  if (!key || !isDatabaseConfigured()) return null;

  const jar = await cookies();
  const raw = jar.get(COOKIE_NAME)?.value;
  if (!raw) return null;

  const split = raw.lastIndexOf(".");
  if (split <= 0) return null;
  const token = raw.slice(0, split);
  const mac = raw.slice(split + 1);

  // Signature first: a forged cookie costs one HMAC, not a database read.
  if (!timingSafeEqual(await sign(token, key), mac)) return null;

  const id = await tokenId(token);
  const now = Date.now();
  const idleCutoff = new Date(now - SESSION_IDLE_MS).toISOString();

  const row = await first<{
    id: string;
    username: string;
    expires_at: string;
    last_seen_at: string;
  }>(
    `SELECT id, username, expires_at, last_seen_at
       FROM crm_sessions
      WHERE id = ?1
        AND expires_at > ?2
        AND last_seen_at > ?3`,
    [id, new Date(now).toISOString(), idleCutoff],
  );
  if (!row) return null;

  // Slide the idle window, but not on every request.
  if (now - Date.parse(row.last_seen_at) > TOUCH_INTERVAL_MS) {
    try {
      await run("UPDATE crm_sessions SET last_seen_at = ?1 WHERE id = ?2", [
        nowIso(),
        id,
      ]);
    } catch {
      // A failed touch must not log the administrator out.
    }
  }

  return { id: row.id, username: row.username, expiresAt: row.expires_at };
}

/**
 * End the current session: delete the row, then clear the cookie.
 *
 * The order matters. Deleting first means that even if clearing the cookie
 * fails, the session is already dead.
 */
export async function destroySession(): Promise<void> {
  const key = secret();
  const jar = await cookies();
  const raw = jar.get(COOKIE_NAME)?.value;

  if (raw && key && isDatabaseConfigured()) {
    const split = raw.lastIndexOf(".");
    if (split > 0) {
      try {
        await run("DELETE FROM crm_sessions WHERE id = ?1", [
          await tokenId(raw.slice(0, split)),
        ]);
      } catch {
        // Fall through: the cookie is cleared regardless.
      }
    }
  }

  jar.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: await shouldMarkSecure(),
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

/**
 * Delete expired rows. Called opportunistically on login, not on a schedule,
 * because a Worker has no cron here and the table is tiny.
 */
export async function pruneExpiredSessions(): Promise<void> {
  if (!isDatabaseConfigured()) return;
  try {
    await run("DELETE FROM crm_sessions WHERE expires_at <= ?1", [nowIso()]);
  } catch {
    // Housekeeping only.
  }
}

/** Exposed for the login flow, which records attempts against it. */
export async function requestIp(): Promise<string> {
  return clientIp();
}

/** Exposed so the attempts table can use the same id generator. */
export { newId };
