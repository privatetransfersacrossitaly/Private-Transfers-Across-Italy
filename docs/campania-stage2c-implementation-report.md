# Campania cluster — Stage 2C implementation report

**27 October 2026.** One page id, two localized routes: **Positano**, English and Italian.
Nothing else was created. Nothing was committed, pushed or deployed.

`docs/campania-stage2b-opportunity-audit.md` **does not exist** — it was presented for
review and never authorised as a file. The planning evidence used here is the Stage 2B
audit as delivered in conversation, and every fact it contained was re-verified against
primary sources before anything was written.

---

## 1. Files created and modified

### Created

| File | Purpose |
|---|---|
| `content/campania/positano.ts` | The page, both languages |
| `components/campania/positano-page.tsx` | The view |
| `app/(en)/destinations/positano/page.tsx` | EN route: metadata + JSON-LD |
| `app/(it)/it/destinazioni/positano/page.tsx` | IT route: metadata + JSON-LD |

### Modified

| File | Change |
|---|---|
| `content/campania/types.ts` | Added `PositanoDestination`. `rates.asOf` and `limits` are **required fields**, so neither the guide's date nor the no-stopping rule can be dropped by a later edit. Added `Step` to the type import |
| `lib/routes.ts` | `"positano"` added to the `PageId` union and one record, parented to `naples`. A comment records why the other coast comuni are still absent |
| `content/page-names.ts` | One breadcrumb name (identical in both languages) |
| `content/navigation.ts` | Campania-only: one label pair, `positano` added to the existing `naples-and-campania` navbar group and the existing `campania` footer column. No new top-level item, no shared-navigation change |
| `content/campania/naples.ts` | The hub's onward index gained Positano in both languages, so the page is linked from its parent |

### Counts

| | Before | After |
|---|---|---|
| Registry page ids | 52 | **53** |
| Localized route files | 104 | **106** |
| Sitemap URLs | 104 | **106** |
| Production build static pages | 109 | **111** |

Exactly +1 id and +2 of everything else, which is what one bilingual page produces.

### Not touched

No Sorrento, Amalfi, Ravello, Salerno city or airport page. No intercity route page. No
hotel or tour page. No homepage copy and **no change to the intercity disclaimer**. No
shared header, footer or common component. No environment variable, domain, DNS, hosting,
quote endpoint, CRM, email, API or database setting.

---

## 2. Source evidence

Both documents were **re-downloaded immediately before writing** and confirmed
**byte-identical by SHA-256** to the copies read during the Stage 2B audit, so nothing
quoted here rests on a stale download.

| Check | Result |
|---|---|
| `D.G.C. n. 37 del 21.03.2024` (PDF, via the Comune's ZTL portal) | HTTP 200, 596,272 bytes, SHA-256 `f2f602ff05d1c3a7…` — identical |
| `Guide to the portal ZTL … ver. 1.2 of 20.05.2026` (PDF, `comune.positano.sa.it`) | HTTP 200, 1,877,123 bytes, SHA-256 `7d959d53ad238b42…` — identical |
| Portal notices page, checked for later amendments | HTTP 200. Newest item still **20-05-2026**; nothing published after the guide. Earlier items 29-01-2025, 03-06-2021, 01-04-2019 |

**No later official amendment was found.** That is recorded as *not found*, not as
confirmation that the figures are unchanged — see §2.3.

### 2.1 Facts published, and the document each rests on

**From DGC n. 37 of 21 March 2024 (Comune di Positano):**

- The zone covers **Viale Pasitea, Piazza dei Mulini and Via C. Colombo**, and the
  deliberation records that this axis is **one-way** ("soggetto al senso unico di marcia").
- From **15 April 2024**, paid access applies to vehicles over five seats including the
  driver, **"adibiti a servizio N.C.C., a TAXI e ad uso privato"** — the three categories
  treated alike.
- **€5.00** for a single daily transit. *This is the only amount in the deliberation's
  extractable text; the other three were recovered from the guide, not invented.*
- Paid access runs **1 January to 31 December each year** — so it is **not seasonal**.
- Exempt: police, fire and rescue; vehicles carrying people with impaired mobility holding
  the special badge; scheduled public-service vehicles and school buses; residents' or
  domiciled persons' vehicles needing services exclusively within the zone.
  **Private hire is not exempt**, which the page states plainly.
- Payment **only** through the municipal portal, after registration validated by the
  municipal police, via **PagoPA**, with the receipt shown to officers on request. One
  pass authorises one access; the date and time must be given at payment.
- **The decisive rule:** *"Il pagamento del pass non autorizza la sosta e la fermata lungo
  il percorso insistente nella Z.T.L."* — paying authorises **no stopping and no waiting**.
- Legal basis: art. 7 comma 9 of the Codice della Strada.

**From the Comune's portal guide v1.2 of 20 May 2026:**

- Vehicles subject to payment: **"Motor vehicles with 6 or more seats, including the
  driver"**, and buses within **7.70 m × 2.20 m** at **Euro 3 or higher** — with buses
  outside those limits unable to access the zone at all.
- Rates: **Single €5.00** (payable within 72 hours of entry), **Monthly €100.00**,
  **Half-year January–June €500.00**, **Half-year July–December €500.00**,
  **Annual €800.00**.
- Buses per transit by emissions class: **Euro 6 €60.00 · Euro 5 €70.00 · Euro 4 €80.00 ·
  Euro 3 €90.00**.
- Registration requires the vehicle registration certificate in PDF, the total seat count
  including the driver, and the emissions class.

**Verified mechanically:** every figure rendered on the page — 5.00, 100.00, 500.00,
800.00, 60.00, 90.00, 7.70, 2.20 and the 72-hour window — appears in the guide's extracted
text. Nothing numeric on the page is unsourced.

### 2.2 The 2016 ordinance — status: not established

DGC 37/2024 refers in its premise to **Ord. Dirig. Area Vigilanza n. 15/2016**, under which
boarding and alighting by passengers of taxi and NCC vehicles is permitted at a location
the deliberation describes only partially. **One attempt was made to obtain it through
official municipal channels, and it failed:**

- The Comune's own **ZTL topic page** (`comune.positano.sa.it/argomenti/ztl`) links **only
  the two portal guides**. It contains no ordinance, no reference to that ordinance, and
  **no text at all about stopping, parking or passenger drop-off**.
- The Comune's **published-measures archive** lists Area Vigilanza measures by year and
  **does not list 2016**.

**Consequence, applied throughout the page:** the official material reviewed **does not
establish any meeting point**, and none appears anywhere on the page. The page says so in
its own callout and again in the FAQ.

The street is **not named, not hinted at, and not inferred**. The civic numbers the
deliberation mentions appear **nowhere** in the content — a sweep of the source file for
them returns nothing. Naming a kerb from a half-legible clause in a document about tariffs
would be exactly the kind of invention this project refuses, and it is the one thing on
this page a driver could act on wrongly.

The research was kept to that single attempt and did **not** expand into the SS163 or wider
Amalfi Coast question.

### 2.3 How the dated figures are qualified

The amounts come from a guide **dated 20 May 2026**, and the page never presents them as
confirmed-current. The qualification appears in **four** places:

1. `rates.asOf` — a **required** type field, rendered as "As published 20 May 2026" above
   the heading.
2. The band heading itself names the date: *"What the Comune's guide of 20 May 2026 lists"*.
3. The lead: *"quoted with its date because that is what can be evidenced, not because they
   are confirmed to be today's figures."*
4. The FAQ: *"we have found nothing published since, which is not the same as confirming
   they are unchanged today."*

### 2.4 Deliberately absent

- **The SS163 alternating-plate scheme.** Different road, different authority, and
  `stradeanas.it` is unreachable from this environment at TCP level. A dedicated FAQ answer
  says the page makes no claim about it, **including about exemptions**, and points the
  reader to the road authority and the municipalities.
- **Who pays the zone charge on a given job.** Commercial, unpublished, and settled in a
  quotation.
- **Any claim of official or municipal status.** The page states in Italian that we are
  *not* an official Positano service and have no municipal arrangement, and the owner note
  says the Comune publishes nothing about us.

---

## 3. Design decisions

### Why `HeroTiers`, and why the threshold is in the hero

`HeroTiers` renders three steps of decreasing freedom with an accent rule that strengthens
as the restriction does. Positano's evidence has exactly that shape, and it is numeric:

| Tier | Rule | `strength` |
|---|---|---|
| Five seats or fewer, including the driver | Not on the charged list | `none` |
| Six or more seats, including the driver | Admitted on payment | `timed` |
| Buses outside the published limits | Cannot enter | `absolute` |

The threshold belongs above the fold because a party of five and a party of six get
different answers, and nothing else on the page matters until that is settled. The
`strength` mapping is documented in the type, since `timed` is being used for "admitted on
payment" rather than for a time window.

### Section sequence, and the one deliberate interruption

`hero (tiers)` → **`rates`** → **`limits`** → **`procedure`** → `coverage` → `send` →
`onward` → `questions` → `quote`.

**`limits` sits before `procedure`, not after it.** Running tariff → how-to-pay as one
smooth sequence would teach someone to buy a pass while leaving them to assume it buys a
place to stop. The Comune says it does not, so that sentence interrupts the sequence. This
is the single most important composition decision on the page.

`limits` also carries **two** blocks side by side rather than one: an accent `Callout` for
the rule that *is* published, and a separate neutral `Callout` for the meeting point that
is *not*. Different tones, because they are different kinds of statement.

### How it differs from the other Campania pages

| Page | Hero | Central module |
|---|---|---|
| Naples hub | `HeroBand` | `DataTable`, four gateways |
| Salerno airport | `HeroMeta` | `Callout` on one published fact |
| Naples cruise terminal | `HeroConstraint` | `DataTable`, three quays |
| Caserta | `HeroGeo` | `CompareColumns` |
| Pompeii | `HeroModes` | `DefinitionList` |
| **Positano** | **`HeroTiers`** | **`DataTable` (rate card) + `NumberedSteps`** |

Six pages, six heroes. `NumberedSteps` was unused in this cluster. Measured heading
outlines differ from both Stage 2A pages:

- Caserta `h1 h2 h3 h3 h2 h3 h2 h2 …`
- Pompeii `h1 h2 h2 h2 h2 h3 h2 h2 …`
- **Positano `h1 h2 h2 h2 h3 h3 h2 h2 …`**

**Why a third `DataTable` is justified.** The hub's gateways and the terminal's quays are
tables because they are *comparisons*. This one is a table because **the source is a
table** — a municipal rate card with a permit type, an amount and a scope per row.
Reshaping it into prose would destroy the only thing a reader wants from it: finding their
own row. The component scrolls horizontally inside a focusable `role="region"` with an
`aria-label`, so it stays reachable at 320 px without causing page-level scroll.

**No new global component.** `OwnerNote` is reused. No shared hero or block was modified,
and the header, footer and closing sections were left exactly as they are.

---

## 4. SEO work

Concrete content and structure measures. **No claim is made about rankings, indexing,
traffic, AI citations or AI visibility.**

| | English | Italian |
|---|---|---|
**Title** | `Private transfers to Positano \| Private Transfer Across Italy` | `Transfer privati per Positano \| Private Transfer Across Italy` |
**H1** | Private transfers to Positano | Transfer privati per Positano |
**Meta** | 177 chars — "Positano's limited-traffic zone charges vehicles with six or more seats including the driver. What the Comune publishes about the charge, and what paying it does not allow." | 165 chars — "La ZTL di Positano fa pagare l'accesso ai veicoli con sei o più posti, conducente compreso. Cosa pubblica il Comune sulla tariffa, e cosa pagarla non consente." |

- **Primary search intent:** can a private vehicle enter Positano, what does the zone
  charge, and where can it actually stop. **Audience:** visitors arriving by car or
  transfer — especially parties of five or more, for whom the threshold bites — plus cruise
  passengers on a Naples call.
- **The main question is answered in the hero**, by the tier the reader's own party falls
  into, before any prose.
- **One H1, then `h2`/`h3` only, no skipped levels** on either page — measured.
- **Seven FAQs per page**, each a real question: does my vehicle pay · what does it cost ·
  is private hire exempt · does paying let the car stop outside my hotel · where will the
  driver meet us · what about the coast road's plate rule · is a request a booking. None
  repeats another's answer and none exists to carry a keyword.
- **Idiomatic Italian, not translated keywords.** The Italian page uses *ZTL*, *transito*,
  *senso unico*, *conducente compreso*, *posti*, *contrassegno*, *Polizia Municipale*,
  *PagoPA*, *preventivo*, and quotes the deliberation's own Italian wording ("non autorizza
  la sosta e la fermata") rather than back-translating from English.
- **Four evidence classes kept visibly distinct:** sourced facts carry a `SourceNote`
  naming the document and its date; the dated rate card carries `asOf`; owner-confirmed
  claims render through `OwnerNote` under "Our own position, not a published fact";
  the unresolved meeting point gets its own labelled callout.
- **Contextual internal links:** the Naples hub from the onward index **and** the closing
  CTA, plus `naples-cruise-port` and `salerno-airport` as destinations. **No route coverage
  is claimed** between any of them.
- **Structured data matches visible content** — verified mechanically: all **7** `Question`
  names in each page's `FAQPage` block were found in that page's visible HTML. Types are
  limited to `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` with
  `Question`/`Answer`/`ListItem`. No `LocalBusiness`, `Offer`, `AggregateRating`, `Review`,
  `Place`, address, telephone or price schema.
- **Nothing invented.** A keyword sweep of the content file for distances, durations, our
  own fares, guarantees, reviews, ratings, partnerships, official status, named meeting
  points, SS163 ordinance detail and permit claims returned only two hits, both inspected:
  "ope**rating** position" and the Italian sentence *"Non siamo un servizio ufficiale di
  Positano"* — a refusal.

---

## 5. QA — commands run and actual results

**There is no test suite in this repository** (no vitest, jest or playwright). No automated
tests were run, and none are claimed.

| Command / check | Result |
|---|---|
| `npx tsc --noEmit` | **Clean** |
| `npx eslint .` | **Clean** |
| `npx next build` | **Compiled successfully**, **111/111** static pages, no errors or warnings |
| Counts: registry / routes / sitemap | **53 / 106 / 106** — measured before and after |
| HTTP status, both new URLs | **200** each; one `<h1>`; 4 `hreflang` links; 2 JSON-LD blocks; `img = 0`; 1 `<table>`; 3 `<ol>` |
| Canonical + hreflang | Each page self-canonical; `en` / `it` / `x-default` present and **reciprocal in both directions** |
| EN ↔ IT switching | Exactly one switcher anchor to the correct counterpart on each page |
| Breadcrumbs | `Home > Naples > Positano` and `Home > Napoli > Positano` |
| Internal links, whole site | 106 distinct internal route hrefs crawled across all **106** pages; **every one resolves**. Only non-route hrefs are two build assets and the favicon, all 200 |
| Orphan check | **54 inbound pages** each, and linked **from the Naples hub specifically** in both locales — verified, not assumed |
| Outbound source links | **All four resolve 200**, checked individually — including the Italian guide URL that appears only on the Italian page |
| Heading hierarchy | One `h1`, then `h2`/`h3`, **no skipped levels** on either page |
| Accessible names / images | No unnamed links; `img = 0`, so no photograph was reused and no alt text is required; the data table is a focusable `role="region"` with an `aria-label` |
| Structured data vs visible content | 7/7 schema questions present in visible HTML on both pages; permitted types only |
| Published figures vs source | All nine numeric values matched against the guide's extracted text |
| Responsive 320 / 360 / 390 / 768 / 1024 / 1280 / 1680 px | No horizontal scroll or overflow at any width on the **English** page. One 3 px overflow at 1024 px on the **Italian** page — pre-existing and site-wide; see §6 |
| Browser console | **Zero** console errors or warnings, zero browser-log errors or warnings, zero failed network requests on both pages, under headless Chrome 156 |
| Tap targets / type | Smallest type 13 px. Only sub-24 px-tall links are the visually-hidden skip link and inline source links inside prose — as on existing pages |

QA ran against `npx next start` on ports 3210 and 3211 and headless Chrome on port 9575,
all started by this session. Each was **verified by command line as mine before being
stopped**, and all three ports are released. **The user's `npm run dev` server (PID 18720)
was identified and deliberately left running.**

---

## 6. Unresolved facts and pre-launch requirements

### Unresolved, specific to this page

1. **Ord. Dirig. Area Vigilanza n. 15/2016 could not be obtained** through the Comune's own
   pages. No meeting point is published here as a result. If the ordinance is later
   obtained and names a street, the `limits.unknown` block is where that goes.
2. **The rate card is evidenced as at 20 May 2026**, not as today's figures. No later
   amendment was found on the portal; that is not the same as confirmation.
3. **The SS163 alternating-plate scheme remains unverified.** `stradeanas.it` does not
   accept connections from this environment, so the coast-road restriction is named as real
   and undescribed. Opening it from another network would resolve it.
4. **Which vehicle class is actually dispatched** on a Positano job is an operating matter.
   The page tells a reader where the published threshold falls; it does not state what we
   will send or who absorbs the charge.

### Site-wide, carried forward unchanged

5. **The Italian header overflows by 3 px at exactly 1024 px**, because the Italian quote
   CTA is wider than the English one. Reproduces on pages that long predate this work.
   **Explicitly out of scope for this stage and not touched.**
6. **Meta descriptions run long by common guidance** (177 and 165 characters here). This
   matches the house convention — 60 of the pages on the site exceed 160 characters, median
   164 — rather than breaking it. Normalising them is a separate, site-wide decision.
7. **No photography exists for Positano.** The only Campania image already has its one
   permitted placement on the homepage, so the page is text-led, as the Stage 2A pages are.

### Pre-launch only — safe until a domain is purchased

These are **not** development blockers and were not treated as such:

8. **`NEXT_PUBLIC_SITE_URL` is unset**, so canonicals, hreflang and the sitemap emit
   `http://localhost:3000` on all 106 pages. Correct for local work; must be set before
   launch.
9. **Quote-enquiry delivery** is unverified end to end, including `QUOTE_ENDPOINT_URL`.
10. **Re-run the full QA sweep against the production hostname** once it exists, and
    recheck every dated external claim — the Positano rate card above all.

### A dev-server error reported during this stage

A runtime error was reported on `/destinations/bologna` — *"Element type is invalid … got:
undefined"* at `HeroTiers` in `components/bologna/bologna-hub.tsx`. **It is not a source
defect.** Verified: `HeroTiers` is exported at `components/site/heroes.tsx:1069`, the import
in `bologna-hub.tsx:13` is correct, `heroes.tsx` has not been modified since 13:30 — long
before Stage 2A or 2C — nothing in Bologna's import graph was touched by either stage, and
no circular import exists (none of the modules `heroes.tsx` imports imports it back). A
clean production build of the same tree compiles 111/111 pages, and
`/destinations/bologna` renders **HTTP 200** with HeroTiers' three tier labels present in
the markup. The error is a stale Turbopack module graph in the long-running `next dev`
process; restarting that server clears it. **I did not restart it, because it is the user's.**

---

## 7. Status

Stage 2C is complete and stopped. **No further stage was begun, and no other Campania page
was created.** Nothing was committed, pushed, deployed or published; no quote was submitted
and no external booking was created.
