# Campania cluster — Phase 2, Stage 1 implementation report

**27 October 2026.** Three page ids, six localized routes, English and Italian.
**Naples Capodichino (`nap-airport`) remains deliberately unbuilt.**
Nothing was committed, pushed or deployed.

---

## 1. What shipped

| Page id | English | Italian |
|---|---|---|
| `naples` | `/destinations/naples` | `/it/destinazioni/napoli` |
| `salerno-airport` | `/airports/salerno-costa-damalfi` | `/it/aeroporti/salerno-costa-d-amalfi` |
| `naples-cruise-port` | `/cruise-ports/naples-stazione-marittima` | `/it/porti-crociere/napoli-stazione-marittima` |

All six paths are exactly as approved in `docs/campania-url-map.md`. No slug was
invented, renamed or redirected, and no existing URL was touched.

Both project slug conventions were honoured: the airport slug names the city **and**
the airport (`salerno-costa-damalfi`), and the cruise-port slug names the facility
rather than the city (`naples-stazione-marittima`).

### Measured counts

| | Before | After | Expected |
|---|---|---|---|
| Registry page ids (`lib/routes.ts`) | 47 | **50** | 50 |
| Localized route files (`app/**/page.tsx`) | 94 | **100** | 100 |
| Sitemap URLs (`/sitemap.xml`) | 94 | **100** | 100 |
| Production build static pages | not measured | **105** | — |

Before-counts were measured prior to the first edit; after-counts were measured from
the running production build. No discrepancy to investigate.

---

## 2. Files changed

### New

| File | Purpose |
|---|---|
| `content/campania/types.ts` | Cluster types. Introduces `OwnerClaim` — see §4 — plus `Facility`/`FacilitySplit` for the two comparison tables, and a **required** `unknown` block on `NaplesCruisePort` so the port page cannot be written without declaring what it does not know |
| `content/campania/naples.ts` | Hub, both languages |
| `content/campania/salerno-airport.ts` | Airport, both languages |
| `content/campania/cruise-port.ts` | Cruise terminal, both languages |
| `components/campania/owner-note.tsx` | The one new component this stage adds |
| `components/campania/naples-hub.tsx` | Hub view |
| `components/campania/salerno-airport-page.tsx` | Airport view |
| `components/campania/cruise-port-page.tsx` | Terminal view |
| Six `app/…/page.tsx` files | Metadata + JSON-LD, following the existing pattern |

### Modified

| File | Change |
|---|---|
| `lib/routes.ts` | Three records: `naples` parented to `home`, the other two parented to `naples`. A comment records why `nap-airport` is absent |
| `content/page-names.ts` | Three short breadcrumb names, both languages |
| `content/navigation.ts` | Campania-only wiring: a `naples-and-campania` group inside the existing **Destinations** navbar item, a `campania-airports` group inside the existing **Airports** item, and a new `campania` footer column (footer now 9 columns) |

### Not touched

No homepage content file, no Tuscany, Bologna, Veneto, Milan or Rome content or
component, no shared hero or block component, no config, and no environment file.

The repository has a single initial commit and the whole site is still untracked, so
`git status` cannot distinguish this stage's work. Scope was therefore verified by
modification time: every source file touched from 17:48 onward is one of the 17 listed
above, and `content/home/en.ts` / `content/home/it.ts` were last written at 13:29,
during the Bologna work. The homepage is unchanged, which also means **the homepage's
existing Campania photograph was not reused** — see §5.

---

## 3. Sources, rechecked immediately before publishing

| Source | Read | Result |
|---|---|---|
| GE.S.A.C. S.p.A. (Naples airport operator), `aeroportodinapoli.it` | 27 Oct 2026, before writing | Headline *"Naples airport closed for runway requalification (November 2026)"*, dated 19 Oct, still live. **The month and nothing else** — no start date, no end date, no reopening date, no airline list, no statement that another airport is a substitute |
| Salerno Costa d'Amalfi Airport operator | 27 Oct 2026, before writing | Verbatim: *"For security reasons Passengers' Terminal of Salerno Costa d'Amalfi and Cilento Airport is closed from 22:30 to 5:00, except for exceptional flight delays."* The site does not mention the Naples closure at all |
| `terminalnapoli.it` (Naples terminal operator) | 27 Oct 2026, retried before writing | **HTTP 403 again** — at audit and again immediately before the page was written |

The Salerno page is built on that one quoted sentence; the hub's notice is built on that
one headline. Nothing was published beyond them.

---

## 4. Design differentiation

Three different existing heroes, three different central modules, one new component.

| Page | Hero | Central module | Why |
|---|---|---|---|
| Naples hub | `HeroBand` | `DataTable`, four gateways | Naples's problem is not a rule but an ambiguity — four arrival points, one name. Ambiguity is resolved by comparison, not explanation |
| Salerno airport | `HeroMeta` + `Callout` | One published fact given a section of its own | The shortest hero in the family, carrying operator / closing window / exception as a rule-separated line. Parallels the Peretola page, where one published measurement explains more than description would |
| Cruise terminal | `HeroConstraint` | `DataTable`, three quays | The unresolved thing — where a vehicle may wait inside the port — belongs in the hero, not the FAQ, so a reader who skims still learns no meeting point was promised |

### `OwnerNote`, and why it exists

Until Campania, every claim on this site was either attributed to a named publisher or
explicitly refused. The owner has now confirmed operational facts that no public source
states: Campania coverage including the Amalfi Coast road, and arrangements for
collecting cruise passengers at Naples.

That is usable and worth telling a reader. It is also a *different kind of claim* from an
operator's published timetable, and the worst thing this cluster could do is let the two
read alike. So owner statements render through `OwnerNote` — neutral surface, not the
accent reserved for refusals, with a label above the heading naming whose statement it is
("Our own position, not a published fact"). `SourceNote` points outward at a publisher;
this points inward at us, and says so. It always sits in its own band, never sharing one
with sourced material.

---

## 5. What these pages do not claim

Each refusal below was checked against the rendered HTML of all 100 pages, not only the
source.

- **No closure dates.** The string `1–30` appears nowhere in any rendered page. It occurs
  once in a source comment, explaining why it is not published.
- **No reopening date, no affected airlines, and no statement that Salerno is the
  designated alternative.** The hub's limits callout and the airport page both name these
  as things not claimed. Salerno's own site does not mention the Naples closure.
- **No suggestion that anyone may remain inside a terminal overnight.** The Salerno page
  says to arrange onward travel before departure, not after landing.
- **No meeting point, pier number, terminal entrance, parking arrangement or waiting
  procedure** at the cruise port, and no substitute source was used for the one that would
  not open.
- **No promotional pier counts, lengths or depths.**
- **No fares, distances, journey times, vehicle capacities, luggage limits, child seats,
  accessibility claims, waiting-time policies, flight or ship tracking, guarantees,
  reviews or ratings.** The only occurrences of "price" are the site-wide line that a
  request is not a booking and that the vehicle, price and meeting arrangement come in the
  reply.
- **No partnership or endorsement** by the airport, the port or any authority; the owner
  statements say so explicitly.
- **No tours.** The hub's FAQ declines Pompeii and coast tours, consistent with the
  homepage already stating twice that the business is not a tour operator.
- **No competitor operator names.**
- **No new images.** All six pages render `img = 0`, so the image invariant holds and the
  homepage's Campania photograph was not reused.

A keyword sweep for all of the above over the three content files returned only refusals,
disclaimers and source comments; every hit was inspected in context.

---

## 6. QA — checks actually run

**There is no test suite in this repository** (no vitest, jest or playwright). No
automated tests were run, and none are claimed.

| # | Check | Result |
|---|---|---|
| 1 | `npx tsc --noEmit` | **Clean** |
| 2 | `npx eslint .` | **Clean** (`next lint` no longer exists in Next 16) |
| 3 | `npx next build` | **Compiled successfully**, 105/105 static pages generated, no errors or warnings |
| 4 | Registry / route-file / sitemap counts | 50 / 100 / 100 — measured, matching §1 |
| 5 | HTTP status, all six new URLs | **200** each; one `<h1>` each; 4 `hreflang` links each; 2 JSON-LD blocks each |
| 6 | Canonical + reciprocal hreflang | Each page self-canonical; `en` / `it` / `x-default` present on all six and **reciprocal in both directions** |
| 7 | EN ↔ IT switching | Exactly one switcher anchor to the correct counterpart on each of the six, matching how existing pages render |
| 8 | Breadcrumbs and parents | `Home > Naples` for the hub; `Home > Naples > <page>` for the airport and the terminal; `Home > Napoli > …` in Italian, matching the project-wide Italian convention |
| 9 | Internal links, whole site | 100 distinct internal route hrefs crawled across all 100 pages; **every one resolves**. The only non-route hrefs are two build assets and the favicon, all 200 |
| 10 | Orphan check | **51 inbound pages** for each of the six new paths — the per-locale footer plus the counterpart's switcher. None is orphaned |
| 11 | Heading hierarchy | One `h1` per page, then `h2`/`h3` only, **no skipped levels** on any of the six |
| 12 | Alt text / accessible names | `img = 0` on all six, so nothing to caption; **no unnamed links**; all 5 inline SVGs per page are `aria-hidden="true"` |
| 13 | Responsive, 320 / 360 / 390 / 768 / 1024 / 1280 / 1680 px | No horizontal scroll and no overflowing element at any width on the three English pages. One 3 px overflow at 1024 px on the three Italian pages — **pre-existing and site-wide, not caused by this stage**; see §7 |
| 14 | Browser console | **Zero** console errors or warnings, zero browser-log errors or warnings, zero failed network requests on all six, under headless Chrome 156 |
| 15 | Structured data | Only `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` (+ `Question`/`Answer`/`ListItem`). **No** `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, address, telephone or price |
| 16 | Tap targets / minimum type | Smallest type 13 px. The only sub-24 px-tall links are the visually-hidden skip link and inline source links inside paragraphs — identical to existing pages |

QA was run against `npx next start` on port 3190 and headless Chrome over CDP, with
device-metric overrides at each width.

---

## 7. Found, not fixed

**The Italian header overflows by 3 px at exactly 1024 px, site-wide.**

At 1024 px the Italian quote CTA (*"Richiedi un preventivo"*) extends 3 px past the
viewport: `scrollWidth` 1012 against `clientWidth` 1009. It reproduces on the Italian
homepage, on `/it/destinazioni/firenze` and on `/it/destinazioni/bologna` — all of which
predate this stage — and not on any English page.

It is **not** a Campania defect. The navbar itself fits (`scrollWidth` 499 = `clientWidth`
499), and this stage added no new top-level navbar item: the Campania entries are groups
*inside* the existing Destinations and Airports items. The cause is the Italian CTA label
being wider than the English one.

Fixing it means editing the shared header, which would change every page on the site and
is outside this stage's approved scope. Reported for a decision rather than changed.

---

## 8. Still unresolved (carried forward, unchanged)

1. **`NEXT_PUBLIC_SITE_URL`** is unset, so canonicals and hreflang emit
   `http://localhost:3000`. Correct relative to configuration, wrong for production.
2. **Quote-enquiry delivery** remains unverified end to end.
3. **Florence ZTL link accessibility** and **NCC / private-hire access** remain open from
   the Tuscany freeze.
4. **`terminalnapoli.it` returns 403**, so no meeting point exists for the Naples cruise
   terminal and the page says so.
5. **The Naples closure** has a published month and nothing more. Capodichino has no page.

Because of items 1 and 2, **this site is not production-ready**, and this report does not
claim otherwise.

---

## 9. Status

Stage 1 is complete and stopped for review. Stage 2 has not been started. Nothing was
committed, pushed or deployed; no environment variable, DNS record, API, CRM or quote
endpoint was touched; no quote form was submitted and no external booking was created.
