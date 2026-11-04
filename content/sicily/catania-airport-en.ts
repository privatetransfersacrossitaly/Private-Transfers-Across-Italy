import type { SicilyAirportPage } from "./types";

/**
 * Catania Airport (CTA) — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * "Catania Airport transfers (CTA)". The city belongs to the Catania town
 * page and the port to the port page; both are linked and neither query
 * appears in this title, H1 or description.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 51 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Catania–Fontanarossa, also known as Vincenzo Bellini Airport; IATA CTA,
 * ICAO LICC; "2.3 NM (4.3 km; 2.6 mi) southwest of Catania"; operator SAC;
 * 12,346,530 passengers in 2024, up 15.0% on 2023, across 82,530 movements;
 * focus city for Ryanair and Wizz Air; Terminal A plus Terminals B and C
 * opened in 2018, with C used exclusively by easyJet — all from the
 * airport's own entry. The station, Catania Aeroporto-Fontanarossa, was
 * inaugurated by RFI on 13 March 2021 per RFI's own announcement; a Wikidata
 * entry gives 13 December 2020, which conflicts, so only the RFI date and
 * the fact of the station are used.
 *
 * Deliberately absent: the current state of the Messina–Syracuse line (one
 * source reports traffic suspended in January 2026 after a storm and partly
 * restored, which would be wrong either way within a month), the name of any
 * airport bus operator (the "Alibus" assumption is unsupported by anything
 * read), and all journey times. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const cataniaAirportEn: SicilyAirportPage = {
  meta: {
    // 51 characters.
    title: "Catania Airport Transfers (CTA) – Reserve Your Ride",
    description:
      "Private transfers from Catania Fontanarossa, 4.3 km from the city: the three terminals, being met, and the runs to Taormina, Syracuse and Etna.",
  },

  hero: {
    eyebrow: "Sicily · Catania Airport",
    h1: "Private transfers from Catania Airport",
    lead: "Fontanarossa is Sicily's busiest airport and sits about 4.3 km from the city it serves, which is remarkably close for somewhere handling over twelve million passengers a year. The short run into Catania is the easy part. What the airport is really for is everything beyond it — Taormina up the coast, Syracuse down it, and Etna behind.",
    primaryCta: "Request a transfer from Catania Airport",
    secondaryCta: "Where people go",
    facts: [
      { label: "Codes", value: "CTA · LICC" },
      { label: "Also known as", value: "Vincenzo Bellini" },
      { label: "From Catania", value: "About 4.3 km, south-west" },
      { label: "Passengers", value: "12,346,530 in 2024" },
    ],
  },

  identity: {
    heading: "The airport itself",
    paragraphs: [
      "Catania–Fontanarossa, also known as Vincenzo Bellini Airport, is an international airport 2.3 NM — about 4.3 km — south-west of Catania. It is operated by SAC and handled 12,346,530 passengers in 2024, a rise of 15.0% on the year before, across 82,530 aircraft movements. That makes it the busiest airport on the island by a wide margin.",
      "It has more than one terminal, and that is the detail most worth knowing before you fly: Terminals B and C opened in 2018 alongside the original Terminal A, and Terminal C is used exclusively by easyJet. Which one you land at changes where someone should be waiting for you. It is a focus city for Ryanair and Wizz Air.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You give us the flight and the destination, we arrange it with an operator covering that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at CTA",
    lead: "A big airport with more than one terminal, so the meeting point is a real question here rather than a formality.",
    steps: [
      {
        title: "Say which terminal",
        body: "Or give us the flight number and we will work it out. With three terminals and one of them given over to a single airline, assuming is how people end up waiting in different buildings.",
      },
      {
        title: "Give the flight number anyway",
        body: "Not the arrival time. It is what lets a driver see a delay or a diversion happen rather than wait through it, and at an airport this busy the difference shows.",
      },
      {
        title: "Agree what the board says",
        body: "Drivers wait in arrivals with a name board. A surname spelled differently from the one you expected is the commonest reason two people fail to find each other in a crowded hall.",
      },
      {
        title: "Say where you are going, precisely",
        body: "Catania, up the coast or down it are three different journeys out of the same airport. For Taormina in particular the address matters twice over, because properties sold as Taormina are often at sea level below the town.",
      },
    ],
    note: "Terminal and flight number together remove almost every way an arrival here can go wrong.",
  },

  routes: {
    heading: "Where people go from Catania Airport",
    lead: "One airport, three directions: the city beside it, the coast north, and the south-east. Most arrivals are not staying in Catania.",
    city: {
      id: "catania",
      note: "The city, about 4.3 km north-east. The shortest run on this page and one of the few Sicilian transfers where a taxi from the rank is a reasonable alternative — the city page says so plainly.",
    },
    items: [
      {
        id: "taormina",
        note: "North up the coast, the single most requested journey from this airport. The town sits about 250 m above the sea with a restricted centre, so the arrival is more involved than the drive.",
      },
      {
        id: "syracuse",
        note: "South towards Ortygia, the island that is Syracuse's historic centre. A longer run, and one where whether your address is on the island decides the ending.",
      },
      {
        id: "agrigento",
        note: "West across the island for the Valley of the Temples. Long from here — the Agrigento page sets out when it is worth flying into Palermo instead.",
      },
      {
        id: "sicily",
        note: "The regional page, for how the island fits together and which airport suits which corner.",
      },
    ],
    footnote: "We publish no journey times and no road distances for any of these beyond the airport's own 4.3 km to Catania. The figures in circulation come from route planners that disagree with one another, and the coast road in August is not the coast road in March. The operator confirms the routing when we quote.",
  },

  ports: {
    heading: "To and from the cruise ports",
    lead: "Two of Sicily's three cruise calls are reachable from this airport, and both are regular requests in each direction.",
    items: [
      {
        id: "catania-cruise-port",
        note: "A city port, a short walk from the historic centre, so the airport-to-quayside run is short. Mostly people joining or leaving a ship with a flight at the other end.",
      },
      {
        id: "messina-cruise-port",
        note: "North along the coast, past Taormina. Longer, and usually for people joining a ship rather than visiting — Messina is overwhelmingly a day call.",
      },
    ],
  },

  alternatives: {
    heading: "When not to book a transfer",
    lead: "For one of these journeys the honest answer is that you may not need us, and the page is more useful if it says which.",
    modes: [
      {
        mode: "Taxi into Catania",
        suits: "The city itself. At about 4.3 km there is a rank outside arrivals and the journey is short enough that nothing much can go wrong.",
        against: "No name board, nobody watching your flight, and no agreed price for anything longer. Fine into town; not the answer for the coast.",
      },
      {
        mode: "Train",
        suits: "Onward rail travel. There is a station at the airport — Catania Aeroporto-Fontanarossa, inaugurated by RFI in March 2021.",
        against: "We will not tell you the line is running. Services on this coast have been disrupted in recent years, and anything we printed about the current state would likely be wrong by next month. Check with the operator.",
      },
      {
        mode: "Hire car",
        suits: "Touring the east and the south-east over several days, particularly if you intend to move base more than once.",
        against: "Taormina is a town a car largely cannot be driven into, Ortygia is restricted, and parking in central Catania is difficult. The car is useful between places rather than at them.",
      },
      {
        mode: "Private transfer",
        suits: "Taormina, Syracuse, anywhere up or down the coast, a late arrival, a group, children, or a ship to catch.",
        against: "It has to be arranged in advance, and for the short hop into Catania in daylight it is more than the journey needs.",
      },
    ],
    verdict: "Rule of thumb: into Catania, take the taxi and think no more about it. Out of Catania — north, south or up the mountain — arrange it, because the distances are real and the arrivals are not simple.",
  },

  practical: {
    heading: "Practical detail",
    lead: "What decides whether an arrival here is uneventful.",
    items: [
      {
        term: "Which terminal",
        detail: "Three of them, one reserved for a single airline. Say which, or send the flight number and we will establish it.",
      },
      {
        term: "The flight number",
        detail: "Not the arrival time. It is the one thing that lets a driver react to a delay rather than sit through it.",
      },
      {
        term: "Town or shore, for Taormina",
        detail: "A great many properties sold as Taormina are at sea level below the town. Send the full address so the driver goes to the right altitude.",
      },
      {
        term: "Island or mainland, for Syracuse",
        detail: "Ortygia is an island with restricted access. Which side of the water you are on changes the stopping point and whether there is a walk.",
      },
      {
        term: "Etna conditions",
        detail: "If the plan involves the mountain, what is possible on the day is decided by conditions rather than by the booking. We say what an operator can do rather than promise a view.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Catania Airport transfers",
    items: [
      {
        question: "How far is Catania Airport from the city?",
        answer: "About 4.3 km south-west, by the airport's own published figure — 2.3 nautical miles. That is unusually close for an airport handling more than twelve million passengers a year, and it is why we will tell you a taxi from the rank is a perfectly reasonable way into town.",
      },
      {
        question: "Which terminal will we land at?",
        answer: "There is more than one. Terminals B and C opened in 2018 alongside the original Terminal A, and Terminal C is used exclusively by easyJet. Send the flight number and we will establish which applies, because with three terminals the meeting point is a real question.",
      },
      {
        question: "Can you take us straight to Taormina?",
        answer: "Yes — it is the most requested journey from this airport. Worth knowing in advance: Taormina sits about 250 m above the sea with a restricted centre, so whether a vehicle reaches your door depends on the hotel rather than the driver. The Taormina page explains what to ask them.",
      },
      {
        question: "Can you take us to Syracuse?",
        answer: "Yes, and it is the other main direction out of here. The thing that decides the arrival is whether your address is on Ortygia, the island historic centre, or on the mainland — they are two quite different endings to the same journey. Say which when you enquire.",
      },
      {
        question: "Is there a train from the airport?",
        answer: "There is a station: Catania Aeroporto-Fontanarossa, inaugurated by RFI in March 2021. We will not tell you what is running on it. Services along this coast have been disrupted in recent years and anything we published about the current state would be out of date quickly — check with the operator.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "The driver sees it, provided we have the flight number. Delays are ordinary and planned for. What causes problems is a transfer arranged against a clock time with no flight attached, because then nobody knows whether to wait.",
      },
      {
        question: "How much does a transfer from Catania Airport cost?",
        answer: "There is no price list. A four-kilometre run into the city and a journey to Syracuse are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the flight number and the terminal",
    body: "At an airport with three of them, those two settle most of it. Add the address you are heading for and how many of you there are, and the arrangement and the price come back in writing — before anything is confirmed and before anything is charged.",
    cta: "Request a transfer quote",
  },
};
