# Tuscany cluster — research log

Phase 1. Every claim a Tuscany page could make, its source, the date checked,
and its status: **verified**, **partial** or **blocked**.

**All dates checked: 2026-10-26.**

No page has been built. This log exists so the Phase 1 inventory's
`build` / `defer` decisions can be checked against evidence rather than taken
on trust.

---

## 0. Blocked sources — read this first

Three of the sources that matter most could not be retrieved by automated
request. The brief anticipates this: *"If an airport operator site blocks
automated access, retry through an ordinary browser or use other trustworthy
evidence without presenting secondary transport facts as operator-confirmed."*

**No ordinary browser is available in this environment**, so the second route
was taken throughout: other trustworthy evidence, never labelled as
operator-confirmed.

| Source | Result | Consequence |
|---|---|---|
| `pisa-airport.com/en/` | **ECONNRESET** | No PSA fact on any page may be attributed to the operator |
| `mobilita.comune.fi.it/.../ztl.html` (Comune di Firenze ZTL) | **ECONNREFUSED** | **No primary source for Florence's ZTL** — see §3, the most consequential gap in this cluster |
| `at-bus.it/en/destination-tuscany-arrival-and-departure` | Not retrieved | Regional bus network unverified. No bus fact is proposed for any page |

Sources that **did** respond: `visittuscany.com` (regional tourism authority),
`visitvaldorcia.it` (destination authority), and encyclopaedic records for
both airports.

---

## 1. Pisa — PSA · status: **partial**

Operator site blocked. Facts below are encyclopaedic and consistent, and are
**not** presented as operator-confirmed.

| # | Claim | Status | Caveat |
|---|---|---|---|
| P1 | Official name Pisa International Airport, also Galileo Galilei | verified | — |
| P2 | IATA **PSA**, ICAO **LIRP** | verified | — |
| P3 | Operated by **Toscana Aeroporti S.p.A.**, alongside the Italian Air Force | verified | A joint civil/military field. Worth stating plainly; worth claiming nothing further about |
| P4 | It stands in the comune of **Pisa** | verified | — |
| P5 | It is **Tuscany's busiest airport**, ahead of Florence | verified | Corroborates the homepage, which already calls it *"the larger airport for Tuscany"* |
| P6 | A shuttle, the **Pisa Mover**, has linked the airport with Pisa Centrale station since 2017 | **partial** | Encyclopaedic, not operator-confirmed. A **fare and a duration are quoted in that source and are deliberately excluded** — they are exactly the time-sensitive figures the brief says to keep out |
| P7 | Distance from Pisa city centre, and from Florence | **not established** | Neither source states either. **No distance will be published** |

---

## 2. Florence — FLR · status: **partial**

| # | Claim | Status | Caveat |
|---|---|---|---|
| F1 | Official name Florence Airport, Peretola; formally **Amerigo Vespucci** | verified | The homepage already says "Florence (Peretola)" |
| F2 | IATA **FLR**, ICAO **LIRQ** | verified | — |
| F3 | Operated by **Toscana Aeroporti** | verified | **Same operator as Pisa.** One company runs both of Tuscany's airports — the structural parallel to SAVE running Venice Marco Polo and Treviso |
| F4 | It has a **single runway of 1,560 m**, described as short, able to accept aircraft up to roughly A320neo size | verified | **The most useful fact found for this page.** It explains *why* Florence is the smaller airport, rather than merely asserting that it is |
| F5 | It is Tuscany's **second-busiest**, behind Pisa | verified | Corroborates the homepage's "a small airport inside the urban area, a larger one at Pisa" |
| F6 | A new, longer runway is planned | **recorded, not for use** | Planned, with no verified completion. A transfer page implying it exists would mislead |
| F7 | Distance from the city centre | **not established** | The article does not state it. The homepage's existing wording — *"In the Peretola area at the edge of the city"* — is the furthest any page should go |

---

## 3. Florence ZTL · status: **BLOCKED on the point that matters**

**This is the cluster's central research problem**, and it is worse than the
equivalent in Rome or Milan.

The homepage already asserts Florence has *"a strictly regulated centre"*
(`content/home/en.ts:137`). A Florence hub has to substantiate that. In Rome
the ZTL hours and the NCC exemption came from the city's own agency; in Milan
the Area B/C hours and the NCC exemption came from the Comune's own support
centre. **For Florence, neither is available.**

| # | Claim | Status | Detail |
|---|---|---|---|
| Z1 | Florence operates a ZTL over the historic centre, divided into **sectors** (A, B, F, G, O) | **partial** | Consistent across secondary guides; the Comune's page could not be read |
| Z2 | Daytime hours of roughly **07:30–20:00 Monday to Friday and 07:30–16:00 Saturday**, with Sunday unrestricted | **partial, and sources conflict** | Most secondary sources give 20:00; at least one gives 19:30. One guide notes the Comune's own page is itself roughly 1,348 days old |
| Z3 | A **summer night ZTL** operated 2 April – 4 October 2026, 23:00–03:00 on Thursday, Friday and Saturday | **partial** | Reported as no longer in force. Seasonal and volatile |
| Z4 | A wider low-emission zone, **Scudo Verde**, around 38 km² with 77 gates operating 24/7 | **partial** | Structurally similar to Milan's Area B containing Area C |
| Z5 | **Whether NCC — private-hire cars — are exempt** | **BLOCKED** | *"I found no official text on NCC rules."* Exemptions were listed for residents, taxis, hotels with pre-registered guest plates, emergency and disabled drivers — **NCC was not among them** |

**Z5 is the decisive gap.** Rome's and Milan's pages could state, from the
city's own words, that private-hire cars are among the permitted categories.
**Florence's cannot.** A Florence hub must therefore describe the ZTL as a
constraint to be confirmed for the specific address and date, and must **not**
reproduce the Rome/Milan reassurance. Doing so would be the single most likely
way this cluster could mislead someone.

**No ZTL hours should be published** until a primary source is read. They
conflict between sources and change by ordinance and by season.

---

## 4. Val d'Orcia · status: **verified**

Source: <https://visitvaldorcia.it/en/info/> — the destination's own authority.
The best-sourced material in the cluster.

| # | Claim | Status |
|---|---|---|
| V1 | The Val d'Orcia comprises five comuni: **Castiglione d'Orcia, Montalcino, Pienza, Radicofani and San Quirico d'Orcia** | verified |
| V2 | The site states that travelling **by car is "definitely the best means"** of visiting | verified |
| V3 | **There are no direct rail connections.** The nearest stations are **Siena, Buonconvento and Chiusi-Chianciano Terme** | verified |
| V4 | Road access is via the **A1** (Chiusi-Chianciano or Valdichiana exits) and the **Cassia**, or from the north via the Florence–Siena road | verified |
| V5 | The nearest airports it lists are **Florence, Pisa, Perugia and Rome** | verified |
| V6 | UNESCO World Heritage status is indicated by the site's own branding and a "Val d'Orcia Patrimonio Mondiale" link | **partial** — the body text does not state it; the inscription should be confirmed against the UNESCO list before publishing a date |

**V2 and V3 together are the strongest evidence in this cluster for any page.**
The destination's own tourism body says a car is the best way to visit and
that no railway reaches it. That is a transfer page's justification stated by
an independent authority — not a claim this business needs to make for itself.

---

## 5. The Tuscan coast and the Maremma · status: verified geography, **unverified service**

Sources: <https://www.visittuscany.com/en/ideas/all-the-coastal-areas-of-tuscany/>,
<https://www.visittuscany.com/en/areas/maremma/>

| # | Claim | Status |
|---|---|---|
| C1 | The regional authority names **eight coastal areas**, north to south: Apuan Riviera, Versilia, the Pisan Coast, the Etruscan Coast, the area around Piombino, the Maremma beaches, the Silver Coast, and the Tuscan Archipelago | verified |
| C2 | Versilia includes **Forte dei Marmi, Marina di Pietrasanta, Lido di Camaiore, Viareggio and Torre del Lago** | verified |
| C3 | The Silver Coast includes **Orbetello, Talamone, Capalbio, Porto Ercole and Porto Santo Stefano** | verified |
| C4 | The **Tuscan Archipelago** — Elba, Giglio, Capraia, Montecristo, Pianosa, Gorgona, Giannutri — is reached **by sea**: Elba from Piombino, Capraia from Livorno, and Giglio, Pianosa and Giannutri from Porto Santo Stefano | verified |
| C5 | The official Maremma listing names 17 towns, **including Isola del Giglio** | verified |

**C4 is a Venice-shaped problem.** A road transfer cannot reach Elba or
Giglio; the last leg is a ferry, run by someone else. The brief forbids
claiming island transfers unless explicitly verified, and nothing verifies
one. **Any coastal page must carry the road/water distinction the Venice
cluster already models**, or it must not be built.

---

## 6. Chianti · status: **partial — the boundary is genuinely contested**

| # | Finding | Status |
|---|---|---|
| H1 | Chianti Classico covers the **whole territory of four communes — Castellina, Gaiole, Radda and Greve** — plus **parts** of several others | verified |
| H2 | Sources disagree on the full list. One gives nine communes; another names partial inclusions differently | **conflict recorded** |
| H3 | **Panzano is a hamlet of Greve, not a commune** — the consorzio's own position | verified |
| H4 | The area spans **two provinces, Florence and Siena** | verified |
| H5 | The consorzio's own current commune list and boundary map were **not retrieved** | blocked |

**Consequence.** "Chianti" cannot be given a precise published boundary from
what was verified. A Chianti page would have to name the four certain communes
and say the edges are contested — which is honest but thin — and it sits
directly on the winery-tour constraint in §8.

---

## 7. Weddings · status: geography verified, **service not supported**

Source: <https://www.visittuscany.com/en/ideas/where-to-get-married-in-tuscany/>

The page names real areas and venue types — Florence, Siena, Chianti, San
Gimignano, Valdarno, Vinci, Carmignano, Certaldo, Massa Marittima; villas,
castles, abbeys, civic halls and wineries. It is a credible source for *where*
weddings happen.

**It says almost nothing about transport**, and explicitly nothing about guest
shuttles, parking or coordination — the summary notes it *"doesn't discuss
guest shuttles, parking, or ceremony paperwork."*

**A wedding page would therefore have to be built almost entirely on service
claims**: guest movement, multi-vehicle coordination, timing around a
ceremony. **None of that is verified.** See §8.

---

## 8. Provider capability · status: **unverified across the whole cluster**

As in Rome, Milan and the Veneto, **no first-party record establishes what
this business can provide.** Every page would be an enquiry subject to
confirmation.

For Tuscany this bites harder than in any previous region, because the brief's
commercial priorities name precisely the service types its own hard
constraints forbid claiming without verification:

| Commercial priority | What publishing it would require | Verified? |
|---|---|---|
| Winery trips | Multi-stop touring, waiting time, possibly tasting reservations | **No** — and all three are named in the hard constraints |
| Countryside villas | Access to specific rural roads and addresses | **No** |
| Weddings | Guest coordination, multi-vehicle, timed movements | **No** |
| Coastal resorts | Named-area coverage; islands need a ferry leg | **No** |
| Intercity transfers | Per-route coverage | **No** |
| Florence and Pisa airports | Point-to-point transfer only | **No**, but this is the one intent that needs no extra capability beyond an ordinary transfer |

**This is the central finding of Phase 1**, and §4 of the hand-back puts it to
the owner as a question rather than resolving it unilaterally.

---

## 9. What no source established

- Any fare, duration or road distance anywhere in Tuscany.
- Whether NCC vehicles may enter Florence's ZTL.
- Florence's ZTL hours from a primary source.
- Whether any Tuscan route, villa road, wedding venue or island is served.
- The Chianti Classico boundary, precisely.
- The Val d'Orcia UNESCO inscription date (status indicated, date unconfirmed).

---

# Addendum — second research pass, 27 October 2026

The owner supplied four alternative source URLs and asked for them to be
checked, with the date and exact evidence recorded, and historical information
distinguished from current rules.

**No page was changed as a result of this pass.** Proposed changes are set out
separately in `docs/tuscany-content-change-proposals.md` and await approval.

## A0. Reachability, re-tested 27 October 2026

Every one of the owner's URLs was tried twice: once with an ordinary HTTP
client, and once by navigating a real desktop Chrome to it. No user agent was
spoofed and no block was worked around.

| URL | Plain client | Real browser | Verdict |
|---|---|---|---|
| `mobilita.comune.fi.it/.../ztl.html` | ECONNREFUSED | `ERR_CONNECTION_TIMED_OUT` | unreachable from here at the network layer |
| `www.pisa-airport.com/en/` | ECONNRESET | `ERR_CONNECTION_RESET` | unreachable from here at the network layer |
| `www.toscana-aeroporti.com` (site and both PDFs) | HTTP 403 | HTTP 403, page body *"The request is blocked"* | reachable, but refused by the site's edge firewall |

The toscana-aeroporti refusal carries an Azure Front Door correlation id, so
the site is live and the block is applied on their side. **None of the three
is evidence that a site is down**, and the owner reports the same failures
from their own browser.

**Route taken instead: the Internet Archive**, which holds captures of all but
one of these documents. Everything below is therefore *the official text as
captured on a stated date*, not a live read. Each capture date is recorded,
and §A5 separates what is a current rule from what is visibly historical.

Mid-pass the Archive's search API went offline ("Internet Archive services are
temporarily offline"), which ended the search for the one document not found.

## A1. Florence ZTL — the Comune's own page · captured **2026-10-12**

Source: `mobilita.comune.fi.it/muoversi/muoversi/ztl.html`, via the Internet
Archive, capture timestamp 20261012070159 — fifteen days before this pass.

| # | Claim | Status | Exact basis |
|---|---|---|---|
| Z1 | The whole historic centre is a ZTL, bounded by **electronic gates that automatically read the plate of every vehicle passing through** | **VERIFIED — official** | *"Tutta l'area del centro storico di Firenze viene definita, ai fini della mobilità, Zona a Traffico Limitato (ZTL)"*; *"delimitata da una serie di varchi telematici ... che rilevano automaticamente le targhe di tutti i veicoli che vi transitano"* |
| Z1b | It has **five sectors: A, B, O, F and G** | **VERIFIED — official** | *"La ZTL è costituita da cinque settori: A, B, O, F e G"*. Earlier research said only "lettered sectors"; the letters are now sourced |
| Z2 | Weekday hours **apply to sectors A, B and O only**: Mon–Fri **07.30–20.00**, Sat **07.30–16.00**, all year | **VERIFIED — official, but narrower than reported** | *"Nei settori A, B e O, la ZTL è attiva tutto l'anno, nei giorni feriali, con i seguenti orari: dal lunedì al venerdì dalle 7.30 alle 20 e il sabato dalle 7.30 alle 16."* **The page states no weekday hours for F and G.** Every secondary source consulted in the first pass described these as "the ZTL hours" without that qualification |
| Z3 | A **summer night ZTL** runs from the first Thursday in April to the first Sunday in October, extended to **all five sectors**, on Thursday, Friday and Saturday nights | **RULE verified — official** | *"Dal primo giovedì di aprile alla prima domenica di ottobre è attiva la ZTL Notturna Estiva. La disciplina ... è estesa su tutti i settori (A, B, O, F e G) anche alle notti di giovedì, venerdì e sabato."* |
| Z3b | The night window is 23.00–03.00 | **HISTORICAL — 2022 only** | The times appear *only* inside a worked example introduced *"Per l'anno 2022 la ZTL Notturna Estiva è attiva dal 7 aprile al 2 ottobre"*. **The Comune's own page was still carrying a 2022 example when captured in October 2026.** The first pass recorded a secondary claim that the page was ~1,348 days old; that is now confirmed from the page itself |
| Z4 | Some gates are **reserved for public transport and emergency vehicles and are closed 24 hours a day** | **VERIFIED — official** | *"Fra i varchi ve ne sono alcuni (destinati esclusivamente ai mezzi pubblici e di soccorso) che sono sempre vietati, 24 ore su 24."* |
| Z5 | **Whether NCC vehicles may enter** | **STILL UNANSWERED** | **The Comune's ZTL page does not mention permitted categories at all.** It names no category except the public-transport and emergency gates above |

## A2. Florence ZTL authorisations — "Scheda del servizio – ZTL" · captured **2025-05-17**

Source: `servizi.comune.fi.it/servizi/scheda-servizio/ztl`, linked from the
page in §A1 as its own "more information" destination.

| # | Claim | Status |
|---|---|---|
| Z6 | Authorisations are issued **to categories defined in sheets annexed to the "Disciplinare Tecnico ZTL"** | **VERIFIED — official.** *"Possono essere rilasciate autorizzazioni alla circolazione in ZTL ai soggetti appartenenti alle categorie indicate nelle schede allegate al Disciplinare Tecnico ZTL"* |
| Z7 | A vehicle that **fails the emissions parameters of ordinance n. 2018/00301 cannot be authorised at all** | **VERIFIED — official.** *"Non possono essere autorizzati all'accesso in ZTL i veicoli che non rientrano nei parametri antinquinamento previsti dall'ordinanza n. 2018/00301 e s.m.i."* |
| Z8 | Permits are **sector-bound**: a sector A holder may enter from any gate; a sector B holder only from that sector's gates; during the night ZTL, A/B/O holders may also use the F and G gates | **VERIFIED — official** |
| Z9 | Occasional access for a vehicle not tied to a permit is handled through a **"Lista bianca"** (white list) | **VERIFIED — official** |
| Z10 | **"Autorizzazioni taxi" exists as its own authorisation category** | **VERIFIED — official**, from the Comune's `autorizzazioni_richieste` page, captured 2026-09-10 |
| Z11 | **NCC / noleggio con conducente appears nowhere** in any Comune page read in either pass | **recorded** |

### Why Z5 still cannot be closed

The document that would answer it is the **Disciplinare Tecnico ZTL** and its
annexed category sheets. The Comune links it as
`2011-m-04192_aggiornata_al_2022-04-04.pdf` — **a file whose own name dates it
to 4 April 2022**. It was retrieved from the Archive and could not be read:
the capture is truncated at exactly 1 MiB and the document is a scan, so only
sixteen characters of text could be salvaged from it.

So the position is now sharper than "no official text could be found". It is:
**the Comune publishes the authorisable categories in an annexed schedule that
could not be read, taxis have a category of their own, and NCC is not named in
anything that could be.** That is a better-evidenced version of the same
refusal, not a change of answer.

## A3. Pisa Airport — Toscana Aeroporti **2025 Service Charter** · captured **2026-02-21**

Source: the owner-supplied PDF
`toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf`,
43 pages, retrieved complete from the Archive. **This is the airport
operator's own publication**, so facts from it may be attributed to the
operator — which the first pass could not do for anything.

| # | Claim | Status | Page |
|---|---|---|---|
| P3b | **Toscana Aeroporti S.p.A. manages both Florence and Pisa**, formed **1 June 2015** from the merger of AdF (Florence Vespucci) and SAT (Pisa Galilei) | **VERIFIED — operator** | p.3 |
| P8 | The two airports are **complementary by design**: *"The Vespucci airport concentrates on the development of business and leisure traffic through full service carriers, connecting the main European hubs; the Galilei airport, on the other hand, favours tourist traffic managed by low-cost carriers, cargo flights and with a particular focus on continental flights."* | **VERIFIED — operator** | p.3 |
| P5b | Pisa handled **5,547,008 passengers in 2024** (+8.6%); the two-airport system 9,063,933. International traffic was 75.8% of Pisa's total | **VERIFIED — operator, but a 2024 figure in a 2025 charter read in 2026** | p.3 |
| **P7** | **The airport is "on the coast just 1 km from Pisa"** | **VERIFIED — operator** | p.22 |
| P9 | Road access: direct access to the **Firenze–Pisa–Livorno** highway (Pisa Centro-Aeroporto exit), the **A12** Genova–Rosignano (Pisa Centro exit), the **A11 Firenze–Pisa Nord** (via the Pisa Nord/A12 interchange) and the **SS1 Aurelia** | **VERIFIED — operator** | p.22 |
| P9b | *"Traffic normally flows well on all these road networks"* | **recorded, NOT for use.** An operator's traffic reassurance is not a promise this site can repeat | p.22 |
| P6b | The **Pisamover** connects the airport directly to **Pisa Centrale**, running "periodically". Tickets from Customer Service in the Arrivals Hall or from machines | **VERIFIED — operator.** The charter states **no fare and no duration**, which vindicates excluding both | p.22 |
| P10 | **Taxis** are run by **CO.TA.PI.** and wait **in front of the terminal exit on the arrivals side**; radio taxi 24h | **VERIFIED — operator** | p.22 |
| P11 | **"CHAUFFEUR SERVICES — Several private chauffeur companies are available at the airport."** Two firms are named with contact details | **VERIFIED — operator.** The named firms are third-party competitors and **must not be reproduced on this site** | p.23 |
| P12 | The **bus area is P6**, in the square outside the passenger terminal | **VERIFIED — operator** | p.22 |
| P13 | **No distance or journey time to Florence** | **STILL NOT ESTABLISHED.** The charter states the distance to Pisa and names the A11 to Florence, but gives no figure for Florence | — |

## A4. pisa-airport.com · captured **2026-06-11**

| # | Claim | Status |
|---|---|---|
| P14 | The airport's own site offers **"N.C.C."** as one of its means of transport — listed alongside People Mover, Car, Taxi, Bus and Rent a car, for both arrivals and departures | **VERIFIED — operator.** Private hire with driver is an operator-recognised transport category at Pisa |
| P15 | A designated **NCC pick-up point** | **not established.** The selector's target page was not captured in a readable form, and the Archive went offline before another capture could be sought |

## A5. Current rules versus historical information

The owner asked for these to be kept apart. They are:

**Current, and safe to rely on**
- The five sector letters, and the automatic plate-reading gates (A1).
- The structure of the summer night ZTL: first Thursday of April to first
  Sunday of October, all five sectors, Thursday to Saturday nights (A1).
- Permits are sector-bound; emissions ordinance 2018/00301 excludes
  non-compliant vehicles; a white list covers occasional access (A2).
- Toscana Aeroporti operates both airports; the complementary role split;
  the 1 km distance to Pisa; the road approaches; the Pisamover; the taxi
  rank position; chauffeur companies operate at the airport (A3).

**Historical, and NOT to be published as current**
- **The 23.00–03.00 night window and the 7 April – 2 October dates**: stated
  for **2022 only**, on a page still carrying that example in October 2026.
- **The Disciplinare Tecnico**: the linked file is dated **4 April 2022**.
- **The 2024 passenger counts**: true as published, but two years stale.
- **The weekday hours**: officially sourced, but see below.

**The judgement call on the weekday hours.** They are the Comune's own words,
captured fifteen days ago, and they corroborate what most secondary sources
said. Three things argue against publishing them anyway:

1. They apply to **A, B and O only**. The page is silent on F and G, so any
   unqualified sentence about "the ZTL hours" would be wrong for two sectors.
2. The **same page** is demonstrably unmaintained in part — it still carried a
   2022 worked example in October 2026.
3. It was read from an **archive capture**, because the live page cannot be
   reached from here or, per the owner, from their browser.

The recommendation in the proposals document is therefore to **continue not
publishing hours**, and to replace the current vague explanation with the
specific one: the Comune sets them, they differ by sector, and the page that
publishes them was still carrying a 2022 example when last read. That is a
stronger reason to go to the source than silence is.

## A6. What is still unknown after this pass

- **Whether NCC vehicles may enter Florence's ZTL.** Unchanged. Now attributable
  to a named unread document rather than to a general absence of sources.
- The **Florence Peretola 2025 service guide**: no Archive capture exists, and
  the Archive's search API went offline before alternatives could be checked.
- Any **distance or journey time between Pisa Airport and Florence**.
- A **designated NCC pick-up point** at either airport.
- **FLR's runway length from the operator.** The 1,560 m figure remains
  reference-sourced; the Pisa charter does not state it.

---

# A7. Decisions taken, 27 October 2026

The owner approved proposals 1-5 and 7-10 in
`docs/tuscany-content-change-proposals.md`, and proposal 6 as the explanatory
wording only. All are now applied. The pages were rebuilt and re-checked; the
results are in `docs/tuscany-delivery-report.md`.

## What was published, and on whose authority

| Fact now on a page | Source | Read | Pages |
|---|---|---|---|
| Five ZTL sectors: A, B, O, F, G | Comune di Firenze, own ZTL page | archive capture 2026-10-12 | Florence hub, EN + IT |
| Gates read the plate of every vehicle | same | same | Florence hub, EN + IT |
| Authorisable categories live in schedules annexed to the Disciplinare Tecnico ZTL | Comune, "Scheda del servizio - ZTL" | archive capture 2025-05-17 | Florence hub, EN + IT |
| Taxis hold an authorisation category of their own | Comune, `autorizzazioni_richieste` | archive capture 2026-09-10 | Florence hub, EN + IT |
| A vehicle outside the 2018 emissions ordinance cannot be authorised | Comune, "Scheda del servizio - ZTL" | archive capture 2025-05-17 | Florence hub, EN + IT |
| The operator runs the two airports as complements, with different roles | Toscana Aeroporti, 2025 Service Charter for Pisa, §1.1 | archive capture 2026-02-21, read 2026-10-27 | Florence hub, Pisa, Peretola, Pisa route - all EN + IT |
| The airport is about a kilometre from Pisa | same, p.22 | same | Florence hub, Pisa, Pisa route - all EN + IT |
| The A11 Firenze-Pisa Nord, via the Pisa Nord/A12 interchange | same, p.22 | same | Pisa route, EN + IT |
| The taxi rank is in front of the terminal exit, arrivals side | same, p.22 | same | Pisa, EN + IT |
| The airport lists private hire among its transport options | pisa-airport.com | archive capture 2026-06-11 | Pisa, EN + IT |

Every page carrying a charter-sourced fact states in its source note that the
charter was read on **27 October 2026** from an **archived copy**, because the
publisher's website refuses automated requests, and that the publisher's own
pages should be preferred where the two differ. The link goes to the archived
copy, which was verified to resolve as a PDF; the live publisher URL was not
used because it returns HTTP 403 here and could not be confirmed to work for a
reader.

## What was deliberately not published

- **No ZTL hours**, in either language. Verified absent from all twelve routes
  by automated check: none of `07:30`, `07.30`, `7.30`, `20:00`, `20.00`,
  `16:00`, `16.00`, `23:00`, `23.00` or `03:00` appears anywhere.
- **No position on private-hire access to Florence's ZTL, in either
  direction.** The hero states the Disciplinare could not be read, that taxis
  hold a category of their own, and that private hire being named in nothing
  readable "is not the same thing as being ruled out". The ZTL caution was
  brought into line with it and now refuses both directions explicitly:
  *"That a private-hire vehicle is exempt from Florence's ZTL - nor that it is
  not."*
- **No distance or journey time between Pisa Airport and Florence.** The 1 km
  figure is stated as the distance to **Pisa**, and each mention says in terms
  that no source gives a figure for Florence.
- **The two chauffeur companies named in the charter.** Third-party
  competitors; verified absent from every page.
- **The 2024 passenger counts.** The ranking is attributed to the operator;
  the raw numbers are not published, as they date faster than the ranking.
  Verified absent.
- **The charter's "traffic normally flows well" reassurance.** Verified absent.

## The ZTL link was not changed

The owner asked that `servizi.comune.fi.it/servizi/scheda-servizio/ztl` be
checked before replacing the current link, and that no replacement be invented
if it too were inaccessible. It was checked twice on 27 October 2026 - plain
client and real browser - and **both attempts timed out** (`ERR_CONNECTION_
TIMED_OUT`), as did `ztl.comune.fi.it` and `mobilita.comune.fi.it`. Every
`comune.fi.it` host is unreachable from here.

**So the link was left exactly as it was**, pointing at `ztl.comune.fi.it`.
No replacement was invented. This remains an open item for a browser check.

## A defect found and fixed while applying the changes

`RoutePage.lead.source` is declared in `content/page-types.ts` and was set by
the Pisa route, but `components/rome/route-page.tsx` **never rendered it**. The
Tuscan routes are the only ones in the project that populate the field, which
is why it had gone unnoticed since the type was written.

The practical consequence was that the Pisa route made operator-sourced claims
with no visible attribution. The component now renders the note when a route
supplies one, guarded so that a route without one is unaffected. Rome's,
Milan's and the Veneto's route pages were confirmed **textually identical**
before and after the change.
