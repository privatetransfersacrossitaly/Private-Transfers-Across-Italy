import type { SicilyAirportPage } from "./types";

/**
 * Trapani Airport (TPS) — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * "Trapani Airport transfers (TPS)". The town belongs to the Trapani
 * destination page, which also carries the Egadi ferry material.
 *
 * ── No `ports` block ──────────────────────────────────────────────────────
 * The optional ports section is absent here, and that is the point of its
 * being optional: Trapani's quayside is a ferry terminal, not a cruise
 * port, and this cluster files no cruise page for it. The ferry connection
 * is covered on the town page and linked from the routes below.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 52 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Officially Vincenzo Florio Airport, with the military side named Livio
 * Bassi; IATA TPS, ICAO LICT; "situated between the cities of Trapani and
 * Marsala"; civil operations managed by Airgest; a dual-use civil and
 * military airport hosting the Italian Air Force's 37° Stormo; 1,007,409
 * passengers in 2025, a decrease of 6.29%, against 1,074,939 in 2024 and
 * 1,332,368 in 2023; Ryanair began operating here in 2006 and opened a base
 * in 2009; buses by Autoservizi Salemi (Trapani, Marsala, Palermo),
 * Autolinee Lumia (Agrigento) and Azienda Siciliana Trasporti (Trapani);
 * "equidistant from both Trapani and Marsala railway stations" — all from
 * the airport's own entry.
 *
 * Deliberately absent: any distance from the airport to Trapani (no source
 * states one), and the completion date of the planned airport railway
 * station, which the source gives as July 2026 in its body and 2028 in a
 * cited headline. The station being under construction is stated; the date
 * is not. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const trapaniAirportEn: SicilyAirportPage = {
  meta: {
    // 52 characters.
    title: "Trapani Airport Transfers (TPS) – Book a Private Car",
    description:
      "Private transfers from Trapani Birgi Airport, between Trapani and Marsala: the routes west, the ferry quayside, and the buses named honestly.",
  },

  hero: {
    eyebrow: "Sicily · Trapani Airport",
    h1: "Private transfers from Trapani Airport",
    lead: "Birgi is the smallest of Sicily's three main airports and the only one shared with the Air Force. It sits between Trapani and Marsala rather than at either, which is the detail that catches people out: there is no city immediately outside the doors, and what you do next depends entirely on which direction you are heading.",
    primaryCta: "Request a transfer from Trapani Airport",
    secondaryCta: "Where people go",
    facts: [
      { label: "Codes", value: "TPS · LICT" },
      { label: "Officially", value: "Vincenzo Florio Airport" },
      { label: "Sits between", value: "Trapani and Marsala" },
      { label: "Passengers", value: "1,007,409 in 2025" },
    ],
  },

  identity: {
    heading: "The airport itself",
    paragraphs: [
      "Officially Vincenzo Florio Airport, Trapani–Birgi is a dual-use civil and military airport in western Sicily, situated between the cities of Trapani and Marsala. Civilian operations are managed by Airgest; the military side, named after Livio Bassi, is home to the Italian Air Force's 37° Stormo.",
      "It is small and it is getting smaller: 1,007,409 passengers in 2025, down 6.29% on the 1,074,939 of 2024, which in turn was below the 1,332,368 of 2023. Ryanair began operating routes here in 2006 and opened a base in 2009. The practical consequence is that this is an airport you use when it has your flight, rather than one you plan a holiday around.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You give us the flight and the destination, we arrange it with an operator covering that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at TPS",
    lead: "A small airport empties quickly, which is pleasant and leaves very little slack for a vague arrangement.",
    steps: [
      {
        title: "One hall, one way out",
        body: "There is no wrong exit to take here and no long internal transit to allow for. That removes the commonest cause of missed meetings at larger airports and leaves the two below.",
      },
      {
        title: "Give the flight number",
        body: "Not the arrival time. With it a driver watches a delay happen; without it, a delayed flight becomes a phone call from a landed aircraft. At an airport with few flights and little standing traffic, that call is harder to resolve than at a busy one.",
      },
      {
        title: "Say which direction",
        body: "Trapani, Marsala, Palermo and Agrigento are four quite different journeys from the same door. The airport sits between the first two, so even 'into town' needs saying which town.",
      },
      {
        title: "Country addresses need their directions",
        body: "A good share of what we are asked for here ends at a property among the salt pans or out towards Marsala. Send the arrival directions the property wrote, if it gave you any — out here they are worth more than a map pin.",
      },
    ],
    note: "Flight number and destination together are enough. Everything else about an arrival at Birgi is straightforward.",
  },

  routes: {
    heading: "Where people go from Trapani Airport",
    lead: "West and south, mostly. The airport is a gateway to the western corner rather than to the island as a whole.",
    city: {
      id: "trapani",
      note: "The town, the salt coast and the quayside for the Egadi Islands. The destination page covers the ferry connection, including what a transfer can and cannot do when a boat is involved.",
    },
    items: [
      {
        id: null,
        name: "Marsala",
        note: "The other town the airport sits between. We name it because the airport's position makes it an obvious destination, though it has no page of its own in this cluster.",
      },
      {
        id: "agrigento",
        note: "South-east along the coast for the Valley of the Temples. Autolinee Lumia also runs a scheduled bus on this route, which is worth knowing before you book anything.",
      },
      {
        id: "palermo",
        note: "East along the northern coast to the capital, and on to its airport if a connection needs making.",
      },
      {
        id: "sicily",
        note: "The regional page, for how the island fits together and which airport suits which corner.",
      },
    ],
    footnote: "We publish no distance from this airport to anywhere, including Trapani itself. The airport's own entry says only that it sits between Trapani and Marsala, and we could find no figure worth standing behind. The operator confirms the routing when we quote.",
  },

  alternatives: {
    heading: "When not to book a transfer",
    lead: "This is the Sicilian airport where a bus is most often the right answer, and it would be dishonest to bury that.",
    modes: [
      {
        mode: "Scheduled bus",
        suits: "Daylight travel with light luggage. Autoservizi Salemi serves Trapani, Marsala and Palermo; Autolinee Lumia serves Agrigento; Azienda Siciliana Trasporti serves Trapani. Those cover most of where people actually go from here.",
        against: "Timetables are built around flights that are themselves thin, and a missed connection in a small place is a long wait. Check current times with the operators rather than with us — we have not verified them.",
      },
      {
        mode: "Train",
        suits: "Onward rail travel once you have reached a station. The airport's entry describes it as equidistant from both Trapani and Marsala railway stations.",
        against: "Equidistant from two stations means at neither, so there is a leg to get to one first. A station serving the airport is under construction; the source gives conflicting completion dates, so we will not print one.",
      },
      {
        mode: "Hire car",
        suits: "Touring the western corner, which is spread out and where much of the accommodation is rural.",
        against: "Trapani's old centre narrows and restricts, like every Italian town of its age, and a rural gate at night is harder to find for the first time than it looks on a map.",
      },
      {
        mode: "Private transfer",
        suits: "A rural property, a late arrival, a group, children, a ferry to catch, or a first visit where nobody has driven these lanes before.",
        against: "It has to be arranged in advance, and for a daylight run into Trapani with one bag the bus will do.",
      },
    ],
    verdict: "Honest rule for Birgi: in daylight, travelling light, to a town the bus serves, take the bus. For a rural address, a late landing, a ferry deadline or a group with luggage, arrange it.",
  },

  practical: {
    heading: "Practical detail",
    lead: "Short list, because this is a simple airport.",
    items: [
      {
        term: "The flight number",
        detail: "Not the arrival time. At a quiet airport a vague arrangement has less slack to absorb it, not more.",
      },
      {
        term: "Which town",
        detail: "The airport sits between Trapani and Marsala, so 'into town' is ambiguous here in a way it is not at other airports. Say which.",
      },
      {
        term: "Ferry deadlines",
        detail: "If the journey ends at the Trapani quayside for an Egadi sailing, the sailing governs the day rather than a pickup time. Send the crossing you intend to take.",
      },
      {
        term: "Rural addresses",
        detail: "Among the salt pans and towards Marsala, forward the property's own arrival directions. It is the most useful thing you can send.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and it matters doubly if a ferry is involved.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Trapani Airport transfers",
    items: [
      {
        question: "How far is the airport from Trapani?",
        answer: "We do not publish a figure, because no source we would rely on states one — the airport's own entry says only that it sits between Trapani and Marsala. That is an honest gap rather than an evasion, and the operator confirms the routing when we quote.",
      },
      {
        question: "Is there a bus from the airport?",
        answer: "Yes, and for several journeys it may be the better answer. Autoservizi Salemi serves Trapani, Marsala and Palermo; Autolinee Lumia serves Agrigento; Azienda Siciliana Trasporti serves Trapani. We name them rather than pretend a transfer is the only way out of a small airport. Check current timetables with the operators.",
      },
      {
        question: "Is there a train station at the airport?",
        answer: "Not yet. The airport is described as equidistant from the Trapani and Marsala railway stations, meaning it is at neither. A station to serve the airport is under construction. The source we read gives two different completion dates in the same article, so we will not print one.",
      },
      {
        question: "Why is this airport smaller than it used to be?",
        answer: "Its published traffic has fallen for two consecutive years: 1,332,368 passengers in 2023, 1,074,939 in 2024 and 1,007,409 in 2025. We mention it because it affects you practically — the schedule is thin, so Birgi is an airport you use when it has your flight rather than one to plan a trip around.",
      },
      {
        question: "Can you take us to the quayside for the Egadi ferry?",
        answer: "Yes. The transfer reaches the quayside and can meet you off the return sailing; the crossing itself is a ferry journey and the vehicle does not come with you unless that has been arranged specifically. Send the sailing you intend to take and the day is built around it. The Trapani page covers this properly.",
      },
      {
        question: "Can you take us to Palermo or its airport?",
        answer: "Yes, both are regular requests — sometimes because a connecting flight only exists from Palermo. Tell us the timings at both ends and we will say honestly whether the connection is comfortable rather than quote something tight and hope.",
      },
      {
        question: "How much does a transfer from Trapani Airport cost?",
        answer: "There is no price list. A short run into Trapani and a journey to Agrigento are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the flight and which way you are going",
    body: "At an airport between two towns, the direction matters as much as the address. Send both, plus how many of you there are and any ferry you need to catch. The arrangement and the price come back in writing — and if the bus would serve you better, we will say so.",
    cta: "Request a transfer quote",
  },
};
