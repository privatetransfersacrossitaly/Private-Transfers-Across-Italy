# Milan cluster — final review

A human-quality review of the ten Milan/Lombardy pages in both languages,
conducted 2026-10-26 against the rendered production build.

**Nothing was committed or deployed. No new pages were created. The homepage,
the Rome cluster, the quote integration and all environment configuration
were left untouched.**

---

## Summary

| Severity | Count | Resolved |
|---|---|---|
| **High** — unsupported factual claim in published copy | 1 (appearing in 8 places × 2 languages) | ✅ removed |
| **Medium** — documentation misdescribing the pages | 4 research-log entries | ✅ corrected |
| **Medium** — image gap and image duplication | 2 | ✅ both resolved |
| **Low** — decorative image adding nothing | 1 | ✅ removed |
| **Low** — rhetorical claims about reader assumptions | 2 | ✅ reworded |
| **Blocked** — time-sensitive fact could not be re-fetched | 1 (Area B) | ⚠️ qualified, flagged |
| **Outstanding** — required configuration | 2 | ⛔ owner action |
| **Flagged, out of scope** — same defect class in Rome | 1 | ⛔ owner decision |

The cluster is **not ready for launch**, for two configuration reasons set out
in §8. Content and design are, in my judgement, ready.

---

## 1. The unsupported Malpensa statistic — resolution

**The brief asked specifically about this. It was real.**

**The claim.** A header comment in `content/milan/malpensa.ts` asserted:

> "it serves two completely different journeys. **Half its arrivals are going
> into Milan**; a great many of the rest are going north to the lakes and will
> never see the city."

**Where it appeared.** The numerical form ("half") existed in one place — a
source comment, not rendered copy. But the *same unsupported quantity*, in
softer words, had propagated into rendered copy in eight places across both
languages:

| # | Location | Wording |
|---|---|---|
| 1 | `malpensa.ts` header comment | "**Half** its arrivals…" |
| 2–3 | Malpensa hero lead, EN + IT | "For **a great many** of the people who land here…" / "Per **moltissimi**…" |
| 4–5 | Malpensa destination matrix, EN + IT | "For **many arrivals** this is the real destination" |
| 6–7 | Malpensa FAQ + route FAQ, EN + IT | "among the **most common requests** from this airport" |
| 8–9 | Malpensa→Lake Como hero lead, EN + IT | "**A great many** people landing at Malpensa are not going to Milan at all" |
| 10–11 | Lake Como, Menaggio entry, EN + IT | "the road **most airport transfers** use" |
| 12–13 | Lake Como onward index, EN + IT | "**The most common way** people arrive" |
| 14–15 | Lake Como town index + Milan hub, EN + IT | "the five **asked about most**" / "journeys **people ask about most**" |
| — | `docs/milan-design-differentiation.md` | "**many of its arrivals** never see the city" |

**Evidence search.** I searched the research log and re-searched the sources
behind it. **Nothing establishes how Malpensa's traffic divides by
destination.** SEA publishes terminal roles, runway and gate counts and system
passenger totals — no destination split. No secondary source gives one either.

Several of these were additionally a *different* kind of unsupported claim:
"among the most common requests from this airport" is a statement about this
business's own enquiry mix, for which there is no first-party record at all.

**Action taken.** Every one removed. **No replacement statistic was
invented.** Each was replaced with the verifiable geography that was doing the
real explanatory work:

> Malpensa is the country's principal intercontinental gateway, and it is not
> in Milan — it stands north-west of the city, in the province of Varese.
> **That position is the thing to understand: the lakes lie north of the
> airport, so for anyone bound there, Milan is a detour rather than a stop.**

The page's whole structure — a destination matrix rather than a timeline —
still stands, because the justification was never really the proportion. It
was the geography, and the geography is sourced.

**Recorded in:** `docs/milan-research-log.md` §8 (new), and a correction note
in `docs/milan-design-differentiation.md`.

---

## 2. Factual audit — all claims, classified

Every factual claim on the ten pages was checked against the research log and
the sources behind it.

| Classification | Count | Notes |
|---|---|---|
| **Verified by a cited source** | 23 | Airport names, codes, operators, terminal structures, track counts, Sala Blu hours, Area C hours, lake geography, ferry operator |
| **Verified but time-sensitive** | 3 | Area C hours (re-verified today), Area B hours (see §3), Bergamo's new terminal extension |
| **Operationally unverified** | all service statements | Deliberate and consistent: every page is framed as an enquiry subject to confirmation |
| **Uncertain / insufficiently supported** | 1 | The Malpensa proportion — removed, §1 |
| **Incorrect or inconsistent with source** | 0 in published copy; 4 in the research log itself | See §4 |

**Claims that stand, with their sources:**

- Malpensa: two passenger terminals plus cargo; T1 described by SEA as "the
  intercontinental airport of Milan"; T2 international, weighted to the
  premium end of low-cost; 93 gates and 139 stands. **SEA.**
- Linate: SEA's own "the city airport"; mostly frequent-flyer traffic; 24
  gates; about 11 million passengers, 2025. **SEA / secondary reporting of
  SEA data, labelled with its year.**
- Bergamo: Il Caravaggio International Airport; BGY; SACBO; Orio al Serio, in
  the province of Bergamo; about 5 km from Bergamo and about 50 km from
  Milan; about 17.4 million passengers in **2024**. **Operator and local
  tourism authority.**
- Stations: Centrale 24 tracks, Porta Garibaldi 20, Rogoredo 13; Cadorna run
  by FerrovieNord, not RFI; Sala Blu Milano 07:45–22:30, requestable up to an
  hour before. **RFI.**
- Area B and Area C, both Monday–Friday 07:30–19:30; taxis and NCC up to nine
  seats exempt from the Area C charge when plates are registered. **Comune di
  Milano.**
- Lake Como: inverted-Y shape, towns by branch, public navigation run by
  Gestione Governativa Navigazione Laghi, seasonal variation. **Operator and
  geography.**

**Deliberate omissions confirmed still in force:** no price anywhere; no
journey time anywhere; no Malpensa–Milan distance (SEA publishes none and
secondary figures disagree); no Area C charge amount (it has changed more than
once); no Bergamo 2025 passenger figure (SACBO's is a projection, not a
result); no claim that the planned Bergamo rail link exists.

**Two rhetorical claims reworded.** "not a Milan airport in the sense **most
people assume** when they book" and "the journey **most people** did not know
they had booked" both asserted something about readers. They now attribute the
problem to the airport's name instead, which is both accurate and better copy.

**One claim checked and kept.** Linate's "the one most of its passengers use
repeatedly rather than once" paraphrases SEA's own description of its
customers as mostly frequent flyers. It is the operator's claim about its own
traffic. Kept.

---

## 3. Time-sensitive facts — re-verification

**Area C: re-verified.** Confirmed today directly against the Comune di
Milano's Area C page, which carries a June 2026 update and states Monday to
Friday, 07:30–19:30, public holidays excluded. Matches the published copy.

**Area B: could not be re-fetched.** Both Comune support-centre URLs cited in
the research log now return **HTTP 403** to an automated request. The hours
are corroborated by ATM, which publishes the same Monday–Friday 07:30–19:30
window, but ATM's page carries a staleness indicator — so this is
corroboration, not confirmation.

**Action:** no copy change. The pages already date the claim ("checked in
October 2026") and link the reader to the city, which is the correct treatment
for a fact in exactly this state. The limitation is recorded in the research
log and flagged below for a human check before launch.

**Nothing was added** to make the pages look more comprehensive. No charge, no
journey time, no fare, no pickup rule was introduced.

---

## 4. Research log defects — corrected

The log's "Used on" column overstated reality in four places. In every case
**the pages were more conservative than the log claimed** — the error was in
the documentation, not the site. But a research log that misdescribes the
pages is worse than none, because it is the artefact an auditor trusts.

| Entry | Log said | Reality | Fixed |
|---|---|---|---|
| M5 — Malpensa runways, 3,920 m | "Used on: malpensa" | Never used | ✅ marked "not used" |
| M9 — Malpensa ~31 m passengers 2025 | "Used on: malpensa, milan" | Never used | ✅ marked "not used" |
| A5 — Area B 186 access gates | "Used on: milan" | Page says "a few hundred", gives no number | ✅ entry rewritten |
| A8 — vehicles over 7.5 m | "mentioned once" | Never used | ✅ marked "not used" |

---

## 5. English / Italian consistency

Verified structurally and by reading.

**Structural parity, measured on the rendered HTML** — all eleven counterpart
pairs identical on every count: `h1`, `h2`, `h3`, list items, definition
terms, tables, images, internal links and external reference links. No section
was lost or added in translation.

**Read for naturalness.** The Italian is written as Italian, not transposed.
Characteristic examples: *"È la posizione a contare"*, *"non è una curiosità"*,
*"a cui il nome dell'aeroporto non prepara"*, *"non è ancora una
destinazione"*. Register is consistent — the formal plural *voi* throughout,
as in the Rome cluster.

**Caveats verified identical in force across languages.** Every correction in
§1 was applied to both languages in the same pass; the "no boat is included"
refusal, the "request is not a booking" note, the dated zone hours and the
"nothing here promises" qualifiers all appear in both.

**Terminology consistent:** NCC / *noleggio con conducente*, Area B / Area C
(untranslated, as the city names them), *Sala Blu*, *Cerchia dei Bastioni*.

---

## 6. Design review — all ten pages

Inspected as rendered, desktop (1280) and mobile (390), against each other and
against the Rome cluster. Full per-page detail is in
`docs/milan-design-differentiation.md`; the finding here is the verdict.

| Page | Hero | Dominant module | Distinct? |
|---|---|---|---|
| Milan hub | chooser inside the hero | zone diagram (nested boxes) | ✅ unique in project |
| Malpensa | photo bleeding off the right edge | destination matrix | ✅ unique |
| Linate | compact, rule-separated fact line | none — brevity is the argument | ✅ unique |
| Bergamo | drawn distance diagram | the diagram | ✅ unique |
| Stations | contained split | table + two-manager section | ⚠️ shares a primitive with Rome — justified, see below |
| Lake Como | backdrop + town selector | the refusal (road ≠ water) | ✅ unique |
| MXP→Milan | journey strip | none — endpoints lead | ✅ |
| LIN→Milan | journey strip | assumption panel | ✅ |
| BGY→Milan | journey strip | three-way scale comparison | ✅ |
| MXP→Lake Como | journey strip | town fork | ✅ |

**The three airport pages are not the same page renamed.** They differ in
hero, in dominant module, in section order, in surface rhythm and in content
density. Malpensa leads with *where you are going*; Linate with *what
proximity does not buy*; Bergamo with *where the airport actually is*. Each
argument is specific to its airport and could not be swapped.

**The one shared primitive, examined.** Milan's station page leads with a
table, as Rome's does. I considered changing it and decided not to: a
reference lookup wants a table, and inventing a different primitive for the
same job would be variation for its own sake, which the architecture document
warns against as explicitly as it warns against cloning. Everything around the
table differs, and Milan's table carries a point Rome's cannot — one of the
four stations has a different infrastructure manager.

**No layout was changed merely to be different.** The only structural change
in this review was removing a decorative image (§7).

**Mobile behaviour verified** at 320–1680 px: the Bergamo diagram reflows from
a horizontal scale to a vertical one below 640 px; the Lake Como selector
wraps with 44 px targets; no page overflows at any width.

---

## 7. Images — both flagged issues resolved

**Bergamo had no photograph.** A second search found one: the apron at Orio al
Serio at dusk, aircraft at stands, terminal behind. CC0, Wikimedia, creator
"Air fans". It is a photograph of **the airport**, not of Bergamo city — the
distinction the architecture document is explicit about, and the reason the
page went without one through the first build.

Placed **mid-page**, not in the hero, so the drawn distance diagram keeps the
opening and the page keeps its text-led character.

*A judgement recorded for auditability:* an airline livery is legible on an
aircraft in the background. A second candidate was rejected because a branded
aircraft filled the frame. The distinction is prominence — any photograph of
any apron contains liveries, and the rule targets images that advertise a
third party or imply affiliation. This one does neither. Both decisions are
recorded in the manifest so they can be compared.

**The duplicated check-in hall is gone.** Malpensa now carries a photograph of
Malpensa — the terminal seen from the approach road. A second candidate
showing the kerbside drop-off was rejected: a kerb would imply a pickup
arrangement the page explicitly refuses to promise. Fiumicino keeps the
generic check-in hall, which is no longer duplicated anywhere.

**One further image removed.** A wide Galleria photograph sat mid-page on the
station page. It was decorative — a shopping arcade illustrates nothing about
a railway station — and it was the project's last duplicated image.

**Result: every image on the site is now used exactly once**, and every one of
the 19 distinct images loads with HTTP 200.

---

## 8. Configuration — both still unresolved

**`NEXT_PUBLIC_SITE_URL` — still unset.** Confirmed: no `.env` file exists,
only `.env.example`. `lib/site.ts` falls back to `http://localhost:3000`, so
every canonical, hreflang, Open Graph URL and sitemap entry currently resolves
to localhost.

> **Exact configuration required from the owner:** set
> `NEXT_PUBLIC_SITE_URL` to the absolute production origin with no trailing
> slash, e.g. `NEXT_PUBLIC_SITE_URL=https://www.example.com`, in the
> deployment platform's environment. I have not invented a domain and have not
> created or edited any environment file.

**`QUOTE_ENDPOINT_URL` — still unset.** Confirmed: `lib/quote/transport.ts`
returns `{ ok: false, reason: "not_configured" }` and the server action
returns `not_delivered`.

**The user-facing experience does not imply delivery.** There is no quotation
form rendered anywhere on the site. Every CTA resolves through
`quotePathFor(locale)` to the `#request-a-quote` section, whose own copy says:

> "The quotation form and its submission path are the subject of the next
> phase of this site. Until it is in place, this section is the quote
> destination that the navigation and the buttons point at — **nothing here
> pretends to send a message or to confirm a booking.**"

**No change required or made.** I did not modify the quote action, transport,
schema, CRM configuration or any environment variable.

---

## 9. Exact files changed

**Content (11 files):**
- `content/milan/malpensa.ts` — 7 edits (the statistic and its derivatives)
- `content/milan/routes.ts` — 8 edits
- `content/milan/lake-como.ts` — 8 edits
- `content/milan/milan.ts` — 4 edits
- `content/photos.ts` — 2 photographs registered

**Components (3 files):**
- `components/milan/malpensa-page.tsx` — hero image replaced
- `components/milan/bergamo-page.tsx` — photograph added mid-page
- `components/milan/stations-page.tsx` — decorative image removed

**Assets (2 added):**
- `public/photos/malpensa-terminal.jpg`
- `public/photos/bergamo-airport.jpg`

**Documentation (4 files):**
- `docs/milan-research-log.md` — 4 entries corrected, re-verification
  recorded, §8 added
- `docs/milan-design-differentiation.md` — correction note, three sections
  updated, comparison table revised
- `docs/asset-manifest.csv` — 3 rows replaced, 2 added, branding judgement
  recorded
- `docs/milan-final-review.md`, `docs/milan-final-qa-report.md` — new

**Not touched:** the homepage, the entire Rome cluster, `app/actions/quote.ts`,
`lib/quote/*`, `lib/site.ts`, `lib/routes.ts`, all environment configuration.

---

## 10. Issues still needing human approval

1. **Set `NEXT_PUBLIC_SITE_URL`.** Blocking. Without it every canonical on the
   site is wrong.
2. **Human fact-check of Area B's hours** against the Comune's page in a
   browser. I could not re-fetch it; the figure is corroborated but not
   confirmed.
3. **Decide whether any service claim can be upgraded** from "enquiry subject
   to confirmation". If yes, copy changes; structure does not.
4. **The Rome cluster carries the same class of unverified operational claim**
   — "the journeys people ask about most" — in two places. Correcting
   signed-off Rome copy was outside this audit's scope. It is the same defect
   I removed from Milan, and it should get the same treatment.
5. **Two pre-existing homepage meta descriptions run long** (196 and 222
   characters). Signed-off copy; left alone.
6. **Linate's 2025 and Bergamo's 2024 passenger figures come from secondary
   reporting**, not from the operators directly. Both are labelled with their
   year on the page. Worth a primary-source check if they are to remain.
