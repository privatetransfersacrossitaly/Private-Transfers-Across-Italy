# Bologna cluster — departure guidance update

**27 October 2026.** Departure guidance added to the three existing BLQ → hotel
arrival pages, in both languages. **No new route, page id, URL or sitemap entry
was created.** The three hotel → BLQ departure routes remain deferred.

This implements §6 of `docs/bologna-stage4-feasibility-audit.md`.

---

## 1. Routes updated

Six existing localized routes, all already live before this task:

| Page id | English | Italian |
|---|---|---|
| `route-blq-majestic` | `/routes/bologna-airport-to-grand-hotel-majestic` | `/it/tratte/aeroporto-bologna-grand-hotel-majestic` |
| `route-blq-commercianti` | `/routes/bologna-airport-to-art-hotel-commercianti` | `/it/tratte/aeroporto-bologna-art-hotel-commercianti` |
| `route-blq-excelsior` | `/routes/bologna-airport-to-starhotels-excelsior` | `/it/tratte/aeroporto-bologna-starhotels-excelsior` |

Registry **47 page ids — unchanged.** Site routes **94 — unchanged.** Sitemap
**94 URLs — unchanged.**

---

## 2. Phase A — the plan, and what it rested on

The audit found that two of the three hotels publish **nothing** about leaving,
and that the third offered one sentence. The plan followed from that rather
than from a desire to fill three equal boxes:

| Page | Planned section | Why that length |
|---|---|---|
| Majestic | **Minimal reminder** | The hotel's directions are written for arriving guests only. Nothing verified exists about collection |
| Commercianti | **Minimal reminder** | The hotel publishes an arrival arrangement and plate registration, and nothing about departure |
| Excelsior | **Substantive, operator-sourced** | The Marconi Express operator publishes a service window that only matters on the way out |

The brief's instruction — *"if no new factual content can be established for a
page, use a minimal practical reminder rather than padding it with generic
text"* — is why two of the three sections are two paragraphs and a caveat, and
the third is three paragraphs with a source note. **The asymmetry is the
honest outcome, not an oversight.**

### The one statement requiring fresh research

The audit flagged the Excelsior's only new fact as the hotel's vague *"runs
service from morning until midnight"*. The brief required going to the
operator instead. That was done — see §4 — and the operator's figures replaced
the hotel's entirely. **The hotel's phrasing is not used anywhere.**

---

## 3. What each section says

### Majestic — "Leaving for the airport"

Two paragraphs. The hotel's directions document is written for arrivals and
says nothing about a car collecting someone; we will not fill that silence with
an invented procedure. A departure here is arranged rather than looked up: ask
the hotel what it expects, tell us, and the arrangement is built on the answer.

Its closing note: *"No collection point, waiting arrangement or lead time is
stated here, because none is published and none may be assumed. The hotel's
access permission remains the hotel's, exercised through its own valet, and
nothing on this page extends it to our vehicles."*

**The hotel's car-retrieval statement was not repurposed.** Verified: 0
occurrences across all six pages.

### Commercianti — "Leaving for the airport"

Two paragraphs. The authorised route and plate registration are published as
part of how guests *arrive*. Whether the same applies to a collection, and
whether a plate is needed again, are questions the hotel has not answered
publicly — so they are questions for the hotel, not facts to read here. A
departure is settled twice over: once with the hotel, once with us.

Its note rules out the four forbidden inventions by name: *"No departure route,
collection point, registration deadline or walking distance is stated here. The
hotel's arrangement is made for its guests and does not automatically cover a
vehicle arriving on your behalf."*

### Excelsior — "Leaving for the airport"

Three paragraphs, and the only one with a source note.

The monorail keeps hours: a service window **05:40 to midnight**, a train
roughly every seven minutes at peak and every fifteen off-peak, with **bus line
Q** covering the link between midnight and 05:40. That difference only bites on
the way out — an early flight can want you at the airport before the monorail
starts, a late one can return you after it stops, neither of which arises when
you arrive on your own schedule.

It then repeats the page's existing honesty rather than retreating from it:
*"for a light traveller leaving at a civil hour from a hotel facing the
station, the train is hard to beat. Which suits you depends on your flight time
and what you are carrying, not on what we would rather you chose."*

---

## 4. Marconi Express source

| | |
|---|---|
| **Publisher** | Marconi Express S.p.A. — the line's operator |
| **URL (EN)** | `https://www.marconiexpress.it/en/timetable/` |
| **URL (IT)** | `https://www.marconiexpress.it/it/orari/` |
| **Accessed** | **27 October 2026** |
| **Used** | Service window *"active from 5:40 AM to midnight"*; *"during peak hours there is a train about every 7 minutes"* and *"in the hours of low inflow a train every 15 minutes"*; and, from the operator's homepage, *"From 0:00 to 5:40 bus line Q between airport and central station"* |
| **Not used** | The hotel's vague *"morning until midnight"* |
| **Limitation recorded on the page** | The operator publishes **no individual first or last departure times** and **no validity date** for the timetable. The page therefore gives a service *window*, not a last train, and tells the reader to check the operator's timetable for their own date |

Both URLs verified **HTTP 200** on 27 October 2026, as were the two existing
Bologna Airport source links on these pages.

---

## 5. Claims intentionally omitted

Verified absent from all six pages by automated sweep of 57,860 characters of
rendered main content:

- **Any lead time or departure margin** — "allow … hours", "lead time of",
  "arrive … minutes before" all **0**. No road journey time exists in either
  direction, so none is suggested.
- **Any road journey time, fare or distance** — ` km `, `€` both **0**.
- **Any collection or pickup point**, at a hotel or the airport. The five
  "pickup point" matches are all the existing refusals — *"The airport
  publishes no pickup point for private hire"*.
- **Any claim that a hotel's permission covers our vehicles** — "our permit",
  "nostro permesso" both **0**.
- **Flight monitoring, waiting policies, guarantees** — "flight monitoring",
  "monitoraggio", "guarantee", "garanzia" all **0**.
- **Any claim that the monorail always suits** — "always", "sempre" both **0**.
- **A departure route, plate deadline, access permission or required walking
  distance** for Commercianti.
- **The Majestic's car-retrieval statement** as transfer guidance — **0**.

---

## 6. Implementation

### Files changed — three

| File | Change |
|---|---|
| `content/page-types.ts` | An **optional** `departure` field added to the shared `RoutePage` type, with a comment recording why |
| `components/rome/route-page.tsx` | A guarded `{c.departure ? … : null}` band rendering it between "What to send" and the questions, plus a `Paragraphs` import |
| `content/bologna/hotel-routes.ts` | Six `departure` sections, three EN and three IT |

**No new component was created**, and **no new route, page id, URL, sitemap
entry, registry record or navigation item** was added. This follows the
`lead.source` precedent from the Tuscany cluster: an optional field on a shared
type, guarded at the render site.

**Untouched, each verified at 0 files modified:** `lib/routes.ts`,
`content/page-names.ts`, `content/navigation.ts`, `app/sitemap.ts`,
`app/robots.ts`, `lib/site.ts`, `lib/metadata.ts`, `lib/structured-data.ts`,
`app/actions/quote.ts`, `lib/quote/*`, `components/site/heroes.tsx`,
`components/site/blocks.tsx`, every `app/**/page.tsx`, and all of
`content/rome`, `content/milan`, `content/veneto`, `content/tuscany`,
`content/home`. The DOCX master is untouched at 41,859 bytes.

---

## 7. QA — commands actually run

| Check | Command / method | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **clean** |
| Lint | `npx eslint .` | **clean, exit 0** |
| Build | `npx next build` | **clean**, 99 routes, no errors or warnings |
| Route status | all 6 updated paths | **6 × 200** |
| **No new routes** | `find app -name page.tsx` | **94 — unchanged** |
| **No new URLs** | registry + sitemap counts | **47 ids / 94 sitemap URLs — both unchanged** |
| Section renders | `id="going-back"` / `id="ritorno"` | present on **6 of 6** |
| **Other clusters unaffected** | same probe on 5 route pages in Rome, Milan, Tuscany, Veneto and the Ravenna cluster | **0 of 5** show a departure section; `<h1>`s unchanged |
| Heading order | DOM extract | `h1 → … → What to send → Leaving for the airport → About this journey → Related` |
| `<h1>` per page | DOM probe | **1 each** |
| Heading-level skips | DOM probe | **none** |
| Language switch | EN→IT→EN round trip | **3/3** |
| Internal links | 75 distinct targets | **all 200**, 0 broken |
| **External links** | all 4 fetched | **all 200** |
| Console errors/warnings | CDP, 42 renders | **none** |
| Responsive | **320, 360, 390, 768, 1024, 1280, 1680 px** | **no horizontal scroll at any width on any page** |
| Accessibility probes | images without alt, empty `<th>`, links without accessible name | **0 / 0 / 0** |
| Claims sweep | 18 forbidden patterns over 57,860 chars | all **0** except the five pickup-point refusals, checked in context |

### Not run

**No automated test suite exists** in this repository (no vitest, jest or
playwright configuration), so none was run. The Italian was written rather than
translated and has still not been read by a native speaker.

---

## 8. Confirmation

**The three departure routes remain deferred.** `route-majestic-blq`,
`route-commercianti-blq` and `route-excelsior-blq` have no registry entry, no
page file and no link. `route-savoia-blq` and the Savoia hotel remain deferred
too. **No new URL of any kind was created** — the route count, registry count
and sitemap count are all identical to before this task.

**No unrelated page or configuration was changed.** Rome, Milan, the Veneto,
Tuscany, the homepage and the navigation are untouched; their route pages were
checked directly and show no departure section.

`NEXT_PUBLIC_SITE_URL` remains unset and was not touched — all 94 canonicals,
hreflang entries and sitemap URLs still resolve to `localhost:3000`.
`QUOTE_ENDPOINT_URL` remains unset; no quote form is rendered, no submission
flow was created, and no page claims an enquiry has been sent.

**No commit, no push, no deployment.** One commit in the repository, unchanged.
No environment variable, `.env` file, API, CRM, email, DNS or hosting
configuration was created or altered. No dependency was added.

---

## 9. Remaining limitations

- **The Majestic and Commercianti sections remain thin by necessity.** Neither
  hotel publishes departure information. They will stay short until one of them
  does, or until the owner supplies confirmed operational practice — which would
  be owner-provided information and would have to be presented as such.
- **No departure lead time anywhere.** No authoritative road journey time
  exists for these routes in either direction.
- **The Marconi Express timetable gives no individual departures and no
  validity date**, so the Excelsior section states a window and sends the
  reader to the operator.
- **Whether the hotels' permissions extend to our vehicles** is still
  unresolved, as is the **Comune di Bologna's ZTL position on private hire**.

**Stopping for review.**
