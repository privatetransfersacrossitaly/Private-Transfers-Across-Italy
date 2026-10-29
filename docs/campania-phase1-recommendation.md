# Campania cluster — Phase 1 recommendation

**27 October 2026. Planning only.** No application code, route, registry
entry, sitemap entry, navigation item or configuration was changed. Seven
planning documents were written; all seven were absent beforehand.

---

## 1. The short version

**Build three pages, and not the one the brief lists first.**

| | |
|---|---|
| Candidates inventoried | **19** |
| **Build now** | **3 page ids → 6 localized routes** |
| Defer | 13 |
| Reject | 3 families |
| Registry after Stage 1 | **47 → 50** |
| Routes and sitemap after | **94 → 100** |

**Stage 1: `naples`, `salerno-airport`, `naples-cruise-port`.**

The brief puts Naples airport first. The evidence puts it last among the
airports, for a reason that will have expired by December — which is precisely
why it should not be built this week.

---

## 2. The finding that sets the order

**Naples Capodichino closes for runway works in November 2026.** The airport
operator says so on its own homepage: *"Naples airport closed for runway
requalification (November 2026)"*, dated 19 October. **Today is 27 October.**

Two things follow, and they point the same way.

**The operator publishes the month, not the dates.** Independent outlets
consistently report 1–30 November, a full suspension for single-runway and
taxiway work. None of that could be confirmed on an official page. So a NAP
page would have to lead on a fact it can only attribute to secondary sources —
on the one subject where being wrong matters most.

**The page would be obsolete almost immediately.** Built now, it describes a
shut airport for a month and then describes a closure that has ended.

> **Recommendation: defer the NAP page, and give the Naples hub a short sourced
> notice instead.** The hub outlives November. A page built around a closure
> does not.

This is also why **Salerno leads the cluster**. It is open, it is expanding,
and it is run by the same operator.

---

## 3. Build now — three pages

### `naples` — the gateway chooser

`/destinations/naples` · `/it/destinazioni/napoli`

Naples's real problem for a transfer is that it has four gateways and one
name. The hub separates the airport, the cruise quay, the hydrofoil quay and
the ferry quay, and sends the reader to the one their journey ends at. It also
carries the closure notice, attributed, with the operator linked.

**Why it is not thin:** no other page on this site can answer "which Naples do
you mean", and the question is real enough to cost someone a sailing.

### `salerno-airport` — the one that is open

`/airports/salerno-costa-damalfi` · `/it/aeroporti/salerno-costa-d-amalfi`

**The brief's critical check passes.** Salerno Costa d'Amalfi is a current,
operating airport under a named operator (GESAC — the same company that runs
Naples), and its own news reports an Aeroitalia base, Wizz Air expansion and
four new international routes.

**Its verified, genuinely useful fact:** the passenger terminal **closes
22:30–05:00**, except for exceptional delays. That decides what a night
arrival can do, and no other airport page in this project has an equivalent.

One contradiction is recorded rather than smoothed: a December 2025 report
described a downturn and cancelled flights. Neither that nor the expansion
headlines may be published as a characterisation of the airport's health.

### `naples-cruise-port` — the page that tells the quays apart

`/cruise-ports/naples-stazione-marittima` · `/it/porti-crociere/napoli-stazione-marittima`

The third member of an established family, after Civitavecchia and Porto
Corsini. Its slug names the **facility**, following the Ravenna precedent, so a
future Beverello or Porta di Massa page could never collide with it.

**What it must not say:** no pier counts, lengths or depths — the only
available figures are promotional. No vehicle access rule — none was found.
The operator's own site returned **HTTP 403** and must be opened in a browser
before it is linked.

---

## 4. Rejected, and why

### Private tours — rejected on the site's own words

The brief lists private tours as a priority. The homepage already states the
opposite **twice, in both languages**:

> *"We drive it; we are not a tour operator and we do not sell admissions."*
> *"We drive. We are not a tour operator, we do not sell tickets or
> admissions, and nothing here is an offer of a guided visit."*

This is settled by existing site copy, not by missing evidence. **Pompeii and
Caserta survive as transfer endpoints** — places a car is driven to for a
booked time — which is both honest and what the business actually does.

### Amalfi Coast hotel pages — rejected at this stage

Bologna established what a defensible hotel page costs: each address confirmed
on the hotel's own website, plus a property-specific access fact that
distinguishes it from its neighbours. **Zero Campania hotels have been
researched**, and no destination page exists to parent them. A hotel directory
built on that is the thin-content failure the brief names.

### Reverse-direction routes — rejected as a default

The Bologna Stage 4 audit measured this on live pages: **76–82% of a route
page is direction-neutral.** Reverse routes must be justified one at a time,
never generated in pairs.

---

## 5. Deferred, with the blocking fact named

| Page | Blocked on |
|---|---|
| `nap-airport` | Operator-confirmed closure dates, or the reopening. **First to revisit** |
| `pompeii` | Whether Piazza Esedra, Porta Marina and Piazza Anfiteatro are **vehicle-reachable entrances**. They are verified only as ticket-office locations, and the park's "How to get there" page was not retrieved. **Strongest Stage 2 candidate** |
| `caserta` | Driving, parking and drop-off — the address is verified, nothing else is |
| `positano` | Its vehicle access restrictions, entirely unresearched and **specifically flagged** |
| `sorrento`, `amalfi`, `ravello`, `salerno-city` | No primary research performed |
| All five route candidates | Their far endpoints do not exist; the shared route type needs a `PageId` at both ends |
| `route-naples-rome` | Cannibalisation against ten live Rome pages, plus unverified long-distance coverage |

---

## 6. Source gaps

The honest state of the evidence:

- **Closure dates** — operator publishes the month only.
- **Affected airlines** — reports contradict each other; nothing publishable.
- **Pickup points** — not established at NAP, QSR or any Naples quay. The same
  gap found at Pisa, BLQ and Porto Corsini.
- **terminalnapoli.it** — HTTP 403 to automated access.
- **Pompeii** — entrances vs ticket offices unresolved; driving page not read.
- **Caserta** — driving, parking, drop-off and opening times not read.
- **Six of eight destinations** — no primary research at all.
- **Any fare, distance or road time in Campania** — none exists.
- **Provider capability** — unverified across the whole cluster, as in every
  prior one.

### Four questions only the owner can answer

1. Does the business serve Campania at all, and from where?
2. Does it serve the Amalfi Coast road, and would it want any vehicle-size or
   seasonal limit stated?
3. Can it meet a passenger at a Naples cruise quay, and does it know which
   quay rules apply?
4. Does it serve Naples ↔ Rome — which would overlap an existing cluster?

**Question 3 gates the cruise-port page's usefulness**, though not its
publication: the page can tell the quays apart without claiming where a car
may wait.

---

## 7. Overlaps and cannibalisation

| Risk | Level | Handling |
|---|---|---|
| Hub vs airport and port pages | **Low** | The hub answers *which gateway*; the others answer *what happens at one* |
| Cruise port vs future quay pages | **Low by design** | The slug names a facility |
| Naples ↔ Rome vs the Rome cluster | **High** | Deferred pending an owner decision |
| Reverse routes | **High** | Rejected as a default |
| Hotel directory | **High** | Rejected at this stage |
| Existing homepage references | **None** | Both are hedged; the "Also asked about" note already says naming a city does not mean a page exists |

---

## 8. Dependencies and staging

**Stage 1 — the three pages above.** Depends on no unverified Campania fact.
Each can be written from operator or official sources, with the gaps stated.

**Navigation is the one external dependency.** Without a Campania navbar group
and footer column, all three pages are orphans — the same bind recorded for
Bologna at D3 and resolved there by authorising navigation for that cluster's
own entries only. **Navigation changes are out of scope for this task** and
would need explicit approval alongside implementation.

**Stage 2 — Pompeii**, once the entrance question is settled, then Caserta.

**Stage 3 — the Amalfi Coast destinations**, each only after its own access
rules are read. Positano last, or not at all until its restrictions are
verified.

**Stage 4 — routes**, one at a time, once endpoints exist and coverage is
confirmed.

**Not a goal: page count.** Three pages that answer real questions are worth
more than nineteen that restate each other, and this cluster's evidence
supports three.

---

## 9. Decisions required before implementation

1. Approve, amend or reject the **three-page Stage 1**.
2. Confirm the **NAP deferral** and the plan to carry the closure notice on
   the hub instead.
3. **Authorise navigation wiring** for Campania entries only — or accept that
   the pages ship unlinked and unpublished.
4. Answer the **four provider-capability questions** in §6.
5. Confirm the **rejection of private tours**, which follows from existing
   homepage copy.
6. Confirm **hotel pages stay rejected** until destinations exist and
   properties are verified.
7. Someone with a browser to open **terminalnapoli.it** and the Naples
   operator's closure notice.

---

## 10. Files written

| File | Contents |
|---|---|
| `docs/campania-phase0-audit.md` | Measured counts, the three homepage commitments, infrastructure, conflicts |
| `docs/campania-source-verification.md` | Every claim with publisher, access date, support and limitation |
| `docs/campania-page-inventory.csv` | **19 rows, 21 columns.** 3 build, 13 defer, 3 reject |
| `docs/campania-internal-link-map.csv` | 27 rows, including the orphan check |
| `docs/campania-url-map.md` | Proposed and reserved EN/IT URLs; collision and cannibalisation checks |
| `docs/campania-cluster-architecture.md` | The architecture and its guardrails |
| `docs/campania-phase1-recommendation.md` | This document |

All seven were absent before this task; none overwrote existing material.

---

## 11. Confirmation

**No application code or configuration changed.** No route, page id, registry
entry, sitemap entry, navigation item or router behaviour. No environment
variable or `.env` file. No quote endpoint, form, CRM, email, API, database,
DNS, hosting or deployment change. No quote submitted. No commit, no push, no
deployment. Rome, Milan, the Veneto, Tuscany, Bologna and the homepage are
untouched.

`NEXT_PUBLIC_SITE_URL` and `QUOTE_ENDPOINT_URL` remain unset and were
deliberately not addressed.

**Stopping for review. Implementation has not begun.**
