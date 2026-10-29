# Tuscany cluster — delivery and QA report

**Built 26 October 2026.** Phase 2 and Phase 3 of the Tuscany brief, against
the Phase 1 plan the owner approved on the same date.

**Approved scope:** all six proposed pages, and Florence published with the
ZTL gap labelled rather than held back.

---

## 1. What shipped

Six page ids, twelve routes, both languages.

| Page id | English | Italian |
|---|---|---|
| `florence` | `/destinations/florence` | `/it/destinazioni/firenze` |
| `pisa-airport` | `/airports/pisa-galilei` | `/it/aeroporti/pisa-galilei` |
| `florence-airport` | `/airports/florence-peretola` | `/it/aeroporti/firenze-peretola` |
| `val-dorcia` | `/destinations/val-d-orcia` | `/it/destinazioni/val-d-orcia` |
| `route-psa-florence` | `/routes/pisa-airport-to-florence` | `/it/tratte/aeroporto-pisa-firenze` |
| `route-flr-florence` | `/routes/florence-airport-to-florence` | `/it/tratte/aeroporto-firenze-citta` |

The registry went from 29 page ids to **35**; the sitemap from 58 URLs to
**70**. Nothing was renamed, redirected or deleted.

### New code

- `components/site/heroes.tsx` — `HeroConstraint`, the thirteenth hero
- `components/tuscany/comune-index.tsx` — `ComuneIndex`
- `components/tuscany/` — four page components
- `content/tuscany/` — types and five content files

### Changes to files outside the cluster

Four, all of them required to make the cluster reachable and truthful:

1. `lib/routes.ts` — six records added, nothing else touched
2. `content/page-names.ts` — six names
3. `content/navigation.ts` — a Tuscany group in the Destinations menu, one in
   the Airports menu, and a seventh footer column
4. `content/home/{en,it}.ts` — the Florence tile and the two Tuscan airport
   entries gained a `page`, so three existing homepage placements now resolve
   instead of being inert text

**One homepage sentence was rewritten in both languages.** It said *"Florence
is being written; until it exists, that journey can still be requested through
a quotation."* That became false the moment the page shipped, so it now reads
that Rome, Milan, Venice and Florence each have pages of their own. No layout,
component or design on the homepage was altered.

---

## 2. The central editorial decision

**Florence's ZTL is published as a labelled unknown.**

Rome's and Milan's hubs each quote the city's own published rules stating that
private-hire vehicles are among the categories permitted into the restricted
centre. **No equivalent text could be read for Florence.** Both of the
Comune's hosts — `ztl.comune.fi.it` and `mobilita.comune.fi.it` — refused
connection from this environment throughout both phases.

What the cluster does instead:

- **No ZTL hours appear anywhere.** Secondary sources disagree with one
  another and the hours change by ordinance and by season.
- **No claim is made that a private-hire car may enter a sector.** Four pages
  state in terms that the question could not be confirmed.
- **The Comune is the first outbound link on the Florence page**, inside the
  hero rather than in a footnote.
- The gap is modelled in the type system: `Constraint` in
  `content/tuscany/types.ts` makes `unknown` and `source` **required**, so no
  future edit can quietly drop the caveat while keeping the page.

The risk this manages is specific. Borrowing Milan's confident `ZoneDiagram`
would have let a reader assume Florence works the same way, and that would
have been the single most likely way this cluster could mislead someone.

---

## 3. What the cluster deliberately does not say

| Not claimed | Why |
|---|---|
| Any fare | None verified anywhere in Tuscany |
| Any journey time | No source consulted states one for any Tuscan route |
| Any road distance | Same. This is why Pisa did not get Bergamo's drawn-distance hero |
| Any airport meeting point | Set by the airport; neither operator site could be read |
| NCC access to Florence's ZTL | No official text found — see §2 |
| Winery, tasting or estate visits | Forbidden without verification; refused explicitly on two pages |
| Multi-stop or touring days | Same; refused on the Florence and Val d'Orcia pages |
| Villa, wedding, coastal or island transfers | Deferred entirely; no page names Elba or Giglio |
| Lake Garda or Chianti coverage | Out of scope and unverified |
| The planned FLR runway | Planned with no verified completion; excluded so no page implies it exists |

Every page states that a request is an enquiry, not a booking.

---

## 4. QA results

Run against a production build served locally, in headless Chrome at 390×844
and 1440×900, across all twelve routes.

| Check | Result |
|---|---|
| `tsc --noEmit` | clean |
| `next build` | 75 routes generated, no errors or warnings |
| HTTP status, all 12 routes | 200 |
| Console errors / warnings / exceptions | **none on any render** |
| Horizontal scroll at 390px | **none** — 0px overflow everywhere |
| `<h1>` per page | exactly 1 |
| Heading-level skips | none |
| Internal links (59 distinct targets) | all resolve 200 |
| Canonical + hreflang reciprocity | correct on all 12 |
| Breadcrumb trails | match the planned hierarchy in both languages |
| Structured data | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` only — no `address`, `telephone`, `aggregateRating`, `review`, `priceRange`, `openingHours`, `offers` or `LocalBusiness` |
| Language switcher | round-trips correctly on every page |
| Images rendered | **0** on all four non-route pages, as designed |
| Image-uniqueness invariant | intact — no image was added, so nothing is used twice |
| New colour pairings | 5.84:1 and 14.10:1 on `accent-wash`; accent rule 4.44:1 — all above AA |

### Two findings, both pre-existing and both conformant

1. **The skip link measures 1px tall** until focused. It is on every page of
   the site, including Rome, Milan and the Veneto.
2. **Inline source links measure 16px tall.** Also site-wide — the same
   finding appears on `/destinations/rome` and `/destinations/milan`. These
   are links inside running sentences, which WCAG 2.5.8 exempts from the
   target-size minimum.

Neither was introduced by this cluster. Both were verified against existing
pages rather than assumed.

---

## 5. Open items for the owner

**Two external links could not be opened from this environment and should be
checked once in a browser before launch.** Neither is evidence of a dead URL —
both are access blocks on this side.

| URL | Result here | Used on |
|---|---|---|
| `https://ztl.comune.fi.it/` | connection refused | Florence hub, both languages, twice each |
| `https://www.toscana-aeroporti.com/` | HTTP 403 (bot block) | Pisa, Peretola, the Pisa route |

`https://visitvaldorcia.it/en/info/` and `/info/` both return 200 and are
confirmed.

**Carried forward from earlier clusters, still open:**

- **`NEXT_PUBLIC_SITE_URL` is unset**, so every canonical, hreflang and
  sitemap URL resolves to `http://localhost:3000`. **This is blocking for
  launch** and affects the whole site, not only Tuscany. It was read, never
  modified.
- **`QUOTE_ENDPOINT_URL` is unset.** No form is rendered anywhere, so no
  submission can falsely appear to succeed.
- **Rome still uses unverified operational phrasing** that was removed from
  Milan during its audit. Flagged, not changed — out of scope.
- **Two homepage meta descriptions exceed the usual length** (196 and 222
  characters). Pre-existing.

**Decisions available but not taken, needing no action:**

- Val d'Orcia photography can be added later without restructuring the page.
- Siena remains the strongest Wave 2 candidate and is still entirely
  unresearched.
- If the Comune's ZTL rules can be read in a browser, the Florence hub can be
  upgraded from a labelled gap to a sourced statement by editing one content
  object — the component already renders whatever `known` contains.

---

## 6. Constraints honoured

No commit, no push, no deployment. No change to DNS, hosting, environment
variables, `NEXT_PUBLIC_SITE_URL`, `QUOTE_ENDPOINT_URL`, quote forms, CRM,
APIs, email delivery or production settings. No quote form submitted and no
external booking created. No URL renamed, repurposed, redirected or deleted.
No change to Rome, Milan or the Veneto. The homepage was not redesigned — one
sentence was corrected in each language, and three existing placements were
given the links they were already written for. No image-source caption is
rendered anywhere, and no AI imagery was introduced because no imagery was
introduced at all.

---

## 7. Second research pass and content revision — 27 October 2026

The owner supplied four alternative source URLs, approved the resulting
proposals, and the changes are applied. Full detail in
`docs/tuscany-research-log.md` §A0–A7 and
`docs/tuscany-content-change-proposals.md`.

### Files changed

| File | Edits |
|---|---|
| `content/tuscany/florence.ts` | 12 (10 approved + 2 caution-consistency) |
| `content/tuscany/pisa.ts` | 12 |
| `content/tuscany/florence-airport.ts` | 10 |
| `content/tuscany/routes.ts` | 10 |
| `components/rome/route-page.tsx` | 1 — renders `lead.source`, which was declared but never shown |

`content/tuscany/val-dorcia.ts` and `content/tuscany/types.ts` are
byte-identical to the 26 October build, as are Rome, Milan, the Veneto, the
homepage, the registry and the navigation.

### Checks run

| Check | Result |
|---|---|
| `tsc --noEmit` | clean |
| `eslint .` | clean, exit 0 |
| `next build` | 75 routes, no errors or warnings |
| HTTP status, all 12 Tuscany routes | 200 |
| `<h1>` count, heading skips | 1 each, no skips |
| Horizontal scroll at 390px | none |
| Console errors/warnings, 20 renders | **none** |
| Internal links (59 targets) | all 200 |
| Canonical, hreflang, JSON-LD | present and correct on all 12 |
| EN/IT parity, 24 changed claims | all present in both languages |
| Forbidden strings (hours, competitor names, passenger counts, traffic claim) | all 15 absent from all 12 pages |
| Rome/Milan/Veneto route pages, before vs after | **textually identical** |
| Archived charter link | verified HTTP 200, `application/pdf` |

### Remaining uncertainty

- **Private-hire access to Florence's ZTL is still unresolved**, by design. The
  deciding document (the Disciplinare Tecnico ZTL) is a scan, and the only
  archived capture is truncated at 1 MiB.
- **The ZTL link was not changed.** Every `comune.fi.it` host timed out when
  re-checked, so no replacement was invented. It still needs a browser check.
- **The charter is cited from an archived copy**, because the publisher's site
  returns 403 here. Each source note says so.
- **No Florence Peretola service guide exists in the archive**, so that page's
  runway figure remains reference-sourced rather than operator-confirmed.
- **`NEXT_PUBLIC_SITE_URL` is still unset** — canonicals resolve to
  `localhost:3000`. Unchanged, site-wide, and blocking for launch.
