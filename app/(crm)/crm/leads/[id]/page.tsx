import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { StatusBadge } from "@/components/crm/chrome";
import { CrmLayout } from "@/components/crm/sidebar";
import {
  CancelBookingControl,
  ConfirmBookingControl,
  EditLeadForm,
} from "@/components/crm/booking-controls";
import { formatMoney } from "@/components/crm/dashboard-panels";
import { commissionOf } from "@/lib/crm/leads";
import { NotesControl, StatusControl } from "@/components/crm/lead-controls";
import { requireCrmUser } from "@/lib/crm/auth";
import { csrfTokenFor } from "@/lib/crm/session";
import { effectiveStatus, getLead } from "@/lib/crm/leads";
import { formatPhone } from "@/lib/quote/phone";

/**
 * One lead, in full.
 *
 * A server component: the record is fetched after `requireCrmUser()` and
 * rendered on the server, so the browser gets markup rather than a database
 * key and a query. An unauthenticated request never reaches the fetch —
 * `requireCrmUser()` redirects, and `redirect()` throws.
 *
 * The customer's details are shown and not editable here. Stage B is
 * read-plus-workflow: a status, and notes nobody outside this page sees.
 * Editing what the customer actually wrote is a Stage C decision, and doing
 * it without an audit trail and a reason field would make the `lead_events`
 * history less trustworthy than no editing at all.
 */


function when(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Rome",
  });
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-6 gap-y-1 border-b border-border py-3 last:border-b-0 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]">
      <dt className="type-label text-muted-foreground">{label}</dt>
      <dd className="type-small text-foreground">{children}</dd>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-border bg-surface p-6 sm:p-7">
      <h2 className="font-heading type-h3 text-foreground">{title}</h2>
      <dl className="mt-5">{children}</dl>
    </section>
  );
}

export default async function CrmLeadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Force request-time rendering before anything reads the session cookie.
  // With `cacheComponents` this page is partially prerendered, and without
  // this the cookie is read while the shell is being produced — where there
  // is no request and so no cookie. The symptom is specific and misleading:
  // a signed-in administrator is bounced to the login page by this route
  // alone, while /crm works, because /crm already does this.
  await connection();

  const user = await requireCrmUser();
  // Bound to this session, so it cannot be lifted into another one.
  const csrf = await csrfTokenFor(user.id);
  const { id } = await params;

  const result = await getLead(id);
  if (!result) notFound();

  const { lead, events } = result;
  const derived = effectiveStatus(lead);

  return (
    <CrmLayout active="leads" username={user.username}>
        <Link
          href="/crm/leads"
          className="inline-flex items-center gap-2 type-small text-muted-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          ← All leads
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-heading type-h2 text-foreground">{lead.full_name}</h1>
            <p className="mt-2 type-small text-muted-foreground">
              Received {when(lead.created_at)} · {lead.source_form} ·{" "}
              {lead.locale.toUpperCase()}
            </p>
          </div>
          <StatusBadge status={derived} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
          <div className="space-y-6">
            <Panel title="Contact">
              <Row label="Name">{lead.full_name}</Row>
              <Row label="Email">
                <a
                  href={`mailto:${lead.email}`}
                  className="underline decoration-border-strong underline-offset-4 hover:decoration-current"
                >
                  {lead.email}
                </a>
              </Row>
              <Row label="Phone">
                <a
                  href={`tel:${lead.phone_e164}`}
                  className="font-mono underline decoration-border-strong underline-offset-4 hover:decoration-current"
                >
                  {formatPhone({ e164: lead.phone_e164 })}
                </a>
              </Row>
              <Row label="Country">
                {lead.phone_country} ({lead.phone_calling_code})
              </Row>
              <Row label="National number">
                <span className="font-mono">{lead.phone_national}</span>
              </Row>
              <Row label="E.164">
                <span className="font-mono">{lead.phone_e164}</span>
              </Row>
            </Panel>

            <Panel title="Outbound journey">
              <Row label="Service">{lead.service_type ?? "—"}</Row>
              <Row label="Pickup">{lead.pickup}</Row>
              <Row label="Drop-off">{lead.dropoff}</Row>
              <Row label="Date and time">{when(lead.pickup_at)}</Row>
              <Row label="As submitted">
                <span className="font-mono">{lead.pickup_at_local}</span>
              </Row>
              <Row label="Travel reference">{lead.travel_reference ?? "—"}</Row>
            </Panel>

            {lead.has_return ? (
              <Panel title="Return journey">
                <Row label="Pickup">{lead.return_pickup ?? "—"}</Row>
                <Row label="Drop-off">{lead.return_dropoff ?? "—"}</Row>
                <Row label="Date and time">{when(lead.return_at)}</Row>
                <Row label="Travel reference">{lead.return_travel_reference ?? "—"}</Row>
              </Panel>
            ) : null}

            <Panel title="Party and luggage">
              <Row label="Adults">{lead.adults}</Row>
              <Row label="Children">{lead.children}</Row>
              <Row label="Children's ages">{lead.child_ages ?? "—"}</Row>
              <Row label="Total passengers">{lead.passengers}</Row>
              <Row label="Hold luggage">{lead.luggage_hold}</Row>
              <Row label="Cabin luggage">{lead.luggage_cabin}</Row>
            </Panel>

            {lead.customer_message ? (
              <section className="rounded-lg border border-border bg-surface p-6 sm:p-7">
                <h2 className="font-heading type-h3 text-foreground">
                  What the customer wrote
                </h2>
                <p className="mt-4 max-w-[68ch] whitespace-pre-wrap type-body text-muted-foreground">
                  {lead.customer_message}
                </p>
              </section>
            ) : null}

            <section className="rounded-lg border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-heading type-h3 text-foreground">Edit</h2>
              <p className="mt-1.5 type-caption text-muted-foreground">
                Times are Rome local and are converted to UTC on save, so a
                journey in July keeps the right hour across the summer-time
                change.
              </p>
              <div className="mt-5">
                <EditLeadForm lead={lead} csrf={csrf} />
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-lg border border-border-strong bg-surface p-6">
              <h2 className="font-heading type-h3 text-foreground">Booking</h2>
              <dl className="mt-4">
                <Row label="Reference">
                  <span className="font-mono">{lead.booking_reference ?? "—"}</span>
                </Row>
                <Row label="Confirmed">{lead.confirmed_at ? when(lead.confirmed_at) : "—"}</Row>
                {lead.cancelled_at ? (
                  <Row label="Cancelled">{when(lead.cancelled_at)}</Row>
                ) : null}
                {lead.cancellation_reason ? (
                  <Row label="Reason">{lead.cancellation_reason}</Row>
                ) : null}
                <Row label="Quoted">{formatMoney(lead.quoted_amount_cents, lead.currency)}</Row>
                <Row label="Customer paid">{formatMoney(lead.customer_paid_cents, lead.currency)}</Row>
                <Row label="Supplier cost">{formatMoney(lead.supplier_cost_cents, lead.currency)}</Row>
                <Row label="Commission">{formatMoney(commissionOf(lead), lead.currency)}</Row>
                <Row label="Payment">{lead.payment_status}</Row>
              </dl>
              <div className="mt-5 space-y-4">
                <ConfirmBookingControl lead={lead} csrf={csrf} />
                <CancelBookingControl lead={lead} csrf={csrf} />
              </div>
            </section>

            <section className="rounded-lg border border-border-strong bg-surface p-6">
              <StatusControl
                id={lead.id}
                status={lead.status}
                derived={derived}
                csrf={csrf}
              />
            </section>

            <section className="rounded-lg border border-border-strong bg-surface p-6">
              <NotesControl id={lead.id} notes={lead.admin_notes ?? ""} csrf={csrf} />
            </section>

            <section className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-heading type-h3 text-foreground">Notifications</h2>
              <dl className="mt-4">
                <Row label="To the business">{lead.admin_email_status}</Row>
                <Row label="To the customer">{lead.customer_email_status}</Row>
              </dl>
              <p className="mt-4 type-caption text-muted-foreground">
                A lead is saved before either email is attempted, so{" "}
                <span className="font-mono">failed</span> here means the lead
                is intact and the message is not.
              </p>
            </section>

            <section className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-heading type-h3 text-foreground">History</h2>
              {events.length === 0 ? (
                <p className="mt-4 type-caption text-muted-foreground">
                  Nothing recorded yet.
                </p>
              ) : (
                <ol className="mt-4 space-y-3">
                  {events.map((event) => (
                    <li key={event.id} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                      <p className="type-small text-foreground">
                        {event.event.replace(/_/g, " ")}
                      </p>
                      <p className="mt-0.5 type-caption text-muted-foreground">
                        {when(event.created_at)} · {event.actor}
                      </p>
                      {event.detail ? (
                        <p className="mt-1 font-mono type-caption text-muted-foreground">
                          {JSON.stringify(event.detail)}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </aside>
        </div>
    </CrmLayout>
  );
}
