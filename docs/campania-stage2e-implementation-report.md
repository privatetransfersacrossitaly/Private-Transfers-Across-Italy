# Campania cluster — Stage 2E implementation report

**27 October 2026.** One page id, two localized routes: **Amalfi**, English and Italian.
Nothing else was built. Nothing was committed, pushed, deployed or published.

`docs/campania-stage2d-opportunity-audit.md` **does not exist** — the Stage 2D audit was
delivered for review and never authorised as a file. The evidence baseline used here is
that audit as given in conversation, with all three primary documents re-verified before
any copy was written.

---

## 1. Files created and modified

### Created

| File | Purpose |
|---|---|
| `content/campania/amalfi.ts` | The page, both languages |
| `components/campania/amalfi-page.tsx` | The view |
| `app/(en)/destinations/amalfi/page.tsx` | EN route: metadata + JSON-LD |
| `app/(it)/it/destinazioni/amalfi/page.tsx` | IT route: metadata + JSON-LD |

### Modified

| File | Change |
|---|---|
| `content/campania/types.ts` | Added `AmalfiDestination`. Four fields are **required**, each guarding a specific failure: `meeting` (the drop-off nobody publishes), `seasonal.expiry`, `seasonal.successor`, and `access.unverified` |
| `lib/routes.ts` | `"amalfi"` in the `PageId` union and one record, parented to `naples`. A comment records why Sorrento, Ravello and Salerno city are still absent |
| `content/page-names.ts` | One breadcrumb name, identical in both languages |
| `content/navigation.ts` | Campania-only: one label pair, `amalfi` added to the existing `naples-and-campania` navbar group and the existing `campania` footer column. No new top-level item, no shared-navigation change |
| `content/campania/naples.ts` | The hub's onward index gained Amalfi in both languages, so the page is linked from its parent |
| `content/campania/positano.ts` | **One sibling cross-link added in each language.** Declared explicitly because it touches an existing page: Positano's onward index now links Amalfi, and the two pages contrast usefully — a charge by seat count against a limit by the clock. No other Positano content changed |

**No new shared component and no new dependency.** `OwnerNote` is reused; `FactStrip`,
`HeroChooser` and `DefinitionList` are existing blocks used as-is.

### Verified not touched

Nothing under `components/site`, `components/rome`, `components/milan`,
`components/veneto`, `components/tuscany`, `components/bologna`, `content/rome`,
`content/milan`, `content/veneto`, `content/tuscany`, `content/bologna` or `content/home`
was modified — checked by modification time. No homepage copy, **no change to the
intercity coverage disclaimer**, no router change, no shared header or footer change, no
environment variable, domain, DNS, hosting, quote endpoint, CRM, email, API or database
setting.

---

## 2. Page id, routes and counts

| Page id | English | Italian | Parent |
|---|---|---|---|
| `amalfi` | `/destinations/amalfi` | `/it/destinazioni/amalfi` | `naples` |

Both paths are as reserved in `docs/campania-url-map.md`; neither collided with anything
in the registry. The slug is identical in both languages, so only the path prefix
localizes.

| | Before | After |
|---|---|---|
| Registry page ids | 53 | **54** |
| Localized route files | 106 | **108** |
| Sitemap URLs | 106 | **108** |
| Production build static pages | 111 | **113** |

---

## 3. Sources checked, and changes since Stage 2D

All three primary documents were re-downloaded today and confirmed **byte-identical by
SHA-256** to the copies read during the Stage 2D audit.

| Document | Authority | Date | Status |
|---|---|---|---|
| Traffic regulation for the historic centre (`materiali/2501.pdf`) | Comune di Amalfi | **not published in the document** | HTTP 200, SHA-256 `34d4277182c2d920…` — unchanged |
| Ordinanza del Settore Polizia Municipale **n. 4 del 28/03/2026**, Reg. Gen. n. 11 | Settore Polizia Municipale, Comune di Amalfi | 28 March 2026 | HTTP 200, SHA-256 `622e23d17343533c…` — unchanged |
| Luna Rossa regulation, allegato alla delibera dell'A.U. n. 97, verb. n. 66 (`materiali/2562.pdf`) | Amalfi Mobilità | 3 August 2023 | HTTP 200, SHA-256 `ddc7b7d7712c6456…` — unchanged |

### Successor-ordinance check — the brief's critical safeguard

**Both municipal listings were read today.**

- **Notizie** — current to 26/10/2026 (yesterday). Three traffic-related items appear after
  28 March 2026: the pedestrian-island notice of 30/03/2026, a procession notice of
  30/03/2026, and a Capodanno Bizantino traffic notice of 31/08/2026. **None extends or
  replaces the seasonal island beyond 31 October 2026.**
- **Comunicati** — current to 22/10/2026. **No traffic or ZTL item at all** in the window
  shown (18/07/2026 – 22/10/2026).

**Result: no successor ordinance was located.** The page states that, with the date of the
check, and explicitly declines to treat it as proof that none exists. Recorded limitation:
the Comunicati listing paginates, and items between 28 March and 17 July 2026 were not
read — a successor to a measure ending 31 October would be expected near its expiry, which
is inside the window that *was* read.

All four source URLs published on the page were individually confirmed **HTTP 200**,
including the Italian-language links that appear only on the Italian page.

---

## 4. Claims included, and claims excluded

### Included, each attributed on the page

**From the Comune's traffic regulation (year-round spine):**

- The limited-traffic zone defined street by street — Via Mansone I, Piazza Duomo, Via
  Lorenzo d'Amalfi, Via Pietro Capuano, Piazza Spirito Santo, Via Cardinale Marino del
  Giudice, Via Casamare, Via delle Cartiere, Largo ex Saponiera — and that the regulation
  governs access, circulation, presence, parking and exit within it.
- That vehicles providing a **taxi or private-hire service** appear in the regulation's own
  list of categories that may **enter and circulate but may not park**, with an
  **obligation to leave within sixty minutes**.
- **Article 17:** an absolute prohibition on parking and, separately, on stopping —
  *di sosta e di fermata* — **00:00 to 24:00** in **Via Mansone I, Piazza Duomo, Via
  Lorenzo d'Amalfi and Via Pietro Capuano**, rendered as a marked four-item list.
- The **hotel-garage provision**: vehicles bound for accommodation inside the zone with its
  own *garage pertinenziale* may enter, with the **accommodation business** required to
  communicate the plates to **Amalfi Mobilità**, and the narrow definition of such a garage.
- The **school-day closure 07:45–08:30 only**, with an explicit statement that further
  closures are fixed by a separate ordinance that was not obtained.
- **Attribution as required:** the page calls it the traffic regulation published by the
  Comune, "listed by the Comune as *Regolamento Viabilità 2025*", and states in its own
  callout that **no approval date and no deliberation number are printed in the document or
  given on the page that links it**. Neither was invented.

**From ordinance n. 4 of 28 March 2026 (seasonal, quarantined):**

- The ordinance number, Registro Generale number and date; the area; **in force 1 April to
  31 October 2026**; the four daily windows **11.10–11.50, 12.10–12.50, 14.10–14.50,
  15.10–15.50**; that all vehicle circulation was prohibited during them; that **taxi and
  private-hire vehicles were permitted when the pedestrian area was the start or the
  arrival point of the journey**; and that hotel guests were permitted a first access.

**From the Luna Rossa regulation of 3 August 2023, scoped to that facility:**

- Cars **under two metres gross height** including anything on the roof; **petrol, diesel
  or electric only, LPG and methane excluded even with a petrol invertor**; and that the
  car park is paid, uncustodied, video-monitored, cut into rock with forced-air
  ventilation, entered from the SS 163.

**The page's main answer**, stated in the hero lead, in the hero's second chooser row, in
an accent callout and in the FAQ: **permission to enter is not permission to stop.**

### Explicitly excluded

- **Any parking tariff.** The only published figures are in a document expressly
  *"decorrenti a far data dal 6.7.2011"*. They appear nowhere — swept and confirmed.
- **Any passenger meeting, pickup, waiting or drop-off point.** None is established; art. 17
  makes the obvious one unlawful. The page has a dedicated band saying so.
- **Any claim that we hold a municipal permit or special access.** The hotel-garage
  provision is stated as the hotel's arrangement with Amalfi Mobilità; the page says in
  terms that it is "not a permit we hold or can obtain on your behalf", and that no hotel's
  garage, licence or arrangement has been verified.
- **SS163 alternating-plate hours, dates, exemptions or legal detail.** Refused in a
  dedicated FAQ in the **same terms as the Positano page**, so the two agree.
- **The afternoon school-island hours.** Not obtained, not stated.
- **Any 2027 date.** Swept: "2027" appears only in the source file's comment and in **no
  rendered page**.
- Distances, durations, prices, vehicle capacities, availability guarantees, reviews,
  ratings or hotel partnerships — swept clean.
- The page states that a request is an enquiry and **not a confirmed booking**, in the
  closing note and in the final FAQ.
- The **1 January 2026 permit reset** is not used as a transfer claim. The Stage 2D research
  established it concerns residents' green, red and white *contrassegni* and does not
  mention taxi, NCC, buses or goods vehicles, so it is not material here.

---

## 5. Design — how Amalfi differs

| Page | Hero | Central modules |
|---|---|---|
| Naples hub | `HeroBand` | `DataTable` |
| Salerno airport | `HeroMeta` | `Callout` |
| Naples cruise terminal | `HeroConstraint` | `DataTable` |
| Caserta | `HeroGeo` | `CompareColumns` |
| Pompeii | `HeroModes` | `DefinitionList` |
| Positano | `HeroTiers` | `DataTable` + `NumberedSteps` |
| **Amalfi** | **`HeroChooser`** | **`FactStrip` + a marked street list** |

**Why `HeroChooser` rather than Positano's ladder.** `HeroTiers` suited Positano because
its evidence is one graded scale with a threshold on it. Amalfi's evidence is not a scale:
it is three unrelated questions whose answers point in different directions — you may drive
in, you may not stop, your hotel might get you closer. A ladder would imply a progression
the documents do not contain. The chooser's **second row contradicts its first on purpose**,
so a reader who gets no further than the hero has still met the page's central distinction.
**All three chooser anchors were verified to resolve to real sections** on both pages.

**Section sequence** — `access` → `stopping` → `meeting` → `hotel` → `parking` →
`seasonal` → `coverage` → `send` → `onward` → `questions` → `quote`. The first three bands
narrow deliberately: what is allowed, what is not, what nobody publishes. The access rules
are never the last thing on screen before the reader moves on.

**`FactStrip` carries the four daily windows** — four labelled cells in a four-column
grid, which is exactly what four time windows are. It is the first use of that block in
this cluster, so **no fourth `DataTable` was needed**. The four prohibited streets render
as a plain accent-framed list: four street names need no component.

Rendered heading outline `h1 h2 h2 h3 h2 h3 h2 h2 h2 h2 h3 h2 …` differs from Positano's
`h1 h2 h2 h2 h3 h3 h2 h2 …`, Caserta's and Pompeii's.

**Seven pages, seven heroes.** No global element was redesigned.

### Seasonal containment — how the brief's safeguard is implemented

1. The band is **sixth of eleven**, after every year-round section — verified from the
   rendered section order.
2. Its eyebrow reads **"A dated measure, not a standing rule"** and its heading names the
   year: **"The 2026 summer pedestrian island"**.
3. `seasonal.expiry` is a **required type field** and renders in an accent callout whose
   own heading is the validity period: *"This measure stops applying after 31 October 2026.
   Nothing on this page states or implies that it continues beyond that date…"*
4. `seasonal.successor` is likewise **required** and renders in the same callout, recording
   that the listings were checked on 27 October 2026 and no successor was found.
5. Past tense throughout the seasonal prose; present tense throughout the year-round bands.
6. The FAQ question is *"What was the summer pedestrian island, and does it still apply?"*
7. **"31 October 2026" appears 16 times** in the rendered English page.
8. The seasonal text states in terms that the permission was to **enter during a closure**,
   "not, and was not, permission to stop, and the four-street ban above applied regardless".

---

## 6. QA — commands run and actual results

**There is no test suite in this repository** (no vitest, jest or playwright). No automated
tests were run, and none are claimed.

| Check | Result |
|---|---|
| `npx tsc --noEmit` | **Clean** |
| `npx eslint .` | **Clean** |
| `npx next build` | **Compiled successfully**, **113/113** static pages, no errors or warnings |
| Counts | 54 ids / 108 route files / 108 sitemap URLs / 113 build pages — measured before and after |
| Both routes render | **200** each; one `<h1>`; 4 `hreflang` links; 2 JSON-LD blocks; **`img = 0`** |
| Canonical + hreflang | Self-canonical; `en`/`it`/`x-default` present and **reciprocal in both directions** |
| Language switcher | Exactly one anchor to the correct counterpart on each page |
| Breadcrumbs | `Home > Naples > Amalfi` · `Home > Napoli > Amalfi` |
| Hero chooser anchors | **All three resolve to real sections** on both pages (`#access`/`#stopping`/`#hotel`, `#accesso`/`#fermata`/`#albergo`) |
| Internal links, whole site | 108 distinct internal route hrefs crawled across all **108** pages; **every one resolves**. Only non-route hrefs are two build assets and the favicon, all 200 |
| Orphan check | **55 inbound pages** each; linked from the **Naples hub** and from **Positano**, in both locales — verified |
| Outbound source links | **All four resolve 200**, checked individually |
| Heading hierarchy | One `h1`, then `h2`/`h3`, **no skipped levels** on either page |
| No duplicate images | **`img = 0`** on both pages. The only Campania photograph keeps its single homepage placement; the image invariant holds |
| FAQ structured data vs visible content | **8/8** `Question` names per page found in that page's visible HTML, both locales. Types limited to `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` + `Question`/`Answer`/`ListItem`. **No** `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, `Place` or price schema |
| Seasonal wording cannot read as permanent | Verified mechanically — see §5, items 1–8 |
| Unresolved drop-off acknowledged | Verified — dedicated band, accent callout and FAQ answer all present in the rendered page |
| Forbidden-claim sweep | Clean for 2011 tariffs, any price, distances, durations, SS163 detail, afternoon school hours, named drop-off points, partnerships and 2027 dates. Four flagged hits inspected individually and all are refusals or false positives ("our own ope**rating** position", *"Nessuno che possiamo garantire"*, "not a permit we hold", "found **no** successor") |
| Responsive 320–1680 px | No horizontal scroll or overflow at any width on the **English** page |
| Browser console | **Zero** console errors or warnings, zero browser-log errors or warnings, zero failed network requests on both pages, headless Chrome 156 |
| No unrelated shared file changed | Verified by modification time — nothing under `components/site`, the other five clusters, or `content/home` |

### The 1024 px Italian header overflow — pre-existing, not a new defect

At exactly 1024 px the Italian page shows a 3 px overflow: `scrollWidth` 1012 against
`clientWidth` 1009. **Measured in this same QA run, on four pages:**

| Page | Result at 1024 px |
|---|---|
| `/it/destinazioni/amalfi` | 1012 / 1009 — offender is `<a>` "Richiedi un preventivo", **inside `<header>`** |
| `/it/destinazioni/firenze` | **identical** |
| `/it/destinazioni/bologna` | **identical** |
| `/it/` (Italian homepage) | **identical** |
| `/destinations/amalfi` (English) | 1009 / 1009 — **no overflow** |

The offending element is the shared header's Italian quote CTA, reproducing on pages that
long predate this work and absent from the English page. **It is pre-existing and
site-wide, it was not introduced here, and it was not touched.**

QA ran against `npx next start` on ports 3220 and 3221 and headless Chrome on 9585, all
started by this session, each **verified as mine by command line before being stopped**.
All three ports are released. **The user's `npm run dev` server (PID 18820) was identified
and left running.**

---

## 7. Remaining risks and owner decisions

1. **The seasonal ordinance expires on 31 October 2026 — four days from today.** The page
   is built so this does not break it: the spine is the year-round regulation and the
   seasonal band is dated and bounded. When a 2027 ordinance is published, only that band
   needs rewriting. **Do not assume the same windows return.**
2. **The regulation's approval date and deliberation number remain unknown.** Attributed as
   published, dated no further. If the Comune publishes the deliberation, the attribution
   can be sharpened.
3. **No official drop-off point exists.** Stated, not worked around. If an Area Vigilanza
   ordinance establishing one surfaces, `meeting` is where it goes.
4. **Owner decisions:** does the business serve Amalfi and can it work within a sixty-minute
   exit obligation? Does it operate any vehicle **over two metres tall or running on
   LPG/methane**, which the Luna Rossa regulation excludes? The page describes the rules
   either way, but the coverage statement in `OwnerNote` is the owner's and should be
   confirmed.
5. **Afternoon school-island hours** and **current car-park tariffs** are both unverified
   and absent.
6. **SS163 remains unreachable** from this environment.
7. **Meta descriptions run long by common guidance** — 169 and 185 characters. The English
   one was trimmed from 204 during this stage. Both sit inside the house distribution
   (median 164); normalising site-wide remains a separate decision.
8. **No Amalfi photograph exists**, so the page is text-led, as the other Campania pages are.

### Pre-launch only

`NEXT_PUBLIC_SITE_URL` is unset, so canonicals, hreflang and the sitemap emit
`http://localhost:3000` on all 108 pages — correct for local development, and **not treated
as a blocker**. Quote-enquiry delivery remains unverified end to end. Both wait for the
domain.

---

## 8. Confirmation

Stage 2E is complete and stopped. **No further stage was begun.** Nothing was committed,
pushed, deployed or published; no quote was submitted and no external booking was created.
No environment variable, domain, DNS, hosting, quote endpoint, CRM, email, API or database
setting was changed, no dependency was added, and no new shared component was created.
