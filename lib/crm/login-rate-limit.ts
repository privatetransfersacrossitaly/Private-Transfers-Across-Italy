import "server-only";
import { first, isDatabaseConfigured, newId, nowIso, run } from "@/lib/db/d1";

/**
 * Login rate limiting, counted in the database.
 *
 * ── Why not in memory ─────────────────────────────────────────────────────
 * A Worker runs in many isolates at once, and a module-scope counter is
 * per-isolate. An attacker spreading attempts across warm isolates would get
 * N tries each instead of N in total — which is not a rate limit, it is a
 * suggestion. The quote form's limiter counts in D1 for the same reason, and
 * on Workers the read is a network wait, so it costs nothing against the
 * 10 ms CPU budget that actually binds.
 *
 * ── Two independent limits ────────────────────────────────────────────────
 * Per IP, and per attempted username. Either alone has a hole:
 *
 *   - IP only: a distributed attack on one password gets unlimited attempts,
 *     because no single address is ever noisy.
 *   - username only: one attacker locks out the real administrator by
 *     failing on purpose. (That is why the username limit here is the looser
 *     of the two, and why it never locks the account permanently — it is a
 *     window, not a latch.)
 *
 * ── Checked before the password is hashed ─────────────────────────────────
 * The caller refuses over-limit attempts without deriving a key, so a flood
 * cannot be turned into a CPU bill, and cannot push a legitimate login over
 * the per-request limit.
 */

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_IP = 10;
const MAX_PER_USERNAME = 20;

/** Forget attempts well after the window, so the table stays small. */
const RETAIN_MS = 24 * 60 * 60 * 1000;

export type RateDecision = { allowed: boolean; retryAfterMinutes: number };

/**
 * May this address try this username right now?
 *
 * On any database failure the answer is "yes". That is deliberate and it is
 * the opposite of the choice made elsewhere in this file's spirit: a broken
 * limiter must not lock the only administrator out of the CRM. The password
 * check still stands behind it, so failing open here costs rate limiting,
 * not authentication.
 */
export async function checkLoginRate(
  ip: string,
  username: string,
): Promise<RateDecision> {
  if (!isDatabaseConfigured()) return { allowed: true, retryAfterMinutes: 0 };

  const since = new Date(Date.now() - WINDOW_MS).toISOString();
  try {
    const row = await first<{ by_ip: number; by_user: number }>(
      `SELECT
         (SELECT COUNT(*) FROM crm_login_attempts
           WHERE ok = 0 AND ip = ?1 AND at >= ?3)        AS by_ip,
         (SELECT COUNT(*) FROM crm_login_attempts
           WHERE ok = 0 AND username = ?2 AND at >= ?3)  AS by_user`,
      [ip, username, since],
    );
    if (!row) return { allowed: true, retryAfterMinutes: 0 };

    const allowed = row.by_ip < MAX_PER_IP && row.by_user < MAX_PER_USERNAME;
    return {
      allowed,
      retryAfterMinutes: allowed ? 0 : Math.ceil(WINDOW_MS / 60000),
    };
  } catch (error) {
    console.error("[crm] login rate check failed, allowing:", error);
    return { allowed: true, retryAfterMinutes: 0 };
  }
}

/** Record one attempt. Never throws: a failed write must not block a login. */
export async function recordLoginAttempt(
  ip: string,
  username: string,
  ok: boolean,
): Promise<void> {
  if (!isDatabaseConfigured()) return;
  try {
    await run(
      `INSERT INTO crm_login_attempts (id, at, username, ip, ok)
       VALUES (?1, ?2, ?3, ?4, ?5)`,
      [newId(), nowIso(), username, ip, ok ? 1 : 0],
    );
  } catch (error) {
    console.error("[crm] could not record login attempt:", error);
  }
}

/** Opportunistic housekeeping, run on login rather than on a schedule. */
export async function pruneLoginAttempts(): Promise<void> {
  if (!isDatabaseConfigured()) return;
  try {
    await run("DELETE FROM crm_login_attempts WHERE at < ?1", [
      new Date(Date.now() - RETAIN_MS).toISOString(),
    ]);
  } catch {
    // Housekeeping only.
  }
}
