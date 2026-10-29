# Tuscany cluster — Phase 0 read-only audit

**Date:** 2026-10-26 · **Scope:** read-only. No file outside `docs/` was
created or modified. No code was written. No quote form was submitted. No
environment, DNS, API or CRM setting was inspected beyond reading.

---

## 0. Blocker found first: the architecture document does not exist

The brief opens with "Read `docs/tuscany-cluster-architecture.md` first", and
Phase 1 instructs: "Read the architecture document's proposed tiers and
conditional page list."

**That file is not in the repository.** Searched by name and by pattern:

```
find . -iname '*tuscany*'   →   ./public/photos/tuscany-val-dorcia.jpg   (only hit)
ls docs/                    →   no tuscany-* file of any kind
```

`docs/` currently contains architecture documents for the three completed
regions — `ROME_CLUSTER_ARCHITECTURE.md`, `MILAN_CLUSTER_ARCHITECTURE.md`,
`veneto-cluster-architecture.md` — and no Tuscany equivalent.

**Consequence for Phase 1.** The proposed tiers and the conditional page list
cannot be read. Phase 1 planning therefore has to work from the candidate
list in the brief's own Context section — Florence, Pisa, Siena, Lucca,
Arezzo, San Gimignano, Chianti, Val d'Orcia, Maremma, with commercial
priorities of Florence and Pisa airports, winery trips, countryside villas,
weddings, coastal resorts and intercity transfers.

**This is the single largest open risk in the plan**, and it is listed first
in the Phase 1 hand-back. If the architecture document is supplied, the
inventory should be re-checked against its tiers before anything is built.

---

## 1. How many Tuscany pages exist: **zero**

Stated explicitly, as the brief requires, and verified three independent ways
rather than assumed.

| Check | Method | Result |
|---|---|---|
| Route registry | `lib/routes.ts`, all 29 page ids listed | **No Tuscany id.** Ids are `home`, 9 × Rome, 10 × Milan, 9 × Veneto |
| Filesystem | `find app -name 'page.tsx'` filtered for Tuscan place names | **No match** |
| Build output | `.next` app-paths and prerender manifests | **No Tuscan route** |

The 29 existing page ids:

```
home
rome fiumicino ciampino civitavecchia rome-stations
route-fco-rome route-cia-rome route-rome-civitavecchia route-fco-civitavecchia
milan malpensa linate bergamo-airport milan-stations lake-como
route-mxp-milan route-lin-milan route-bgy-milan route-mxp-como
venice verona venice-marco-polo treviso-airport verona-airport venice-stations
route-vce-venice route-tsf-venice route-vrn-verona
```

**No existing URL would be renamed, repurposed, redirected or deleted** by a
Tuscany cluster. No redirect proposal is required.

---

## 2. But Tuscany content already exists — in five places on the homepage

This is the part that would have been missed by assuming an empty region.
Every item below is live copy that a Tuscany cluster must agree with, not
contradict.

| # | File and line | What it says |
|---|---|---|
| 1 | `content/home/en.ts:134-139` / `it.ts:134-139` | **Florence destination tile.** EN "Florence", IT "Firenze". Blurb: *"A small airport inside the urban area, a larger one at Pisa, a strictly regulated centre, and Tuscany beginning minutes past the ring road."* Photo: `florence-skyline` |
| 2 | `content/home/en.ts:193-199` / `it.ts:193-199` | **Airport directory group `centre-airports`, region "Tuscany and the centre"**, naming: **Florence (Peretola), FLR** — *"In the Peretola area at the edge of the city."*; **Pisa (Galileo Galilei), PSA** — *"The larger airport for Tuscany, close to Pisa itself."* |
| 3 | `content/home/en.ts:146` | **"Pisa and the Tuscan coast"** in the `also` list under "Also asked about" |
| 4 | `content/home/en.ts:247` | Cruise section: *"Florence and Pisa are reached from **Livorno**."* |
| 5 | `content/home/en.ts:33` and `:90` | `tuscany-val-dorcia` used as the **homepage hero photograph** and again on the day-trips service card |

### Four commitments the homepage has already made

A Tuscany cluster has to be consistent with all four, or the site contradicts
itself:

1. **Florence has a small airport "inside the urban area"** (Peretola, FLR) —
   and **Pisa's is "the larger airport for Tuscany"** (PSA). The relative
   sizing is already asserted.
2. **Florence's centre is "strictly regulated"** — a ZTL claim, already made,
   which the Florence hub must substantiate and date.
3. **"Tuscany beginning minutes past the ring road"** — the countryside
   framing is already set.
4. **Livorno is the cruise port for Florence and Pisa** — already stated, and
   it constrains any future coastal or cruise page.

**No link exists from any of these to anything.** All five are plain text.
The Florence tile and the two airports have `page?: PageId` fields available
on their types (`content/home/types.ts`) and currently unset, exactly as
Venice's and Milan's were before their clusters shipped.

---

## 3. Images: both obvious Tuscany assets are already in use

`content/photos.ts` holds 21 photographs. Two are Tuscan, **and both are
already placed**:

| Slug | Licence | Where it is used now |
|---|---|---|
| `tuscany-val-dorcia` | CC0 1.0, Fabrizio Lunardi, Wikimedia | **Homepage hero** (`en.ts:33`) **and** the day-trips service card (`en.ts:90`) — two placements, the most prominent image on the site |
| `florence-skyline` | CC0 1.0, rawpixel | Florence destination tile (`en.ts:138`) — one placement |

### The duplication constraint this creates

The site currently has **no image used in more than one *page*** — a property
established during the Milan and Veneto reviews and verified again today.
`tuscany-val-dorcia`'s two homepage placements are both on the homepage, so
that property still holds.

**Reusing either slug on a Tuscany page would break it**, and
`tuscany-val-dorcia` in particular is the site's hero image. A Tuscany cluster
therefore needs **new photography or a text-led design** — the same position
Veneto reached, where six of nine pages ship with no photograph by decision.

`docs/asset-manifest.csv` has **no Tuscany row at all**: the two slugs above
predate the manifest, which was begun with the Rome cluster. If Tuscany pages
use either, back-filling those two rows is required.

---

## 4. Architecture available for reuse

Nothing new needs inventing. The patterns are established and documented.

**Route registry** — `lib/routes.ts`. One `PageId` union, one `pages` record
holding `path: {en, it}`, `parent`, `published`, `priority`. Everything else
derives from it: `pathFor`, `urlFor`, `alternatesFor`, `counterpartForPath`,
`publishedPages`, `trailFor`, `pathWithHash`.

**Metadata** — `lib/metadata.ts`: `pageMetadata({id, locale, title,
description})` builds canonical, reciprocal hreflang, `x-default`, Open Graph
and Twitter from the registry. Titles get the brand appended once.

**Structured data** — `lib/structured-data.ts`: `pageJsonLd` emits
`Organization`, `WebSite`, `WebPage`, `BreadcrumbList` and an optional
`FAQPage` generated from the page's visible questions.

**Sitemap** — `app/sitemap.ts` iterates `publishedPages()`. A page with no
registry entry cannot appear in it. **No `redirects`, `rewrites` or
`trailingSlash` are configured** in `next.config.ts`.

**Navigation** — `content/navigation.ts`, one source for navbar and footer,
with the standing rule that an item appears only when it resolves to
something that exists. Currently groups by region: Rome and Lazio, Milan and
Lombardy, Venice and the Veneto.

**Page names** — `content/page-names.ts`, short EN/IT labels per page id, read
by breadcrumbs, `BreadcrumbList` markup and both menus.

**Components available** — 12 heroes and 16 blocks, all in
`components/site/`:

> **Heroes:** `HeroBackdrop` `HeroSplit` `HeroBand` `HeroNarrow` `HeroRoute`
> `HeroChooser` `HeroFrame` `HeroMeta` `HeroGeo` `HeroTowns` `HeroEndpoints`
> `HeroModes`
>
> **Blocks:** `Eyebrow` `BandHeading` `Paragraphs` `SourceNote` `ChooserList`
> `FactStrip` `CompareColumns` `DataTable` `NumberedSteps` `DefinitionList`
> `Checklist` `Callout` `LinkIndex` `QuestionList` `ZoneDiagram` `TownIndex`

`TownIndex` (built for Lake Como's towns, keyed by which arm of the lake they
sit on) is the closest existing fit for Chianti or Val d'Orcia villages, and
`ZoneDiagram` (Milan's nested Area B / Area C) is the closest fit for a
Florence ZTL explanation.

**URL conventions, established and authoritative:**

```
/destinations/<place>            ↔  /it/destinazioni/<luogo>
/airports/<city>-<airport>       ↔  /it/aeroporti/<città>-<aeroporto>
/destinations/<city>/<service>   ↔  /it/destinazioni/<città>/<servizio>
/routes/<from>-to-<to>           ↔  /it/tratte/<da>-<a>      (Italian drops "-to-")
```

No trailing slash. Italian slugs are Italian. Section anchors are localised.

---

## 5. Quote configuration — inspected read-only, unchanged

| Item | State |
|---|---|
| `.env` files present | **Only `.env.example`.** No `.env`, no `.env.local` |
| `NEXT_PUBLIC_SITE_URL` | **Unset.** `lib/site.ts` falls back to `http://localhost:3000`, so every canonical, hreflang, OG URL and sitemap entry currently resolves to localhost |
| `QUOTE_ENDPOINT_URL` | **Unset.** `lib/quote/transport.ts:109` reads it; at `:114` it logs *"QUOTE_ENDPOINT_URL is not set — request validated but not delivered"* and returns `{ ok: false, reason: "not_configured" }` |
| Quote form rendered anywhere | **No.** There is no form on the site. Every CTA resolves through `quotePathFor(locale)` to the `#request-a-quote` homepage section |
| False success possible | **No.** That section's own copy states that nothing there pretends to send a message or confirm a booking |

**Nothing was submitted and nothing was changed.** Both variables remain
unresolved and are reported again in the Phase 1 hand-back as configuration
blockers.

---

## 6. Technical constraints a Tuscany cluster inherits

1. **Two root layouts, no shared one.** `app/(en)/layout.tsx` (`lang="en"`,
   serves `/`) and `app/(it)/layout.tsx` + `app/(it)/it/…`. Every Tuscany page
   needs a file in **both** groups; Italian routes live under `app/(it)/it/…`.
2. **Type scale is `type-*`, not `text-*`** — tailwind-merge drops a
   `text-<size>` when it meets a `text-<colour>`.
3. **One client component on the whole site** (`site-nav.tsx`). Every cluster
   page is server-rendered, and the project has kept it that way.
4. **`NEXT_PUBLIC_SITE_URL` unset** makes every canonical wrong in a
   deployment. Blocking for launch, not for building.
5. **Baseline is clean right now:** `tsc --noEmit` 0 errors, `eslint .` 0
   warnings, 58 routes building static.

---

## 7. Duplicate identities and route collisions — none found, two to watch

**No duplicate identity exists.** Florence/Firenze does not appear as a page
in either language, so the one-id-two-paths rule can be established cleanly
rather than repaired — exactly as Venice/Venezia was.

Two collisions to **flag before coding**, neither of them live yet:

| Risk | Detail |
|---|---|
| `/airports/florence` vs `/destinations/florence` | The registry convention is `<city>-<airport>`, so Peretola should be `/airports/florence-peretola`, not `/airports/florence`. Veneto hit this exact case and resolved it the same way (`/airports/verona-villafranca`, not `/airports/verona`) |
| Pisa as airport **and** as city | PSA is in Pisa and serves Florence. If both an airport page and a Pisa city page were ever built, `/airports/pisa-galilei` and `/destinations/pisa` must stay distinct, and the breadcrumb parent for the airport needs deciding — Florence or Pisa |

---

## 8. Summary of findings

- **Existing Tuscany pages: zero.** Verified against the registry, the
  filesystem and the build output.
- **Existing Tuscany content: five homepage placements**, carrying four
  factual commitments a cluster must honour.
- **Both Tuscan images are already placed**, one of them as the site hero.
  New photography or a text-led design is required.
- **No redirects, no aliases, no duplicate identities, no live route
  collisions.** Nothing to migrate.
- **The architecture document is missing** — the one genuine blocker, carried
  into Phase 1 as its top risk.
- **Both configuration variables remain unset**, unchanged and unsubmitted.

**Phase 0 complete. No implementation was performed.**
