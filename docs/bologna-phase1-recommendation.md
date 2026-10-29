# Bologna cluster — Phase 1 recommendation

**27 October 2026. Planning only. No application code was written, no page
exists, nothing was committed.** Gate 2 of the architecture. This document
asks for a decision.

---

## The short version

**Build 18 page ids, not 62.** Four hotels, not nineteen — chosen so that each
one sits in a **different tier of Bologna's restricted centre**, which is what
stops per-hotel pages collapsing into one page with the name swapped. Both
route directions survive for all four, because the ZTL's 07:00–20:00 window
makes arrival and departure genuinely asymmetric.

| | Wave 1 | Full shortlist as specified |
|---|---|---|
| Page ids | **18** | 62 |
| Localized routes | **36** | 124 |
| Registry after | 35 → **53** | 35 → 97 |
| Site routes after | 70 → **106** | 70 → 194 |

The full scope would make Bologna **larger than the rest of the site
combined**, built mostly on hotels whose addresses have not yet been confirmed
from their own websites.

---

## 1. The Phase 0 decisions, as resolved

| | Decision | Status |
|---|---|---|
| **D1** | Keep the DOCX as master; create a Markdown counterpart | **Done** — `docs/bologna-cluster-architecture.md`. The DOCX is untouched |
| **D2** | Research all 19; recommend a shortlist | **Done** — see §2. All 19 appear in the inventory; 4 build, 15 defer |
| **D3** | Plan navigation/homepage wiring both ways; change nothing | **Done** — see §5. Nothing changed |
| **D4** | Compare URL structures and recommend one | **Done** — see §4. `/destinations/bologna/<hotel>` recommended |
| **D5** | Text-led unless licensed property images verified | **Adopted.** All 18 proposed without photographs; reasons per page |
| **D6** | Keep provider capability separate from search demand | **Done** — the inventory has separate `provider_capability` and `research_status` columns. Every row is `unverified`. See §7 |

---

## 2. Hotels — recommended shortlist

### The reasoning

A per-hotel page is only worth publishing if it tells a reader something the
hub could not. For Bologna there is exactly one such thing, and it is
verified from the official tourist board (research log Z1–Z4):

**The restriction has three tiers, and a hotel sits in one of them.**

| Tier | Rule | Can the traveller do anything? |
|---|---|---|
| Outside the ZTL | none | no need |
| Inside the ZTL | **07:00–20:00 daily** | **yes — arrive outside those hours** |
| Area T / pedestrian | **24 hours** | **no — the hour never helps** |

So hotels were selected **to span the tiers**, not by prestige, star rating or
brand. Four hotels, four positions, four different pages.

### Recommended — Wave 1

| Hotel | Address | Tier | The page's one argument |
|---|---|---|---|
| **Grand Hotel Majestic "già Baglioni"** | Via Indipendenza 8 | **Area T — 24 h** | The hour will not help you here |
| **Starhotels Excelsior** | Viale Pietramellara 51 | **outside the ZTL** | Nothing is in the way — and the station opposite may suit you better |
| **Art Hotel Commercianti** | Via de' Pignattari 11 | **pedestrian — 24 h** | The car finishes nearby; the last stretch is on foot |
| **Savoia Hotel Regency** | Via del Pilastro 2 | **outside the centre** | No restriction at all; the Fiera calendar is the variable |

### Deferred — Wave 2, with reasons

All 15 are in the inventory with an individual reason. They fall into three
groups:

**Same tier as a Wave 1 page (highest cannibalisation risk)**
- *I Portici* and *Hotel Internazionale* — both reported on via Indipendenza,
  the **same Area T tier as the Majestic**. Publishing all three would be
  three pages making one argument.
- *NH Bologna De La Gare* — station-adjacent, the **Excelsior's tier**.
- *AC Hotel Bologna*, *Savhotel Fiera* — Fiera district, **Savoia's tier**.
- *Art Hotel Orologio* — same group and same central area as Commercianti.

**Likely inside the timed ZTL, duplicating a tier already covered**
- *Royal Hotel Carlton*, *Mercure Bologna Centro*, *UNA Hotels Bologna Centro*,
  *Hotel Metropolitan*.

**Not individually researched**
- *Phi Hotel Bologna*, *Savhotel Aemilia*, *Best Western City Hotel*,
  *Hotel Porta San Mamolo*, *Hotel San Donato*.

> **I have not silently dropped the owner's scope.** All 19 are inventoried and
> every deferral carries evidence. If the owner wants more than four in Wave 1,
> the honest way is to **add one per uncovered tier**, not to add by brand.

---

## 3. Directional route matrix

Both directions for all four hotels, as required.

| Hotel | BLQ → hotel | hotel → BLQ |
|---|---|---|
| Majestic | `route-blq-majestic` (P1) | `route-majestic-blq` (P2) |
| Excelsior | `route-blq-excelsior` (P1) | `route-excelsior-blq` (P2) |
| Commercianti | `route-blq-commercianti` (P1) | `route-commercianti-blq` (P2) |
| Savoia | `route-blq-savoia` (P1) | `route-savoia-blq` (P2) |

### Why both directions are defensible — and where they are weakest

**The ZTL runs 07:00–20:00. That makes the two directions asymmetric:**

- A flight landing at **21:40** arrives into an *unrestricted* city.
- A flight at **08:00** departs the same address *during* the restriction.

Same hotel, same airport, **opposite advice**. That asymmetry is the content.

**Where it collapses — stated plainly:** for the **Majestic** and
**Commercianti**, both restricted 24 hours, the hour helps in neither
direction. Those two pairs are the weakest in the set. They are still
proposed, because the departure problem at a pedestrian address — walking out
with luggage at 06:00 to meet a car that cannot approach — is a real and
different problem from arriving.

> **If the owner wants to cut, cut the four departure pages, not two hotels.**
> That drops Wave 1 from 18 ids to 14 (28 routes) while keeping all four tiers
> represented. The inventory marks every departure page **P2** for this reason.

---

## 4. URL and page family — recommendation

**Recommended: `/destinations/bologna/<hotel>`**, not the architecture's
illustrative `/hotels/bologna/<hotel>`.

| | `/hotels/…` | `/destinations/bologna/…` ✅ |
|---|---|---|
| Precedent | none on this site | **three existing pages** use it (`/destinations/rome/train-station-transfers` and its Milan and Venice counterparts) |
| What it promises | a site-wide hotel directory that does not exist and is not planned | one city's pages |
| Future collision | a Milan hotel would need `/hotels/milan/…`, competing with `/destinations/milan` | nests cleanly; no competing index forms |
| Registry work | a new top-level family | none — every helper works unchanged |

Full proposed URLs, both languages, in `docs/bologna-url-map.md`. **No
existing URL is renamed, redirected, repurposed or deleted**, and
`next.config.ts` declares no redirects or rewrites at all, so there is nothing
to collide with outside the registry.

---

## 5. Navigation and homepage — the blocking decision

### Option A — wire Bologna in *(recommended)*

Add a "Bologna and Emilia-Romagna" group to Destinations, an "Emilia-Romagna"
group to Airports, and an eighth footer column. On the homepage, add the
`page` field to the **BLQ entry that already exists** in the airport directory.

- **Every one of the 18 pages gets an inbound link from outside its own
  sub-tree. No orphans.** Verified against the link map.
- It is precisely what was done for Pisa and Peretola last cluster: a
  one-field change turning existing homepage text into a link.
- The homepage's "Also asked about" list already names Bologna, and its own
  note says that naming a city does not mean a page exists — so **no homepage
  promise is created or broken either way**.
- **Cost:** it modifies global navigation and the homepage, which this brief
  otherwise forbids. It needs explicit written authorisation scoped to the
  Bologna entries alone.

### Option B — leave navigation and homepage untouched

- **Every Bologna page becomes an orphan.** Reachable only from other Bologna
  pages, and only by someone who already landed inside the cluster.
- It would **fail the Phase 3 orphan check this same brief requires**.
- The pages would have to ship `published: false` to stay out of the sitemap,
  or they would be in the sitemap while unreachable by navigation — worse.
- The 36 routes would exist and be invisible.

### Recommendation

**Option A**, authorised in writing and scoped to Bologna entries only. Option
B produces an orphan island that the brief's own QA step would then flag as a
defect.

---

## 6. Ravenna cruise-terminal scope

**Build 4 page ids:**

| Page id | What it is |
|---|---|
| `ravenna-terminal` | The terminal at Porto Corsini — the best-sourced page in the cluster |
| `ravenna` | A deliberately short city hub. **Required** because the shared route type needs a `PageId` at both endpoints; a terminal route cannot exist without it |
| `route-terminal-ravenna` | Disembarkation |
| `route-ravenna-terminal` | Embarkation |

**Defer:** Bologna ↔ Porto Corsini (a ~75 km intercity journey; the
architecture permits it only if distinct intent *and* provider coverage are
verified — neither is), and hotel ↔ terminal in either direction.

**On hotel ↔ terminal specifically:** the only hotel–terminal link any source
documents is Visit Ravenna's seasonal shuttle to the **Grand Hotel Mattei** —
a *Ravenna* hotel, not on the Bologna shortlist, run by a third party, and
seasonal. There is no evidence of a Bologna-hotel-to-Porto-Corsini intent.

### The finding that makes the terminal page worth building

**Three official publishers contradict each other** (research log R1–R3):

| | RCCP (operator) | Visit Ravenna | Comune di Ravenna |
|---|---|---|---|
| Distance to central Ravenna | **13 km** | **about 15 km** | — |
| Bus 90 stop | *"in front of the terminal"* | *"about a 10-minute walk"* | — |
| Taxis | *"normally available … inside the cruise terminal area"* | *"availability is limited and taxis cannot be booked in advance"* | — |

So the page publishes **no distance**, and shows the disagreement instead.

Two further facts shape it: the operator states **"A temporary marquee is
presently used as cruise terminal"** (R5), and **publishes no car pick-up
rule** (R9). Neither a terminal building nor a meeting point may be described.

And the strongest argument for the page is somebody else's sentence: the
tourism authority's own statement that taxis there **cannot be booked in
advance**.

---

## 7. Provider capability — the real gate

**Unverified across every proposed page**, as in Rome, Milan, the Veneto and
Tuscany. Nothing in Phase 1 changed this, and research cannot: it is a fact
about the business, not about Bologna.

**Four questions only the owner can answer:**

1. Does the business serve BLQ airport transfers at all?
2. **Does it serve addresses inside Bologna's ZTL — and does it hold, or can
   it obtain, the hotel-access concession the tourist board says exists
   (Z5)?**
3. Does it serve Ravenna and the Porto Corsini cruise pier?
4. For a 24-hour restricted address (Area T, pedestrian zone), what is the
   actual practice — approach under a permit, or set down at a nearest
   practical point?

**Question 2 decides whether hotel pages can be built at all.** If the answer
is no, the four hotel pages and eight route pages are not publishable in any
form, and Wave 1 reduces to the Bologna hub, BLQ and the four Ravenna pages.

Question 4 decides what the Majestic and Commercianti pages actually *say* —
currently the honest default is "a nearest practical point and a short walk",
which is the Venice formulation.

---

## 8. Risks, stated plainly

| Risk | Severity | How this plan answers it |
|---|---|---|
| **Thin, name-swapped hotel pages** | **high** — the classic failure of hotel clusters | Hotels selected by **ZTL tier**, not brand. Four hotels, four different arguments. 15 deferred largely *because* they duplicate a tier |
| **Arrival/departure cannibalisation** | **medium-high** | Defended by the 07:00–20:00 asymmetry, which is real and verified. Weakest for the two 24-hour hotels — stated, and those pages marked P2 as the first cut |
| **Orphan pages** | **high under Option B** | Option A removes it entirely; Option B is documented as producing an orphan island |
| **Publishing unverified hotel facts** | **high** | Addresses come from aggregators, **not** the hotels' own sites. No address, distance, room count or facility may be published until confirmed. Two facts already conflict between sources (H5, H6) |
| **Implying affiliation with listed operators** | **medium** | The airport names three NCC firms and the charter names more. **None appears on any page**, as with Tuscany |
| **Claiming a BLQ pickup point** | **medium** | The airport publishes none (B8). No page may state one |
| **Claiming port access or a meeting point** | **medium** | The operator publishes no car rule (R9) and the terminal is a marquee (R5) |
| **Claiming private-hire ZTL access** | **high** | **Blocked.** No official Comune source could be read (Z8). The Florence precedent applies: claim nothing in either direction |
| **Misleading imagery** | **medium** | All 18 pages proposed text-led (D5) |

---

## 9. Prioritised implementation proposal

If approved, in this order:

**Stage 1 — the spine (6 ids, 12 routes).** `bologna`, `blq`, `ravenna`,
`ravenna-terminal`, and the two terminal routes. These depend on **no
unverified hotel fact**, and the terminal page is the best-sourced in the
cluster. Stage 1 is publishable even if the hotel answer to §7 Q2 is no.

**Stage 2 — hotels (4 ids, 8 routes).** Only after each address is confirmed
on the hotel's own website and §7 Q2 is answered.

**Stage 3 — arrival routes (4 ids, 8 routes).** `route-blq-*`.

**Stage 4 — departure routes (4 ids, 8 routes).** `route-*-blq`. The
first thing to cut if the pairs read as too close.

**Not in scope:** the 15 deferred hotels, Bologna Centrale, BolognaFiere,
Bologna ↔ Porto Corsini, hotel ↔ terminal, Modena, Ferrara, Rimini, San
Marino.

---

## 10. Decisions required before Phase 2

| # | Decision | Blocks |
|---|---|---|
| **1** | Approve, amend or reject the **four-hotel shortlist** | Stages 2–4 |
| **2** | **Navigation and homepage: Option A or B?** | Everything — Option B makes all 18 pages orphans |
| **3** | Confirm `/destinations/bologna/<hotel>` | All hotel URLs |
| **4** | **Answer the four provider-capability questions in §7** | Whether hotel pages can exist at all |
| **5** | Keep all four departure routes, or hold them? | Stage 4 |
| **6** | Approve `HeroTiers` and `AddressTier` as new components | The hub and hotel compositions |
| **7** | Can anyone confirm the four hotel addresses from the hotels' own sites? | Publishing any hotel page |

---

## 11. Site-wide issues — carried, not fixed

Per architecture §10, tracked and untouched: `NEXT_PUBLIC_SITE_URL` unset
(confirmed still unset — site-wide launch blocker); `QUOTE_ENDPOINT_URL` unset
(confirmed; returns `not_configured`, no form rendered); Florence ZTL link
accessibility; Florence private-hire access; the archived Toscana Aeroporti
charter provenance; the Peretola runway figure.

**New Bologna items for the same register:**

| Item | Severity | Decision needed |
|---|---|---|
| Comune di Bologna ZTL rules unreadable; private-hire position unknown (Z8) | **high** | Recheck in a browser; claim nothing meanwhile |
| The hotel-access concession exists but its procedure is unpublished (Z5) | medium | Owner to confirm whether the business can use it |
| Four hotel addresses unconfirmed from the hotels' own sites | **high** | Confirm before publishing |
| BLQ 2025 service charter not retrieved | low | Retrieve before implementation; no page depends on it |
| Porto Corsini distance disputed between official sources (R1) | low | Publish none; show the disagreement |
| Terminal is a temporary marquee (R5) | medium | State it; never imply a building |

---

## 12. Files created in Phase 1

| File | Contents |
|---|---|
| `docs/bologna-cluster-architecture.md` | Markdown counterpart of the DOCX (D1). DOCX untouched |
| `docs/bologna-page-inventory.csv` | 39 rows, 20 columns. 18 build, 21 defer. All 19 hotels evaluated |
| `docs/bologna-internal-link-map.csv` | 111 rows. Orphan check: none under Option A |
| `docs/bologna-research-log.md` | Every claim with source, publisher, access date and status |
| `docs/bologna-design-differentiation.md` | Composition per family; one new hero, one new module |
| `docs/bologna-url-map.md` | Proposed EN/IT URLs; collision check against every existing route |
| `docs/bologna-phase1-recommendation.md` | This document |

**No application code was written. No page, component, type, registry entry,
navigation entry, homepage change, redirect or production content exists. No
environment variable, DNS, hosting, API, quote form, email or CRM setting was
changed. No quote was submitted. No dependency was added. Nothing was
committed, pushed or deployed.**

**Stopping here. Phase 2 will not begin without explicit approval.**
