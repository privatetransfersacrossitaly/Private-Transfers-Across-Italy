# Bologna cluster — URL map

**Proposed. Nothing has been created, renamed, redirected or deleted.**
A slug in this document is a proposal, not authorisation.

---

## D4 — recommended page family: `/destinations/bologna/<hotel>`

The architecture offers `/hotels/bologna/<hotel>` as an illustrative slug. It
is **not** recommended. The comparison:

| | `/hotels/bologna/<hotel>` | `/destinations/bologna/<hotel>` ✅ |
|---|---|---|
| Precedent on this site | **None.** No `/hotels` segment exists; no hotel page, type or component exists anywhere | **Three existing pages** use exactly this shape: `/destinations/rome/train-station-transfers`, `/destinations/milan/…`, `/destinations/venice/…` |
| Breadcrumb | `trailFor()` walks `parent`, so the trail would read Home › Bologna › Hotel regardless — but the URL would not mirror it | URL and trail agree: Home › Bologna › Hotel |
| What it promises | A **site-wide hotel directory**. There is none, and none is planned. 15 of 19 shortlist hotels are deferred, so the segment would launch with four entries and imply hundreds | Scoped to one city, which is what this is |
| Collision risk | A future Milan hotel would need `/hotels/milan/…`, creating a second index that competes with `/destinations/milan` | A Milan hotel nests under `/destinations/milan/…`. No competing index ever forms |
| IT counterpart | `/it/hotel/bologna/…` — a new Italian segment with no precedent | `/it/destinazioni/bologna/…` — the established pattern |
| Registry impact | New top-level family to teach every helper about | None. `pathFor`, `alternatesFor`, `trailFor`, `counterpartForPath` and the sitemap all work unchanged |

**Recommendation: `/destinations/bologna/<hotel-slug>`.** It is the only option
with a precedent on this site, it keeps hotels bound to the city that owns
them, and it adds nothing to the registry's vocabulary.

---

## Proposed URLs — Wave 1

18 page ids, 36 localized routes. Registry would move 35 → 53; routes 70 → 106.

### Hubs

| Page id | EN | IT | Parent |
|---|---|---|---|
| `bologna` | `/destinations/bologna` | `/it/destinazioni/bologna` | `home` |
| `blq` | `/airports/bologna-marconi` | `/it/aeroporti/bologna-marconi` | `bologna` |

`bologna-marconi` follows the registry's `<city>-<airport>` rule — the same
rule that produced `pisa-galilei`, `florence-peretola` and
`verona-villafranca`, and the reason an airport can never collide with its
city.

### Hotels

| Page id | EN | IT | ZTL tier |
|---|---|---|---|
| `hotel-majestic` | `/destinations/bologna/grand-hotel-majestic` | `/it/destinazioni/bologna/grand-hotel-majestic` | Area T — 24 h |
| `hotel-excelsior` | `/destinations/bologna/starhotels-excelsior` | `/it/destinazioni/bologna/starhotels-excelsior` | outside the ZTL |
| `hotel-commercianti` | `/destinations/bologna/art-hotel-commercianti` | `/it/destinazioni/bologna/art-hotel-commercianti` | pedestrian — 24 h |
| `hotel-savoia` | `/destinations/bologna/savoia-hotel-regency` | `/it/destinazioni/bologna/savoia-hotel-regency` | outside the centre |

**Hotel slugs are identical in both languages.** A hotel's name is a proper
noun and is not translated — the same decision already taken for
`val-d-orcia`, which is `/destinations/val-d-orcia` and
`/it/destinazioni/val-d-orcia`. Only the path *prefix* localizes.

The Majestic's slug drops `già Baglioni`: it is a sub-title, it carries a
diacritic that does not belong in a slug, and the page title keeps it in full.

### Routes — both directions per hotel

| Page id | EN | IT |
|---|---|---|
| `route-blq-majestic` | `/routes/bologna-airport-to-grand-hotel-majestic` | `/it/tratte/aeroporto-bologna-grand-hotel-majestic` |
| `route-majestic-blq` | `/routes/grand-hotel-majestic-to-bologna-airport` | `/it/tratte/grand-hotel-majestic-aeroporto-bologna` |
| `route-blq-excelsior` | `/routes/bologna-airport-to-starhotels-excelsior` | `/it/tratte/aeroporto-bologna-starhotels-excelsior` |
| `route-excelsior-blq` | `/routes/starhotels-excelsior-to-bologna-airport` | `/it/tratte/starhotels-excelsior-aeroporto-bologna` |
| `route-blq-commercianti` | `/routes/bologna-airport-to-art-hotel-commercianti` | `/it/tratte/aeroporto-bologna-art-hotel-commercianti` |
| `route-commercianti-blq` | `/routes/art-hotel-commercianti-to-bologna-airport` | `/it/tratte/art-hotel-commercianti-aeroporto-bologna` |
| `route-blq-savoia` | `/routes/bologna-airport-to-savoia-hotel-regency` | `/it/tratte/aeroporto-bologna-savoia-hotel-regency` |
| `route-savoia-blq` | `/routes/savoia-hotel-regency-to-bologna-airport` | `/it/tratte/savoia-hotel-regency-aeroporto-bologna` |

The EN pattern `<from>-to-<to>` and the IT pattern `<da>-<a>` are both already
in use across all 13 existing route pages. **The direction is legible in the
URL**, which matters more here than anywhere else on the site, because this is
the first cluster with reverse pairs.

### Ravenna

| Page id | EN | IT |
|---|---|---|
| `ravenna` | `/destinations/ravenna` | `/it/destinazioni/ravenna` |
| `ravenna-terminal` | `/cruise-ports/ravenna-porto-corsini` | `/it/porti-crociere/ravenna-porto-corsini` |
| `route-terminal-ravenna` | `/routes/ravenna-cruise-terminal-to-ravenna` | `/it/tratte/terminal-crociere-ravenna-citta` |
| `route-ravenna-terminal` | `/routes/ravenna-to-ravenna-cruise-terminal` | `/it/tratte/ravenna-terminal-crociere` |

`ravenna-porto-corsini`, not `ravenna`: the port is **not** in Ravenna, and
the slug should not say it is. This mirrors `/airports/bologna-marconi`
keeping the airport distinct from the city, and it prevents a collision with
`/destinations/ravenna`.

---

## Collisions and existing URLs

**No existing URL is renamed, redirected, repurposed or deleted.** Checked:

| Proposed path | Collides with anything today? |
|---|---|
| `/destinations/bologna` | No. `/destinations/*` holds 10 pages, none Bolognese |
| `/airports/bologna-marconi` | No. `/airports/*` holds 10, none Bolognese |
| `/destinations/bologna/<hotel>` | No. The only third-level paths are the three `train-station-transfers` pages |
| `/cruise-ports/ravenna-porto-corsini` | No. `/cruise-ports/*` holds exactly one page, `civitavecchia` |
| `/destinations/ravenna` | No |
| All eight hotel routes, both terminal routes | No. `/routes/*` holds 13, none involving Bologna or Ravenna |

`next.config.ts` declares **no redirects, rewrites or headers at all**, so
there is nothing to collide with outside the registry.

---

## Localization

Every proposed page is **one stable page id with two paths**, the rule that has
governed Venice/Venezia and Florence/Firenze since the Veneto cluster. That
single id is what makes `alternatesFor()` emit reciprocal `hreflang` plus
`x-default`, and what lets `counterpartForPath()` switch language without
falling back to the homepage.

No page is proposed in one language only.

---

## Sitemap and indexing

All 18 would be registered `published: true` **only if** D3 Option A is
approved. Under Option B they would be `published: false` — present as routes,
absent from the sitemap, and unreachable from the rest of the site. See the
recommendation document, §D3.
