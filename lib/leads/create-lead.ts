import "server-only";
import { batch, first, isDatabaseConfigured, newId, nowIso, run } from "@/lib/db/d1";
import type { EmailStatus, LeadCreateResult, NewLead } from "./types";

/**
 * The one place a lead is written.
 *
 * ── No degrading insert ───────────────────────────────────────────────────
 * The system this was modelled on inserts through a four-attempt degrading
 * loop: try the full column set, and when the database says a column does not
 * exist, try a smaller one, folding whatever could not be stored into a
 * free-text notes field. It exists because that project's migrations may or
 * may not have been run.
 *
 * Nothing like that is here, and its absence is the point. This schema comes
 * from `migrations/0001_create_leads.sql` in this repository. Either it has
 * been applied, in which case every column exists, or it has not, in which
 * case the honest answer is that the system is not set up — not a half-saved
 * lead with the customer's luggage count in a notes field.
 *
 * ── Ordering ──────────────────────────────────────────────────────────────
 * This returns only after the row is durably in the database. Email is a
 * separate step afterwards and cannot turn a saved lead into a failure.
 *
 * ── What changed moving from Postgres to D1 ───────────────────────────────
 * The id and both timestamps are now supplied here rather than defaulted by
 * the database, because SQLite has neither `gen_random_uuid()` nor `now()` as
 * a column default this schema can use. `nowIso()` produces the exact format
 * the CHECK constraints require.
 *
 * The insert and the first `created` event now go through `batch`, which is
 * atomic in D1. Previously they were two round trips and a crash between them
 * left a lead with no history; now either both land or neither does.
 */

/** The first segment of a uuid, uppercased. Short enough to read aloud. */
function referenceFor(id: string): string {
  return id.replace(/-/g, "").slice(0, 8).toUpperCase();
}

/** The row this lead already created, if it did. */
async function existingFor(idempotencyKey: string): Promise<string | null> {
  const row = await first<{ id: string }>(
    "SELECT id FROM leads WHERE idempotency_key = ?1",
    [idempotencyKey],
  );
  return row?.id ?? null;
}

const INSERT_LEAD = `
INSERT INTO leads (
  id, created_at, updated_at,
  source_form, locale, status,
  service_type, trip_type,
  full_name, email,
  phone_country, phone_calling_code, phone_national, phone_e164,
  pickup, dropoff, pickup_at, pickup_at_local, travel_reference,
  has_return, return_pickup, return_dropoff, return_at, return_at_local,
  return_travel_reference,
  adults, children, child_ages, passengers, luggage_hold, luggage_cabin,
  customer_message, idempotency_key
) VALUES (
  ?1, ?2, ?3,
  ?4, ?5, 'pending',
  ?6, ?7,
  ?8, ?9,
  ?10, ?11, ?12, ?13,
  ?14, ?15, ?16, ?17, ?18,
  ?19, ?20, ?21, ?22, ?23,
  ?24,
  ?25, ?26, ?27, ?28, ?29, ?30,
  ?31, ?32
)`;

export async function createLead(input: NewLead): Promise<LeadCreateResult> {
  if (!isDatabaseConfigured()) {
    return { ok: false, reason: "not_configured" };
  }

  // The validator has already run; this is the last line of defence against a
  // caller that skipped it.
  if (!input.fullName || !input.email || !input.phone.e164 || !input.outbound.pickup) {
    return { ok: false, reason: "invalid" };
  }

  // Already seen? Hand back the original rather than creating a twin. The
  // partial unique index is the real guard; this turns the common case into a
  // clean answer instead of a constraint violation.
  if (input.idempotencyKey) {
    const existing = await existingFor(input.idempotencyKey);
    if (existing) {
      return {
        ok: true,
        lead: { id: existing, reference: referenceFor(existing), deduplicated: true },
      };
    }
  }

  const id = newId();
  const at = nowIso();

  const params = [
    id, at, at,
    input.sourceForm, input.locale,
    input.serviceType || null, input.tripType,
    input.fullName, input.email,
    input.phone.country, input.phone.callingCode, input.phone.national, input.phone.e164,
    input.outbound.pickup, input.outbound.dropoff,
    input.outbound.at.toISOString(), input.outbound.atLocal,
    input.outbound.travelReference || null,
    input.inbound !== null ? 1 : 0,
    input.inbound?.pickup ?? null,
    input.inbound?.dropoff ?? null,
    input.inbound ? input.inbound.at.toISOString() : null,
    input.inbound?.atLocal ?? null,
    input.inbound?.travelReference || null,
    input.adults, input.children, input.childAges || null,
    input.adults + input.children,
    input.luggageHold, input.luggageCabin,
    input.customerMessage || null,
    input.idempotencyKey || null,
  ];

  try {
    await batch([
      { sql: INSERT_LEAD, params },
      {
        sql:
          "INSERT INTO lead_events (id, lead_id, created_at, actor, event, detail) " +
          "VALUES (?1, ?2, ?3, 'system', 'created', ?4)",
        params: [newId(), id, at, JSON.stringify({ sourceForm: input.sourceForm })],
      },
    ]);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    // A unique-constraint failure means a concurrent request won the race with
    // the same idempotency key. For the caller that is a success, not a
    // failure: the lead exists, it just was not this request that wrote it.
    if (/UNIQUE|constraint/i.test(message) && input.idempotencyKey) {
      const existing = await existingFor(input.idempotencyKey);
      if (existing) {
        return {
          ok: true,
          lead: { id: existing, reference: referenceFor(existing), deduplicated: true },
        };
      }
    }

    // The reason, never the customer's details.
    console.error("[leads] insert failed:", message);
    return { ok: false, reason: "failed" };
  }

  return {
    ok: true,
    lead: { id, reference: referenceFor(id), deduplicated: false },
  };
}

/**
 * Record what each notification actually did.
 *
 * The reference logs an email failure to the console and tells nobody, so a
 * lead can sit in the CRM looking handled when the customer never heard
 * anything. Writing the outcome onto the row makes that visible.
 *
 * Best-effort by design: failing to record that an email failed must not
 * itself become an error the visitor sees.
 */
export async function recordEmailStatus(
  leadId: string,
  statuses: { admin: EmailStatus; customer: EmailStatus },
): Promise<void> {
  if (!isDatabaseConfigured()) return;
  try {
    await run(
      "UPDATE leads SET admin_email_status = ?1, customer_email_status = ?2 WHERE id = ?3",
      [statuses.admin, statuses.customer, leadId],
    );
  } catch (error) {
    console.error("[leads] could not record email status:", error);
  }
}

/** Append one line to a lead's history. Never throws. */
export async function recordEvent(
  leadId: string,
  actor: string,
  event: string,
  detail?: Record<string, unknown>,
): Promise<void> {
  if (!isDatabaseConfigured()) return;
  try {
    await run(
      "INSERT INTO lead_events (id, lead_id, created_at, actor, event, detail) " +
        "VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
      [newId(), leadId, nowIso(), actor, event, detail ? JSON.stringify(detail) : null],
    );
  } catch (error) {
    console.error("[leads] could not record event:", error);
  }
}
