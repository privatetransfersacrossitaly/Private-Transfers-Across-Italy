# Tuscany cluster — proposed content changes

**STATUS: APPLIED, 27 October 2026.** The owner approved proposals 1-5 and
7-10 in full, and proposal 6 as the explanatory wording only, with no ZTL
hours published. All are now in the pages in both languages. Decisions and
source provenance are recorded in `docs/tuscany-research-log.md` §A7; the
checks run are in `docs/tuscany-delivery-report.md`.

Two things changed beyond the literal text below, both reported: the ZTL
caution paragraph was brought into line with proposal 7 so that one page
does not state the same refusal at two levels of precision, and the ZTL link
was **not** changed, because every `comune.fi.it` host was unreachable when
re-checked.

Evidence for every item is in `docs/tuscany-research-log.md`, Addendum §A1–A6.

---

## Summary

The second research pass reached the Comune di Firenze's own ZTL pages and
Toscana Aeroporti's own 2025 Service Charter, both through the Internet
Archive. That produced **four changes that are now required because the live
pages say something untrue**, and **six optional upgrades**.

It did **not** answer the private-hire question, so no page gains a claim
about driving into Florence's centre.

| | Proposal | Why |
|---|---|---|
| **1** | Correct "no distance is published anywhere" | The operator states the airport is **1 km from Pisa**. Three pages currently deny any distance exists |
| **2** | Correct "nothing is operator-confirmed" | We now hold the operator's own charter |
| **3** | Reword Peretola's "physical rather than commercial" | The operator describes an explicitly **commercial** role split |
| **4** | Sharpen the Pisa meeting-point answer | The airport recognises NCC as a transport category; the taxi rank's position is now known |
| 5 | Name the five ZTL sectors | Now officially sourced |
| 6 | Replace the vague hours explanation with the specific one | More useful, and more honest |
| 7 | Sharpen the NCC refusal | Now attributable to a named document |
| 8 | Add the emissions rule | Verified, and genuinely affects a vehicle's eligibility |
| 9 | Add the A11 to the Pisa route page | Operator-stated road geography |
| 10 | Strengthen "Tuscany's busiest" | Operator-confirmed |

---

# Part 1 — Required corrections

These four are not improvements. The live pages currently assert things that
the new evidence contradicts.

## 1. "No road distance is published because no source states one" is now false

**Severity: this is the one that matters.** Three places say, in terms, that
no source gives a distance. The operator's charter gives one: *"the airport,
located on the coast just 1 km from Pisa"* (Service Charter 2025, p.22).

The claim is still true of **Florence** — nothing anywhere states a distance
or a time between Pisa Airport and Florence. So the fix is to narrow each
sentence from "no distance" to "no distance to Florence", and optionally to
publish the 1 km figure.

**`content/tuscany/pisa.ts` — FAQ "Is Pisa Airport near Florence?"**

> *Now:* "It is in a different city. **No road distance is quoted here, because
> no source consulted for this build states one** — but Pisa and Florence are
> separate cities…"

> *Proposed:* "It is in a different city. The airport operator places the
> airport **about a kilometre from Pisa itself**, on the coast — but Pisa and
> Florence are separate cities, and **no source consulted states a distance or
> a time to Florence**, so none is quoted here. It is still, for many
> visitors, the normal way to reach Florence."

**`content/tuscany/pisa.ts` — the `expectation` source note**

> *Now:* "…**no fare, journey time or road distance is quoted — no source
> consulted states one**"

> *Proposed:* "…**no fare or journey time is quoted, and no distance to
> Florence, because no source consulted states one**."

**`content/tuscany/routes.ts` — the Pisa route, FAQ "How far is it?"**

> *Now:* "**No road distance is published either, for the same reason.**"

> *Proposed:* "**No road distance is published for this journey.** The operator
> states how far the airport is from Pisa, but no source consulted states a
> distance or a time between the airport and Florence, which is the figure
> this page would need."

**Also affected, and arguably already correct:** `content/tuscany/florence.ts`
FAQ "How long does it take from Pisa Airport?" says "no source consulted
states a road distance or a duration **for the run**" — that remains true, but
the preceding sentence "Neither airport operator's site could be retrieved for
this build" is superseded by proposal 2.

**Recommendation: apply.** Publishing the 1 km figure is optional; correcting
the false denial is not.

## 2. "Nothing is presented as operator-confirmed" is superseded

Four source notes explain that the operator's site could not be retrieved.
That was true on 26 October and is no longer the whole story: Toscana
Aeroporti's own 2025 Service Charter has now been read.

> *Proposed replacement, used on the Pisa, Peretola and Pisa-route pages:*
> "Operator, airport roles and road access are taken from Toscana Aeroporti's
> own 2025 Service Charter, read on 27 October 2026. The company's website
> refuses automated access, so the charter was read from an archived copy and
> the publisher's live pages should be preferred where the two differ. Runway
> length is from published reference records, not from the charter."

**Recommendation: apply**, and keep the sentence about the archived copy. It
is the honest provenance and it is short.

## 3. Peretola: "physical rather than commercial" is now contradicted

The live page says Florence is the smaller airport "for a reason that is
**physical rather than commercial** — a single short runway". The operator
describes the opposite as *also* true:

> *"the two airports, each with its own specificity, are complementary. The
> Vespucci airport concentrates on the development of business and leisure
> traffic through full service carriers, connecting the main European hubs;
> the Galilei airport, on the other hand, favours tourist traffic managed by
> low-cost carriers, cargo flights…"* — Service Charter 2025, p.3

The runway is real and still explains what *can* land. But asserting the
commercial explanation is wrong is now unsupportable.

> *Proposed, `content/tuscany/florence-airport.ts` hero lead:* "Florence has an
> airport of its own, at the edge of the city, and it is the smaller of
> Tuscany's two. Part of the reason is a decision — its operator runs the two
> airports as a complementary pair — and part of it is simply physical: there
> is one runway, and it is short."

The same page's `runway.paragraphs` and the Florence hub's chooser row ("for a
reason that is physical rather than commercial") would need the same softening.

**Recommendation: apply.** This also makes the page better: "the operator runs
them as a pair, and the runway decides which aircraft can use which" is a more
complete answer to *why did my Florence flight land at Pisa* than the runway
alone.

## 4. Pisa: the meeting-point answer can be sharpened

The live answer says Pisa's arrangements "could not be verified for this
build". Two things are now known: the airport lists **N.C.C.** among its own
transport options, and **taxis** wait in front of the terminal exit on the
arrivals side. An NCC pick-up point is still unknown.

> *Proposed:* "That is settled in the reply to your request. The airport
> recognises private hire with driver as one of its transport options, so the
> category is an ordinary one here — but **it publishes no pick-up point for
> it**, and where a particular driver waits is part of the arrangement rather
> than a fixed rule. The taxi rank, for comparison, is in front of the
> terminal exit on the arrivals side."

**Recommendation: apply.** The caveat survives intact; the answer stops
sounding like we know nothing about the airport.

---

# Part 2 — Optional upgrades

## 5. Name the five sectors

The Comune's own page states: *"La ZTL è costituita da cinque settori: A, B,
O, F e G"*, and describes gates that **automatically read every plate**. The
live pages say only "lettered sectors".

> *Proposed, Florence hub, `constraint.known[0]`:* "Florence's historic centre
> is a limited-traffic zone — a ZTL — divided into **five lettered sectors: A,
> B, O, F and G**. Its boundary is a line of electronic gates that read the
> plate of every vehicle passing through."

**Recommendation: apply.** Concrete, sourced, and the plate-reading detail is
the one most likely to change a reader's behaviour.

## 6. Replace the vague hours explanation with the specific one

**This is the proposal to read most carefully, because it is where the
temptation to publish hours lives.**

The Comune's page does state weekday hours: sectors **A, B and O**, Monday to
Friday **07.30–20.00** and Saturday **07.30–16.00**. Three things argue
against putting that on the site:

1. It covers **A, B and O only**. The page states no weekday hours for F and
   G, so any unqualified sentence about "the ZTL hours" is wrong for two of
   the five sectors.
2. The **same page** is demonstrably part-stale: in an October 2026 capture it
   still explains the summer night ZTL with a worked example for **2022**.
3. It was read from an **archive capture**, because neither we nor the owner
   can open the live page.

> **Recommendation: do NOT publish the hours.** Instead replace the present
> hand-wave with the specific reason, which is more useful than a number:

> *Proposed, FAQ "What are the ZTL hours?":* "No hours are quoted here, and
> that is deliberate. The Comune publishes them, they are **not the same for
> every sector** — the weekday restriction is stated for sectors A, B and O,
> and a separate summer night restriction covers all five — and when its page
> was last read it was still illustrating the night rule with dates from 2022.
> Hours that change by ordinance and by season, on a page that is not always
> current, are exactly the thing to check at the source for your own date."

This is strictly better than today's "the sources that publish them do not
agree with one another", which is now a weaker claim than the evidence
supports.

**If the owner would rather publish the hours**, the only defensible wording
names the scope and the date: *"For sectors A, B and O the Comune states
07.30–20.00 Monday to Friday and 07.30–16.00 on Saturday; it states no
weekday hours for F and G. Read on 27 October 2026 from the Comune's own page
— confirm before you travel."* I do not recommend it, but it is available.

## 7. Sharpen the private-hire refusal

The live wording — "no official text saying so could be read" — is accurate
but vague. It can now name the document.

> *Proposed, Florence hub `constraint.unknown.body`:* "Whether a private-hire
> car may enter a sector. In Rome and in Milan the city names private-hire
> vehicles among the permitted categories in its own published rules. Florence
> publishes its authorisable categories in schedules annexed to a technical
> regulation — **the Disciplinare Tecnico ZTL** — which could not be read for
> this page. **Taxis have an authorisation category of their own; private hire
> is not named in anything we could read.** So no claim is made here either
> way, and no operating hours are quoted."

**Recommendation: apply.** It tells the reader exactly where the answer lives,
which is the most useful thing an unresolved page can do. Note the sentence
about taxis is a fact, not an implication — it must not be written so as to
suggest private hire is therefore excluded.

## 8. Add the emissions rule

Verified and consequential: *"Non possono essere autorizzati all'accesso in
ZTL i veicoli che non rientrano nei parametri antinquinamento previsti
dall'ordinanza n. 2018/00301"*. A vehicle failing those parameters cannot be
authorised at all, whatever category it belongs to.

> *Proposed, as a fourth item in `ztl.paragraphs`:* "One rule applies to every
> category alike: the Comune does not authorise a vehicle that falls outside
> the emissions parameters set by its own 2018 ordinance. That is a question
> about the vehicle rather than about the journey, and it is one more reason
> the answer depends on the specific arrangement."

**Recommendation: apply.** It is one of the few ZTL facts that is both stable
and directly about vehicles.

## 9. Add the A11 to the Pisa route page

The operator states the airport has direct access to the **A11
Firenze–Pisa Nord** motorway, among others. The route page currently describes
the journey as intercity without naming the road.

> *Proposed, in the Pisa route's `lead.terms`, replacing nothing — an added
> term:* "**The road exists and is named.** The operator lists direct access to
> the A11 Firenze–Pisa Nord motorway, along with the A12 and the
> Firenze–Pisa–Livorno highway. How long any of it takes is still not
> something this page will guess at."

**Recommendation: apply.** It gives the route page a concrete, sourced fact
without implying a duration.

## 10. Strengthen "Tuscany's busiest"

Now operator-confirmed: Pisa handled **5,547,008 passengers in 2024**, against
9,063,933 for the two-airport system.

> **Recommendation: apply the attribution, not the number.** Change the source
> note to say the ranking is the operator's own, and leave the figure out — a
> passenger count from 2024, read in 2026, dates faster than the ranking it
> supports. If the owner wants the number, it must carry its year.

---

# What is NOT proposed

- **No ZTL hours on any page** (see 6).
- **No claim, in either direction, about private-hire access to Florence's
  ZTL.** The research did not answer it.
- **No journey time or distance between Pisa Airport and Florence.** Still
  unsourced.
- **No reproduction of the two chauffeur companies named in the operator's
  charter.** They are third-party competitors; naming them on this site would
  be both odd and a referral we have no reason to make.
- **No change to the 1,560 m runway figure.** It remains
  reference-sourced — the operator's charter does not state it — and the
  Peretola page should keep saying so.
- **No change to the Val d'Orcia pages.** Nothing in this pass touched them;
  `visitvaldorcia.it` remains reachable and verified.
- **No change to Rome, Milan or the Veneto.**

# Still outstanding regardless of this decision

- **`NEXT_PUBLIC_SITE_URL` is unset.** Every canonical and sitemap URL still
  resolves to `localhost:3000`. Blocking for launch, site-wide.
- **The live `ztl.comune.fi.it` link on the Florence pages.** It could not be
  opened from here or, per the owner, from their browser. If proposals 5–8 are
  approved, the link target should be reviewed at the same time — the
  `mobilita.comune.fi.it` page used for this research may be the better one to
  send readers to, since it is the page that actually explains the zone.
- **The Florence Peretola 2025 service guide** has no Archive capture. If the
  owner can download it from a working browser, the Peretola page could gain
  the same operator-sourced grounding the Pisa page would.
