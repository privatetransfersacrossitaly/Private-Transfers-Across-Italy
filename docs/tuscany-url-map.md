# Tuscany cluster — English/Italian URL map (proposed)

**Status: proposed, not implemented.** No route has been created, no registry
entry added, no URL reserved. This records what Phase 2 would create *if* the
plan is approved.

## Proposed paths — the six `build` rows

| Page id | English | Italian | Breadcrumb parent |
|---|---|---|---|
| `florence` | `/destinations/florence` | `/it/destinazioni/firenze` | Home |
| `pisa-airport` | `/airports/pisa-galilei` | `/it/aeroporti/pisa-galilei` | Florence |
| `florence-airport` | `/airports/florence-peretola` | `/it/aeroporti/firenze-peretola` | Florence |
| `val-dorcia` | `/destinations/val-d-orcia` | `/it/destinazioni/val-d-orcia` | Florence |
| `route-psa-florence` | `/routes/pisa-airport-to-florence` | `/it/tratte/aeroporto-pisa-firenze` | Pisa (PSA) |
| `route-flr-florence` | `/routes/florence-airport-to-florence` | `/it/tratte/aeroporto-firenze-citta` | Florence Peretola (FLR) |

Six pages, twelve routes.

## Florence and Firenze are one page identity

The brief's requirement — *"preserve one stable page identity per bilingual
pair"* — is met structurally, not by convention. `florence` is **one page id
holding two paths**, exactly as `venice` holds `/destinations/venice` and
`/it/destinazioni/venezia`.

There is no `firenze` id, no second page, and no mechanism by which the two
could become competing URLs: they share one canonical pair, one breadcrumb
trail, one sitemap entry and one language-switch target, all derived from the
single registry record.

The same applies to `pisa-airport` and `florence-airport`, whose Italian paths
differ only in the city's spelling.

## Conventions followed, and the one place the obvious slug was rejected

The registry's established patterns (see `docs/rome-ia-decisions.md`,
`docs/veneto-url-map.md`) are authoritative:

```
/destinations/<place>            ↔  /it/destinazioni/<luogo>
/airports/<city>-<airport>       ↔  /it/aeroporti/<città>-<aeroporto>
/routes/<from>-to-<to>           ↔  /it/tratte/<da>-<a>
```

No trailing slash. Italian slugs are Italian. Italian route slugs drop `-to-`.

**Collision avoided deliberately.** `/airports/florence` would sit beside
`/destinations/florence` and invite confusion about which is the city and
which the airport. The registry convention gives `<city>-<airport>`, so it is
**`/airports/florence-peretola`**. The Veneto cluster hit the identical case
and resolved it the same way — `/airports/verona-villafranca`, not
`/airports/verona`. Pisa takes `/airports/pisa-galilei` for consistency, which
also leaves `/destinations/pisa` free should a Pisa city page ever be
justified.

**`val-d-orcia`, not `val-dorcia`.** The apostrophe cannot appear in a slug,
and `val-d-orcia` reads correctly in both languages. The Italian path is
identical because the name does not translate — the same decision taken for
`lago-di-como` where the English `lake-como` differs, and for Verona where it
does not.

## Route collisions — checked, none live

Verified against the 29 existing page ids and the filesystem. **No proposed
path collides with an existing one.** No redirect, rename or alias is
required, and `next.config.ts` declares no `redirects` or `rewrites` to work
around.

Two collisions were *identified and designed out* rather than discovered
later: `/airports/florence` (above), and the Pisa airport-versus-city
ambiguity, resolved by qualifying the airport slug and leaving the city slug
unclaimed.

## Language switching

`counterpartForPath()` resolves the current path against the registry, so the
switcher on any Tuscany page would land on that page's counterpart rather than
the Italian homepage. All six proposed pages have genuine counterparts in both
languages, so the homepage fallback does not arise.

## Section anchors

Localised, as in Milan and the Veneto — English anchors in English paths,
Italian in Italian. Place names that do not translate, such as `#val-d-orcia`
or the five comuni, stay identical in both.

## Deferred candidates reserve nothing

The fifteen `defer` rows in the inventory have **no registry entry, no path
and no link anywhere**. A deferred page cannot reach the sitemap or the
navigation, because the sitemap is generated from `publishedPages()` and the
navigation only renders items that resolve.
