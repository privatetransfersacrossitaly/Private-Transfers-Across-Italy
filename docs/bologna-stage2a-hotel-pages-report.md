# Bologna cluster — Phase 2, Stage 2A implementation report

**27 October 2026.** Three hotel destination pages, English and Italian.
**Savoia Hotel Regency and all hotel–airport routes remain deferred.**

---

## 1. What shipped

| Page id | English | Italian |
|---|---|---|
| `hotel-majestic` | `/destinations/bologna/grand-hotel-majestic` | `/it/destinazioni/bologna/grand-hotel-majestic` |
| `hotel-commercianti` | `/destinations/bologna/art-hotel-commercianti` | `/it/destinazioni/bologna/art-hotel-commercianti` |
| `hotel-excelsior` | `/destinations/bologna/starhotels-excelsior` | `/it/destinazioni/bologna/starhotels-excelsior` |

All six paths are exactly as approved in `docs/bologna-url-map.md`. No slug
was invented and no convention was changed.

Registry **41 → 44** page ids. Site routes **82 → 88**. Sitemap **82 → 88**.

---

## 2. Files changed

### New — content (`content/bologna/`)

| File | Purpose |
|---|---|
| `hotel-majestic.ts` | The gap between the booking address and the address a car can reach |
| `hotel-commercianti.ts` | The hotel's published four-step arrival procedure |
| `hotel-excelsior.ts` | Three ways in, and an honest account of what nobody publishes |

### New — components (`components/bologna/`)

`hotel-majestic-page.tsx`, `hotel-commercianti-page.tsx`,
`hotel-excelsior-page.tsx`.

### New — six app route files

Under `app/(en)/destinations/bologna/…` and
`app/(it)/it/destinazioni/bologna/…`, each metadata + JSON-LD + component,
following the existing pattern.

### Modified — four files

| File | Change |
|---|---|
| `lib/routes.ts` | Three records added, parented to `bologna`. A comment records why Savoia is absent |
| `content/page-names.ts` | Three short breadcrumb/menu names |
| `content/navigation.ts` | Three items added to the **existing Bologna footer column**, plus their labels. **The navbar was deliberately not touched** |
| `content/bologna/types.ts` | `HotelLimits`, `MajesticHotel`, `CommerciantiHotel`, `ExcelsiorHotel`. Every hotel type carries a **required** `limits` block |
| `content/bologna/bologna.ts` | The hub's arrivals index gained the three hotels, both languages; two section leads widened accordingly |

**No new shared component was created.** All three pages are built from
existing heroes and blocks.

**Not touched:** `next.config.ts`, `lib/site.ts`, `lib/metadata.ts`,
`lib/structured-data.ts`, `app/sitemap.ts`, `app/robots.ts`,
`app/actions/quote.ts`, `lib/quote/*`, and every file under `content/rome`,
`content/milan`, `content/veneto`, `content/tuscany` — each verified at 0
files modified. `docs/Bologna_Cluster_Architecture.docx` is untouched at
41,859 bytes.

---

## 3. Page differentiation

Three genuinely different shapes, each driven by what that hotel actually
publishes.

| | Majestic | Commercianti | Excelsior |
|---|---|---|---|
| Hero | `HeroConstraint` | `HeroBand` | `HeroModes` |
| Dominant module | `CompareColumns` — two addresses for one building | `NumberedSteps` — a four-step procedure | `Paragraphs` + an accent limits callout |
| The argument | "the address you book is not the address a car goes to" | "a pedestrian address a car can still reach, by procedure" | "three ways in, and one of them may suit you better than we do" |
| Secondary module | `Checklist` of streets the hotel says you may not drive | the hotel's garage, for self-drivers | — |
| Photograph | none | none | none |

**The Phase 1 "ZTL tier" plan was dropped**, and this is the most important
design decision in the stage. Verification established that for two of the
three hotels **no source — municipal or otherwise — places the address inside
or outside the zone**. A tier label would have been a confident-sounding
invention. Differentiating on each hotel's own published arrival information
is better evidenced and sharper.

---

## 4. Sources used

| Claim | Source | Accessed |
|---|---|---|
| Majestic: address; Via dell'Indipendenza "totally pedestrianized"; side entrance at Via Manzoni 2; route via Via Galliera 23; valet; the hotel holds a municipality permission for its guests; named streets where driving is not allowed; ZTL entrance Via Marconi; car retrieval may take longer | The hotel's own published street-directions document, via `grandhotelmajestic.duetorrihotels.com` | 27 Oct 2026 |
| Commercianti: address; "area pedonale all'interno della zona a traffico limitato"; reachable by an authorised route; contact reception; the hotel registers the number plate; paid garage 07:00–22:00 | `art-hotel-commercianti.com` (official site; the `.it` 301-redirects here) | 27 Oct 2026 |
| Excelsior: address; motorway directions via the Tangenziale, exit 7; opposite the railway station; the Marconi Express stop is in front of the hotel | `starhotels.com` hotel and location pages | 27 Oct 2026 |
| The Marconi Express runs from the terminal to Bologna central station | Aeroporto G. Marconi di Bologna (Stage 1 source) | 27 Oct 2026 |
| ZTL 07:00–20:00 daily; Area T and pedestrian zones restricted 24 h | Fondazione Bologna Welcome (Stage 1 source) | 27 Oct 2026 |

### Claims intentionally omitted

- **Any ZTL classification for the Excelsior or Savoia.** No municipal source
  could be read and neither hotel mentions the zone. The Excelsior page says
  so in terms rather than leaving a gap.
- **Any airport distance.** The Excelsior publishes 11 km and Savoia 10 km;
  no authority confirms either. Verified absent from all six pages.
- **Any claim that the hotels' permissions cover our vehicles.** Each page
  carries a required limits block saying the opposite.
- **The Majestic's authorised route as something we may drive**, and
  **Commercianti's authorised route at all** — the hotel does not publish it.
- **Any drop-off or pickup point** at any of the three.
- **Room counts, star ratings, reviews, partnerships, fares, journey times.**
  Verified absent.
- **Whether the Comune permits or prohibits private hire as a category.**
  Unverified, and unchanged.

---

## 5. Internal links and navigation

- **Bologna hub** — the arrivals index now lists all three hotels, each with
  a one-line description of its specific access situation, in both languages.
- **Footer** — the three hotels were added to the **existing Bologna column**.
- **Navbar — deliberately not touched.** Verified: 0 hotel items in the
  navbar's Bologna group, 3 in the footer column. No global navigation
  structure changed.
- **Cross-links** — each hotel page links to `bologna`, `blq` and one other
  hotel chosen for contrast. No hotel links to all the others.
- **No links to pages that do not exist.** No hotel page references a
  hotel–airport route.

**Orphans: none.** Each of the three is reachable from the Bologna hub, from
BLQ's own cluster links, and from the footer on every page — confirmed
inbound from 4 of 4 sampled pages.

---

## 6. QA — commands actually run

| Check | Command / method | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **clean** |
| Lint | `npx eslint .` | **clean, exit 0** |
| Build | `npx next build` | **clean**, 93 routes, no errors or warnings |
| Route status | all 6 paths over HTTP | **6 × 200** |
| Unexpected routes | `find app -name page.tsx` | **88**, exactly 82 + 6 |
| Registry ↔ filesystem ↔ sitemap | counts compared | **44 / 88 / 88** — consistent |
| `<h1>` per page | DOM probe | **1 each** |
| Heading-level skips | DOM probe | **none** |
| Canonical + hreflang | HTML inspection | present and correct on all 6 |
| Language switch | EN→IT→EN round trip | **3/3 return to the original path** |
| Breadcrumbs | `BreadcrumbList` JSON-LD | `Home > Bologna > <hotel>` in both languages |
| Internal links | 69 distinct targets crawled | **all 200** |
| Orphans | inbound-link check | **none** |
| **External links** | all 4 fetched | **all 200 after a fix — see below** |
| Unrelated pages | href + `<h1>` comparison | only the 3 scoped footer links; bodies unchanged |
| Structured data | parsed | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` only |
| Console errors/warnings | CDP, 49 renders | **none** |
| Responsive | **320, 360, 390, 768, 1024, 1280, 1680 px** | **no horizontal scroll at any width on any page** |
| Accessibility probes | images without alt, empty `<th>`, links without accessible name | **0 / 0 / 0** |
| Claims sweep | rendered text of all 6 pages | no distances, ratings, reviews, partnerships, prices or room counts |

### A defect found and fixed during QA

The Italian Starhotels source link was **constructed rather than verified**,
and returned **404**. It was corrected to
`https://www.starhotels.com/it/i-nostri-hotel/excelsior-bologna/`, confirmed
200, and the site rebuilt. All four external links on these pages now resolve.

This is worth recording plainly: it is exactly the failure mode the
verification stage exists to prevent, and it got past me once.

### Not run

**No automated test suite exists** in this repository (no vitest, jest or
playwright configuration), so none was run. Human factual review of the
Italian is still advisable before launch; it was written rather than
translated, but has not been read by a native speaker.

---

## 7. Remaining blockers

### Factual

| Item | Severity |
|---|---|
| **Whether the hotels' own permissions extend to our vehicles.** Unresolved for the Majestic and Commercianti. Every page says so explicitly | **high** |
| **Comune di Bologna ZTL rules unreadable.** Both URLs return a Creative Commons licence page. Private-hire access as a category remains unestablished | **high** |
| **The Majestic's directions PDF carries no revision date.** The page tells readers to reconfirm with the hotel | medium |
| **No ZTL classification for the Excelsior.** Stated as unknown on the page | medium |
| **Savoia's own site contradicts itself** on distances; held for Wave 2 | medium |

### Technical

**`NEXT_PUBLIC_SITE_URL` is unset.** All 88 canonical URLs, every `hreflang`
and every sitemap `<loc>` resolve to `http://localhost:3000`, the six new ones
included. Read only, not changed — a separate authorised task.

**`QUOTE_ENDPOINT_URL` is unset.** No quote form is rendered and
`app/actions/quote.ts` is still called by nothing. Every hotel CTA points at
the existing `#request-a-quote` section, behaviour unchanged.

---

## 8. Deviations from plan

1. **The ZTL tier model was dropped** (see §3), replaced by per-hotel
   published arrival information. Recorded in the inventory, not silently.
2. **Commercianti's page premise was inverted.** Phase 1 planned "the car
   finishes nearby and the last stretch is on foot"; the hotel says a car can
   reach it by an authorised route. The page follows the hotel.
3. **`AddressTier` was not built.** The Phase 1 design proposed it; the tier
   model it existed to express is gone, so no new component was needed.
4. **Hotels went into the footer, not the navbar.** The brief asked for
   discoverability without global navigation changes; the footer's Bologna
   column already existed, so three items were added there and the navbar left
   alone.

---

## 9. Confirmation

**Savoia Hotel Regency is not implemented.** No registry entry, no route, no
link — the only mention is a comment in `lib/routes.ts` recording why.
Its inventory row was moved from `build` to `defer` with the evidence.

**No hotel–airport routes were implemented.** Verified: 0 files matching
`bologna-airport-to-*` or `*-to-bologna-airport`. The 15 other hotels remain
deferred.

**No commit, no push, no deployment.** The repository still has one commit.
No environment variable, `.env` file, DNS, hosting, API, CRM, email or quote
endpoint was created, changed or tested against. No quote form was submitted.
No dependency was added. The routing architecture is unchanged. Rome, Milan,
the Veneto and Tuscany are untouched, and the homepage was not modified in
this stage at all.

---

## 10. Next recommended phase

**Stage 3 — the four BLQ → hotel arrival routes**, reduced to **three** now
that Savoia is held: `route-blq-majestic`, `route-blq-commercianti`,
`route-blq-excelsior`. Three page ids, six localized routes.

Each has real material: the Majestic's route ends at a different street from
its address, Commercianti's ends in a procedure that must be started before
departure, and the Excelsior's honestly competes with a seven-minute monorail.

**Stage 4 — the three hotel → BLQ departure routes** follows, and remains the
first thing to cut if the pairs read as too close.

**Stopping here for review. Stage 3 has not been started.**
