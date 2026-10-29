import "server-only";
import { getDb, isDatabaseConfigured } from "@/lib/db/supabase";

/**
 * Per-address rate limiting for the quotation form.
 *
 * ── Why this is not an in-memory Map ──────────────────────────────────────
 * The system this was modelled on uses one, and its own comment concedes the
 * problem: on a platform that runs several instances each keeps its own
 * counter, so the real limit is the configured number multiplied by however
 * many instances happen to be warm. That is a speed bump described as a
 * limit.
 *
 * Counting in the database makes it exact regardless of how many instances
 * are running, and this application already has a database. The count is of
 * leads actually created, which is the thing worth limiting — a submission
 * that failed validation costs nothing and should not use up someone's
 * allowance.
 *
 * ── What it does when the database is unconfigured ────────────────────────
 * Nothing. It allows the request. The lead creation immediately after will
 * report `not_configured` and the visitor is told plainly that nothing was
 * sent, so there is no path here for an unlimited write.
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
 * would have to keep changing, and changing it makes the leads obviously
 * junk rather than silently duplicated.
 */
export async function checkQuoteRate(email: string): Promise<RateDecision> {
  if (!isDatabaseConfigured()) return { allowed: true };

  const since = new Date(Date.now() - WINDOW_MS).toISOString();

  try {
    const { count, error } = await getDb()
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("email", email.toLowerCase())
      .gte("created_at", since);

    if (error) {
      // A failure to count must not become a refusal to serve. Log and allow.
      console.error("[quote] rate check failed:", error.message);
      return { allowed: true };
    }

    if ((count ?? 0) >= LIMIT) {
      return { allowed: false, retryAfterMs: WINDOW_MS };
    }
    return { allowed: true };
  } catch (error) {
    console.error("[quote] rate check threw:", error);
    return { allowed: true };
  }
}
