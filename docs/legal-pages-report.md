# Legal pages — implementation report

**Date:** 28 October 2026
**Scope:** Privacy Policy, Terms and Conditions, Cancellation and Refund Policy, in English and Italian. No CRM, no quote form, no email integration, no new city clusters.

**Status: all six pages are drafts.** They are `published: false` in the route registry, excluded from the sitemap, served with `robots: noindex, nofollow`, and each carries a visible draft notice. None has had legal review.

---

## 1. Files created and modified

### Created (12)

| File | Purpose |
|---|---|
| `content/legal/types.ts` | `LegalContent`, `PolicySection`; three required fields as safeguards |
| `content/legal/privacy.ts` | Privacy Policy, EN + IT, 16 sections each |
| `content/legal/terms.ts` | Terms and Conditions, EN + IT, 18 sections each |
| `content/legal/cancellation.ts` | Cancellation and Refund, EN + IT, 13 sections each |
| `content/legal/index.ts` | `legal = { privacy, terms, cancellation }`, keyed by page id |
| `components/legal/policy-page.tsx` | one long-form layout for all three |
| `app/(en)/privacy-policy/page.tsx` | route |
| `app/(it)/it/privacy/page.tsx` | route |
| `app/(en)/terms-and-conditions/page.tsx` | route |
| `app/(it)/it/termini-e-condizioni/page.tsx` | route |
| `app/(en)/cancellation-and-refund/page.tsx` | route |
| `app/(it)/it/cancellazione-e-rimborsi/page.tsx` | route |

### Modified (6)

| File | Change |
|---|---|
| `lib/routes.ts` | three ids — `privacy`, `terms`, `cancellation` — each `parent: "home"`, **`published: false`**, `priority: 0.3` |
| `content/page-names.ts` | three breadcrumb labels per locale |
| `content/navigation.ts` | `footer.legal` heading in both locales; a new `legal` footer group holding the three pages |
| `content/about/en.ts` | one sentence — removed "or refund policy", added a pointer to the new policy |
| `content/about/it.ts` | the same sentence in Italian |
| `docs/legal-pages-report.md` | this file |

### Not touched

`components/site/*`; every destination, airport, port, station and route page; `app/actions/quote.ts`; `lib/quote/*`; `lib/metadata.ts`; `lib/structured-data.ts`; `.env.example`; environment variables; DNS; hosting. Nothing committed, pushed or deployed.

---

## 2. URLs

| | English | Italian |
|---|---|---|
| Privacy Policy | `/privacy-policy` | `/it/privacy` |
| Terms and Conditions | `/terms-and-conditions` | `/it/termini-e-condizioni` |
| Cancellation and Refund | `/cancellation-and-refund` | `/it/cancellazione-e-rimborsi` |

---

## 3. Design

One shared `policy-page.tsx` rather than three layouts. A policy is read in order by someone hunting one clause, so the page drops the site's usual scanning devices — no alternating tonal bands, no illustration, no call to action. A single column at the reading measure, a numbered contents list that jumps to each section, and the same palette, type scale, container, breadcrumb and footer as everywhere else.

Three required fields in `content/legal/types.ts` carry the uncertainty so it cannot be edited away:

- **`draft`** — renders above everything, in the accent treatment the site reserves for caveats. The pages are not in force and a reader must not be able to miss that.
- **`status`** — state, drafted date, in-force date.
- **`section.pending`** — an individual provision that is not settled, rendered inside its own section as visible customer-readable text.

Missing facts appear as bracketed tokens, `[TO BE CONFIRMED — …]` in English and `[DA CONFERMARE — …]` in Italian. They are deliberately ugly and greppable.

---

## 4. The runtime privacy audit

The Privacy Policy's section 3 is the one part of these pages that rests on evidence rather than on a decision still to be taken, so the method is recorded here.

A production build was served and driven with headless Chrome across `/`, `/about`, `/destinations/rome` and `/it/chi-siamo`:

| Page | Requests | External hosts | Cookies | localStorage | sessionStorage | Service worker |
|---|---|---|---|---|---|---|
| `/` | 21 | **none** | 0 | 0 | 0 | no |
| `/about` | 20 | **none** | 0 | 0 | 0 | no |
| `/destinations/rome` | 21 | **none** | 0 | 0 | 0 | no |
| `/it/chi-siamo` | 20 | **none** | 0 | 0 | 0 | no |

No `Set-Cookie` header on any response. Source scan found no analytics, tag manager, pixel, session recorder, `next/script`, `document.cookie` or storage access, no `middleware.ts` and no `instrumentation.ts`. Fonts are self-hosted by `next/font`; images are local files; the only `<script>` is inline JSON-LD.

There is also no form, no contact address and no telephone number anywhere on the site, so there is no mechanism by which a visitor can transmit personal information. **The site collects nothing today.**

---

## 5. QA results

### Automated checks

| Check | Result |
|---|---|
| `npx tsc --noEmit` | clean |
| `npx eslint .` | clean |
| `npx next build` | **125/125 static pages** (was 119) |
| Automated test suite | **none exists.** No vitest, jest or playwright in this project. **No tests were run.** |

### Page checks — 118 assertions across the six routes, all passing

Every route returns 200 with the correct `<html lang>`, a branded title, a meta description of 145–164 characters, a canonical matching the route, and a reciprocal `en`/`it`/`x-default` hreflang set.

- **`robots: noindex, nofollow`** present on all six.
- **JSON-LD graph is `Organization, WebSite, WebPage, BreadcrumbList`** — no `FAQPage`, because these pages render no questions. No banned node or property.
- Exactly one `h1` per page; section counts 16 / 18 / 13.
- **Every in-page anchor resolves**, and every contents link scrolls to its section (verified in-browser, not just by matching ids).
- The draft notice is present on all six; placeholder tokens are present and visible.
- Each policy links to the other two **and** to About Us, in the correct locale.

### Invented-fact scan

Ten patterns across all six rendered pages: VAT rates, tax/VAT numbers, company suffixes, email addresses, telephone numbers, the name of the other business, a named supervisory authority, a governing-law formula, a compliance claim, a guarantee. **No hits.**

One false positive was found and corrected in the test rather than the pages: the ordinary word "limited" (in "cannot lawfully be removed or limited") matched a company-suffix pattern. The check is now case-sensitive and anchored.

### Responsive

No horizontal overflow on any of the six routes at **1280, 768, 390 or 320** px.

### Site-wide regression

All **114** sitemap entries return 200 — unchanged, because the six new routes are deliberately not in it. Every page in both languages carries the three legal links and the About link in its footer, at the correct localized paths. The six draft routes return 200 when visited directly and appear in no sitemap.

### English/Italian consistency

Same section count and same section order in both languages for each policy; the Italian is written as Italian rather than translated clause by clause. Placeholder tokens appear in matching positions.

---

## 6. Unresolved — owner decisions

Nothing below has been guessed at on the pages.

### 6.1 Legal identity and data controller — **blocking**

Confirmed: an individual operating as a sole trader, established **outside the EU/EEA**. Still needed:

- the individual's name, as it should be published
- the country of establishment
- an address for privacy correspondence

Until these exist the Privacy Policy cannot identify its controller, which is the one thing such a policy must do.

### 6.2 Contact channels — **blocking**

There is no contact channel of any kind on this website. Three are referenced as placeholders and all three need an address: privacy requests, complaints, and cancellations.

### 6.3 Contracting party — **blocking for the Terms**

Confirmed: the transport is provided by **a separate operating business**, so this website is not the carrier. Still needed: who that business is, and whether the customer contracts with it directly or with the website operator. Terms section 13 (responsibility) cannot be completed until this is settled.

The pages do not name any operator, and in particular do not name Italy Taxi Service. That arrangement appears only in `.env.example` and `lib/quote/transport.ts` as a planned lead-delivery integration, and the routes it references do not exist.

### 6.4 Governing law and dispute resolution — **blocking, needs a lawyer**

Not stated anywhere. The combination is awkward and should not be guessed: the owner is established outside the EU/EEA, the journeys are performed in Italy, and many customers will be consumers resident in the EU whose own law commonly follows them regardless of a contractual choice.

### 6.5 Systems — hosting, CRM, email, payment

None is named, because none is confirmed. The policy states that the CRM and email arrangements will be this website's own, independent of any other business, and that neither exists yet. The hosting provider could not be determined from the project at all — there is no `vercel.json`, `netlify.toml`, `Dockerfile` or CI config, and no `output` mode in `next.config.ts`.

### 6.6 Data protection specifics

- **Lawful bases** — not stated. They depend on 6.4.
- **Retention periods** — not set. A reasonable approach is suggested in the policy and explicitly marked as not adopted.
- **International transfer safeguard** — none in place. With the controller outside the EEA this is likely to matter, and the policy says so rather than describing a mechanism that does not exist.
- **Supervisory authority** — not named. Naming the Garante would imply an Italian establishment that has not been stated.

### 6.7 Provisions awaiting legal review

Each is marked on the page where it appears.

| Provision | Where | Why flagged |
|---|---|---|
| 100% cancellation charge within 24 hours | Cancellation §4 | A full-price charge is a significant term; its enforceability and any exceptions (illness, bereavement, cancelled or diverted flight) are unassessed |
| 100% no-show charge | Cancellation §5 | Same question, plus no contact procedure exists for reaching a customer before a booking is treated as a no-show |
| Road-delay provision | Cancellation §7, Terms §11 | The boundary between an excused delay and a failure to provide the service |
| 5-calendar-day evidence deadline | Cancellation §8 | Whether a claim may be declined outright for missing it, and whether an extension must be available |
| Responsibility and liability | Terms §13 | Depends on 6.3 and 6.4 |

### 6.8 Rules with no policy at all

| Question | Status |
|---|---|
| **Waiting time away from airports** — hotels, cruise ports, stations, private addresses | **No rule.** The 60-minute airport rule is **not** extended to them. The pages say the arrangement will be whatever each booking's confirmation states. |
| Diverted or cancelled flights; delayed baggage | **No rule.** Not invented. |
| **Provider cancels or cannot deliver a confirmed transfer** | **No policy.** A recommendation is set out on the page, explicitly labelled *"Recommendation only — not approved, not in force"*: refund any advance payment in full, apply no cancellation or no-show charge, process on the same 5–7 business day basis, all subject to applicable law. **This requires your approval before it becomes policy.** |

### 6.9 Payment

Confirmed: **no payment is collected today.** There is no payment integration in the project. The refund rules are therefore written as the policy that will apply once bookings and payments begin, and every page says so. Before launch you will need to decide how payment is taken and by which party — which also determines whether a payment provider has to be named in the Privacy Policy.

---

## 7. Before these pages go live

1. Supply the facts in 6.1, 6.2 and 6.3.
2. Decide 6.5, 6.6, 6.8 and 6.9.
3. Have a lawyer review the provisions in 6.4 and 6.7.
4. Replace every `[TO BE CONFIRMED]` / `[DA CONFERMARE]` token — `grep -rn "TO BE CONFIRMED\|DA CONFERMARE" content/legal/` lists them.
5. Remove the `draft` notices and the `pending` blocks that have been resolved.
6. Set `published: true` for the three ids in `lib/routes.ts` and delete the `robots` override in the six `page.tsx` files. Both are one line each.
7. Set the in-force date in each policy's `status`.
