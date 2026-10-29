# Campania cluster — Stage 2H implementation report

**27 October 2026.** One page id, two localized routes: **Naples Capodichino Airport**,
English and Italian. Nothing else was built. Nothing was committed, pushed, deployed or
published.

Neither `docs/campania-stage2f-…` nor `docs/campania-stage2g-…` exists on disk — both
audits were delivered for review and never authorised as files. The evidence baseline is
those audits as given in conversation, with every material source reopened and
re-verified before any copy was written.

---

## 1. Files created and modified

### Created

| File | Purpose |
|---|---|
| `content/campania/nap-airport.ts` | The page, both languages |
| `components/campania/nap-airport-page.tsx` | The view |
| `app/(en)/airports/naples-capodichino/page.tsx` | EN route: metadata + JSON-LD |
| `app/(it)/it/aeroporti/napoli-capodichino/page.tsx` | IT route: metadata + JSON-LD |

### Modified

| File | Change |
|---|---|
| `content/campania/types.ts` | Added `NaplesAirport`. **Five required fields**, each guarding a specific failure: `meeting` (no physical meeting point), `pickUp` (the two regimes kept apart), `closure.expiry`, `closure.successor`, and `zone.penaltiesSource` (the amounts must carry the operator's link, not the decree's) |
| `lib/routes.ts` | `"nap-airport"` in the `PageId` union and one record, parented to `naples`, priority 0.8 as for other airports. A comment records why it was deferred and what changed |
| `content/page-names.ts` | One breadcrumb name, "Capodichino" in both languages |
| `content/navigation.ts` | Campania-only: one label pair; `nap-airport` added ahead of Salerno in the existing `campania-airports` navbar group and the existing `campania` footer column |
| `content/campania/naples.ts` | The hub's onward index gained the airport in both languages |
| **`content/home/en.ts` and `content/home/it.ts`** | **The one homepage change, declared explicitly — see below** |

### The homepage change, in full

The homepage airport directory's type declares `page?: PageId` with the comment *"Set
once an airport page exists; the name becomes a link."* Eleven of its nineteen entries
carried it; Naples did not, because no page existed. **One field was added to one line in
each locale:**

```
{ name: "Naples (Capodichino)", code: "NAP", note: "Inside the Naples urban area.", page: "nap-airport" }
{ name: "Napoli (Capodichino)", code: "NAP", note: "Dentro l'area urbana di Napoli.", page: "nap-airport" }
```

No other homepage content, copy, ordering or layout changed, and **the intercity coverage
disclaimer is untouched** — still exactly one occurrence, unedited. The change is
reversible by deleting one field per locale, if you would rather the directory entry
stayed unlinked.

### Verified not touched

Nothing under `components/site`, `components/rome`, `components/milan`,
`components/veneto`, `components/tuscany`, `components/bologna`, `content/rome`,
`content/milan`, `content/veneto`, `content/tuscany` or `content/bologna` was modified —
checked by modification time. No new shared component, no new dependency, no router
change, no shared header or footer change, no environment variable, domain, DNS, hosting,
quote endpoint, CRM, email, API or database setting.

---

## 2. Page id, routes and counts

| Page id | English | Italian | Parent |
|---|---|---|---|
| `nap-airport` | `/airports/naples-capodichino` | `/it/aeroporti/napoli-capodichino` | `naples` |

Both paths were confirmed unused before editing and are exactly as reserved in
`docs/campania-url-map.md`. The slug follows the registry's `<city>-<airport>` rule.

| | Before | After |
|---|---|---|
| Registry page ids | 54 | **55** |
| Localized route files | 108 | **110** |
| Sitemap URLs | 108 | **110** |
| Production build static pages | 113 | **115** |

---

## 3. Sources checked

Both ordinances were re-downloaded today and confirmed **byte-identical by SHA-256** to
the copies read during the Stage 2G audit.

| Source | Authority | Date | Check |
|---|---|---|---|
| **ENAC Ordinanza n. 3/2025** — airport roads and parking | ENAC, Direzione Territoriale Campania | signed 4 Dec 2025, in force from 10 Dec 2025 | HTTP 200, SHA-256 `5cd2e3c7b9a36a24…` — unchanged |
| **ENAC Ordinanza n. 2/2026** — the November measure | ENAC, Direzione Territoriale Campania | 19 Oct 2026 | HTTP 200, SHA-256 `f1997751772cfc35…` — unchanged. Art. 1 re-read verbatim: *"dal 1° novembre 2026 al 30 novembre 2026 compresi"*, *"temporanea chiusura dello scalo"* |
| **GESAC ZTC guidance** — the operative summary and the penalty range | GE.S.A.C. S.p.A. | read 27 Oct 2026 | HTTP 200 |
| **GESAC homepage** — opening hours and the terminal rule | GE.S.A.C. S.p.A. | read 27 Oct 2026 | HTTP 200 |

**Successor check, required by the brief.** The operator's published list of ENAC
ordinances was read on **27 October 2026**. The most recent item is **n. 2/2026**; there
is nothing numbered after it and nothing extending or replacing it or n. 3/2025. The page
states that finding **with its date** and explicitly declines to present it as proof that
no later measure exists.

All three outbound URLs published on the page return **200**, checked individually.

---

## 4. Content safeguards

### The six actions, kept apart

The page's central module is a permissions matrix — the first `DataTable` on this site
that compares **actions** rather than places. Entering, transiting, *fermata*, *sosta*,
setting down and collecting each get their own row, with what the ordinance allows, where,
and the article. The note under it carries the practical consequence: **a departure and an
arrival are not mirror images here** — setting down happens at the kerb lane, collecting
at the car-park bays.

`fermata` and `sosta` are preserved as terms in the Italian and glossed in the English
("a brief stop" / "waiting or parking") without broadening either.

### The two regimes, never merged

A `CompareColumns` block holds the blue Pick-up bays beside the private-hire provision.
Verified present in the rendered page: the heading *"The blue Pick-up bays are not a
private-hire facility"*, the statement that they are *"not a general private-hire
entitlement"*, and the closing note that the airport's own public guidance *"does not
describe what a private-hire car is entitled to"*. The 2.0 m van exception has its own
band and says in terms that it *"does not extend to private-hire vehicles generally"*.

### No physical meeting point

Swept over the rendered page and **clean** on all four probes: no terminal exit, gate or
door number; no bay or stall number; no kerb or lane walking instruction; no "meet you at
…". The `meeting` band states that the ordinance locates its bays by reference to annexed
drawings that were not legible, that the page can therefore name the **category** of
permitted bay and not its position, and that the arrangement is confirmed with the driver.

### Penalties attributed correctly

The €80–318 range under Law 33/2012 appears **once**, in a callout that names the airport
operator's published guidance as its source, with its own `SourceNote` linking that
guidance — not the ordinance, which cites the law rather than the sum. This was added
after ESLint flagged the operator-source object as unused, which surfaced a real gap
rather than a lint nuisance. The copy adds that whether a given situation is penalised is
for the authorities and that nothing on the page is advice about it.

### The November notice, dated and bounded

Sixth-from-last band, after every year-round section. Eyebrow *"A dated notice, not a
standing rule"*; heading names the year; the ordinance number and date render as a label;
**"30 November 2026" appears 8 times** in the rendered English page. The required `expiry`
field states the measure *"applies only to that period"*; the required `successor` field
carries the check and its date. A limits callout states that the ordinance names no
airline, no rerouted flight, no alternative airport and nothing about afterwards, and that
the suspension covers only the 15-minute penalty — *"A suspended penalty is not a suspended
rule."*

### Not published

Fares, distances, durations, availability guarantees; any airline, rerouting or
cancellation beyond the ordinance; Salerno as an official alternative; any permit,
partnership or exclusive access of ours; any vehicle-height or equipment claim about our
own fleet; reviews, ratings or hotel partnerships; anything about what happens after
30 November 2026. A sweep returned eight hits, all inspected: six are refusals, one is the
file's own JSDoc listing what is excluded, one is the attributed penalty range.

---

## 5. Design

| Page | Hero | Central modules |
|---|---|---|
| Naples hub | `HeroBand` | `DataTable` (gateways) |
| Salerno airport | `HeroMeta` | `Callout` |
| Naples cruise terminal | `HeroConstraint` | `DataTable` (quays) |
| Caserta | `HeroGeo` | `CompareColumns` |
| Pompeii | `HeroModes` | `DefinitionList` |
| Positano | `HeroTiers` | `DataTable` + `NumberedSteps` |
| Amalfi | `HeroChooser` | `FactStrip` |
| **Naples Capodichino** | **`HeroConstraint`** | **`DataTable` (actions) + `CompareColumns`** |

**`HeroConstraint` is reused, deliberately.** Every remaining unused hero either needs a
photograph (none exists for this airport) or is route-shaped. More to the point, this page
has exactly the pairing that hero exists for: an unusually strong rule set **and** a hard
publishing limit, because the ordinance locates its bays by reference to unreadable
drawings. Its `unknown` block is required by the type, which is the structural guarantee
this page most needs. The trade is declared rather than hidden: the cruise terminal and
this page share an opening shape and nothing below it.

**Distinct from Salerno Airport** — different hero, a seven-column-wide action matrix
Salerno has nothing like, a two-regime comparison, and a dated closure band. **Distinct
from the Naples hub** — the hub's table compares four gateways; this one compares six
actions at one of them.

Rendered heading outline `h1 h2 h2 h3 h2 h2 h3 h3 h2 h2 h2 h2 h3 h2 …`, different from
every other Campania page.

**No new shared component was created**, and no dependency was added.

---

## 6. QA — commands run and actual results

**There is no test suite in this repository** (no vitest, jest or playwright). No
automated tests were run, and none are claimed.

| Check | Result |
|---|---|
| `npx tsc --noEmit` | **Clean** |
| `npx eslint .` | **Clean**, exit 0. Two warnings appeared mid-stage and were fixed by adding the operator source; the final run is clean |
| `npx next build` | **Compiled successfully**, **115/115** static pages, no errors or warnings |
| Counts | 55 ids / 110 route files / 110 sitemap URLs / 115 build pages — measured before and after |
| Both routes render | **200** each; one `<h1>`; 4 `hreflang` links; 2 JSON-LD blocks; `img = 0`; one `<table>` |
| Canonical + hreflang | Self-canonical; `en`/`it`/`x-default` present and **reciprocal in both directions** |
| Language switcher | Exactly one anchor to the correct counterpart on each page |
| Breadcrumbs | `Home > Naples > Capodichino` · `Home > Napoli > Capodichino` |
| Homepage directory link | **Both locales link**: EN from `/`, IT from `/it`. (An earlier check against `/it/` returned 0 — that path 308-redirects; `/it` is the served route) |
| Internal links, whole site | 110 distinct internal route hrefs crawled across all **110** pages; **every one resolves**. Only non-route hrefs are two build assets and the favicon, all 200 |
| Orphan check | **56 inbound pages** each |
| Outbound sources | **All three resolve 200**, checked individually |
| Heading hierarchy | One `h1`, then `h2`/`h3`, **no skipped levels** on either page |
| No duplicate images | `img = 0` on both; the image invariant holds |
| FAQ structured data vs visible content | **8/8** `Question` names per page found in that page's visible HTML, both locales. Types limited to `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` + `Question`/`Answer`/`ListItem`. **No** `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, price or guarantee schema |
| No physical meeting point | Four-probe sweep over the rendered page — **clean** |
| NCC rule not merged with Pick-up rule | Four markers verified present in the rendered page |
| November notice dated and bounded | Verified — see §4 |
| Responsive 320–1680 px | No horizontal scroll or overflow at any width on the **English** page |
| Browser console | **Zero** console errors or warnings, zero browser-log entries, zero failed requests, headless Chrome 156 |
| Meta descriptions | 150 (EN) and 161 (IT) characters, trimmed during this stage from 191 and 213 |

### The 1024 px Italian header overflow — pre-existing, not new

Measured in this same run across five pages:

| Page | At 1024 px |
|---|---|
| `/it/aeroporti/napoli-capodichino` | 1012 / 1009 — offender is the header's `Richiedi un preventivo` |
| `/it/aeroporti/salerno-costa-d-amalfi` | **identical** |
| `/it/destinazioni/firenze` | **identical** |
| `/it` (Italian homepage) | **identical** |
| `/airports/naples-capodichino` (English) | 1009 / 1009 — **no overflow** |

The offender is the shared header's Italian quote CTA, reproducing on pages that long
predate this work and absent from the English page. **Pre-existing, site-wide, not
introduced here and not touched.**

QA ran against `npx next start` on ports 3230 and 3231 and headless Chrome on 9595, all
started by this session and each **verified as mine by command line before being stopped**.
All three ports are released. **The user's `npm run dev` server (PID 18820) was identified
and left running.**

---

## 7. Owner confirmations still outstanding

The page was written so that none of these had to be answered to publish it. The coverage
statement uses the established `OwnerNote` pattern and says that whether a journey can be
arranged, which vehicle would be sent, and how the rules are handled on the day are all
settled in the reply to a request.

1. **Does the business currently arrange transfers to and from Capodichino?** Not asserted.
2. **Are any vehicles used over 2 metres tall?** Not asserted. The 2.0 m exception is
   described as the ordinance's rule, with the page stating explicitly that it makes no
   claim about the height of any vehicle that might be sent.
3. **How is the 15-minute limit and the once-per-day Pick-up rule handled operationally?**
   Not asserted. The page describes the rules and the operator's authorised-list and
   temporary-permit routes, and says we hold no such authorisation.

If you confirm any of these, the `OwnerNote` body is where they go.

---

## 8. Remaining risks

1. **The November closure begins in four days and ends on 30 November 2026.** The page's
   spine is the year-round ZTC regime, so it stays correct through and after the closure;
   only the dated band needs revisiting. Recheck the operator's ordinance list in early
   December.
2. **The annexed planimetries remain unread**, so no bay can ever be located from this
   page. If ENAC or the operator publishes a legible plan, the `meeting` band is where
   that changes.
3. **A citation discrepancy, deliberately not published.** Ordinanza 2/2026 suspends the
   penalty "under article 6, comma 5" of Ordinanza 3/2025, while in the text read the
   15-minute rule sits at comma 6 and comma 5 institutes the zone. Harmless to meaning;
   the page cites articles, never comma numbers.
4. **Ordinanza 01/2016** (*Regolamento servizio Taxi e NCC*) is not relied on. Ordinanza
   3/2025 art. 17 c.2 repeals earlier conflicting provisions from 10 December 2025, and
   3/2025 carries its own taxi and NCC articles.
5. **Penalty amounts are the operator's**, not the decree's, and are attributed as such.
6. **Meta descriptions** run slightly long by common guidance but sit inside the house
   distribution; normalising site-wide remains a separate decision.
7. **No photograph exists** for this airport, so the page is text-led, as the rest of the
   cluster is.

### Pre-launch only

`NEXT_PUBLIC_SITE_URL` is unset, so canonicals, hreflang and the sitemap emit
`http://localhost:3000` across all 110 pages — correct for local development and **not
treated as a blocker**. Quote-enquiry delivery remains unverified end to end.

---

## 9. Confirmation

Stage 2H is complete and stopped. **No further stage was begun.** Nothing was committed,
pushed, deployed or published; no quote was submitted and no external booking created. No
dependency was installed and no new shared component created. The only homepage change is
the single `page` field per locale described in §1, and the intercity coverage disclaimer
is unchanged.
