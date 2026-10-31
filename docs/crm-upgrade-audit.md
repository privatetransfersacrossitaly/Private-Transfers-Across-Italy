# CRM upgrade — Phase 1 audit

Both codebases inspected 30 October 2026. **No files changed.**

- Target: `D:\Mine Projects\rome-transfers` — Next 16.4.2, Cloudflare Workers, D1, OpenNext.
- Reference: `D:\Mine Projects\italytaxi` — Next 16.1.6, Supabase Postgres, Vercel.

I read the reference's implementation rather than its buttons, as you asked. That
changed the plan in three places.

---

## 1. What the reference CRM actually is

| File | Lines |
|---|---|
| `src/app/(site)/crm/page.tsx` | 1,360 |
| `src/app/actions/crm.ts` | 715 |
| `src/components/crm/InvoicesPanel.tsx` | 723 |
| `src/components/crm/AddLeadModal.tsx` | 471 |
| `src/components/crm/EditLeadModal.tsx` | 407 |
| `src/components/crm/DriversPanel.tsx` | 329 |
| `src/components/crm/DispatchDriversModal.tsx` | 240 |
| **Total** | **~4,265** |

It is a **single page with four tabs** — bookings, contacts, drivers, invoices —
not a seven-section sidebar application. Tables: `bookings`, `contacts`,
`drivers`, `driver_contacts`, `invoices`, plus a private storage bucket.

## 2. Three findings that change the plan

### 2.1 The reference has no server-side authorisation at all

Every server action takes the Supabase **service-role key** immediately and
asks nobody who is calling:

```
deleteBookingAction      0 auth checks
confirmBookingAction     0 auth checks
updateBookingAction      0 auth checks
deleteContactAction      0 auth checks
createManualLeadAction   0 auth checks
sendClientEmailAction    0 auth checks
```

`deleteBookingAction` is seven lines: open the service client, `.delete()`,
revalidate. A server action is reachable by POST and an action id is not a
secret, so anyone who finds one can delete any booking in that database.

The CRM page defends itself with a `useEffect` calling
`supabase.auth.getSession()` in the browser. That is a redirect, not a boundary:
it runs after the page has been sent and does nothing to a non-browser client.

**Consequence for this project:** I will replicate the reference's *features*
and none of its authorisation model. Every action here keeps
`requireCrmActorWithCsrf()` as its first statement, as the current CRM already
does. This is not a deviation from your brief — your §16 requires exactly this —
but it does mean "match the reference" cannot be taken literally where security
is concerned.

### 2.2 Several capabilities in your brief do not exist in the reference

Verified absent by search, not assumed:

| Brief asks for | In the reference |
|---|---|
| Reports & Analytics (§13) | **Does not exist** — no page, no route, no queries |
| Settings (§3) | **Does not exist** |
| Activity log (§12) | **Does not exist** — no table, no UI |
| Server-generated PDF invoices (§8) | **No PDF library.** A public HTML invoice page with a browser Print button |
| Driver dispatch (§9) | A `wa.me` click-to-chat link opened in a new tab. No API, no delivery confirmation; status is recorded by hand |
| Booking statuses Quoted / Awaiting Customer Confirmation (§5) | Not present — reference has pending/confirmed/cancelled, with **completed derived** from the trip time passing |
| Supplier cost, commission, profit (§5, §13) | Not present in `bookings` |
| Payments table, partial payments, overdue (§8) | Not present — `invoices.payment_status` is a single enum |

So roughly **40% of the brief is new build, not replication.** That is fine, but
it should be priced as new work rather than "copy what exists".

### 2.3 Two reference behaviours conflict with your own rules

- **`deleteBookingAction` permanently deletes.** Your §7 and §18 say cancelled
  bookings must never be deleted and history must be preserved. I will implement
  cancellation as a status change plus an audit record, and **not** port this
  action.
- **Invoices are exposed at a public URL.** `/invoice/[token]` renders client
  name, email, phone, journey and amount to anyone holding the link, with no
  login. Your §16 says to protect invoice downloads and customer data. These are
  incompatible; see Decision 2 below.

## 3. Feature comparison

| Capability | Reference | Private Transfers today | Work needed |
|---|---|---|---|
| Lead list, search, filters | ✅ | ✅ search/status/date + pagination | Extend filters (source) |
| Status tabs with live counts | ✅ | ✅ | — |
| Derived "completed" from trip date | ✅ | ✅ `effectiveStatus` | — |
| Lead detail page | ✅ modal | ✅ full page | — |
| Edit lead (customer, journey, pax, luggage) | ✅ | ❌ status + notes only | **Build** |
| Add lead manually | ✅ | ❌ | **Build** |
| Internal notes | ✅ | ✅ | — |
| Stat cards (5) | ✅ | ❌ counts exist, no cards | **Build** |
| Weekly upcoming transfers | ✅ 7-day | ❌ | **Build** |
| Sidebar navigation | ❌ 4 tabs | ❌ | **Build** |
| Contact messages | ✅ | ❌ no contact form on this site | **Build form + table** |
| Drivers / suppliers | ✅ | ❌ | **Build** |
| Dispatch | ⚠️ WhatsApp link only | ❌ | **Build** |
| Invoices | ✅ | ❌ | **Build** |
| Payments / partial / overdue | ❌ | ❌ | **Build (new)** |
| PDF invoice | ⚠️ browser print | ❌ | **Decision 3** |
| Activity log | ❌ | ⚠️ `lead_events` exists, not surfaced | **Surface + extend** |
| Reports & analytics | ❌ | ❌ | **Build (new)** |
| Settings | ❌ | ❌ | **Build (new)** |
| Quoted price / supplier cost / commission | ❌ | ❌ | **Build (new)** |
| Server-side auth on every action | ❌ **none** | ✅ 3 guards + CSRF + rate limit | Keep |
| Email (Resend) | ✅ | ✅ with honest sent/failed/skipped | Extend |

The current CRM is smaller but is **ahead on the two things that matter most**:
authorisation and honest email status recording. `lead_events` already exists and
is written on every status and notes change — the activity log is largely a
matter of displaying what is already being recorded.

## 4. A hard constraint the reference does not have

The reference runs on Vercel with no bundle ceiling. This project runs on
**Workers Free, where the compressed script limit is 3 MiB.**

The last deploy measured **2,456 KiB gzipped. Headroom is about 616 KiB.**

That is enough for the CRM pages themselves, which are mostly server-rendered
markup. It is **not** comfortably enough for a PDF library: `pdf-lib` is roughly
1 MB uncompressed and would risk pushing the Worker over the limit, at which
point deploys fail outright. This drives Decision 3.

## 5. Proposed database plan

All additive. Nothing drops, renames or retypes an existing column, and
`leads`/`lead_events` keep their current shape so the quote form and existing
data are untouched.

**Migration `0003_crm_operations.sql`**

- `leads` — add nullable columns: `booking_reference`, `quoted_amount`,
  `quoted_currency`, `customer_paid_amount`, `supplier_cost`, `commission`,
  `confirmed_at`, `cancelled_at`, `cancellation_reason`, `source`.
- `leads.status` — widen the allowed set to add `quoted` and
  `awaiting_customer`. Existing values stay valid.
- `drivers` — suppliers and drivers, per your §9 field list.
- `booking_assignments` — links a lead to a driver, per journey leg
  (outbound/return), with agreed price and dispatch status.
- `contact_messages` — for the new contact form.
- `invoices`, `invoice_items`, `payments` — with VAT **nullable and off by
  default**, per your §8.
- `activity_log` — account-wide chronological log. `lead_events` stays as the
  per-lead record and is read into the same view.

Indexes on every column used for filtering or joining. I will show you the full
SQL and run it against a local copy before proposing anything against production.

## 6. Phase plan

Each phase ends with tests and a report, and nothing is deployed without your
approval.

| Phase | Contents |
|---|---|
| **2** | Migration SQL, reviewed and applied locally only |
| **3** | Sidebar shell, dashboard with real stat cards, weekly transfers, activity log view |
| **4** | Lead editing, add-lead, confirmation workflow, cancellation workflow |
| **5** | Drivers, assignments, dispatch |
| **6** | Contact form + messages, invoices, payments |
| **7** | Reports, settings |
| **8** | Security review, full QA, deployment plan |

Phases 3–7 are each a substantial piece of work. The total is larger than the
reference CRM, because roughly 40% of the brief has no counterpart there.

## 7. Decisions I need from you

**1. Contact messages.** This site has no contact form — only the quote form. A
contact messages section needs a form on the public site first. Add one, or skip
§10 for now?

**2. Invoice access.** The reference puts invoices on a public token URL so
customers can open them without logging in. Your §16 says to protect them. Pick
one: public token link (convenient, exposes client details to anyone with the
URL), or CRM-only with invoices emailed as attachments.

**3. PDF generation.** Given the 616 KiB of bundle headroom:
   - **(a)** A print-optimised invoice page and browser "Save as PDF" — what the
     reference actually does, costs nothing, works today.
   - **(b)** A real PDF library in the Worker — risks the 3 MiB Free limit, and
     may force the $5/month Workers Paid plan.
   - **(c)** Workers Paid first, then (b).

**4. Scope order.** If you want something usable sooner, I would do Phase 3 and 4
first — dashboard, editing, confirm and cancel — and treat invoices, drivers and
reports as later phases, rather than delivering everything at once.

**5. VAT.** You are not assumed VAT-registered. Should invoices show a VAT field
at all initially, or stay a simple total until you say otherwise?

## 8. What I will not do

- Port the reference's unauthenticated server actions.
- Port `deleteBookingAction`'s permanent delete.
- Copy the Italy Taxi Service logo, colours or brand.
- Touch `leads`, `lead_events` or the quote form beyond additive columns.
- Deploy, migrate production, or commit without your approval.
