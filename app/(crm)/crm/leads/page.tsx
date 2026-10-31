import Link from "next/link";
import { connection } from "next/server";
import { Container } from "@/components/site/container";
import { CrmSetupNotice, StatusBadge } from "@/components/crm/chrome";
import { CrmLayout } from "@/components/crm/sidebar";
import { formatMoney, formatWhen } from "@/components/crm/dashboard-panels";
import { isCrmConfigured, missingCrmConfig, requireCrmUser } from "@/lib/crm/auth";
import {
  effectiveStatus,
  leadCounts,
  leadSources,
  listLeads,
  PAGE_SIZE,
  type LeadQuery,
} from "@/lib/crm/leads";
import { isDatabaseConfigured } from "@/lib/db/d1";
import { formatPhone } from "@/lib/quote/phone";
import { PAYMENT_LABELS, STATUS_LABELS, type LeadStatus, type PaymentStatus } from "@/lib/leads/types";
import { cn } from "cn";

/**
 * Every lead, filtered.
 *
 * ── Filtering lives in the URL ────────────────────────────────────────────
 * Status, search, date, source and payment are search params rather than
 * client state, so a filtered view can be linked, bookmarked and reloaded —
 * and the filtering happens in SQLite over an index rather than in the
 * browser over an array of every lead ever taken.
 *
 * ── Pagination, which the reference does not have ─────────────────────────
 * It renders every row. Fine at a few hundred, not at ten thousand.
 */

const statusTabs: (LeadStatus | "all")[] = [
  "all",
  "pending",
  "quoted",
  "awaiting_customer",
  "confirmed",
  "completed",
  "cancelled",
];

function queryString(base: LeadQuery, overrides: Partial<LeadQuery>): string {
  const merged = { ...base, ...overrides };
  const params = new URLSearchParams();
  if (merged.search) params.set("q", merged.search);
  if (merged.status && merged.status !== "all") params.set("status", merged.status);
  if (merged.date) params.set("date", merged.date);
  if (merged.source) params.set("source", merged.source);
  if (merged.payment && merged.payment !== "all") params.set("payment", merged.payment);
  if (merged.page && merged.page > 1) params.set("page", String(merged.page));
  const s = params.toString();
  return s ? `?${s}` : "";
}

export default async function CrmLeadsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await connection();

  if (!isCrmConfigured() || !isDatabaseConfigured()) {
    const missing = [
      ...missingCrmConfig(),
      !isDatabaseConfigured() && "DB (D1 binding in wrangler.jsonc)",
    ].filter((value): value is string => Boolean(value));
    return (
      <main id="main" className="min-h-screen bg-surface-sunken py-20">
        <Container size="content">
          <CrmSetupNotice missing={missing} />
        </Container>
      </main>
    );
  }

  const user = await requireCrmUser();

  const params = await searchParams;
  const one = (key: string) => {
    const v = params[key];
    return Array.isArray(v) ? v[0] : v;
  };

  const rawStatus = one("status");
  const rawPayment = one("payment");
  const query: LeadQuery = {
    search: one("q") ?? "",
    status: (statusTabs.includes(rawStatus as LeadStatus) ? rawStatus : "all") as
      | LeadStatus
      | "all",
    date: one("date") ?? "",
    source: one("source") ?? "",
    payment: (["unpaid", "partial", "paid", "refunded"].includes(rawPayment ?? "")
      ? rawPayment
      : "all") as PaymentStatus | "all",
    page: Number(one("page") ?? "1") || 1,
  };

  const [{ rows, total, page, pages }, counts, sources] = await Promise.all([
    listLeads(query),
    leadCounts(),
    leadSources(),
  ]);

  const now = new Date();
  const filtered = query.status !== "all" || query.search || query.date || query.source ||
    query.payment !== "all";

  return (
    <CrmLayout active="leads" username={user.username}>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="font-heading type-h2 text-foreground">Leads &amp; bookings</h1>
        <p className="type-small text-muted-foreground">
          {total} {total === 1 ? "lead" : "leads"}
          {filtered ? " matching" : ""}
        </p>
      </div>

      {/* ── Filters, a plain GET form so they live in the URL ─────────── */}
      <form method="get" className="mt-7 rounded-lg border border-border bg-surface p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,11rem)_minmax(0,11rem)_minmax(0,11rem)_auto] lg:items-end">
          <label className="block">
            <span className="block type-label text-muted-foreground">Search</span>
            <input
              type="search"
              name="q"
              defaultValue={query.search}
              placeholder="Name, email, phone, pickup or drop-off"
              className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </label>
          <label className="block">
            <span className="block type-label text-muted-foreground">Travel date</span>
            <input
              type="date"
              name="date"
              defaultValue={query.date}
              className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </label>
          <label className="block">
            <span className="block type-label text-muted-foreground">Source</span>
            <select
              name="source"
              defaultValue={query.source}
              className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <option value="">Any source</option>
              {sources.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block type-label text-muted-foreground">Payment</span>
            <select
              name="payment"
              defaultValue={query.payment === "all" ? "" : query.payment}
              className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <option value="">Any</option>
              {Object.entries(PAYMENT_LABELS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>
          <div className="flex gap-3">
            {query.status !== "all" ? (
              <input type="hidden" name="status" value={query.status} />
            ) : null}
            <button
              type="submit"
              className="inline-flex min-h-11 cursor-pointer items-center rounded-md bg-accent px-5 type-small font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Apply
            </button>
            {filtered ? (
              <Link
                href="/crm/leads"
                className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-4 type-small text-foreground transition-colors hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Clear
              </Link>
            ) : null}
          </div>
        </div>
      </form>

      {/* ── Status tabs ──────────────────────────────────────────────── */}
      <nav aria-label="Filter by status" className="mt-6 flex flex-wrap gap-2">
        {statusTabs.map((status) => {
          const active = query.status === status;
          const label = status === "all" ? "All" : STATUS_LABELS[status];
          return (
            <Link
              key={status}
              href={`/crm/leads${queryString(query, { status, page: 1 })}`}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-9 items-center gap-2 rounded-md border px-3.5 type-small transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                active
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border-strong bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
              <span className={cn("type-caption", active ? "opacity-80" : "text-muted-foreground")}>
                {counts[status] ?? 0}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ── The table ────────────────────────────────────────────────── */}
      <div className="mt-7 overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="w-full min-w-[62rem] border-collapse">
          <caption className="sr-only">Quotation requests, newest first</caption>
          <thead>
            <tr className="border-b border-border text-left">
              {["Received", "Customer", "Journey", "Travelling", "Reference", "Quoted", "Status"].map((h) => (
                <th key={h} scope="col" className="px-4 py-3 type-label text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-14 text-center type-body text-muted-foreground">
                  No leads match this view.
                </td>
              </tr>
            ) : (
              rows.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-b-0 align-top">
                  <td className="px-4 py-4 type-caption text-muted-foreground">
                    {formatWhen(lead.created_at)}
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      href={`/crm/leads/${lead.id}`}
                      className="block font-heading type-h3 text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {lead.full_name}
                    </Link>
                    <span className="mt-1 block type-caption text-muted-foreground">
                      {lead.email}
                    </span>
                    <span className="block font-mono type-caption text-muted-foreground">
                      {formatPhone({ e164: lead.phone_e164 })}
                    </span>
                  </td>
                  <td className="max-w-[20rem] px-4 py-4">
                    <span className="block type-small text-foreground">
                      {lead.pickup} → {lead.dropoff}
                    </span>
                    <span className="mt-1 block type-caption text-muted-foreground">
                      {formatWhen(lead.pickup_at)}
                      {lead.has_return ? " · return" : ""}
                    </span>
                  </td>
                  <td className="px-4 py-4 type-caption text-muted-foreground">
                    {lead.adults}a {lead.children}c
                    <br />
                    {lead.luggage_hold}h {lead.luggage_cabin}c bags
                  </td>
                  <td className="px-4 py-4 font-mono type-caption text-muted-foreground">
                    {lead.booking_reference ?? "—"}
                  </td>
                  <td className="px-4 py-4 type-caption text-foreground">
                    {formatMoney(lead.quoted_amount_cents, lead.currency)}
                    <span className="mt-1 block text-muted-foreground">
                      {PAYMENT_LABELS[lead.payment_status] ?? lead.payment_status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={effectiveStatus(lead, now)} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ───────────────────────────────────────────────── */}
      {pages > 1 ? (
        <nav
          aria-label="Pages"
          className="mt-6 flex items-center justify-between gap-4 type-small text-muted-foreground"
        >
          <span>
            Page {page} of {pages} · {PAGE_SIZE} a page
          </span>
          <span className="flex gap-3">
            {page > 1 ? (
              <Link
                href={`/crm/leads${queryString(query, { page: page - 1 })}`}
                className="inline-flex min-h-9 items-center rounded-md border border-border-strong px-3.5 text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Previous
              </Link>
            ) : null}
            {page < pages ? (
              <Link
                href={`/crm/leads${queryString(query, { page: page + 1 })}`}
                className="inline-flex min-h-9 items-center rounded-md border border-border-strong px-3.5 text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Next
              </Link>
            ) : null}
          </span>
        </nav>
      ) : null}
    </CrmLayout>
  );
}
