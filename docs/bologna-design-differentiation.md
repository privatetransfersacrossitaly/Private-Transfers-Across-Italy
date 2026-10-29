# Bologna cluster — design differentiation plan

**Status: proposed, not implemented.** No component has been written. This is
the design argument submitted for approval alongside the inventory.

The constant stays constant: one brand, the same type scale, palette, header,
footer, buttons, focus rings and spacing rhythm as the other 35 pages. What
differs is composition, and the test every earlier cluster was held to applies
here — *changing the heading and the photograph is not a different design.*

---

## The fact that shapes every page in this cluster

Bologna's restricted centre has **three tiers**, verified from the official
tourist board (research log Z1–Z4):

| Tier | Rule | What a traveller can do about it |
|---|---|---|
| **Outside the ZTL** | no restriction | nothing — the car reaches the door |
| **Inside the ZTL** | restricted **07:00–20:00, every day** | **arrive outside those hours** |
| **Area T / pedestrian zones** | restricted **24 hours** | nothing — the hour never helps |

This is the cluster's organising idea, and it does two jobs at once.

**It makes hotel pages defensible.** The standing objection to per-hotel pages
is that they become one page with the name swapped. Here they do not, because
**a hotel's tier is a property of its address**, and the four selected hotels
sit in four different positions. The page is not "about" the hotel; it is about
what that hotel's street allows.

**It makes the reverse-direction route pages non-duplicative** — see below.

---

## What already exists, and what Bologna would add

Thirteen heroes and sixteen blocks exist. The proposal reuses six and adds
**one new hero** and **one new module**.

### Proposed new: `HeroTiers`

**For the Bologna hub.** Three stacked bands — unrestricted, timed, absolute —
with the hotels and the reader's own address sorted into them.

Milan's `ZoneDiagram` is the nearest existing thing and it is the wrong shape:
it draws **two nested zones**, Area B containing Area C, because Milan's
restriction is geographic containment. Bologna's is not nested — Area T sits
*inside* the ZTL but is stricter in **time**, not in position. Drawing it as
nested boxes would say something false.

So the hero is a vertical scale of severity, and the reader's question is
"which band am I in?" rather than "which ring am I in?". It is also the
opposite move from Tuscany's `HeroConstraint`, which exists because Florence's
rule **could not be read**. Bologna's can. This hero states a rule; that one
confessed a gap.

### Proposed new: `AddressTier`

**For the four hotel pages.** A compact band that names the street, states its
tier, and gives the one consequence that follows.

Close to `FactStrip`, and the difference is the point: `FactStrip` presents
facts as equal and parallel. This presents **one fact and its consequence**,
because on a hotel page there is exactly one thing worth knowing and
everything else is decoration.

---

## Page by page

### Bologna hub — `/destinations/bologna`

**Dominant module:** `HeroTiers`, and a hotel index keyed to it.

**Proposed order:** tier hero → the two airports question answered quickly
(there is only one, which is itself worth saying after Milan and Tuscany) →
hotels sorted by tier, not alphabetically → the concession the Comune does not
explain → onward to Ravenna → questions → closing.

**Why.** Every other city hub on this site opens by orienting a visitor.
Bologna opens by **sorting** them: before anything else is useful, a reader
needs to know which of three rules their address falls under.

**Against Rome and Milan**, which it could most easily have cloned: Rome leads
with an arrival-point comparison; Milan draws nested zones. Florence confesses
an unresolved rule. Bologna's restriction is fully published and *tiered*, so
it gets a composition none of the others would fit.

**The honest gap it must carry.** Bologna Welcome states concessions exist for
hotel access (Z5) but publishes no procedure, and says nothing about private
hire (Z8). So the hub ends its ZTL band the way Florence's does: with the
limit of what we know, and the Comune as the first outbound link.

**No photograph.**

### BLQ — `/airports/bologna-marconi`

**Dominant module:** a two-column panel — what the airport publishes, and what
it does not.

**Proposed order:** compact meta hero → Marconi Express, operator-stated →
"what the airport does not publish" → the four arrival routes → what to send →
questions → closing.

**Why.** BLQ is the only airport in this project with a **dedicated monorail
to the city's main station** — two stations, no intermediate stops, a
7-minute ride the operator itself states (B2, B3). That is a genuinely strong
public-transport alternative, and a page that hid it would be untrustworthy.

So the page names it plainly, and then states the counterweight with equal
prominence: **the airport publishes no pickup point for private hire** (B8).
Those two facts belong side by side, which is why the module is two columns
rather than a list.

**Against Pisa**, the nearest sibling: Pisa's argument is that a *name* is
narrower than the job. BLQ's is that *the published record is incomplete* —
generous about the monorail, silent about the thing a transfer customer needs.

**No photograph.** A terminal kerbside photo would imply the pickup
arrangement B8 says is unpublished.

### The four hotel pages

Same page type, deliberately **four different shapes**, because each answers a
different question.

| Hotel | Street | Tier | The page's one argument | Leading module |
|---|---|---|---|---|
| **Majestic** | Via Indipendenza 8 | Area T, 24 h | "The hour will not help you here" | `AddressTier` + a timing refusal |
| **Excelsior** | Viale Pietramellara 51 | outside the ZTL | "Nothing is in the way — and the station opposite may suit you better" | `AddressTier` + an honest alternative |
| **Commercianti** | Via de' Pignattari 11 | pedestrian, 24 h | "The car finishes nearby; the last stretch is on foot" | `AddressTier` + a Venice-style endpoint split |
| **Savoia** | Via del Pilastro 2 | outside the centre | "No restriction at all; the Fiera calendar is the variable" | `AddressTier` + a context note |

**The Excelsior page is the test of the whole set.** It is the one where the
honest answer is partly *"you may not need us"* — the Marconi Express
terminates at the station it faces. A hotel page that could not say that would
prove the set is marketing rather than information. It says it.

**The Commercianti page reuses the Veneto's `EndpointPanels`** — road side and
walking side. That component exists because Venice is the one city where a car
cannot finish the journey; a pedestrian zone in Bologna is the same problem at
a smaller scale, and reusing the module is more honest than inventing a softer
one. Recorded as a deliberate reuse.

**No photographs on any of the four.** See the image section.

### The eight route pages — and why both directions survive

This is the cluster's biggest cannibalisation risk and it is answered by a
fact, not by an assertion.

**The ZTL runs 07:00–20:00. Arrival and departure are therefore asymmetric:**

- A flight landing at **21:40** means an arrival into an *unrestricted* city.
  The arrival page can say so.
- A flight at **08:00** means a departure *during* the restriction, from the
  same address. The departure page must say the opposite.

Same hotel, same airport, **opposite advice** — and the advice is the content.

| Direction | Leads with | Why it is not the other page |
|---|---|---|
| **BLQ → hotel** | the flight, then the restriction waiting at the far end | The unknown is the *pickup* (B8) and the arrival hour |
| **hotel → BLQ** | the departure time, working backwards | The unknown is the *margin* — the restriction is at the start, not the end |

For `Majestic` and `Commercianti` (24-hour tiers) the asymmetry collapses, and
**those two pairs are the weakest**. Both directions are still proposed,
because the owner requires them and because the *departure* problem at a
pedestrian address — walking out to meet a car with luggage at 06:00 — is
genuinely different from the arrival problem. **If the owner wants to cut, the
four departure pages are the half to hold**, and the inventory marks them P2
for exactly that reason.

All eight use `HeroRoute`, the shared journey strip every route page in the
project uses. That is a documented page-type convention, not a lapse.

### Ravenna Cruise Terminal — `/cruise-ports/ravenna-porto-corsini`

**Dominant module:** a source-disagreement table.

**Proposed order:** hero naming the place precisely → **what the three
official sources each say** → the temporary-terminal fact → the two directions
→ what to send → questions → closing.

**Why.** This is the best-sourced page in the cluster and the sources
**contradict each other** (R1–R3): 13 km versus about 15 km; a bus stop in
front of the terminal versus a ten-minute walk; taxis normally available
versus limited and unbookable.

Averaging them would be invention. So the page **shows the disagreement** —
three columns, three publishers, attributed — and lets the reader see why no
single figure is published. No other page on this site does this, because no
other subject needed it.

**Against Civitavecchia**, the only existing cruise-port page: that one is
about matching a terminal name on a ticket to a berth. This one is about a
port whose own describers disagree, and whose terminal is **currently a
temporary marquee** (R5) — a fact that has to be stated, because a reader
expecting a terminal building would be misled.

**No photograph**, and here the reason is unusually strong: there is no
terminal building to photograph.

### Ravenna hub — `/destinations/ravenna`

**Deliberately the shortest page in the cluster**, as the Verona route is in
the Veneto. It exists because the shared route type requires a `PageId` at both
endpoints, and a terminal route therefore cannot be built without a city page.
Its content is the single fact that the cruise port is not in the city.

---

## Images

**Every page in this cluster is proposed without a photograph.** The reasons
are specific, not blanket:

- **No Bologna, Ravenna, Porto Corsini or hotel image exists** in
  `content/photos.ts` or `docs/asset-manifest.csv`.
- **Hotel photography is the hard case (D5).** A named hotel's page carries a
  strong expectation that the picture *is* that hotel. Almost no CC0 image of
  a named operating hotel exists, and a generic interior would be exactly the
  misleading image the architecture forbids. The owner has confirmed text-led
  by default.
- **A BLQ kerbside photo would imply the pickup arrangement B8 says is
  unpublished.**
- **A terminal photo would depict a building that does not exist** (R5).
- **Precedent is strong:** Tuscany shipped four pages with zero images by
  decision; the Veneto six of nine, including its strongest page.

If the owner supplies licensed property-specific photography, the hotel pages
can take it without restructuring — `AddressTier` sits below a hero that could
become `HeroSplit`.

---

## Proposed acceptance test

If built as planned, no two pages would share a section order, and none would
use the generic hero → cards → icon grid → benefits → FAQ → CTA stack.

| | Bologna hub | BLQ | Hotel ×4 | Routes ×8 | Terminal |
|---|---|---|---|---|---|
| Hero | `HeroTiers` *(new)* | `HeroMeta` | `AddressTier` *(new)* under a compact hero | `HeroRoute` | `HeroBand` |
| Dominant module | the three tiers | published vs unpublished | the street's tier | directional asymmetry | source disagreement |
| Argument | "which band is your address in?" | "generous about the train, silent about the car" | four different answers | arrival ≠ departure | "the sources disagree; here they are" |
| Photograph | none | none | none | none | none |

---

## Open design questions for approval

1. **Is `HeroTiers` worth a fourteenth hero**, or should the Bologna hub reuse
   Milan's `ZoneDiagram` with different labels? I recommend the new one: the
   nested-box drawing would misrepresent a rule that is tiered by *time*, not
   by containment.
2. **Is `AddressTier` a new module or a `FactStrip` variant?** Either is
   defensible; the variant is less code, the new module states a consequence
   rather than a parallel fact.
3. **Do the four departure pages earn their place** given the asymmetry
   collapses for the two 24-hour hotels? Recommendation: build them, but they
   are the first thing to cut and are marked P2 accordingly.
