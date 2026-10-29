# Tuscany Cluster Architecture & Planning
**Project:** Private Transfer Across Italy  
**Status:** Planning proposal — audit-first; no implementation authorization implied  
**Prepared:** 26 October 2026

## 1. Purpose

Plan a coordinated bilingual English/Italian Tuscany cluster covering Florence, Pisa, Siena, Lucca, Arezzo, San Gimignano, Chianti, Val d’Orcia and Maremma. Commercial priorities are Florence and Pisa airports, winery visits, countryside villas, weddings, coastal resorts and intercity transfers.

The cluster should answer practical transfer questions and help visitors choose the right enquiry path. It must not imply that every destination, villa, winery, beach resort, wedding venue or route is currently served by the transfer provider. Public-transport facts and tourism context are not proof of private-provider capability.

## 2. Regional framing and source starting points

Tuscany is the regional cluster. Florence/Firenze and Pisa are the priority arrival gateways; Siena, Lucca, Arezzo and San Gimignano are distinct city/town destinations; Chianti and Val d’Orcia are countryside areas; Maremma is a broad southern/coastal area, not one pickup point.

Use natural language appropriate to each page. In Italian, use *Firenze*, *Pisa*, *Siena*, *Lucca*, *Arezzo*, *San Gimignano*, *Chianti*, *Val d’Orcia* and *Maremma*. English/Italian counterparts should represent the same page intent and share one stable page identity in the route registry.

Official tourism sources support distinct city, countryside, wedding and coastal intents:
- Visit Tuscany: https://www.visittuscany.com/en/
- First-time destinations: https://www.visittuscany.com/en/ideas/must-see-destinations-for-first-time-visitors-to-tuscany/
- Countryside areas: https://www.visittuscany.com/en/countryside/
- Wedding destinations: https://www.visittuscany.com/en/ideas/where-to-get-married-in-tuscany/
- Coastal areas: https://www.visittuscany.com/en/ideas/all-the-coastal-areas-of-tuscany/
- Southern Maremma: https://www.visittuscany.com/en/areas/maremma/
- Pisa Airport: https://www.pisa-airport.com/en/
- Regional transport overview: https://www.at-bus.it/en/destination-tuscany-arrival-and-departure
- Val d’Orcia travel context: https://visitvaldorcia.it/en/info/

Airport operator pages may block automated retrieval. Re-check in a normal browser before adding operational facts. Search snippets are discovery aids, not sufficient evidence for time-sensitive terminal, fare, frequency, pickup or service details.

## 3. Mandatory Phase 0: read-only repository audit

Before coding, inspect:
- route registry and all existing English/Italian URL mappings;
- `app/` route tree, redirects/rewrites, sitemap generation and metadata helpers;
- existing destination, airport, route, experience, wedding, villa, winery and coast pages;
- global navigation, shared design tokens, content types and page-specific components;
- current photo/asset manifest and source/license records;
- quote form and endpoint configuration, read-only; do not submit or change anything;
- references to `Florence`, `Firenze`, `Pisa`, `Siena`, `Lucca`, `Arezzo`, `San Gimignano`, `Chianti`, `Val d'Orcia`, `Val d’Orcia`, `Maremma`, `FLR`, `PSA`, `wedding`, `villa`, `wine`, `coast`, and Italian spellings.

Do not assume the repository is empty. Existing URLs take precedence unless an explicit, reviewed reason supports a change. Report every collision, current URL, intended page identity and proposed action before implementation. Do not rename, repurpose, redirect or delete existing URLs silently.

## 4. Proposed information architecture

This is a candidate architecture, not permission to create every listed page. Final inventory must be based on the repository audit, query intent, useful differentiated content and verified provider coverage.

### Tier 1 — regional and priority hubs
1. Tuscany regional transfer hub — only if it adds value beyond a link list.
2. Florence transfers hub.
3. Pisa transfers hub.
4. Tuscan countryside and villa transfers — only if distinct and operationally supported.
5. Tuscany wedding guest transfers — capability must be confirmed.
6. Tuscany wine and winery transfers — do not imply tasting bookings or chauffeur-by-the-hour unless confirmed.

### Tier 2 — airports and key access points
7. Florence Airport (FLR) transfers.
8. Pisa Airport (PSA) transfers.
9. Florence Airport → Florence.
10. Pisa Airport → Pisa.
11. Florence Airport → Siena, subject to provider confirmation.
12. Pisa Airport → Florence, subject to provider confirmation and distinct intent.
13. Pisa Airport → Lucca, subject to provider confirmation.
14. Florence Airport → Chianti / named Chianti base, only after coverage validation.

Do not publish route duration, mileage, fare, terminal/meeting instructions, included waiting, flight monitoring, child seats, vehicle sizes or luggage capacity without reliable evidence. Public transport services must not be presented as included in a private transfer.

### Tier 3 — destination and intercity pages (conditional)
15. Siena transfers hub.
16. Lucca transfers hub.
17. Arezzo transfers hub.
18. San Gimignano transfers hub.
19. Chianti winery and countryside transfers.
20. Val d’Orcia countryside transfers.
21. Maremma and coastal-resort transfers.
22. Florence ↔ Pisa.
23. Florence ↔ Siena.
24. Florence ↔ San Gimignano.
25. Florence ↔ Chianti, with a clear destination/area and no vague “everywhere in Chianti” promise.
26. Siena ↔ San Gimignano.
27. Florence/Pisa ↔ a named Maremma coastal destination, only when coverage and distinct user intent are verified.

Avoid a page for every possible pair. Create an intercity page only where it has distinct purpose, enough useful original content and operational support.

## 5. Commercial intent: weddings, villas, wineries and coast

### Wine and winery visits
- Explain that countryside winery visits often require a confirmed pickup address and clear itinerary.
- Distinguish point-to-point transfer from multi-stop wine tour, waiting-time service, chauffeur-by-the-hour and winery/tasting booking.
- Do not imply winery access, tasting availability or reservations are included unless confirmed.

### Countryside villas and agriturismi
- Ask for the exact property name/address where possible; “Chianti” and “Val d’Orcia” are areas, not exact drop-off points.
- Do not claim every rural property is accessible by standard vehicle. Avoid promises about unpaved roads, gates, luggage capacity or last-mile access without confirmation.

### Weddings
- Focus on guest transfers, airport arrivals, hotel-to-venue movements and coordinated multi-pickup logistics only to the extent the provider actually offers them.
- Group transfers, multiple vehicles, late-night service, schedules, luggage, child seats, accessibility and event-day coordination must be confirmed, not assumed.
- Do not imply wedding planning, venue booking or ceremony/legal services.

### Coastal resorts and Maremma
- Treat Maremma as a broad area. Use named towns/resorts only when their location and provider coverage are confirmed.
- Do not conflate Maremma with all of the Tuscan coast or the Tuscan islands.
- Island/ferry transfers, beach access and seasonal resort services require explicit operational confirmation.

## 6. Page experience and design differentiation

Preserve the site-wide design system, navigation, typography, color tokens, component conventions and language switcher. Do not redesign the homepage or other regional clusters.

Layouts should differ according to user intent, not decorative variation alone:
- **Regional hub:** geographic orientation and grouped use cases; avoid a directory dump.
- **Airport page:** airport identity, ground-access context, pickup enquiry requirements and destinations served (verified only).
- **Airport-to-city route:** clear origin/destination, arrival planning and useful next steps.
- **City hub:** city-specific arrival/pickup considerations and onward routes.
- **Wine/countryside page:** itinerary shape, exact-property address requirement, multi-stop/waiting-time distinctions.
- **Wedding page:** guest arrival flows, venue/hotel coordination and group logistics only if supported.
- **Coastal page:** named coastal area and resort access; avoid coast-wide promises.
- **Intercity page:** route purpose, origin/destination clarity and practical distinction between private transfer and public transport.

Do not force every page into the same hero/section sequence. Reuse components where they genuinely fit, and add a new content type only if the constraint is meaningful and testable.

## 7. URL and language rules

Use the repository’s established URL patterns and registry conventions. Candidate English slugs (illustrative only; inspect the project before choosing):
- `/destinations/tuscany`
- `/destinations/florence`
- `/destinations/pisa`
- `/destinations/siena`
- `/destinations/lucca`
- `/destinations/arezzo`
- `/destinations/san-gimignano`
- `/destinations/chianti`
- `/destinations/val-d-orcia`
- `/destinations/maremma`
- `/airports/florence`
- `/airports/pisa`
- `/routes/florence-airport-to-florence`
- `/routes/pisa-airport-to-pisa`

Use natural Italian URL equivalents consistent with the existing site. These are not final if the repo has a naming convention or collision. Maintain stable page IDs, reciprocal `hreflang`, canonical URLs, sitemap inclusion and correct localized navigation. Preserve existing routes and aliases.

## 8. Content research and evidence

Create `docs/tuscany-research-log.md` with claim/planned fact, source URL and owner, date checked, evidence summary, evergreen/time-sensitive status, whether it concerns public transport/tourism/private provider, implementation decision and remaining uncertainty.

Prioritize official airport, municipal, regional tourism, rail/transport and destination sources. Use secondary sources only when primary evidence is unavailable and label uncertainty. No invented facts, reviews, prices, durations, distances, availability, service guarantees, pickup procedures or operational capabilities.

## 9. Images and asset manifest

- Reuse only appropriate, licensed assets with verified commercial-use and modification rights.
- Record source, creator, license, allowed uses, modification permissions and attribution requirements in the existing manifest.
- Do not add visible source-credit captions if the site’s established policy forbids them; comply with the actual license through appropriate internal records or required attribution elsewhere.
- Do not portray AI-generated images as real properties, wineries, wedding venues or vehicles.
- Avoid generic wedding stock or vineyard images that imply a specific venue or service.
- Follow the current site policy on unique image use; document deliberate reuse exceptions and avoid accidental duplicates.
- Meaningful alt text, no decorative alt spam, and no image without a real page purpose.

## 10. Technical and SEO acceptance criteria

- Inspect current `NEXT_PUBLIC_SITE_URL` status. Do not set/change it without explicit approval. Report if canonicals resolve to localhost.
- Inspect `QUOTE_ENDPOINT_URL` and quote form status read-only. Do not alter endpoint, CRM, API, form behavior or environment variables.
- Unique and useful title, description and H1 for every page/language.
- Reciprocal EN/IT `hreflang`; self-referencing canonical on the correct production origin once configured.
- Correct sitemap entries; no drafts, internal test routes or duplicates accidentally indexed.
- Correct internal links, no orphan pages, no dead anchors, no broken images.
- Structured data only when supported by actual page content; no fake aggregate ratings, business details, offers, prices or review markup.
- No invented availability or false quote success states.
- Run build, TypeScript, lint, crawl, metadata/schema checks and responsive QA at 320, 360, 390, 768, 1024, 1280 and 1680 px where tooling supports it.
- Verify all English/Italian counterpart pairs and page IDs; report tests that could not be run.

## 11. Required deliverables

Before implementation:
- `docs/tuscany-cluster-architecture.md`
- `docs/tuscany-phase0-audit.md`
- `docs/tuscany-page-inventory.csv`
- `docs/tuscany-internal-link-map.csv`
- `docs/tuscany-research-log.md`
- `docs/tuscany-design-differentiation.md`
- `docs/tuscany-url-map.md`

After approved implementation:
- `docs/tuscany-qa-report.md`
- update the existing asset manifest only if assets actually change.

Inventory columns: page ID, EN URL, IT URL, page type, intent, priority, evidence status, provider coverage status, image plan, unique content angle, internal links and decision (`build`, `defer`, `merge`, `already exists`).

## 12. Implementation gates

1. **Phase 0 — read-only audit:** inventory current pages/routes and report collisions. No coding.
2. **Phase 1 — plan:** propose page inventory, internal-link map, evidence gaps, provider questions and design differentiation. Stop for review.
3. **Phase 2 — implementation:** proceed only after explicit approval of the inventory. Build only approved pages.
4. **Phase 3 — QA:** run tests, inspect EN/IT parity, images, metadata, links, schema and responsive layouts. Report blockers.
5. **Stop:** do not commit, push, deploy, change DNS, environment variables, API/CRM, quote delivery or unrelated regions without explicit authorization.

## 13. Questions for transfer partners

- Do they serve FLR and PSA pickups/drop-offs?
- Which of Florence, Pisa, Siena, Lucca, Arezzo, San Gimignano and which exact towns in Chianti/Val d’Orcia/Maremma are covered?
- Are winery trips point-to-point only, or are multi-stop/waiting-time itineraries available?
- Are villa/agriturismo pickups supported at rural addresses and on access roads?
- Are wedding guest shuttles, multiple pickups, group vehicles and late-night returns offered?
- Which named coastal resorts/towns are served, and are island/ferry connections excluded?
- Which vehicle sizes, luggage capacities, child-seat options and accessibility features are actually supported?

Do not block Phase 0 on these answers; mark capabilities `unverified` and do not turn them into public claims.
