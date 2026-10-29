# Bologna cluster — Phase 0 read-only audit

**27 October 2026. Read-only. No code was written and no file outside `docs/`
was touched.**

Gate 1 of `Bologna_Cluster_Architecture.docx`. This records what exists today,
what conflicts with the requested scope, and what nobody can answer yet.

---

## 0. The first finding: the source-of-truth path is wrong

The brief says to read `docs/bologna-cluster-architecture.md`. **That file does
not exist.** The architecture document is present as:

```
docs/Bologna_Cluster_Architecture.docx      41,859 bytes, dated 2026-10-27
```

It was read in full (11,472 characters of extracted text, 11 sections) and is
the basis of this audit. Nothing was inferred from the brief where the document
says otherwise.

**Every other cluster's architecture is a committed `.md`.** A `.docx` in
`docs/` is the only binary planning document in the repository, cannot be
diffed, and will not be greppable by later audits the way the Rome, Milan,
Veneto and Tuscany documents are.

> **Decision needed (D1).** Convert to `docs/bologna-cluster-architecture.md`
> for consistency, keep the `.docx` as the owner's master, or keep both? I have
> changed nothing.

---

## 1. Does any Bologna or Ravenna content already exist?

**No — verified three independent ways.**

| Method | Result |
|---|---|
| Route registry (`lib/routes.ts`) | 35 page ids. **None** Bolognese, Ravennate or a hotel |
| Filesystem (`find app -name page.tsx`) | 70 route files. **0** match `bologna`, `ravenna`, `hotel`, `corsini` or `marconi` |
| Built sitemap | 70 `<url>` entries. **0** match any of those terms |

The cluster is genuinely empty. There are no aliases, no redirects, no
language counterparts, no duplicate identities and no cannibalising content to
untangle.

### But two homepage commitments already exist

Searching the whole repository (excluding `node_modules`, `.next`, `docs`) for
`bologna|blq|guglielmo marconi|bologna centrale` returns **four real hits, all
on the homepage**, in matched EN/IT pairs:

| Where | Exact current text | Links to |
|---|---|---|
| `content/home/en.ts:145`, `it.ts:145` | `"Bologna"` in the **"Also asked about"** list | nothing (plain text) |
| `content/home/en.ts:190`, `it.ts:190` | `{ name: "Bologna (Guglielmo Marconi)", code: "BLQ", note: "North-west of the city centre." }` | **nothing — no `page` field** |

Two consequences for Phase 1:

1. **A factual claim about BLQ is already published**: *"North-west of the city
   centre"* / *"A nord-ovest del centro città"*. Any BLQ page must agree with
   it, or the homepage line has to change — and changing it is forbidden by
   this brief (see §5).
2. **The "Also asked about" list is honestly hedged.** Its note reads: *"Naming
   a city here means a journey to or from it can be quoted. It does not mean a
   dedicated page exists yet, and it does not mean a vehicle is standing by."*
   So the homepage does **not** over-promise Bologna. There is no commitment to
   discharge, unlike Florence, whose tile asserted a page was coming.

### No hotel page family exists anywhere

Searched all 19 shortlist hotels plus the word "hotel" across `app/`,
`content/`, `components/`, `lib/`.

- **0 of 19 hotel names appear anywhere.** The apparent hits for *Metropolitan*,
  *Internazionale* and *Orologio* are all the ordinary Italian words
  (`area metropolitana`, `scalo internazionale`, `l'orologio` = the clock) in
  Rome and Milan route prose. Verified line by line.
- **There is no `/hotels` route, no hotel page type, no hotel component and no
  hotel entry in the registry or `content/page-names.ts`.**
- "hotel" otherwise appears only as a noun in prose and once in
  `lib/quote/schema.ts`.

**A hotel page family would be a new structural family on this site.** That is
the single largest architectural decision in this cluster.

### No Ravenna content, and only one cruise-port page in total

`ravenna|porto corsini|corsini` → **zero hits anywhere in the repository.**

The entire site has exactly **one** cruise-port page:

```
civitavecchia   /cruise-ports/civitavecchia   /it/porti-crociere/civitavecchia
                parent: rome    components/rome/cruise-port.tsx (183 lines)
                content/rome/civitavecchia.ts (330 lines)   type CruisePort
```

So the `/cruise-ports` family exists with one member, a working page type
(`CruisePort`) and a rendering component. Ravenna would be the second, and the
first not parented to Rome.

---

## 2. Conventions the cluster must follow

### URL families (from the registry, all 34 non-home records)

| Family | EN | IT | Count |
|---|---|---|---|
| Destinations | `/destinations/<place>` | `/it/destinazioni/<luogo>` | 10 |
| Airports | `/airports/<city>-<airport>` | `/it/aeroporti/<città>-<aeroporto>` | 10 |
| Cruise ports | `/cruise-ports/<port>` | `/it/porti-crociere/<porto>` | 1 |
| Routes | `/routes/<from>-to-<to>` | `/it/tratte/<da>-<a>` | 13 |
| Sub-pages | `/destinations/<city>/train-station-transfers` | `/it/destinazioni/<città>/transfer-stazioni` | 3 |

Airport slugs are **`<city>-<airport>`**, never bare city — `pisa-galilei`,
`florence-peretola`, `verona-villafranca` — specifically so an airport cannot
collide with a city page. BLQ would follow as `bologna-marconi`, which matches
the architecture's illustrative slug.

**The architecture's illustrative `/hotels/bologna/<hotel>` has no precedent
here.** It is a third-level path, which only the three station sub-pages use,
and it would create a new top-level segment. Phase 1 must propose and justify
it against the alternative of `/destinations/bologna/<hotel>`.

### Route direction — the most consequential finding

**All 13 existing route pages are single-direction.** Every one runs *towards*
the destination: airport → city, or city → port. **There is not one
reverse-direction pair anywhere on the site.**

The owner requires **both** `BLQ → hotel` *and* `hotel → BLQ` for every
selected hotel. With 19 hotels that is a new pattern at scale:

```
19 hotel pages + (19 x 2 route pages) = 57 page ids
x 2 languages                         = 114 routes
plus Bologna hub, BLQ, Ravenna terminal, Ravenna city/terminal both ways
```

Against a site that currently has **35 page ids and 70 routes** in total. The
cluster as specified would be **larger than the rest of the site combined**.

> **Decision needed (D2).** This is flagged, not resolved. The architecture is
> explicit that the directional coverage must not be silently dropped, and this
> audit does not drop it. Phase 1 will present the cannibalisation evidence and
> a recommended shortlist for approval, per §1 of the architecture.

### Breadcrumb parenting

`trailFor()` follows `parent` in the registry, not URL segments, because
`/airports` and `/cruise-ports` have no page behind them. Precedents worth
copying: Lake Como is parented to Milan (not where it is, but how you reach
it); Treviso to Venice; both Tuscan airports to Florence.

---

## 3. Infrastructure, inspected read-only

| Area | File | State |
|---|---|---|
| Redirects / rewrites / headers | `next.config.ts` | **None of any kind.** No existing URL to preserve, collide with or redirect |
| Robots | `app/robots.ts` | `allow: "/"`, sitemap via `absoluteUrl()` |
| Sitemap | `app/sitemap.ts` | Derived from `publishedPages()`; a route can exist unpublished and stay out |
| Canonical / hreflang | `lib/metadata.ts` | `pageMetadata({id, locale, …})`; canonical + reciprocal hreflang + `x-default` all derived from the registry |
| Structured data | `lib/structured-data.ts` | Emits `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, optional `FAQPage` **only** |
| Language switch | `counterpartForPath()` | Matches the current path against the registry; unknown path falls back to the other language's homepage |
| Design tokens | `app/globals.css` | 89 CSS custom properties; `type-*` scale classes (**not** `text-*` — tailwind-merge drops `text-<size>` next to `text-<colour>`) |
| Components available | `components/site/` | **13 heroes, 16 blocks**, plus 24 cluster components |
| Tests | — | **No test suite. No vitest, jest or playwright config** |
| CI / deployment | — | **None. No `vercel.json`, `netlify.toml` or `.github/`** |

### Quote / CRM / API — read-only, nothing submitted

```
app/actions/quote.ts      lib/quote/{schema,state,transport}.ts
```

- `QUOTE_ENDPOINT_URL` is **unset**. `deliverQuoteRequest()` returns
  `{ ok: false, reason: "not_configured" }` and logs a warning. It does not
  fabricate success.
- **`app/actions/quote.ts` is referenced by no component or page.** The server
  action exists but nothing calls it.
- `#request-a-quote` is a **copy section** (`finalCta`), not a form. Its own
  published note says: *"The quotation form and its submission path are the
  subject of the next phase of this site… nothing here pretends to send a
  message or to confirm a booking."*

**No form exists to submit, so no quote could be submitted even accidentally.**
No setting was read into, changed or tested against.

### Images

`content/photos.ts` — reconciled against disk:

| | |
|---|---|
| Declared entries | 24 |
| Distinct source files referenced | 23 |
| Files in `public/photos/` | 23 |
| Declared but missing on disk | **none** |
| On disk but unreferenced | **none** |

All assets are CC0/PDM with `attributionRequired: false`, and the manifest's
`source` block is **never rendered** — the site bans visible image credits.

- **No Bologna, Ravenna, Porto Corsini or hotel imagery exists.** Zero hits in
  `content/photos.ts` or `docs/asset-manifest.csv`.
- **Site-wide invariant: no image appears on more than one page.** The only
  multi-placement asset is `tuscany-val-dorcia` (homepage hero + day-trips
  card), both on the homepage.
- The Tuscany cluster shipped **four pages with zero images** by decision, and
  the Veneto six of nine. A text-led Bologna cluster is therefore well
  precedented and needs no new photography to proceed.

**Hotel photography is the hard case.** A hotel page carries a strong
expectation of a photograph of that hotel, and almost no usable CC0 image of a
named operating hotel exists. Using a generic interior would be exactly the
"misleading hotel photo" the architecture forbids. Phase 1 will propose
text-led hotel pages unless the owner supplies licensed photography.

---

## 4. The conflict that needs resolving before Phase 1 can finish

**The brief forbids two things that cannot both hold.**

> *"Do not modify … homepage or global navigation."*

> *"Avoid orphan pages."* (and Phase 3: *"internal links and orphan
> detection"*)

Every existing cluster is reachable because it was wired into
`content/navigation.ts` (navbar group + footer column) and, for Florence,
into the homepage tiles. The navigation currently holds **22 groups**,
including one Destinations group and one Airports group per region, and a
7-column footer.

If Bologna is **not** added to navigation, every Bologna page is reachable only
from other Bologna pages — the definition of an orphan cluster, and it would
fail the Phase 3 orphan check the same brief requires.

If Bologna **is** added, that modifies global navigation, which the brief
forbids.

The same bind applies to the homepage: BLQ sits in the airport directory with
**no `page` field**, so linking it to a new BLQ page means editing
`content/home/{en,it}.ts` — forbidden here, though it is exactly what was done
for Pisa and Peretola last cluster.

> **Decision needed (D3) — this is the blocking one.** Three options:
> **(a)** authorise navigation + homepage wiring for Bologna only, on the
> Tuscany precedent; **(b)** ship Bologna unlinked and `published: false`,
> accepting orphan status until a later approved task wires it;
> **(c)** authorise navigation only, leaving the homepage untouched.
> I recommend **(a)**, scoped in writing to the Bologna entries alone.

---

## 5. Open questions carried into Phase 1

| # | Question | Why it matters |
|---|---|---|
| D1 | `.docx` vs `.md` for the architecture document | Consistency; greppability for later audits |
| D2 | How many of the 19 hotels, and both directions for each? | As specified the cluster exceeds the whole current site; cannibalisation risk is real and unassessed |
| D3 | **Navigation and homepage wiring** | Orphan pages otherwise; the brief forbids both outcomes |
| D4 | `/hotels/…` vs `/destinations/bologna/…` | New top-level family vs existing sub-page precedent |
| D5 | Hotel photography | No licensed hotel imagery exists; text-led is the honest default |
| D6 | Provider capability — **entirely unverified** | As in every prior cluster, no first-party record establishes what this business actually serves. Hotel and cruise-terminal routes cannot be presented as available services until it does |

**Not yet researched** (Phase 1 work, deliberately not started): any BLQ fact
beyond the homepage line; every hotel's current name, address and operating
status; Porto Corsini's distance from Ravenna; terminal access rules; Bologna's
ZTL. No official source has been contacted at Phase 0.

---

## 6. Site-wide issues carried, not fixed here

Per §10 of the architecture, tracked and untouched:

| Issue | State |
|---|---|
| `NEXT_PUBLIC_SITE_URL` unset — canonicals/hreflang/sitemap resolve to `localhost:3000` | **Confirmed still unset.** Site-wide launch blocker. Read only; not changed |
| `QUOTE_ENDPOINT_URL` unset | **Confirmed still unset.** Returns `not_configured`; no form rendered |
| Florence ZTL link accessibility | Unresolved; every `comune.fi.it` host unreachable |
| Florence private-hire/NCC access | Unresolved; no claim made in either direction |
| Toscana Aeroporti archived charter provenance | Preserved in the Tuscany source notes |
| Peretola 1,560 m runway reference-sourced | Recorded, not operator-confirmed |

---

## 7. Compliance statement

No file outside `docs/` was created or modified. No code was written. Nothing
was committed, pushed or deployed. No DNS, hosting, environment variable,
`NEXT_PUBLIC_SITE_URL`, `QUOTE_ENDPOINT_URL`, quote form, API, CRM, email or
production setting was changed or tested against. No quote was submitted and no
external booking created. Rome, Milan, the Veneto, Tuscany, the homepage, the
registry and the navigation are untouched. No URL was renamed, repurposed,
redirected or deleted.

**Stopping here for approval to begin Phase 1.**
