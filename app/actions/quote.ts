"use server";

import { createLead, recordEmailStatus } from "@/lib/leads/create-lead";
import { sendLeadNotifications } from "@/lib/leads/notify";
import type { NewLead } from "@/lib/leads/types";
import { idempotencyKeyFor } from "@/lib/quote/idempotency";
import { checkQuoteRate } from "@/lib/quote/rate-limit";
import {
  validateQuoteRequest,
  type FieldName,
  type RawQuoteInput,
} from "@/lib/quote/schema";
import { initialQuoteState, type QuoteFormState } from "@/lib/quote/state";

/**
 * The one place a quotation request is handled.
 *
 * ── Order of operations, and why it is this order ─────────────────────────
 * 1. Honeypot. Anything that fills a field no human is offered is automated.
 * 2. Read and re-validate on the server. The browser's checks are a
 *    convenience; these are the ones that count.
 * 3. Rate limit — after validation, so a malformed submission costs a
 *    submitter nothing from their allowance and tells them nothing about it.
 * 4. Create the lead, with an idempotency key, so a retry cannot create a
 *    second one.
 * 5. Only then send email, and record what each message did.
 *
 * ── The rule that shapes step 5 ───────────────────────────────────────────
 * Once the row is durably saved, the visitor has succeeded. An email that
 * fails afterwards is the business's problem, not theirs, and must never be
 * reported to them as a failed submission. So `status: "delivered"` is
 * decided by the database write alone; the email outcome is written onto the
 * lead instead, where somebody can act on it.
 *
 * The one thing this will not do is report success for something that did not
 * happen. With no database configured, a valid submission comes back as
 * `not_delivered` and the form says plainly that nothing was sent.
 */

const fields: FieldName[] = [
  "service",
  "tripType",
  "pickup",
  "dropoff",
  "date",
  "time",
  "travelReference",
  "returnPickup",
  "returnDropoff",
  "returnDate",
  "returnTime",
  "returnTravelReference",
  "adults",
  "children",
  "childAges",
  "holdBags",
  "cabinBags",
  "name",
  "email",
  "phoneCountry",
  "phoneNational",
  "notes",
];

/** `"YYYY-MM-DDTHH:MM"` → a real instant, read as Italian local time. */
function toInstant(local: string): Date {
  // Journeys on this site happen in Italy, so the wall-clock time a visitor
  // types is Italian time wherever they are sitting. Storing it as UTC
  // without that offset would put every booking an hour or two out.
  const [date, time] = local.split("T");
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);

  // Europe/Rome is UTC+1, or UTC+2 under summer time. Derive the offset for
  // this particular date rather than assuming one.
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const offsetMinutes = romeOffsetMinutes(new Date(guess));
  return new Date(guess - offsetMinutes * 60_000);
}

/** The Europe/Rome UTC offset, in minutes, on a given instant. */
function romeOffsetMinutes(instant: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    timeZoneName: "longOffset",
  }).formatToParts(instant);
  const name = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT+01:00";
  const match = /GMT([+-])(\d{2}):(\d{2})/.exec(name);
  if (!match) return 60;
  const sign = match[1] === "-" ? -1 : 1;
  return sign * (Number(match[2]) * 60 + Number(match[3]));
}

export async function submitQuoteRequest(
  _previous: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // 1. Honeypot: a field no sighted or screen-reader user is offered.
  const trap = (formData.get("company") as string | null)?.trim();
  if (trap) {
    return { ...initialQuoteState, status: "error", reason: "rejected" };
  }

  // 2. Read and validate on the server.
  const raw: RawQuoteInput = { locale: String(formData.get("locale") ?? "en") };
  for (const field of fields) {
    const value = formData.get(field);
    if (typeof value === "string") raw[field] = value;
  }
  raw.tripType = formData.get("tripType") === "return" ? "return" : "one-way";

  const result = validateQuoteRequest(raw);
  if (!result.ok) {
    return { ...initialQuoteState, status: "invalid", errors: result.errors };
  }

  const request = result.data;
  const submittedAt = new Date().toISOString();

  // 3. Rate limit, on a validated address only.
  const rate = await checkQuoteRate(request.contact.email);
  if (!rate.allowed) {
    return { ...initialQuoteState, status: "error", reason: "rejected" };
  }

  // 4. Create the lead.
  const lead: NewLead = {
    sourceForm: "Get a Quote",
    locale: request.locale,
    serviceType: request.service,
    tripType: request.tripType,
    fullName: request.contact.name,
    email: request.contact.email,
    phone: request.contact.phone,
    outbound: {
      pickup: request.outbound.pickup,
      dropoff: request.outbound.dropoff,
      at: toInstant(request.outbound.datetime),
      atLocal: request.outbound.datetime,
      travelReference: request.outbound.travelReference,
    },
    inbound: request.inbound
      ? {
          pickup: request.inbound.pickup,
          dropoff: request.inbound.dropoff,
          at: toInstant(request.inbound.datetime),
          atLocal: request.inbound.datetime,
          travelReference: request.inbound.travelReference,
        }
      : null,
    adults: request.party.adults,
    children: request.party.children,
    childAges: request.party.childAges,
    luggageHold: request.luggage.hold,
    luggageCabin: request.luggage.cabin,
    customerMessage: request.notes,
    idempotencyKey: idempotencyKeyFor(request),
  };

  let created;
  try {
    created = await createLead(lead);
  } catch (error) {
    console.error("[quote] unexpected failure:", error);
    return { ...initialQuoteState, status: "error", reason: "unreachable" };
  }

  if (!created.ok) {
    return {
      status: "not_delivered",
      errors: {},
      reason: created.reason === "not_configured" ? "not_configured" : "unreachable",
      reference: null,
      submittedAt,
    };
  }

  // 5. The lead is saved. From here the visitor has succeeded whatever
  //    happens next. A deduplicated submission does not re-send the emails.
  //
  //    Wrapped because "whatever happens next" has to be true in both
  //    directions. `send()` already swallows its own failures and
  //    `recordEmailStatus` never throws, so this guards what is left — the
  //    template building — and makes the guarantee structural rather than a
  //    property of code that happens not to throw today. Without it an
  //    unexpected throw here would return `status: "error"` for a lead that
  //    is already in the database: the opposite lie to claiming a send that
  //    did not happen, and the one that makes a visitor submit again.
  if (!created.lead.deduplicated) {
    try {
      const notified = await sendLeadNotifications(lead, created.lead.reference);
      await recordEmailStatus(created.lead.id, notified);
    } catch (error) {
      console.error("[quote] notification step failed after the lead was saved:", error);
      // Conservative: record both as failed rather than guess which got out.
      // Never "sent" — that is the claim this must not make.
      await recordEmailStatus(created.lead.id, { admin: "failed", customer: "failed" });
    }
  }

  return {
    status: "delivered",
    errors: {},
    reason: null,
    reference: created.lead.reference,
    submittedAt,
  };
}
