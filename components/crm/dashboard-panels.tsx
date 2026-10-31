import Link from "next/link";
import { StatusBadge } from "@/components/crm/chrome";
import {
  commissionOf,
  effectiveStatus,
  type ActivityRow,
  type DashboardStats,
  type LeadRow,
} from "@/lib/crm/leads";
import { STATUS_LABELS } from "@/lib/leads/types";
import { cn } from "cn";

/**
 * The dashboard's three panels.
 *
 * Every number here comes from a D1 query at request time. There are no
 * placeholder figures and nothing is cached — the cards and the database
 * cannot disagree, because the cards are the database.
 */

export function formatMoney(cents: number | null, currency: string): string {
  if (cents === null) return "—";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency || "EUR",
  }).format(cents / 100);
}

export function formatWhen(iso: string | null): string {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
    timeZone: "Europe/Rome",
  });
}

/* ── Statistic cards ───────────────────────────────────────────────────── */

export function StatCards({ stats }: { stats: DashboardStats }) {
  const cards = [
    { label: "Total enquiries", value: stats.total, href: "/crm/leads", tone: "neutral" },
    { label: "Pending", value: stats.pending, href: "/crm/leads?status=pending", tone: "pending" },
    { label: "Quoted", value: stats.quoted, href: "/crm/leads?status=quoted", tone: "pending" },
    { label: "Confirmed & upcoming", value: stats.confirmed, href: "/crm/leads?status=confirmed", tone: "good" },
    { label: "Completed", value: stats.completed, href: "/crm/leads?status=completed", tone: "good" },
    { label: "Cancelled", value: stats.cancelled, href: "/crm/leads?status=cancelled", tone: "bad" },
  ] as const;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.label}
          href={card.href}
          className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <p className="type-label text-muted-foreground">{card.label}</p>
          <p
            className={cn(
              "mt-3 font-heading text-[2rem] leading-none",
              card.tone === "good" && "text-success",
              card.tone === "bad" && "text-accent-ink",
              card.tone !== "good" && card.tone !== "bad" && "text-foreground",
            )}
          >
            {card.value}
          </p>
        </Link>
      ))}
    </div>
  );
}

/* ── Weekly transfers ──────────────────────────────────────────────────── */

export function WeeklyTransfers({ rows }: { rows: LeadRow[] }) {
  return (
    <section className="mt-8 rounded-lg border border-border bg-surface">
      <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border px-5 py-4">
        <h2 className="font-heading type-h3 text-foreground">This week</h2>
        <p className="type-caption text-muted-foreground">
          Confirmed pickups in the next 7 days
        </p>
      </header>

      {rows.length === 0 ? (
        <p className="px-5 py-10 text-center type-small text-muted-foreground">
          No confirmed transfers in the next seven days.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse">
            <caption className="sr-only">Confirmed transfers this week</caption>
            <thead>
              <tr className="border-b border-border text-left">
                {["Pickup", "Customer", "Journey", "Reference", "Status"].map((h) => (
                  <th key={h} scope="col" className="px-5 py-3 type-label text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-b-0 align-top">
                  <td className="px-5 py-4 type-caption text-foreground">
                    {formatWhen(lead.pickup_at)}
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/crm/leads/${lead.id}`}
                      className="type-small text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {lead.full_name}
                    </Link>
                  </td>
                  <td className="max-w-[20rem] px-5 py-4 type-caption text-muted-foreground">
                    {lead.pickup} → {lead.dropoff}
                  </td>
                  <td className="px-5 py-4 font-mono type-caption text-muted-foreground">
                    {lead.booking_reference ?? "—"}
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={effectiveStatus(lead)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

/* ── Activity log ──────────────────────────────────────────────────────── */

/** Turns a stored event into a sentence. */
function describe(row: ActivityRow): string {
  let detail: Record<string, unknown> | null = null;
  try {
    detail = typeof row.detail === "string" ? JSON.parse(row.detail) : row.detail;
  } catch {
    detail = null;
  }

  switch (row.event) {
    case "created":
      return "Enquiry received";
    case "status_changed": {
      const to = detail?.to as string | undefined;
      const label = to && to in STATUS_LABELS
        ? STATUS_LABELS[to as keyof typeof STATUS_LABELS]
        : to;
      return label ? `Status set to ${label}` : "Status changed";
    }
    case "notes_updated":
      return "Internal notes updated";
    case "lead_edited": {
      const changed = detail?.changed as Record<string, unknown> | undefined;
      const count = changed ? Object.keys(changed).length : 0;
      return count ? `Details edited (${count} field${count === 1 ? "" : "s"})` : "Details edited";
    }
    case "booking_confirmed":
      return `Booking confirmed${detail?.reference ? ` — ${detail.reference}` : ""}`;
    case "booking_cancelled":
      return `Booking cancelled${detail?.reason ? ` — ${detail.reason}` : ""}`;
    default:
      return row.event.replace(/_/g, " ");
  }
}

export function ActivityLog({ rows }: { rows: ActivityRow[] }) {
  return (
    <section className="mt-8 rounded-lg border border-border bg-surface">
      <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border px-5 py-4">
        <h2 className="font-heading type-h3 text-foreground">Recent activity</h2>
        <p className="type-caption text-muted-foreground">
          Every change, oldest kept
        </p>
      </header>

      {rows.length === 0 ? (
        <p className="px-5 py-10 text-center type-small text-muted-foreground">
          Nothing recorded yet.
        </p>
      ) : (
        <ol className="divide-y divide-border">
          {rows.map((row) => (
            <li key={row.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-5 py-3.5">
              <span className="type-caption text-muted-foreground tabular-nums">
                {formatWhen(row.created_at)}
              </span>
              <span className="type-small text-foreground">{describe(row)}</span>
              {row.lead_name ? (
                <Link
                  href={`/crm/leads/${row.lead_id}`}
                  className="type-caption text-accent-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {row.lead_name}
                </Link>
              ) : null}
              <span className="ml-auto type-caption text-muted-foreground">{row.actor}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

/** Money summary, shown only when any financial figure has been recorded. */
export function MoneySummary({ rows }: { rows: LeadRow[] }) {
  const quoted = rows.reduce((sum, r) => sum + (r.quoted_amount_cents ?? 0), 0);
  const paid = rows.reduce((sum, r) => sum + (r.customer_paid_cents ?? 0), 0);
  const supplier = rows.reduce((sum, r) => sum + (r.supplier_cost_cents ?? 0), 0);
  const commission = rows.reduce((sum, r) => sum + (commissionOf(r) ?? 0), 0);
  if (quoted === 0 && paid === 0 && supplier === 0) return null;

  const currency = rows[0]?.currency ?? "EUR";
  const figures = [
    { label: "Quoted", value: quoted },
    { label: "Received", value: paid },
    { label: "Supplier cost", value: supplier },
    { label: "Commission", value: commission },
  ];

  return (
    <section className="mt-8 rounded-lg border border-border bg-surface p-5">
      <h2 className="font-heading type-h3 text-foreground">Confirmed this week</h2>
      <p className="mt-1 type-caption text-muted-foreground">
        From recorded figures only. Quoted is an offer; received is money that arrived.
      </p>
      <dl className="mt-4 grid gap-4 sm:grid-cols-4">
        {figures.map((f) => (
          <div key={f.label}>
            <dt className="type-label text-muted-foreground">{f.label}</dt>
            <dd className="mt-1 font-heading type-h3 text-foreground">
              {formatMoney(f.value, currency)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
