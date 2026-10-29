# Bologna cluster — Phase 2, Stage 3 implementation report

**27 October 2026.** Three BLQ → hotel arrival routes, English and Italian.
**Savoia and all hotel → BLQ departure routes remain deferred.**

---

## 1. What shipped

| Page id | English | Italian |
|---|---|---|
| `route-blq-majestic` | `/routes/bologna-airport-to-grand-hotel-majestic` | `/it/tratte/aeroporto-bologna-grand-hotel-majestic` |
| `route-blq-commercianti` | `/routes/bologna-airport-to-art-hotel-commercianti` | `/it/tratte/aeroporto-bologna-art-hotel-commercianti` |
| `route-blq-excelsior` | `/routes/bologna-airport-to-starhotels-excelsior` | `/it/tratte/aeroporto-bologna-starhotels-excelsior` |

All six paths are exactly as approved in `docs/bologna-url-map.md`. No slug
was invented.

Registry **44 → 47** page ids. Site routes **88 → 94**. Sitemap **88 → 94**.

---

## 2. Files changed

### New

| File | Purpose |
|---|---|
| `content/bologna/hotel-routes.ts` | All three routes, both languages, in one file — so the three leading modules are visible side by side and a fourth cannot be added without seeing what it has to differ from |
| Six `app/…/page.tsx` files | Metadata + JSON-LD + the shared `RoutePageView`, following the existing pattern |

### Modified

| File | Change |
|---|---|
| `lib/routes.ts` | Three records, parented to `blq`. A comment records why the departure routes and Savoia are absent |
| `content/page-names.ts` | Three short breadcrumb names |
| `content/navigation.ts` | **Labels only.** No new navigation item was added at this stage |
| `content/bologna/blq.ts` | The airport's onward index gained all three arrival routes, both languages |
| `content/bologna/hotel-majestic.ts`, `hotel-commercianti.ts`, `hotel-excelsior.ts` | Each hotel's onward index now leads with its own arrival route, both languages |

**No new component was created.** All three pages use the existing shared
`RoutePageView` and its `lead` slot.

**Not touched** — each verified at 0 files modified: `next.config.ts`,
`lib/site.ts`, `lib/metadata.ts`, `lib/structured-data.ts`, `app/sitemap.ts`,
`app/robots.ts`, `app/actions/quote.ts`, `lib/quote/*`,
`components/rome/route-page.tsx`, `components/site/heroes.tsx`,
`components/site/blocks.tsx`, `content/home/*`, and every file under
`content/rome`, `content/milan`, `content/veneto`, `content/tuscany`.
`docs/Bologna_Cluster_Architecture.docx` untouched at 41,859 bytes.

---

## 3. Differentiation

Three different leading modules, each chosen by what the hotel at the far end
actually publishes.

| | Majestic | Commercianti | Excelsior |
|---|---|---|---|
| Leading module | `DefinitionList` | `NumberedSteps` | `CompareColumns` |
| The subject | whose arrangement is whose | a sequence that starts before the flight | two genuine options |
| What it turns on | the hotel's permission is **not ours** | the hotel registers a plate, so timing matters | the monorail goes where you are going |
| Prepare list | 5 items, last is "what the hotel told you" | 5 items, last is "has reception asked for a plate?" | 4 items — the shortest in the cluster |

**The Excelsior page is the honesty test**, and it passes in three places: the
hero lead, the comparison column, and the first question — *"Should I just
take the Marconi Express?" — "Quite possibly, and it depends on your
circumstances rather than on ours."* Its closing line puts the same point
plainly: *"including whether you need us at all, which is a question worth
asking before you book anybody."*

---

## 4. Sources and attribution

| Claim | Source | Accessed |
|---|---|---|
| Marconi Express: monorail to Bologna Centrale, stated 7-minute ride, every 7/15 min, two stations | Aeroporto G. Marconi di Bologna, © 2026 | 27 Oct 2026 |
| The airport publishes **no** pickup arrangement for private hire | same (a verified negative) | 27 Oct 2026 |
| Majestic: pedestrianised address, Via Manzoni 2 side entrance, Via Marconi gate, hotel-held municipality permission, undated document | The hotel's own street-directions document | 27 Oct 2026 |
| Commercianti: pedestrian area inside the ZTL, authorised route, contact reception, plate registration | `art-hotel-commercianti.com` | 27 Oct 2026 |
| Excelsior: address, opposite the railway station, Marconi Express stop in front | `starhotels.com` | 27 Oct 2026 |

The seven-minute figure appears **three times, attributed to the airport every
time**, and the Excelsior page states explicitly that it "is the airport's
own, for the monorail, and is not a road journey time."

### Claims intentionally omitted

- **Any fare, distance or journey time.** Verified absent: `11 km`, `10 km`,
  ` km `, `€`, `EUR` all return **0** across the six pages.
- **Any claim that a hotel's permission or arrangement covers our vehicles.**
  Verified absent: "our permit", "we are authorised", "nostro permesso",
  "siamo autorizzati" all **0**. Each page says the opposite in terms.
- **The Majestic's route as something we may drive**, and **Commercianti's
  authorised route at any level of detail** — the hotel does not publish it.
- **Any pickup or drop-off point**, at the airport or at any hotel.
- **Any ZTL classification for the Excelsior.** Verified absent: "outside the
  ZTL" / "fuori dalla ZTL" both **0**.
- **Flight monitoring, waiting-time policy, guarantees, partnerships.**
  Verified absent.
- **Any claim that the monorail is always the best choice**, or that the
  Commercianti journey is impossible or must end on foot.

---

## 5. Internal links and language switch

- Each route links **its hotel, the BLQ page and the Bologna hub** — verified
  1 hub link, 1 BLQ link and its hotel on every one.
- Each hotel page's onward index now **leads with its own arrival route**.
- The BLQ page's onward index carries **all three**.
- **No links to deferred pages.** Verified: **0** hrefs matching
  `*-to-bologna-airport` on any Stage 3 page.
- **No new navigation item** was added, so unrelated pages are unchanged —
  verified 0 `bologna-airport-to` hrefs on `/destinations/rome` and
  `/it/destinazioni/venezia`, with their `<h1>`s intact.

**Orphans: none.** Each route has inbound links from the BLQ page and from its
own hotel page.

**Language switch: 3/3 round-trip correctly.**

---

## 6. QA — commands actually run

| Check | Command / method | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **clean** |
| Lint | `npx eslint .` | **clean, exit 0** |
| Build | `npx next build` | **clean**, 99 routes, no errors or warnings |
| Route status | all 6 paths over HTTP | **6 × 200** |
| Unexpected routes | `find app -name page.tsx` | **94**, exactly 88 + 6 |
| Registry ↔ filesystem ↔ sitemap | counts compared | **47 / 94 / 94** — consistent |
| `<h1>` per page | DOM probe | **1 each** |
| Heading-level skips | DOM probe | **none** |
| Canonical + hreflang | HTML inspection | present and correct on all 6 |
| Language switch | EN→IT→EN round trip | **3/3** |
| Breadcrumbs | `BreadcrumbList` JSON-LD | `Home > Bologna > Marconi (BLQ) > <route>`, both languages |
| Internal links | 75 distinct targets crawled | **all 200**, 0 broken |
| Orphans | inbound-link check | **none** |
| Links to deferred pages | href scan | **0** |
| Unrelated pages | href + `<h1>` comparison | unchanged |
| Structured data | parsed | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` only |
| Console errors/warnings | CDP, 42 renders | **none** |
| Responsive | **320, 360, 390, 768, 1024, 1280, 1680 px** | **no horizontal scroll at any width on any page** |
| Accessibility probes | images without alt, empty `<th>`, links without accessible name | **0 / 0 / 0** |
| Claims sweep | rendered text of all 6 pages (58,700 chars) | 21 forbidden patterns checked, **all 0** |

### Not run

**No automated test suite exists** in this repository (no vitest, jest or
playwright configuration), so none was run. The Italian was written rather
than translated but has not been read by a native speaker — still advisable
before launch.

---

## 7. Remaining blockers

### Factual

| Item | Severity |
|---|---|
| **Whether the hotels' own permissions and arrangements extend to our vehicles.** Unresolved for the Majestic and Commercianti; both route pages say so explicitly | **high** |
| **Comune di Bologna ZTL rules unreadable.** Private-hire access as a category remains unestablished | **high** |
| **The airport publishes no private-hire pickup point.** All three routes settle the meeting arrangement in the reply instead | medium |
| **The Majestic's directions document carries no revision date** | medium |
| **No ZTL classification for the Excelsior** | medium |

### Technical

**`NEXT_PUBLIC_SITE_URL` is unset.** All 94 canonical URLs, every `hreflang`
and every sitemap `<loc>` resolve to `http://localhost:3000`, the six new ones
included. Read only, not changed — a separate authorised task.

**`QUOTE_ENDPOINT_URL` is unset.** No quote form is rendered,
`app/actions/quote.ts` is still called by nothing, and every CTA on these
pages points at the existing `#request-a-quote` section. No page claims an
enquiry has been sent.

---

## 8. Confirmation

**Savoia Hotel Regency remains deferred.** No hotel page, no route, no link.
`route-blq-savoia` stays `defer` in the inventory. Verified: **0** files
matching `*savoia*` under `app/`.

**All hotel → BLQ departure routes remain deferred.** Verified: **0** files
matching `*-to-bologna-airport*` or `*-aeroporto-bologna*` beyond the three
arrival routes, and **0** registry entries for `route-majestic-blq`,
`route-commercianti-blq`, `route-excelsior-blq` or `route-blq-savoia`. Their
inventory rows are marked `defer` with the reason.

**No commit, no push, no deployment.** The repository still has one commit.
No environment variable, `.env` file, DNS, hosting, API, CRM, email or quote
endpoint was created, changed or tested against. No quote form was submitted.
No dependency was added. The routing architecture is unchanged. Rome, Milan,
the Veneto, Tuscany and the homepage are untouched.

---

## 9. Next recommended phase

**Stage 4 — the three hotel → BLQ departure routes**: `route-majestic-blq`,
`route-commercianti-blq`, `route-excelsior-blq`. Three page ids, six
localized routes.

They have a real argument available. Bologna's restriction runs 07:00–20:00,
so an arrival at 21:40 meets an unrestricted city while a departure at 08:00
from the same address does not — the asymmetry `docs/bologna-phase1-recommendation.md`
§3 set out. For the Majestic and Commercianti, both effectively restricted
around the clock, that asymmetry is weaker, and the departure problem there is
practical instead: getting out to meet a car with luggage at an hour when the
hotel's own arrangement may not yet be staffed.

**Stage 4 remains the first thing to cut** if the pairs read as too close.
That judgement was recorded in Phase 1 and nothing since has changed it.

**Stopping here for review. Stage 4 has not been started.**
