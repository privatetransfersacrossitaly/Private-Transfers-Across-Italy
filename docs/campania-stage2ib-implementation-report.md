# Campania cluster — Stage 2I-B implementation report

**28 October 2026.** One page id, two localized routes: **Ravello**, English and Italian.
Nothing else was built. Nothing was committed, pushed, deployed or published.

The Stage 2I and 2I-A audits were delivered in conversation and never authorised as
files, so they are the baseline here, with both governing ordinances reopened and
re-verified before any copy was written.

---

## 1. Files created and modified

### Created

| File | Purpose |
|---|---|
| `content/campania/ravello.ts` | The page, both languages |
| `components/campania/ravello-page.tsx` | The view |
| `app/(en)/destinations/ravello/page.tsx` | EN route: metadata + JSON-LD |
| `app/(it)/it/destinazioni/ravello/page.tsx` | IT route: metadata + JSON-LD |

### Modified

| File | Change |
|---|---|
| `content/campania/types.ts` | Added `RavelloRule` and `RavelloDestination`. See §4 for the required safeguards |
| `lib/routes.ts` | `"ravello"` in the `PageId` union and one record, parented to `naples`. A comment records why Sorrento and Salerno city remain absent |
| `content/page-names.ts` | One breadcrumb name, identical in both languages |
| `content/navigation.ts` | Campania-only: one label pair; `ravello` added to the existing `naples-and-campania` navbar group and the existing `campania` footer column |
| `content/campania/naples.ts` | The hub's onward index gained Ravello in both languages |
| `content/campania/amalfi.ts` | **One sibling cross-link per language** — declared because it edits an existing page. Amalfi's onward index now links Ravello, which sits above it on the same coast under a different regime. No other Amalfi content changed |

### Verified not touched

**The homepage was not modified** — `content/home/en.ts` and `content/home/it.ts` are
unchanged, and the intercity coverage disclaimer is still present exactly once, unedited.
Nothing under `components/site` or any other cluster (`rome`, `milan`, `veneto`,
`tuscany`, `bologna`) changed — verified by modification time. No new shared component, no
new dependency, no router change, no environment variable, domain, DNS, hosting, quote
endpoint, CRM, email, API or database setting.

---

## 2. Page id, routes and counts

| Page id | English | Italian | Parent |
|---|---|---|---|
| `ravello` | `/destinations/ravello` | `/it/destinazioni/ravello` | `naples` |

Both paths were confirmed unused before editing and match the reservation in
`docs/campania-url-map.md` line 77. The slug is identical in both languages.

| | Before | After |
|---|---|---|
| Registry page ids | 55 | **56** |
| Localized route files | 110 | **112** |
| Sitemap URLs | 110 | **112** |
| Production build static pages | 115 | **117** |

---

## 3. Official sources used

Both ordinances were re-downloaded today and confirmed **byte-identical by SHA-256** to
the copies read during the audits.

| Source | Authority | Date | Verified | Check |
|---|---|---|---|---|
| **Ordinanza n. 26 del 09/08/2025**, *Disciplina generale della circolazione stradale* | Comando Unico Polizia Locale Tramonti–Ravello | 9 Aug 2025 | **28 Oct 2026** | HTTP 200, 710,212 bytes, SHA-256 `f3a8a6c509dbb6c6…` — identical |
| **Ordinanza n. 46 del 25/09/2026**, *…— Precisazioni e variazioni tariffarie* | Comando Unico Polizia Locale Tramonti–Ravello | 25 Sep 2026 | **28 Oct 2026** | HTTP 200, 456,566 bytes, SHA-256 `2a1a600c19da3d61…` — identical |
| **ZetaPass portal**, which publishes both | Comune di Ravello | — | **28 Oct 2026** | HTTP 200; still lists Ordinanza 46/2026 at the head of its legal list |

The single outbound link published on the page — `https://www.ravellozetapass.it/` —
returns **200** from both locales.

**Deliberately not used.** Ordinanza 13/2022 (revoked). Delibera G.C. 59/2025, and with it
the restaurant-access hours and the €6 authorisation — its standing against Delibere
65/2025 and 82/2025 could not be established and neither of those is published, so the
whole topic is omitted as instructed. Ordinanza 36/2026 and 45/2023, both cited in force
and both returning soft 404s on the portal. The SS163 plate rule.

---

## 4. How the amendment relationship is represented

`RavelloRule` is a **required block of five required string fields**, rendered on the page
in its own band rather than left in a code comment:

| Field | What it carries |
|---|---|
| `governing` | Ordinanza n. 26 of 9 August 2025, with issuing authority and title |
| `amendedBy` | Ordinanza n. 46 of 25 September 2026, noting that it declares itself **not novative** and leaves the earlier measure's essential elements in force |
| `supersession` | That the Comune's own ZetaPass **service page still offers the revoked 2022 ordinance** as its service conditions — stated neutrally, with the explicit caveat that we are *not* suggesting the Comune has withdrawn that page |
| `unresolvedTariff` | Why no ordinary-car price appears anywhere |
| `verifiedOn` | 28 October 2026 |

The hero's fact line carries **"Governing rule: Ordinanza 26/2025"** and **"As amended by:
Ordinanza 46/2026"** side by side, so the provenance is visible before any rule is read.
A single `asOf` date would have presented the 2025 ordinance as current when an amendment
already existed — the precise mistake this stage was called to avoid.

---

## 5. How the unresolved ordinary-car tariff is excluded

The amending ordinance states the loading/unloading table *"è sostituita dalla seguente"*
and gives four rows. **None covers a car of up to nine seats and 5,30 m** — the class an
ordinary transfer uses — while a separate clause of the same ordinance goes on regulating
that category. The figure is therefore unresolved and is excluded everywhere.

**Verified mechanically against the rendered pages.** The complete set of currency amounts
appearing anywhere on either page:

- English: **€80.00, €60.00, €4.00** — and nothing else
- Italian: **80,00 €, 60,00 €, 4,00 €** — and nothing else

No `€8`, no `€10`, in body copy, headings, metadata, FAQ answers or JSON-LD. A separate
sweep for the revoked 2022 figures (5,00 · 7,00 · 30,00 · 50,00 · 65,00) returned nothing.

The absence is explained rather than silent: `limits.note` renders in its own callout
saying the table was substituted, that the substituted table contains no band for an
ordinary car, and that the earlier figures belong to a table that no longer stands.

Each published band carries its exact category and range: **7,31–10,33 m Euro 5/6 at
€80.00**, **5,31–7,31 m Euro 5/6 at €60.00**, **over 10,33 m not permitted**, and **Ape
calessino / four-wheel electric passenger vehicles at €4.00 at the three locations the
ordinance names for that category**. The page states in terms that this is not a complete
tariff, and that the charge is a municipal one, not a fare of ours.

---

## 6. Design and internal linking

| Page | Hero | Central modules |
|---|---|---|
| Naples hub | `HeroBand` | `DataTable` |
| Salerno airport | `HeroMeta` | `Callout` |
| Naples cruise terminal | `HeroConstraint` | `DataTable` |
| Caserta | `HeroGeo` | `CompareColumns` |
| Pompeii | `HeroModes` | `DefinitionList` |
| Positano | `HeroTiers` | `DataTable` + `NumberedSteps` |
| Amalfi | `HeroChooser` | `FactStrip` |
| Naples Capodichino | `HeroConstraint` | `DataTable` + `CompareColumns` |
| **Ravello** | **`HeroBand`** | **`DefinitionList` (areas) + `NumberedSteps` (booking) + `CompareColumns` (authorisation vs charge)** |

**`HeroBand` is reused from the Naples hub, deliberately.** Every photo-free hero is now
spoken for and the two unused ones are route-shaped. Rather than force a tier ladder the
evidence does not have, or a chooser whose rows would all point at one section, the hub's
fact-line hero carries Ravello's four defining facts — four named areas, the day-before
deadline, the governing ordinance and the amending one. It is **not** Positano's or
Amalfi's hero, so the three coast pages stay visibly distinct.

**Section order, with one deliberate inversion:** areas → **booking → charge** → limits →
meeting → provenance. Booking comes *before* money because the ordinance's own emphasis is
that access requires authorisation, and because leading with a tariff would imply a price
list this page cannot honestly provide. The `CompareColumns` block then holds the two
obligations side by side under the heading *"A waived fee is not a waived booking"*.

**The provenance band is built from existing primitives** — a label, a bordered panel and
two callouts. No new shared component was created.

**Internal links.** Inbound: the Naples hub's onward index, the `naples-and-campania`
navbar group, the `campania` footer column, and Amalfi's onward index. Outbound: `amalfi`,
`positano`, `naples` and `nap-airport`, plus the closing CTA to `amalfi`. No route coverage
is claimed between any of them.

No photograph; `img = 0` on both pages, so nothing was reused from another page.

---

## 7. QA — commands run and actual results

**There is no configured test suite in this repository** (no vitest, jest or playwright).
No automated tests were run, and none are claimed.

| Check | Result |
|---|---|
| `npx tsc --noEmit` | **Clean** |
| `npx eslint .` | **Clean**, exit 0 |
| `npx next build` | **Compiled successfully**, **117/117** static pages, no errors or warnings |
| Counts | 56 ids / 112 route files / 112 sitemap URLs / 117 build pages — measured before and after |
| Both routes render | **200** each; one `<h1>`; 4 `hreflang` links; 2 JSON-LD blocks; `img = 0` |
| Canonical + hreflang | Self-canonical; `en`/`it`/`x-default` present and **reciprocal in both directions** |
| Language switcher | Exactly one anchor to the correct counterpart on each page |
| Breadcrumbs | `Home > Naples > Ravello` · `Home > Napoli > Ravello` |
| Internal links, whole site | 112 distinct internal route hrefs crawled across all **112** pages; **every one resolves**. Only non-route hrefs are two build assets and the favicon, all 200 |
| Orphan check | **57 inbound pages** each; linked from the Naples hub **and** from Amalfi, in both locales |
| Outbound source | `ravellozetapass.it` → **200**, from both locales |
| Heading hierarchy | One `h1`, then `h2`/`h3`, **no skipped levels** on either page |
| No duplicate imagery | `img = 0` on both pages |
| FAQ structured data vs visible | **8/8** `Question` names per page found in that page's visible HTML, both locales. Types limited to `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` + `Question`/`Answer`/`ListItem`. **No** `LocalBusiness`, `Offer`, `AggregateRating`, `Review`, price or guarantee schema |
| **No €8/€10 anywhere** | **Verified** — see §5. Complete rendered currency set is €80, €60, €4 only |
| No revoked 2022 tariffs as current | **Verified** — sweep for 5,00 / 7,00 / 30,00 / 50,00 / 65,00 returned nothing |
| No invented meeting-point instructions | **Clean** on four probes: bay/stall numbers, walking or approach directions, kerb/entrance naming, SS163 detail |
| Responsive 320–1680 px | No horizontal scroll or overflow at any width on the **English** page |
| Browser console | **Zero** console errors or warnings, zero browser-log entries, zero failed requests, headless Chrome 156 |

### Pre-existing defect observed, not fixed

At exactly 1024 px the Italian page shows a 3 px overflow (`scrollWidth` 1012 against
`clientWidth` 1009). Measured in this same run: `/it/destinazioni/ravello`,
`/it/destinazioni/firenze` and `/it` are **identical**, and the English Ravello page shows
1009/1009 with no overflow. The offending element is the shared header's Italian quote CTA
(`Richiedi un preventivo`). **Known, pre-existing, site-wide, not introduced here and —
per the brief — not fixed in this stage.**

QA ran against `npx next start` on port 3240 and headless Chrome on 9605, both started by
this session and **verified as mine by command line before being stopped**. Both ports are
released.

**On your development server:** there is currently **no `node.exe` process running at
all** on this machine — including the nine leftover `next start` servers from earlier
stages and the `npm run dev` process last seen as PID 18820 yesterday. They were already
gone before this stage began, consistent with a restart between sessions (the date rolled
over and the working directory's case changed). **I did not stop it:** the only process
kill I issued this stage filtered strictly on `*next*start*-p 3240*` and matched exactly
two PIDs, both mine. You will need to restart `npm run dev` yourself.

---

## 8. Remaining evidence gaps and owner confirmations

### Gaps

1. **The ordinary-car tariff remains unresolved.** The substituted table omits the
   ≤9-seat / ≤5,30 m band while another clause still regulates that category. Only the
   Comune can settle it.
2. **Ordinanza n. 36/2026 and n. 45/2023** are cited as in force by the current ordinance
   and are **not published** on the portal — probing its own file-naming scheme returns a
   soft 404. Nothing on the page rests on them.
3. **Delibere G.C. 65/2025 and 82/2025** are named as the measures approving the current
   discipline and parking tariffs, and are likewise unpublished. Whether Delibera 59/2025
   survives them is unknown, which is why restaurant access is omitted.
4. **No usable official ZTL map.** The portal's map page returns an empty document and its
   link is commented out of the site's HTML, so no physical position is publishable.
5. **The portal's legal list is an index, not an archive.** Ordinanza 46/2026 appeared on
   it between 27 and 28 October. A later measure could appear the same way. **The absence
   of one today is not proof that none exists.**
6. **SS163** remains unverified and is absent from the page.

### Owner confirmations

1. **Do you hold a private-hire authorisation issued by the Comune di Ravello?** This
   decides whether the fee waiver applies. The page currently states that we do **not**
   claim one.
2. **Does any vehicle used exceed 5,30 m, or fall outside Euro 5/6?** That changes which
   published band applies, or whether the journey is possible at all above 10,33 m.
3. **Who submits the ZetaPass booking** — us or the passenger's property? The ordinance
   puts it on the carrier in some cases and on the hosting property in others.

None was needed to publish the page; all three would sharpen it.

---

## 9. Confirmation

Stage 2I-B is complete and stopped. **No further stage was begun.** Nothing was committed,
pushed, deployed or published; no booking was submitted and no payment or personal data
entered. No dependency was installed, no new shared component created, no homepage content
changed and the intercity coverage disclaimer is untouched.
