# Bologna cluster — research log

Phase 1. Every claim a Bologna or Ravenna page could make, its source,
publisher, access date, and status: **verified**, **partial** or **blocked**.

**All sources accessed 27 October 2026** unless stated otherwise.

No page has been built. This log exists so the Phase 1 inventory's
`build` / `defer` decisions can be checked against evidence rather than taken
on trust.

---

## 0. Source reachability — read this first

Unlike the Tuscany cluster, **the primary sources for Bologna and Ravenna are
reachable.** Four of the five publishers responded directly.

| Publisher | Reachable | Note |
|---|---|---|
| Aeroporto G. Marconi di Bologna (`bologna-airport.it`) | **yes** | © 2026. The brief's URLs 404; the live pages require an `?idC=` parameter. Working URLs are recorded below |
| Fondazione Bologna Welcome (`bolognawelcome.com`) | **yes** | © 2026. Official tourist board |
| Ravenna Cruise Port (`rccp.it`) | **yes** | © 2023. Terminal operator |
| Visit Ravenna (`visitravenna.it`) | **yes** | Ravenna Incoming. No date shown |
| Comune di Ravenna (`turismo.ra.it`) | **yes** | Last modified **19 January 2026** |
| **Comune di Bologna** (`comune.bologna.it`) | **partial — the ZTL rules could not be read** | The URL tried returned a page carrying only a CC-BY licence notice and no ZTL content. A `site:` search surfaced no official ZTL page. **See §4** |

**The one blocked source is the one that matters most**, exactly as in
Florence: the municipal authority that defines who may drive into the
restricted centre.

---

## 1. Bologna Airport (BLQ) · status: **verified, operator-sourced**

Publisher: **Aeroporto Guglielmo Marconi di Bologna S.p.A.** Every page below
carries "© Copyright 2026", so the material is current.

| # | Claim | Status | Source and exact basis |
|---|---|---|---|
| B1 | The airport documents its ground transport under "From and to the airport", split into public transport and "Car and private transport" | verified | `bologna-airport.it/en/` navigation |
| B2 | **Marconi Express** is a monorail connecting the airport to Bologna Centrale. The airport describes *"The monorail train connecting the airport to Bologna central train station"*, *"7-minute rides between airport and city centre"*, and *"a train every 7 /15 minutes"* | verified | `/en/from-and-to-the-airport/transfer-from-and-to-the-airport/train-to-the-city-centre/?idC=62594` |
| B3 | The Marconi Express has **two stations only**: "Marconi Express – Airport Terminal station" and "Marconi Express – Bologna Train station" | verified | same |
| B4 | **No fare is published** on the airport's Marconi Express page, and **no distance** | verified (a negative) | same. Tickets via the Marconi Express site, the Roger app, or vending machines |
| B5 | **Taxis** at BLQ are provided by two operators: **Cotabo** (051 372727) and **CAT / Radiotaxi** (051 4590) | verified | `/en/from-and-to-the-airport/transfer-from-and-to-the-airport/taxi/?idC=62439` |
| B6 | The airport's taxi page states **no rank location, no fare and no fixed tariff**, and links no tariff document | verified (a negative) | same. This corroborates the architecture's instruction not to treat the 2008 tariff PDF as current evidence — the airport does not publish it here at all |
| B7 | The airport lists **three "car rental with driver" (NCC) companies**: Amne (059 333526), Cosepuri (051 519090), Saca (051 6349444) | verified | `/en/from-and-to-the-airport/car-and-private-transport/car-rental-with-driver/?idC=62464` |
| **B8** | **The NCC page states nothing about where such vehicles wait or collect passengers**, mentions no desk and no authorisation, and makes no statement about the airport's relationship to the listed companies | **verified (a negative) — consequential** | same |
| B9 | A 24-hour national strike notice for "Friday, 30 October" appeared site-wide | **recorded, NOT for use** | Volatile operational notice; no year given |

### What B7 and B8 mean for this cluster

**B7 is a trap, not an asset.** The architecture is explicit: *"Do not copy
airport-listed operators or imply affiliation."* The three named firms are
third parties and competitors. **No Bologna page may reproduce them**, exactly
as the Tuscany pages declined to reproduce the two chauffeur firms named in
Toscana Aeroporti's charter.

**B8 is the finding that constrains every BLQ route page.** The airport
publishes no NCC pickup point. So no page may state where a driver waits at
BLQ. This is the same position the Pisa page reached, and it must be written
the same way: the meeting arrangement is settled in the reply to a request.

### Not retrieved

- The **service charter** `media.bologna-airport.it/System/1520979/CDS2025.pdf`
  was not fetched in this pass. The equivalent Tuscan document supplied
  operator-confirmed facts, so it is worth retrieving before implementation.
  **Recorded as an open research item**, not as a blocker — no proposed page
  depends on it.
- The **city-centre FAQ** URL in the brief 404s. The Marconi Express page (B2)
  answers the same question from the same publisher.

---

## 2. Bologna hotels · status: **partial — addresses from aggregators, not from the hotels' own sites**

### The honest position on source quality

The brief asks for each hotel's **official website**. In this pass, addresses
for four hotels were established from **third-party aggregators and a
convention-bureau sheet**, not from the hotels' own sites. That is
**discovery-grade evidence, not publication-grade.**

Fondazione Bologna Welcome's accommodation directory was checked as an
alternative and is **not adequate for verification either**: it runs to
roughly 400 listings across 34 pages, its hotel category alone runs to 9
pages, and — decisively — **the directory states that Bologna Welcome does not
verify registrations**, so accuracy depends on what operators submit.

**Consequence: no hotel address may be published until it has been confirmed
on that hotel's own website.** This is recorded against every hotel row in the
inventory as `research_status = partial`.

### What was established

| # | Hotel | Address found | Source grade | Status |
|---|---|---|---|---|
| H1 | **Grand Hotel Majestic "già Baglioni"** | Via Indipendenza 8, 40121 Bologna | aggregators + Bologna Welcome listing | **partial** |
| H1b | Its official site is now under **duetorrihotels.com** (Due Torri Hotels group); Bologna Welcome lists that domain | discovery | **partial — a name/ownership change that must be confirmed before publishing** |
| H2 | **Starhotels Excelsior** | Viale Pietramellara 51, 40121 Bologna, opposite Bologna Centrale | Bologna Convention Bureau sheet + hotel's own brochure PDF | **partial** |
| H3 | **Art Hotel Commercianti** | Via de' Pignattari 11, 40124 Bologna, described as in a quiet **pedestrian area** overlooking San Petronio | aggregators | **partial** |
| H4 | **Savoia Hotel Regency** | Via del Pilastro 2, 40127 Bologna, Pilastro district north-east of the centre | Bologna Convention Bureau sheet + aggregators | **partial** |
| H5 | Distances from Savoia to BLQ | **sources disagree: 9 km, 10 km and "11 min drive / 11 km"** | — | **not established. No distance will be published** |
| H6 | Room counts | **sources disagree** (Commercianti: 42 vs 11; Savoia: 140 vs 98) | — | **not established. No room count will be published** |
| H7 | The remaining **15 shortlist hotels** | not individually researched in this pass | — | **partial — discovery only** |

**H5 and H6 are instructive.** Two independent facts that a hotel page would
naturally want — how far it is from the airport, how big it is — are
contradicted between sources for the very first hotels checked. They are
exactly the kind of claim the architecture forbids inventing, and neither will
appear on any page.

---

## 3. Bologna ZTL · status: **verified structure, blocked on private-hire access**

Publisher: **Fondazione Bologna Welcome**, the official tourist information
body (`bolognawelcome.com/it/altro/altro/ztl-centro-storico`, © 2026).

This is the most productive research in the cluster, and it is what makes
individual hotel pages defensible rather than thin.

| # | Claim | Status | Exact basis |
|---|---|---|---|
| Z1 | The historic-centre ZTL restricts motor vehicles **from 07:00 to 20:00, every day** | **verified** | *"dalle 7 alle 20, tutti i giorni, la circolazione dei veicoli a motore è soggetta a limitazioni"* |
| Z2 | Access is monitored by the electronic gate system **"Sirio"** | **verified** | same |
| Z3 | **17 named gates**: Porta Santo Stefano, Porta San Vitale, via Alessandrini, via Marconi, via Riva di Reno, via San Felice, via Sant'Isaia, via Saragozza, viale XII Giugno, via D'Azeglio, via Borgo di San Pietro, via Finelli, via Mascarella, via Capo di Lucca, via Chiudare, via Bocca di Lupo, via degli Angeli | **verified** | same |
| **Z4** | **Inside the ZTL, the pedestrian zones and "Area T" are restricted 24 hours a day.** Area T is **via Rizzoli, via Indipendenza and via Ugo Bassi** | **verified — the key structural fact** | *"zone limitate 24 ore su 24: le zone pedonali e l'area T"* |
| Z5 | **Concessions exist for access to hotels**, including B&Bs: *"Sono previste agevolazioni per l'accesso alle strutture alberghiere (compresi i bed&breakfast)"* | **verified that they exist; the procedure is NOT published** | same. The page refers the reader to the Comune |
| Z6 | A daily ZTL access ticket can be purchased | partial | same; no amount stated by this publisher |
| Z7 | "ZTL ambientale" rules have applied since 1 January 2020 | partial | same |
| **Z8** | **Whether taxis or NCC may enter** | **BLOCKED** | **The official tourist board's ZTL page does not mention taxis or NCC at all.** One third-party guide (Unipol Move) lists taxi and NCC among exempt categories; this could not be confirmed against any official source and is **not** treated as evidence |

### Z4 is why hotel pages are not thin

Bologna's restriction has **three tiers**, and a central hotel sits in exactly
one of them:

1. **Outside the ZTL** — a car reaches the door at any hour.
2. **Inside the ZTL** — restricted 07:00–20:00; the *hour of arrival* decides.
3. **Area T or a pedestrian zone** — restricted **24 hours**; the hour never
   helps.

Of the four hotels researched, **each falls in a different tier** (see §2 and
the design document). A hotel page that answers "which tier is this address
in, and what follows from it" is genuinely property-specific. A hotel page
that does not is the thin, name-swapped page the architecture forbids.

### Z8 is the Florence problem again

The Comune di Bologna's own ZTL rules could not be read: the URL tried
returned only a CC-BY licence notice with no ZTL content, and a site-restricted
search surfaced no official page. Third-party guides agree on 07:00–20:00
(corroborating Z1 from the tourist board) but disagree about 2026 changes for
hybrids, and the single claim that NCC are exempt is unsourced.

**No Bologna page may state that private-hire vehicles are, or are not,
permitted into the ZTL.** Z5 — that hotel-access concessions exist, procedure
unpublished — is the furthest any page may go, and it must be attributed to
Bologna Welcome and pointed at the Comune.

---

## 4. Ravenna Cruise Terminal at Porto Corsini · status: **verified, and the sources disagree usefully**

Three official publishers were reached. **They contradict each other on three
points**, which is itself the most useful finding for this page.

| # | Claim | RCCP (terminal operator) | Visit Ravenna (tourism) | Comune di Ravenna |
|---|---|---|---|---|
| R1 | Distance, terminal to central Ravenna | **13 km** | **"about 15 km"** | not stated |
| R2 | Bus 90 stop | *"It stops in front of the terminal"* | *"about a 10-minute walk from the cruise terminal"* | — |
| R3 | Taxi availability | *"When ships are in, taxis are normally available … also inside the cruise terminal area"* | *"availability is limited and taxis cannot be booked in advance"* | not mentioned |

| # | Claim | Status | Source |
|---|---|---|---|
| R4 | The cruise pier address is **"Molo Crociere Porto Corsini – 48123 Ravenna (RA)"** | verified | RCCP, `rccp.it/en/guests/` (© 2023) |
| **R5** | **"A temporary marquee is presently used as cruise terminal"**, with a new terminal building planned | **verified — and operationally significant** | RCCP |
| R6 | Bus line 90 connects Ravenna train station to the cruise terminal, about 30 minutes | verified (both publishers agree on the line and the city end) | RCCP; Visit Ravenna |
| R7 | RadioTaxi Ravenna runs 24/7 on +39 0544 33888; the rank is at the train station | verified | RCCP |
| R8 | About **150 free parking spaces** near the terminal | verified | RCCP |
| R9 | **RCCP does not mention private transfers at all, and states no pick-up or drop-off rules for cars** | **verified (a negative)** | RCCP |
| R10 | **Visit Ravenna operates its own seasonal shuttles** from the terminal: to Ravenna Train Station (1 Apr – 1 Nov 2026), to Grand Hotel Mattei ("to be defined"), and to the Via Cura parking (1 May – 31 Oct 2026); about 30 min; "from € 20"; staff wear uniforms or carry "Visit Ravenna" signs | verified | Comune di Ravenna, `turismo.ra.it`, **last modified 19 Jan 2026** |
| R11 | Train-station drop-off is "Viale Luigi Carlo Farini, next to Piazza Anita Garibaldi (300 m away from the train station)" | verified | same |

### What follows

- **No distance figure may be published.** Two official publishers say 13 km
  and about 15 km. The page should say the terminal is outside the city, name
  Porto Corsini, and attribute rather than average.
- **R10 is a third party.** Visit Ravenna's shuttles are not this provider's
  service, they are seasonal, and one of the three routes is "to be defined".
  The architecture forbids implying affiliation. They may be mentioned as
  context with attribution, or omitted.
- **R3 is the honest case for a private transfer**, and it comes from the
  tourism authority rather than from us: taxis are limited and **cannot be
  booked in advance**. That is a genuine reason a cruise passenger would
  arrange a car, and it is somebody else's statement.
- **R5 must be handled carefully.** A temporary marquee is not a terminal
  building; a page that implied a fixed terminal with facilities would
  mislead. It also means any "meeting point" claim is doubly unsafe.
- **R9 means no page may state where a car may collect a passenger at the
  port.** The operator publishes no such rule.

---

## 5. Provider capability · status: **unverified across the entire cluster**

As in Rome, Milan, the Veneto and Tuscany, **no first-party record in this
repository establishes what this business can actually provide.** Nothing in
Phase 1 changed that.

| Proposed family | What publishing it as a service would require | Verified? |
|---|---|---|
| BLQ ↔ Bologna city | Ordinary airport transfer coverage | **No** |
| BLQ ↔ named hotel | The above, plus the ability to reach a restricted address | **No** |
| Hotel inside Area T | Ability to approach a 24-hour restricted street, or an agreed nearest stop | **No** |
| Ravenna city ↔ Porto Corsini | Coverage ~75 km from Bologna, plus port access | **No** |
| Bologna ↔ Porto Corsini | Long intercity coverage | **No** |

### Exactly what is needed to resolve it

A written statement from the owner answering four questions:

1. Does the business serve BLQ airport transfers at all?
2. Does it serve journeys to addresses inside Bologna's ZTL, and does it hold
   or can it obtain the hotel-access concession referred to in **Z5**?
3. Does it serve Ravenna and the Porto Corsini cruise pier?
4. For a 24-hour restricted address (Area T, pedestrian zone), what is the
   actual practice — approach with a permit, or set down at a nearest
   practical point?

**Question 2 is the one that decides whether hotel pages can be built at all.**

---

## 6. What no source established

- Whether private-hire vehicles may enter Bologna's ZTL (**Z8**).
- The procedure behind the hotel-access concession (**Z5**).
- Any fare, duration or road distance anywhere in this cluster.
- Any distance between a Bologna hotel and BLQ (**H5** — sources conflict).
- Room counts for any hotel (**H6** — sources conflict).
- Where an NCC vehicle may collect a passenger at BLQ (**B8**).
- Where a car may collect a passenger at Porto Corsini (**R9**).
- The distance from Porto Corsini to central Ravenna (**R1** — 13 vs ~15 km).
- Current official name, address and operating status for any hotel, from the
  hotel's own website (**H1–H7**).
- The contents of the BLQ 2025 service charter (not retrieved).
