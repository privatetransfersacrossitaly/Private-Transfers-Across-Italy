# Milan cluster — English/Italian URL map

Produced from `lib/routes.ts`, which is the one place a path is written. The
canonical, the hreflang alternates, the sitemap entry, the breadcrumb trail
and the language switcher all derive from it, so none of them can disagree
with this table.

| Page id | English | Italian | Parent (breadcrumb) |
|---|---|---|---|
| `milan` | `/destinations/milan` | `/it/destinazioni/milano` | Home |
| `malpensa` | `/airports/milan-malpensa` | `/it/aeroporti/milano-malpensa` | Milan |
| `linate` | `/airports/milan-linate` | `/it/aeroporti/milano-linate` | Milan |
| `bergamo-airport` | `/airports/milan-bergamo` | `/it/aeroporti/milano-bergamo` | Milan |
| `milan-stations` | `/destinations/milan/train-station-transfers` | `/it/destinazioni/milano/transfer-stazioni` | Milan |
| `lake-como` | `/destinations/lake-como` | `/it/destinazioni/lago-di-como` | Milan |
| `route-mxp-milan` | `/routes/malpensa-airport-to-milan` | `/it/tratte/aeroporto-malpensa-milano` | Malpensa |
| `route-lin-milan` | `/routes/linate-airport-to-milan` | `/it/tratte/aeroporto-linate-milano` | Linate |
| `route-bgy-milan` | `/routes/bergamo-airport-to-milan` | `/it/tratte/aeroporto-bergamo-milano` | Bergamo |
| `route-mxp-como` | `/routes/malpensa-airport-to-lake-como` | `/it/tratte/aeroporto-malpensa-lago-di-como` | Lake Como |

## Conventions preserved, not invented

Every path follows the scheme the Rome cluster established and recorded in
`docs/rome-ia-decisions.md`:

- `/destinations/<place>` ↔ `/it/destinazioni/<luogo>`
- `/airports/<city>-<airport>` ↔ `/it/aeroporti/<città>-<aeroporto>`
- `/destinations/<city>/<service>` ↔ `/it/destinazioni/<città>/<servizio>`
- `/routes/<from>-to-<to>` ↔ `/it/tratte/<da>-<a>`, the Italian dropping the
  English `-to-` because *da … a …* does not survive a slug.

No second URL pattern was introduced and no existing URL changed.

## Two decisions worth recording

**Lake Como's parent is Milan.** The lake is not in Milan and the page never
says it is. But the breadcrumb follows the content hierarchy rather than the
URL segments — the policy set in the Rome cluster, where airports are
parented to Rome despite living under `/airports/` — and Milan and its
airports are genuinely how a visitor reaches the lake. `/destinations` has no
index page, so a breadcrumb level pointing at one would 404.

**`/airports/milan-bergamo`, not `/airports/bergamo`.** The airport is sold
under Milan's name, which is both why people search for it that way and why
the page exists. The slug matches the commercial reality; the page spends its
first screen correcting the geography.

## Language switching

`counterpartForPath()` resolves the current path against the registry, so the
switcher on any Milan page lands on that page's counterpart rather than on
the Italian homepage. All twenty Milan routes have a genuine counterpart, so
the fallback does not arise — the mechanism still supports it for the first
page that has none.

## Anchors differ between languages, deliberately

Section ids are localised: the Milan hub's access section is `#zones` in
English and `#zone` in Italian; Lake Como's towns are `#bellagio`, `#varenna`
and so on in both, because place names do not translate. Nothing links to an
anchor across languages, and an Italian URL reading as Italian is worth more
than a shared id nothing uses.
