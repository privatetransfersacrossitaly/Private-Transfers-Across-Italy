"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSessionClient, isCrmConfigured, requireCrmActor } from "@/lib/crm/auth";
import { setLeadNotes, setLeadStatus } from "@/lib/crm/leads";
import type { CrmActionState } from "@/lib/crm/action-state";
import type { LeadStatus } from "@/lib/leads/types";

/**
 * The CRM's server actions.
 *
 * ── Every one of these authorizes before it does anything ─────────────────
 * The mutations delegate to `lib/crm/leads.ts`, whose functions call
 * `requireCrmActor()` as their first statement — before the service-role
 * client is created, let alone used. The sign-in and sign-out actions are
 * the two exceptions, for the obvious reason, and neither of them touches a
 * lead.
 *
 * This is the part of the reference CRM that is missing entirely: there,
 * `deleteBookingAction`, `confirmBookingAction` and `updateBookingAction`
 * take the service-role key immediately and never ask who is calling. A
 * server action is reachable by POST and an action id is not a secret.
 *
 * ── Why errors here are vague ─────────────────────────────────────────────
 * An unauthorised caller is told "Not authorised." and nothing else — not
 * whether the lead exists, not whether the id was well formed, not whether
 * the database is configured. Any of those would be a small oracle.
 */

// `CrmActionState` and `initialCrmActionState` live in
// `lib/crm/action-state.ts`: a "use server" module may export async
// functions and nothing else.

/* ── Session ───────────────────────────────────────────────────────────── */

export async function signInAction(
  _previous: CrmActionState,
  formData: FormData,
): Promise<CrmActionState> {
  if (!isCrmConfigured()) {
    return { ok: false, message: "The CRM is not configured for this deployment." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) {
    return { ok: false, message: "Enter an email address and a password." };
  }

  const supabase = await createSessionClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Deliberately uniform: a caller learns nothing about whether the
    // address exists, is allow-listed, or merely has the wrong password.
    console.warn("[crm] sign-in refused");
    return { ok: false, message: "Those details were not accepted." };
  }

  // Signing in is not the same as being allowed in. If the address is not
  // allow-listed the session is ended again immediately, so a Supabase
  // account on this project does not become CRM access.
  const { data } = await supabase.auth.getUser();
  const allowed = (process.env.CRM_ALLOWED_EMAILS ?? "")
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);

  if (!data.user?.email || !allowed.includes(data.user.email.toLowerCase())) {
    await supabase.auth.signOut();
    console.warn("[crm] sign-in by a non-allow-listed address refused");
    return { ok: false, message: "Those details were not accepted." };
  }

  redirect("/crm");
}

export async function signOutAction(): Promise<void> {
  const supabase = await createSessionClient();
  await supabase.auth.signOut();
  redirect("/crm/login");
}

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
  // First statement. Throws if the caller is not an allow-listed CRM user.
  await requireCrmActor();

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
  await requireCrmActor();

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
