# Campania cluster — source verification

Every claim a Campania page could rest on, its source, publisher, access date,
what it actually supports, and its limitations.

**All sources accessed 27 October 2026.** No page has been built.

---

## 0. The headline finding

**Naples Capodichino is closing for runway works in November 2026, and the
airport operator says so on its own homepage.** Today is 27 October 2026.

That single fact reorders the whole cluster. It is set out in §1, and its
architectural consequence is argued in `docs/campania-phase1-recommendation.md`.

---

## 1. Naples International Airport (NAP) · status: **operating, closing imminently**

**Publisher: GE.S.A.C. S.p.A. (GESAC)**, the airport operator.
`https://www.aeroportodinapoli.it/en/`

| # | Claim | Status | Basis and limitation |
|---|---|---|---|
| **N1** | **The operator announces: "Naples airport closed for runway requalification (November 2026)"**, a news item dated **19 October** | **VERIFIED — operator's own homepage** | The headline is published; **the item carried no body text and no dates** in what could be read. The month is operator-confirmed; the dates are not |
| N2 | The closure runs **1–30 November 2026**, a full suspension of commercial flights for a single-runway and taxiway rehabilitation | **PARTIAL — secondary only, but consistent** | Multiple independent travel and aviation outlets agree on the dates. **No official page stating them could be retrieved.** Must be attributed as reported, not as operator-confirmed, or omitted |
| N3 | The work was moved from an earlier window after an ENAC/stakeholder meeting | partial — secondary | Reports disagree on the original window |
| N4 | Airlines are relocating to Salerno; some are cancelling Naples services | **partial, and contradictory** | One report names easyJet, Vueling, Iberia and flydubai relocating; another names Lufthansa, Austrian and Swiss cancelling. **No airline list may be published** |
| N5 | **"Naples Airport is open from 3:30 to 22:30"** — a nightly closure in normal operation | **VERIFIED — operator** | Stated on the operator's homepage |
| N6 | A 24-hour general strike on **30 October 2026** | recorded, **not for use** | Volatile operational notice |
| N7 | ENAV network disruptions affecting Naples and Salerno, 16 October | recorded, not for use | Headline only, no body text |
| N8 | The airport is **inside the Naples urban area** | **VERIFIED — already published on this site's own homepage**, and consistent with the operator | `content/home/en.ts:205` |
| **N9** | **Where a private-hire vehicle collects passengers** | **NOT ESTABLISHED** | The operator's site has "By taxi", "By bus", "By car" and "Car rental" links but **no detail and no pickup point** in what could be read. Same gap as Pisa, BLQ and every other airport in this project |

**Footer anomaly:** both GESAC sites carry `©Copyright 2022`, out of step with
their own 2026 news items. Currency cannot be inferred from the footer.

### What follows

**N1 is publishable; N2 is not, as fact.** A Naples airport page written this
week would have to lead with a closure whose dates it cannot source precisely,
and would be substantially obsolete by December. That is the argument for
deferring the NAP page and putting a short, sourced notice on the Naples hub
instead — see the recommendation document.

---

## 2. Salerno Costa d'Amalfi Airport (QSR) · status: **VERIFIED OPERATING — the critical check passes**

**Publisher: GE.S.A.C. S.p.A.** — *the same operator as Naples.*
`https://www.aeroportosalerno.it/en/`

The brief required this check before any Salerno airport page could be
recommended. **It passes.**

| # | Claim | Status | Basis and limitation |
|---|---|---|---|
| S1 | Official name: **"Salerno Costa d'Amalfi and Cilento Airport"** | **VERIFIED — operator** | As the operator writes it |
| S2 | **Operated by GESAC**, the Naples operator | **VERIFIED — operator** | Footer: "©Copyright 2022 GE.S.A.C. S.p.a. NAPOLI". One company runs both Campanian airports — the structural parallel to Toscana Aeroporti in Tuscany and SAVE in the Veneto |
| S3 | **The airport is currently operating and expanding.** The operator's own news lists *"Aeroitalia Takes Off from Salerno with Its New Operational Base"*, *"Wizz Air Expands in Naples and Salerno"* and *"Aeroitalia: four new international routes from Salerno"* | **VERIFIED — operator** | Headlines on the operator's site; **no route list, schedule or date may be taken from them** |
| S4 | **"Passengers' Terminal … is closed from 22:30 to 5:00"**, except for exceptional flight delays, for security reasons | **VERIFIED — operator** | A genuinely useful operational fact for a transfer: a night arrival cannot wait inside |
| S5 | IATA code **QSR** | **partial — not stated on the operator's site**; secondary only | Must not be attributed to the operator |
| S6 | Aeroitalia launching 19 weekly domestic frequencies from 22 May 2026; Iberia selling Madrid from November 2026 | **partial — secondary** | Schedule detail; volatile; **not for publication** |
| S7 | A December 2025 report described a downturn and cancelled flights | **recorded, contradictory** | Sits against S3. Neither is publishable as a characterisation of the airport's health |
| S8 | The airport is the designated alternative during the Naples closure | **NOT ESTABLISHED on either operator's site** | Secondary reports say so; **the Salerno site does not mention the Naples closure at all** |
| **S9** | **Where a private-hire vehicle collects passengers** | **NOT ESTABLISHED** | Menu links for "By car", "By bus", "By taxi" exist; no detail could be read |

**Verdict on the critical check: Salerno Costa d'Amalfi is a current,
operating, expanding airport run by a named operator, and is a legitimate
subject for a page.** S4 alone gives it something specific to say.

---

## 3. Naples cruise port · status: **the port is not one place**

| # | Claim | Status | Basis and limitation |
|---|---|---|---|
| **P1** | **Naples has several distinct maritime facilities, not one "port"**: the **Stazione Marittima** (cruise), **Calata Beverello** (hydrofoils and fast ferries), **Calata Porta di Massa** (ferries), and **Immacolata Vecchia** (larger ferries) | **PARTIAL — consistent across sources, not confirmed by the operator's own site** | This is the most consequential fact for the cluster after the airport closure |
| P2 | The cruise terminal is operated by **Terminal Napoli S.p.A.** | partial — secondary | The operator's own site could not be read (see below) |
| P3 | Address: **Stazione Marittima, Molo Angioino, 80133 Napoli** — in front of Piazza Municipio, at the foot of the Maschio Angioino | partial — secondary | Plausible and consistent; **confirm before publishing** |
| P4 | Seven docking piers, 1,100 m total, 12 m depth | **recorded, NOT for use** | From a promotional operator profile. Approximate figures of exactly the kind this project does not publish |
| **P5** | **Where a car may collect or set down a cruise passenger inside the port** | **NOT ESTABLISHED** | No source read establishes any vehicle access rule. The same gap as Civitavecchia and Porto Corsini |

**Blocked source:** `https://www.terminalnapoli.it/en/` returned **HTTP 403
Forbidden** to automated access. Recorded as a limitation; it should be opened
in a browser before any terminal page is written.

### Why P1 matters more than it looks

A passenger writing "take me to the port of Naples" may mean a cruise ship at
the Stazione Marittima, a hydrofoil to Capri from Beverello, or a car ferry
from Porta di Massa. **Those are different quays and different journeys.**
This is the same class of problem as Venice's road/water split and Ravenna's
Porto Corsini — and it is the strongest single argument for a Naples port page
in Stage 1.

---

## 4. Pompeii · status: **partial, and the ticket boundary is clear**

**Publisher: Archaeological Park of Pompeii, Ministry of Culture.**
`https://pompeiisites.org/en/`

| # | Claim | Status | Basis and limitation |
|---|---|---|---|
| **M1** | Three named locations — **Piazza Esedra, Porta Marina, Piazza Anfiteatro** | **VERIFIED as self-service ticket-office locations** | The site names them as ticket-office locations and refers separately to "the entrances". **It is NOT established here that each is a vehicle-reachable entrance** — that is the fact a transfer page would need, and it is not yet in hand |
| M2 | Tickets are sold online through **vivaticket**, described as the *"Official seller"*, and at the entrances | **VERIFIED — official** | Confirms that admissions are a third party's business, not ours |
| M3 | Timed entry slots from 16 March; a daily cap of **20,000 visitors**; personalised tickets from 15 November 2024 | **VERIFIED — official** | Useful context; a cap is a reason to arrive at a booked time, which is a transfer-relevant consequence |
| M4 | Address, driving directions, parking, coach drop-off | **NOT ESTABLISHED** | Not on the page read. A separate "How to get there" page exists at `/en/visiting-info/how-to-get-there/` and **was not retrieved** |

**M2 and M3 together define the honest scope**: this site can drive someone to
a named entrance for a booked time slot. It cannot sell the ticket, and the
homepage already says so twice.

---

## 5. Royal Palace of Caserta · status: **partial**

**Publisher: Royal Palace of Caserta, Ministry of Culture.**
`https://reggiadicaserta.cultura.gov.it/en/` — **© Copyright 2026**, the only
Campania source read with a current copyright year.

| # | Claim | Status |
|---|---|---|
| K1 | Address: **Piazza Carlo di Borbone, 81100 Caserta CE** | **VERIFIED — official** |
| K2 | Tickets are purchased separately; Groups and Schools have their own pages | **VERIFIED — official.** No prices read |
| K3 | Driving directions, parking, coach drop-off | **NOT ESTABLISHED** — a "How to get here" page exists and was not retrieved |
| K4 | Opening times | **NOT ESTABLISHED** — linked, not listed. One early-closure notice was dated 5 November 2025 and is stale |
| K5 | Guided tours | not mentioned on the page read |

---

## 6. Not researched at all

**Six of the eight destinations the brief names have had no primary research
in this pass**, and are inventoried accordingly:

**Sorrento, Positano, Amalfi, Ravello, Salerno (the city), Naples (the city
itself).**

Positano deserves a specific flag: it is widely understood to have severe
vehicle access restrictions, and **nothing about them has been verified here**.
No Positano page should be planned as build-ready without reading the comune's
own rules — the Florence and Bologna ZTL experiences in this project show how
often that source turns out to be unreadable.

Also not researched: regional transport operators (EAV / Circumvesuviana, SITA
Sud, Trenitalia regional), any hotel in Campania, and any road distance or
journey time anywhere in the region.

---

## 7. Provider capability · status: **unverified across the entire cluster**

As in Rome, Milan, the Veneto, Tuscany and Bologna, **no first-party record in
this repository establishes what this business can provide in Campania.**

| Proposed family | Verified? |
|---|---|
| NAP or QSR airport transfers | **No** |
| Naples cruise-port transfers | **No** |
| Amalfi Coast road transfers | **No** |
| Pompeii or Caserta drives | **No** |
| Naples ↔ Rome intercity | **No** |
| Hotel transfers anywhere in Campania | **No** |

**Four questions only the owner can answer**, and they gate the cluster:

1. Does the business serve Campania at all, and from where?
2. Does it serve the Amalfi Coast road — and is there any restriction on
   vehicle size or season it would want stated?
3. Can it meet a passenger at a Naples cruise quay, and does it know which
   quay rules apply?
4. Does it serve Naples ↔ Rome, which would overlap an existing cluster?

---

## 8. What no source established

- Any fare, duration or road distance anywhere in Campania.
- Where a private-hire vehicle collects passengers at **NAP** (N9), **QSR**
  (S9) or **any Naples quay** (P5).
- The **exact dates** of the Naples closure, from the operator (N2).
- Which airlines are affected by it (N4 — sources contradict each other).
- Whether Pompeii's three named locations are vehicle-reachable entrances (M1).
- Driving, parking or drop-off arrangements at Pompeii (M4) or Caserta (K3).
- Anything at all about Sorrento, Positano, Amalfi, Ravello or Salerno city.
- Any Campania hotel.
