import Link from "next/link";
import { CrmHeader, CrmSetupNotice, CrmShell, StatusBadge } from "@/components/crm/chrome";
import { Container } from "@/components/site/container";
import { isCrmConfigured, requireCrmUser } from "@/lib/crm/auth";
import { effectiveStatus, leadCounts, listLeads, PAGE_SIZE, type LeadQuery } from "@/lib/crm/leads";
import { isDatabaseConfigured } from "@/lib/db/d1";
import { formatPhone } from "@/lib/quote/phone";
import type { LeadStatus } from "@/lib/leads/types";
import { connection } from "next/server";
import { cn } from "cn";

/**
 * The lead list.
 *
 * ── A server component, deliberately ──────────────────────────────────────
 * The reference CRM is one 1360-line client component that fetches the whole
 * `bookings` table into the browser with the anon key. Here the query runs
 * on the server, after `requireCrmUser()`, and the browser receives rendered
 * rows and no database key at all. There is nothing for a visitor's devtools
 * to re-query.
 *
 * ── Filtering is in the URL ───────────────────────────────────────────────
 * Status, search and date are search params rather than client state, so a
 * filtered view can be linked, bookmarked and reloaded — and the filtering
 * happens in Postgres rather than over an array of every lead ever taken.
 *
 * ── Pagination, which the reference does not have ─────────────────────────
 * It renders every row. That is fine at a few hundred and is not at ten
 * thousand. Twenty-five a page, counted by the database.
 */


const statuses: (LeadStatus | "all")[] = [
  "all",
  "pending",
  "confirmed",
  "completed",
  "cancelled",
];

function formatWhen(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Rome",
  });
}

function queryString(base: LeadQuery, overrides: Partial<LeadQuery>): string {
  const merged = { ...base, ...overrides };
  const params = new URLSearchParams();
  if (merged.search) params.set("q", merged.search);
  if (merged.status && merged.status !== "all") params.set("status", merged.status);
  if (merged.date) params.set("date", merged.date);
  if (merged.page && merged.page > 1) params.set("page", String(merged.page));
  const s = params.toString();
  return s ? `?${s}` : "";
}

export default async function CrmLeadsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Read configuration at request time, not build time: whether the CRM is
  // configured is a property of the running deployment. Without this the
  // branch below freezes at build time and a site built before Access was
  // configured keeps saying "not configured" afterwards.
  await connection();

  // Unconfigured deployments get an explanation, not a crash — and no lead
  // data is involved, so this is safe to render to anyone who reaches it.
  if (!isCrmConfigured() || !isDatabaseConfigured()) {
    const missing = [
      !process.env.CF_ACCESS_TEAM_DOMAIN && "CF_ACCESS_TEAM_DOMAIN",
      !process.env.CF_ACCESS_AUD && "CF_ACCESS_AUD",
      !process.env.CRM_ALLOWED_EMAILS && "CRM_ALLOWED_EMAILS",
      // Not an environment variable: the D1 binding comes from
      // wrangler.jsonc, so its absence means the Worker, not the secrets.
      !isDatabaseConfigured() && "DB (D1 binding in wrangler.jsonc)",
    ].filter((v): v is string => Boolean(v));
    return (
      <main id="main" className="min-h-screen bg-surface-sunken py-20">
        <Container size="content">
          <CrmSetupNotice missing={missing} />
        </Container>
      </main>
    );
  }

  // Second guard. The middleware has already turned away anyone without a
  // session, and this repeats it so a misconfigured matcher cannot expose
  // the page.
  const user = await requireCrmUser();

  const params = await searchParams;
  const one = (key: string) => {
    const v = params[key];
    return Array.isArray(v) ? v[0] : v;
  };

  const query: LeadQuery = {
    search: one("q") ?? "",
    status: (statuses.includes(one("status") as LeadStatus) ? one("status") : "all") as
      | LeadStatus
      | "all",
    date: one("date") ?? "",
    page: Number(one("page") ?? "1") || 1,
  };

  const [{ rows, total, page, pages }, counts] = await Promise.all([
    listLeads(query),
    leadCounts(),
  ]);

  const now = new Date();

  return (
    <>
      <CrmHeader email={user.email} />
      <CrmShell>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="font-heading type-h2 text-foreground">Leads</h1>
          <p className="type-small text-muted-foreground">
            {total} {total === 1 ? "lead" : "leads"}
            {query.status !== "all" || query.search || query.date ? " matching" : ""}
          </p>
        </div>

        {/* ── Filters, as a plain GET form so they live in the URL ─────── */}
        <form method="get" className="mt-7 rounded-lg border border-border bg-surface p-5">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,12rem)_auto] sm:items-end">
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
              {query.search || query.date ? (
                <Link
                  href={`/crm${queryString(query, { search: "", date: "", page: 1 })}`}
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
          {statuses.map((status) => {
            const active = query.status === status;
            return (
              <Link
                key={status}
                href={`/crm${queryString(query, { status, page: 1 })}`}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-9 items-center gap-2 rounded-md border px-3.5 type-small capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border-strong bg-surface text-muted-foreground hover:text-foreground",
                )}
              >
                {status}
                <span className={cn("type-caption", active ? "opacity-80" : "text-muted-foreground")}>
                  {counts[status] ?? 0}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* ── The table ────────────────────────────────────────────────── */}
        <div className="mt-7 overflow-x-auto rounded-lg border border-border bg-surface">
          <table className="w-full min-w-[56rem] border-collapse">
            <caption className="sr-only">
              Quotation requests, newest first
            </caption>
            <thead>
              <tr className="border-b border-border text-left">
                {["Received", "Customer", "Journey", "Travelling", "Status", "Email"].map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 type-label text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-14 text-center type-body text-muted-foreground">
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
                    <td className="max-w-[22rem] px-4 py-4">
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
                    <td className="px-4 py-4">
                      <StatusBadge status={effectiveStatus(lead, now)} />
                    </td>
                    <td className="px-4 py-4 type-caption text-muted-foreground">
                      <span className="block">admin: {lead.admin_email_status}</span>
                      <span className="block">cust: {lead.customer_email_status}</span>
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
                  href={`/crm${queryString(query, { page: page - 1 })}`}
                  className="inline-flex min-h-9 items-center rounded-md border border-border-strong px-3.5 text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Previous
                </Link>
              ) : null}
              {page < pages ? (
                <Link
                  href={`/crm${queryString(query, { page: page + 1 })}`}
                  className="inline-flex min-h-9 items-center rounded-md border border-border-strong px-3.5 text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Next
                </Link>
              ) : null}
            </span>
          </nav>
        ) : null}
      </CrmShell>
    </>
  );
}
