# Bologna Stage 4 — feasibility audit of the three departure routes

**27 October 2026. Read-only.** No application code, registry entry, URL map,
inventory row, link map, navigation or existing content was changed. The DOCX
master is untouched.

Question: do `route-majestic-blq`, `route-commercianti-blq` and
`route-excelsior-blq` offer enough distinct, source-supported value to justify
3 page ids / 6 localized routes?

---

## 1. Summary recommendation

> ### Defer all three.

Not because departure traffic does not exist, but because **the argument Phase 1
built them on has since been disproved**, and because for two of the three there
is **no published departure information of any kind** to write from.

The alternative that does serve a departing traveller is set out in §6: a short
departure section on each existing arrival page. That is a content change, not
three new pages, and it needs its own approval.

---

## 2. The finding that decides it

Phase 1 justified departure pages with one argument, at
`docs/bologna-phase1-recommendation.md` §3:

> **"The ZTL runs 07:00–20:00. That makes the two directions asymmetric:**
> A flight landing at **21:40** arrives into an *unrestricted* city.
> A flight at **08:00** departs the same address *during* the restriction."

That argument is sound in general. **It applies to none of the three hotels
that were actually built**, and each page says so in its own words:

| Hotel | What the live page states | Does the 07:00–20:00 window matter? |
|---|---|---|
| **Majestic** | *"totally pedestrianised"*, and via Indipendenza is *"among the streets restricted around the clock"* | **No.** Restricted 24 h in both directions |
| **Commercianti** | *"Pedestrian area inside the ZTL"* — and pedestrian zones are restricted 24 h | **No.** Restricted 24 h in both directions |
| **Excelsior** | *"Nothing we could verify says the address is restricted, and nothing we could verify says it is not"* | **Cannot be invoked.** The window cannot be applied to an address whose status is unknown |

Phase 1 half-anticipated this — it noted the asymmetry "collapses" for the
Majestic and Commercianti — but it expected the Excelsior to carry the argument,
on the assumption that the hotel was *outside* the zone. **Stage 2 verification
disproved that assumption**, and with it the last hotel the asymmetry could have
applied to.

So the three departure pages have arrived at Stage 4 with their stated reason
for existing already removed by this project's own research.

---

## 3. Decision table

| Page id | Distinct question | New verified content available | Duplication with its arrival page | Can it be written without inventing operational detail? | Verdict |
|---|---|---|---|---|---|
| `route-majestic-blq` | "How do I get out to the car from a pedestrianised address?" | **None.** The hotel publishes arrival instructions only | **High** — 76% of the arrival page is direction-neutral | **No.** Would require a departure meeting point and an outbound access claim, both unverified | **Defer** |
| `route-commercianti-blq` | "Does the plate registration work on the way out, and when do I need it?" | **None.** The hotel publishes nothing about departure | **High** — 82% direction-neutral | **No.** The brief forbids inventing a departure procedure, plate deadline, access permission or meeting place — and nothing else is left | **Defer** |
| `route-excelsior-blq` | "How long before my flight should I leave, and is the monorail still running?" | **One sentence.** Starhotels states the Marconi Express *"runs service from morning until midnight"* — a last-departure consideration not published on any current page | **High** — 80% direction-neutral, and the monorail comparison reverses without changing | **Partially** — but one new sentence does not carry a page | **Defer** |

---

## 4. What the arrival pages already cover — measured, not assumed

Main content extracted from the live build, site footer excluded, and classified
sentence by sentence.

| Page | Sentences | Direction-bearing | **Direction-neutral** |
|---|---|---|---|
| `arrival-majestic` | 66 | 16 (24.2%) | **75.8%** |
| `arrival-commercianti` | 60 | 11 (18.3%) | **81.7%** |
| `arrival-excelsior` | 66 | 13 (19.7%) | **80.3%** |

**Between three-quarters and four-fifths of each arrival page would be
reproduced verbatim on its departure counterpart.** The endpoints swap, the
hero swaps, and almost everything that makes the page worth reading stays put:
whose arrangement is whose, the hotel's published position, what cannot be
claimed, what to send.

For contrast, the pages that **do** exist are genuinely distinct from each
other. Verbatim sentence overlap between each arrival page and its own hotel
page is **1.7%, 7.7% and 3.6%**. That is what a non-duplicative pair looks like
in this cluster, and it is the standard a departure page would have to meet.

### What each existing page already answers

| Question a departing traveller has | Already answered on |
|---|---|
| Can a car reach this address at all? | the hotel page and the arrival page |
| Whose permission is the hotel's and whose is ours? | the hotel page and the arrival page, in a required limits block |
| What do I send when I ask? | the hotel page, the arrival page and the BLQ page |
| Where will the driver be? | all three — "settled in the reply to your request" |
| Is there a public-transport alternative? | the Excelsior hotel page, the Excelsior arrival page and the BLQ page |
| What are Bologna's restriction hours? | the Bologna hub, in all three bands |

**No existing page carries departure-specific guidance.** That is the one
genuine gap — and §6 proposes filling it without three new pages.

---

## 5. Gaps that prevent safe drafting

### Grand Hotel Majestic

The hotel's directions are written entirely for **arriving** guests: do not use
the address, use the Via Manzoni side entrance, a valet will meet you. Nothing
addresses leaving.

A departure page would need at least one of: where a car may wait to collect,
how far ahead to be ready, or whether the hotel's access works outbound.
**None is published, and none may be invented.** The hotel's permission is its
own and operated through its own valet; this audit does not treat it as ours.

The one departure-adjacent fact the hotel does publish — *"the return time for
your car may be longer than usual"* — concerns **its valet returning a guest's
own car**, not a transfer collection. It is not currently published on any page
and should not be repurposed as transfer guidance.

### Art Hotel Commercianti

The hotel describes an authorised route and plate registration **for arriving
guests**. It publishes nothing about departure: no procedure, no deadline, no
collection point.

The brief forbids inventing any of those, and once they are excluded **nothing
verified remains**. A page here would consist of the limits block and generic
advice — the definition of thin content.

### Starhotels Excelsior

The only genuinely new verified item is the hotel's statement that the Marconi
Express *"runs service from morning until midnight"*. It is relevant on the way
out, where a last departure matters.

Two problems. It is the **hotel's** claim about a **third party's** service, and
it is vague — the airport is the authoritative publisher of those hours and
gives none on the page read. And no road journey time exists for either
direction, so the page cannot answer the departing traveller's real question,
which is how long to allow.

### All three

Still unresolved and still blocking a confident departure page: whether the
hotels' permissions extend to our vehicles; the Comune di Bologna's ZTL rules,
which could not be read; and the airport's silence on where private-hire
vehicles collect passengers.

---

## 6. The alternative that does serve the departing traveller

**Add a short departure section to each existing arrival page**, rather than
creating three mirrored pages.

- It fills the one real gap — no page currently gives departure guidance.
- It adds no near-duplicate page and no cannibalisation risk.
- It fits the existing `RoutePage` type without a new component or a new route.
- It keeps the Excelsior's last-monorail fact where a reader already is.
- It can be written honestly, because a section may say "this is the same
  arrangement in reverse, and here is the one thing that differs" without
  needing a full page of material to sustain it.

**This is a proposal, not a change.** It would need its own approval, and it
touches content on three live pages.

---

## 7. Changes that would be needed later — not made now

If the owner later approves departure pages, or the §6 alternative:

**URL map** — `docs/bologna-url-map.md` already contains all four departure
rows, approved and unused:

```
route-majestic-blq      /routes/grand-hotel-majestic-to-bologna-airport
route-commercianti-blq  /routes/art-hotel-commercianti-to-bologna-airport
route-excelsior-blq     /routes/starhotels-excelsior-to-bologna-airport
route-savoia-blq        /routes/savoia-hotel-regency-to-bologna-airport
```

No URL change is needed either way. Under this audit's recommendation they
remain reserved and unbuilt.

**Page inventory** — the four rows are currently `defer` / P2 with the Stage 3
reason. If the recommendation is accepted they should gain this audit's
evidence; if departure pages are later approved, they return to `build`.
**Neither edit is made here.**

**Internal-link map** — 33 rows reference departure routes, all marked
deferred. If the §6 alternative is taken instead, those rows should be closed
as superseded rather than left pending. **Not changed here.**

**Savoia** — `route-savoia-blq` is doubly blocked: the hotel itself is held for
Wave 2. Nothing in this audit changes that.

---

## 8. Go / no-go per English–Italian pair

| Pair | EN | IT | Decision |
|---|---|---|---|
| `route-majestic-blq` | `/routes/grand-hotel-majestic-to-bologna-airport` | `/it/tratte/grand-hotel-majestic-aeroporto-bologna` | **NO-GO** — no published departure information exists |
| `route-commercianti-blq` | `/routes/art-hotel-commercianti-to-bologna-airport` | `/it/tratte/art-hotel-commercianti-aeroporto-bologna` | **NO-GO** — nothing verified would remain after the forbidden inventions are excluded |
| `route-excelsior-blq` | `/routes/starhotels-excelsior-to-bologna-airport` | `/it/tratte/starhotels-excelsior-aeroporto-bologna` | **NO-GO** — one new sentence does not carry a page |

**The Italian makes no difference to any of these.** The constraint is an
absence of source material, which is identical in both languages. There is no
pair where English would be publishable and Italian would not, or the reverse.

---

## 9. What would change the answer

Any one of these would make at least one departure page worth building:

1. **The hotels publish departure guidance** — a collection arrangement, a
   plate deadline, or confirmation that the access works outbound.
2. **The owner confirms the operational departure practice** at a 24-hour
   restricted address: where a vehicle waits, and how long before a flight. That
   is owner-provided operating information, not public evidence, and would have
   to be presented as such.
3. **The Comune's ZTL rules become readable**, settling the Excelsior's status
   and the private-hire question. That alone could revive the asymmetry argument
   for the Excelsior.
4. **An authoritative road journey time appears**, letting a departure page
   answer "how long should I allow" — the question it exists to answer.

Until one of those happens, a departure page would be a mirrored arrival page
with a different heading, which is exactly what the architecture forbids.

---

## 10. Launch-checklist items noted, not addressed

Recorded here only because they belong on the final list; neither was examined
or changed in this audit. **`NEXT_PUBLIC_SITE_URL` unset** — canonicals,
hreflang and sitemap URLs resolve to localhost. **`QUOTE_ENDPOINT_URL` unset**
— no quote form is rendered and no page claims an enquiry has been sent.

---

## 11. Confirmation

Read-only. No route registry, page inventory, internal-link map, URL map,
sitemap, navigation or page content was modified; the only file created is this
one. No application code was written. No environment variable, API, CRM, email,
DNS, hosting or deployment configuration was touched. Nothing was committed,
pushed or deployed. `docs/Bologna_Cluster_Architecture.docx` is untouched.

**Recommendation: defer all three departure routes.** Stopping for review;
Stage 4 implementation has not begun.
