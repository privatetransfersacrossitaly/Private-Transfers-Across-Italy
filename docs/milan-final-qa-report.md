# Milan cluster — final QA report

Regression QA run after the final review's changes, 2026-10-26, against a
production build served by `next start`. Every result below was produced by a
check that was actually run; nothing is asserted from the previous report.

**Nothing was committed or deployed.**

---

## 1. Build and static analysis

| Check | Command | Result |
|---|---|---|
| Production build | `next build` | **Pass** — 43 entries: 40 pages + `robots.txt`, `sitemap.xml`, `_not-found` |
| TypeScript | `tsc --noEmit` | **Pass** |
| Lint | `eslint .` | **Pass** — 0 errors, 0 warnings |

All 40 pages prerender as `○ (Static)`. The Rome cluster's 20 routes continue
to build; its content files were not touched.

## 2. Crawl of the rendered HTML — all 40 URLs

| Check | Result |
|---|---|
| HTTP 200 | **40 / 40** |
| Unique `<title>` | **40 / 40** |
| Unique meta description | **40 / 40** |
| Exactly one `<h1>` | **40 / 40** |
| Heading hierarchy | no skipped levels, no empty headings |
| Self-referencing canonical | **40 / 40** |
| `hreflang` | `en`, `it`, `x-default` present on every page; every pair reciprocal; `x-default` always the English URL |
| `<html lang>` | correct on every page |
| Internal links | **1,346 distinct — all resolve** |
| Section anchors | every `#fragment` exists on its target, including Lake Como's five town anchors |
| Orphan pages | **none** |
| Images in markup | 62 references, all with non-empty alt text, none externally hosted |
| `<figcaption>` | **0** |
| Source-credit wording | **0 occurrences** of "wikimedia", "creative commons", "cc0", "rawpixel", "photo credit", "image courtesy", "immagine tratta", "crediti foto" |

**Verdict: ALL CHECKS PASSED.** Two warnings remain, both pre-existing
homepage copy outside this audit's scope: the English homepage meta
description runs 196 characters and the Italian 222.

## 3. Broken-image validation

Run separately, because the crawl checks alt text and host but not whether a
file actually loads.

| Check | Result |
|---|---|
| Image references across the sampled pages | 50 |
| Distinct image URLs | 19 |
| Loading with **HTTP 200** | **19 / 19** |
| Broken, missing or redirected | **0** |

Heaviest optimised response observed: ~470 KB. All heavy items are
above-the-fold hero images on the homepage and predate this cluster. Noted as
a performance observation, not a defect.

## 4. English / Italian structural parity

Measured on the rendered HTML of all eleven counterpart pairs — the homepage
plus the ten Milan pages — comparing `h1`, `h2`, `h3`, `<li>`, `<dt>`,
`<table>`, `<img>`, internal links and external reference links.

| Pair | Result |
|---|---|
| `/` ↔ `/it` | ✅ identical |
| `/destinations/milan` ↔ `/it/destinazioni/milano` | ✅ identical |
| `/airports/milan-malpensa` ↔ `/it/aeroporti/milano-malpensa` | ✅ identical |
| `/airports/milan-linate` ↔ `/it/aeroporti/milano-linate` | ✅ identical |
| `/airports/milan-bergamo` ↔ `/it/aeroporti/milano-bergamo` | ✅ identical |
| `/destinations/milan/train-station-transfers` ↔ `/it/…/transfer-stazioni` | ✅ identical |
| `/destinations/lake-como` ↔ `/it/destinazioni/lago-di-como` | ✅ identical |
| All four route pairs | ✅ identical |

**0 mismatches.** No section, question, list item or link was lost or gained
in translation.

## 5. Structured data

- `Organization` and `WebSite` on every page; `WebPage` and `BreadcrumbList`
  on every cluster page.
- `BreadcrumbList` starts at position 1 everywhere and is generated from the
  same trail the visible breadcrumb renders.
- Every `FAQPage` question verified present in the page's **visible text**.
- **Absent everywhere, by design:** `aggregateRating`, `review`, `priceRange`,
  `openingHours`, `telephone`, `address`, `offers`, `LocalBusiness`.
- No structured data contradicts visible copy.

## 6. Sitemap and robots

40 `<loc>` entries — exactly the published set, no more and no fewer. 120
`xhtml:link` alternates. No anchor URLs, no draft or deferred URLs, no
`noindex`. `robots.txt` allows all and references the sitemap.

The sitemap is generated from the route registry rather than the filesystem,
so a route whose `published` flag is false cannot appear in it.

## 7. Responsive and browser QA

Headless Chrome 155, every Milan page at **320, 360, 390, 768, 1024, 1280 and
1680 px** — 21 renderings × 7 widths = **147 combinations**, re-run after the
image changes.

| Check | Result |
|---|---|
| Horizontal overflow | **0 / 147** |
| Elements extending past the viewport | **none** |
| Tap targets below 24 × 24 px | **0** |
| Text below 11.5 px | **0 nodes** |
| `h1` count per rendering | 1 everywhere |
| Console errors and page exceptions | **0 / 147** |

## 8. Accessibility and contrast

- Semantic landmarks throughout; every section is a `<section>` with
  `aria-labelledby` pointing at its own heading.
- The Bergamo distance diagram is an ordered list of real elements with real
  text — connecting rules are `aria-hidden`, distances are text, reading order
  is correct, and no text is carried in an image.
- The Lake Como town selector is a `<nav>` with an accessible name; its
  anchors land on `scroll-mt-28` targets.
- Station tables are real `<table>` elements with `<caption>` and
  `<th scope="col">`, in focusable scroll regions with accessible names.
- Questions are description lists, not accordions — answers are in the DOM.
- The navigation remains the only client component on the site.

**Contrast.** The only text-over-photograph on the cluster is the Lake Como
backdrop hero. Its scrim was measured against the worst case an image can
present — a pure white frame — giving **9.39 : 1** for the heading and
**5.29 : 1** for body text, both clearing WCAG AA with margin. The two
photographs added in this review sit on their own, with no text over them.

## 9. Visual review

Rendered pages inspected at desktop and mobile:

- **Malpensa** — the new hero photograph shows the terminal from the approach
  road, bleeding off the right edge. Crop reviewed: it shows no kerb and
  implies no pickup point.
- **Bergamo** — the new mid-page photograph reads clearly as an airport apron
  with the terminal behind. The drawn distance diagram still owns the hero.
- **Milan hub** — the airport chooser sits beside the heading as intended.
- **Lake Como** — the town selector renders on the scrim and wraps correctly.
- **Stations** — reads better without the removed decorative image; the
  Centrale concourse in the hero carries the page.

## 10. Enquiry behaviour

Inspected without submitting data and without external side effects.

- `QUOTE_ENDPOINT_URL` **remains unset**; `deliverQuoteRequest` returns
  `not_configured` and the server action returns `not_delivered`.
- **No quotation form is rendered anywhere on the site.** All CTAs resolve
  through `quotePathFor(locale)` to `#request-a-quote`, a homepage section
  whose own copy states that nothing there pretends to send a message or
  confirm a booking.
- **No false success is possible**, because no submission path is exposed.
- Nothing in the quote action, transport, schema or environment was modified.

## 11. Configuration status

| Variable | Status | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Still unset** | Canonicals, hreflang, OG URLs and sitemap resolve to `http://localhost:3000` |
| `QUOTE_ENDPOINT_URL` | **Still unset** | Submissions report `not_delivered` — truthfully, and with no form exposed |

Neither was changed. No environment file was created or edited.

## 12. Launch assessment

**The Milan cluster is not ready for launch**, and will not be until
`NEXT_PUBLIC_SITE_URL` is set — without it every canonical URL the site emits
is wrong. That is a configuration task for the owner, not a code change.

Subject to that, and to the human checks listed in
`docs/milan-final-review.md` §10, the content, design, metadata, structured
data, accessibility and responsive behaviour of the cluster all pass the
checks defined for them.
