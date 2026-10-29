import "server-only";
import { getDb, isDatabaseConfigured } from "@/lib/db/supabase";
import { requireCrmActor, requireCrmUser } from "@/lib/crm/auth";
import type { LeadStatus } from "@/lib/leads/types";

/**
 * Every read and write the CRM makes.
 *
 * ── The rule this file holds to ───────────────────────────────────────────
 * No function here obtains the service-role client before it has an
 * authenticated, allow-listed user. The authorization call is the first
 * statement in each one, and it throws rather than returning a flag, so
 * there is no version of "forgot to check the result".
 *
 * That is the specific thing the reference CRM gets wrong: its server
 * actions take the service-role key immediately and never ask who is
 * calling.
 *
 * ── And the one it holds to about the browser ─────────────────────────────
 * Nothing in here runs in a browser. The CRM's pages are server components
 * and its mutations are server actions, so the lead table is never queried
 * from a visitor's machine and no database key is ever sent to one. The
 * reference reads `bookings` straight from the browser with the anon key,
 * which makes its whole data protection a question of whether row-level
 * policies happen to be right.
 */

export type LeadRow = {
  id: string;
  created_at: string;
  updated_at: string;
  source_form: string;
  locale: string;
  status: LeadStatus;
  service_type: string | null;
  trip_type: string;
  full_name: string;
  email: string;
  phone_country: string;
  phone_calling_code: string;
  phone_national: string;
  phone_e164: string;
  pickup: string;
  dropoff: string;
  pickup_at: string;
  pickup_at_local: string;
  travel_reference: string | null;
  has_return: boolean;
  return_pickup: string | null;
  return_dropoff: string | null;
  return_at: string | null;
  return_at_local: string | null;
  return_travel_reference: string | null;
  adults: number;
  children: number;
  child_ages: string | null;
  passengers: number;
  luggage_hold: number;
  luggage_cabin: number;
  customer_message: string | null;
  admin_notes: string | null;
  admin_email_status: string;
  customer_email_status: string;
};

export type LeadEventRow = {
  id: string;
  created_at: string;
  actor: string;
  event: string;
  detail: Record<string, unknown> | null;
};

export type LeadQuery = {
  /** Free text across name, email, phone, and both addresses. */
  search?: string;
  status?: LeadStatus | "all";
  /** A single calendar date, matched against the outbound leg. */
  date?: string;
  page?: number;
};

export const PAGE_SIZE = 25;

export type LeadPage = {
  rows: LeadRow[];
  total: number;
  page: number;
  pages: number;
};

/**
 * `completed` is derived, never stored.
 *
 * A confirmed journey whose last leg is in the past is complete, and
 * deriving that from the date means a booking rolls over on its own with
 * nothing to remember to click. For a return trip the later leg decides,
 * which the reference gets right and is worth copying: using the outbound
 * leg alone silently drops a round trip out of every "upcoming" view the
 * moment the first half is done.
 */
export function effectiveStatus(lead: LeadRow, now: Date = new Date()): LeadStatus {
  if (lead.status !== "confirmed") return lead.status;
  const out = new Date(lead.pickup_at);
  const back = lead.has_return && lead.return_at ? new Date(lead.return_at) : null;
  const last = back && !Number.isNaN(back.getTime()) && back > out ? back : out;
  return !Number.isNaN(last.getTime()) && last < now ? "completed" : "confirmed";
}

/** One page of leads, filtered. Authorised first, always. */
export async function listLeads(query: LeadQuery): Promise<LeadPage> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return { rows: [], total: 0, page: 1, pages: 1 };

  const page = Math.max(1, query.page ?? 1);
  const from = (page - 1) * PAGE_SIZE;

  let request = getDb()
    .from("leads")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  // `completed` is derived rather than stored, so it cannot be a column
  // filter. Confirmed rows are fetched and narrowed below.
  if (query.status && query.status !== "all" && query.status !== "completed") {
    request = request.eq("status", query.status);
  } else if (query.status === "completed") {
    request = request.eq("status", "confirmed");
  }

  if (query.date) {
    request = request
      .gte("pickup_at", `${query.date}T00:00:00Z`)
      .lte("pickup_at", `${query.date}T23:59:59Z`);
  }

  const term = (query.search ?? "").trim();
  if (term) {
    // Escape the characters PostgREST's `or` filter treats as syntax, so a
    // search for "a,b" cannot become two filters.
    const safe = term.replace(/[,()]/g, " ").trim();
    const like = `%${safe}%`;
    request = request.or(
      [
        `full_name.ilike.${like}`,
        `email.ilike.${like}`,
        `phone_e164.ilike.${like}`,
        `phone_national.ilike.${like}`,
        `pickup.ilike.${like}`,
        `dropoff.ilike.${like}`,
      ].join(","),
    );
  }

  const { data, count, error } = await request.range(from, from + PAGE_SIZE - 1);

  if (error) {
    console.error("[crm] list failed:", error.message);
    return { rows: [], total: 0, page, pages: 1 };
  }

  let rows = (data ?? []) as LeadRow[];
  const now = new Date();

  // Narrow the derived statuses after the query, since neither can be
  // expressed as a column filter.
  if (query.status === "completed") {
    rows = rows.filter((row) => effectiveStatus(row, now) === "completed");
  } else if (query.status === "confirmed") {
    rows = rows.filter((row) => effectiveStatus(row, now) === "confirmed");
  }

  const total = count ?? rows.length;
  return { rows, total, page, pages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

/** One lead, with its history. */
export async function getLead(
  id: string,
): Promise<{ lead: LeadRow; events: LeadEventRow[] } | null> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return null;

  const db = getDb();
  const { data, error } = await db.from("leads").select("*").eq("id", id).maybeSingle();
  if (error || !data) return null;

  const { data: events } = await db
    .from("lead_events")
    .select("*")
    .eq("lead_id", id)
    .order("created_at", { ascending: false });

  return { lead: data as LeadRow, events: (events ?? []) as LeadEventRow[] };
}

/** Counts for the status filter, so the tabs can show them. */
export async function leadCounts(): Promise<Record<string, number>> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return {};

  const { data, error } = await getDb().from("leads").select("status,pickup_at,return_at,has_return");
  if (error || !data) return {};

  const now = new Date();
  const counts: Record<string, number> = {
    all: data.length,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  };
  for (const row of data as LeadRow[]) {
    counts[effectiveStatus(row, now)] = (counts[effectiveStatus(row, now)] ?? 0) + 1;
  }
  return counts;
}

/* ── Mutations ─────────────────────────────────────────────────────────── */

/**
 * Change a lead's status.
 *
 * `completed` is not settable: it is derived from the date, and letting it
 * be written by hand would make the two disagree.
 */
export async function setLeadStatus(
  id: string,
  status: Exclude<LeadStatus, "completed">,
): Promise<{ ok: boolean; error?: string }> {
  const actor = await requireCrmActor();
  if (!isDatabaseConfigured()) return { ok: false, error: "not_configured" };

  const db = getDb();
  const { data: before } = await db.from("leads").select("status").eq("id", id).maybeSingle();

  const { error } = await db.from("leads").update({ status }).eq("id", id);
  if (error) {
    console.error("[crm] status update failed:", error.message);
    return { ok: false, error: "failed" };
  }

  await db.from("lead_events").insert([
    {
      lead_id: id,
      actor: actor.email,
      event: "status_changed",
      detail: { from: before?.status ?? null, to: status },
    },
  ]);

  return { ok: true };
}

/** Replace a lead's internal notes. Customer-facing fields are untouched. */
export async function setLeadNotes(
  id: string,
  notes: string,
): Promise<{ ok: boolean; error?: string }> {
  const actor = await requireCrmActor();
  if (!isDatabaseConfigured()) return { ok: false, error: "not_configured" };

  const trimmed = notes.trim().slice(0, 4000);
  const db = getDb();
  const { error } = await db
    .from("leads")
    .update({ admin_notes: trimmed || null })
    .eq("id", id);

  if (error) {
    console.error("[crm] notes update failed:", error.message);
    return { ok: false, error: "failed" };
  }

  await db.from("lead_events").insert([
    { lead_id: id, actor: actor.email, event: "notes_updated", detail: null },
  ]);

  return { ok: true };
}
