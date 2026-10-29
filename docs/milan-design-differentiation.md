# Milan cluster — design differentiation

What each page's composition is, why it suits its intent, and how it differs
from its Milan siblings **and** from the Rome pages that could most easily
have been copied. Written against the built pages.

The constant: one brand. Same type scale (`type-*`), palette, header, footer,
buttons, focus rings, spacing rhythm and responsive rules across all
nineteen pages on the site. The variable is composition.

---

## The hero family, after Milan

Ten openings now exist. Milan added five of them; it reuses one.

| Hero | Shape | Used by |
|---|---|---|
| `HeroBackdrop` | photograph behind the words, measured scrim | Rome hub, Civitavecchia |
| `HeroSplit` | text beside a contained photograph | Fiumicino, **Milan stations** |
| `HeroBand` | dark, typographic, no photograph | Ciampino |
| `HeroNarrow` | reading measure beside a portrait image | Rome stations |
| **`HeroChooser`** | **the decision itself, inside the hero** | **Milan hub** |
| **`HeroFrame`** | **text in the measure, photograph bleeding off the edge** | **Malpensa** |
| **`HeroMeta`** | **compact, one rule-separated line of facts** | **Linate** |
| **`HeroGeo`** | **a drawn distance** | **Bergamo** |
| **`HeroTowns`** | **backdrop with a destination selector along its foot** | **Lake Como** |
| `HeroRoute` | journey strip — from, rule, to | all eight route pages |

Two new body modules were added for Milan: **`ZoneDiagram`** (nested boxes,
because Area C sits inside Area B) and **`TownIndex`** (towns labelled by the
arm of the lake they sit on). Neither exists in the Rome cluster.

---

## Page by page

### Milan hub — `/destinations/milan`

**Dominant module:** the airport chooser, inside the hero.

**Order:** chooser hero → Area B / Area C drawn as nested boxes, prose beside
them → wide photograph → districts (definition list + portrait photograph) →
onward index on the dark surface → questions → closing band on sunken.

**Why.** The Milan question is *which of the three am I flying into* — three
airports, one city name, two operating companies. So the selector is in the
hero, not a section to scroll to, and it is the first thing reachable by
keyboard after the breadcrumb.

**Against the Rome hub**, which it could most easily have cloned: Rome opens
on a photograph and reaches its comparison in the first section below; Milan
opens on the comparison and has no hero photograph at all. Rome's access
section is prose beside a card listing published hours; Milan's is *drawn*,
because containment cannot be shown in a list. The `ZoneDiagram` exists on no
other page.

### Malpensa — `/airports/milan-malpensa`

**Dominant module:** the destination matrix — three labelled groups of links,
each with a note on what that direction involves.

**Order:** framed hero (photograph bleeding off the right edge) → destination
matrix → terminal comparison on sunken → request checklist on the dark
surface → questions → closing band.

**Image changed at the final review.** The hero carried a generic check-in
hall shared with the Fiumicino page — the project's only duplicated image. It
now carries a photograph of Malpensa itself, seen from the approach road. A
second candidate showing the kerbside drop-off was rejected: a kerb would
imply a pickup arrangement this page explicitly refuses to promise.

**Why.** Malpensa's distinguishing fact is not temporal but geographic.
Milan lies south-east of the airport and the lakes lie north of it, so the
two directions leading away from it are genuinely different journeys rather
than variations of one. The matrix answers *which journey are you on* before
anything else.

> **Corrected 2026-10-26.** An earlier version of this section said that
> "many of its arrivals never see the city", and a comment in the page's
> content file asserted that *half* its arrivals were going into Milan.
> Nothing in the research log establishes how Malpensa's traffic divides by
> destination, so both were removed rather than re-sourced, and the rationale
> is now stated as geography — which is verifiable — instead of as volume,
> which is not. No replacement statistic was invented. See
> `docs/milan-final-review.md`.

**Against Fiumicino**, the other large airport in the project: Fiumicino is
built around a timeline, because an airport pickup is a sequence in time.
Malpensa puts the terminal comparison *second* and leads with geography.
Fiumicino's hero keeps both halves inside the container; Malpensa's lets the
image escape the measure, which reads as scale.

### Linate — `/airports/milan-linate`

**Dominant module:** none, deliberately. The page is the shortest on the site.

**Order:** compact hero with facts on one rule-separated line → three use
cases as a definition list → one accent callout that refuses the obvious
conclusion → short index → questions on the dark surface → closing on sunken.

**Why.** Linate's whole argument is proximity and simplicity. A tall hero and
six sections would contradict the content. Its form argues what its text
argues.

**Against Ciampino**, the other "second airport": both have no photograph, but
for different reasons and with opposite treatments. Ciampino has none because
no licence-clear image existed; Linate has none because none would add
anything. Ciampino opens **dark** and leads with a **comparison table**;
Linate opens **light** and never uses one. Ciampino's content is a
comparison; Linate's is a caution.

### Bergamo — `/airports/milan-bergamo`

**Dominant module:** the distance diagram, inside the hero.

**Order:** geography hero → identity fact strip → "what fifty kilometres
changes" as numbered steps on the dark surface → index on sunken → questions
→ closing band.

**Why.** The page corrects a spatial assumption: an airport sold as Milan is
about 50 km from Milan and about 5 km from Bergamo. Drawing that makes it the
first thing understood; a sentence three paragraphs down would bury it.

**Against Civitavecchia**, which also draws its geography — and the comparison
matters, because these are not the same move. Civitavecchia's stepper is a
**sequence** (ship → gate → city), numbered as stages, placed after the hero.
Bergamo's is a **scale**: two gaps of very different size, placed inside the
hero, where the point is the comparison rather than the order.

The diagram is built from real elements with real text, not an image or an
SVG of type, so it reflows at 320px and is read aloud in the right order. Its
note is a paragraph, not a `figcaption` — the site bans visible captions, and
although this one credits a fact rather than an image, consistency beat
carving out an exception.

**It now has a photograph of the airport**, added at the final review after a
second search found one. It sits mid-page, between the identity section and
the consequences, so the drawn diagram keeps the hero and the page keeps its
text-led opening. It is a photograph of *the airport*, not of Bergamo city —
the architecture document forbids the latter, and that rule is why the page
went without one through the whole first build.

### Milan stations — `/destinations/milan/train-station-transfers`

**Dominant module:** a real table, then the two-manager explanation.

**Order:** contained split hero → four-station table → "why Cadorna is
different" prose beside an assistance callout → index → questions on the dark
surface → closing on sunken.

**Image removed at the final review.** A wide photograph of the Galleria sat
between the prose and the index. It was decorative: a shopping arcade
illustrates nothing about a railway station, and it was the project's last
duplicated image. The page keeps the one image it needs — the Centrale
concourse in the hero, which is the part of a station a transfer meets.

**Why this reuses a primitive.** Rome's station page also leads with a table,
and that is deliberate rather than lazy. A reference lookup wants a table, and
inventing a different primitive for the same job would be variation for its
own sake — which the architecture document warns against as plainly as it
warns against cloning.

**What differs is everything around it.** Rome's page narrows after the table
into a short argument about the walk from platform to pavement. Milan's turns
to a question Rome does not have: four stations, **two infrastructure
managers**, and the airport train terminating at the one run by the other
company. That section is the page's centre, and Cadorna's table row — which
says "a different manager" where the others give a track count — is written
to set it up. The heroes differ too: Rome's is a narrow measure beside a
portrait image, Milan's a contained split.

### Lake Como — `/destinations/lake-como`

**Dominant module:** the town selector in the hero, then the refusal.

**Order:** backdrop hero with a town selector along its foot → the shape of
the lake at a reading measure → town index by branch, beside a photograph →
**road and water**: prose, a photograph of an actual ferry, and a warning
callout → what to send, on the dark surface → index → questions → closing.

**Why.** "Lake Como" is not a destination — it is about fifty kilometres of
shoreline on three arms, and two towns facing each other can be an hour apart
by road. The hero asks for a town before the page tries to help, and the town
index is ordered by branch so the geography does the sorting.

**The refusal is the page.** A road transfer is a road transfer: no boat, no
ferry crossing, no lake excursion. That gets its own band, its own photograph
and a callout naming the three assumptions the page will not let a reader
carry away. Civitavecchia has a warning callout too, but it is one element at
the end of a checklist; here the refusal is the argument.

### The four route pages

They share the `HeroRoute` strip and the shared route component, which is a
documented page-type convention rather than a lapse. What they do not share
is the leading module — and none repeats its Rome counterpart's:

| Route | Leads with | Rome's equivalent leads with |
|---|---|---|
| Malpensa → Milan | **nothing** — endpoints first | Fiumicino → Rome: also endpoints, but the hard half there is a narrow lane; here it is two nested zones, so the columns carry different content |
| Linate → Milan | **an assumption panel** — "short does not reliably mean quick" | Ciampino → Rome: a difference panel about the *airport*; this one is about the *journey*, and contradicts the reader rather than informing them |
| Bergamo → Milan | **a three-way scale comparison** against the other two airports | Rome → Civitavecchia: a countdown from a deadline — time, not distance |
| Malpensa → Lake Como | **a town fork** — the destination is unknown until named | Fiumicino → Civitavecchia: a fork between two *plans*, not two *places* |

Malpensa → Lake Como is the only route page in either cluster whose endpoint
is still ambiguous when the reader arrives.

---

## The design acceptance test

The architecture document's failure condition is a repeated stack of
hero → three cards → icon grid → benefits → FAQ → CTA. No page in either
cluster has that sequence, and no two pages share a section order.

| | Milan hub | Malpensa | Linate | Bergamo | Stations | Lake Como |
|---|---|---|---|---|---|---|
| Hero | chooser | framed/bleed | compact meta | drawn distance | split | backdrop + selector |
| First module | zone diagram | destination matrix | use cases | fact strip | table | lake shape |
| Dominant module | zone diagram | matrix | none (brevity) | diagram | table + managers | the refusal |
| Photographs | 2, mid-page | 1, in hero (of Malpensa) | **none** | 1, mid-page | 1, in hero | 3 |
| Card grid | none | none | none | none | none | none |
| Questions sit on | default | default | **deep** | default | **deep** | default |
| Closing band | **sunken** | deep | **sunken** | deep | **sunken** | deep |
