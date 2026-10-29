# Veneto cluster — research log

Every factual claim the Venice, Verona and Veneto pages make, its source, the
date checked, the pages that depend on it, and its confidence status.

**All dates checked: 2026-10-26.**

Same rule as Rome and Milan: if a claim is not in this table, it does not go
on a page. Where sources disagreed, the disagreement is recorded rather than
resolved by picking the convenient number.

---

## 0. Blocked sources — read this first

The architecture document names ten planning sources. **Four could not be
retrieved**, and that shapes everything below. This is recorded prominently
because a reader of this log needs to know which claims rest on operator
documentation and which do not.

| Source | Result | Consequence |
|---|---|---|
| `veneziaairport.it/en_gb/transport` and `/from-to/venice` | **HTTP 403** to an automated request | No VCE fact on any page comes from the operator's own site |
| `trevisoairport.it/en_gb/transport/from-to/venice` | **HTTP 403** | Same for TSF |
| `aeroportoverona.it` transport pages | **HTTP 403** | Same for VRN |
| `vtp.it/en/passengers/how-to-reach-us/` | **TLS certificate verification failure** | Cruise-terminal page **deferred** — see §6 |

**What this changed.** Every airport fact used on a page is a structural one —
official name, IATA/ICAO code, operator company, municipality, approximate
distance — verifiable from encyclopaedic sources and consistent across them.
**No fare, frequency, duration, pickup point, terminal rule or meeting
instruction is published anywhere in this cluster**, because the only sources
that could have supported those were the four blocked ones.

That is a smaller cluster than the architecture document's candidate list
anticipated. It is the correct one given the evidence available.

---

## 1. Venice Marco Polo — VCE

Source: <https://en.wikipedia.org/wiki/Venice_Marco_Polo_Airport> (operator
site blocked, see §0)

| # | Claim | Used on | Status |
|---|---|---|---|
| V1 | Official name Venice Marco Polo Airport; *Aeroporto di Venezia Marco Polo* | venice, vce | Verified |
| V2 | IATA **VCE**, ICAO **LIPZ** | vce | Verified |
| V3 | Operated by **SAVE S.p.A.** | vce | Verified |
| V4 | It stands at **Tessera, a frazione of the comune of Venice** — the airport is inside the municipality of Venice | venice, vce, route-vce-venice | Verified. Load-bearing: it is why VCE is genuinely Venice's airport and TSF is not |
| V5 | About **7.5 km north-east of the Venice city centre** | vce | Verified. Stated as "about"; it is a straight-line figure, not a road distance, and the pages say so |
| V6 | Land access: scheduled buses to Venezia Mestre and Piazzale Roma | vce, route-vce-venice | Verified as context. **Not a claim about this business's service** |
| V7 | Water access: Alilaguna shuttle boats to lagoon destinations, and water taxis | venice, vce, route-vce-venice | Verified as context. **Explicitly not included in any road transfer** |
| V8 | A rail link to Venezia Mestre is under construction | — | **Recorded, not used.** Under construction with no verified opening; a transfer page that implied a train existed would mislead its own reader |

**Sources disagree, so none is published:** every fare and duration for the
airport-to-Venice journey. Secondary guides gave the bus at about €10 and
about 24 minutes, Alilaguna at €15–18 and 60–90 minutes, and a water taxi at
€110–130 and 30–35 minutes. They do not agree with one another, none is the
operator's own figure, and all of them describe *public or third-party*
transport rather than this service.

---

## 2. Treviso — TSF

Source: <https://en.wikipedia.org/wiki/Treviso_Airport> (operator site blocked)

| # | Claim | Used on | Status |
|---|---|---|---|
| T1 | Official name Treviso Airport; *Aeroporto di Treviso A. Canova* | tsf, venice | Verified |
| T2 | IATA **TSF**, ICAO **LIPH** | tsf | Verified |
| T3 | Operated by **Aer Tre S.p.A.**, owned by the SAVE Group — the same group as VCE | tsf | Verified. Useful: two airports, one group, very different roles |
| T4 | It stands at **Treviso**, about **3 km west-south-west of the city** | tsf, route-tsf-venice | Verified |
| T5 | It is about **31 km from the city of Venice** | tsf, venice, route-tsf-venice | Verified. **The single most important fact on that page** |
| T6 | Used mainly by low-cost airlines; some airlines refer to it unofficially as "Venice-Treviso" | tsf, venice | Verified |
| T7 | "The primary airport serving Venice is Venice Marco Polo Airport" | tsf | Verified — quoted as the reference work's own framing, not as our opinion |

**Consistent with the existing homepage,** which already describes TSF as
"Inland near Treviso, often sold under Venice's name." No contradiction
introduced.

---

## 3. Verona Villafranca — VRN

Sources: <https://en.wikipedia.org/wiki/Verona_Villafranca_Airport>,
<https://www.trenitalia.com/en/connections/verona-airlink.html>

| # | Claim | Used on | Status |
|---|---|---|---|
| R1 | Official name Verona Villafranca Airport, also Valerio Catullo Airport | verona, vrn | Verified |
| R2 | IATA **VRN**, ICAO **LIPX** | vrn | Verified |
| R3 | It stands in the comune of **Villafranca di Verona**, about **10 km south-west of Verona** | verona, vrn, route-vrn-verona | Verified |
| R4 | An ATV Aerobus service connects the airport with **Verona Porta Nuova** station | vrn, verona, route-vrn-verona | Verified as context |
| R5 | In summer, ATV bus services run from the airport to comuni along **Lake Garda** | vrn, verona | Verified as context. Seasonal — the page says so and names no town as served by us |
| R6 | **Verona Airlink** is a combined train-and-bus service run with ATV under a single ticket, linking Verona Porta Nuova with the airport; the bus leg runs roughly every 20 minutes at peak and every 40 minutes off-peak, from Porta Nuova 05:15–22:50 and from the airport 05:35–23:10 | vrn, route-vrn-verona | **Verified from Trenitalia's own page** — the one operator source in this cluster that was reachable. Time-sensitive; dated in the visible copy |

**Deliberately not published:** the Airlink's €6 bus supplement. Fares change,
and this project's standing policy — set with Rome's ZTL and Milan's Area C
charge — is that a stale price is worse than no price. The structure and the
operating window are useful and are published; the amount is not.

**Consistent with the existing homepage,** which describes VRN as "South-west
of Verona, the usual road gateway to Lake Garda."

---

## 4. Venice's geography — the heart of this cluster

Sources: <https://en.wikipedia.org/wiki/Venezia_Santa_Lucia_railway_station>,
general geography consistent across all sources consulted.

| # | Claim | Used on | Status |
|---|---|---|---|
| G1 | **Road transport into Venice ends at Piazzale Roma.** The historic centre has no road access beyond it | venice, vce, venice-stations, all three routes | Verified and uncontested |
| G2 | Tronchetto is the other road terminus, adjacent to Piazzale Roma | venice | Verified |
| G3 | **Venezia Santa Lucia** is in Cannaregio, inside the historic centre, near the western end of the Grand Canal. It is reached from the rest of Venice on foot or by water | venice, venice-stations | Verified |
| G4 | **Venezia Mestre** is a mainline junction on the **mainland**, and is a different place from Santa Lucia | venice, venice-stations, vce | Verified |
| G5 | The two stations are linked by the **Ponte della Libertà**, the bridge carrying road and rail to the historic city | venice-stations | Verified |
| G6 | Within the historic centre, movement is on foot or by water — vaporetto or water taxi | venice, venice-stations, route-vce-venice | Verified |
| G7 | Until 1933 the historic city was reachable only by boat or rail | venice | Verified. Used once, as the explanation for why the geography is as it is |

**This is the cluster's central honesty test.** No page implies a road vehicle
can reach a historic-centre address, an island, or any point beyond Piazzale
Roma and Tronchetto. No page implies a boat, vaporetto, water taxi, porter or
onward water leg forms part of a road transfer.

---

## 5. Venice access fee — recorded, heavily qualified

Source: <https://cda.ve.it/en/faq> (the city's own portal), plus secondary
reporting.

| # | Claim | Used on | Status |
|---|---|---|---|
| A1 | Venice operates a *contributo di accesso* — an access fee for day visitors entering the historic centre on designated days | venice | **Verified that it exists; its current status is not settled** |
| A2 | The 2026 trial ran on designated days and **closed on 26 July 2026**; whether it repeats has not been decided in the sources checked | venice | Reported as paused. Dated on the page |
| A3 | Guests staying in accommodation in the Municipality of Venice are not required to pay it, but must demonstrate the exemption | venice | From the city's own FAQ |

**Sources disagree and no amount is published.** One guide gives €5 rising to
€10 within four days; another says three days. Several third-party guides
still describe the 2026 scheme as live although the official portal indicates
it is not currently being charged.

**Treatment on the page:** one short, dated paragraph saying the fee exists,
that it is not a transfer matter, that its status changes, and linking to the
city's portal. **No amount, no date list, no exemption list is presented as
settled.**

---

## 6. Venice cruise terminals — DEFERRED, with reasons

The architecture document marks cruise-terminal pages conditional on
verifying "current terminal operations, exact endpoint, access rules and
provider capability". **None of the four could be verified.**

| Finding | Source quality |
|---|---|
| Ships above roughly 25,000 GT or 180 m are barred from the San Marco basin and the Giudecca Canal under rules dating from 2021 | Consistent across secondary sources |
| Most large ships now berth at **Marghera**, on the mainland | Consistent, but sources disagree on whether a completed terminal building exists there or berths remain provisional |
| **Stazione Marittima** still functions as a check-in hall for some ships berthed elsewhere, with a shuttle | Reported; not confirmed by the terminal operator |
| An environmental opinion on new Marghera berths was issued in late September 2026 | Reported — indicates the situation is actively changing |
| Riva dei Sette Martiri, Fusina and Chioggia are variously named | Inconsistent; Chioggia unconfirmed |

**The operator's own site (vtp.it) failed TLS verification**, so the one
source that could have settled this was unavailable.

**Decision: defer.** A cruise page here would have to tell a passenger where
to be met, and that is exactly the fact nobody could establish. Treating
Venice's port locations as interchangeable — which several secondary guides
effectively do — is specifically forbidden by the architecture document.

---

## 7. Provider capability — unverified, as in both earlier clusters

No first-party record establishes which Veneto routes, vehicles or meeting
arrangements this business can provide. The architecture document is explicit
that a public airport's taxi or NCC listing is **not** proof of coverage, and
nothing in this log is treated as such.

Consequently every page in the cluster is written as an **enquiry subject to
confirmation**, exactly as Rome and Milan are. No page claims availability, a
price, a journey time, a vehicle class, a waiting policy, flight monitoring,
child seats, accessible vehicles or 24/7 operation.

---

## 8. What no source could establish

- Whether this business can serve any Veneto route at all.
- Any fare, duration or road distance for any journey in this cluster.
- Any pickup point, meeting instruction, terminal rule or parking arrangement
  at VCE, TSF or VRN.
- Which Venice cruise terminal is in use for a given sailing, or how a
  passenger reaches it.
- Whether any water leg — vaporetto, Alilaguna, water taxi — could be
  arranged as part of a transfer. **Nothing anywhere implies it can.**
- Whether any relationship exists between this business and any airport,
  railway, water-transport or cruise operator. None is implied.
