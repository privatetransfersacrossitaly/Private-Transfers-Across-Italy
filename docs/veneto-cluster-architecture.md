# Private Transfer Across Italy
## Venice, Verona & Veneto Cluster Architecture

**Status:** Planning only — no implementation authorization.  
**Prepared:** 26 October 2026.

## 1. Geographic clarification

**Venice and Venezia are the same city**: Venice is the English name and Venezia the Italian name. They must be treated as language variants, not separate destination clusters. **Verona is a different city in the Veneto region.**

The Veneto regional tourism site identifies three principal airports in the region:
- Venice Marco Polo (VCE), at Tessera.
- Treviso / Antonio Canova (TSF).
- Verona Villafranca / Valerio Catullo (VRN).

This supports evaluating all three airports; it does **not** prove that this business has provider coverage at any of them.

### Planning sources to re-check before implementation
- Veneto tourism: https://www.veneto.eu/en/pianifica/come-arrivare
- Venice Marco Polo Airport transport: https://www.veneziaairport.it/en_gb/transport
- Venice Airport to Venice: https://www.veneziaairport.it/en_gb/transport/from-to/venice
- Treviso Airport transport: https://www.trevisoairport.it/en_gb/transport
- Treviso Airport to Venice: https://www.trevisoairport.it/en_gb/transport/from-to/venice
- Verona Airport transport: https://www.aeroportoverona.it/en_gb/transport
- Verona Airport FAQs: https://www.aeroportoverona.it/en_gb/assistance/faqs-transport-from-to-airport
- Trenitalia Verona Airlink: https://www.trenitalia.com/en/connections/verona-airlink.html
- Venice cruise terminal access: https://vtp.it/en/passengers/how-to-reach-us/
- Venezia Unica public transport: https://www.veneziaunica.it/en/getting-around-venice/public-transport?language=en

These sources establish geography and public-transport context, not the private transfer business's service coverage, prices, fleet, pickup procedures or availability. Recheck and record exact claims, URLs and dates in the research log.

## 2. Objective

Build a compact, useful, premium English/Italian transfer cluster for Venice/Venezia, Verona and selected Veneto routes. Help travelers distinguish airports, historic Venice, mainland destinations, stations, cruise terminals and any separate water/last-mile leg. SEO/AEO/GEO are quality objectives, not ranking or AI-citation guarantees. Build the smallest useful set of pages, not the largest possible URL count.

## 3. Non-negotiable rules

1. Preserve the brand **Private Transfer Across Italy**, current fonts, design tokens, global header/footer, route registry and project conventions.
2. Audit existing URLs/content before proposing routes. Preserve existing URLs; merge/update/defer duplicates.
3. Venice and Venezia are one destination in two languages. Verona is separate; both are in Veneto.
4. Every page must have distinct intent and useful content. Do not clone full-page templates.
5. Never invent prices, journey times, distances, availability, pickup rules, vehicle/fleet claims, licenses, insurance, reviews, affiliations, accessibility, child seats, waiting policies or booking guarantees.
6. A public airport's taxi/NCC listing does not prove this business can provide that service. Verify provider capability independently.
7. Do not imply a road vehicle can reach every historic-centre hotel or lagoon island. Distinguish endpoints such as Piazzale Roma, Tronchetto, Venezia Santa Lucia, Venezia Mestre, mainland addresses, Lido and other islands when relevant.
8. Do not imply a boat, water taxi, vaporetto, ferry, porter or onward connection is included unless that component is verified as part of the actual service.
9. Treat VCE, TSF and VRN as distinct airports. Do not conflate airport names, codes, municipalities or cities.
10. Cruise-terminal pages are conditional: verify current terminal operations, exact endpoint, access rules and provider capability.
11. Avoid doorway pages, keyword stuffing, city-name-swapped copy and unsupported claims such as “most requested”.
12. Use relevant, licensed images; record creator, source, license, commercial/modification rights, attribution terms and date in the private manifest. No public source-credit captions. Never present AI imagery as documentary photography.
13. Write natural Italian, not literal translations. Keep facts and caveats equivalent across languages.
14. Preserve quote/CRM/API/environment/deployment behavior. No fake quote or booking outcomes.
15. No commit or deployment. Stop after reporting and wait for approval.

## 4. Candidate page inventory

These are research candidates, not automatic publication instructions. Inspect the repository and route registry first.

### Core hubs

| ID | Candidate | Purpose | Initial priority |
|---|---|---|---|
| VEN-HUB | Venice/Venezia transfers | Explain lagoon geography, airport choices, mainland/station/port endpoints and road-vs-water distinctions. | P1 |
| VER-HUB | Verona transfers | City hub for airport, Porta Nuova station and verified onward journeys. Different composition from Venice. | P1 |
| VENETO-HUB | Veneto regional hub | Create only if it adds useful regional context beyond a link list; otherwise omit. | Decision/P2 |

### Airports

| ID | Candidate | Unique requirement | Priority |
|---|---|---|---|
| VCE-AIR | Venice Marco Polo (VCE) | Endpoint decision paths; historic centre vs mainland and any water/last-mile caveat. No invented pickup instructions. | P1 |
| TSF-AIR | Treviso / Antonio Canova (TSF) | Clearly distinguish it from VCE and explain relevant Venice/Treviso endpoints. No airport-name-swapped copy. | P1 if distinct and supported |
| VRN-AIR | Verona Valerio Catullo (VRN) | Airport-to-Verona intent and verified onward destinations. | P1 |

### Stations

| ID | Candidate | Decision rule | Priority |
|---|---|---|---|
| VEN-STATIONS | Venice station transfers | Assess one hub comparing Santa Lucia and Mestre. Do not make thin duplicate station pages. | P1 |
| VER-PORTA-NUOVA | Verona Porta Nuova transfers | Standalone only if useful and distinct from the Verona hub; otherwise merge. | P2 |

### Route candidates

| ID | Candidate | Publication gate | Priority |
|---|---|---|---|
| VCE-VEN | VCE to Venice | Clarify road-accessible drop-off vs historic-centre/island final destination. | P1 |
| TSF-VEN | TSF to Venice | Distinct airport, endpoint guidance and provider capability. | P1 |
| VRN-VER | VRN to Verona | Route-specific useful content; no invented price/time/distance. | P1 |
| VCE-MESTRE | VCE to Mestre | Separate only if intent and content differ enough from VCE-VEN. | P2 |
| VEN-VER | Venice to Verona | Publish only if actual intercity provider coverage is confirmed and content adds value beyond train comparisons. | P2 |
| VRN-GARDA | VRN to a named Lake Garda town | Select towns only with demand evidence and verified service coverage; avoid a vague generic endpoint. | P2 |
| VEN-CRUISE | Airport/station to Venice cruise terminal(s) | Verify current terminal, exact endpoint, access and provider capability; terminals are not interchangeable. | Conditional/P2 |

### Other candidates to evaluate, not automatically build
- Padua/Padova, Vicenza, Treviso city and other Veneto destinations: demand evidence plus provider coverage required.
- Lake Garda: name the town and lake side; distinguish Verona-side and Lombardy-side destinations.
- Venice airport-choice guide (VCE vs TSF): only if it provides a genuine decision aid without unsupported airline/traffic claims.
- Events, weddings, hotels, Dolomites, cross-border and broad “all Veneto routes” pages: defer until demand and real provider capability are documented.

## 5. URL and language mapping policy

Existing routes and conventions are authoritative. The following are illustrative only; do not create if an equivalent route exists or the project's current pattern differs.

| Page | Illustrative EN path | Illustrative IT path |
|---|---|---|
| Venice hub | `/destinations/venice` | `/it/destinazioni/venezia` |
| Verona hub | `/destinations/verona` | `/it/destinazioni/verona` |
| VCE airport | `/airports/venice-marco-polo` | `/it/aeroporti/venezia-marco-polo` |
| Treviso airport | `/airports/treviso` | `/it/aeroporti/treviso` |
| Verona airport | `/airports/verona` | `/it/aeroporti/verona` |
| Venice stations | `/destinations/venice/train-station-transfers` | `/it/destinazioni/venezia/transfer-stazioni` |
| VCE to Venice | `/routes/venice-marco-polo-airport-to-venice` | `/it/tratte/aeroporto-venezia-marco-polo-venezia` |
| TSF to Venice | `/routes/treviso-airport-to-venice` | `/it/tratte/aeroporto-treviso-venezia` |
| VRN to Verona | `/routes/verona-airport-to-verona` | `/it/tratte/aeroporto-verona-citta` |

Search all data sources, sitemaps and redirects before choosing paths. Preserve existing URLs. Document any redirect proposal and request approval before material URL changes.

## 6. Internal linking

- Link the existing homepage/navigation to Venice and Verona hubs only where useful and without disrupting approved global navigation.
- Venice hub ↔ VCE, TSF, station hub, published routes and relevant mainland/lagoon endpoints.
- Verona hub ↔ VRN, Porta Nuova content if standalone, published routes and supported nearby destinations.
- Each airport page links to its justified routes and the appropriate hub.
- Link Venice and Verona to each other only where relevant to a real traveler intent.
- Use natural contextual anchors; no keyword-stuffed blocks.
- Every published page needs useful inbound links; no orphans or dead anchors.
- Language switch should point to the real counterpart, not default every Italian page to the homepage.

Deliver `docs/veneto-internal-link-map.csv` with source, target, anchor, rationale, language counterpart and status.

## 7. Design principles

Keep shared brand tokens/navigation, but make each page's composition follow its job. Candidate directions:
- **Venice hub:** endpoint chooser separating historic centre, mainland, stations and lagoon destinations.
- **Verona hub:** airport/station/city arrival hub, with a different structure from Venice.
- **VCE:** destination matrix or endpoint decision tree.
- **TSF:** airport identity and destination options clearly distinct from VCE.
- **VRN:** airport-to-city and verified onward-destination module.
- **Venice stations:** Santa Lucia vs Mestre comparison/table only if it helps decisions.
- **Route pages:** route-specific endpoint logic, not a repeated generic timeline.

These are hypotheses, not rigid templates. Record final layout rationale in `docs/veneto-design-differentiation.md`.

## 8. Research protocol

Create `docs/veneto-research-log.md`. For every claim record exact wording, source title/URL, source type, date checked, pages using it, confidence/status and caveat. Prioritize airport operators, regional/municipal authorities, official rail/station/public transport operators, official cruise-terminal operators and first-party provider records for actual service capability. Use secondary sources only when needed and mark the limitation. Public transport availability is not a private-transfer promise.

## 9. Images and asset licensing

Verify exact subject/location, creator, source URL, license, commercial use, modification rights, attribution requirements, date checked and local path. Update the private manifest. Avoid misleading airport imagery, images implying unsupported vehicle access, prominent competitor branding, duplicated hero images and public credit captions. Use accurate alt text, responsive sizes and no broken assets. If no suitable image exists, use a text-led design.

## 10. SEO, localization and schema

- Unique title/meta per page and language; one H1; logical headings.
- Correct self-canonical, reciprocal hreflang, `html lang`, Open Graph and sitemap entries for published/indexable URLs only.
- No draft/deferred URLs in sitemap and no accidental `noindex`.
- Breadcrumb/schema must match visible content and real hierarchy.
- FAQ schema only when appropriate and visible answers match.
- No fake LocalBusiness, address, telephone, price, offer, review, rating, opening hours or availability.
- Natural Italian and equivalent caveats; no promises of ranking, indexing or AI citations.

## 11. Implementation gates

**Gate 0 — Read-only audit:** inspect framework, route registry, existing Veneto content/URLs, homepage, Rome/Milan, navigation, image manifest, quote/CRM behavior, environment, metadata, sitemap, redirects and tests. No code changes.

**Gate 1 — Inventory:** deliver `docs/veneto-page-inventory.csv` with stable ID, EN/IT paths, intent, parent, source evidence, provider status, image needs, links, layout, priority and decision (`publish`, `merge`, `update`, `defer`).

**Gate 2 — Link plan:** deliver `docs/veneto-internal-link-map.csv` and `docs/veneto-url-map.md`.

**Gate 3 — Research and capability verification:** unsupported claims must be omitted, qualified or deferred.

**Gate 4 — Build approved core only:** implement only the smallest distinct and supported set.

**Gate 5 — Italian, design and image review:** check natural Italian, parity, caveats, layout differentiation and licenses.

**Gate 6 — Technical QA:** production build, TypeScript, lint, routes/status, links/orphans, images, metadata, canonical/hreflang, sitemap/robots, schema, responsive, accessibility and browser checks.

**Gate 7 — Report and stop:** report findings, unresolved items and explicit no-commit/no-deploy confirmation; wait for approval.

## 12. Acceptance checklist

- [ ] Venice/Venezia treated as one city in two languages.
- [ ] Venice and Verona treated as separate cities in Veneto.
- [ ] Existing URLs/content audited before adding pages.
- [ ] Candidates scored; duplicates merged/deferred.
- [ ] VCE, TSF and VRN distinguished correctly.
- [ ] Private provider capability verified independently.
- [ ] Venice road/water/last-mile limitations accurate.
- [ ] Cruise routes only if current endpoint and capability verified.
- [ ] Claims logged with source and date.
- [ ] Distinct intent and justified page composition.
- [ ] Licensed images, accurate alt and private manifest.
- [ ] Natural English/Italian and correct URL pairing.
- [ ] Useful links; no dead anchors or orphans.
- [ ] Canonical, hreflang, sitemap, robots and schema validated.
- [ ] Build, TypeScript, lint, responsive, accessibility, browser and image checks pass.
- [ ] Quote/CRM/API/environment behavior unchanged.
- [ ] Nothing committed or deployed; final report delivered.

## 13. Required deliverables

1. `docs/veneto-cluster-architecture.md`
2. `docs/veneto-page-inventory.csv`
3. `docs/veneto-internal-link-map.csv`
4. `docs/veneto-research-log.md`
5. `docs/veneto-design-differentiation.md`
6. Updated private asset manifest if assets change
7. `docs/veneto-url-map.md`
8. `docs/veneto-qa-report.md`

**Final principle:** Build a useful Veneto transfer cluster, not city-name-swapped URLs. Every page must help travelers make a real decision, every service claim must be supportable, and Venice's road/water geography must be handled honestly.
