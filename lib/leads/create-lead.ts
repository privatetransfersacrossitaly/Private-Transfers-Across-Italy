import "server-only";
import { getDb, isDatabaseConfigured } from "@/lib/db/supabase";
import type { CreatedLead, EmailStatus, LeadCreateResult, NewLead } from "./types";

/**
 * The one place a lead is written.
 *
 * ── What this does differently from the system it was modelled on ─────────
 * That one inserts through a four-attempt degrading loop: try the full
 * column set, and if Postgres says a column does not exist, try a smaller
 * one, folding whatever could not be stored into a free-text notes field.
 * It exists because that project's migrations may or may not have been run
 * against a given database.
 *
 * Nothing like that is here, and its absence is the point. This schema is
 * created by `supabase/migrations/001_create_leads.sql` in this repository.
 * Either it has been run, in which case every column exists, or it has not,
 * in which case the honest answer is that the system is not set up — not a
 * half-saved lead with the customer's luggage count in a notes field.
 *
 * ── Ordering ──────────────────────────────────────────────────────────────
 * This returns only after the row is durably in the database. Email is a
 * separate step, taken afterwards, and cannot turn a saved lead into a
 * failure. That part of the reference design is right and is kept.
 */

/** The first segment of a uuid, uppercased. Short enough to read aloud. */
function referenceFor(id: string): string {
  return id.replace(/-/g, "").slice(0, 8).toUpperCase();
}

export async function createLead(input: NewLead): Promise<LeadCreateResult> {
  if (!isDatabaseConfigured()) {
    return { ok: false, reason: "not_configured" };
  }

  // The validator has already run; this is the last line of defence against a
  // caller that skipped it.
  if (!input.fullName || !input.email || !input.phone.e164 || !input.outbound.pickup) {
    return { ok: false, reason: "invalid" };
  }

  const db = getDb();

  // Already seen? Hand back the original rather than creating a twin. The
  // unique index is the real guard; this turns the common case into a clean
  // answer instead of a constraint violation.
  if (input.idempotencyKey) {
    const { data: existing } = await db
      .from("leads")
      .select("id")
      .eq("idempotency_key", input.idempotencyKey)
      .maybeSingle();

    if (existing?.id) {
      return {
        ok: true,
        lead: { id: existing.id, reference: referenceFor(existing.id), deduplicated: true },
      };
    }
  }

  const row = {
    source_form: input.sourceForm,
    locale: input.locale,
    status: "pending",
    service_type: input.serviceType || null,
    trip_type: input.tripType,

    full_name: input.fullName,
    email: input.email,
    phone_country: input.phone.country,
    phone_calling_code: input.phone.callingCode,
    phone_national: input.phone.national,
    phone_e164: input.phone.e164,

    pickup: input.outbound.pickup,
    dropoff: input.outbound.dropoff,
    pickup_at: input.outbound.at.toISOString(),
    pickup_at_local: input.outbound.atLocal,
    travel_reference: input.outbound.travelReference || null,

    has_return: input.inbound !== null,
    return_pickup: input.inbound?.pickup ?? null,
    return_dropoff: input.inbound?.dropoff ?? null,
    return_at: input.inbound ? input.inbound.at.toISOString() : null,
    return_at_local: input.inbound?.atLocal ?? null,
    return_travel_reference: input.inbound?.travelReference || null,

    adults: input.adults,
    children: input.children,
    child_ages: input.childAges || null,
    passengers: input.adults + input.children,
    luggage_hold: input.luggageHold,
    luggage_cabin: input.luggageCabin,

    customer_message: input.customerMessage || null,
    idempotency_key: input.idempotencyKey || null,
  };

  const { data, error } = await db.from("leads").insert([row]).select("id").single();

  if (error) {
    // A duplicate key means a concurrent request won the race with the same
    // idempotency key. For the caller that is a success, not a failure.
    if (error.code === "23505" && input.idempotencyKey) {
      const { data: existing } = await db
        .from("leads")
        .select("id")
        .eq("idempotency_key", input.idempotencyKey)
        .maybeSingle();
      if (existing?.id) {
        return {
          ok: true,
          lead: { id: existing.id, reference: referenceFor(existing.id), deduplicated: true },
        };
      }
    }

    // The id and the reason, never the customer's details.
    console.error("[leads] insert failed:", error.code, error.message);
    return { ok: false, reason: "failed" };
  }

  const lead: CreatedLead = {
    id: data.id,
    reference: referenceFor(data.id),
    deduplicated: false,
  };

  await recordEvent(lead.id, "system", "created", { sourceForm: input.sourceForm });

  return { ok: true, lead };
}

/**
 * Record what each notification actually did.
 *
 * The reference logs an email failure to the console and tells nobody, so a
 * lead can sit in the CRM looking handled when the customer never heard
 * anything. Writing the outcome onto the row makes that visible.
 *
 * It is best-effort by design: failing to record that an email failed must
 * not itself become an error the visitor sees.
 */
export async function recordEmailStatus(
  leadId: string,
  statuses: { admin: EmailStatus; customer: EmailStatus },
): Promise<void> {
  if (!isDatabaseConfigured()) return;
  try {
    await getDb()
      .from("leads")
      .update({
        admin_email_status: statuses.admin,
        customer_email_status: statuses.customer,
      })
      .eq("id", leadId);
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
    await getDb()
      .from("lead_events")
      .insert([{ lead_id: leadId, actor, event, detail: detail ?? null }]);
  } catch (error) {
    console.error("[leads] could not record event:", error);
  }
}
