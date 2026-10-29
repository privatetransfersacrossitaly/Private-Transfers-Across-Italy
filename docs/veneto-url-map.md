# Veneto cluster — English/Italian URL map

Derived from `lib/routes.ts`, the single place a path is written. Canonical,
hreflang alternates, sitemap entry, breadcrumb trail and the language
switcher are all generated from it, so none can disagree with this table.

| Page id | English | Italian | Breadcrumb parent |
|---|---|---|---|
| `venice` | `/destinations/venice` | `/it/destinazioni/venezia` | Home |
| `verona` | `/destinations/verona` | `/it/destinazioni/verona` | Home |
| `venice-marco-polo` | `/airports/venice-marco-polo` | `/it/aeroporti/venezia-marco-polo` | Venice |
| `treviso-airport` | `/airports/treviso-canova` | `/it/aeroporti/treviso-canova` | Venice |
| `verona-airport` | `/airports/verona-villafranca` | `/it/aeroporti/verona-villafranca` | Verona |
| `venice-stations` | `/destinations/venice/train-station-transfers` | `/it/destinazioni/venezia/transfer-stazioni` | Venice |
| `route-vce-venice` | `/routes/marco-polo-airport-to-venice` | `/it/tratte/aeroporto-marco-polo-venezia` | Marco Polo (VCE) |
| `route-tsf-venice` | `/routes/treviso-airport-to-venice` | `/it/tratte/aeroporto-treviso-venezia` | Treviso (TSF) |
| `route-vrn-verona` | `/routes/verona-airport-to-verona` | `/it/tratte/aeroporto-verona-citta` | Verona Villafranca (VRN) |

## Venice and Venezia are one destination in two languages

The architecture document's first rule. It is enforced structurally, not by
convention: `venice` is **one page id** with two paths. There is no `venezia`
id, no second page, and no way for the two to diverge — they share a
canonical pair, a breadcrumb trail and a language-switch target. Verona is a
separate id because it is a separate city.

## Existing URLs: nothing changed

The Phase 0 audit found **no Veneto route of any kind** — not in the
registry, not on disk, not in the sitemap, and `next.config.ts` declares no
`redirects` or `rewrites`. Nothing was renamed, redirected, repurposed or
overwritten, and **no redirect proposal is required**.

## Departures from the architecture document's illustrative slugs

The document states that existing conventions are authoritative and its own
paths are illustrative. Three differ, and in each case the established
pattern won:

| Document suggested | Used instead | Why |
|---|---|---|
| `/airports/treviso` | `/airports/treviso-canova` | Every airport in the registry is `<city>-<airport>`: `rome-fiumicino`, `milan-malpensa`, `milan-bergamo`. A bare city name would be the only exception |
| `/airports/verona` | `/airports/verona-villafranca` | Same pattern — and `/airports/verona` beside `/destinations/verona` invites confusion about which is which |
| `/routes/venice-marco-polo-airport-to-venice` | `/routes/marco-polo-airport-to-venice` | Milan's routes use the airport's short name (`malpensa-airport-to-milan`), not the city-qualified one. "Venice Marco Polo Airport to Venice" also reads as a stutter |

Italian slugs are Italian, as in both earlier clusters: `destinazioni`,
`aeroporti`, `tratte`, and `venezia` for the city. Italian route slugs drop
the English `-to-`.

## Language switching

`counterpartForPath()` resolves the current path against the registry, so the
switcher on any Veneto page lands on that page's counterpart rather than on
the Italian homepage. All nine pages have a genuine counterpart in both
languages, so the homepage fallback does not arise here.

## Section anchors

Localised, as in Milan: the Venice hub's access section is `#endpoints` in
English and `#estremi` in Italian. Nothing links to an anchor across
languages. Place names that do not translate — `#santa-lucia`, `#mestre`,
`#porta-nuova` — are identical in both.
