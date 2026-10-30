import "server-only";
import { first, isDatabaseConfigured } from "@/lib/db/d1";

/**
 * Per-address rate limiting for the quotation form.
 *
 * ── Why this is not an in-memory Map ──────────────────────────────────────
 * On a platform that runs many instances each would keep its own counter, so
 * the real limit becomes the configured number multiplied by however many
 * instances happen to be warm. That is a speed bump described as a limit, and
 * on Workers it is worse than on a Node server: an isolate per colo means
 * dozens of independent counters.
 *
 * Counting in the database makes it exact however many isolates are running.
 * The count is of leads actually created, which is the thing worth limiting —
 * a submission that failed validation costs nothing and should not use up
 * someone's allowance.
 *
 * ── What it does when the database is unavailable ─────────────────────────
 * Allows the request. Lead creation immediately afterwards reports
 * `not_configured` and the visitor is told plainly that nothing was sent, so
 * there is no path here to an unlimited write.
 */

const WINDOW_MS = Number(process.env.QUOTE_RATE_WINDOW_MS) || 10 * 60 * 1000;
const LIMIT = Number(process.env.QUOTE_RATE_LIMIT) || 10;

export type RateDecision = { allowed: true } | { allowed: false; retryAfterMs: number };

/**
 * Has this email address already created more leads than it should have in
 * the current window?
 *
 * Keyed on the email rather than the IP address. An IP is shared by a hotel,
 * an office and an entire mobile carrier's customers, so limiting on it
 * punishes the wrong people; the email is the thing a determined submitter
 * would have to keep changing, and changing it makes the leads obviously junk
 * rather than silently duplicated.
 *
 * `lower(email)` matches the expression index of the same name, so this stays
 * an index scan rather than a table scan as the table grows.
 */
export async function checkQuoteRate(email: string): Promise<RateDecision> {
  if (!isDatabaseConfigured()) return { allowed: true };

  const since = new Date(Date.now() - WINDOW_MS).toISOString();

  try {
    const row = await first<{ n: number }>(
      "SELECT COUNT(*) AS n FROM leads WHERE lower(email) = ?1 AND created_at >= ?2",
      [email.toLowerCase(), since],
    );

    if ((row?.n ?? 0) >= LIMIT) {
      return { allowed: false, retryAfterMs: WINDOW_MS };
    }
    return { allowed: true };
  } catch (error) {
    // A failure to count must not become a refusal to serve. Log the reason,
    // never the address, and allow.
    console.error(
      "[quote] rate check failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return { allowed: true };
  }
}
