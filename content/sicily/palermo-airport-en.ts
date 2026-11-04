import type { SicilyAirportPage } from "./types";

/**
 * Palermo Airport (PMO) — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * "Palermo Airport transfers (PMO)" and everything about arriving at and
 * leaving this airport. The city of Palermo belongs to the town page, and
 * the cruise port to the port page; both are introduced and linked here and
 * neither query appears in this page's title, H1 or description. The QA
 * asserts the separation in both directions.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 50 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Falcone Borsellino, formerly Punta Raisi; IATA PMO, ICAO LICJ; located at
 * Cinisi, "19 NM (35 km; 22 mi) west-northwest of Palermo"; managed by
 * GESAP; 9,220,905 passengers in 2025, a 3.4% change on 2024; 64,841
 * movements; focus city for Aeroitalia, Ryanair, Volotea and Wizz Air — all
 * from the airport's own encyclopedic entry. The railway station exists and
 * has an article of its own, Palermo Aeroporto railway station.
 *
 * Deliberately absent, and this matters: the train's frequency, journey time
 * and fare. The sources give every 30 minutes, two an hour and every 30-60
 * minutes; 45 minutes and 50-70 minutes; €5.80 and €6.80. None is the
 * operator. The page states that the station exists and sends people to
 * Trenitalia. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const palermoAirportEn: SicilyAirportPage = {
  meta: {
    // 50 characters.
    title: "Palermo Airport Transfers (PMO) – Book Your Driver",
    description:
      "Private transfers from Palermo Falcone Borsellino Airport, about 35 km from the city: being met, the routes west and east, and the train compared.",
  },

  hero: {
    eyebrow: "Sicily · Palermo Airport",
    h1: "Private transfers from Palermo Airport",
    lead: "Falcone Borsellino is further from the city it serves than most capital-city airports — about 35 km, out along the coast at Cinisi. That is the first thing worth knowing about it, and the second is that for a good many arrivals the distance works in your favour, because the airport already sits on the right side of Palermo for the west and the north coast.",
    primaryCta: "Request a transfer from Palermo Airport",
    secondaryCta: "Where people go",
    facts: [
      { label: "Codes", value: "PMO · LICJ" },
      { label: "Also known as", value: "Punta Raisi" },
      { label: "From Palermo", value: "About 35 km, west-north-west" },
      { label: "Passengers", value: "9,220,905 in 2025" },
    ],
  },

  identity: {
    heading: "The airport itself",
    paragraphs: [
      "Falcone Borsellino Airport, named after the two anti-mafia judges and still widely called Punta Raisi, is located at Cinisi, 19 NM — about 35 km — west-north-west of Palermo. It is managed by GESAP and handled 9,220,905 passengers in 2025, a rise of 3.4% on the year before, across 64,841 aircraft movements.",
      "It is a focus city for Aeroitalia, Ryanair, Volotea and Wizz Air, which shapes the day here: a large share of arrivals are early morning or late evening, because that is when low-cost schedules place them. An arrival at eleven at night into an airport 35 km from town is perfectly manageable — but only if the person meeting you already knows the flight.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You give us the flight and the destination, we arrange it with an operator covering that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at PMO",
    lead: "The mechanics are the same as anywhere; what differs here is the consequence of getting them wrong, because the airport is a long way from town and the late schedule is busy.",
    steps: [
      {
        title: "Give the flight number",
        body: "Not the arrival time. With it, a driver watches a delay or a diversion happen; without it, a delayed flight becomes a phone call made from a landed aircraft — which, at 35 km from the city at midnight, is the worst moment to start arranging anything.",
      },
      {
        title: "Agree what the board says",
        body: "Drivers wait in arrivals with a name board. A surname spelled differently from the one you expected is the commonest reason two people stand ten metres apart without finding each other.",
      },
      {
        title: "Say where you are actually going",
        body: "Not the town — the address. For a Palermo hotel it decides whether the drop-off is at the door or at the edge of a restricted quarter. For somewhere on the coast it decides the route out of the airport entirely.",
      },
      {
        title: "Late arrivals need earlier notice",
        body: "The schedule here puts a lot of traffic into the late evening, and availability in the small hours is tighter than in the middle of the day. Arranging early is worth more for a 23:40 landing than for a midday one.",
      },
    ],
    note: "The single most useful thing in an airport transfer enquiry is the flight number, and it is the one most often left out.",
  },

  routes: {
    heading: "Where people go from Palermo Airport",
    lead: "The airport sits west of the city, which means some journeys never pass through Palermo at all. These are the ones we are asked for most.",
    city: {
      id: "palermo",
      note: "The city itself, about 35 km east. The shortest run on this page and the only one where the train is a genuine alternative — the city page covers the quarters, the restricted streets and where a car can stop.",
    },
    items: [
      {
        id: "cefalu",
        note: "East along the Tyrrhenian coast, about 70 km beyond the capital by the published figure. The usual day out and a common second base.",
      },
      {
        id: "trapani",
        note: "West along the coast, for the salt pans and the Egadi ferries. The airport is already on this side of the city, so the run does not cross Palermo.",
      },
      {
        id: "agrigento",
        note: "South across the island for the Valley of the Temples. A long journey, and one of the main reasons people land here rather than at Catania.",
      },
      {
        id: "sicily",
        note: "The regional page, for how the island fits together and which airport suits which corner of it.",
      },
    ],
    footnote: "We publish no journey times for any of these, and only one distance — Cefalù's, which its own entry states. Sicilian road distances differ between route planners depending on the route taken and the season driven, and a wrong figure on a long journey costs people their plans. The operator confirms the routing when we quote.",
  },

  ports: {
    heading: "To and from the cruise port",
    lead: "Palermo's port is a working passenger port inside the city, and airport-to-quayside is a regular request in both directions.",
    items: [
      {
        id: "palermo-cruise-port",
        note: "Mostly people joining or leaving a ship with a flight at the other end. The quay a ship is given matters here — the port is large and has a shipyard inside it — so send the vessel's name and the date along with the flight.",
      },
    ],
  },

  alternatives: {
    heading: "When not to book a transfer",
    lead: "This airport has a genuine alternative, which not all of them do, and the page is more useful if it says so.",
    modes: [
      {
        mode: "Train",
        suits: "Central Palermo with light luggage. The airport has its own railway station, which is more than most Italian airports can say.",
        against: "It serves central Palermo and nowhere else you are likely to be going. We publish no frequency, journey time or fare, because the sources we found disagree with each other and none of them is the operator — check Trenitalia rather than us.",
      },
      {
        mode: "Bus",
        suits: "Budget travel into the city when you are travelling light and arriving in daylight.",
        against: "We will not name operators or times we have not verified. For anything beyond central Palermo it is not the comparison that matters anyway.",
      },
      {
        mode: "Taxi from the rank",
        suits: "A run into Palermo when nothing was arranged in advance.",
        against: "No name board, no agreed route, and nobody watching your flight. Over 35 km with luggage and a late landing, the least predictable of the options here.",
      },
      {
        mode: "Private transfer",
        suits: "Anywhere that is not central Palermo: the coast, Cefalù, the west, Agrigento, a late arrival, a group, or a first visit where nobody has driven here before.",
        against: "It has to be arranged in advance, and for a daytime run to a hotel by the station it is more than the journey needs.",
      },
    ],
    verdict: "Rule of thumb: central Palermo in daylight with a cabin bag, take the train. Anywhere else on this side of the island — and anything after dark — the arithmetic turns the other way quickly.",
  },

  practical: {
    heading: "Practical detail",
    lead: "What decides whether an arrival here is uneventful.",
    items: [
      {
        term: "The flight number",
        detail: "Not the arrival time. It is the one piece of information that lets a driver react to a delay rather than wait through it.",
      },
      {
        term: "The full address",
        detail: "Hotel names repeat in Palermo and several share a name with a street or a square. The address decides the stopping point, particularly in the old quarters.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Arranged with the operator in advance; a driver cannot produce one at the kerb and in summer they are genuinely in demand.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and over this distance there is no second trip.",
      },
      {
        term: "Rural and coastal addresses",
        detail: "Send the property's own arrival directions if it has given you any. West of the airport and along the coast they are worth more than a map pin.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Palermo Airport transfers",
    items: [
      {
        question: "How far is Palermo Airport from the city?",
        answer: "About 35 km west-north-west, by the airport's own published figure — 19 nautical miles. It is at Cinisi, out along the coast, which makes it a longer run into town than most capital-city airports. If you are heading west or along the north coast instead, that same position works in your favour.",
      },
      {
        question: "Is there a train from the airport?",
        answer: "Yes. The airport has its own railway station, which is unusual in Italy. We do not publish its frequency, journey time or fare: the sources we found give three different frequencies, two different journey times and two different fares, and none of them is the operator. Check Trenitalia for current times, and treat the train as an option for central Palermo only.",
      },
      {
        question: "Can you take us straight to Cefalù or Trapani without going into Palermo?",
        answer: "Yes, and for Trapani that is the natural routing — the airport already sits west of the city. Cefalù is east, beyond the capital, about 70 km from Palermo by the published figure. Either works as a direct transfer from arrivals; tell us the address and the flight.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "The driver sees it, provided we have the flight number. Delays are ordinary and they are planned for. What causes problems is a transfer arranged against a clock time with no flight attached to it, because then nobody knows whether to wait.",
      },
      {
        question: "Can you meet us for a late-night arrival?",
        answer: "Yes, and this airport takes a lot of late traffic because of its low-cost schedules. Availability in the small hours is tighter than in the middle of the day, so earlier notice genuinely helps — more so here than at an airport five minutes from town.",
      },
      {
        question: "Do you also do airport-to-cruise-port transfers?",
        answer: "Yes, in both directions, and it is a regular request. Send the ship's name and the date as well as the flight: Palermo is a working port with a shipyard inside it, so which quay a vessel is given is not a detail a driver can guess.",
      },
      {
        question: "How much does a transfer from Palermo Airport cost?",
        answer: "There is no price list. A run into the city and a run to Agrigento are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the flight number and the address",
    body: "Those two settle almost everything about an arrival here. Add how many of you there are and whether anyone needs a child seat, and the arrangement and the price come back in writing — before anything is confirmed, and before anything is charged.",
    cta: "Request a transfer quote",
  },
};
