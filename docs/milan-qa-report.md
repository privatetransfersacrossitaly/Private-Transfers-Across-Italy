# Milan cluster — QA report

Gate 6 of `MILAN_CLUSTER_ARCHITECTURE.md`. Everything below was run against a
production build served by `next start`, so the results describe the HTML a
visitor and a crawler actually receive.

**Date:** 2026-10-26 · **Milan cluster:** 10 pages, 20 routes · **Whole site
after this work:** 19 pages, 40 routes · **Nothing was committed or
deployed.**

---

## 1. Build and static checks

| Check | Command | Result |
|---|---|---|
| Production build | `next build` | **Pass** — 40 static pages, plus `robots.txt` and `sitemap.xml` |
| TypeScript | `tsc --noEmit` | **Pass** |
| Lint | `eslint .` | **Pass** — no errors, no warnings |

Every route is `○ (Static)`. The Rome cluster's 20 routes still build and
still pass; nothing in it was altered beyond a shared-types refactor that
left its content files untouched.

## 2. Crawl of the rendered HTML — all 40 URLs

| Check | Result |
|---|---|
| Pages returning 200 | 40 / 40 |
| Unique `<title>` | 40 / 40 |
| Unique meta description | 40 / 40 |
| Exactly one `<h1>` | 40 / 40 |
| Heading hierarchy | no skipped levels, no empty headings |
| Self-referencing canonical | 40 / 40 |
| `hreflang` | `en`, `it`, `x-default` on every page; every pair reciprocal; `x-default` always the English URL |
| `<html lang>` | correct everywhere |
| Internal links | **1,346 distinct links, all resolve** |
| Section anchors | every `#fragment` exists on its target — including the Lake Como town selector's five |
| Orphan pages | **none** |
| Images | 62, all with non-empty alt text, none externally hosted |
| `<figcaption>` | 0 |
| Source-credit wording in visible text | 0 occurrences |

## 3. Structured data

- Every page carries `Organization` and `WebSite`; every cluster page also
  carries `WebPage` and `BreadcrumbList`.
- Breadcrumbs start at position 1 and are generated from the same trail the
  visible breadcrumb renders.
- Every `FAQPage` question was verified present in the page's **visible
  text**. All pass.
- **No** `aggregateRating`, `review`, `priceRange`, `openingHours`,
  `telephone`, `address`, `offers` or `LocalBusiness` node exists anywhere.

## 4. Sitemap and robots

40 `<loc>` entries — exactly the published set. 120 alternate links. No
anchors, no drafts, no `noindex`. `robots.txt` allows all and points at the
sitemap. The sitemap is generated from the route registry, so a route whose
`published` flag is false cannot leak into it.

## 5. Responsive and browser QA

Headless Chrome 155, every Milan page at **320, 360, 390, 768, 1024, 1280 and
1680 px** — 21 renderings × 7 widths = **147 combinations.**

| Check | Result |
|---|---|
| Horizontal overflow | **0 / 147** |
| Elements past the viewport | none |
| Tap targets below 24 × 24 px | **0** |
| Text below 11.5 px | **0 nodes** |
| `h1` count per rendering | 1 everywhere |
| Console errors and page exceptions | **0 / 147** |

The Rome cluster's own 140-combination pass was run earlier in this project
and remains green; nothing in its components changed.

Two new compositions needed specific attention at narrow widths and were
built for it: the Bergamo distance diagram reflows from a horizontal scale to
a vertical one below 640px, and the Lake Como town selector wraps to multiple
rows with 44px targets throughout.

## 6. Contrast

The only place text sits over a photograph is the two backdrop heroes. The
scrim was measured against the worst case an image can present — a pure white
frame:

| Scrim | Heading | Body text |
|---|---|---|
| 84% (shipped) | **9.39 : 1** | **5.29 : 1** |

Both clear WCAG AA with margin; a darker photograph only improves them. Lake
Como's `HeroTowns` uses the same scrim, and its selector buttons sit on it at
`border-deep-foreground/35` with `text-deep-foreground`.

Every other surface pairing uses the brand tokens, contrast-verified when the
design system was built.

## 7. Accessibility review

- Semantic landmarks throughout; every section is a `<section>` with
  `aria-labelledby` pointing at its own heading.
- The Milan hub's airport chooser is a list of links inside the hero, so it is
  reachable by keyboard immediately after the breadcrumb.
- The Bergamo diagram is an ordered list of real elements with real text — the
  connecting rules are `aria-hidden`, the distances are text, and it is read
  aloud in the right order. It is not an image and carries no text in an image.
- The Lake Como selector is a `<nav>` with an accessible name, and its anchors
  land on `scroll-mt-28` targets.
- Station tables are real `<table>` elements with `<caption>` and
  `<th scope="col">`, inside focusable scroll regions with accessible names.
- Questions are description lists, not accordions: answers are in the DOM for
  a reader arriving from a search result, and no JavaScript hides them.
- The navigation remains the only client component on the site. All ten Milan
  pages are server-rendered.

## 8. Enquiry flow

Tested without submitting data and without external side effects.

- Every call to action on all ten Milan pages resolves through
  `quotePathFor(locale)` to the real anchor — `/#request-a-quote` in English,
  `/it/#request-a-quote` in Italian.
- No quote server action, schema, transport or environment variable was
  touched. `QUOTE_ENDPOINT_URL` remains unset and a valid submission still
  reports `not_delivered`, which is the truthful state.

## 9. One finding, raised and fixed

The Bergamo distance diagram originally used `<figure>` and `<figcaption>`.
The crawl flagged it, correctly: the site bans visible captions because they
were being used to credit image sources. This caption credited a *factual
claim* rather than an image, so an exception was arguable — but every other
factual attribution on the site is a `SourceNote` paragraph, and consistency
beat a special case the audit would have had to learn about. It is now a
paragraph inside a `div`, and the crawl is clean.

## 10. Known limitations

1. **`NEXT_PUBLIC_SITE_URL` is still unset**, so canonicals, hreflang, Open
   Graph URLs and the sitemap resolve to `http://localhost:3000`. Unchanged
   from the Rome report; still required before deployment.
2. **Bergamo Airport has no photograph.** Forbidden by rule from using a
   Bergamo city image, and no licence-clear photograph of the airport was
   found. Flagged in the asset manifest.
3. **`airport-check-in` now appears on two pages** — Fiumicino and Malpensa.
   The architecture document warns against repeated hero images and this is
   the project's one repeat. Accepted because the alternative was a third
   imageless airport page and because the image names no place, but it is the
   first thing to replace if a licence-clear photograph of either airport
   becomes available.
4. **No service capability is verified.** Every page is an enquiry subject to
   confirmation. No price, journey time, waiting policy, vehicle class, child
   seat, accessible vehicle or availability claim appears anywhere in the
   cluster.
5. **Area B and Area C hours are time-sensitive.** Dated in the visible copy
   and linked to the city, but set by ordinance and subject to change. The
   Area C charge is deliberately not quoted at all — it has changed more than
   once.
6. **Malpensa's distance from Milan is not stated**, because SEA does not
   publish one in the material checked and secondary figures disagree.
7. **Bergamo's 2025 passenger figure is not used** — SACBO's is a projection,
   not a result. The settled 2024 figure is used and labelled as such.
8. **The planned Bergamo rail link is not presented as existing.** Reported
   without a confirmed opening; a transfer page that implied a train would
   mislead the exact reader it is written for.
9. **Two pre-existing homepage meta descriptions remain over length** (196 and
   222 characters). They predate both clusters and belong to signed-off
   homepage copy, so they were left alone rather than edited without
   authorisation.

## 11. Launch recommendation

The Milan cluster passes every gate that can be passed without first-party
operational data.

- **Required before launch:** set `NEXT_PUBLIC_SITE_URL`.
- **Required:** a human read of the ten pages' factual claims against
  `docs/milan-research-log.md`. Every claim is attributable, which is what
  makes the check worth doing.
- **Advisable:** decide whether any service claim can be upgraded from
  "enquiry subject to confirmation". If so the copy changes; the structure
  does not.
- **Before the next cluster:** the deferred Milan items — hotel transfers,
  business and events, weddings, day trips, cross-border routes to Lugano and
  St Moritz, and Ligurian cruise-port routes — all wait on verified service
  capability rather than on research.
