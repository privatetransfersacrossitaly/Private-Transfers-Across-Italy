# Veneto cluster — design differentiation

What each of the nine pages is composed of, why that composition suits its
job, and — where a hero or module is reused from Rome or Milan — the argument
for reusing it rather than inventing a difference.

The constant: one brand. Same type scale, palette, header, footer, buttons,
focus rings and spacing rhythm across all 29 pages on the site.

---

## What this cluster added

**Two new heroes**, bringing the family to twelve:

| Hero | Shape | Used by |
|---|---|---|
| **`HeroEndpoints`** | **two panels that contradict each other** | **Venice hub** |
| **`HeroModes`** | **three arrival modes laid flat across the hero's foot** | **Verona hub** |

**One new module:** `EndpointPanels` — the road/water split, rendered once and
used in two places so the two pages cannot drift apart.

**One new type:** `EndpointSplit` in `content/veneto/types.ts`. This is the
most consequential thing in the cluster and it is not a visual decision. The
split is modelled in the type system, so a Venice page physically **cannot**
describe a destination without placing it on one side or the other. Prose
discipline fails eventually; a type does not.

---

## Page by page

### Venice hub — `/destinations/venice`

**Dominant module:** the two-panel contradiction, in the hero.

**Order:** contradiction hero → why the road stops, at a reading measure →
arrival points on the dark surface → the city access fee in a callout →
onward → questions → closing.

**Why.** Every other destination hub in this project opens by *orienting* a
visitor. Venice has to open by *correcting* one. The assumption people arrive
with — that a car can be sent to the address — is false for most of this
city, and a page that spends three sections building up to that has already
lost the reader who skims.

So the hero is "A car can reach" beside "A car cannot reach", and the second
panel carries the refusal about boats in its closing note rather than burying
it in an FAQ.

**Against the Rome and Milan hubs.** Rome opens on a photograph; Milan opens
on a choice between three airports. Venice opens on a contradiction. It is
also the only hub in the project with **no photograph at all** — the split is
the visual idea, and a canal view would dilute the only thing the page is for.

### Verona hub — `/destinations/verona`

**Dominant module:** three modes across the foot of the hero.

**Order:** modes hero → Porta Nuova and the Airlink, prose beside a callout →
Lake Garda, prose beside a *refusal* callout → onward on the dark surface →
questions → closing.

**Why.** Verona earns its place partly by being Venice's opposite: an
ordinary road city where arrival mode does not constrain the destination. So
where Venice splits into two panels that disagree, this runs three equal
modes laid flat — parallel, not opposed, which is the honest shape of the
choice. The page is deliberately short for the same reason.

**Against Milan's `HeroChooser`**, which also puts a decision in the hero: there
the options are *airports*, stacked in a bordered card, and picking wrong is a
fifty-kilometre mistake. Here they are *modes of arrival*, laid flat, and none
of them is a trap.

**The Garda section is the page's careful part.** A real fact — the airport is
a road gateway to the lake — followed immediately by an accent callout stating
what the page will not claim. The refusal sits beside the fact rather than
after it, so a skimmer meets both.

### Venice Marco Polo — `/airports/venice-marco-polo`

**Dominant module:** `EndpointPanels` again, this time in the body.

**Order:** compact `HeroMeta` with four identity facts → the blocked-source
note and provenance → the land side and the water side → request checklist on
the dark surface → onward → questions → closing.

**Why.** The page takes the site's own existing phrase for this airport — "a
land side and a water side", already on the homepage — and makes it the
structure. Seeing the same split a second time, in the same shape, is the
point: a reader who met it on the hub recognises it instantly.

**The photograph is doing argumentative work.** It is a vaporetto at a landing
stage, placed *inside the water panel*, depicting the thing that is **not**
included. Same device as the Lake Como ferry image. It is not a decorative
canal view.

**Hero reuse:** `HeroMeta`, built for Linate. Justified — this page has four
identity facts to state and then one argument to make, and a tall opening
would delay the argument.

### Treviso — `/airports/treviso-canova`

**Dominant module:** `HeroGeo`, the drawn distance — **reused from Bergamo.**

**Order:** drawn-distance hero → identity fact strip → "two obstacles, not
one" as numbered steps on the dark surface → onward → questions → closing.

**Why reuse is right here.** The problem is genuinely identical: an airport
sold under a city's name stands tens of kilometres from it, and the correction
is spatial, so it is drawn rather than argued. Inventing a second primitive to
say the same thing would be variation for its own sake — which the
architecture documents warn against as plainly as they warn against cloning.

**What is not reused is the body.** Bergamo's reader has one obstacle: fifty
kilometres, then an ordinary city. Treviso's has **two** — the distance, and
then Venice, where the road stops again. The numbered section is built around
that stacking, and no Milan page has an equivalent.

**No photograph** — none verifiably of TSF was found. Text-led by necessity,
which the drawn diagram carries comfortably.

### Verona Villafranca — `/airports/verona-villafranca`

**Dominant module:** a two-column fork — the city, or the lake.

**Order:** compact hero → the fork → the Airlink as a callout on a prose
measure → onward → questions on the dark surface → closing.

**Why.** A small airport with two genuinely different exits. The right-hand
column is the careful one: it names Garda, explains why the lake is harder
than it looks, and then states what the page will not claim — so a reader who
only skims that column still cannot come away thinking a Garda town is on
offer.

**The Airlink is a callout, not a third column**, deliberately. It is a public
service and laying it out as a peer of our two options would imply it is one.

### Venice stations — `/destinations/venice/train-station-transfers`

**Dominant module:** `CompareColumns` — and **not** the `DataTable** that Rome
and Milan use.

**Order:** split hero with the Grand Canal at Santa Lucia → the two-station
comparison → the causeway, at a reading measure → onward → questions on the
dark surface → closing.

**Why this one breaks the station-page pattern.** Rome and Milan each have
four stations and a reader scanning for theirs; a table is right for that.
Venice has exactly two that matter, and two items are not a lookup — they are
a **contrast**. A two-row table would flatten the one thing the page exists to
say, which is that these stations are opposites.

**The hero photograph is the argument in one image:** water at a station door.

### The three route pages

Shared `HeroRoute` strip and shared route component, as in both earlier
clusters. The leading modules differ, and none repeats a counterpart:

| Route | Leads with | Why not a counterpart's module |
|---|---|---|
| Marco Polo → Venice | **a fork on whether the destination is road-reachable at all** | No other route page in the project forks on that, because no other city makes it a question |
| Treviso → Venice | **a two-stage stack: the distance, then the road limit** | Milan's Bergamo route *compares* three airports by scale; this one *stacks* two different obstacles on one journey |
| Villafranca → Verona | **nothing — endpoints lead** | Deliberately the shortest route page in the project. After two Venice pages, a journey with no hidden obstacle is itself the content |

---

## Where photography was declined

Six of the nine pages carry no photograph. That is a higher proportion than
Rome or Milan, and in every case it is a decision rather than an omission:

| Page | Reason |
|---|---|
| Venice hub | **By design.** The split is the visual idea |
| Verona hub | **No usable asset.** The candidates were a watercolour and a shot dominated by construction hoarding |
| Treviso | **No usable asset**, and the drawn diagram carries the page |
| Verona Villafranca | **No usable asset** verifiably of VRN |
| All three route pages | **By convention.** No route page in the project carries one |

The architecture document is explicit: "If a good, properly licensed,
location-accurate image cannot be found, use a text-led design rather than a
misleading photo." No generic airport or canal stock was used to fill a gap.

---

## The design acceptance test

No two pages share a section order. No page uses the generic
hero → cards → icon grid → benefits → FAQ → CTA stack.

| | Venice | Verona | VCE | TSF | VRN | Stations |
|---|---|---|---|---|---|---|
| Hero | contradiction | three modes | compact meta | drawn distance | compact meta | split + photo |
| First module | why, at prose measure | station + Airlink | provenance note | identity strip | the fork | the comparison |
| Dominant module | the split | the modes | the split (body) | the diagram | the fork | the contrast |
| Photographs | **none** | **none** | 1, in the water panel | **none** | **none** | 1, in hero |
| Questions sit on | sunken | default | sunken | default | **deep** | **deep** |
| Closing band | deep | **sunken** | deep | deep | **sunken** | **sunken** |
