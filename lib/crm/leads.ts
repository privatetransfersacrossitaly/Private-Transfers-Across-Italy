import "server-only";
import { all, first, isDatabaseConfigured, newId, nowIso, run } from "@/lib/db/d1";
import { requireCrmActor, requireCrmUser } from "@/lib/crm/auth";
import { STATUS_LABELS, type LeadStatus, type PaymentStatus } from "@/lib/leads/types";

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

  // Added by migration 0003. Every one is nullable except the two with
  // database defaults, so a lead created before the migration reads exactly
  // as it did before — no backfill, no special case in the application.
  booking_reference: string | null;
  confirmed_at: string | null;
  cancelled_at: string | null;
  cancellation_reason: string | null;
  currency: string;
  quoted_amount_cents: number | null;
  customer_paid_cents: number | null;
  supplier_cost_cents: number | null;
  commission_cents: number | null;
  payment_status: PaymentStatus;
};

/**
 * Commission, as the dashboard should show it.
 *
 * `commission_cents` NULL means "derive it"; a value means it was agreed and
 * must not be recomputed. Returning null rather than 0 when there is nothing
 * to go on matters: 0 is a real commission and "unknown" is not, and a report
 * that averages them together is wrong in a way nobody notices.
 */
export function commissionOf(lead: LeadRow): number | null {
  if (lead.commission_cents !== null) return lead.commission_cents;
  if (lead.quoted_amount_cents === null || lead.supplier_cost_cents === null) {
    return null;
  }
  return lead.quoted_amount_cents - lead.supplier_cost_cents;
}

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
  /** `source_form`, exactly as stored. Reused rather than a new column. */
  source?: string;
  payment?: PaymentStatus | "all";
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
  const offset = (page - 1) * PAGE_SIZE;

  // Built as a WHERE clause with positional bindings. Nothing is concatenated
  // into the SQL but the clause skeleton itself: every value the visitor
  // supplies goes through `params` and is bound by D1, so a search term
  // cannot become syntax.
  const where: string[] = [];
  const params: unknown[] = [];

  // `completed` is derived rather than stored, so it cannot be a column
  // filter. Confirmed rows are fetched and narrowed below.
  if (query.status && query.status !== "all" && query.status !== "completed") {
    params.push(query.status);
    where.push(`status = ?${params.length}`);
  } else if (query.status === "completed") {
    params.push("confirmed");
    where.push(`status = ?${params.length}`);
  }

  if (query.date) {
    params.push(`${query.date}T00:00:00Z`, `${query.date}T23:59:59Z`);
    where.push(`pickup_at >= ?${params.length - 1} AND pickup_at <= ?${params.length}`);
  }

  if (query.source) {
    params.push(query.source);
    where.push(`source_form = ?${params.length}`);
  }

  if (query.payment && query.payment !== "all") {
    params.push(query.payment);
    where.push(`payment_status = ?${params.length}`);
  }

  const term = (query.search ?? "").trim();
  if (term) {
    // SQLite's LIKE is case-insensitive for ASCII only, so an Italian name
    // with an accent would not match a differently-cased query. lower() on
    // both sides fixes the common case; it costs the index on these columns,
    // which is acceptable because search is the one query a human waits for
    // deliberately. The `%` and `_` wildcards are escaped so a term
    // containing them cannot widen the match.
    const safe = term.replace(/[\\%_]/g, (ch) => `\\${ch}`).toLowerCase();
    params.push(`%${safe}%`);
    const n = params.length;
    where.push(
      "(" +
        [
          "full_name",
          "email",
          "phone_e164",
          "phone_national",
          "pickup",
          "dropoff",
        ]
          .map((column) => `lower(${column}) LIKE ?${n} ESCAPE '\\'`)
          .join(" OR ") +
        ")",
    );
  }

  const clause = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const now = new Date();
  let rows: LeadRow[];
  let total: number;

  try {
    const counted = await first<{ n: number }>(
      `SELECT COUNT(*) AS n FROM leads ${clause}`,
      params,
    );
    total = counted?.n ?? 0;
    rows = await all<LeadRow>(
      `SELECT * FROM leads ${clause} ORDER BY created_at DESC LIMIT ?${params.length + 1} OFFSET ?${params.length + 2}`,
      [...params, PAGE_SIZE, offset],
    );
  } catch (error) {
    console.error(
      "[crm] list failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return { rows: [], total: 0, page, pages: 1 };
  }

  // Narrow the derived statuses after the query, since neither can be
  // expressed as a column filter.
  if (query.status === "completed") {
    rows = rows.filter((row) => effectiveStatus(row, now) === "completed");
  } else if (query.status === "confirmed") {
    rows = rows.filter((row) => effectiveStatus(row, now) === "confirmed");
  }

  return { rows, total, page, pages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

/** One lead, with its history. */
export async function getLead(
  id: string,
): Promise<{ lead: LeadRow; events: LeadEventRow[] } | null> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return null;

  try {
    const lead = await first<LeadRow>("SELECT * FROM leads WHERE id = ?1", [id]);
    if (!lead) return null;

    const events = await all<LeadEventRow>(
      "SELECT * FROM lead_events WHERE lead_id = ?1 ORDER BY created_at DESC",
      [id],
    );
    return { lead, events };
  } catch (error) {
    console.error(
      "[crm] lead fetch failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return null;
  }
}

/** Counts for the status filter, so the tabs can show them. */
export async function leadCounts(): Promise<Record<string, number>> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return {};

  let data: LeadRow[];
  try {
    data = await all<LeadRow>(
      "SELECT status, pickup_at, return_at, has_return FROM leads",
    );
  } catch (error) {
    console.error(
      "[crm] counts failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return {};
  }

  const now = new Date();
  // Seeded with every status so a tab with no leads shows 0 rather than
  // vanishing. Derived from the shared list, so adding a status to the type
  // cannot leave a tab silently uncounted here.
  const counts: Record<string, number> = { all: data.length };
  for (const status of Object.keys(STATUS_LABELS)) counts[status] = 0;
  for (const row of data) {
    const status = effectiveStatus(row, now);
    counts[status] = (counts[status] ?? 0) + 1;
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

  try {
    const before = await first<{ status: string }>(
      "SELECT status FROM leads WHERE id = ?1",
      [id],
    );
    // No row means nothing to change. Reporting success would tell a caller
    // probing ids that this one exists.
    if (!before) return { ok: false, error: "failed" };

    const changed = await run("UPDATE leads SET status = ?1 WHERE id = ?2", [
      status,
      id,
    ]);
    if (changed === 0) return { ok: false, error: "failed" };

    await run(
      "INSERT INTO lead_events (id, lead_id, created_at, actor, event, detail) " +
        "VALUES (?1, ?2, ?3, ?4, 'status_changed', ?5)",
      [
        newId(),
        id,
        nowIso(),
        actor.username,
        JSON.stringify({ from: before.status, to: status }),
      ],
    );
    return { ok: true };
  } catch (error) {
    console.error(
      "[crm] status update failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return { ok: false, error: "failed" };
  }
}

/** Replace a lead's internal notes. Customer-facing fields are untouched. */
export async function setLeadNotes(
  id: string,
  notes: string,
): Promise<{ ok: boolean; error?: string }> {
  const actor = await requireCrmActor();
  if (!isDatabaseConfigured()) return { ok: false, error: "not_configured" };

  const trimmed = notes.trim().slice(0, 4000);

  try {
    const changed = await run(
      "UPDATE leads SET admin_notes = ?1 WHERE id = ?2",
      [trimmed || null, id],
    );
    if (changed === 0) return { ok: false, error: "failed" };

    await run(
      "INSERT INTO lead_events (id, lead_id, created_at, actor, event, detail) " +
        "VALUES (?1, ?2, ?3, ?4, 'notes_updated', NULL)",
      [newId(), id, nowIso(), actor.username],
    );
    return { ok: true };
  } catch (error) {
    console.error(
      "[crm] notes update failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return { ok: false, error: "failed" };
  }
}

/* ── Dashboard ──────────────────────────────────────────────────────────── */

export type DashboardStats = {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
  quoted: number;
  awaitingCustomer: number;
};

/**
 * The statistic cards, counted from the database.
 *
 * Nothing here is hard-coded or cached: the numbers are whatever the rows say
 * at the moment the dashboard renders, so changing a status changes the cards
 * on the next load with nothing to invalidate.
 *
 * `confirmed` and `completed` cannot be counted in SQL, because `completed`
 * is derived from the trip date rather than stored. The confirmed rows are
 * fetched — three small columns, not the whole table — and split in memory.
 * At this volume that is cheaper than the alternative, and it keeps one
 * definition of "completed" instead of two that can disagree.
 */
export async function dashboardStats(): Promise<DashboardStats> {
  await requireCrmUser();
  const empty: DashboardStats = {
    total: 0, pending: 0, confirmed: 0, completed: 0,
    cancelled: 0, quoted: 0, awaitingCustomer: 0,
  };
  if (!isDatabaseConfigured()) return empty;

  try {
    const counts = await all<{ status: LeadStatus; n: number }>(
      "SELECT status, COUNT(*) AS n FROM leads GROUP BY status",
    );
    const by = new Map(counts.map((r) => [r.status, r.n]));
    const confirmedRows = await all<LeadRow>(
      "SELECT status, pickup_at, return_at, has_return FROM leads WHERE status = 'confirmed'",
    );
    const now = new Date();
    let completed = 0;
    for (const row of confirmedRows) {
      if (effectiveStatus(row, now) === "completed") completed += 1;
    }
    const confirmedStored = by.get("confirmed") ?? 0;
    return {
      total: counts.reduce((sum, r) => sum + r.n, 0),
      pending: by.get("pending") ?? 0,
      quoted: by.get("quoted") ?? 0,
      awaitingCustomer: by.get("awaiting_customer") ?? 0,
      confirmed: confirmedStored - completed,
      completed,
      cancelled: by.get("cancelled") ?? 0,
    };
  } catch (error) {
    console.error(
      "[crm] stats failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return empty;
  }
}

/**
 * Confirmed pickups in the next seven days, soonest first.
 *
 * Bounded at both ends on purpose. Without the lower bound a journey that
 * happened yesterday would sit at the top of "upcoming" forever; without the
 * upper bound the panel becomes the whole future and stops being a week's
 * work. Uses the `(status, pickup_at)` index added by 0003.
 */
export async function weeklyTransfers(limit = 20): Promise<LeadRow[]> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return [];

  const now = new Date();
  const until = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  try {
    return await all<LeadRow>(
      `SELECT * FROM leads
        WHERE status = 'confirmed' AND pickup_at >= ?1 AND pickup_at <= ?2
        ORDER BY pickup_at ASC
        LIMIT ?3`,
      [now.toISOString(), until.toISOString(), limit],
    );
  } catch (error) {
    console.error(
      "[crm] weekly transfers failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return [];
  }
}

export type ActivityRow = LeadEventRow & {
  lead_id: string;
  lead_name: string | null;
  booking_reference: string | null;
};

/**
 * The activity log, across every lead.
 *
 * Built on `lead_events`, which has been written on every status and notes
 * change since the CRM existed — so this surfaces history that was already
 * being recorded rather than starting a new log from today. The join carries
 * the customer name and booking reference so a line reads on its own without
 * a second query per row.
 */
export async function recentActivity(limit = 25): Promise<ActivityRow[]> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return [];

  try {
    return await all<ActivityRow>(
      `SELECT e.id, e.lead_id, e.created_at, e.actor, e.event, e.detail,
              l.full_name AS lead_name, l.booking_reference
         FROM lead_events e
         LEFT JOIN leads l ON l.id = e.lead_id
        ORDER BY e.created_at DESC
        LIMIT ?1`,
      [limit],
    );
  } catch (error) {
    console.error(
      "[crm] activity failed:",
      error instanceof Error ? error.message : "unknown",
    );
    return [];
  }
}

/** The distinct sources present, for the filter dropdown. */
export async function leadSources(): Promise<string[]> {
  await requireCrmUser();
  if (!isDatabaseConfigured()) return [];
  try {
    const rows = await all<{ source_form: string }>(
      "SELECT DISTINCT source_form FROM leads ORDER BY source_form",
    );
    return rows.map((r) => r.source_form).filter(Boolean);
  } catch {
    return [];
  }
}
