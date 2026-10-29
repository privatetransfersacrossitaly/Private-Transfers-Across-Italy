# Rome cluster — information architecture decisions

Gate 2 of `ROME_CLUSTER_ARCHITECTURE.md`. This records the URL convention, the
English/Italian mapping, the breadcrumb policy, and every place where the
implementation departs from the proposal in the architecture document.

---

## 1. There was nothing to validate against

The project had no sub-page convention to honour: before this work the only
routes were `/`, `/it`, `/robots.txt` and `/sitemap.xml`. No route conflicts,
no redirects, no migration. The convention below is therefore established
rather than inherited, and it is the one future clusters must follow.

## 2. URL convention

| Page type | English | Italian |
|---|---|---|
| Destination hub | `/destinations/<city>` | `/it/destinazioni/<città>` |
| Airport hub | `/airports/<city>-<airport>` | `/it/aeroporti/<città>-<aeroporto>` |
| Cruise-port hub | `/cruise-ports/<port>` | `/it/porti-crociere/<porto>` |
| City service page | `/destinations/<city>/<service>` | `/it/destinazioni/<città>/<servizio>` |
| Route page | `/routes/<from>-to-<to>` | `/it/tratte/<da>-<a>` |

### The eighteen routes in this wave

| Page id | English | Italian |
|---|---|---|
| `rome` | `/destinations/rome` | `/it/destinazioni/roma` |
| `fiumicino` | `/airports/rome-fiumicino` | `/it/aeroporti/roma-fiumicino` |
| `ciampino` | `/airports/rome-ciampino` | `/it/aeroporti/roma-ciampino` |
| `civitavecchia` | `/cruise-ports/civitavecchia` | `/it/porti-crociere/civitavecchia` |
| `rome-stations` | `/destinations/rome/train-station-transfers` | `/it/destinazioni/roma/transfer-stazioni` |
| `route-fco-rome` | `/routes/fiumicino-airport-to-rome` | `/it/tratte/aeroporto-fiumicino-roma` |
| `route-cia-rome` | `/routes/ciampino-airport-to-rome` | `/it/tratte/aeroporto-ciampino-roma` |
| `route-rome-civitavecchia` | `/routes/rome-to-civitavecchia` | `/it/tratte/roma-civitavecchia` |
| `route-fco-civitavecchia` | `/routes/fiumicino-airport-to-civitavecchia` | `/it/tratte/aeroporto-fiumicino-civitavecchia` |

Italian slugs are Italian, as the architecture document prefers and as the
project owner confirmed. Italian route slugs drop the English `-to-`: `da … a …`
does not survive a slug, and `roma-civitavecchia` reads naturally.

### Departures from the proposal in the architecture document, and why

1. **No trailing slash.** The architecture document writes
   `/destinations/rome/`; the implementation serves `/destinations/rome`. The
   framework's default is no trailing slash, the homepage is already served at
   `/it` rather than `/it/`, and mixing the two would create two URLs for
   every page. The document's trailing slashes are read as path notation, not
   as a slash policy. Canonicals, hreflang, the sitemap and every internal
   link use the slash-free form, so there is one spelling per page.
2. **`/destinations/rome/train-station-transfers`, not four station pages.**
   See the inventory: Termini and Tiburtina are merged into it, Ostiense and
   San Pietro deferred.
3. **No `/destinations`, `/airports`, `/cruise-ports` or `/routes` index
   page.** Those segments exist in paths but not as pages. Creating four
   index pages that each list two or four links would be four thin pages, and
   the Rome hub already does that job properly. This has a consequence for
   breadcrumbs — see §4.
4. **`business-transfers` and `event-transfers` merged**, `wedding-transfers`
   deferred. Both decisions are capability-driven, not design-driven.

## 3. English ↔ Italian mapping

Every page in this wave exists in both languages, so:

- each page declares a **self-referencing canonical**;
- each page declares **reciprocal hreflang** for its counterpart, plus
  `x-default` pointing at the English URL;
- the **language switcher goes to the counterpart page**, not to the language
  hub — there is no half-translated page in this wave, so the fallback case
  does not arise yet. The mechanism still supports it: the switcher reads the
  registry, and a page with no counterpart falls back to the language's
  homepage.

There is one registry — `lib/routes.ts` — and the canonical, the alternates,
the sitemap entry, the breadcrumb trail and the switcher target are all
derived from it. A path cannot drift between them because none of them holds
its own copy of the path.

## 4. Breadcrumb policy

Breadcrumbs follow the **content hierarchy**, which is the hierarchy in the
internal-link map, not the URL path segments:

```
Home → Rome → Fiumicino Airport → Fiumicino Airport to Rome
Home → Rome → Civitavecchia cruise port → Rome to Civitavecchia
Home → Rome → Rome railway station transfers
```

Two consequences worth stating plainly:

- A Fiumicino breadcrumb says `Home → Rome → Fiumicino Airport`, although the
  URL is `/airports/rome-fiumicino`. The airport's parent in the link
  architecture genuinely is the Rome hub.
- No breadcrumb links to `/airports` or `/cruise-ports`, because those pages
  do not exist. A breadcrumb level pointing at a 404 would be worse than a
  breadcrumb that mirrors content rather than path.

`BreadcrumbList` structured data is generated from the same trail the visible
breadcrumb renders, so the markup cannot disagree with the page.

## 5. Sitemap and robots

The sitemap is generated from the registry: every published page, in both
languages, each with the same reciprocal `alternates.languages` the page
itself declares. Nothing enters the sitemap because a file exists — a page is
listed only when the registry marks it published, so a page under
construction cannot leak into it. Section anchors are not URLs and are not
listed. `robots.txt` continues to allow everything and to point at the
sitemap.

## 6. Navigation

`content/navigation.ts` keeps its founding rule: an item appears only when it
resolves to something that exists. The nine new pages take their place in the
navbar and footer **as real links**, alongside the homepage anchors that are
still anchors. Nothing in the menu points at an unbuilt page, which is why the
deferred candidates in the inventory are absent from it.
