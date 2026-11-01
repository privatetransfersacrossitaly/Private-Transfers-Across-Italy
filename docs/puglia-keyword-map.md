# Puglia cluster — keyword and URL map

Phase 1 deliverable. Written 31 October 2026, before any page was built, so
that later pages can be checked against it rather than competing with it.

**No search volumes or difficulty scores appear here.** This project has no
keyword tool connected, and inventing those numbers would make the map look
authoritative while being fiction. What follows is intent mapping: one
primary term per URL, the secondaries it may legitimately rank for, and the
boundary that keeps each page off its neighbours' ground.

---

## 1. The rule this map exists to enforce

One primary keyword, one URL. A term appears as *primary* exactly once in the
table below. Where two pages could plausibly target the same phrase, the
boundary is stated explicitly and the losing page must not use it in its H1,
title, or meta description.

The two real cannibalisation risks in this cluster:

| Risk | Boundary |
|---|---|
| **Lecce vs Salento** | Lecce owns the city: its historic centre, its own accommodation, arrivals *into Lecce*. Salento owns the sub-region: Gallipoli, Otranto, Santa Maria di Leuca, Porto Cesareo, coast-to-coast journeys, and "which airport for the south". Salento must not read as a second Lecce page. |
| **Bari vs Puglia pillar** | The pillar owns "private transfers in Puglia" and regional orientation. Bari owns the airport (BRI), the cruise port, and the city. The pillar links to Bari for airport detail; it does not try to rank for "Bari airport transfers". |
| **Monopoli vs Polignano a Mare** | Adjacent coastal towns, 8 km apart, easily collapsed into one page. Monopoli leads on the harbour town, its beaches and masseria hinterland; Polignano leads on the cliff-top setting, resort and wedding arrivals. Each links to the other rather than describing it. |

## 2. Existing-site collision check

Searched `content/` and `lib/routes.ts` for every Puglia term. The only hits
are on the homepage: **"Bari" twice, "Puglia" once**, in passing. No existing
page targets any term in this cluster, and no registry route uses the
`/puglia` namespace. The cluster starts clean.

## 3. The map

**Final, approved 31 October 2026:** no trailing slash, English under
`/destinations/puglia/…`, Italian under `/it/destinazioni/puglia/…`. §4
records why these differ from the brief's literal list.

### Pillar

| | |
|---|---|
| **URL** | `/destinations/puglia` · `/it/destinazioni/puglia` |
| **Primary** | private transfers in Puglia |
| **Secondary** | Puglia airport transfers · Puglia chauffeur service · transfers Apulia Italy · how to get around Puglia without a car |
| **Intent** | Orientation. Someone who knows they are going to Puglia and has not yet decided which airport, which towns, or whether to drive. |
| **Must not target** | Any single-town or single-airport term. |

### Bari

| | |
|---|---|
| **URL** | `/destinations/puglia/bari` · `/it/destinazioni/puglia/bari` |
| **Primary** | Bari Airport transfers |
| **Secondary** | Bari private transfers · Bari Karol Wojtyła Airport (BRI) transfer · Bari cruise port transfers · Bari airport to city centre · Bari to Alberobello |
| **Intent** | Arrival logistics. Flight or ship has landed; the question is how to reach accommodation. |
| **Boundary** | Owns BRI and the cruise port. Journeys *from* Bari to other towns are introduced here and detailed on the destination page. |

### Brindisi

| | |
|---|---|
| **URL** | `/destinations/puglia/brindisi` · `/it/destinazioni/puglia/brindisi` |
| **Primary** | Brindisi Airport transfers |
| **Secondary** | Brindisi private transfers · BDS airport transfer · Brindisi airport to Lecce · Brindisi to Ostuni · Brindisi airport to Salento |
| **Intent** | Arrival logistics for the south. Often the better airport for Salento, and the page has to say so plainly. |
| **Boundary** | Owns BDS. The "Bari or Brindisi?" comparison lives here and on the pillar, nowhere else. |

### Lecce

| | |
|---|---|
| **URL** | `/destinations/puglia/lecce` · `/it/destinazioni/puglia/lecce` |
| **Primary** | private transfers in Lecce |
| **Secondary** | Lecce chauffeur service · Brindisi Airport to Lecce · Bari Airport to Lecce · Lecce historic centre accommodation transfer |
| **Intent** | Reaching and moving around one city. |
| **Boundary** | City only. Gallipoli and Otranto are mentioned as onward journeys and linked to Salento, not described here. |

### Ostuni

| | |
|---|---|
| **URL** | `/destinations/puglia/ostuni` · `/it/destinazioni/puglia/ostuni` |
| **Primary** | Ostuni private transfers |
| **Secondary** | Ostuni masseria transfers · Ostuni wedding transfers · Brindisi Airport to Ostuni · Bari Airport to Ostuni |
| **Intent** | Mostly accommodation-led: masserie sit outside the town on unlit country roads, which is the strongest honest argument for a pre-arranged car anywhere in this cluster. |
| **Boundary** | Owns "masseria transfer" and wedding-guest coordination as primary themes. Other pages may mention masserie; only Ostuni leads on them. |

### Alberobello

| | |
|---|---|
| **URL** | `/destinations/puglia/alberobello` · `/it/destinazioni/puglia/alberobello` |
| **Primary** | Alberobello transfers |
| **Secondary** | Bari Airport to Alberobello · Brindisi Airport to Alberobello · Alberobello trulli accommodation transfer · Valle d'Itria transfers |
| **Intent** | Day-visit and overnight arrivals to a UNESCO site with restricted central access. |
| **Boundary** | Owns Valle d'Itria orientation — Locorotondo, Martina Franca, Cisternino — as onward context. |

### Monopoli

| | |
|---|---|
| **URL** | `/destinations/puglia/monopoli` · `/it/destinazioni/puglia/monopoli` |
| **Primary** | Monopoli private transfers |
| **Secondary** | Bari Airport to Monopoli · Monopoli beach resort transfers · Monopoli to Alberobello · Monopoli harbour accommodation |
| **Intent** | Coastal stays, often a week in one resort or masseria with a couple of excursions. |
| **Boundary** | Leads on the harbour town and its beaches. Polignano is a linked neighbour. |

### Polignano a Mare

| | |
|---|---|
| **URL** | `/destinations/puglia/polignano-a-mare` · `/it/destinazioni/puglia/polignano-a-mare` |
| **Primary** | Polignano a Mare transfers |
| **Secondary** | Bari Airport to Polignano a Mare · Polignano a Mare resort transfers · Polignano a Mare wedding transfers · Polignano to Monopoli |
| **Intent** | Short hop from BRI to a cliff-top town; high proportion of couples and small groups. |
| **Boundary** | Leads on the cliff setting and resort/wedding arrivals. |

### Salento

| | |
|---|---|
| **URL** | `/destinations/puglia/salento` · `/it/destinazioni/puglia/salento` |
| **Primary** | Salento private transfers |
| **Secondary** | Brindisi Airport to Salento · Lecce to Gallipoli · Lecce to Otranto · Santa Maria di Leuca transfers · Porto Cesareo · Salento beach resort transfers |
| **Intent** | Planning a sub-region, not a town. Which airport, how far apart places really are, and why a week there usually means several transfers. |
| **Boundary** | Sub-regional only. Must not re-describe Lecce; links to it as the main arrival city. |

## 4. Two things in the brief that conflict with the live site

Both change all 18 URLs permanently, so they are settled before any page is
written rather than migrated afterwards.

### 4.1 Trailing slashes

The brief requires every URL to end in `/`. **The live site does the
opposite**, and verified against production today:

```
/destinations/rome   → 200, canonical .../destinations/rome
/destinations/rome/  → 308 redirect
```

`trailingSlash` is unset in `next.config.ts`, so Next's default — no trailing
slash — applies site-wide. It is a single global switch, not a per-route one.
Turning it on would rewrite every existing URL on a live, indexed site and
send every current link through a redirect.

The brief anticipates this: *"Use the existing multilingual routing
conventions if they differ, without introducing inconsistent URL patterns."*

**Recommendation: follow the site's no-trailing-slash convention.** The
requirements underneath it — self-referencing canonicals, one URL per page,
no duplicates, consistent internal links — are all satisfied either way, and
are already enforced by the route registry.

### 4.2 Top-level `/puglia` versus `/destinations/puglia`

Every destination on this site lives under one of four namespaces:

```
/destinations/…   /airports/…   /cruise-ports/…   /routes/…
```

The brief specifies `/puglia/bari`, which creates a second, parallel way of
organising destinations. That is the inconsistency the same paragraph warns
against, and it would leave Rome at `/destinations/rome` while Bari sits at
`/puglia/bari`.

Two defensible options:

| | URL | For | Against |
|---|---|---|---|
| **A** | `/puglia/bari` | Shorter; matches the brief exactly | Second IA for the same kind of content; Puglia becomes the odd one out |
| **B** | `/destinations/puglia/bari` | Consistent with every existing destination; breadcrumbs and nav slot in unchanged | Longer; departs from the brief's literal URL list |

**Recommendation: B.** Consistency across an indexed site is worth more than
nine characters, and the Italian side already translates its namespaces
(`/it/destinazioni/…`), which B inherits for free.

**Decided: B**, approved 31 October 2026, together with no trailing slash.
The table in §3 carries the final URLs.

## 5. Scale, measured rather than estimated

From the closest existing cluster, Campania — nine pages built to the
standard this brief asks for:

| | |
|---|---|
| Content files | 9, holding both languages, 17–49 KB each |
| Prose per file | ~2,600–3,800 words across EN + IT |
| Page components | 9, 5–12 KB each |
| Registry entries | 9 ids × 2 locales |

Puglia is the same shape: **roughly 27,000 words of original bilingual prose**
plus nine bespoke components, before imagery, linking and QA. That is the
honest size of the job, and it is why it is being delivered in the phases the
brief sets out rather than in one pass.

## 6. Build status

| Page | EN | IT | Phase | `published` |
|---|---|---|---|---|
| Puglia pillar | ✅ | ✅ | 2 | `true` |
| Bari | ✅ | ✅ | 3 | `true` |
| Brindisi | ✅ | ✅ | 3 | `true` |
| Lecce | ✅ | ✅ | 4 | `true` |
| Ostuni | ✅ | ✅ | 4 | `true` |
| Alberobello | ✅ | ✅ | 4 | `true` |
| Monopoli | ✅ | ✅ | 5 | `true` |
| Polignano a Mare | ✅ | ✅ | 5 | `true` |
| Salento | ✅ | ✅ | 5 | `true` |

**The cluster is complete: 18 pages, 9 URLs in each language.**

A page is listed in the sitemap, reachable from the main navigation and
linked from the pillar's town cards if and only if its registry entry says
`published: true`. One flag governs all three, so there is no state in which
a card links to a page that does not exist.

### Keyword boundaries as actually built

- The pillar targets **regional, orientation** terms only. It names all eight
  towns but targets none of them.
- **Bari** owns BRI and the Port of Bari. It introduces the runs to
  Alberobello, Polignano, Monopoli and Matera without targeting those towns'
  own terms, and it does **not** carry the airport comparison.
- **Brindisi** owns BDS and, by the map's allocation, the
  "Bari or Brindisi?" comparison — which appears on exactly two pages in the
  cluster, here and on the pillar, and nowhere else. Ostuni states the
  *consequence* for one town (it works from either airport) without hosting
  the comparison itself.
- **Lecce** is city-only. Gallipoli and Otranto are named as onward journeys
  and nothing more; their description belongs to the Salento page.
- **Ostuni** leads on masserie and wedding-guest coordination. Brindisi and
  Alberobello both mention country stays; only Ostuni is built around them.
- **Alberobello** owns the UNESCO listing and Valle d'Itria orientation —
  Locorotondo, Martina Franca and Cisternino are named here as context and
  have no pages of their own.
- **Monopoli** leads on the harbour town and its coastline. Polignano is a
  named, linked neighbour and is never described.
- **Polignano a Mare** leads on the cliff setting and on *small* weddings —
  twenty or thirty people at a clifftop venue. The larger guest-coordination
  job stays with Ostuni, and the page links there for it rather than
  restaging it.
- **Salento** is sub-regional only and must not re-describe Lecce. Lecce
  appears exactly twice: one entry in the circuit and one link. The content
  type has no section a city description could occupy, so the boundary is
  enforced by the structure rather than by discipline.

### Facts the cluster does not assert

The official Aeroporti di Puglia site refuses automated requests, so no
figure on these pages is attributed to it. Road distances come from route
planners, transfer operators and the Puglia regional route guide, which
disagree with one another; every one of them is published as an
approximation and each page says so in its own words. Passenger totals are
given only for Brindisi, where the source is unambiguous (Assaeroporti,
2024); Bari's sources give two different years and the figure is therefore
omitted.

whc.unesco.org also refuses automated requests, so Alberobello's listing
details are published as recorded in the encyclopaedia entry that cites
them, and the page says so on its face. Trulli counts per district come
from travel sources and are marked approximate, because UNESCO publishes
no count. The Trullo Sovrano's national-monument year is given as 1923 by
some sources and 1930 by others, so no year is printed.

No page in the cluster asserts a specific limited-traffic scheme, its hours
or its boundaries. Lecce, Ostuni and Alberobello all have historic centres
that cars cannot practically enter, and each page says that in terms of the
verified physical facts — a walled centre with three gates, a hilltop
citadel inside its walls, two protected districts of stepped stone lanes —
rather than describing a regulation no reachable source documents.

Three further traps in Phase 5, avoided rather than inherited:

- Otranto is widely called Italy's easternmost town. Its own entry does not
  say that — it says the Faro della Palascìa, about five kilometres
  south-east, marks the most easterly point of the Italian mainland. The
  cluster says the latter.
- Gallipoli's entry gives two conflicting population figures (19,536 in the
  infobox, 31,862 in the lead), so no population is printed for it.
- Where the Adriatic and the Ionian meet at Punta Meliso is published as
  "traditionally considered", which is the source's own qualifier, and the
  rival promontory 440 m south is named.

Domenico Modugno is very widely said to have been born in Polignano a Mare.
The town's entry does not mention him, so the page does not claim it.

Porto Cesareo's marine protected area is dated to a 1997 ministerial decree
and its joint management with Nardò. The coastal-length and hectare figures
that circulate could not be confirmed against an official source and are
therefore not printed. No prices, vehicle availability, fleet ownership, driver employment,
testimonials or service guarantees appear anywhere in the cluster.
