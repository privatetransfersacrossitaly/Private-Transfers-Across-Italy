# External links — audit and `rel` configuration

**Date:** 29 October 2026
**Scope:** every page, both languages, including shared components and
data-driven content.
**Result:** 32 external domains, 138 external anchors. Two defects found and
fixed — one in each direction.

**Final state: all 138 external anchors are do-follow, with `noopener`.** The
audit was first run under an instruction to apply `nofollow`; the owner
reversed that the same day. §§3–5 record what the audit found and fixed, which
still stands. **§6 is the current `rel` policy** and supersedes the `nofollow`
in those sections.

Nothing was committed, pushed or deployed.

---

## 1. How the audit was done

Source grep first, then the built HTML. The grep found the link *primitives*;
only the HTML proves what 127 pages actually render, including anything
produced by a shared component from a data file.

```
npm run build
python scan_links.py        # walks .next/server/app/**/*.html
```

**127 pages, 15,423 anchors parsed.** Every anchor was classified by its
destination: external HTTP(S), internal absolute, relative, `mailto:`, `tel:`,
or protocol-relative.

That matters because the source grep alone would have missed both defects.
Only one file in the repository contains a literal `<a` tag that links out;
the problem was in a component that used `next/link` instead, which looks
nothing like an external link in the source and renders as one in the browser.

---

## 2. External domains found

32 domains, 138 anchors, 60 distinct URLs. Every one is a citation: the
authority a page names for a restriction, or the operator whose own page a
reader should check. There is no advertising, no affiliate link, no social
profile, and no tracking parameter anywhere in them.

| Domain | Anchors | URLs | What it is |
|---|---|---|---|
| `www.aeroportodinapoli.it` | 18 | 4 | Naples airport operator |
| `rccp.it` | 8 | 1 | Ravenna cruise port |
| `www.bologna-airport.it` | 8 | 2 | Bologna airport operator |
| `www.comune.amalfi.sa.it` | 8 | 2 | Comune di Amalfi (ordinances, PDFs) |
| `www.ravellozetapass.it` | 8 | 1 | Ravello access pass portal |
| `www.rfi.it` | 8 | 8 | Rete Ferroviaria Italiana, station pages |
| `pompeiisites.org` | 6 | 3 | Pompeii archaeological park |
| `web.archive.org` | 6 | 1 | Archived Toscana Aeroporti document |
| `www.adr.it` | 6 | 3 | Aeroporti di Roma |
| `comune.positano.sa.it` | 4 | 2 | Comune di Positano |
| `en.wikipedia.org` | 4 | 3 | Airport and station articles |
| `grandhotelmajestic.duetorrihotels.com` | 4 | 1 | Named hotel |
| `it.wikipedia.org` | 4 | 3 | Airport and station articles |
| `reggiadicaserta.cultura.gov.it` | 4 | 2 | Reggia di Caserta (state museum) |
| `www.comune.milano.it` | 4 | 2 | Comune di Milano, Area C |
| `www.trenitalia.com` | 4 | 2 | Verona Airlink |
| `ztl.comune.fi.it` | 4 | 1 | Comune di Firenze ZTL service |
| `cda.ve.it` | 2 | 2 | Venice access-fee authority |
| `comune.amalfi.sa.it` | 2 | 1 | Comune di Amalfi (no-`www` spelling) |
| `milanairports.com` | 2 | 2 | SEA, Malpensa technical data |
| `romamobilita.it` | 2 | 1 | Roma Mobilità, ZTL |
| `visitvaldorcia.it` | 2 | 2 | Val d'Orcia tourist board |
| `whc.unesco.org` | 2 | 1 | UNESCO World Heritage list |
| `www.aeroportosalerno.it` | 2 | 2 | Salerno airport |
| `www.art-hotel-commercianti.com` | 2 | 1 | Named hotel |
| `www.bolognawelcome.com` | 2 | 1 | Bologna tourist board |
| `www.civitavecchiaport.org` | 2 | 1 | Civitavecchia port |
| `www.marconiexpress.it` | 2 | 2 | Bologna Marconi Express |
| `www.milanbergamoairport.it` | 2 | 2 | Bergamo airport |
| `www.navigazionelaghi.it` | 2 | 1 | Lake Como navigation |
| `www.starhotels.com` | 2 | 2 | Named hotel |
| `ztlpositano.it` | 2 | 1 | Positano ZTL portal |

Anchor counts are even throughout because each page exists in English and
Italian. `comune.amalfi.sa.it` and `www.comune.amalfi.sa.it` are the same
authority under two spellings, left as the source documents give them.

### Not links, and left alone

- **`content/photos.ts`** holds 24 `sourceUrl`, `licenceUrl` and `creator`
  URLs — Wikimedia Commons, Rawpixel, Pexels, Creative Commons. **None is
  rendered as an anchor anywhere.** They are provenance records in a data
  file. No change.
- **Structured data** (`lib/structured-data.ts`) contains no external URL. The
  only absolute URLs are this site's own; `https://schema.org` is the JSON-LD
  `@context`, which is an identifier, not a link.
- **`lib/leads/notify.ts`** builds the customer and admin emails. Its two
  anchors point at this site's own Terms and Cancellation pages. Email, not a
  crawled page, and internal either way. No change.
- **`mailto:` and `tel:`** exist only in the CRM lead detail page, built from
  the lead's own email and phone. Not HTTP, not public, not crawled.
  Untouched and still working.
- **Protocol-relative (`//host`) links:** none.
- **`target="_blank"`:** **none anywhere on the site.** So no link needed
  `noopener noreferrer` added for new-tab protection. Nothing was given a new
  tab that did not have one.

---

## 3. The two defects

### 3a. Four citations went out followed

`components/site/heroes.tsx` has a hero variant that renders a source citation
in its side panel. It used `next/link`:

```tsx
<Link href={constraint.source.href}>{constraint.source.linkText}</Link>
```

`Link` is for internal navigation. Given an external URL it still renders an
anchor — with **no `rel` at all**. So four authority citations left the site
followed while every other citation on the site left it `nofollow`:

| Page (both languages) | Destination |
|---|---|
| `/airports/naples-capodichino` | `www.aeroportodinapoli.it/en/ordinanze-e.n.a.c.` |
| `/cruise-ports/ravenna-porto-corsini` | `rccp.it/en/guests/` |
| `/destinations/bologna/grand-hotel-majestic` | `grandhotelmajestic.duetorrihotels.com/en` |
| `/destinations/florence` | `ztl.comune.fi.it/` |

8 anchors. Invisible in a source grep, because there is no `https://` and no
`<a` on that line — the URL arrives from a content file at render time.

### 3b. The fix broke two internal links, and the scan caught it

Replacing `Link` with `<a rel="nofollow noopener">` was the obvious repair,
and it was wrong. Re-running the scan on the rebuilt site turned up a defect
in the opposite direction that had not existed before:

```
INTERNAL anchors wrongly carrying nofollow: 2
   /cruise-ports/naples-stazione-marittima      -> /destinations/naples
   /it/porti-crociere/napoli-stazione-marittima -> /it/destinazioni/napoli
```

The Stazione Marittima pages cite **this site's own Naples page** through the
same field. A hardcoded `nofollow` there tells a crawler not to follow the
site's own navigation — exactly what your brief said not to do.

So the attribute is now decided by the **destination** rather than assumed
from the component. `outboundRel()` in `lib/site.ts` returns
`"nofollow noopener"` for an external HTTP(S) host and `undefined` for a
relative path or for this site's own domain, including the `www.` spelling.
React omits an `undefined` attribute entirely, so an internal link renders
with no `rel`.

It is applied in both components that can link out — the hero and
`SourceNote` — so the rule cannot drift apart between them. `SourceNote` had
been correct only by accident: every href passed to it so far happens to be
external.

---

## 4. Files changed

| File | Change |
|---|---|
| `lib/site.ts` | **New** `outboundRel(href)` — decides `rel` from the destination. Returns `"noopener"` for an external host, `undefined` for internal |
| `components/site/heroes.tsx` | Source citation: `next/link` → `<a>` with `rel={outboundRel(...)}`; import updated |
| `components/site/blocks.tsx` | `SourceNote`: hardcoded `rel` → `rel={outboundRel(href)}`; import added |
| `scripts/seo-check.mjs` | Added the four outbound-link assertions listed in §6 |

Four files. No URL, tracking parameter, destination or piece of user-facing
text was altered. No internal linking, navigation, canonical, hreflang,
robots rule or sitemap behaviour was touched — §5 re-verifies that.

---

## 5. Validation

**Build:** `npx tsc --noEmit` clean · `npx eslint .` clean · `npx next build`
**130/130 pages**, no errors or warnings.

**Link scan, on the rebuilt site** — 127 pages, 15,423 anchors:

| Check | Before the audit | Final |
|---|---|---|
| External anchors with **no `rel` at all** | **8** | **0** |
| External anchors carrying `nofollow` | 130 | **0** — removed per §6 |
| External anchors carrying `noopener` | 130 | **138** |
| Internal anchors carrying `nofollow` | 0 | **0** (was 2 mid-fix) |
| `target="_blank"` anywhere | 0 | 0 |
| Protocol-relative anchors | 0 | 0 |
| External domains | 32 | 32 — unchanged |
| External anchors | 138 | 138 — unchanged |

**Spot-checked in a served response:**

- `/destinations/florence` → `<a href="https://ztl.comune.fi.it/" rel="noopener">` ✅
- `/cruise-ports/naples-stazione-marittima` → both anchors to `/destinations/naples` carry **no `rel`** ✅
- CRM `mailto:` and `tel:` present and unchanged ✅

**SEO configuration unchanged:** `npm run check:seo` **44/44** — canonicals,
hreflang reciprocity, the 116-URL sitemap, robots and the draft/private
exclusions all still as they were. The 44th check is the new outbound-link
assertion.

**There is no automated test suite in this project.** The link scan is a
script run against the build output, not a test, and it did not run as part of
the build.

---

## 6. Reversal, same day — `nofollow` removed

You decided against it, and it is gone. `outboundRel()` now returns
`"noopener"` for an external host, so **all 138 external anchors are
do-follow**.

That is the better answer for this site, and the reasoning is worth keeping
rather than relitigating. Every external link here is a citation to the
authority a page's claim rests on — a comune's ordinance, an airport
operator's page, RFI, UNESCO. `nofollow` exists for untrusted and paid links,
and linking out to a source is the editorial premise of the site rather than
something to suppress. There is no ranking penalty for doing it followed.

`noopener` stays on every external anchor. No link opens in a new tab, so it
is a no-op today rather than a protection, and keeping it means the first link
that does get a new tab is already correct.

`noreferrer` is still **not** applied. It is only wanted alongside
`target="_blank"`, nothing here uses one, and adding it would strip the
referrer from the authority sites being cited — a cost with no benefit. The
check now asserts it *would* be present on any future `_blank` link.

### What enforces it now

The one-off scan that found the original defects was a scratch script. The
rule is now part of `scripts/seo-check.mjs`, which already fetches all 116
published pages, so every run asserts on every page:

- no external anchor carries `nofollow`
- every external anchor carries `noopener`
- any `target="_blank"` also carries `noreferrer`
- **no internal anchor carries `nofollow`**

`npm run check:seo` is **44/44**, and it reports the external-anchor count
(138) so a sudden change in it is visible.

### Correction

An earlier version of this report said 136 external anchors. The figure is
**138** — the error was my arithmetic in summing the per-domain table, not the
scan. The per-domain counts in §2 were right all along and add to 138.
