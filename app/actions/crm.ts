"use server";

import { revalidatePath } from "next/cache";
import { requireCrmActorWithCsrf } from "@/lib/crm/auth";
import { setLeadNotes, setLeadStatus } from "@/lib/crm/leads";
import { cancelBooking, confirmBooking, updateLeadDetails } from "@/lib/crm/booking";
import type { CrmActionState } from "@/lib/crm/action-state";
import { SETTABLE_STATUSES, type LeadStatus } from "@/lib/leads/types";

/**
 * The CRM's server actions.
 *
 * ── Every one of these authorizes before it does anything ─────────────────
 * The mutations delegate to `lib/crm/leads.ts`, whose functions call
 * `requireCrmActor()` as their first statement — before the database binding
 * is touched, let alone read. Every action in this file is a mutation; there
 * is no sign-in action here: signing in and out live in
 * `app/actions/crm-auth.ts`, which is a different concern from mutating a
 * lead and has its own rate limiting.
 *
 * This is the part of the reference CRM that is missing entirely: there,
 * `deleteBookingAction`, `confirmBookingAction` and `updateBookingAction`
 * take the service-role key immediately and never ask who is calling. A
 * server action is reachable by POST and an action id is not a secret.
 *
 * ── CSRF ──────────────────────────────────────────────────────────────────
 * Each action takes a `csrf` field and `requireCrmActorWithCsrf` checks it
 * against an HMAC of the session id. Next already verifies the Origin header
 * on server actions, which blocks the classic cross-site POST on its own;
 * this is the second lock, and it is the one that still holds if a future
 * Next release relaxes that check or a proxy rewrites the header.
 *
 * ── Why errors here are vague ─────────────────────────────────────────────
 * An unauthorised caller is told "Not authorised." and nothing else — not
 * whether the lead exists, not whether the id was well formed, not whether
 * the database is configured. Any of those would be a small oracle.
 */

// `CrmActionState` and `initialCrmActionState` live in
// `lib/crm/action-state.ts`: a "use server" module may export async
// functions and nothing else.

/* ── Leads ─────────────────────────────────────────────────────────────── */

// `completed` is derived from the trip date, so it is shown but never set.
// The rest come from lib/leads/types.ts so this list cannot drift from the
// database CHECK constraint that migration 0004 installed.
const settableStatuses: readonly LeadStatus[] = SETTABLE_STATUSES;

export async function updateLeadStatusAction(
  _previous: CrmActionState,
  formData: FormData,
): Promise<CrmActionState> {
  // First statement. Throws unless the caller holds a valid session AND a
  // CSRF token belonging to it.
  await requireCrmActorWithCsrf(formData);

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as Exclude<LeadStatus, "completed">;

  if (!id) return { ok: false, message: "No lead was named." };
  if (!settableStatuses.includes(status)) {
    // `completed` is derived from the trip date and is not settable here.
    return { ok: false, message: "That is not a status that can be set." };
  }

  const result = await setLeadStatus(id, status);
  if (!result.ok) {
    return {
      ok: false,
      message:
        result.error === "not_configured"
          ? "The database is not configured for this deployment."
          : "The status could not be changed.",
    };
  }

  revalidatePath("/crm");
  revalidatePath(`/crm/leads/${id}`);
  return { ok: true, message: "Status updated." };
}

export async function updateLeadNotesAction(
  _previous: CrmActionState,
  formData: FormData,
): Promise<CrmActionState> {
  await requireCrmActorWithCsrf(formData);

  const id = String(formData.get("id") ?? "");
  const notes = String(formData.get("notes") ?? "");
  if (!id) return { ok: false, message: "No lead was named." };

  const result = await setLeadNotes(id, notes);
  if (!result.ok) {
    return {
      ok: false,
      message:
        result.error === "not_configured"
          ? "The database is not configured for this deployment."
          : "The notes could not be saved.",
    };
  }

  revalidatePath(`/crm/leads/${id}`);
  return { ok: true, message: "Notes saved." };
}

/* ── Editing, confirming, cancelling ───────────────────────────────────── */

/**
 * Money arrives from a form as text a person typed: "125", "125.50",
 * "€125,50", or nothing at all. Stored as integer cents.
 *
 * Empty means "not recorded" and becomes null, which is deliberately not the
 * same as zero — a booking with no quote yet and one quoted at nothing are
 * different facts, and a revenue report must not average them together.
 */
function parseMoneyCents(raw: FormDataEntryValue | null): number | null {
  const text = String(raw ?? "").trim();
  if (!text) return null;
  // Accept both decimal separators; strip currency symbols and spaces.
  const cleaned = text.replace(/[^\d,.-]/g, "").replace(",", ".");
  const value = Number(cleaned);
  if (!Number.isFinite(value)) return null;
  return Math.round(value * 100);
}

function parseCount(raw: FormDataEntryValue | null, max: number): number {
  const value = Number(String(raw ?? "").trim());
  if (!Number.isInteger(value) || value < 0 || value > max) return 0;
  return value;
}

function text(raw: FormDataEntryValue | null, max = 2000): string {
  return String(raw ?? "").trim().slice(0, max);
}

function optional(raw: FormDataEntryValue | null, max = 2000): string | null {
  const value = text(raw, max);
  return value || null;
}

export async function updateLeadDetailsAction(
  _previous: CrmActionState,
  formData: FormData,
): Promise<CrmActionState> {
  await requireCrmActorWithCsrf(formData);

  const id = text(formData.get("id"), 64);
  if (!id) return { ok: false, message: "No lead was named." };

  const fullName = text(formData.get("full_name"), 190);
  const email = text(formData.get("email"), 190);
  if (!fullName || !email) {
    return { ok: false, message: "Name and email cannot be empty." };
  }

  const adults = Math.max(1, parseCount(formData.get("adults"), 99));
  const paymentStatus = text(formData.get("payment_status"), 20);
  if (!["unpaid", "partial", "paid", "refunded"].includes(paymentStatus)) {
    return { ok: false, message: "That is not a payment status." };
  }

  const result = await updateLeadDetails(id, {
    full_name: fullName,
    email,
    phone_e164: text(formData.get("phone_e164"), 32),
    pickup: text(formData.get("pickup"), 300),
    dropoff: text(formData.get("dropoff"), 300),
    pickup_at_local: text(formData.get("pickup_at_local"), 20),
    travel_reference: optional(formData.get("travel_reference"), 60),
    return_pickup: optional(formData.get("return_pickup"), 300),
    return_dropoff: optional(formData.get("return_dropoff"), 300),
    return_at_local: optional(formData.get("return_at_local"), 20),
    return_travel_reference: optional(formData.get("return_travel_reference"), 60),
    adults,
    children: parseCount(formData.get("children"), 99),
    child_ages: optional(formData.get("child_ages"), 120),
    luggage_hold: parseCount(formData.get("luggage_hold"), 99),
    luggage_cabin: parseCount(formData.get("luggage_cabin"), 99),
    customer_message: optional(formData.get("customer_message"), 4000),
    quoted_amount_cents: parseMoneyCents(formData.get("quoted_amount")),
    supplier_cost_cents: parseMoneyCents(formData.get("supplier_cost")),
    commission_cents: parseMoneyCents(formData.get("commission")),
    customer_paid_cents: parseMoneyCents(formData.get("customer_paid")),
    payment_status: paymentStatus,
    currency: (text(formData.get("currency"), 3) || "EUR").toUpperCase(),
  });

  if (!result.ok) {
    return {
      ok: false,
      message:
        result.error === "not_found"
          ? "That lead no longer exists."
          : result.error === "not_configured"
            ? "The database is not configured for this deployment."
            : "Those details could not be saved. Check the date and time format.",
    };
  }

  revalidatePath("/crm");
  revalidatePath("/crm/leads");
  revalidatePath(`/crm/leads/${id}`);
  return { ok: true, message: "Changes saved." };
}

export async function confirmBookingAction(
  _previous: CrmActionState,
  formData: FormData,
): Promise<CrmActionState> {
  await requireCrmActorWithCsrf(formData);

  const id = text(formData.get("id"), 64);
  if (!id) return { ok: false, message: "No lead was named." };

  const result = await confirmBooking(id, {
    bookingReference: text(formData.get("booking_reference"), 40),
    quotedAmountCents: parseMoneyCents(formData.get("quoted_amount")),
    supplierCostCents: parseMoneyCents(formData.get("supplier_cost")),
    currency: (text(formData.get("currency"), 3) || "EUR").toUpperCase(),
    note: text(formData.get("note"), 1000),
  });

  if (!result.ok) {
    return {
      ok: false,
      message:
        result.error === "conflict"
          ? "That booking reference is already in use, or the booking is cancelled."
          : result.error === "not_found"
            ? "That lead no longer exists."
            : "The booking could not be confirmed.",
    };
  }

  revalidatePath("/crm");
  revalidatePath("/crm/leads");
  revalidatePath(`/crm/leads/${id}`);
  return { ok: true, message: `Confirmed. Reference ${result.reference}.` };
}

export async function cancelBookingAction(
  _previous: CrmActionState,
  formData: FormData,
): Promise<CrmActionState> {
  await requireCrmActorWithCsrf(formData);

  const id = text(formData.get("id"), 64);
  if (!id) return { ok: false, message: "No lead was named." };

  const reason = text(formData.get("reason"), 1000);
  if (!reason) {
    // Enforced here rather than in the database: a cancellation must always
    // be recordable, but a person doing it by hand should say why.
    return { ok: false, message: "A cancellation reason is required." };
  }

  const result = await cancelBooking(id, reason);
  if (!result.ok) {
    return {
      ok: false,
      message:
        result.error === "not_found"
          ? "That lead no longer exists."
          : "The booking could not be cancelled.",
    };
  }

  revalidatePath("/crm");
  revalidatePath("/crm/leads");
  revalidatePath(`/crm/leads/${id}`);
  return { ok: true, message: "Booking cancelled. Nothing was deleted." };
}
