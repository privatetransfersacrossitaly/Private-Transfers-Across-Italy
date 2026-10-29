# Bologna Cluster Architecture & Planning

> **Markdown counterpart.** The owner's original planning document is
> `docs/Bologna_Cluster_Architecture.docx` (41,859 bytes, 27 October 2026),
> which remains the master and has **not** been deleted or modified. This file
> is an equivalent-content transcription created under decision **D1** so the
> plan can be searched, diffed and compared with the Rome, Milan, Veneto and
> Tuscany architectures, all of which are Markdown.
>
> Where the two ever disagree, the DOCX governs.

**Project:** Private Transfer Across Italy
**Prepared:** 27 October 2026
**Status:** Planning proposal. Audit and inventory first; implementation only
after explicit approval.

---

## 1. Purpose and fixed scope

Build a bilingual English/Italian private-transfer cluster for Bologna,
Bologna Guglielmo Marconi Airport (BLQ), major Bologna hotels, and Ravenna
Cruise Terminal at Porto Corsini.

Owner requirements to preserve:

- An individual page for each major Bologna hotel selected after the
  repository audit.
- Both directions for each selected hotel: BLQ → hotel and hotel → BLQ.
- Ravenna Cruise Terminal / Porto Corsini ↔ Ravenna city, plus evaluation of
  individual Ravenna hotel/terminal directions.
- Natural EN/IT counterparts, one stable identity per genuine language pair,
  consistent URLs, unique intent and no cannibalization.
- Use the existing site's design system, route registry, navigation, metadata
  helpers, sitemap conventions and image policy.

These are planning candidates, not evidence that the provider serves each
route. Audit existing URLs before proposing new ones. Do not silently drop the
requested hotel/directional coverage if it creates SEO concerns; explain the
trade-off and ask the owner.

## 2. Cluster structure

### Bologna city hub

A choice-led page for airport arrivals, central hotels, Bologna Centrale and
verified onward journeys. Distinguish Bologna city from BLQ and from Ravenna.

### Bologna Airport (BLQ)

An airport-specific page with practical, sourced arrival context. Keep public
transport facts separate from this provider's private-transfer offering.
Official airport listings establish general transport context, not this
business's coverage, fixed fares, pickup process or flight tracking.

Official sources to check:

- Airport transfer overview —
  `https://www.bologna-airport.it/en/from-and-to-the-airport/transfer-from-and-to-the-airport/`
- Airport city-centre FAQ —
  `https://www.bologna-airport.it/en/do-you-need-help/faq/how-do-i-get-to-the-city-centre-from-the-airport/`
- Chauffeur-driven car information —
  `https://www.bologna-airport.it/en/from-and-to-the-airport/car-and-private-transport/car-rental-with-driver/`
- Airport service charter — `https://media.bologna-airport.it/System/1520979/CDS2025.pdf`

Do not copy airport-listed operators or imply affiliation. Do not use the old
airport taxi tariff PDF as current fare evidence; it is labelled as dating
from 2008.

### Major Bologna hotels and BLQ routes

Starting research shortlist (verify current name, address, operating status
and relevance):

1. Grand Hotel Majestic "già Baglioni"
2. Starhotels Excelsior
3. Royal Hotel Carlton
4. I Portici Hotel Bologna
5. NH Bologna De La Gare
6. Hotel Metropolitan
7. Art Hotel Commercianti
8. Art Hotel Orologio
9. Phi Hotel Bologna
10. Savhotel Aemilia Bologna
11. Savoia Hotel Regency
12. AC Hotel Bologna
13. Savhotel Fiera Bologna
14. Mercure Bologna Centro
15. UNA Hotels Bologna Centro
16. Best Western City Hotel
17. Hotel Porta San Mamolo
18. Hotel San Donato
19. Hotel Internazionale

For each hotel approved after audit, inventory: (1) hotel-specific page,
(2) BLQ → hotel route, (3) hotel → BLQ route, and (4) EN/IT counterparts for
every page. The list is not exhaustive; add or defer hotels based on evidence
and the audit. Do not create near-identical mass pages that only swap hotel
names. Each page needs distinct utility.

### Ravenna Cruise Terminal / Porto Corsini

Use the precise endpoint "Ravenna Cruise Terminal at Porto Corsini." It is
distinct from Ravenna city centre, Ravenna station and Bologna. Official
Ravenna tourism describes Porto Corsini as about 15 km from central Ravenna;
recheck and attribute any use of this fact.

Official sources:

- `https://www.visitravenna.it/en/how-to-reach-ravenna`
- `https://www.visitravenna.it/en/moving-around-ravenna`
- `https://www.visitravenna.it/en/cruising-ravenna`
- `https://rccp.it/en/guests/`
- `https://rccp.it/en/port-services/`
- `https://www.turismo.ra.it/en/ravenna-cruise-terminal/transfer-cruise-terminal-ravenna/`

Evaluate Ravenna city ↔ Porto Corsini, and selected hotel ↔ terminal
directions. Consider Bologna ↔ Porto Corsini only if distinct user intent and
actual provider coverage are verified. Third-party shuttles, public buses or
local taxi listings do not prove this provider can fulfil a route.

## 3. Page inventory rules

For every candidate record: stable page ID; EN and IT title/path; page family,
route direction and parent hub; target intent and unique-value rationale;
priority; research status (verified, partial, blocked); provider capability
(verified, unverified, not supported); source references and date checked;
image need and internal-link targets; decision (build, update, merge, defer,
blocked) with reason.

Evaluate city hub, BLQ hub, every hotel in the shortlist, both BLQ directions
for every selected hotel, Ravenna cruise-terminal hub, both city/terminal
directions, and selected hotel/terminal directions. Optional BolognaFiere,
Bologna Centrale, hospitals, stadiums, wedding venues, Modena, Ferrara, Rimini
and San Marino are candidates only — not automatic additions.

## 4. URL and localization rules

Use existing repo conventions after the audit. Illustrative slugs only:

```
/destinations/bologna
/airports/bologna-marconi
/hotels/bologna/grand-hotel-majestic
/routes/bologna-airport-to-grand-hotel-majestic
/routes/grand-hotel-majestic-to-bologna-airport
/routes/ravenna-cruise-terminal-to-ravenna
/routes/ravenna-to-ravenna-cruise-terminal
```

Before assigning slugs, search app routes, registry, sitemap, redirects,
content and analytics if available. Preserve valuable URLs. One stable page ID
per genuine EN/IT pair; reciprocal hreflang and correct language switch. Do
not rename, redirect, delete or repurpose an existing route without written
proposal and approval.

## 5. Content and factual guardrails

Every published page needs unique title/meta, one H1, logical headings,
natural localization, useful route/property-specific content, relevant
contextual links, truthful enquiry CTA, and accurate
breadcrumbs/canonical/hreflang/sitemap/schema.

Never invent or imply without evidence:

- provider route coverage, fares, fare inclusions, distances, durations, live
  availability or fixed pricing;
- vehicle types/capacity, luggage capacity, child seats or accessibility;
- flight/ship tracking, meet-and-greet, pickup point, driver signage, waiting
  rules or guarantees;
- hotel partnerships, endorsements, reviews, ratings or facilities;
- terminal access permissions or what happens if a ship schedule changes.

Public transport availability and third-party services are not proof of this
provider's capability. Avoid unsupported "best", "cheapest", "most popular",
demand statistics or review claims. For historic-centre/ZTL access, verify
current official rules; otherwise omit the claim or clearly record
uncertainty. Do not promise a driver can reach a hotel entrance without
evidence.

## 6. Research and provenance

Prefer primary sources: Bologna Airport and its current service documents;
Bologna Welcome official accommodation/tourism pages; each hotel's official
site for current name, address and property details; Comune di Bologna for
current access/ZTL rules where relevant; Ravenna tourism authority and the
cruise-terminal operator.

For every claim, log source URL, publisher, date accessed, exact claim
supported, pages using it, current/dated/blocked status and caveat. Search
snippets are discovery aids, not adequate proof for detailed operational
claims. If an official source is blocked, record that and corroborate; never
imply an archived or third-party source is current official guidance.

## 7. Design differentiation and images

Keep the global design system, but do not clone one layout across all pages.

- **Bologna hub:** choice-led arrival planner.
- **BLQ:** airport-specific arrival planning.
- **Hotel page:** property-specific endpoint context.
- **BLQ → hotel:** arrival-oriented route logic.
- **Hotel → BLQ:** departure-oriented route logic.
- **Ravenna cruise-terminal page:** endpoint clarification and cruise
  passenger decision flow, distinct from the airport page.
- **Cruise-terminal ↔ hotel:** port endpoint and hotel-specific context.

Record actual choices in `docs/bologna-design-differentiation.md`. For every
image, verify subject/location, creator, source, commercial rights,
modification rights, attribution, date and local path in the private manifest.
Use accurate alt text, avoid duplicate hero images and misleading
airport/hotel/vehicle photos, and never present AI imagery as real
photography. A text-led layout is preferable to an unverified image.

## 8. Technical boundaries and QA

Use existing Next.js App Router, TypeScript, Tailwind, content/registry
patterns and shared components. Do not add dependencies or rewrite routing
without approval. Inspect quote/CRM/API behavior read-only; do not submit
forms or change settings.

`QUOTE_ENDPOINT_URL` is known to have been unset in prior project context;
verify current state read-only. `NEXT_PUBLIC_SITE_URL` is also known to be
unset, reportedly causing site-wide canonical/hreflang/sitemap URLs to resolve
to localhost. Track it as a final site-wide launch blocker; do not fix it
within this cluster unless separately authorized.

QA after approved implementation: build, TypeScript, lint, all EN/IT route
statuses, internal links and orphans, cannibalization review, metadata,
heading structure, canonical/hreflang, language switch, sitemap/robots,
schema, image loads/licensing, browser console, keyboard/focus/accessibility,
contrast, and responsive checks at 320, 360, 390, 768, 1024, 1280 and 1680 px.
Report only tests actually run and separate automated results from human
factual review.

## 9. Required files

Before implementation:

- `docs/bologna-phase0-audit.md`
- `docs/bologna-page-inventory.csv`
- `docs/bologna-internal-link-map.csv`
- `docs/bologna-research-log.md`
- `docs/bologna-design-differentiation.md`
- `docs/bologna-url-map.md`

After approved implementation:

- `docs/bologna-qa-report.md`
- Update private image manifest if assets change.

## 10. Deferred project-wide issues — track until the end

Do not derail Bologna work to resolve these; keep them in a final
unresolved-issues register for review after the whole website is complete:

- `NEXT_PUBLIC_SITE_URL` is unset; canonical/hreflang/sitemap reportedly
  resolve to `localhost:3000` (site-wide launch blocker).
- Florence ZTL official link accessibility is unverified; recheck when
  official Comune hosts are reachable.
- Florence private-hire/NCC access to the ZTL remains unresolved. Do not claim
  permitted or prohibited without authoritative evidence.
- Toscana Aeroporti's archived 2025 service charter was used because the live
  publisher returned 403; preserve provenance.
- Peretola runway length of 1,560 m is reference-sourced, not
  operator-confirmed.

Add Bologna-specific unresolved items to the same register with evidence,
severity and the owner decision needed.

## 11. Approval gates and hard stop

- **Gate 1:** read-only audit, exact current routes/files/conflicts/unknowns.
  No coding.
- **Gate 2:** research and inventory, URL map, hotel shortlist, directional
  matrix, cruise-port scope, source caveats, cannibalization risks and design
  plan. Stop and wait for approval.
- **Gate 3:** implement only approved scope, run QA, update reports and stop.

No commit, push, deploy, environment/DNS/API/CRM/quote changes or real form
submissions without explicit approval.

---

## Appendix — Phase 0 and Phase 1 outcomes (added by the transcription)

Not part of the owner's original document; recorded here so the Markdown
counterpart stays useful as the cluster's single searchable plan.

| Gate | Status | Document |
|---|---|---|
| Gate 1 — audit | Complete, 27 Oct 2026 | `docs/bologna-phase0-audit.md` |
| Gate 2 — research and planning | Complete, 27 Oct 2026, awaiting approval | `docs/bologna-phase1-recommendation.md` |
| Gate 3 — implementation | **Not started.** Requires explicit approval | — |

Phase 0 decisions D1–D6 were resolved by the owner on 27 October 2026 and are
carried into `docs/bologna-phase1-recommendation.md` §1.
