import "server-only";
import { batch, first, isDatabaseConfigured, newId, nowIso } from "@/lib/db/d1";
import { requireCrmActor } from "@/lib/crm/auth";
import type { LeadRow } from "@/lib/crm/leads";

/**
 * Editing a lead, confirming a booking, cancelling a booking.
 *
 * ── Every function authorises first ───────────────────────────────────────
 * `requireCrmActor()` is the first statement in each, before the database
 * binding is touched. It throws, so there is no path where a caller forgets
 * to check a returned flag. This is the layer closest to the data, and it is
 * deliberately not relying on the page or the action above it having checked.
 *
 * ── Nothing here deletes ──────────────────────────────────────────────────
 * Cancelling sets a status, a timestamp and a reason. The enquiry, the
 * customer's details and the whole event history stay exactly where they are.
 * There is no delete function in this file and that is the point: the
 * reference CRM's `deleteBookingAction` removes the row outright, which makes
 * "why did we lose that booking?" unanswerable.
 *
 * ── Writes are batched ────────────────────────────────────────────────────
 * Each mutation writes the lead and its audit event in one `batch`, which D1
 * runs atomically. A change that happened without being recorded, or an event
 * describing a change that did not, are both worse than failing.
 */

export type MutationResult =
  | { ok: true }
  | { ok: false; error: "not_configured" | "not_found" | "conflict" | "failed" };

/** Fields a person may edit. Everything else is set by the system. */
export type LeadEdits = {
  full_name: string;
  email: string;
  phone_e164: string;
  pickup: string;
  dropoff: string;
  pickup_at_local: string;
  travel_reference: string | null;
  return_pickup: string | null;
  return_dropoff: string | null;
  return_at_local: string | null;
  return_travel_reference: string | null;
  adults: number;
  children: number;
  child_ages: string | null;
  luggage_hold: number;
  luggage_cabin: number;
  customer_message: string | null;
  quoted_amount_cents: number | null;
  supplier_cost_cents: number | null;
  commission_cents: number | null;
  customer_paid_cents: number | null;
  payment_status: string;
  currency: string;
};

/**
 * Europe/Rome local time to a UTC instant.
 *
 * The form edits wall-clock time as the customer experiences it, but
 * `pickup_at` is the instant everything sorts and compares on, so the two
 * must stay consistent. Done by asking Intl what the offset is on that
 * date rather than assuming +01:00 — Italy observes summer time, and a
 * journey booked in July is an hour out otherwise.
 */
export function romeLocalToUtcIso(local: string): string | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(local.trim());
  if (!match) return null;
  const [, y, mo, d, h, mi] = match.map(Number) as unknown as number[];

  // Guess the instant as if the local time were UTC, then measure how far
  // Rome was from UTC at that moment and correct. Repeating it once settles
  // the hour either side of a DST transition.
  let utc = Date.UTC(y, mo - 1, d, h, mi);
  for (let i = 0; i < 2; i += 1) {
    const offset = romeOffsetMinutes(new Date(utc));
    const corrected = Date.UTC(y, mo - 1, d, h, mi) - offset * 60_000;
    if (corrected === utc) break;
    utc = corrected;
  }
  const result = new Date(utc);
  return Number.isNaN(result.getTime()) ? null : result.toISOString();
}

function romeOffsetMinutes(at: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    hour12: false,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  }).formatToParts(at);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(
    get("year"), get("month") - 1, get("day"), get("hour"), get("minute"),
  );
  return Math.round((asUtc - at.getTime()) / 60_000);
}

/**
 * A booking reference.
 *
 * `PTA-YYMM-XXXX`, where the last group is from a 32-character alphabet with
 * I, O, 0 and 1 removed — the pairs people mis-read and mis-type when a
 * reference is given over the telephone, which is how this one will usually
 * travel. The date prefix makes a reference sortable and tells you when it
 * was issued without a lookup.
 */
export function generateBookingReference(now = new Date()): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(new ArrayBuffer(4));
  crypto.getRandomValues(bytes);
  let tail = "";
  for (const byte of bytes) tail += alphabet[byte % alphabet.length];
  const yy = String(now.getUTCFullYear()).slice(2);
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  return `PTA-${yy}${mm}-${tail}`;
}

async function loadLead(id: string): Promise<LeadRow | null> {
  return first<LeadRow>("SELECT * FROM leads WHERE id = ?1", [id]);
}

function eventStatement(
  leadId: string,
  actor: string,
  event: string,
  detail: Record<string, unknown> | null,
) {
  return {
    sql: `INSERT INTO lead_events (id, lead_id, created_at, actor, event, detail)
          VALUES (?1, ?2, ?3, ?4, ?5, ?6)`,
    params: [newId(), leadId, nowIso(), actor, event, detail ? JSON.stringify(detail) : null],
  };
}

/** Edit the customer, journey, party and pricing of a lead. */
export async function updateLeadDetails(
  id: string,
  edits: LeadEdits,
): Promise<MutationResult> {
  const actor = await requireCrmActor();
  if (!isDatabaseConfigured()) return { ok: false, error: "not_configured" };

  const before = await loadLead(id);
  if (!before) return { ok: false, error: "not_found" };

  const pickupAt = romeLocalToUtcIso(edits.pickup_at_local);
  if (!pickupAt) return { ok: false, error: "failed" };

  const hasReturn = Boolean(edits.return_at_local && edits.return_pickup);
  const returnAt = hasReturn ? romeLocalToUtcIso(edits.return_at_local!) : null;
  if (hasReturn && !returnAt) return { ok: false, error: "failed" };

  // Recorded as a field-level diff rather than a whole copy of the row: the
  // log answers "what changed" without storing the customer's details again
  // on every edit.
  const changed: Record<string, { from: unknown; to: unknown }> = {};
  const track = (key: keyof LeadRow, to: unknown) => {
    if (before[key] !== to) changed[key] = { from: before[key], to };
  };
  track("full_name", edits.full_name);
  track("email", edits.email);
  track("phone_e164", edits.phone_e164);
  track("pickup", edits.pickup);
  track("dropoff", edits.dropoff);
  track("pickup_at_local", edits.pickup_at_local);
  track("adults", edits.adults);
  track("children", edits.children);
  track("luggage_hold", edits.luggage_hold);
  track("luggage_cabin", edits.luggage_cabin);
  track("quoted_amount_cents", edits.quoted_amount_cents);
  track("supplier_cost_cents", edits.supplier_cost_cents);
  track("customer_paid_cents", edits.customer_paid_cents);
  track("payment_status", edits.payment_status);

  try {
    await batch([
      {
        sql: `UPDATE leads SET
                full_name = ?1, email = ?2, phone_e164 = ?3,
                pickup = ?4, dropoff = ?5,
                pickup_at = ?6, pickup_at_local = ?7, travel_reference = ?8,
                has_return = ?9, return_pickup = ?10, return_dropoff = ?11,
                return_at = ?12, return_at_local = ?13, return_travel_reference = ?14,
                adults = ?15, children = ?16, child_ages = ?17, passengers = ?18,
                luggage_hold = ?19, luggage_cabin = ?20, customer_message = ?21,
                quoted_amount_cents = ?22, supplier_cost_cents = ?23,
                commission_cents = ?24, customer_paid_cents = ?25,
                payment_status = ?26, currency = ?27,
                updated_at = ?28
              WHERE id = ?29`,
        params: [
          edits.full_name, edits.email, edits.phone_e164,
          edits.pickup, edits.dropoff,
          pickupAt, edits.pickup_at_local, edits.travel_reference,
          hasReturn ? 1 : 0, hasReturn ? edits.return_pickup : null,
          hasReturn ? edits.return_dropoff : null,
          returnAt, hasReturn ? edits.return_at_local : null,
          hasReturn ? edits.return_travel_reference : null,
          edits.adults, edits.children, edits.child_ages,
          edits.adults + edits.children,
          edits.luggage_hold, edits.luggage_cabin, edits.customer_message,
          edits.quoted_amount_cents, edits.supplier_cost_cents,
          edits.commission_cents, edits.customer_paid_cents,
          edits.payment_status, edits.currency,
          nowIso(), id,
        ],
      },
      eventStatement(id, actor.username, "lead_edited",
        Object.keys(changed).length ? { changed } : null),
    ]);
    return { ok: true };
  } catch (error) {
    console.error(
      "[crm] edit failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return { ok: false, error: "failed" };
  }
}

export type ConfirmInput = {
  /** Blank means generate one. */
  bookingReference: string;
  quotedAmountCents: number | null;
  supplierCostCents: number | null;
  currency: string;
  note: string;
};

/**
 * Confirm a booking: status, reference, timestamp, audit entry.
 *
 * Idempotent in the way that matters — a booking that already has a reference
 * keeps it, so confirming twice does not issue a second one and leave the
 * customer holding a reference the CRM no longer knows about.
 */
export async function confirmBooking(
  id: string,
  input: ConfirmInput,
): Promise<MutationResult & { reference?: string }> {
  const actor = await requireCrmActor();
  if (!isDatabaseConfigured()) return { ok: false, error: "not_configured" };

  const before = await loadLead(id);
  if (!before) return { ok: false, error: "not_found" };
  if (before.status === "cancelled") return { ok: false, error: "conflict" };

  const reference =
    input.bookingReference.trim() ||
    before.booking_reference ||
    generateBookingReference();
  const confirmedAt = before.confirmed_at ?? nowIso();

  try {
    await batch([
      {
        sql: `UPDATE leads SET
                status = 'confirmed',
                booking_reference = ?1,
                confirmed_at = ?2,
                quoted_amount_cents = COALESCE(?3, quoted_amount_cents),
                supplier_cost_cents = COALESCE(?4, supplier_cost_cents),
                currency = ?5,
                cancelled_at = NULL,
                cancellation_reason = NULL,
                updated_at = ?6
              WHERE id = ?7`,
        params: [
          reference, confirmedAt,
          input.quotedAmountCents, input.supplierCostCents,
          input.currency, nowIso(), id,
        ],
      },
      eventStatement(id, actor.username, "booking_confirmed", {
        reference,
        from: before.status,
        note: input.note || undefined,
      }),
    ]);
    return { ok: true, reference };
  } catch (error) {
    // A duplicate reference is the one failure worth distinguishing: it means
    // the operator typed one that already belongs to another booking.
    const message = error instanceof Error ? error.message : "";
    console.error("[crm] confirm failed:", message || "unknown");
    if (/UNIQUE|constraint/i.test(message)) return { ok: false, error: "conflict" };
    return { ok: false, error: "failed" };
  }
}

/**
 * Cancel a booking. The reason is required by the application, not the
 * database — a cancellation must always be recordable, but a person choosing
 * to cancel should have to say why while they still remember.
 *
 * The booking reference, the confirmation timestamp, the customer's enquiry
 * and the entire event history are all left in place.
 */
export async function cancelBooking(
  id: string,
  reason: string,
): Promise<MutationResult> {
  const actor = await requireCrmActor();
  if (!isDatabaseConfigured()) return { ok: false, error: "not_configured" };

  const trimmed = reason.trim();
  if (!trimmed) return { ok: false, error: "failed" };

  const before = await loadLead(id);
  if (!before) return { ok: false, error: "not_found" };

  try {
    await batch([
      {
        sql: `UPDATE leads SET
                status = 'cancelled',
                cancelled_at = ?1,
                cancellation_reason = ?2,
                updated_at = ?3
              WHERE id = ?4`,
        params: [nowIso(), trimmed, nowIso(), id],
      },
      eventStatement(id, actor.username, "booking_cancelled", {
        reason: trimmed,
        from: before.status,
        reference: before.booking_reference ?? undefined,
      }),
    ]);
    return { ok: true };
  } catch (error) {
    console.error(
      "[crm] cancel failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return { ok: false, error: "failed" };
  }
}
