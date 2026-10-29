# Veneto cluster — QA report

Gate 6 of `docs/veneto-cluster-architecture.md`. Every result below was
produced by a check that was actually run against a production build served
by `next start`. Automated checks and human factual review are separated.

**Date:** 2026-10-26 · **Veneto cluster:** 9 pages, 18 routes · **Whole site
after this work:** 29 pages, 58 routes.

**Nothing was committed or deployed. No environment variable, quote action,
CRM configuration or DNS setting was touched. No quote was submitted.**

---

## 1. Automated checks

### Build and static analysis

| Check | Command | Result |
|---|---|---|
| Production build | `next build` | **Pass** — 61 entries: 58 pages plus `robots.txt`, `sitemap.xml`, `_not-found` |
| TypeScript | `tsc --noEmit` | **Pass** |
| Lint | `eslint .` | **Pass** — 0 errors, 0 warnings |

All 58 pages prerender as `○ (Static)`. The Rome and Milan clusters continue
to build and pass; neither was modified beyond the shared navigation and the
homepage entry links.

### Crawl of the rendered HTML — all 58 URLs

| Check | Result |
|---|---|
| HTTP 200 | **58 / 58** |
| Unique `<title>` | **58 / 58** |
| Unique meta description | **58 / 58** |
| Exactly one `<h1>` | **58 / 58** |
| Heading hierarchy | no skipped levels, no empty headings |
| Self-referencing canonical | **58 / 58** |
| `hreflang` | `en`, `it`, `x-default` on every page; every pair reciprocal; `x-default` always the English URL |
| `<html lang>` | correct everywhere |
| Internal links | **2,300 distinct — all resolve** |
| Section anchors | every `#fragment` exists on its target |
| Orphan pages | **none** |
| Images in markup | 66 references, all with non-empty alt text, none externally hosted |
| `<figcaption>` | **0** |
| Source-credit wording | **0 occurrences** |

**Verdict: all checks passed.** Two warnings remain, both pre-existing
homepage copy outside this cluster's scope: the English homepage meta
description runs 196 characters and the Italian 222.

### Broken-image validation

| Check | Result |
|---|---|
| Distinct image URLs | 21 |
| Loading with HTTP 200 | **21 / 21** |
| Broken or missing | **0** |
| Any image used more than once sitewide | **none** — every image is used exactly once |

### English / Italian structural parity

Measured on rendered HTML across **20 counterpart pairs** (the homepage, the
ten Milan pages and the nine Veneto pages), comparing `h1`, `h2`, `h3`,
`<li>`, `<dt>`, `<table>`, `<img>`, internal links and external links.

**0 mismatches.** No section, question, list item or link was lost or gained
in translation. The nine Veneto pairs:

| Pair | Result |
|---|---|
| `/destinations/venice` ↔ `/it/destinazioni/venezia` | ✅ identical |
| `/destinations/verona` ↔ `/it/destinazioni/verona` | ✅ identical |
| `/airports/venice-marco-polo` ↔ `/it/aeroporti/venezia-marco-polo` | ✅ identical |
| `/airports/treviso-canova` ↔ `/it/aeroporti/treviso-canova` | ✅ identical |
| `/airports/verona-villafranca` ↔ `/it/aeroporti/verona-villafranca` | ✅ identical |
| `/destinations/venice/train-station-transfers` ↔ `/it/…/transfer-stazioni` | ✅ identical |
| All three route pairs | ✅ identical |

### Structured data

- `Organization` and `WebSite` on every page; `WebPage` and `BreadcrumbList`
  on every cluster page.
- `BreadcrumbList` starts at position 1 and is generated from the same trail
  the visible breadcrumb renders.
- Every `FAQPage` question verified present in the page's **visible text**.
- **Absent everywhere:** `aggregateRating`, `review`, `priceRange`,
  `openingHours`, `telephone`, `address`, `offers`, `LocalBusiness`.

### Sitemap and robots

58 `<loc>` entries — exactly the published set. 174 alternate links. No
anchors, no deferred URLs, no `noindex`. The sitemap is generated from the
route registry, so the five deferred candidates (cruise terminal, Garda
routes, Venice–Verona, VCE–Mestre, other Veneto towns) **cannot** appear in
it: they have no registry entry at all.

### Responsive and browser QA

Headless Chrome 155, every Veneto page at **320, 360, 390, 768, 1024, 1280
and 1680 px** — 18 renderings × 7 widths = **126 combinations**.

| Check | Result |
|---|---|
| Horizontal overflow | **0 / 126** |
| Elements past the viewport | **none** |
| Tap targets below 24 × 24 px | **0** |
| Text below 11.5 px | **0 nodes** |
| `h1` count per rendering | 1 everywhere |
| Console errors and page exceptions | **0 / 126** |

### Accessibility

- Semantic landmarks throughout; every section is a `<section>` with
  `aria-labelledby` pointing at its own heading.
- The two endpoint panels are `<section>` elements with `aria-labelledby`, so
  a screen-reader user meets "A car can reach" and "A car cannot reach" as
  named regions rather than as styled boxes.
- Contrast: the accent-wash panel uses `--foreground` and
  `--muted-foreground` on `--accent-wash`, both verified pairings from the
  design system. No text sits over a photograph anywhere in this cluster.
- Questions are description lists, not accordions.
- The navigation remains the only client component. All nine pages are
  server-rendered.

### One finding, raised and fixed

The Venice hub and its Italian counterpart failed the heading-hierarchy check
with a jump from `h1` to `h3`. Cause: the shared `EndpointPanels` component
emits `h3`, correct in the Marco Polo body where it sits under a band's `h2`,
but wrong in the Venice hero where it sits directly under the `h1`. The
component now takes an explicit `headingLevel`, and the crawl is clean.

---

## 2. Human factual review

Separated from the automated results, as the brief requires.

### Blocked sources — the most important limitation in this cluster

**Four of the ten planning sources named in the architecture document could
not be retrieved:**

| Source | Result |
|---|---|
| `veneziaairport.it` transport pages | **HTTP 403** |
| `trevisoairport.it` transport pages | **HTTP 403** |
| `aeroportoverona.it` transport pages | **HTTP 403** |
| `vtp.it` (cruise terminal) | **TLS certificate verification failure** |

**Consequence, applied consistently:** every airport fact published is a
structural one — official name, IATA/ICAO code, operator company,
municipality, approximate distance — cross-checked and consistent across
encyclopaedic sources. **No fare, frequency, duration, pickup point, terminal
rule or meeting instruction is published anywhere in this cluster.**

Two reachable primary sources did contribute: **Trenitalia** for the Verona
Airlink's structure and operating hours, and the **Comune di Venezia** portal
for the access fee's status.

### Claims deliberately not made

- Any fare or journey time for any Veneto journey.
- Any road distance except the published approximate figures (TSF ~3 km and
  ~31 km; VRN ~10 km; VCE ~7.5 km, explicitly labelled as straight-line).
- The Verona Airlink's fare — structure and hours are published, the amount
  is not, on the same policy that kept Rome's ZTL charge and Milan's Area C
  charge off those pages.
- Any Venice access-fee amount, calendar or exemption list — the scheme's
  2026 trial closed on 26 July 2026 and its future was undecided in the
  sources checked.
- Any claim that a boat, vaporetto, water taxi, ferry or porter forms part of
  a road transfer. **This is the cluster's central refusal and it appears on
  every Venice page in both languages.**
- Any claim that a road vehicle reaches a historic-centre address or a lagoon
  island.
- Any Lake Garda town as served. The lake is named as a direction on two
  pages, each with an explicit statement that no Garda route is published.

### Deferred, with reasons

| Candidate | Reason |
|---|---|
| **Venice cruise terminal** | The clearest defer. The operator's site failed TLS verification; secondary sources disagree on whether Marghera has a completed terminal, where ships berth, and which locations are in use. A cruise page must tell a passenger where to be met — exactly the fact nobody could establish |
| Veneto regional hub | **Omitted by the architecture document's own test**: with Venice and Verona as the only hubs it would be a link list |
| VRN → Lake Garda | Needs a named town *and* confirmed coverage; neither exists |
| Venice → Verona | No confirmed coverage, and the honest answer for most travellers is the direct train |
| VCE → Mestre | Intent overlaps the VCE route and the stations page |
| Verona Porta Nuova standalone | Merged into the Verona hub |
| Padua, Vicenza, Treviso city, other Veneto towns | No demand evidence and no verified coverage |

**None of these appears as a link anywhere.** They have no registry entry, so
they cannot reach the sitemap or the navigation.

### Provider capability

**Unverified, as in both earlier clusters.** No first-party record establishes
which Veneto routes, vehicles or meeting arrangements this business can
provide. The architecture document is explicit that a public airport's taxi
or NCC listing is not proof of coverage, and nothing in the research log is
treated as such. Every page is written as an **enquiry subject to
confirmation**.

---

## 3. Configuration status

| Variable | Status | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Still unset** | Canonicals, hreflang, OG URLs and sitemap resolve to `http://localhost:3000` |
| `QUOTE_ENDPOINT_URL` | **Still unset** | Submissions report `not_delivered` — truthfully, and with no form exposed |

Neither was changed; no environment file was created or edited. Inspected
read-only.

**The enquiry experience does not imply delivery.** No quotation form is
rendered anywhere on the site. All CTAs resolve through `quotePathFor(locale)`
to the `#request-a-quote` homepage section, whose own copy states that nothing
there pretends to send a message or confirm a booking.

---

## 4. Launch assessment

**This cluster is not ready for launch.** Three things stand between it and a
deployment, and only the first is blocking:

1. **`NEXT_PUBLIC_SITE_URL` must be set.** Without it every canonical URL the
   site emits is wrong. A configuration task for the owner.
2. **The four blocked operator sources should be checked by a human in a
   browser.** They are the airports' own transport pages, and they would let
   several currently-omitted practical facts be added safely.
3. **The Venice cruise question should be decided by someone with current
   knowledge**, not by re-reading contradictory secondary guides.

Subject to those, the content, design, metadata, structured data,
accessibility and responsive behaviour of the cluster all pass the checks
defined for them.
