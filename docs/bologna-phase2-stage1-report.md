# Bologna cluster — Phase 2, Stage 1 implementation report

**27 October 2026.** Stage 1 of the approved Phase 1 plan: **6 page ids, 12
localized routes.** The four hotel pages and their eight route pages are
**not** implemented, as instructed.

---

## 1. What shipped

| Page id | English | Italian |
|---|---|---|
| `bologna` | `/destinations/bologna` | `/it/destinazioni/bologna` |
| `blq` | `/airports/bologna-marconi` | `/it/aeroporti/bologna-marconi` |
| `ravenna` | `/destinations/ravenna` | `/it/destinazioni/ravenna` |
| `ravenna-terminal` | `/cruise-ports/ravenna-porto-corsini` | `/it/porti-crociere/ravenna-porto-corsini` |
| `route-terminal-ravenna` | `/routes/ravenna-cruise-terminal-to-ravenna` | `/it/tratte/terminal-crociere-ravenna-citta` |
| `route-ravenna-terminal` | `/routes/ravenna-to-ravenna-cruise-terminal` | `/it/tratte/ravenna-terminal-crociere` |

All twelve paths are exactly as specified in `docs/bologna-url-map.md`. No URL
convention was invented.

Registry: **35 → 41** page ids. Site routes: **70 → 82**. Sitemap: **70 → 82**.

---

## 2. Files changed, and why

### New — content (`content/bologna/`)

| File | Purpose |
|---|---|
| `types.ts` | `BolognaHub`, `BlqAirport`, `RavennaHub`, `RavennaTerminal`, plus `TierModel` and `SourceDisagreement`. The terminal's `unknown` field is **required**, so a later edit cannot drop the caveat and keep the page |
| `bologna.ts` | The hub, organised around the three restriction tiers |
| `blq.ts` | The airport: what the operator publishes beside what it does not |
| `ravenna.ts` | A deliberately short hub whose one job is "the port is not in the city" |
| `terminal.ts` | Porto Corsini, including the three-publisher disagreement as data |
| `routes.ts` | Both terminal directions — the first genuinely bidirectional pair on this site |

### New — components (`components/bologna/`)

`bologna-hub.tsx`, `blq-page.tsx`, `ravenna-hub.tsx`, `terminal-page.tsx`.

### New — 12 app route files

Under `app/(en)/…` and `app/(it)/it/…`, each one metadata + JSON-LD + the
page component, following the existing pattern exactly.

### Modified — six files, each minimally

| File | Change |
|---|---|
| `lib/routes.ts` | Six records added. Nothing existing touched |
| `content/page-names.ts` | Six short names for breadcrumbs and menus |
| `content/navigation.ts` | One Destinations group, one Airports group, one footer column — **Bologna entries only** |
| `content/home/en.ts`, `it.ts` | **One field per language.** The BLQ airport-directory entry, which already existed with the note "North-west of the city centre", gained `page: "blq"`. No copy, tile, layout or other entry altered |
| `components/site/heroes.tsx` | `HeroTiers` added (the fourteenth hero). No existing hero modified |

**Not touched:** `next.config.ts`, `lib/site.ts`, `lib/metadata.ts`,
`lib/structured-data.ts`, `app/sitemap.ts`, `app/robots.ts`,
`app/actions/quote.ts`, `lib/quote/*`, and every file under `content/rome`,
`content/milan`, `content/veneto`, `content/tuscany`. Verified by timestamp:
0 files modified in each.

`docs/Bologna_Cluster_Architecture.docx` is untouched at 41,859 bytes.

---

## 3. Navigation and internal links

**Option A, scoped to Bologna.**

- Destinations → new "Bologna and Romagna" group: Bologna, Ravenna, Ravenna
  Cruise Terminal.
- Airports → new "Emilia-Romagna" group: Bologna Marconi (BLQ).
- Footer → an eighth column, "Bologna and Romagna", with the same four pages.
- Homepage → the existing BLQ directory entry now links to the BLQ page.

**Verified on unrelated pages:** `/destinations/rome`, `/destinations/milan`
and `/it/destinazioni/venezia` each show exactly **four** Bologna/Ravenna
targets at **two occurrences each** — navbar and footer, nothing else — and
their own `<h1>` and body content are unchanged.

The homepage's "Also asked about" list still names Bologna as plain text,
governed by its existing note that naming a city does not mean a page exists.

**Orphans: none.** The four hub pages are linked from every page on the site.
The two route pages are linked from both their endpoint pages and from each
other — the same pattern as every existing route page (checked against
`/routes/verona-airport-to-verona`, which likewise has no global nav entry).

---

## 4. Sources used

| Claim | Publisher | Accessed |
|---|---|---|
| ZTL 07:00–20:00 daily; Sirio gates; **Area T and pedestrian zones restricted 24 h**; concessions exist for hotel access | Fondazione Bologna Welcome (official tourist board), © 2026 | 27 Oct 2026 |
| Marconi Express: monorail to Bologna Centrale, two stations, stated 7-minute ride, every 7/15 min | Aeroporto G. Marconi di Bologna, © 2026 | 27 Oct 2026 |
| The airport publishes **no** private-hire pickup point, no fare, no road distance | same (a verified negative) | 27 Oct 2026 |
| Pier address; **temporary marquee in use as terminal**; bus 90; taxi arrangements; ~150 free parking spaces | Ravenna Cruise Port (operator), © 2023 | 27 Oct 2026 |
| "About 15 km"; bus stop a 10-minute walk; **taxis limited and cannot be booked in advance** | Visit Ravenna (tourism authority) | 27 Oct 2026 |
| Seasonal third-party shuttles, incl. one route "to be defined" | Comune di Ravenna, last modified 19 Jan 2026 | 27 Oct 2026 |

Owner-confirmed operating information — BLQ coverage, timed-ZTL access,
Ravenna/Porto Corsini coverage, and a valid-authorisation approach at
restricted addresses — is stated on the pages **as our own position**, never
as a public-source fact, an endorsement, or a guarantee that any particular
door can be reached.

### Claims deliberately omitted

- **Any distance between Porto Corsini and Ravenna.** Two official publishers
  say 13 km and "about 15 km". The terminal page shows both, attributed, and
  says in terms that averaging them would invent a figure nobody stated.
- **Any journey time or fare**, anywhere in the cluster.
- **Any pickup, set-down or meeting point** at BLQ or at the port. Neither
  operator publishes one.
- **Whether private-hire vehicles may enter Bologna's ZTL as a category.** The
  Comune's own rules could not be read; one third-party guide claims an
  exemption and is not treated as evidence.
- **The procedure behind the hotel-access concession.** Bologna Welcome says
  it exists; it does not publish how it works.
- **The three NCC firms and two taxi firms the airport lists.** Verified
  absent from all 12 pages (Amne, Cosepuri, Saca, Cotabo: 0 occurrences).
- **Ship tracking, delay contingency, port permissions, a terminal building.**

---

## 5. QA results — all actually run

| Check | Command / method | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **clean** |
| Lint | `npx eslint .` | **clean, exit 0** (one unused-import warning found and fixed) |
| Build | `npx next build` | **clean**, 87 routes generated, no errors or warnings |
| Route status | all 12 paths over HTTP | **12 × 200** |
| Unexpected routes | `find app -name page.tsx` | **82**, exactly 70 + 12 |
| Registry ↔ filesystem ↔ sitemap | counts compared | **41 ids / 82 routes / 82 sitemap URLs** — consistent |
| Sitemap entries | `<loc>` extraction | **exactly 12** Bologna/Ravenna URLs |
| `<h1>` per page | DOM probe | **1 each** |
| Heading-level skips | DOM probe | **none** |
| Canonical + hreflang | HTML inspection | present and correct on all 12 |
| Language switch | EN→IT→EN round trip | **6/6 return to the original path** |
| Breadcrumbs | `BreadcrumbList` JSON-LD | correct in both languages |
| Internal links | 67 distinct targets crawled | **all 200** |
| Orphans | inbound-link check | **none** |
| Unrelated pages | href + `<h1>` comparison | only the 4 scoped nav targets; bodies unchanged |
| Structured data | parsed | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` only |
| Console errors/warnings | CDP, 84 renders | **none** |
| Responsive | **320, 360, 390, 768, 1024, 1280, 1680 px** | **no horizontal scroll at any width on any page** |
| Accessibility probes | images without alt, empty `<th>`, links without accessible name, table caption | **0 / 0 / 0**, table captioned |
| Forbidden-claims sweep | rendered text of all 12 pages | no competitor names, no prices, no guarantees except explicit denials |

**Human factual review (not automated):** the source table in §4 was read and
transcribed by hand; the Italian was written rather than translated. Both
still warrant a native-speaker read before launch.

### Not run

- **No automated test suite exists** in this repository (no vitest, jest or
  playwright config), so none was run.
- **The BLQ 2025 service charter** (`CDS2025.pdf`) was not retrieved. No
  published claim depends on it.

---

## 6. Deviations from the approved Phase 1 plan

Three, all minor and all upward:

1. **`HeroConstraint` was reused for the terminal page**, where Phase 1
   proposed `HeroBand` plus a separate table. The constraint hero already
   models "here is what is settled, here is what is not, here is the
   authority", which is this page's exact problem. One fewer new component.
2. **`DataTable` was reused for the source disagreement** instead of a new
   `SourceDisagreement` module. The existing block took the shape unchanged.
3. **`questionHeading` was added to the `SourceDisagreement` type** during
   implementation so the table's row-label column has a real `<th>` rather
   than an empty one.

Net effect: **one new component (`HeroTiers`) instead of two.** `AddressTier`
was not built — it belongs to the hotel pages, which are Stage 2.

---

## 7. Remaining blockers

### Launch blocker, site-wide, untouched

**`NEXT_PUBLIC_SITE_URL` is unset.** All 82 canonical URLs, every `hreflang`
and every sitemap `<loc>` resolve to `http://localhost:3000`, including the 12
new ones — visible in the sitemap extract in §5. This was read only and not
changed, per instruction, and remains a separate authorised task.

**`QUOTE_ENDPOINT_URL` is unset.** `deliverQuoteRequest()` returns
`not_configured`. No quote form is rendered anywhere and `app/actions/quote.ts`
is still called by nothing, so no page implies a working booking flow. Every
Bologna CTA points at the existing `#request-a-quote` section, unchanged.

### Bologna-specific, for the unresolved-issues register

| Item | Severity | Decision needed |
|---|---|---|
| Comune di Bologna's own ZTL rules unreadable; private-hire position unknown | **high** | Recheck in a browser. Pages claim nothing either way meanwhile |
| Hotel-access concession exists, procedure unpublished | medium | Needed before Stage 2 hotel pages can describe it |
| Four hotel addresses still unconfirmed from the hotels' own sites | **high** | **Blocks Stage 2** |
| Porto Corsini distance disputed (13 km vs ~15 km) | low | Resolved by publishing neither; revisit if a source settles it |
| Terminal is a temporary marquee | medium | Revisit when the permanent building opens |
| BLQ 2025 service charter not retrieved | low | Retrieve before Stage 2 |

### Carried from earlier clusters

Florence ZTL link accessibility; Florence private-hire access; the archived
Toscana Aeroporti charter provenance; the Peretola 1,560 m runway figure. All
untouched.

---

## 8. Confirmation

**No commit, no push, no deployment.** The repository still has one commit.
No environment variable, `.env` file, DNS, hosting, API, CRM, email or quote
endpoint was created, changed or tested against. No quote form was submitted
and no external booking created. No dependency was added. The routing
architecture is unchanged — `next.config.ts` still declares no redirects or
rewrites. Rome, Milan, the Veneto and Tuscany are untouched; the homepage
changed by one field per language.

---

## 9. Summary and next phase

Stage 1 is complete and clean: 6 page ids, 12 localized routes, building and
rendering without a single console error across 84 renders at seven widths,
with no orphans and no unsupported factual claim.

Two pages carry arguments nothing else on this site makes. The Bologna hub
sorts a reader into one of three restriction tiers rather than describing a
zone. The Porto Corsini page publishes a **disagreement between three official
sources** rather than picking a figure — the first time this site has done
that, and the honest response to a port its own describers cannot agree about.

**Recommended next phase: Stage 2 — the four hotel pages** (`hotel-majestic`,
`hotel-excelsior`, `hotel-commercianti`, `hotel-savoia`), 4 page ids and 8
localized routes.

**Stage 2 is blocked until the four hotel addresses are confirmed from the
hotels' own websites.** Current addresses come from aggregators and a
convention-bureau sheet, which is discovery-grade evidence. Phase 1 already
found two facts contradicting themselves across sources, and a hotel page
whose address is wrong is worse than no hotel page.

Stages 3 and 4 — the four BLQ→hotel arrival routes and the four hotel→BLQ
departure routes — follow once Stage 2 lands.

**Stopping here for review. Stage 2 has not been started.**
