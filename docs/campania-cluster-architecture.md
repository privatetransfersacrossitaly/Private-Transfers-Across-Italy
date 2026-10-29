# Campania Cluster Architecture & Planning

**Project:** Private Transfer Across Italy
**Prepared:** 27 October 2026
**Status:** Planning proposal. Audit and inventory complete; implementation
only after explicit approval.

This document records the architecture the cluster would follow. The evidence
behind it is in `docs/campania-source-verification.md`; the staging argument is
in `docs/campania-phase1-recommendation.md`.

---

## 1. Scope

A bilingual English/Italian private-transfer cluster for Campania. The brief
names eight destinations — **Naples, Sorrento, Positano, Amalfi, Ravello,
Salerno, Pompeii, Caserta** — and five priorities: **Naples and Salerno
airports, the Naples cruise port, Amalfi Coast hotel transfers, private tours,
and transfers to Rome.**

These are candidates. Three survive Phase 1 as build-now; most are deferred for
want of research; three families are rejected outright on evidence.

---

## 2. The three facts that shape the architecture

### 2.1 Naples Capodichino closes in November 2026

The airport operator's own homepage carries the headline *"Naples airport
closed for runway requalification (November 2026)"*, dated 19 October. Today is
27 October.

**This inverts the obvious priority order.** The brief lists Naples airport
first; the evidence puts it last among the airports. A NAP page published this
week would lead on a closure it cannot date from the operator, describe a shut
airport for a month, and be largely obsolete by December.

So the cluster leads with **Salerno**, which is open, and lets the **Naples
hub** carry a short sourced notice about the closure — a page that outlives
November, where a NAP page would not.

### 2.2 Naples does not have "a port"

The waterfront holds several distinct facilities: the **Stazione Marittima**
for cruises, **Calata Beverello** for hydrofoils, **Calata Porta di Massa** for
ferries, and **Immacolata Vecchia** for larger ferries. A request for "the port
of Naples" is ambiguous in a way that can cost a sailing.

This is the same class of problem as Venice's road/water split and Ravenna's
Porto Corsini, and this site already has a shape for it.

### 2.3 The site is already on record as not being a tour operator

The homepage states it twice, in both languages:

> *"We drive it; we are not a tour operator and we do not sell admissions."*
> *"We drive. We are not a tour operator, we do not sell tickets or
> admissions, and nothing here is an offer of a guided visit."*

**The "private tours" priority is therefore rejected**, not deferred. Pompeii
and Caserta survive as transfer endpoints — places a car is driven to — which
is both honest and what the site can actually do.

---

## 3. Cluster structure

### Naples city hub — *build*

A gateway chooser. Its job is to separate the airport, the cruise quay, the
hydrofoil quay and the ferry quay, and to send a reader to the one their
journey actually ends at. It carries the airport-closure notice, attributed,
with the operator linked.

### Salerno Costa d'Amalfi Airport — *build*

Operated by GESAC, the same company that runs Naples — the structural echo of
Toscana Aeroporti and SAVE elsewhere in this project. Its verified and
genuinely useful fact: **the passenger terminal closes 22:30–05:00**, except
for exceptional delays. That decides what a night arrival can do, and no other
airport page here has an equivalent.

### Naples cruise terminal at the Stazione Marittima — *build*

The page that tells the quays apart. It must publish **no pier figures** (the
available ones are promotional) and **no vehicle access rule** (none was
found).

### Naples Capodichino — *defer*

See §2.1. The first page to revisit, once the operator publishes dates or the
airport reopens.

### Destinations: Sorrento, Positano, Amalfi, Ravello, Salerno city — *defer*

No primary research was performed on any of them. **Positano is specifically
flagged**: its vehicle access restrictions are widely understood and entirely
unverified here, and this project's Florence and Bologna experience shows how
often the municipal source proves unreadable.

### Pompeii — *defer, strongest Stage 2 candidate*

The park names **Piazza Esedra, Porta Marina and Piazza Anfiteatro**, so "take
me to Pompeii" is an ambiguous instruction — the page shape this site does
best. Blocked on one specific fact: those three are verified as *ticket-office
locations*, not as vehicle-reachable entrances, and the park's "How to get
there" page was not retrieved.

### Caserta — *defer*

Address verified. Nothing about arriving by car is.

### Hotel pages — *reject at this stage*

Bologna established the cost of a defensible hotel page: each address confirmed
on the hotel's own site, plus a property-specific access fact that differs from
its neighbours. **Zero Campania hotels have been researched**, and no
destination page exists to parent them.

### Routes — *all deferred*

The shared route type requires a `PageId` at both ends. No far endpoint exists.
**Reverse-direction pairs are rejected as a default**: the Bologna Stage 4
audit measured 76–82% direction-neutral content on live route pages.

### Naples ↔ Rome — *defer, with a specific warning*

Cannibalisation risk against ten live Rome pages, plus unverified
long-distance coverage. Needs an owner decision before it is planned.

---

## 4. Technical conventions

No new routing pattern. The cluster uses the four existing families, the
shared `PageChrome` / `Endpoint` / `RoutePage` types, the shared
`RoutePageView`, and the registry-derived canonical, hreflang, breadcrumb and
sitemap helpers. Slugs and the reasoning behind them are in
`docs/campania-url-map.md`.

Structured data stays as the site already emits it — `Organization`,
`WebSite`, `WebPage`, `BreadcrumbList` and an optional `FAQPage`, and nothing
else. No `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, address,
telephone or price.

**Design**: reuse the existing 14 heroes and 16 blocks. Differentiate by
composition, not by swapping a heading and a photograph. The gateway chooser,
the terminal-closure fact and the quay distinction each want a different shape.

**Images**: plan text-led. The site's only Campania photograph already holds
its one permitted placement on the homepage, and no image here appears twice.

---

## 5. Factual guardrails

Never invent or imply without evidence: provider coverage, fares, distances,
road times, availability, pickup points, waiting rules, permits, vehicle
capacity, flight or ship tracking, guarantees, reviews, ratings, or hotel
partnerships.

Specific to this cluster:

- **No closure dates** attributed to the Naples operator beyond the month it
  published.
- **No airline list** for the closure — the available reports contradict each
  other.
- **No pickup point** at NAP, QSR or any Naples quay. None is published.
- **No pier counts, lengths or depths** for the Naples port.
- **No claim that Salerno is the official alternative** during the closure —
  neither operator's site says so.
- **No ticket, admission, guide or itinerary offer**, anywhere.
- Public transport facts and third-party services are context, never evidence
  of this provider's capability.

---

## 6. Deferred project-wide issues

Tracked, not addressed here: `NEXT_PUBLIC_SITE_URL` unset (site-wide launch
blocker); `QUOTE_ENDPOINT_URL` unset; the Florence ZTL link and private-hire
question; the archived Toscana Aeroporti charter provenance; the Peretola
runway figure; the Comune di Bologna ZTL rules; whether the Bologna hotels'
permissions extend to our vehicles.

**New Campania items for the same register**: the Naples closure dates; the
403 on the Naples terminal operator's site; whether Pompeii's three named
locations are vehicle-reachable; Positano's access rules.

---

## 7. Gates

- **Gate 0 — audit.** Complete. `docs/campania-phase0-audit.md`.
- **Gate 1 — research and architecture.** Complete, awaiting approval.
  This document, the source verification, the inventory, the link map, the URL
  map and the recommendation.
- **Gate 2 — implementation.** Not started. Requires explicit approval.

No commit, push, deployment, environment, DNS, API, CRM or quote change at any
gate without explicit authorisation.
