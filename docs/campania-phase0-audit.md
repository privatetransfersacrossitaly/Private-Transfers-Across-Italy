# Campania cluster — Phase 0 read-only audit

**27 October 2026. Read-only.** No application code, route, registry entry,
sitemap entry, navigation item or configuration was changed. Only planning
documents under `docs/` were written.

All counts below were **measured during this audit**, not carried over from
earlier cluster reports.

---

## 1. Current repository state

| Measure | Command | Value |
|---|---|---|
| Registry page ids | `grep -c '^  \| "' lib/routes.ts` | **47** |
| Route files | `find app -name page.tsx \| wc -l` | **94** |
| Sitemap URLs | `<url>` count from the built sitemap | **94** |
| Content clusters | `ls -d content/*/` | `bologna`, `home`, `milan`, `rome`, `tuscany`, `veneto` |
| Cluster component dirs | `ls -d components/*/` | `bologna`, `home`, `milan`, `rome`, `site`, `tuscany`, `ui`, `veneto` |
| Photographs | manifest entries / files on disk | **24 / 23** |

Registry, filesystem and sitemap agree: 47 ids × 2 languages = 94.

### URL families, measured from the registry

| Family | Count | EN pattern | IT pattern |
|---|---|---|---|
| `/routes` | 18 | `/routes/<from>-to-<to>` | `/it/tratte/<da>-<a>` |
| `/destinations` | 15 | `/destinations/<place>` | `/it/destinazioni/<luogo>` |
| `/airports` | 11 | `/airports/<city>-<airport>` | `/it/aeroporti/<città>-<aeroporto>` |
| `/cruise-ports` | 2 | `/cruise-ports/<facility>` | `/it/porti-crociere/<struttura>` |

Four families, 46 records plus `home`. **A Campania cluster needs no new
routing pattern** — every page type it could want already exists.

Two conventions matter for naming later:

- **Airports are `<city>-<airport>`, never bare city** — `pisa-galilei`,
  `florence-peretola`, `bologna-marconi`. This is deliberate: it makes an
  airport incapable of colliding with its own city page.
- **Cruise ports name the facility when the facility is not the city** —
  `/cruise-ports/civitavecchia` but `/cruise-ports/ravenna-porto-corsini`,
  because the Ravenna berth is not in Ravenna.

---

## 2. Does any Campania content exist?

**No pages and no routes — verified three ways.**

| Method | Result |
|---|---|
| Registry (`lib/routes.ts`) | **0** of 47 ids relate to Campania |
| Filesystem | **0** of 94 route files match `naples`, `napoli`, `sorrento`, `positano`, `amalfi`, `ravello`, `salerno`, `pompei(i)`, `caserta`, `capodichino` |
| Sitemap | **0** of 94 URLs match any of those terms |

Term counts across the repository, excluding `node_modules`, `.next`, `docs`
and `package-lock.json`:

```
naples 2   napoli 2   amalfi 9   capodichino 2   NAP 2   costiera 1
sorrento 0  positano 0  ravello 0  salerno 0  pompei 0  pompeii 0
caserta 0   QSR 0      vesuv 0
```

### But three Campania commitments already exist, all on the homepage

Every hit resolves to one of three places, each in a matched EN/IT pair:

| Where | Current text | Links to |
|---|---|---|
| `content/home/{en,it}.ts:144` | **"Naples and the Amalfi Coast"** / "Napoli e la Costiera Amalfitana", in the *Also asked about* list | nothing — plain text |
| `content/home/{en,it}.ts:205` | `{ name: "Naples (Capodichino)", code: "NAP", note: "Inside the Naples urban area." }` | **nothing — no `page` field** |
| `content/home/{en,it}.ts:83` | the **cross-border journeys** service card uses `photo: "italy-amalfi-coast"` | n/a |

Two consequences, and one oddity.

1. **A factual claim about NAP is already published**: *"Inside the Naples
   urban area"* / *"Dentro l'area urbana di Napoli"*. Any future NAP page must
   agree with it.
2. **The "Also asked about" list is hedged** by its own note: *"Naming a city
   here means a journey to or from it can be quoted. It does not mean a
   dedicated page exists yet, and it does not mean a vehicle is standing by."*
   So Campania is named without being promised.
3. **The oddity:** the only Campania photograph on the site illustrates the
   **cross-border journeys** card. Amalfi is not cross-border. This is
   pre-existing and outside this task's scope; it is recorded because a
   Campania cluster will want that image and cannot simply take it (§4).

---

## 3. The two published commitments that constrain the brief's priorities

The brief lists **"private tours"** among the cluster's priorities. The site
already states the opposite, twice, in both languages:

> `content/home/en.ts:89` — *"A day shaped around where you want to go, with
> the stops you ask for and the time you want to set off. **We drive it; we are
> not a tour operator and we do not sell admissions.**"*

> `content/home/en.ts:275` — *"**We drive. We are not a tour operator, we do
> not sell tickets or admissions**, and nothing here is an offer of a guided
> visit or of guaranteed transport during a major event."*

**This is the single most important constraint on the proposed scope.** A
"private tours" page family would contradict a commitment the homepage makes
twice. What the site can offer for Pompeii and Caserta is a **drive to a named
entrance** — not a visit, a guide, a ticket or an itinerary.

This is not a reason to drop Pompeii or Caserta. It is a reason to scope them
as transfer endpoints rather than excursions, and it is reflected throughout
the Phase 1 inventory.

---

## 4. Images

| | |
|---|---|
| Manifest entries | 24 |
| Files in `public/photos/` | 23 |
| Campania assets | **exactly one** |

`italy-amalfi-coast` — CC0 1.0, rawpixel, `attributionRequired: false`,
1024 × 443, alt text already written in both languages.

**It has exactly one placement**, on the homepage cross-border card. The site
holds an invariant that **no image appears on more than one page**, so a
Campania page cannot reuse it without either breaking that invariant or moving
it off the homepage — which would be a homepage change, out of scope here.

**Consequence for Phase 1: plan Campania text-led**, as Tuscany (four pages,
zero images) and the Veneto (six of nine) already are. New CC0 photography
could be sourced later; nothing depends on it.

---

## 5. Infrastructure, inspected read-only

| Area | File | State |
|---|---|---|
| Redirects / rewrites / headers | `next.config.ts` | **none of any kind** — nothing for a new cluster to collide with |
| Sitemap | `app/sitemap.ts` | derived from `publishedPages()`; a route can exist with `published: false` and stay out |
| Robots | `app/robots.ts` | `allow: "/"` |
| Canonical / hreflang | `lib/metadata.ts` | `pageMetadata({id, locale, …})`; canonical, reciprocal hreflang and `x-default` all derived from the registry |
| Structured data | `lib/structured-data.ts` | emits `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, optional `FAQPage` **only** — no `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, address, telephone or price |
| Language switch | `counterpartForPath()` | matches the current path against the registry |
| Breadcrumbs | `trailFor()` | follows registry `parent`, not URL segments |
| Reusable page types | `content/page-types.ts` | `PageChrome`, `Endpoint`, `RoutePage` (with optional `lead` and `departure`) shared by all five clusters |
| Shared components | `components/site/` | **14 heroes, 16 blocks**; plus a shared `RoutePageView` |
| Tests | — | **none.** No vitest, jest or playwright configuration |
| CI / deployment | — | **none.** No `vercel.json`, `netlify.toml` or `.github/` |

### Quote / CRM / API — read-only, nothing submitted

`app/actions/quote.ts` and `lib/quote/{schema,state,transport}.ts` exist.
`QUOTE_ENDPOINT_URL` is unset, so `deliverQuoteRequest()` returns
`{ ok: false, reason: "not_configured" }`. **The server action is referenced by
no component**, and `#request-a-quote` is a copy section whose own published
note says it does not send anything. No form was submitted and no setting was
changed or tested against.

---

## 6. Launch blockers carried, not addressed

Per the brief, kept separate and untouched:

| Blocker | State |
|---|---|
| **`NEXT_PUBLIC_SITE_URL` unset** | All 94 canonical, hreflang and sitemap URLs resolve to `http://localhost:3000`. **Site-wide launch blocker.** Read only |
| **`QUOTE_ENDPOINT_URL` unset** | Returns `not_configured`; no form rendered, so no false success is possible |

Also still open from earlier clusters, and unchanged by this audit: the
Florence ZTL link and private-hire question; the archived Toscana Aeroporti
charter provenance; the Peretola runway figure; the Comune di Bologna ZTL
rules; whether Bologna hotels' permissions extend to our vehicles.

---

## 7. Conflicts and unknowns carried into Phase 1

| # | Item | Why it matters |
|---|---|---|
| **C1** | **Naples Capodichino is closing for runway works in November 2026** — confirmed by the operator's own homepage headline | Decides the entire staging order. See `docs/campania-source-verification.md` §1 |
| C2 | The brief's "private tours" priority contradicts two published homepage commitments | §3 above |
| C3 | Naples port is **several distinct facilities**, not one place | A single "Naples port" page would be wrong before it was written |
| C4 | The only Campania image is already placed, and the site allows one placement per image | §4 |
| C5 | Six of the eight named destinations have had **no primary research** | They cannot be inventoried as build-ready |
| C6 | Provider capability for Campania is **entirely unverified**, as in every prior cluster | No route may be presented as a confirmed service |

---

## 8. Compliance statement

No application code, content, route, page id, registry entry, sitemap entry,
navigation item or router behaviour was changed. No environment variable,
`.env` file, quote endpoint, form, CRM, email, API, database, DNS, hosting or
deployment configuration was created, altered or tested against. No quote was
submitted. Rome, Milan, the Veneto, Tuscany, Bologna and the homepage are
untouched. Nothing was committed or pushed.

Only the seven planning documents named in the brief were written, all of
which were absent beforehand.
