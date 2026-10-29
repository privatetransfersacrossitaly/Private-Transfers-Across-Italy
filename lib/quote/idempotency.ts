import "server-only";
import { createHash } from "node:crypto";
import type { QuoteRequest } from "./schema";

/**
 * A key that is stable for the same enquiry and different for a new one.
 *
 * ── Why this exists on the public form, unlike the reference ──────────────
 * The system this was modelled on supports idempotency only on its
 * machine-to-machine intake. Its public booking form sends no key at all, so
 * a double click, an impatient second press or a browser re-sending a POST
 * creates two identical leads. That is the single most common way a quote
 * form goes wrong, and it is avoidable.
 *
 * ── What goes into the key ────────────────────────────────────────────────
 * The parts a person would genuinely have to change for this to be a
 * different request, plus a ten-minute bucket. Two submissions of the same
 * journey seconds apart collapse into one lead. The same customer legitimately
 * asking about the same journey an hour later does not — they get a second
 * lead, which is correct.
 *
 * It is a hash, so no customer detail travels in the key itself and nothing
 * identifying is stored in the `idempotency_key` column.
 */
export function idempotencyKeyFor(
  payload: Pick<QuoteRequest, "contact" | "outbound" | "tripType">,
  now: Date = new Date(),
): string {
  const bucket = Math.floor(now.getTime() / (10 * 60 * 1000));
  const material = [
    payload.contact.email.toLowerCase(),
    payload.contact.phone.e164,
    payload.outbound.pickup.toLowerCase(),
    payload.outbound.dropoff.toLowerCase(),
    payload.outbound.datetime,
    payload.tripType,
    bucket,
  ].join("|");

  return createHash("sha256").update(material).digest("hex").slice(0, 32);
}
