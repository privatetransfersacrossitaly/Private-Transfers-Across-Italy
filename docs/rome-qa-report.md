# Rome cluster — QA report

Gate 6 of `ROME_CLUSTER_ARCHITECTURE.md`. Everything below was run against a
production build served by `next start`, so the results describe the HTML a
visitor and a crawler actually receive, not the source.

**Date:** 2026-10-24 · **Pages covered:** 9 pages, 18 routes (English and
Italian) · **Nothing was committed or deployed.**

---

## 1. Build and static checks

| Check | Command | Result |
|---|---|---|
| Production build | `next build` | **Pass** — 20 static pages prerendered, plus `robots.txt` and `sitemap.xml` |
| TypeScript | `tsc --noEmit` | **Pass** — no errors |
| Lint | `eslint .` | **Pass** — no errors, no warnings |

Every route is `○ (Static)`. No route needs a request at render time.

## 2. Crawl of the rendered HTML

A crawler fetched all 20 URLs and parsed what came back.

| Check | Result |
|---|---|
| Pages returning 200 | 20 / 20 |
| Unique `<title>` | 20 / 20 |
| Unique meta description | 20 / 20 |
| Exactly one `<h1>` | 20 / 20 |
| Heading hierarchy | no skipped levels, no empty headings |
| Self-referencing canonical | 20 / 20, each pointing at its own URL |
| `hreflang` | `en`, `it` and `x-default` on every page; every pair reciprocal; `x-default` always the English URL |
| `<html lang>` | correct on every page |
| Internal links | **534 distinct links**, all resolve |
| Section anchors | every `#fragment` exists on its target page |
| Orphan pages | **none** — every page is linked from at least one other |
| Images | 46, all with non-empty alt text, none externally hosted |
| `<figcaption>` | 0 |
| Source-credit wording in visible text | 0 occurrences of "wikimedia", "creative commons", "cc0", "rawpixel", "photo credit", "image courtesy", "immagine tratta", "crediti foto" |

## 3. Structured data

Validated by parsing the JSON-LD out of each page.

- Every page carries `Organization` and `WebSite`.
- Every cluster page additionally carries `WebPage` and `BreadcrumbList`.
- Breadcrumb `itemListElement` starts at position 1 on every page and is
  generated from the same trail the visible breadcrumb renders.
- Every `FAQPage` question was checked to appear in the page's **visible
  text**. All pass — no invisible FAQ markup anywhere.
- **No** `aggregateRating`, `review`, `priceRange`, `openingHours`,
  `telephone`, `address`, `offers` or `LocalBusiness` node exists on any
  page. Nothing unverifiable is asserted in markup.

## 4. Sitemap and robots

- 20 `<loc>` entries — exactly the published set, no more and no fewer.
- 60 `<xhtml:link rel="alternate">` entries (en, it, x-default per URL).
- No anchor URLs, no draft URLs, no `noindex`.
- `robots.txt` allows all and points at the sitemap.

The sitemap is generated from the route registry rather than the filesystem,
so a route whose `published` flag is false cannot leak into it.

## 5. Responsive and browser QA

Headless Chrome 155, every page at every required width:
**320, 360, 390, 768, 1024, 1280 and 1680 px** — 20 pages × 7 widths =
**140 combinations.**

| Check | Result |
|---|---|
| Horizontal overflow | **0 / 140** |
| Elements extending past the viewport | none |
| Tap targets below 24 × 24 px | **0** |
| Text below 11.5 px | **0 nodes** |
| `h1` count per rendering | 1 everywhere |
| Console errors and page exceptions | **0 / 140** |

One finding was raised and fixed during this pass: breadcrumb links rendered
20 px tall, under the 24 px minimum. They now carry vertical padding and
measure 28 px.

## 6. Contrast

The hero backdrop is the only place on the cluster where text sits over a
photograph. The scrim was measured rather than eyeballed, against the worst
case an image can present — a pure white frame:

| Scrim | Heading on backdrop | Body text on backdrop |
|---|---|---|
| 84% (shipped) | **9.39 : 1** | **5.29 : 1** |

Both clear WCAG AA (4.5:1) with margin, and any photograph darker than white
improves them. Every other surface pairing uses the brand tokens, which were
contrast-verified when the design system was built.

## 7. Accessibility review

- Semantic landmarks: one `<header>`, one `<main id="main">`, one `<footer>`;
  every section is a `<section>` with `aria-labelledby` pointing at its own
  heading.
- The breadcrumb is a `<nav>` with an ordered list; the current page is text
  with `aria-current="page"`, not a link.
- The station comparison is a real `<table>` with a `<caption>` and `<th
  scope="col">`, in a focusable scroll region with an accessible name, so it
  can be scrolled from the keyboard.
- Questions are a description list, not an accordion — the answers are in the
  DOM for a reader arriving from a search result, and the page ships no
  JavaScript to hide them.
- The only client component on the site remains the navigation. Every cluster
  page is server-rendered.
- Reduced motion: there are no animations in the cluster beyond colour
  transitions on hover.

## 8. Enquiry flow

Tested without submitting data and without causing any external side effect.

- Every call to action on all nine pages resolves through `quotePathFor(locale)`
  to the real quotation anchor — `/#request-a-quote` in English and
  `/it/#request-a-quote` in Italian.
- A pre-existing defect was found and fixed in passing: the homepage hero's
  primary call to action used a hard-coded English anchor, so the Italian
  homepage's main button sent Italian readers to the English homepage. It now
  uses `quotePathFor(locale)` like everything else.
- No quote server action, schema, transport or environment variable was
  touched. `QUOTE_ENDPOINT_URL` remains unset, and a valid submission still
  reports `not_delivered`, which is the truthful state.

## 9. Known limitations

1. **`NEXT_PUBLIC_SITE_URL` is unset**, so canonicals, hreflang, Open Graph
   URLs and the sitemap currently resolve to `http://localhost:3000`. Correct
   for local work; it must be set before deployment or every canonical on the
   site will be wrong.
2. **Ciampino has no photograph.** No image of the airport exists under a
   licence permitting presentation without a visible credit; every candidate
   found showed a third party's branded coach. Recorded in the asset manifest
   and turned into a design decision rather than hidden.
3. **Two images are generic rather than location-verified** — the airport
   check-in hall on the Fiumicino page and the cruise ship on the
   Civitavecchia page. Neither is captioned or implied to be its page's
   subject, and both alt texts describe only what is visible. Flagged in the
   manifest as `approved-with-caveat`.
4. **No service capability is verified.** Every page is written as an enquiry
   subject to confirmation. No price, journey time, waiting policy, vehicle
   class, child seat, accessible vehicle or availability claim appears
   anywhere in the cluster.
5. **ZTL hours are time-sensitive.** They are dated in the visible copy and
   linked to the city agency, but they change by ordinance and should be
   re-checked before any campaign.
6. **Two pre-existing meta descriptions are over length** — the English
   homepage at 196 characters and the Italian at 222. Both predate this work
   and belong to signed-off homepage copy, so they were left alone rather
   than edited without authorisation.

## 10. Launch recommendation

The cluster passes every gate that can be passed without first-party
operational data. Before it goes live, two things are required and one is
advisable:

- **Required:** set `NEXT_PUBLIC_SITE_URL`.
- **Required:** a human read of the nine pages' factual claims against
  `docs/rome-research-log.md`, since every one of them is attributable.
- **Advisable:** decide whether any service claim can be upgraded from
  "enquiry subject to confirmation" to something firmer. If so, the copy
  changes; the structure does not.
