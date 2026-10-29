# Stage A — Get a Quote form and independent lead backend

**Date:** 28 October 2026
**Scope:** Stage A only. No CRM, no invoices, no driver management, no dispatch.
**Status:** code complete and verified. **Not yet operable** — it needs a Supabase project and a Resend account, which only you can create. Until then the form validates and tells the visitor plainly that nothing was sent.

---

## 1. Independence from Italy Taxi Service

| | |
|---|---|
| Shared database | **none** — new schema, `supabase/migrations/001_create_leads.sql`, in this repo |
| Shared API endpoint | **none** — `lib/quote/transport.ts` **deleted** |
| Shared email | **none** — own Resend key, own sender, own admin address |
| Shared secrets | **none** — every variable renamed and documented in `.env.example` |
| Code copied | none. The reference was read, not imported. |

**Verified: no call to the old endpoint remains.** A grep for `quote/transport`, `deliverQuoteRequest`, `quoteSource`, `QUOTE_ENDPOINT_URL` and `QUOTE_ENDPOINT_TOKEN` across `app/`, `components/`, `lib/` and `content/` returns nothing. The `.env.example` block describing the Italy Taxi Service intake has been replaced.

The reference project was not modified. Its working tree holds two files changed on 26 October, before this work began.

---

## 2. Files

### Created (16)

| File | Purpose |
|---|---|
| `supabase/migrations/001_create_leads.sql` | `leads` + `lead_events`, RLS on with no policy |
| `lib/db/supabase.ts` | service-role client, `server-only` |
| `lib/leads/types.ts` | `NewLead`, `CreatedLead`, statuses |
| `lib/leads/create-lead.ts` | the one place a lead is written |
| `lib/leads/notify.ts` | the two emails, bilingual |
| `lib/mail/mailer.ts` | Resend transport, one retry, never throws |
| `lib/quote/phone.ts` | the only module importing `libphonenumber-js` |
| `lib/quote/idempotency.ts` | duplicate-submission key |
| `lib/quote/rate-limit.ts` | database-backed, per email address |
| `content/quote/countries.ts` | 245 countries, ISO + calling code + EN/IT names |
| `content/quote/{types,en,it,index}.ts` | the page's copy in both languages |
| `components/quote/fields.tsx` | input, select, textarea, checkbox, honeypot |
| `components/quote/quote-form.tsx` | the form |
| `components/quote/quote-page.tsx` | the page composition |
| `app/(en)/get-a-quote/page.tsx` | English route |
| `app/(it)/it/richiedi-preventivo/page.tsx` | Italian route |

Plus `docs/dependency-libphonenumber-js.md` and this report.

### Modified (7)

| File | Change |
|---|---|
| `app/actions/quote.ts` | rewritten against the independent backend |
| `lib/quote/schema.ts` | `phone` → `phoneCountry` + `phoneNational`; two new error codes; dropped the obsolete `source` field |
| `lib/site.ts` | **`quotePathFor` now returns the form** instead of the homepage anchor |
| `lib/routes.ts` | new `quote` page id, published, priority 0.9 |
| `content/page-names.ts` | breadcrumb label in both locales |
| `content/navigation.ts` | nav label; footer "Request a quote" repointed at the form |
| `.env.example` | old integration removed, new variables documented |

### Deleted (1)

`lib/quote/transport.ts` — the Italy Taxi Service intake client.

### Dependencies added (3)

`libphonenumber-js@1.13.15` (documented and verified separately), `@supabase/supabase-js@^2.97.0`, `resend@^6.12.2`.

---

## 3. The form

`/get-a-quote` and `/it/richiedi-preventivo`.

Every field the reference collects, in a comparable order, plus the fields this site's schema already defined:

| Reference field | Here |
|---|---|
| `name`, `email` | same |
| `phone` (one free-text box) | **`phoneCountry` + `phoneNational`** |
| `datetime` | `date` + `time` (separate controls, clearer on mobile) |
| `pickup`, `dropoff` | same |
| `flight_number` | `travelReference` |
| `passengers` (1–8 dropdown) | `adults` + `children` + `childAges` |
| `luggage` (one dropdown) | `holdBags` + `cabinBags` |
| `return_trip` + 4 return fields | `tripType` + the same 4 |
| — | `service` (8 types) |
| — | `notes` |

### What was reproduced

One-page form; `useActionState` submission; pending button; return-trip checkbox revealing a second set of fields; the "copy the outbound details across, reversed" shortcut; a success message that says a request was received and a quotation will follow, never that anything is booked.

### What was improved, and why

| | Reference | Here |
|---|---|---|
| Validation feedback | one sentence for the whole form | **per-field**, with `aria-invalid` and `aria-describedby` |
| Server validation | form path checks 4 fields; email and phone unchecked | **every field, one validator, both paths** |
| Duplicate submission | public form sends no idempotency key — a double click makes two leads | **key on both paths** |
| Spam | none on the public form | honeypot + database-backed rate limit |
| Email failure | logged to a console; nobody told | **recorded on the lead** (`admin_email_status`, `customer_email_status`) |
| Customer email language | English only | **the language the form was filled in** |
| On success | whole form replaced; a second journey needs a page reload | outcome above the form; form stays; explicit "Send another journey" |
| After a validation error | — | **values survive** (see §6) |

---

## 4. Phone — the improvement you asked for

### Why it is a country selector, not a bare calling-code box

A calling code does not identify a country. **+1** covers the United States, Canada and twenty Caribbean territories; **+44** covers the United Kingdom, Jersey, Guernsey and the Isle of Man; **+7** covers Russia and Kazakhstan. The validator needs an ISO country to judge a national number, so a bare calling code makes correct validation impossible for a large part of the world.

The control therefore picks a **country and shows its code** — "Italy +39", "Italia +39" — and the lead stores both.

### Stored

| Column | Example |
|---|---|
| `phone_country` | `IT` — what made validation possible |
| `phone_calling_code` | `+39` — what a person dials |
| `phone_national` | `3331234567` — as dialled locally |
| `phone_e164` | `+393331234567` — indexed, for search, deduplication and click-to-call |

### Everywhere else, unchanged

Nothing in this project parsed or formatted a phone number before, so nothing had to change. The 245-country list is generated project data in `content/quote/countries.ts`; `libphonenumber-js` is confined to `lib/quote/phone.ts` and is imported by no other page.

---

## 5. Security and reliability

| Your requirement | How it is met |
|---|---|
| Server-side validation of all fields, including email and phone | `validateQuoteRequest()` runs in the server action. The browser never decides. |
| Reliable idempotency | `idempotencyKeyFor()` hashes email, E.164, both addresses, the datetime, the trip type and a 10-minute bucket. A partial unique index on `idempotency_key` is the real guard; a `23505` is resolved to the existing lead rather than erroring. |
| Spam prevention and rate limiting | Off-screen honeypot (`company`), unreachable by tab or screen reader. Rate limit counted **in the database**, so it is exact however many instances run — the reference's in-memory `Map` is per-instance by its own admission. Keyed on the submitted email, not the IP, because an IP is shared by a hotel or a whole mobile carrier. |
| Privileged credentials server-side only | `lib/db/supabase.ts` and every lead module start with `import "server-only"`. Importing one from a client component is a build error, not a silent key leak. |
| Least-privilege database access | RLS **enabled with no policy at all**, plus `REVOKE ALL … FROM anon, authenticated`. Neither role can read, insert, update or delete a lead. Everything goes through the service role from the server. |
| Email failure must not look like a failed submission | `status: "delivered"` is decided by the database write alone. Emails are sent afterwards and their outcome is written onto the lead. |
| No customer information or internal errors exposed | Failures log a code and a message, never the payload. The visitor sees one of four plain sentences, never a stack trace or a database error. |

Deliberately **not** reproduced: the reference's client-side-only CRM guard, its unauthenticated service-role server actions, and its browser-side reads of the lead table. Those are Stage B's to do properly.

---

## 6. QA results

### Automated checks

| Check | Result |
|---|---|
| `npx tsc --noEmit` | clean |
| `npx eslint .` | clean |
| `npx next build` | **127/127 static pages** (was 125) |
| Automated test suite | **none exists in this project.** No vitest, jest or playwright. **No tests were run.** |

### Page checks — 50 assertions, both routes, all passing

200s, correct `lang`, branded titles, descriptions at 160/166 characters, canonicals, reciprocal `en`/`it`/`x-default` hreflang, **indexable** (`index, follow`), JSON-LD graph exactly `Organization, WebSite, WebPage, BreadcrumbList` with no `FAQPage` and no banned node, one `h1`, all 19 form fields present, phone as two controls, no legacy `phone` field, 245 country options, country labels localised ("Italy +39" / "Italia +39").

Site-wide: both homepages' CTAs now point at the form; **no link anywhere still targets `#request-a-quote`**; both routes are in the sitemap; **all six legal pages remain `published: false`, `noindex, nofollow` and out of the sitemap.**

### Behaviour checks — 30 assertions, both routes, all passing

| | EN | IT |
|---|---|---|
| Empty submit → 10 field-level messages, every required field `aria-invalid` | ✅ | ✅ |
| Invalid national number rejected for the chosen country | ✅ | ✅ |
| Valid national number accepted | ✅ | ✅ |
| Unconfigured backend reported honestly, never as success | ✅ | ✅ |
| **Values survive a failed submission** | ✅ | ✅ |
| Return fields appear on toggle (0 → 5) | ✅ | ✅ |
| `tripType` submits `"return"` when toggled | ✅ | ✅ |
| Swap copies the outbound legs, reversed | ✅ | ✅ |
| No horizontal overflow at 1280 / 768 / 390 / 320 | ✅ | ✅ |

### Two real defects found and fixed during QA

**1. React 19 resets a form after its action settles.** Every uncontrolled field emptied itself the moment validation rejected one of them — the worst possible time to clear a form. Fixed by making every field controlled. A `<select>` needed more: the reset moves `selectedIndex` without React noticing, so the country silently blanked. A `useEffect` now re-syncs any select that drifted from its state.

**2. Horizontal overflow at 1280 px, Italian only (1304 vs 1265).** Traced by hiding candidates one at a time: the aside's `DefinitionList`, which lays term and detail side by side on a fixed 14 rem track. Correct in a full-width band, wrong in a 21 rem column, where the detail had nowhere to wrap. Italian country names are longer, which is why only that locale tripped it. Fixed in the quote page by stacking the list locally. **`DefinitionList` itself was not modified** — it is shared with many pages that use it correctly.

One earlier "failure" was my test's fault, not the page's: `autoComplete` appears in the serialised HTML with its React casing, which browsers parse as `autocomplete` because HTML attribute names are case-insensitive. Verified in the DOM: `input.autocomplete === "off"`, `select.autocomplete === "tel-country-code"`.

---

## 7. What you must do before this works

Nothing below can be done from the repository.

1. **Create a new Supabase project** for this site. Do not reuse the Italy Taxi Service one.
2. **Run `supabase/migrations/001_create_leads.sql`** in its SQL editor.
3. **Set** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
4. **Create a Resend account**, verify a sending domain on it, and set `RESEND_API_KEY`, `LEAD_FROM_EMAIL`, `LEAD_ADMIN_EMAIL`, optionally `LEAD_REPLY_TO_EMAIL`.
5. Submit one real request and confirm the row appears and both emails arrive.

Until step 3, a valid submission returns "This form is not live yet" / "Questo modulo non è ancora attivo" and stores nothing. Until step 4, a lead is saved and both emails are recorded as `skipped`.

---

## 8. Open items

| Item | Status |
|---|---|
| Your instruction message was **truncated at "Keep"** | anything after that word was not received |
| Supabase project, Resend account | yours to create — §7 |
| CRM (login, list, detail, search, filters, statuses) | **Stage B**, not started |
| Invoices, drivers, dispatch | deferred by your decision; recorded as optional future phases |
| Contact form | not in scope; this site has none |
| Timezone assumption | `pickup_at` converts the typed wall-clock time as **Europe/Rome**, since the journeys are in Italy. Flagged because it is an assumption, not something you specified. |
| Italian CRM | proposed English-only; confirm at Stage B |

Nothing was committed, pushed or deployed.
