# Tuscany cluster — design differentiation

**Status: BUILT, 26 October 2026.** The owner approved all six pages and chose
to publish Florence with the ZTL gap labelled. What follows is the design
argument as submitted, with a record at the foot of what was actually built
and where the build departed from the proposal.

The constant stays constant: one brand, the same type scale, palette, header,
footer, buttons, focus rings and spacing rhythm as the other 29 pages. What
differs is composition, and the test the earlier clusters were held to applies
here — *changing the heading and the photograph is not a different design.*

---

## The constraint that shapes every decision here

**Both Tuscan photographs are already in use**, and one of them is the site's
hero image:

| Slug | Current placement |
|---|---|
| `tuscany-val-dorcia` | **Homepage hero**, and again on the day-trips service card |
| `florence-skyline` | Florence destination tile |

The site currently has no image used on more than one page. Reusing either
would break that, and reusing the site's own hero on a sub-page would be
worse than reusing anything else.

**So this cluster is planned text-led from the outset**, with new photography
sourced only where it does real work. That is not a compromise — the Veneto
cluster ships six of nine pages with no photograph by decision, and its
strongest page, the Venice hub, is one of them.

---

## What already exists, and what Tuscany would add

Twelve heroes and sixteen blocks exist. The proposal reuses nine of them and
adds **one new hero** and **one new module**.

### Proposed new: `HeroConstraint`

**For the Florence hub.** A hero that states a restriction the page cannot
fully resolve.

Florence's ZTL is the page's spine, and the research is **blocked on the point
that matters** — whether private-hire cars may enter. Rome and Milan could
each say, in the city's own words, that NCC vehicles are among the permitted
categories. **Florence cannot.** A hero that implied otherwise, or that simply
borrowed Milan's confident `ZoneDiagram`, would be the single most likely way
this cluster could mislead someone.

So the hero states the constraint, names what is known, and marks the open
question visibly rather than hiding it in an FAQ — with the link to the
Comune as the page's first outbound reference. It is the opposite move from
Milan's `ZoneDiagram`, which draws a rule it can state precisely.

### Proposed new: `ComuneIndex`

**For the Val d'Orcia.** The five comuni — Castiglione d'Orcia, Montalcino,
Pienza, Radicofani, San Quirico d'Orcia — with what each means for an arrival.

Close to the Veneto's `TownIndex`, and the difference is the point. `TownIndex`
keys towns to *which arm of a lake they sit on*, because on Lake Como the
branch decides the road. Here the organising fact is different: there is **no
railway at all**, and the five comuni are keyed to their nearest railhead —
Siena, Buonconvento or Chiusi-Chianciano Terme. The module answers "how would
I otherwise get here?", which is a question the lake never raised.

If review judges `TownIndex` close enough to reuse with a different key, that
is a reasonable alternative and would be recorded as such.

---

## Page by page

### Florence hub — `/destinations/florence`

**Dominant module:** the constraint hero, and an honest gap.

**Proposed order:** constraint hero → the two airports as a chooser → what the
ZTL means in practice, at a reading measure, with the Comune linked → onward
to the Val d'Orcia → questions → closing.

**Why.** The homepage has already told the reader the centre is "strictly
regulated". This page has to make good on that, and it has to do so without
the primary source. The composition therefore front-loads the constraint and
treats the unknown as content — "here is what a sector ZTL is, here is what we
could not confirm, here is who can tell you" — rather than papering over it.

**Against Rome and Milan**, which it could most easily have cloned: Rome's hub
leads with an arrival-point comparison and puts its ZTL hours in a card; Milan
draws its two zones as nested boxes. Florence can do neither honestly, and the
difference in evidence produces a genuinely different page.

**No photograph** — `florence-skyline` is on the homepage tile.

### Pisa — `/airports/pisa-galilei`

**Dominant module:** an inverted-expectation panel.

**Proposed order:** split or meta hero → "the airport for Tuscany is not in
the city you are going to" → onward destinations → request checklist →
questions → closing.

**Why.** Treviso's page corrects a reader who thinks their airport is in
Venice. Pisa's does something subtler and more interesting: the airport **is**
in Pisa, it is correctly named, and it is still the usual gateway to Florence.
Nothing is mis-sold; the geography is simply wider than the name suggests.
That is a different argument from Treviso's and should not reuse Treviso's
drawn-distance hero — **particularly since no distance was verified.**

### Florence Peretola — `/airports/florence-peretola`

**Dominant module:** one fact, given the weight of the page.

**Proposed order:** compact hero → the runway → what that means for you →
onward → questions → closing.

**Why.** The verified fact here is unusually good: a **single 1,560 m runway**,
short enough to limit the airport to aircraft around A320neo size. That
explains why Florence is the lesser of the two airports instead of merely
asserting it, and it is the rare case where an infrastructure number is
genuinely useful to a traveller — it is why their flight went to Pisa.

**Against Pisa**, its sibling: Pisa's page is about a *name* being wider than
expected; this one is about a *runway* being shorter. Same operator, opposite
arguments, and neither page can be swapped for the other.

### Val d'Orcia — `/destinations/val-d-orcia`

**Dominant module:** `ComuneIndex`, keyed to railheads.

**Proposed order:** hero → the five comuni → "no railway reaches here", at a
reading measure, citing the destination's own authority → arriving by air →
what to send → questions → closing.

**Why.** This is the only page in the cluster whose justification is stated by
somebody else: the destination's own tourism body says a car is "definitely
the best means" and that there are no direct rail connections. The page should
quote that and link it, rather than make the argument in its own voice — which
is both more honest and more persuasive.

**The one page where a photograph is clearly worth sourcing**, and the one
place `tuscany-val-dorcia` would be perfect and is unavailable. New CC0
countryside photography would need to be found and verified.

### The two route pages

Both would use `HeroRoute`, the shared strip every route page in the project
uses — a documented page-type convention, not a lapse. The leading modules
differ, and neither repeats a counterpart:

| Route | Would lead with | Why not a counterpart's module |
|---|---|---|
| Pisa → Florence | **an intercity framing**: two cities, one airport serving both | Rome's and Milan's airport routes are city-internal; this is the only airport route in the project whose endpoints are different cities |
| Peretola → Florence | **nothing — endpoints lead** | Deliberately the shortest route page, as Verona's is. After the Pisa page, a short hop into the same restricted centre is the contrast |

Both end in the same ZTL uncertainty, and both must say so in the same terms.

---

## Proposed acceptance test

If built as planned, no two pages would share a section order and none would
use the generic hero → cards → icon grid → benefits → FAQ → CTA stack.

| | Florence | Pisa | Peretola | Val d'Orcia |
|---|---|---|---|---|
| Hero | constraint | split/meta | compact | to be chosen |
| First module | airport chooser | the name/geography gap | the runway | the five comuni |
| Dominant module | the ZTL gap | inverted expectation | one fact | `ComuneIndex` |
| Photograph | **none** | tbc | **none** | **one, to be sourced** |
| Argument | "we cannot confirm this" | "wider than the name" | "shorter than you think" | "no railway reaches here" |

---

## Open design questions for approval

1. **Is `HeroConstraint` the right answer to the Florence ZTL gap**, or would
   you rather the page waited until the Comune's rules can be read in a
   browser? Building it means publishing a page whose central subject is
   partly unresolved — honestly labelled, but unresolved.
2. **`ComuneIndex` as a new module, or `TownIndex` reused with a different
   key?** Either is defensible; the second is less code.
3. **Is sourcing new Val d'Orcia photography worth it**, given the site
   already owns a Val d'Orcia image it cannot reuse here?

---

## What was actually built

Six pages, twelve routes. **One new hero, one new module, three documented
reuses**, and no new photography.

| Page | Hero | Dominant module | Photograph |
|---|---|---|---|
| Florence | **`HeroConstraint`** — new | the labelled ZTL gap | none |
| Pisa | `HeroBand` — reused | two-column name/job comparison | none |
| Peretola | `HeroMeta` — reused | the runway, given a section | none |
| Val d'Orcia | `HeroModes` — reused, inverted | **`ComuneIndex`** — new | none |
| Pisa → Florence | `HeroRoute` | intercity definition list | none |
| Peretola → Florence | `HeroRoute` | none; endpoints lead | none |

### The three reuses, and why each is defensible

**`HeroBand` on Pisa, not a drawn distance.** The proposal said "split or meta
hero". Neither survived contact with the evidence. `HeroSplit` and `HeroFrame`
both need a photograph and there is no Pisa image on this site; `HeroMeta` is
compact, which would have contradicted a page about the region's *largest*
airport. Treviso's and Bergamo's drawn-distance hero was rejected on evidence
rather than taste: **both of those had published distances to put on a rule,
and no source consulted here states one.** `HeroBand` exists for "a page whose
job is to correct an assumption rather than to sell a view", which is this
page exactly.

**`HeroMeta` on Peretola.** As proposed. Four facts on one rule-separated
line, the fourth being the runway. Compactness is the argument, as it is at
Linate.

**`HeroModes` on the Val d'Orcia, meaning the opposite of Verona's.** The
proposal left this hero open. `HeroModes` lays three arrival modes flat;
Verona uses it to show that none of its three is a trap, and this page uses
the identical structure to show that **one of the three is missing** — the
rail column is there so a reader looks down it and finds only stations outside
the valley. Inverting a familiar shape is a stronger move than inventing an
unfamiliar one, and it is recorded here rather than disguised.

### Resolutions to the three open design questions

1. **`HeroConstraint` was built**, and the owner chose to publish Florence
   with the gap labelled rather than wait for the Comune. The panel sets the
   three known facts as plain terms and gives the unknown its own row against
   an accent rule, with the Comune as the page's first outbound link.
   Measured: the label is **5.84:1** and the body **14.10:1** on
   `accent-wash`; the accent rule is **4.44:1**. No new colour pairing was
   introduced — both are pairings `Callout tone="accent"` already uses.
2. **`ComuneIndex` was built as a new module**, not `TownIndex` reused. The
   deciding factor was rendering rather than naming: `TownIndex` sets its key
   as a label beneath the town name, whereas this gives the station its own
   column so a reader can scan **down** it and see that no two comuni share a
   railhead and none of the three stations is in the valley. That column is
   the argument, and it is not a rename.
3. **No new photography was sourced**, and none is needed. The cluster ships
   four pages with zero images — verified at render time, `imgs=0` on every
   one. The Veneto precedent holds: its strongest page, the Venice hub, has no
   photograph either. A Val d'Orcia image can be added later without
   restructuring anything; the site's existing one remains the homepage hero
   and is still used on exactly one page.

### The acceptance test, re-run against the built pages

No two pages share a section order, none uses the generic hero → cards → icon
grid → benefits → FAQ → CTA stack, and each opens on a different surface:
Florence on sunken, Pisa on deep, Peretola on light, the Val d'Orcia on light
with a sunken second band.

| | Florence | Pisa | Peretola | Val d'Orcia |
|---|---|---|---|---|
| Argument | "we cannot confirm this" | "wider than the name" | "shorter than you think" | "no railway reaches here" |
| First module after the hero | airport chooser | the name/job gap | the runway | the five comuni |
| Section surfaces | light → sunken → deep | light → sunken → deep | light → sunken → deep | sunken → prose → light → deep |
| Verified in the browser | ✓ | ✓ | ✓ | ✓ |
