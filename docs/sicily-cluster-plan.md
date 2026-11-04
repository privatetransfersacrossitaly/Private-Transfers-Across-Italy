# Sicily cluster — URL registry, keyword map, link matrix, design and sources

Phase 1 of the Sicily regional cluster. Nothing in this file is published;
it is the plan the build follows, and the record of what was verified and
what was not.

Written 2026-11-03.

---

## 1. Scope, and where it differs from the brief

The brief proposed 16 page types / 32 URLs. The approved scope is **14 page
types / 28 URLs**. Three decisions changed it, all taken against what the
site already does rather than against the brief's preferences.

### Airport URLs — site convention, not `/airports/palermo`

All 16 existing airport pages are `city + airport name`:
`/airports/rome-fiumicino`, `/airports/naples-capodichino`,
`/airports/pisa-galilei`, `/airports/bari-karol-wojtyla`. Three bare
city slugs would have been the only airport URLs on the site not naming
the airport.

### Port URLs — `/cruise-ports/`, and only three of them

There is no `/ports/` namespace. There is `/cruise-ports/`, holding
Civitavecchia, Naples Stazione Marittima and Ravenna Porto Corsini.

Trapani and Milazzo are not primarily cruise ports. Milazzo is the Aeolian
ferry port; filing it under `/cruise-ports/` would have put a page under a
name that misdescribes it. Their ferry traffic is covered inside the Trapani
destination page and the pillar instead. Two fewer page types, no false
filing, and nothing about the Egadi or Aeolian connections is lost.

### Titles — keyword + CTA, no brand

The owner's rule is 50–60 characters with a varied call to action, dropping
the brand where it does not fit. `" | Private Transfer Across Italy"` is 32
characters on its own, so keyword + CTA + brand is always over 60. Every
Sicily page therefore passes `brandedTitle: false` to `pageMetadata` and
supplies its whole title. Existing pages keep their branded titles for now.

---

## 2. URL registry

28 URLs. No trailing slashes, per the site convention.

| PageId | English | Italian |
|---|---|---|
| `sicily` | `/destinations/sicily` | `/it/destinazioni/sicilia` |
| `palermo` | `/destinations/sicily/palermo` | `/it/destinazioni/sicilia/palermo` |
| `catania` | `/destinations/sicily/catania` | `/it/destinazioni/sicilia/catania` |
| `taormina` | `/destinations/sicily/taormina` | `/it/destinazioni/sicilia/taormina` |
| `syracuse` | `/destinations/sicily/syracuse` | `/it/destinazioni/sicilia/siracusa` |
| `trapani` | `/destinations/sicily/trapani` | `/it/destinazioni/sicilia/trapani` |
| `agrigento` | `/destinations/sicily/agrigento` | `/it/destinazioni/sicilia/agrigento` |
| `cefalu` | `/destinations/sicily/cefalu` | `/it/destinazioni/sicilia/cefalu` |
| `palermo-airport` | `/airports/palermo-falcone-borsellino` | `/it/aeroporti/palermo-falcone-borsellino` |
| `catania-airport` | `/airports/catania-fontanarossa` | `/it/aeroporti/catania-fontanarossa` |
| `trapani-airport` | `/airports/trapani-birgi` | `/it/aeroporti/trapani-birgi` |
| `palermo-cruise-port` | `/cruise-ports/palermo` | `/it/porti-crociere/palermo` |
| `catania-cruise-port` | `/cruise-ports/catania` | `/it/porti-crociere/catania` |
| `messina-cruise-port` | `/cruise-ports/messina` | `/it/porti-crociere/messina` |

`cefalu` is unaccented in the slug in both languages, matching the site's
existing handling of accented place names (`val-d-orcia`,
`salerno-costa-damalfi`). The accent is restored in the page name, the H1
and the title.

---

## 3. Titles — measured, not estimated

Every title 50–60 characters. The pixel figures are an **estimate** from
Arial advance widths at 20px against Google's ~580px desktop cut; they are
there to catch a title that will clip, and are not a measurement of what
Google actually renders.

### English

| Page | Title | ch | ~px |
|---|---|---:|---:|
| Sicily pillar | Private Transfers in Sicily – Book a Private Driver | 51 | 437 |
| Palermo | Palermo Private Transfers and Day Trips – Book a Driver | 55 | 506 |
| Catania | Catania Private Transfers and Etna Days – Book a Driver | 55 | 507 |
| Taormina | Taormina Private Transfers and Coast Runs – Book a Car | 54 | 514 |
| Syracuse | Syracuse and Ortigia Private Transfers – Reserve a Car | 54 | 496 |
| Trapani | Trapani Private Transfers and Salt Coast – Book a Car | 53 | 485 |
| Agrigento | Agrigento Private Transfers and Temples – Book a Driver | 55 | 508 |
| Cefalù | Cefalù Private Transfers and Beach Runs – Reserve a Car | 55 | 520 |
| Palermo Airport | Palermo Airport Transfers (PMO) – Book Your Driver | 50 | 468 |
| Catania Airport | Catania Airport Transfers (CTA) – Reserve Your Ride | 51 | 473 |
| Trapani Airport | Trapani Airport Transfers (TPS) – Book a Private Car | 52 | 470 |
| Palermo Cruise Port | Palermo Cruise Port Transfers – Reserve a Private Car | 53 | 489 |
| Catania Cruise Port | Catania Cruise Port Transfers – Book a Private Driver | 53 | 476 |
| Messina Cruise Port | Messina Cruise Port Transfers – Book a Private Car | 50 | 460 |

### Italian

| Page | Title | ch | ~px |
|---|---|---:|---:|
| Pillar | Transfer privati in Sicilia – Prenota il tuo autista | 52 | 417 |
| Palermo | Transfer privati a Palermo e dintorni – Prenota la corsa | 56 | 486 |
| Catania | Transfer privati a Catania e sull'Etna – Prenota ora | 52 | 448 |
| Taormina | Transfer privati a Taormina e sulla costa – Prenota ora | 55 | 484 |
| Siracusa | Transfer privati a Siracusa e Ortigia – Riserva l'auto | 54 | 457 |
| Trapani | Transfer privati a Trapani e nel Trapanese – Riserva | 52 | 464 |
| Agrigento | Transfer privati ad Agrigento e ai Templi – Prenota ora | 55 | 482 |
| Cefalù | Transfer privati a Cefalù e sulla costa nord – Prenota | 54 | 468 |
| Aeroporto PMO | Transfer aeroporto di Palermo (PMO) – Prenota l'auto | 52 | 476 |
| Aeroporto CTA | Transfer aeroporto di Catania (CTA) – Prenota l'autista | 55 | 485 |
| Aeroporto TPS | Transfer aeroporto di Trapani (TPS) – Prenota la corsa | 54 | 486 |
| Porto Palermo | Transfer porto crociere di Palermo – Riserva la corsa | 53 | 469 |
| Porto Catania | Transfer porto crociere di Catania – Prenota l'autista | 54 | 463 |
| Porto Messina | Transfer porto crociere di Messina – Prenota la corsa | 53 | 471 |

CTAs are deliberately varied across the set — Book a Private Driver, Book a
Driver, Book a Car, Reserve a Car, Book Your Driver, Reserve Your Ride, Book
a Private Car, Reserve a Private Car; Prenota il tuo autista, Prenota la
corsa, Prenota ora, Riserva l'auto, Riserva, Prenota l'auto, Prenota
l'autista, Riserva la corsa.

---

## 4. Keyword ownership

One primary query per page. A page may mention a neighbour's term in prose;
it may not target it in the title, the H1 or the description.

| Page | Owns | Must not target |
|---|---|---|
| Sicily pillar | private transfers in Sicily; getting around Sicily | any single city or airport query |
| Palermo | Palermo private transfers; Palermo city transfers | Palermo Airport transfers; Palermo cruise port transfers |
| Catania | Catania private transfers; Etna day transfers | Catania Airport transfers; Catania cruise port transfers |
| Taormina | Taormina private transfers; Giardini Naxos transfers | Catania Airport transfers |
| Syracuse | Syracuse / Siracusa private transfers; Ortigia | Catania Airport transfers |
| Trapani | Trapani private transfers; Egadi ferry connections | Trapani Airport transfers |
| Agrigento | Agrigento private transfers; Valley of the Temples | any airport query |
| Cefalù | Cefalù private transfers; north-coast beach transfers | Palermo Airport transfers |
| Palermo Airport | Palermo Airport transfers (PMO); PMO pickup | Palermo private transfers |
| Catania Airport | Catania Airport transfers (CTA); CTA pickup | Catania private transfers |
| Trapani Airport | Trapani Airport transfers (TPS); TPS pickup | Trapani private transfers |
| Palermo Cruise Port | Palermo cruise port transfers; shore excursions | Palermo Airport transfers |
| Catania Cruise Port | Catania cruise port transfers | Catania Airport transfers |
| Messina Cruise Port | Messina cruise port transfers; Taormina shore runs | Taormina private transfers |

**This map is intent-based, not volume-based.** No measured search volume
was available — see §7.

### Collision check against existing pages

`grep -ri sicil` over `content/`, `lib/`, `app/` and `components/` returns
two hits, both the homepage airport directory's Catania line. No existing
page targets any Sicily query, so nothing needs re-pointing — unlike the
Puglia build, where the Bari and Brindisi town pages already held the
airport titles.

---

## 5. Internal-link matrix

Every link a server-rendered anchor, every href from the route registry.

### Into the cluster

| From | Links to |
|---|---|
| Home EN/IT, Destinations section | Sicily pillar (card), Palermo Airport, Catania Airport (card sub-links) |
| Home EN/IT, airport directory | the three airport pages — PMO, CTA and TPS all already listed, none linked |
| Nav → Destinations | Sicily |
| Nav → Airports | new Sicily group: PMO, CTA, TPS |
| Nav → Cruise ports | Palermo, Catania, Messina |

The homepage airport directory already names Catania (CTA), Palermo (PMO)
and — to check during the build — possibly not Trapani. Those entries exist
as plain text and become links, exactly as Bari's did.

### Out of the pillar

All 13 supporting pages, in four blocks: destinations, airports, cruise
ports, and regional journeys.

### Between pages

| Page | Airports | Ports | Neighbours |
|---|---|---|---|
| Palermo | PMO, TPS | Palermo cruise port | Cefalù, Trapani |
| Catania | CTA | Catania cruise port | Taormina, Syracuse |
| Taormina | CTA | Messina cruise port | Catania |
| Syracuse | CTA | Catania cruise port | Catania |
| Trapani | TPS, PMO | — (Egadi ferries in prose) | Palermo, Agrigento |
| Agrigento | PMO, CTA | — | Trapani, Palermo |
| Cefalù | PMO | Palermo cruise port | Palermo |
| PMO | — | Palermo cruise port | Palermo, Cefalù, Trapani, Agrigento |
| CTA | — | Catania cruise port | Catania, Taormina, Syracuse |
| TPS | — | — | Trapani, Palermo, Agrigento |
| Palermo port | PMO | — | Palermo, Cefalù |
| Catania port | CTA | — | Catania, Taormina, Syracuse |
| Messina port | CTA | — | Taormina, Catania |

Every page also links the pillar and the quote form.

### Existing articles

To be audited during Phase 6. Links added only where they improve the
article; no mass insertion.

---

## 6. Design plan

Fourteen pages, fourteen layouts. The Puglia cluster's rule applies: a
distinct structural device per page, not a palette swap.

| Page | Device |
|---|---|
| Sicily pillar | Island-wide orientation: a three-corner composition (west / east / south-east) rather than a list of towns |
| Palermo | Layered historic quarters — stacked bands, each a part of the city a car treats differently |
| Catania | Dark volcanic field with a strong vertical axis running from the coast to Etna |
| Taormina | Terraced: content stepped down the page the way the town steps down the hillside |
| Syracuse | Split island/mainland geometry — Ortigia against the modern city |
| Trapani | Horizontal salt-pan bands, wide and low |
| Agrigento | Archaeological register: a ruled column list, temple-like, with the valley below the town |
| Cefalù | Harbour arc — a curved sequence of coastal stops |
| PMO | Arrivals board, as the Puglia airports use, but west-coast palette |
| CTA | Route comparison grid: one airport, three directions |
| TPS | Compact single-column gateway, the smallest of the three |
| Palermo cruise port | Quay-to-city flow, horizontal |
| Catania cruise port | Port-to-region fan |
| Messina cruise port | Strait orientation: the crossing on one side, the road south on the other |

### Photography

**There is none, and none is planned.** No licensed Sicily image exists in
`content/photos.ts`. The cluster is built image-free with typographic
devices, as Puglia was, and `docs/puglia-image-requirements.md` is extended
rather than duplicated. A generic Mediterranean photograph captioned as
Palermo Airport or the Messina quayside is the thing this project refuses.

---

## 7. Source log, and what cannot be published

### Verified and usable

| Fact | Source |
|---|---|
| PMO: Falcone Borsellino, formerly Punta Raisi; IATA PMO, ICAO LICJ; at Cinisi, 19 NM (35 km) west-north-west of Palermo; GESAP is the management company; 9,220,905 passengers in 2025; focus city for Aeroitalia, Ryanair, Volotea, Wizz Air | en.wikipedia.org/wiki/Palermo_Airport |
| CTA: Catania–Fontanarossa, also Vincenzo Bellini Airport; IATA CTA, ICAO LICC; 2.3 NM (4.3 km) south-west of Catania; operator SAC; 12,346,530 passengers in 2024; focus city for Ryanair and Wizz Air; Terminals A, B and C, C used exclusively by easyJet | en.wikipedia.org/wiki/Catania–Fontanarossa_Airport |
| TPS: Vincenzo Florio (civil) / Livio Bassi (military); IATA TPS, ICAO LICT; between Trapani and Marsala; civil operations managed by Airgest; dual civil/military, home of the 37° Stormo; 1,007,409 passengers in 2025, down 6.29%; Ryanair operating base, begun 2006, base 2009; buses by Autoservizi Salemi (Trapani, Marsala, Palermo), Autolinee Lumia (Agrigento) and AST (Trapani); equidistant from Trapani and Marsala stations | en.wikipedia.org/wiki/Trapani–Birgi_Airport |
| Catania airport station: Catania Aeroporto-Fontanarossa, inaugurated by RFI 13 March 2021 | fsitaliane.it press release; railwaygazette.com |
| Palermo airport station exists and has its own article | en.wikipedia.org/wiki/Palermo_Aeroporto_railway_station |
| Port of Palermo: 1,986,941 passengers in 2018, of which 577,934 cruise passengers; Fincantieri shipyard in the port area | en.wikipedia.org/wiki/Port_of_Palermo |
| Port of Messina: cruise traffic grew from 260,000 passengers in 2006 to 405,000 in 2009; linked by rail through Messina Centrale and Messina Marittima | en.wikipedia.org/wiki/Port_of_Messina |

### Checked and deliberately NOT publishable

- **Palermo airport train frequency, journey time and fare.** Sources are
  travel sites and FAQ pages giving every 30 minutes / two an hour / every
  30–60 minutes, 45 / 50–70 minutes, €5.80 / €6.80. They disagree and none
  is official. The pages will say the station exists and point at the
  operator. Nothing more.
- **Catania airport bus operator.** The brief's assumption of an "Alibus"
  service is not supported by any source read. Not named.
- **Current status of the Messina–Syracuse line.** One source reports
  traffic suspended on 21 January 2026 after Storm Harry, partly resumed to
  Giardini-Taormina. A page that tells people the train is running, or is
  not, would be wrong within a month either way.
- **Sicilian port authority names.** The 2016 reform gives Palermo to the
  western authority and Catania to the eastern one, and puts Messina under
  the Autorità di Sistema Portuale dello Stretto — not a Sicilian authority
  at all. Later sources add and move ports. The current decree was not
  found, so no page will name an authority as the operator of a port.
- **Port of Catania.** `en.wikipedia.org/wiki/Port_of_Catania` is a 404.
  There is no encyclopedic source read for it. Its page needs primary
  sourcing before it is written, or it will be the thinnest of the three.
- **Passenger figures as "current".** Palermo's port figures are 2018 and
  Messina's are 2006–2009. Where they are used at all they carry their year.
- **Trapani's new airport station completion date.** The page gives July
  2026 in the body and 2028 in a cited headline. No date will be printed.

### Not available

- **Google Search Console.** No credentials or OAuth in this environment.
  No impressions, query or index-coverage data for any page.
- **Bing Webmaster.** Queried during the Puglia work: `GetCrawlStats`,
  `GetQueryStats`, `GetRankAndTrafficStats` and `GetCrawlIssues` all
  returned zero records for this site. There is no measured query data to
  build a keyword map from, in either engine.

Consequently **§4 is reasoning about intent, not a ranking forecast**, and
nothing in this cluster should be described as predicted to rank.

---

## 8. Open items before build

1. The Port of Catania needs a primary source. If none is found, its page
   is built on what can be verified and says less, rather than more.
2. Distances between Sicilian points are not yet sourced. Each will carry
   its source and be written as an approximation, as Puglia's were.
3. The homepage Destinations grid holds five cards after the Puglia
   addition; Sicily makes six. Two photo-less cards in that grid is a
   layout question to look at when it is built, not a reason to fake a
   photograph for either.
