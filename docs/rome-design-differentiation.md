# Rome cluster — design differentiation

What each page's composition is, why that composition suits its intent, and
how it differs from its siblings. Written against the built pages.

The constant: one brand. Same type scale (`type-*`), same palette, same
header, footer, buttons, focus rings, spacing rhythm and responsive rules on
all nine pages. The variable is composition — which modules a page uses, in
what order, and which one dominates.

---

## The module kit

The pages are assembled from `components/site/blocks.tsx`, not from a page
template. Each module is one idea:

`ChooserList` · `FactStrip` · `CompareColumns` · `DataTable` · `NumberedSteps`
· `DefinitionList` · `Checklist` · `Callout` · `LinkIndex` · `QuestionList`
· `SourceNote` · `Paragraphs`

and five openings in `components/site/heroes.tsx`:

| Hero | Shape | Used by |
|---|---|---|
| `HeroBackdrop` | photograph behind the words, under a measured scrim | Rome hub, Civitavecchia |
| `HeroSplit` | text beside a photograph | Fiumicino |
| `HeroBand` | dark, typographic, no photograph at all | Ciampino |
| `HeroNarrow` | reading measure beside a portrait image | Station transfers |
| `HeroRoute` | a journey strip — from, rule, to | all four route pages |

---

## Page by page

### Rome hub — `/destinations/rome`

**Dominant module:** `ChooserList`, four rules rather than four cards.

**Section order:** backdrop hero → arrival-point chooser → access/ZTL (prose
left, published hours right) → districts (definition list beside a portrait
photograph) → route index on the dark surface → "beyond the city" prose over
a wide slim photograph → questions → closing band.

**Why.** A hub's job is to route a visitor onward, so the first module after
the hero is a comparison of arrival points. Rules, not cards: four cards
would read as four equal products, which is wrong — these are four different
kinds of place and a visitor belongs to exactly one of them.

**How it differs from the homepage,** which is the page it could most easily
have duplicated: there is no card grid anywhere on it. The homepage is built
almost entirely from them.

### Fiumicino — `/airports/rome-fiumicino`

**Dominant module:** `NumberedSteps` — a timeline from wheels down to the car.

**Section order:** split hero → four-item fact strip → T1/T3 comparison on the
sunken surface → arrival timeline → request checklist on the dark surface →
onward index → questions → closing band.

**Why.** An airport pickup is a sequence in time, and the useful insight is
that landing time is not arrival time. A timeline carries that; a list of
features would not. The fact strip front-loads the five things a visitor
checks first, so they are answered before any prose starts.

### Ciampino — `/airports/rome-ciampino`

**Dominant module:** `CompareColumns`, placed immediately after the hero.

**Section order:** dark typographic hero with the facts set inline →
Ciampino/Fiumicino comparison → prose with its own subheadings on the sunken
surface → onward index → questions **on the dark surface** → closing band on
the sunken surface.

**Why.** Deliberately inverted relative to Fiumicino. The real search intent
is a comparison — people arrive here having discovered Rome has a second
airport — so the comparison comes first instead of after an introduction.
Opening on a dark band rather than a photograph makes the page read
differently from Fiumicino before a word has been read, and the questions
sit on the dark surface rather than the light one, reversing Fiumicino's
rhythm rather than repeating it.

**It is also the one page in the cluster with no photograph** — see the asset
manifest. That is a sourcing fact turned into a design decision: the page
carries itself typographically.

### Civitavecchia — `/cruise-ports/civitavecchia`

**Dominant module:** `NumberedSteps` again, but used for a checklist rather
than a timeline, and set as the largest element on the page.

**Section order:** backdrop hero → three-stage geography drawn across the page
with connecting rules and nodes → access caveat callout → "six things to
settle" on the dark surface, with the warning callout beneath → connections →
questions → closing band.

**Why.** The misunderstanding this page exists to correct is spatial — people
think Civitavecchia is Rome — so the geography is *drawn* before anything is
explained. That stepper exists on no other page. After it, a cruise day is
logistics rather than prose, so the checklist is the biggest thing here.

**Against Fiumicino,** which also uses numbered steps: there the steps are a
sequence that happens to you, on the light surface, mid-page; here they are
a list of things you must do, on the dark surface, and they dominate.

### Station transfers — `/destinations/rome/train-station-transfers`

**Dominant module:** `DataTable` — a real table, the only one in the cluster.

**Section order:** narrow hero with a portrait photograph → four-station table
→ prose at a reading measure on the sunken surface, with an assistance
callout inside it → onward index → questions on the dark surface → closing
band.

**Why.** This is a reference page: which station, how big, what is there. A
table is the right primitive for that, and it is the only page that leads
with one. The deliberate move afterwards is the narrowing — from a wide table
to a 68-character reading measure — because the handover from platform to
pavement is a short argument, not data.

### The four route pages

They share a page type, which is legitimate: they answer the same kind of
question. What they do not share is a shape. Each declares a different
leading module in its content file, and the endpoint pair sits on a surface
chosen by whether a leading module came before it, so no two consecutive
sections share a tone and the four pages do not scroll alike.

| Route | Leads with | Why that module |
|---|---|---|
| Fiumicino → Rome | **nothing** — the endpoint pair is first | The two ends *are* the content, and the city end is the hard half |
| Ciampino → Rome | **difference panel** (`DefinitionList`) | The question behind the search is "how is this unlike the other airport?" |
| Rome → Civitavecchia | **countdown** (`NumberedSteps`) | A sailing day is governed by a deadline, not a distance |
| Fiumicino → Civitavecchia | **fork** (`CompareColumns`, two scenarios) | The page exists to help somebody choose between two plans |

The Ciampino route page is explicitly built as the inverse of the Fiumicino
one: there the airport end is complicated and the city end simple to state;
here the airport end is trivial — one building — and the clock is the
problem. Same two cities on the map, different page.

---

## The hero revision

The Rome hub and Civitavecchia originally stacked a full-width photograph
*beneath* the hero text, with a caveat under the image. On review that read as
two unrelated things rather than one opening, so both now use `HeroBackdrop`:
the photograph sits behind the words under a two-layer scrim.

The scrim is measured rather than guessed. Against the worst case a
photograph can present — a pure white frame — the flat layer at 84% opacity
puts the heading at **9.4:1** and the muted body text at **5.3:1**, so both
clear WCAG AA whatever image is used; a darker photograph only improves it.
The second, horizontal layer adds modelling on the text side and can only
darken further.

The caveats that sat under those images were not deleted. The Rome pricing
caveat moved into the questions, beside the question it answers; the
Civitavecchia berth-access caveat moved beside the geography it qualifies.

---

## The design acceptance test

The architecture document's failure condition is a repeated stack of
hero → three cards → icon grid → generic benefits → FAQ → CTA. No page in
this cluster has that sequence, and no two pages share a section order.

| | Rome | FCO | CIA | CIV | Stations | Routes |
|---|---|---|---|---|---|---|
| Hero | backdrop | split | dark band | backdrop | narrow | journey strip |
| First module | chooser rules | fact strip | comparison | geography stepper | table | varies by route |
| Dominant module | chooser | timeline | comparison | checklist | table | varies by route |
| Card grid | none | none | none | none | none | endpoint pair only |
| Questions sit on | sunken | sunken | **deep** | default | **deep** | default |
| Closing band | deep | deep | **sunken** | deep | **sunken** | deep |
