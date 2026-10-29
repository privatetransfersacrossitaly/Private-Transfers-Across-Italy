# About Us — implementation report

**Date:** 28 October 2026
**Scope:** the About Us page only. No legal pages, no CRM, no new city clusters.

---

## 1. Files created and modified

### Created (8)

| File | Lines | Purpose |
|---|---|---|
| `content/about/types.ts` | 95 | `AboutContent`; four required fields as safeguards |
| `content/about/en.ts` | 215 | English copy |
| `content/about/it.ts` | 214 | Italian copy, written as Italian |
| `content/about/index.ts` | 16 | `about = { en, it }` |
| `components/about/about-page.tsx` | 233 | page composition, `locale`-driven |
| `app/(en)/about/page.tsx` | 31 | English route |
| `app/(it)/it/chi-siamo/page.tsx` | 31 | Italian route |
| `public/illustrations/faq-about.svg` | 1 file, 1.3 KB | original illustration |

### Modified (5)

| File | Change |
|---|---|
| `lib/routes.ts` | `"about"` added to `PageId`; record `{ en: "/about", it: "/it/chi-siamo" }`, `parent: "home"`, `published: true`, `priority: 0.5` |
| `content/page-names.ts` | `about: { en: "About us", it: "Chi siamo" }` |
| `content/navigation.ts` | `pages.about` label in both locales; `page("about")` appended to the footer's `planning` group |
| `content/faq-illustrations.ts` | `about:en` and `about:it` both mapped to `faq-about.svg` |
| `docs/about-page-report.md` | this file |

`content/faq-illustrations.ts` was not named in the approved plan. It is the registry the FAQ illustration is declared in, so registering the new asset required it. No other file was touched.

### Not touched

Routing architecture beyond the one registry entry; `components/site/*`; every destination, airport, port, station and route page; `app/actions/quote.ts`; `lib/quote/*`; `lib/metadata.ts`; `lib/structured-data.ts`; environment variables; DNS; hosting. Nothing committed, pushed or deployed.

---

## 2. URLs

- English: `/about`
- Italian: `/it/chi-siamo`

---

## 3. Content and design

### Sections

1. **Hero** — breadcrumbs, eyebrow, `h1`, lead, two CTAs, and an "In short" panel whose two rows are *what this site does* and *what it does not do*.
2. **The idea** (`#purpose` / `#l-idea`) — reading measure, three paragraphs on why the pages are written from published authority.
3. **The process** (`#how` / `#come-funziona`) — the verified three steps: Send the journey details → Receive a quotation → Confirm in writing. Closes with the note that the quotation form is a later phase.
4. **Where we are asked to go** (`#coverage` / `#dove`) — six regional hubs as a `LinkIndex`, with the note that this is a list of pages and not a list of guaranteed journeys.
5. **How journeys are arranged** (`#fulfilment` / `#come-si-organizza`) — the owner statement, in the `OwnerNote` treatment.
6. **What to expect** (`#service` / `#il-nostro-modo`) — five commitments on the deep band, with the note that no hours, response time or refund policy is claimed.
7. **Questions** (`#questions` / `#domande`) — five FAQ rows in the native `<details>` accordion, with the illustration beside them.
8. **Closing CTA** → `quotePathFor(locale)`.

### Design decisions

- **No new hero variant.** `heroes.tsx` holds fourteen, every one shaped around a journey. About Us has no journey in it, so the page opens inline rather than adding a fifteenth shared variant for a page nothing else will reuse.
- **The opening panel is the page's argument in miniature.** No other page on this site states a claim and its limit side by side above the fold, because no other page's subject is the site.
- **`fulfilment` sits after the three steps,** not before. A reader who has not yet seen that step three is the booking cannot judge a paragraph about how a vehicle is arranged.
- **The owner statement is written inline,** not imported from `components/campania/owner-note.tsx`, because that component's prop type belongs to the Campania content. Twelve lines of markup beats a cross-cluster type dependency.
- **One illustration, both locales.** `faq-about.svg` carries no words, and English and Italian are one page id. A sheet of paper with a route drawn across it and a question mark: no vehicle, kerb, meeting point, permit or facility.

### Safeguards in the type

`content/about/types.ts` makes four fields required so a later edit cannot quietly drop them: `hero.panel` (the claim arrives with its limit), `how.note` (what the quote link does today), `coverage.note` (pages, not guarantees) and `service.note` (no hours, no response time, no refund policy). There is nowhere in the type to put a founding year, a legal entity, an office, a headcount, a licence number or a review.

---

## 4. QA results

### Automated checks

| Check | Result |
|---|---|
| `npx tsc --noEmit` | clean |
| `npx eslint .` | clean |
| `npx next build` | **119/119 static pages** (was 117) |
| Test suite | **none exists** in this project — no vitest, jest or playwright. No tests were run. |

### Page checks — 47 assertions, both locales

Both routes return 200, with the correct `<html lang>`, a branded `<title>`, a meta description of 139 (EN) and 157 (IT) characters, a canonical matching the route, a reciprocal hreflang set of `en`/`it`/`x-default` with `x-default` on English, and an `og:title` matching the `<title>`.

JSON-LD is a single block whose graph is exactly `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` — the project's established set. A scan for `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, `address`, `telephone`, `priceRange`, `openingHours`, `foundingDate` and `Service` found none. The breadcrumb is `Home / About us` and `Home / Chi siamo`. All five FAQ questions in the markup are present as visible text on the page.

Structure: exactly one `h1`, sixteen `h2`, five `<details>` rows, the illustration referenced and serving.

### Browser checks

| | EN | IT |
|---|---|---|
| Accordion: 5 rows, all closed at load, each opens, answer visible, marker plus→minus, all open at once, each re-closes, marker back to plus, every question an `h3` | PASS | PASS |
| No horizontal overflow at 1280 / 768 / 390 / 320 | PASS | PASS |
| Illustration loads at 320×260 | PASS | PASS |
| Breadcrumb link resolves (`/`, `/it`) | PASS | PASS |
| In-page anchors resolve (`#main`, `#how` / `#come-funziona`) | PASS | PASS |

### Site-wide regression

All **114** sitemap entries (112 + the two new) return 200. Every page in both languages carries the About link in its footer at the correct localized path. Illustration assets: `faq-about.svg` serves the two locale routes of one page id by design; the six pilot assets remain one route each.

### Unsupported-claim scan

A scan of the rendered HTML for `founded`, `since 19`, `since 20`, `years of experience`, `our fleet`, `we own`, `fully licensed`, `fully insured`, `24/7` and `guarantee` returned no hits on either page.

### Note on the one failed assertion

The Italian CTA assertion initially failed because the test expected `/it/#request-a-quote`, the literal output of `quotePathFor("it")`. Next normalises it to `/it#request-a-quote`. The page emits five occurrences, byte-identical to every other Italian page on the site. The test expectation was wrong; the page is correct.

---

## 5. Unresolved business facts requiring owner confirmation

### 5.1 The commercial relationship behind a vehicle — **unresolved**

Nothing in the project establishes who supplies the vehicle and driver for a confirmed journey. The only evidence is `.env.example` and `lib/quote/transport.ts`, which describe a planned server-to-server delivery of leads to an **Italy Taxi Service** intake at `POST /api/leads`, with this site's leads tagged `source: "rometransferservice"`. That is a planned CRM integration, not a stated commercial or legal relationship, and the routes it names (`/get-a-quote`, `/it/richiedi-preventivo`) do not exist.

**What the page says instead:** it describes what is being asked for (a private car with a driver, arranged in advance, priced for the journey), states what is settled in writing before a confirmation, and then says plainly that the page names no operator and makes no claim about licences, permits, insurance or driver checks. No operator name, no ownership claim, no employment claim, no partnership claim.

**Needed to go further:** whether the business operates vehicles and engages drivers directly or passes requests to third-party operators, and what Italy Taxi Service is in relation to this site.

### 5.2 Legal identity — **not claimed**

No registered entity, trading name, country of registration, office or founding date appears, because none has been supplied. This will matter more for the Privacy Policy and Terms pages, which normally have to name a data controller and a contracting party.

### 5.3 Contact channel — **none exists**

There is no form, email address, telephone number or messaging link anywhere on the site. Every CTA on the About page points at `quotePathFor(locale)` — the homepage `#request-a-quote` section — exactly as every other CTA does. The page states that the form is a later phase and that nothing on the site sends a message today.

### 5.4 Licences, permits and insurance — **not claimed, and not generalised**

The Bologna hub's existing statement — *"We work under a valid authorisation for access where one is required"* — has been left in its original scope. The About page refers to it as an authorisation stated for one city's restricted zone and explicitly says it is not a general claim.

### 5.5 Service commitments — **none promised**

No support hours, response time, refund policy or punctuality commitment. The five items under "What to expect" are all descriptions of how the site is written, each verifiable by reading it.
