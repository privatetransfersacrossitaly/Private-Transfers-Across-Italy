# Campania cluster — URL and localization map

**Proposed. Nothing has been created, renamed, redirected or deleted.** A slug
here is a proposal, not authorisation. **No new routing pattern is introduced.**

---

## Conventions this follows

Measured from the registry during the Phase 0 audit — 47 ids across four
families, 94 localized routes:

| Family | EN | IT | Existing |
|---|---|---|---|
| Destinations | `/destinations/<place>` | `/it/destinazioni/<luogo>` | 15 |
| Airports | `/airports/<city>-<airport>` | `/it/aeroporti/<città>-<aeroporto>` | 11 |
| Cruise ports | `/cruise-ports/<facility>` | `/it/porti-crociere/<struttura>` | 2 |
| Routes | `/routes/<from>-to-<to>` | `/it/tratte/<da>-<a>` | 18 |

Two existing conventions decide the Campania names:

- **Airports are `<city>-<airport>`, never bare city.** `pisa-galilei`,
  `florence-peretola`, `bologna-marconi`. It is what makes an airport
  structurally incapable of colliding with its own city page.
- **A cruise port names the facility when the facility is not simply the
  city.** `/cruise-ports/civitavecchia`, but
  `/cruise-ports/ravenna-porto-corsini` because that berth is not in Ravenna.
  Naples needs the same treatment for a different reason — the city has
  several quays.

---

## Proposed — Stage 1 build

**3 page ids → 6 localized routes.** Registry would move **47 → 50**; site
routes and sitemap **94 → 100**.

| Page id | EN | IT | Parent |
|---|---|---|---|
| `naples` | `/destinations/naples` | `/it/destinazioni/napoli` | `home` |
| `salerno-airport` | `/airports/salerno-costa-damalfi` | `/it/aeroporti/salerno-costa-d-amalfi` | `naples` |
| `naples-cruise-port` | `/cruise-ports/naples-stazione-marittima` | `/it/porti-crociere/napoli-stazione-marittima` | `naples` |

### Why these three slugs

**`salerno-costa-damalfi`** — the operator's own name for the airport is
*Salerno Costa d'Amalfi and Cilento Airport*. The apostrophe cannot survive a
slug, so the EN form drops it (`costa-damalfi`) and the IT form uses the
hyphenated `costa-d-amalfi`, which reads more naturally in Italian. Both are
stable and neither collides with a future `/destinations/salerno`.

**`naples-stazione-marittima`** — not `naples`, and deliberately not
"naples-port". The city's waterfront holds the Stazione Marittima for cruises,
Calata Beverello for hydrofoils and Calata Porta di Massa for ferries. Naming
the facility leaves room for the others and refuses, in the URL itself, the
false implication that Naples has one port.

**`naples` / `napoli`** — the city name localizes, as `venice`/`venezia`,
`florence`/`firenze` and `milan`/`milano` already do. **One stable page id,
two paths.**

---

## Reserved, not proposed for Stage 1

Recorded so that later stages do not invent a second convention. **None of
these is authorised, and none should be created now.**

| Page id | EN | IT | Status |
|---|---|---|---|
| `nap-airport` | `/airports/naples-capodichino` | `/it/aeroporti/napoli-capodichino` | **deferred — closure** |
| `pompeii` | `/destinations/pompeii` | `/it/destinazioni/pompei` | deferred |
| `caserta` | `/destinations/caserta` | `/it/destinazioni/caserta` | deferred |
| `sorrento` | `/destinations/sorrento` | `/it/destinazioni/sorrento` | deferred |
| `positano` | `/destinations/positano` | `/it/destinazioni/positano` | deferred — **access unresearched** |
| `amalfi` | `/destinations/amalfi` | `/it/destinazioni/amalfi` | deferred |
| `ravello` | `/destinations/ravello` | `/it/destinazioni/ravello` | deferred |
| `salerno-city` | `/destinations/salerno` | `/it/destinazioni/salerno` | deferred |

**`pompeii` / `pompei`** is the one that needs stating: English uses the
anglicised site name, Italian the comune's own spelling. One id, two paths —
exactly the Venice/Venezia rule.

Route candidates are reserved in the inventory with illustrative paths and are
**all deferred**, because the shared route type requires a `PageId` at both
ends and none of the far endpoints exists.

---

## Collisions and cannibalisation

**No existing URL is renamed, redirected, repurposed or deleted.** Checked
against the measured registry:

| Proposed path | Collides today? |
|---|---|
| `/destinations/naples` | **No.** 15 destination pages, none Campanian |
| `/airports/salerno-costa-damalfi` | **No.** 11 airport pages, none Campanian |
| `/cruise-ports/naples-stazione-marittima` | **No.** 2 cruise-port pages: `civitavecchia`, `ravenna-porto-corsini` |
| All reserved paths above | **No** |

`next.config.ts` declares **no redirects, rewrites or headers at all**, so
nothing outside the registry can collide either.

### Cannibalisation assessed

| Risk | Assessment |
|---|---|
| `naples` hub vs `salerno-airport` and `naples-cruise-port` | **Low.** The hub answers *which gateway do you mean*; the other two answer *what happens at one*. The Bologna hub/BLQ pair works the same way |
| `naples-cruise-port` vs a future Beverello or Porta di Massa page | **Low by design** — the slug names a facility, so each quay keeps its own identity |
| `route-naples-rome` vs the existing Rome cluster | **HIGH, and the reason it is deferred.** An intercity page touching Rome would compete with 10 live Rome pages. Needs an explicit owner decision, not a slug |
| Reverse-direction routes | **HIGH — rejected as a default.** The Bologna Stage 4 audit measured 76–82% direction-neutral content on live route pages |
| A Campania hotel directory | **HIGH — rejected at this stage.** The failure mode the brief names |

---

## Localization

Every proposed and reserved page is **one stable page id with two paths** — the
rule that has governed Venice/Venezia and Florence/Firenze since the Veneto
cluster. That single id is what makes `alternatesFor()` emit reciprocal
`hreflang` plus `x-default`, and what lets `counterpartForPath()` switch
language without falling back to the homepage.

**No page is proposed in one language only.**

---

## Sitemap and indexing

The three Stage 1 pages would be `published: true` **only if** navigation
wiring is approved alongside them. Without it they would have to ship
`published: false` — present as routes, absent from the sitemap, and
unreachable. That is the same bind recorded for Bologna and resolved there by
authorising navigation for the cluster's own entries only.

**`NEXT_PUBLIC_SITE_URL` remains unset**, so every URL in this map — like all
94 existing ones — would currently resolve to `http://localhost:3000`. That is
a separate, untouched launch blocker.
