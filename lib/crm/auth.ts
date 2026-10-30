import "server-only";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Who is allowed into the CRM, decided on the server from a signature.
 *
 * ── The defect this file exists to avoid ──────────────────────────────────
 * The system this CRM was modelled on protects itself with a `useEffect`
 * that calls `getSession()` in the browser and redirects if there isn't one.
 * That is a redirect, not a security boundary: it runs after the page has
 * already been sent, it can be skipped by anything that is not a browser,
 * and none of that project's CRM *server actions* checks anything at all
 * before using its privileged database key. A server action is reachable by
 * POST and an action id is not a secret, so anyone who finds one can delete a
 * booking.
 *
 * ── Why the JWT and not the email header ──────────────────────────────────
 * Cloudflare Access puts two things on an authenticated request:
 * `Cf-Access-Authenticated-User-Email` and `Cf-Access-Jwt-Assertion`. Only
 * the second is evidence. The first is an ordinary header, and an ordinary
 * header can be sent by anyone — so if the Worker is ever reachable other
 * than through the Access hostname (its `workers.dev` subdomain, a second
 * route, a misconfigured policy), trusting it means anyone can be anyone by
 * typing a header. That is the single most common way an Access integration
 * is got wrong.
 *
 * So this verifies the JWT: signature against the team's published keys,
 * then issuer, audience and expiry. The email is read from the verified
 * payload and nowhere else.
 *
 * ── Authentication is not authorization ───────────────────────────────────
 * A verified token proves Cloudflare authenticated somebody. It does not
 * prove that somebody runs this business. So a verified address gets a second
 * test against `CRM_ALLOWED_EMAILS`, and an empty allow-list denies everyone
 * — a misconfigured deployment should lock the CRM, not open it.
 *
 * That second test is also what makes the Access policy and the application
 * independent: widening the Access policy by accident does not widen the CRM.
 *
 * ── Three guards, each sufficient alone ───────────────────────────────────
 *   1. Cloudflare Access refuses the request at the edge, before the Worker
 *      runs at all.
 *   2. every CRM page awaits `requireCrmUser()` before it renders.
 *   3. every CRM server action awaits `requireCrmActor()` as its first
 *      statement, before any data is touched.
 *
 * Layer 1 is Cloudflare's; 2 and 3 are this file's, and they are what hold if
 * layer 1 is ever misconfigured.
 */

export type CrmUser = { id: string; email: string };

/** The addresses permitted into the CRM, lower-cased. */
function allowList(): string[] {
  return (process.env.CRM_ALLOWED_EMAILS ?? "")
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Configured means: we know which Access application to trust, and we know
 * who is allowed. Missing either is a locked CRM, not an open one.
 */
export function isCrmConfigured(): boolean {
  return Boolean(
    process.env.CF_ACCESS_TEAM_DOMAIN &&
      process.env.CF_ACCESS_AUD &&
      allowList().length > 0,
  );
}

/* ── JWT verification ─────────────────────────────────────────────────────
 * Done by hand against WebCrypto rather than with a library. The whole job
 * is: fetch the team's JWKS, find the key the token names, verify RS256,
 * check three claims. A dependency for that is a dependency to audit, and
 * `crypto.subtle` is available in both the Workers runtime and Node 18+.
 */

type Jwk = {
  kid: string;
  kty: string;
  alg?: string;
  n: string;
  e: string;
};

type AccessClaims = {
  email?: string;
  sub?: string;
  aud?: string | string[];
  iss?: string;
  exp?: number;
  nbf?: number;
};

/**
 * Backed by an explicit `ArrayBuffer` rather than `new Uint8Array(length)`.
 *
 * The bare form is typed `Uint8Array<ArrayBufferLike>`, which could be a
 * `SharedArrayBuffer`, and `crypto.subtle.verify` will not accept one. This
 * is the narrowing, not a stylistic choice.
 */
function base64UrlToBytes(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodeSegment<T>(segment: string): T | null {
  try {
    return JSON.parse(new TextDecoder().decode(base64UrlToBytes(segment))) as T;
  } catch {
    return null;
  }
}

/**
 * The team's signing keys.
 *
 * Cached for an hour in module scope. Access rotates keys, so this cannot be
 * cached forever; fetching per request would add a round trip to every CRM
 * page load. An hour is Cloudflare's own suggested order of magnitude, and a
 * rotation mid-cache simply fails verification once and refetches.
 */
let jwksCache: { keys: Jwk[]; at: number } | null = null;
const JWKS_TTL_MS = 60 * 60 * 1000;

async function teamKeys(teamDomain: string): Promise<Jwk[]> {
  if (jwksCache && Date.now() - jwksCache.at < JWKS_TTL_MS) {
    return jwksCache.keys;
  }
  const response = await fetch(`https://${teamDomain}/cdn-cgi/access/certs`);
  if (!response.ok) {
    throw new Error(`Access certs unavailable (${response.status})`);
  }
  const body = (await response.json()) as { keys?: Jwk[] };
  const keys = body.keys ?? [];
  jwksCache = { keys, at: Date.now() };
  return keys;
}

/**
 * Verify an Access JWT and return its claims, or null.
 *
 * Returns null for every failure and logs no token material. A caller cannot
 * tell a malformed token from an expired one from a wrong audience, which is
 * the correct amount to tell an unauthorised caller.
 */
async function verifyAccessJwt(token: string): Promise<AccessClaims | null> {
  const teamDomain = process.env.CF_ACCESS_TEAM_DOMAIN;
  const audience = process.env.CF_ACCESS_AUD;
  if (!teamDomain || !audience) return null;

  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const header = decodeSegment<{ alg?: string; kid?: string }>(parts[0]);
  const claims = decodeSegment<AccessClaims>(parts[1]);
  if (!header?.kid || header.alg !== "RS256" || !claims) return null;

  let keys: Jwk[];
  try {
    keys = await teamKeys(teamDomain);
  } catch (error) {
    console.error(
      "[crm] could not fetch Access certs:",
      error instanceof Error ? error.message : "unknown",
    );
    return null;
  }

  const jwk = keys.find((key) => key.kid === header.kid);
  if (!jwk) return null;

  let valid = false;
  try {
    const key = await crypto.subtle.importKey(
      "jwk",
      { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: "RS256", ext: true },
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"],
    );
    valid = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      key,
      base64UrlToBytes(parts[2]),
      new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
    );
  } catch {
    return null;
  }
  if (!valid) return null;

  // Signature is good. Now the claims, because a validly signed token for
  // somebody else's Access application is still not a token for this one.
  const now = Math.floor(Date.now() / 1000);
  if (typeof claims.exp !== "number" || claims.exp <= now) return null;
  if (typeof claims.nbf === "number" && claims.nbf > now + 60) return null;
  if (claims.iss !== `https://${teamDomain}`) return null;

  const audiences = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
  if (!audiences.includes(audience)) return null;

  return claims;
}

/**
 * The authenticated CRM user, or null.
 *
 * Reads `Cf-Access-Jwt-Assertion` and nothing else. In particular it does not
 * fall back to `Cf-Access-Authenticated-User-Email` when the JWT is missing:
 * a missing JWT means the request did not come through Access, and that is
 * exactly when the email header must not be believed.
 */
export async function getCrmUser(): Promise<CrmUser | null> {
  if (!isCrmConfigured()) return null;

  const store = await headers();
  const token =
    store.get("cf-access-jwt-assertion") ?? store.get("cf-authorization") ?? null;
  if (!token) return null;

  const claims = await verifyAccessJwt(token);
  if (!claims?.email) return null;

  const email = claims.email.toLowerCase();
  if (!allowList().includes(email)) return null;

  return { id: claims.sub ?? email, email };
}

/**
 * The same, but it does not return without one.
 *
 * Every CRM page starts with this. `redirect()` throws, so there is no path
 * past it — a caller that forgets to check the return value is still stopped.
 * It goes to the CRM root rather than a login page, because Access does the
 * logging in and a local login form would be a second, weaker door.
 */
export async function requireCrmUser(): Promise<CrmUser> {
  const user = await getCrmUser();
  if (!user) redirect("/crm/denied");
  return user;
}

/**
 * For server actions, which should refuse rather than redirect.
 *
 * A redirect from an action is a confusing answer to a programmatic call, and
 * it tells an unauthorised caller that the route exists. This throws a flat
 * error instead, with no detail about why.
 */
export async function requireCrmActor(): Promise<CrmUser> {
  const user = await getCrmUser();
  if (!user) throw new Error("Not authorised.");
  return user;
}
