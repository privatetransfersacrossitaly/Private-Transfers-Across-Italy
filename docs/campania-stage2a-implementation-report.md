# Campania cluster — Phase 2, Stage 2A implementation report

**27 October 2026.** Two page ids, four localized routes, English and Italian.
**Caserta and Pompeii only.** No airport, hotel, tour, route or Naples–Rome page was
created. Nothing was committed, pushed or deployed.

---

## 1. What shipped

| Page id | English | Italian |
|---|---|---|
| `caserta` | `/destinations/caserta` | `/it/destinazioni/caserta` |
| `pompeii` | `/destinations/pompeii` | `/it/destinazioni/pompei` |

Both paths are exactly as reserved in `docs/campania-url-map.md`. No slug was invented,
renamed or redirected, and no existing URL was touched. `pompeii` / `pompei` follows the
Venice and Naples rule: one page id, the English exonym in English, the Italian name in
Italian.

### Measured counts

| | Before | After | Change |
|---|---|---|---|
| Registry page ids (`lib/routes.ts`) | 50 | **52** | +2, one per page id |
| Localized route files (`app/**/page.tsx`) | 100 | **104** | +4, two locales × two pages |
| Sitemap URLs (`/sitemap.xml`) | 100 | **104** | +4, both pages published in both locales |
| Production build static pages | 105 | **109** | +4, matching the route files |

Before-counts were measured prior to the first edit. The change is exactly what two
bilingual pages produce, so there is no discrepancy to investigate.

---

## 2. Resolving the facts first

### Caserta — the entrance-number conflict, and how it was handled

Three pages on the palace's own site were read on 27 October 2026.

| Page | What it says about the Corso Giannone entrance |
|---|---|
| `/en/how-to-get-here/` | **"enter from Corso Pietro Giannone, 5."** Carries "© Copyright 2026", no last-updated field |
| `/en/accessibility/` | **"Corso Pietro Giannone, 17"**, twice. Also describes a change dated "Starting October 1, 2026" |
| `/gli-ingressi-della-reggia-di-caserta-…/` — the page written **specifically about the entrances** | **No street number at all.** Only "corso Giannone". Article date 19 August 2020 |

Both numbered pages look current, so neither could be dismissed as stale. The deciding
source is the third: the page the palace wrote about its own entrances **declines to
number this one**.

**The page therefore names the entrance and does not number it** — the first of the two
options the brief allowed. It stays unambiguous because the palace publishes exactly two
entrances and they have different names, and it stays useful because what a passenger
needs is which gate, not its house number. The page says so explicitly, in a note under
the comparison and again in the first FAQ answer, and tells the reader to take the civic
number from the palace if a satellite navigation system needs one.

Picking 17 because it appears twice, picking 5 because it is on the arrival page, or
averaging them would each have invented a street address for a gate a driver is being
sent to.

**A second conflict was found and is not published.** The accessibility page says a ticket
office at the Corso Giannone entrance becomes operational from 1 October 2026; the
entrances page (2020) says that entrance has no ticket office. As of today both statements
are live and they disagree. The page publishes no ticket-office information at all, which
makes the conflict moot for our purposes, and its limits callout states that tickets and
admissions are not covered here.

**Parking.** Two independent current statements, both quoted: **"The Museum does not have
its own public parking."** (how-to-get-here) and **"Please note that parking isn't
permitted inside the Royal Palace."** (accessibility). The page claims no public parking
anywhere — it quotes the palace saying there is none of its own, and describes no car park
outside it, because the palace publishes none.

**Not invented:** any drop-off point, any kerb or square a vehicle may use, any vehicle
access to either entrance, any opening hour. The palace publishes none of it, and the page
says that in its own band rather than burying it.

### Pompeii — the three locations, rechecked

Phase 1's doubt was whether the three named places are entrances or only ticket offices.
**The park settles it.** On `/en/visiting-info/how-to-visit-the-excavations/`: *"Access to
the Pompeii archaeological site is by showing your entrance ticket … through three
entrances"*, listing **Porta Marina Superiore**, **Porta Marina Inferiore (also known as
Piazza Esedra)** and **Piazza Anfiteatro**. They are entrances.

The park names them differently on its other page, `/en/visiting-info/how-to-get-there/`:
**Porta Marina (via Villa dei Misteri)**, **Piazza Esedra (piazza Porta Marina
Inferiore)**, **Piazza Anfiteatro (piazza Immacolata)**. Both namings are carried in the
hero, each gate's label slot holding the park's other name for it, because a passenger
holding one set needs to recognise the other.

**What remains unestablished is published as unestablished.** No official page states that
any entrance can be reached by a vehicle. For cars the park gives one line — *"Motorway A3
Napoli-Salerno (exit Pompeii Scavi)"* — and no road directions, no set-down point and no
waiting place. So the page names the gates with their published addresses, states plainly
that these are the gates' addresses and not places a car is confirmed able to reach, and
puts that in an accent callout rather than a footnote.

**The dated parking claim.** The park's FAQ answer — *"No. Outside the Archaeological Park
there are many municipal parking spaces available at a cost, delineated by blue lines.
There are also several private car parks."* — carries a publication date of **29 May 2018**
and no last-updated field. It is handled three ways at once:

1. The content type carries a required `asOf` field, so the date cannot be dropped by a
   later edit.
2. The rendered section leads with **"Published 29 May 2018"** above the heading, before
   the quotation.
3. A caution beneath it states that this is what the park said then, that it is not
   confirmation that the same spaces, arrangements or costs exist now, and that the page
   names and recommends no car park. The source note repeats the date.

It also sits in **its own band**, separated from the current regulation, so a 2018 answer
never renders flush against a 2025 decree.

**The fact that earns the page.** The park's current access regulation — linked from its
own site as *"Decreto 446 del 23/12/2025 – Nuovo regolamento"* — lists among prohibited
acts *"to enter with suitcases or bulky bags (permitted size 30x30x15 cm)"*, alongside
*"to bring in unauthorised (including electric) vehicles of any type"* and *"to bring in
bicycles, scooters or other motorised vehicles"*. For a cruise passenger on a day call or
anyone moving between hotels, the luggage line changes what they must arrange before the
car leaves. It leads the body, not a footnote.

**Not invented:** drop-off points, parking arrangements, distances, journey times, prices,
walking times between gates, access permissions, or a left-luggage service. The page states
explicitly that the pages read describe no left-luggage arrangement and that one should not
be assumed.

---

## 3. Design differentiation

The components, heroes, blocks and the three Stage 1 Campania pages were inspected before
these were composed. Each page's design follows from its primary user question.

| | **Caserta** | **Pompeii** |
|---|---|---|
| Primary user question | *Which of the two gates do I want, and where can the car actually stop?* | *Which of the three gates, and what can I bring from the car?* |
| Hero | **`HeroGeo`** — a three-node chain, motorway exit → station square → main entrance, with the links labelled in the palace's own words | **`HeroModes`** — a three-up grid, one cell per entrance, each carrying the park's *other* name for that gate plus its published address |
| Why that hero | Everyone assumes a palace facing a station square is trivial to be dropped at. The diagram lays out what the palace publishes and its caption carries the gap: nowhere on that chain is a stopping place named | A visitor arrives holding one of two naming systems. Three parallel cells let them match their ticket to a gate before reading a word of body copy |
| Central module | **`CompareColumns`** — two columns, because there are exactly two entrances and they are not interchangeable | **`DefinitionList`** — discrete prohibitions, each set against its consequence for someone arriving by car |
| Second subject | The parking refusal, in its own sunken band with an accent limits callout | The access regulation, in its own sunken wide band — then the dated parking claim in a *third*, separate band |
| Section sequence | `entrances` → `stopping` → `coverage` → `send` → `onward` → `questions` → `quote` (**7**) | `entrances` → `rules` → `parking` → `coverage` → `send` → `onward` → `questions` → `quote` (**8**) |
| Rendered heading pattern | `h1 h2 h3 h3 h2 h3 h2 h2 …` | `h1 h2 h2 h2 h2 h3 h2 h2 …` |
| Closing tone | `deep` | `sunken` |

The heading patterns above are measured from the rendered HTML, not asserted: Caserta
nests two `h3` column headings directly under its first `h2`, Pompeii does not, and the
difference is visible in the document outline.

### How each differs from the Stage 1 Campania pages

| Page | Hero | Central module |
|---|---|---|
| Naples hub | `HeroBand` | `DataTable`, four gateways |
| Salerno airport | `HeroMeta` | `Callout` on one published fact |
| Naples cruise terminal | `HeroConstraint` | `DataTable`, three quays |
| **Caserta** | **`HeroGeo`** | **`CompareColumns`** |
| **Pompeii** | **`HeroModes`** | **`DefinitionList`** |

Five pages, five heroes, five central modules. `CompareColumns` and `DefinitionList` were
both unused in this cluster; two entrances do not justify a third `DataTable`, and a
two-row table reads as a table that lost its rows.

### Why there is no *more* difference than this

Both pages share the cluster's tail — `coverage`, `send`, `onward`, `questions`, `quote` —
because that is the chrome every page in every cluster on this site carries, and breaking
it on two pages would be novelty rather than design. Section 3 of the brief asked for no
artificial differences, and the shared tail is where the evidence supports none.

**No new global component was created.** `OwnerNote`, added in Stage 1, is reused. No
shared hero or block was modified, the header and footer were not redesigned, and no
unrelated cluster or the homepage was touched.

---

## 4. SEO work performed

Concrete content, structure and technical measures. **No claim is made about rankings,
citations or AI-answer visibility, and none is implied.**

### Caserta

- **Primary search intent:** transactional-with-research — arranging a private car to the
  Royal Palace of Caserta, and establishing where it can set passengers down.
- **Audience:** travellers already intending to visit the palace, including cruise and
  Naples-based day visitors and ArteCard holders, who need a gate and a stopping
  arrangement rather than a description of the building.
- **Title tag (EN):** `Private transfers to Caserta | Private Transfer Across Italy`
- **Title tag (IT):** `Transfer privati per Caserta | Private Transfer Across Italy`
- **Meta description (EN, 174 chars):** "The Royal Palace of Caserta publishes two
  entrances and states that it has no public parking of its own. Which gate you want, and
  what the palace does not publish about cars."
- **Meta description (IT, 165 chars):** "La Reggia di Caserta pubblica due ingressi e
  dichiara di non avere un parcheggio pubblico proprio. Quale cancello vi serve, e cosa la
  Reggia non pubblica sulle auto."
- **H1:** "Private transfers to Caserta" / "Transfer privati per Caserta" — one per page.
- **H2s:** which of the palace's two entrances you want · the palace has no parking of its
  own, and says so · what we cover in Caserta · what to send with a Caserta request ·
  nearby · Caserta questions · name the gate, and the day.
- **Main questions answered:** which entrance to ask for and what each gives access to ·
  which entrance is compulsory for ArteCard holders · whether the palace has parking ·
  whether a car can set you down at the entrance · why no street number is given for Corso
  Giannone · whether tours or admissions are sold.
- **Why it is useful:** it answers the drop-off question honestly instead of guessing, and
  it tells a reader the one thing the palace's own site makes hard to find — that two of
  its pages disagree about an address.
- **Internal links:** Naples hub (`naples`) from the onward index **and** the closing CTA ·
  `pompeii` from the onward index · the quote form. No forced links and no route claims.
- **Sources:** `reggiadicaserta.cultura.gov.it/en/how-to-get-here/` (EN) and the palace's
  own entrances page (IT), both linked in context, both read 27 October 2026.

### Pompeii

- **Primary search intent:** transactional-with-research — arranging a private car to the
  Pompeii excavations, and working out which entrance and what may be carried in.
- **Audience:** cruise passengers on a day call at Naples, Naples- and Sorrento-based day
  visitors, and anyone travelling between hotels with luggage.
- **Title tag (EN):** `Private transfers to Pompeii | Private Transfer Across Italy`
- **Title tag (IT):** `Transfer privati per Pompei | Private Transfer Across Italy`
- **Meta description (EN, 151 chars):** "Pompeii has three entrances, which the
  archaeological park itself names two different ways, and an access regulation that keeps
  suitcases outside them."
- **Meta description (IT, 188 chars):** "Tre ingressi, chiamati in due modi diversi dal
  Parco stesso, e un regolamento che tiene fuori le valigie. Che cosa il Parco Archeologico
  di Pompei pubblica sull'arrivo, e che cosa no."
- **H1:** "Private transfers to Pompeii" / "Transfer privati per Pompei" — one per page.
- **H2s:** Pompeii's three gates, and why the names differ · what cannot come in with you ·
  the park's answer about parking, and its date · what we cover at Pompeii · what to send
  with a Pompeii request · nearby · Pompeii questions · name the gate, and the luggage.
- **Main questions answered:** whether suitcases can be taken in, and the permitted size ·
  which of the three entrances to ask for, and why the names differ · where the driver can
  drop you · whether there is parking at the site, and how old that answer is · why no
  distance, time or fare is published · whether tours or tickets are sold.
- **Why it is useful:** the luggage rule is the single most consequential published fact
  for a visitor arriving by car, and it is buried in a regulation PDF link on the park's own
  site. Naming it early changes what a reader does before the car leaves.
- **Internal links:** Naples hub (`naples`) and `naples-cruise-port` from the onward index,
  `naples-cruise-port` again from the closing CTA, `caserta` from the onward index, the
  quote form.
- **Sources:** the park's how-to-get-there page, its visitor regulations (which link
  "Decreto 446 del 23/12/2025"), and its 2018 parking FAQ — three separate source notes,
  each beside the claims it supports, each read 27 October 2026.

### Measures applied to both

- **Answer first.** Each hero module states the page's answer — the gates, or the chain and
  its gap — above the fold, before any prose.
- **Named, not deictic.** Statements name the Royal Palace of Caserta, the Archaeological
  Park of Pompeii, Piazza Carlo di Borbone, Corso Giannone, Porta Marina, Piazza Esedra,
  Piazza Anfiteatro, the A1/A30/A3 exits and the publishing institution, rather than "here"
  or "this place". Two owner-claim headings that read "What we cover here" were rewritten to
  "What we cover in Caserta" and "What we cover at Pompeii" during this pass for exactly
  this reason.
- **Four evidence classes kept visually distinct.** Sourced facts carry a `SourceNote`
  naming the publisher; dated facts carry an `asOf` line and a caution; owner-confirmed
  claims render through `OwnerNote` on a neutral surface under "Our own position, not a
  published fact"; unresolved details get an accent limits callout. No gap was filled to
  satisfy a keyword.
- **Idiomatic Italian, not translated keywords.** The Italian pages use *cancello*,
  *ingresso*, *banchina*, *punto di discesa*, *preventivo* and *richiesta* as Italian copy,
  and quote the institutions' English originals verbatim with an Italian gloss where the
  source is English.
- **FAQ restraint.** Six questions per page, each a question a reader would actually ask.
  No question repeats another's answer, and none exists to carry a keyword.
- **Structured data matches visible content.** Verified mechanically: all six `Question`
  names in each page's `FAQPage` block were found in that page's visible HTML, on all four
  pages. Types are limited to `Organization`, `WebSite`, `WebPage`, `BreadcrumbList` and
  `FAQPage` with `Question`/`Answer`/`ListItem`. No `LocalBusiness`, `Offer`,
  `AggregateRating`, `Review`, `Place`, `TouristAttraction`, address, telephone or price.
- **One unsupported claim was removed during this pass.** A draft Caserta hero lead read
  "one of the few major sites in Italy whose main entrance faces a railway station square".
  Nothing supports "one of the few", so it was rewritten to state only what the palace
  publishes.

---

## 5. Files changed

### New

| File | Purpose |
|---|---|
| `content/campania/caserta.ts` | Caserta, both languages |
| `content/campania/pompeii.ts` | Pompeii, both languages |
| `components/campania/caserta-page.tsx` | Caserta view |
| `components/campania/pompeii-page.tsx` | Pompeii view |
| `app/(en)/destinations/caserta/page.tsx` | + three more route files, metadata and JSON-LD only |

### Modified

| File | Change |
|---|---|
| `content/campania/types.ts` | Two new page types. `CasertaDestination` makes the entrance note **required**, so the street-number caveat cannot be dropped; `PompeiiDestination` makes `asOf` **required** on the parking block, so the 2018 date cannot be dropped |
| `lib/routes.ts` | Two records, both parented to `naples`. A comment records why both are transfer-destination pages and not visit guides |
| `content/page-names.ts` | Two breadcrumb names, with Pompeii/Pompei split by locale |
| `content/navigation.ts` | Campania-only: both pages added to the existing `naples-and-campania` navbar group and the existing `campania` footer column. No new top-level item, no shared-navigation change |
| `content/campania/naples.ts` | The hub's onward index gained both pages, in both languages, so each is linked from its parent |

### Not touched

No homepage content file, no Tuscany, Bologna, Veneto, Milan or Rome content or component,
no shared hero or block component, no `NEXT_PUBLIC_SITE_URL`, `QUOTE_ENDPOINT_URL`, quote
form, CRM, email, API, database, DNS or hosting setting.

---

## 6. QA — checks actually run

**There is no test suite in this repository** (no vitest, jest or playwright). No automated
tests were run, and none are claimed.

| # | Check | Result |
|---|---|---|
| 1 | `npx tsc --noEmit` | **Clean** |
| 2 | `npx eslint .` | **Clean** |
| 3 | `npx next build` | **Compiled successfully**, 109/109 static pages, no errors or warnings |
| 4 | Registry / route-file / sitemap / build counts | 52 / 104 / 104 / 109 — measured before and after |
| 5 | HTTP status, all four new URLs | **200** each; one `<h1>`; 4 `hreflang` links; 2 JSON-LD blocks; `img = 0` |
| 6 | Canonical + reciprocal hreflang | Each page self-canonical; `en`/`it`/`x-default` present and **reciprocal in both directions** on all four |
| 7 | EN ↔ IT switching | Exactly one switcher anchor to the correct counterpart on each of the four |
| 8 | Breadcrumbs and parents | `Home > Naples > Caserta` and `Home > Naples > Pompeii`; `Home > Napoli > Caserta` and `Home > Napoli > Pompei` |
| 9 | Internal links, whole site | 104 distinct internal route hrefs crawled across all 104 pages; **every one resolves**. The only non-route hrefs are two build assets and the favicon, all 200 |
| 10 | Orphan check | **53 inbound pages** for each new path, and each is linked **from the Naples hub specifically** — verified, not assumed |
| 11 | Outbound source links | All four published source URLs return **200**, checked individually, including the Italian-language Caserta source that appears only on the Italian page |
| 12 | Heading hierarchy | One `h1` per page, then `h2`/`h3` only, **no skipped levels** on any of the four. The two pages' outlines differ measurably |
| 13 | Accessible names / images | **No unnamed links**; `img = 0` so no alt text is required and no photograph was reused; all 5 inline SVGs per page are `aria-hidden="true"` |
| 14 | Structured data | Only the five permitted types; all 24 schema `Question` names matched visible page text |
| 15 | Responsive, 320 / 360 / 390 / 768 / 1024 / 1280 / 1680 px | No horizontal scroll or overflow at any width on the two English pages. One 3 px overflow at 1024 px on the two Italian pages — **pre-existing and site-wide**; see §7 |
| 16 | Browser console | **Zero** console errors or warnings, zero browser-log errors or warnings, zero failed network requests on all four, under headless Chrome 156 |
| 17 | Tap targets / minimum type | Smallest type 13 px. The only sub-24 px-tall links are the visually-hidden skip link and the inline source links inside prose — identical to existing pages |

QA ran against `npx next start` and headless Chrome over CDP with device-metric overrides at
each width.

---

## 7. Unresolved issues and limitations

**Carried forward, unchanged and not caused by this stage:**

1. **`NEXT_PUBLIC_SITE_URL` is unset**, so canonicals and hreflang emit
   `http://localhost:3000`. Correct relative to configuration, wrong for production, and the
   single largest technical SEO blocker on the site.
2. **Quote-enquiry delivery** remains unverified end to end.
3. **The Italian header overflows by 3 px at exactly 1024 px**, site-wide, because the
   Italian quote CTA is wider than the English one. It reproduces on the Italian homepage and
   on the Florence and Bologna Italian pages, all of which predate this stage. Fixing it
   means editing the shared header, which is outside this scope.

Because of items 1 and 2, **the site is not production-ready**, and this report does not
claim otherwise.

**Specific to these two pages:**

4. **The Corso Giannone street number is unresolved** and deliberately unpublished. If the
   palace reconciles its two pages, a number can be added.
5. **Whether any Pompeii entrance is reachable by vehicle is unestablished.** The park
   publishes nothing on it, and the page says so rather than inferring it.
6. **The Pompeii parking statement is from 2018.** It is published with its date and a
   caution, not as current confirmation. If the park updates it, this section should be
   rewritten.
7. **The palace's two pages disagree about the Corso Giannone ticket office** as of today.
   No ticket information is published here, so nothing on the page depends on it.
8. **Meta descriptions run long by common guidance** — 151–188 characters here. That matches
   the house convention rather than breaking it: 60 of the 104 pages on the site exceed 160
   characters, with a median of 164. Search engines will truncate the longer ones. Normalising
   descriptions site-wide is a separate decision, not a two-page change.
9. **No photography exists for either destination.** The only Campania image in
   `public/photos` is already placed on the homepage, and the image invariant allows one
   placement per image, so both pages are text-led. New photography would be a content
   decision, not a code one.

---

## 8. Status

Stage 2A is complete and stopped for review. **Stage 2B has not been started, and no other
Campania page was created.** Nothing was committed, pushed or deployed; no environment
variable, quote endpoint, CRM, email, API, database, DNS or hosting setting was touched; no
quote form was submitted and no external booking was created.
