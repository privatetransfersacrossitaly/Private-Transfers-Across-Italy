# Private Transfer Across Italy

## Rome (Lazio) Cluster Architecture & Publishing Standard

**Document purpose:** This is the source of truth for planning,
creating, interlinking, localizing, and quality-checking the Rome/Lazio
cluster for Private Transfer Across Italy.

**Scope:** Plan and build the Rome cluster first. Do not begin other
regional clusters until the Rome cluster has been audited and approved.
This document defines the information architecture and quality
standards; it does not claim that every service, route, venue, or pickup
arrangement is currently available.

------------------------------------------------------------------------

## 1. Strategic objective

Build a useful, trustworthy, commercially relevant Rome/Lazio transfer
resource that can be understood by travelers, search engines, and AI
answer systems. The cluster must cover the real relationships between
Rome, its airports, Civitavecchia cruise port, railway stations,
accommodation districts, business/event venues, wedding venues, day
trips, and relevant intercity routes.

The objective is not to maximize the number of URLs. The objective is to
publish the **smallest complete set of genuinely useful pages** that
covers the important travel intents without creating doorway pages, thin
content, or near-duplicate pages.

SEO, AEO, and GEO are quality goals, not guarantees of ranking or AI
citations.

-   **SEO:** crawlable information architecture, distinct search intent,
    useful content, technical correctness, internal links, indexability,
    performance, accessibility, and accurate metadata.
-   **AEO:** direct answers to traveler questions, clear explanations,
    structured information, and well-organized FAQs.
-   **GEO:** accurate, attributable, consistent facts and self-contained
    explanations that answer engines can interpret correctly. Do not use
    fabricated "AI ranking" tactics or promise inclusion in AI answers.

## 2. Non-negotiable rules

1.  Build **Rome/Lazio first**. Do not start Milan, Venice,
    Florence/Tuscany, Naples/Amalfi, Pisa, Verona, Bari, or other
    regions until the Rome cluster passes its QA gate.
2.  Keep the brand name **Private Transfer Across Italy** and the
    existing approved global typography, color tokens, header, and
    footer.
3.  Each page must have a **distinct editorial layout and section
    composition**. The design system remains consistent, but page
    designs must not be mechanically duplicated.
4.  Do not create a page merely because a keyword, hotel name,
    neighborhood, or route can be written as a slug.
5.  Never invent service coverage, operating hours, pickup permissions,
    vehicle categories, prices, travel times, customer reviews,
    credentials, partnerships, or guarantees.
6.  Do not imply that every route is available. Route pages must be
    checked against actual provider capability before publication.
7.  No fake booking form, fake availability checker, fake price
    calculator, fake review count, fake rating, or false success
    message.
8.  No keyword stuffing, doorway pages, city-name swapping,
    mass-generated near-duplicates, hidden text, or internal links
    inserted only to manipulate rankings.
9.  Use real, relevant, appropriately licensed photography. Do not
    present AI-generated images as documentary photos of real places.
10. Do not show image-source captions such as "Image taken from...",
    "Source: ...", or "Photo credit..." in public-facing page copy.
    Maintain a private asset/licensing manifest. If an image license
    requires visible attribution, select a different image or comply
    with its terms; never ignore a license.
11. English is served at `/`; Italian is served at `/it/`. Italian pages
    must be naturally localized, not machine-translated word-for-word.
    Only create an Italian counterpart when it contains equivalent
    useful content.
12. Canonical URLs, language alternates, sitemap entries, breadcrumbs,
    and internal links must be consistent.
13. Do not commit, deploy, delete integrations, change secrets, or alter
    operational backend/CRM behavior without explicit authorization.
14. Do not create a public page that promises a service the business
    cannot actually arrange. Where availability has not been verified,
    keep it as a research item, not a published landing page.
15. Do not use "SEO score" or keyword density as a substitute for
    quality.

## 3. Geographic scope: Rome and Lazio

### Core destination

-   Rome

### Rome airports

-   Leonardo da Vinci--Fiumicino Airport (FCO)
-   Ciampino--G. B. Pastine International Airport (CIA)

Verify official names, codes, terminal/pickup rules, road access, and
current airport guidance before writing or publishing operational
claims.

### Cruise port

-   Port of Civitavecchia

Distinguish the port from Rome itself. Explain the approximate geography
and the need to confirm the exact terminal, pickup point, passenger
meeting instructions, and destination. Never claim a driver can access a
restricted terminal/pier unless verified.

### Railway stations to assess

-   Roma Termini
-   Roma Tiburtina
-   Roma Ostiense
-   Roma San Pietro
-   Other stations only when there is demonstrable traveler demand and
    useful, unique information.

Verify station names, access and pickup instructions. Avoid treating
every station as a high-priority standalone page automatically.

### Rome districts / accommodation areas to assess

-   Historic centre / Centro Storico
-   Termini / Esquilino
-   Vatican / Prati
-   Trastevere
-   Monti
-   EUR
-   Other districts only when relevant to travelers and supported by
    specific information.

District pages should explain transfer logistics, not simply repeat
"private transfer in \[district\]" with swapped names.

### Day-trip and nearby destination candidates

Research and prioritize relevant destinations such as Tivoli, Castelli
Romani, Ostia, Orvieto, and other genuinely appropriate routes. Do not
assume all are currently offered. Confirm operational capability and the
real travel use case first.

### Intercity route candidates

Assess routes such as: - Fiumicino Airport ↔ Rome - Ciampino Airport ↔
Rome - Rome ↔ Civitavecchia cruise port - Fiumicino Airport ↔
Civitavecchia cruise port - Rome ↔ Florence - Rome ↔ Naples - Rome ↔
Amalfi Coast gateways - Rome ↔ other high-intent Italian destinations,
subject to verified availability.

These are candidates, not an automatic publishing list. Prioritize by
demand, user intent, operational capability, and whether a distinct
route page can offer useful information.

### Business, event, and wedding travel

Research relevant venue and area needs, such as convention/exhibition
locations, conference venues, wedding venues, villas, and event spaces.
Do not create venue pages without accurate, current, useful information
and a real transfer use case. Do not imply official affiliation with
venues.

## 4. Proposed URL architecture

Use one consistent, readable URL system. The following is a proposal to
validate against the existing project before implementation.

-   Rome destination hub: `/destinations/rome/`
-   Fiumicino Airport hub: `/airports/rome-fiumicino/`
-   Ciampino Airport hub: `/airports/rome-ciampino/`
-   Civitavecchia cruise port hub: `/cruise-ports/civitavecchia/`
-   Rome hotel transfers: `/destinations/rome/hotel-transfers/`
-   Rome train station transfers:
    `/destinations/rome/train-station-transfers/`
-   Rome business transfers: `/destinations/rome/business-transfers/`
-   Rome event transfers: `/destinations/rome/event-transfers/`
-   Rome wedding transfers: `/destinations/rome/wedding-transfers/`
-   Rome day trips/private tours: `/destinations/rome/day-trips/`
-   Fiumicino to Rome: `/routes/fiumicino-airport-to-rome/`
-   Ciampino to Rome: `/routes/ciampino-airport-to-rome/`
-   Rome to Civitavecchia: `/routes/rome-to-civitavecchia/`
-   Fiumicino to Civitavecchia:
    `/routes/fiumicino-airport-to-civitavecchia/`
-   Rome to Florence: `/routes/rome-to-florence/`
-   Rome to Naples: `/routes/rome-to-naples/`

Do not publish all these URLs automatically. First evaluate demand,
distinctiveness, service availability, and content readiness. If the
current project has an established URL convention, document the decision
and use one consistent scheme rather than mixing patterns.

English route: `/.../` Italian route: `/it/.../`

For Italian routes, use natural Italian slugs where the existing routing
strategy supports them consistently. Do not invent a translated route
that has no Italian page. The language switch should point to the actual
counterpart when available and otherwise return the user to the
corresponding language hub.

## 5. Page inventory and page-selection gate

Every proposed page must have a record in the master inventory with:

-   Stable page ID
-   English title and URL
-   Italian title and URL, if approved
-   Page type
-   Parent region/city/transport hub
-   Primary user intent
-   Secondary questions to answer
-   Target audience / traveler scenario
-   Service availability status and verification source/date
-   Required unique facts and content outline
-   Primary image and private asset-manifest reference
-   Inbound-link targets
-   Outbound-link targets
-   Canonical and hreflang status
-   Schema types, if applicable
-   Priority, owner, status, last-reviewed date
-   QA results and publication decision.

Use these statuses: `research`, `proposed`, `approved`, `drafting`,
`content-QA`, `technical-QA`, `ready`, `published`, `needs-update`,
`noindex-review`, `retired`.

### Standalone page decision

Publish a standalone URL only if all are true: 1. There is a distinct
and useful search/user intent. 2. The page can provide meaningfully
unique content beyond the destination name. 3. The service or route is
genuinely supported or can be represented accurately as an enquiry
subject to confirmation. 4. There is sufficient verified information,
imagery, and practical guidance. 5. It will have a clear place in the
internal-linking architecture. 6. It does not duplicate another page's
intent or content. 7. It has a useful next action for the visitor.

If not, merge the topic into the best parent page or keep it in the
backlog.

## 6. Page-type standards

### A. Destination hub

Purpose: explain the destination's transfer context and route users to
the most relevant service and transport pages.

Must include: - A destination-specific opening that states what the page
covers. - Original, verified practical information about arrival and
local transfer needs. - Links to applicable airports, port, stations,
hotel areas, day trips, and route pages. - Relevant traveler
scenarios. - Destination-specific FAQ. - A useful quote/enquiry CTA,
only if the quote flow is real. - Contextual links to nearby
destinations and national service pages.

Do not use the same section order, hero format, card arrangement, or
number of sections for every city.

### B. Airport hub

Must include: - Official airport name and IATA code. - Accurate location
context and the destinations served. - Verified arrival/pickup
information and a clear instruction to confirm exact meeting
arrangements. - Links to Rome and relevant city/destination pages. -
Relevant onward route pages. - Practical information about luggage,
group size, arrival delays, flight details, accessibility, child seats,
and vehicle requests only where the service can support them. - FAQ with
concise, accurate answers. - Sources for time-sensitive airport rules in
the private research log.

Do not invent terminal pickup rules, fixed journey durations, parking
rules, or included waiting time.

### C. Cruise port hub

Must include: - Correct port name and geographic relationship to Rome. -
Clear distinction between the port and Rome city. - Need to verify ship,
terminal, disembarkation time, meeting point, luggage, and onward
destination. - Links to Rome, relevant airports, and port-route pages. -
Useful cruise passenger scenarios, including airport-to-port and
port-to-city transfers where supported. - Accurate FAQ and no guarantee
of ship/terminal access.

### D. Railway station hub

Must include verified station identity, location context, relevant
city/hotel destinations, pickup logistics that can be confirmed, onward
routes, and useful station-specific FAQs. Do not clone airport-page
content.

### E. City service page

Examples: hotel, business, wedding, event, day-trip services.

Must define the service, who it serves, how the transfer typically
works, what information is needed for an enquiry, important constraints,
relevant locations/route options, and a service-specific FAQ. Publish
only when there is a credible service proposition and enough unique
information.

### F. Route page

Must include: - Exact start and destination, including common naming
variants where useful. - Who commonly needs the journey and in which
circumstances. - Practical pickup/drop-off considerations for both
endpoints. - Route-specific constraints and confirmation points. - A
transparent statement that travel time and price depend on traffic,
exact addresses, date/time, vehicle, and service scope unless a verified
quote says otherwise. - Links to both endpoint pages, related routes,
the city/airport/port hubs, and a relevant service page. -
Route-specific FAQs. - No fabricated price, distance, duration, or
availability.

### G. Guide / informational article

Must answer one clear question or solve one practical problem. It should
be informational rather than a disguised duplicate sales page. It can
link to relevant service/route pages where they genuinely help.

## 7. Unique page design: consistent brand, distinct composition

**The site must not look like a page-template factory.** Use the same
brand typography, color tokens, spacing rules, accessible components,
global header/footer, button styles, and interaction behavior. But each
page must have its own design composition and information hierarchy.

A design is not unique merely because the hero photo or heading changed.
Vary the layout and section patterns according to the page's purpose.

Possible composition patterns: - Destination hub: editorial panoramic
hero, location overview, map-like route index, district guide, transport
options. - Airport page: airport-focused split hero, arrival workflow,
destination matrix, practical pickup checklist, route comparison. -
Cruise port page: port-to-city orientation, terminal/meeting-point
guidance, journey options, cruise-day checklist. - Station page: compact
arrival-led hero, station orientation, hotel/area links, rail-to-road
transition steps. - Route page: route-led hero, endpoint comparison,
trip-planning timeline, constraints and FAQs. - Wedding page: elegant
editorial photography, guest-movement planning, venue logistics, group
coordination. - Business/event page: event-arrival planning, group and
schedule considerations, venue access checklist, return-transfer
planning. - Day-trip page: itinerary timeline, stop options, time
allocation caveats, pickup/drop-off logistics. - Hotel-area page:
neighborhood-focused editorial layout, access constraints, landmark/area
map-like module, airport/port connections.

These are starting ideas, not rigid templates. The designer/agent must
choose the best structure for each individual page and document why it
fits.

### Design acceptance test

Before approving a new page, compare it visually and structurally with
the other pages in its cluster. If the pages have the same sequence of
hero → three cards → icon grid → generic benefits → FAQ → CTA, redesign
at least the section composition and visual treatment.

Keep consistent: - Typography and type scale - Brand color palette and
contrast - Global header and footer - Spacing and responsive
principles - Focus states, buttons, forms and accessibility behavior -
Image quality and brand tone

Vary thoughtfully: - Hero layout and image crop - Section order - Number
and size of columns - Editorial vs. functional sections - Use of
timelines, tables, lists, comparison panels, image/text features, route
indexes, process diagrams, or FAQs - Background rhythm and whitespace -
Information density based on user intent - Supporting image placement
and aspect ratios

Do not create needless visual variation that harms usability. Distinct
design means purpose-led composition, not random styling.

## 8. Image sourcing and use

Use authentic, relevant, high-quality photographs that accurately
represent the location or service context.

Preferred process: 1. Decide what the image must communicate. 2. Find a
suitable image from an authorized source: official destination/transport
authority assets where permitted, Wikimedia Commons after checking the
exact file license, or reputable stock libraries with terms that permit
the intended use. 3. Verify the actual file, subject, location,
author/rights holder, license, permitted use, and any attribution
requirements. 4. Save the source URL, license details, date checked, and
file path in the private asset manifest. 5. Download/process images into
project-owned assets when permitted. 6. Optimize formats and dimensions;
use responsive image sizes. 7. Write alt text that describes the image's
meaningful content, not the source or SEO keywords. 8. Check that the
crop does not imply an inaccurate terminal, venue, hotel, or pickup
point.

### Image rules

-   Never use an image simply because it contains an Italian landmark;
    relevance to the page matters.
-   Never imply a photograph shows a specific hotel, terminal, wedding
    venue, vehicle, driver, or service unless verified.
-   Never present AI-generated imagery as a real photograph of Rome, an
    airport, port, hotel, or event.
-   Avoid repeated hero images across many pages. A shared image can be
    reused only when genuinely appropriate, but priority pages should
    have their own meaningful visual identity.
-   Do not stretch low-resolution images or use the same crop for every
    page.
-   Optimize hero image loading and dimensions; lazy-load below-the-fold
    images.
-   Use meaningful alt text for informative images. Use empty alt text
    for purely decorative images.
-   Do not stuff alt text with keywords.
-   Do not show public captions saying "Image taken from...", "Source:
    ...", or "Photo credit...". Keep provenance and license details in
    an internal asset manifest. If a license requires visible
    attribution, do not omit it; choose an alternative image if the
    desired no-caption design cannot meet that license.
-   Add visible captions only when they convey useful editorial
    information, such as identifying a landmark, not for source
    disclosure.
-   No broken-image placeholders on production pages.

### Private asset manifest fields

`asset_id`, `page_id`, `local_path`, `subject`, `location_verified`,
`source_url`, `creator`, `license_name`, `license_url`,
`commercial_use_allowed`, `modification_allowed`,
`attribution_required`, `attribution_text`, `date_checked`, `alt_text`,
`crop_notes`, `review_status`.

## 9. Content research and writing standard

Every page must be researched before writing. Use reliable sources
appropriate to each claim: - Official airport, port, railway,
municipality, tourism-board, and venue websites for operational/location
facts. - Authoritative maps and official transport information for
geography and access. - Licensed/credible sources for images. -
First-party operational records or confirmed provider information for
actual services, vehicles, prices, pickup rules, and availability.

Keep an internal research log with claim, source URL, date checked, and
the page(s) using the claim. Recheck time-sensitive facts before
publication.

### Content must be useful, not padded

-   Start with the traveler's real question or scenario.
-   Give the answer early; add details and exceptions afterward.
-   Explain Rome-specific logistics rather than generic promises.
-   Use concrete, verifiable facts and explain uncertainty.
-   Clearly distinguish general travel information from confirmed
    service terms.
-   Use concise paragraphs, descriptive subheadings, lists, tables, and
    FAQs when each format improves comprehension.
-   Include original synthesis and practical guidance, not paraphrased
    source pages.
-   Avoid repetitive phrases like "best private transfer," "reliable and
    comfortable," and "seamless journey" on every page.
-   Do not claim "24/7," "licensed," "insured," "fixed price," "flight
    tracking," "free waiting," "professional drivers," "luxury fleet,"
    "child seats," or "guaranteed availability" unless verified and
    approved.
-   Never invent testimonials, customer counts, star ratings, awards,
    partnerships, or business addresses.
-   Do not fabricate travel times, distances, prices, terminal rules,
    opening hours, venue details, or hotel information.
-   Explain where price or availability depends on date, exact
    addresses, vehicle, group size, traffic, and provider confirmation.
-   Use a clear CTA that matches the real enquiry/booking flow.

### English and Italian

English `/` and Italian `/it/` must both be maintained. - Italian copy
must be written naturally for Italian readers. - Localize titles,
descriptions, headings, body copy, CTA labels, forms, FAQs, breadcrumbs,
structured data, and navigation. - Keep facts consistent across
languages. - Localize units, terminology, place names, and phrasing
appropriately. - Do not create a low-quality translation simply to have
two URLs. - Use `hreflang` alternates only for genuine equivalents; use
correct self-referencing canonicals. - Provide `x-default` only if it
accurately reflects the language-selection/default URL strategy. -
Language switch should open the same page in the other language when
that counterpart exists; otherwise go to the relevant language hub. - Do
not mix English and Italian in one page unless a specific proper name or
official label requires it.

## 10. Internal linking rules

Every published page must have an explicit linking plan before release.

### Required link relationships

-   Homepage → national service hubs, destination directory, and
    priority destination hubs.
-   Lazio hub (if created) → Rome, relevant towns, airports,
    Civitavecchia, and verified routes.
-   Rome hub → FCO, CIA, Civitavecchia, relevant stations, service
    pages, day trips, and route pages.
-   Airport page → Rome, relevant destinations, routes starting/ending
    at that airport, and practical guides.
-   Port page → Civitavecchia, Rome, relevant airports, and port-related
    routes.
-   Station page → Rome/district pages and relevant station routes.
-   Service page → relevant city, airport, port, station, and route
    pages.
-   Route page → both endpoint pages, related routes, relevant
    destination hubs, and service pages.
-   Guide → relevant service/route pages when they solve the reader's
    next question.
-   All pages → accurate breadcrumbs and a useful parent/hub link.

### Link quality

-   Use descriptive anchor text such as "private transfers from
    Fiumicino Airport to Rome" when natural.
-   Avoid repeating exact-match commercial anchors in every paragraph.
-   Link where it helps the user, not just to hit a link count.
-   Do not create automated sitewide link blocks containing dozens of
    irrelevant destinations.
-   Do not link to draft, deleted, redirected unnecessarily, or 404
    pages.
-   Do not make links dependent on JavaScript interactions only; use
    crawlable links.
-   Every important page should be reachable from at least one relevant
    hub and should not be an orphan.
-   Keep a graph or table of incoming/outgoing links and validate it
    programmatically.

## 11. Technical SEO and structured data

Implement only what the project architecture supports and verify it in
the rendered HTML.

-   One clear primary H1 per page, with logical heading hierarchy.
-   Unique title and meta description per page.
-   Correct canonical URL.
-   Correct `hreflang` alternates for English/Italian equivalents.
-   Correct sitemap entries for canonical, indexable, published pages
    only.
-   No draft, search/filter, internal utility, or duplicate URL in the
    XML sitemap.
-   Valid robots directives and no accidental `noindex`.
-   Open Graph metadata and accurate share images.
-   Descriptive page URLs and crawlable internal links.
-   Correct status codes, redirects, trailing slash policy, and no
    broken internal links.
-   Breadcrumbs in the UI; BreadcrumbList structured data when accurate
    and appropriate.
-   Organization/LocalBusiness markup only with truthful, supported
    business details. Do not fabricate a physical office or location.
-   Service, FAQ, or other structured data only when the type is
    appropriate and the visible content satisfies current search-engine
    guidelines. FAQ markup does not guarantee a rich result.
-   Do not add ratings/reviews schema without legitimate visible reviews
    and a valid basis.
-   Do not create fake location pages or pretend the business has a
    staffed office in each city.
-   Validate schema syntax and the page's eligibility; structured data
    must match the visible page.
-   Ensure the site renders core content without requiring a search
    engine to execute fragile client-side interactions.

## 12. AEO and GEO answer quality

For each page, list 5--10 real questions the visitor may have. Answer
them in the main content and/or FAQ where appropriate.

Examples: - Which airport serves Rome? - What information is needed to
arrange an airport pickup? - How should a cruise passenger confirm the
meeting point at Civitavecchia? - Can a transfer be arranged between
Fiumicino Airport and the cruise port? - What details should a traveler
provide for a hotel pickup? - What factors affect journey duration and
price? - What is the difference between Fiumicino and Ciampino for a
particular itinerary?

Answers must be direct, accurate, and appropriately qualified. Do not
create dozens of trivial FAQs with the same answers across pages. Use
page-specific questions. Do not claim a special schema type or AI markup
is a ranking shortcut.

## 13. Accessibility, performance, and UX

-   Responsive layouts must work at 320, 360, 390, 768, 1024, 1280, and
    1680 px.
-   Meet WCAG AA contrast for normal text and controls.
-   Keyboard-accessible menus, language switch, buttons, forms, and
    accordions.
-   Visible focus states, correct labels, helpful validation, semantic
    landmarks, and sensible reading order.
-   Do not encode important text in images.
-   Avoid layout shifts and oversized hero downloads.
-   Optimize local images, use responsive sizes, and lazy-load
    below-fold assets.
-   Respect reduced-motion preferences.
-   Ensure the mobile experience is not merely a compressed desktop
    layout.
-   Check font loading, contrast, image cropping, tap targets, and CTA
    clarity.

## 14. Page-specific design differentiation process

Before building each page: 1. Review the page intent and the pages
already published. 2. Write a short design brief: audience, key
question, key content, primary action, and best visual narrative. 3.
Sketch a section sequence unique to that page. 4. Select image subject,
crop, and layout based on the content. 5. Choose appropriate modules; do
not blindly reuse the same cards or icon grids. 6. Compare the proposed
page outline against existing page outlines. 7. If section order and
composition are too similar, revise before coding. 8. Reuse
design-system components only as building blocks, not as a complete page
template. 9. Record the chosen composition and why it suits the intent.
10. Run visual QA against all other pages in the cluster.

Do not intentionally make pages confusing or inconsistent to appear
"unique." The goal is genuine editorial and functional differentiation.
Search engines do not penalize a site merely for consistent design; the
risk comes from low-value, duplicative, doorway-like content and
manipulative mass production. Different layouts support usability and
page-specific storytelling, but unique design alone does not guarantee
rankings.

## 15. Rome cluster implementation sequence

### Gate 0 --- Inspect the current project

-   Inspect framework, routing, components, styles, assets, metadata,
    sitemap, current homepage, quote flow, and any integrations.
-   Preserve existing working functionality and environment
    configuration.
-   Report current routes and technical risks before changes.
-   Do not delete or replace the homepage or global design without
    authorization.

### Gate 1 --- Research and inventory

-   Build the complete proposed Rome/Lazio page inventory.
-   Verify transport points, destinations, operational claims, service
    availability, and image rights.
-   Score each page for intent, distinctiveness, evidence, business
    relevance, and linking role.
-   Mark each as `publish`, `merge into parent`, or `defer`.
-   No bulk generation yet.

### Gate 2 --- Information architecture

-   Approve URL conventions, parent/child relationships, English/Italian
    mapping, breadcrumbs, and link graph.
-   Produce a route/link table before implementing pages.
-   Identify any existing route conflicts and document
    migration/redirect decisions.

### Gate 3 --- Build the Rome core

Recommended starting sequence: 1. Rome destination hub. 2. Fiumicino
Airport page. 3. Ciampino Airport page. 4. Civitavecchia cruise port
page. 5. Rome railway-station content/page(s), based on evidence. 6.
High-value airport/port route pages that are operationally supported. 7.
Hotel-area, business, event, wedding, and day-trip pages only where
distinct and justified. 8. Relevant practical guides.

The sequence may change based on the actual project and confirmed
services. Do not treat it as an instruction to publish every candidate
page.

### Gate 4 --- Italian localization

-   Create the Italian counterpart for each approved page with natural
    copy and matching user intent.
-   Verify metadata, canonical, hreflang, breadcrumbs, navigation, CTA
    and sitemap.
-   Do not release half-translated pages.

### Gate 5 --- Content and visual QA

-   Human-review factual claims and uniqueness.
-   Compare page compositions visually.
-   Check image provenance/license manifest and visible captions.
-   Check links, CTA behavior, forms and mobile layouts.

### Gate 6 --- Technical QA and launch approval

-   Run build, TypeScript, lint, route checks, link checks, image
    checks, metadata/canonical/hreflang checks, schema validation,
    accessibility checks and responsive QA.
-   Confirm no placeholder text, dead links, fake claims, duplicated
    titles, accidental noindex, missing images, or orphan pages.
-   Present a report and wait for authorization before deployment or
    commit.

### Gate 7 --- Expand only after approval

Do not begin the next city/region cluster until Rome's pages pass all
quality gates and the user approves the results.

## 16. Acceptance checklist for every page

### Intent and content

-   [ ] Clear, distinct user intent.
-   [ ] Useful content based on research.
-   [ ] No city-name-swapped boilerplate.
-   [ ] No fabricated availability, price, duration, reviews,
    credentials, or service claims.
-   [ ] Important questions answered early.
-   [ ] CTA matches the real booking/enquiry process.

### Design

-   [ ] Same approved brand system.
-   [ ] Distinct section composition from sibling pages.
-   [ ] Page-specific image and visual narrative.
-   [ ] Responsive and accessible.
-   [ ] No repeated generic section stack unless justified by intent.

### Images

-   [ ] Correct location/context.
-   [ ] License and usage verified.
-   [ ] Manifest completed.
-   [ ] Alt text describes the image, not the source.
-   [ ] No public source caption.
-   [ ] Required attribution not omitted.
-   [ ] Optimized file and responsive loading.

### Links

-   [ ] Parent hub link.
-   [ ] Relevant transport/service/route links.
-   [ ] Relevant contextual links in body copy.
-   [ ] No dead or draft links.
-   [ ] No orphan page.
-   [ ] Breadcrumbs accurate.

### SEO/AEO/GEO

-   [ ] Unique title and description.
-   [ ] One clear H1 and logical headings.
-   [ ] Canonical correct.
-   [ ] hreflang correct when counterpart exists.
-   [ ] Sitemap/robots correct.
-   [ ] Structured data truthful and valid.
-   [ ] FAQs are useful and not duplicated filler.
-   [ ] Page provides direct, self-contained answers.

### Technical

-   [ ] Build passes.
-   [ ] TypeScript/lint pass.
-   [ ] No console errors or broken images.
-   [ ] Mobile QA completed.
-   [ ] Accessibility and performance reviewed.
-   [ ] CTA/form behavior tested.
-   [ ] Final status recorded in inventory.

## 17. Required deliverables before scaling beyond Rome

1.  `ROME_CLUSTER_ARCHITECTURE.md` --- this document.
2.  `rome-page-inventory.csv` or equivalent structured data.
3.  `rome-internal-link-map.csv` or equivalent graph.
4.  `rome-content-briefs/` --- one research brief per approved page.
5.  `asset-manifest.csv` --- source, license, attribution requirements
    and alt text.
6.  `rome-design-differentiation.md` --- layout decisions for each page.
7.  `rome-qa-report.md` --- tests, factual checks, issues and launch
    recommendation.
8.  English/Italian URL map and hreflang audit.

## 18. Final principle

Build a genuinely useful Rome transfer cluster first. Every URL should
serve a real traveler need; every factual claim should be supportable;
every image should be legitimate; every link should help the visitor;
and every design should be shaped by the page's purpose. Scale only
after the first cluster demonstrates that the system is accurate,
distinctive, maintainable, and technically sound.
