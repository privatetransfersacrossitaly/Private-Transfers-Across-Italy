"use server";

import { revalidatePath } from "next/cache";
import { requireCrmActorWithCsrf } from "@/lib/crm/auth";
import { setLeadNotes, setLeadStatus } from "@/lib/crm/leads";
import type { CrmActionState } from "@/lib/crm/action-state";
import type { LeadStatus } from "@/lib/leads/types";

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

const settableStatuses: Exclude<LeadStatus, "completed">[] = [
  "pending",
  "confirmed",
  "cancelled",
];

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
