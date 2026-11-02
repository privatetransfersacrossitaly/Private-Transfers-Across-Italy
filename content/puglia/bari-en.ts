import type { BariPage } from "./types";

/**
 * Bari — English.
 *
 * ── What this page owns, and what it does not ─────────────────────────────
 * Per the approved keyword map as amended when the dedicated BRI page
 * shipped: this page owns Bari the city and the Port of Bari. The airport
 * belongs to /airports/bari-karol-wojtyla, which carries the arrival
 * sequence, the onward routes and the public-transport comparison in full;
 * what survives here is a short orientation and a hand-off to it. Journeys
 * *from* Bari to Alberobello, Polignano and the rest are introduced here
 * and detailed on their own pages. The "Bari or Brindisi?" comparison is
 * deliberately absent — that belongs to the Brindisi page and the pillar,
 * and repeating it here would put two pages in competition for one query.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Airport codes, the operator and the approximate distance from the centre
 * are from the airport's Wikipedia entry; the official Aeroporti di Puglia
 * site refuses automated requests, so nothing here is attributed to it.
 * Port terminal names, the port authority and the AMTAB bus routes are from
 * the Italian Wikipedia entry on the Porto di Bari. Road distances are from
 * route planners and transfer operators, which disagree by a few kilometres
 * and have a commercial interest in the figures — so every one of them is
 * written as an approximation and the page says plainly that it is.
 *
 * Passenger totals are deliberately omitted. The sources give 2023 and 2025
 * figures that cannot both be current, and the number tells a transfer
 * customer nothing anyway.
 *
 * No prices, no fleet claims, no testimonials, no guarantees.
 */

export const bariEn: BariPage = {
  meta: {
    // Bare title: the root layout appends " | Private Transfer Across
    // Italy". Renders at 58 characters.
    // Re-pointed when the dedicated BRI page shipped. This page previously
    // carried the title "Bari airport transfers", which is the query that
    // page now owns; two of our own pages competing for it helped neither.
    // The body below is unchanged — only the targeting moved.
    title: "Bari city and cruise port transfers",
    // Trimmed from 159 to 151 characters so a desktop result shows the whole
    // sentence. Every element of the intent is intact: the city, the cruise
    // terminal by its real name, the coast, the two days out, and the fact
    // that the quotation is written. Only "the journey" became "it".
    description:
      "Private transfers in Bari: the old town, the Terminal Crociere and the coast, plus days out to Alberobello and Matera. Describe it for a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Bari",
    h1: "Bari city and cruise port transfers",
    lead: "Bari is where most people arrive in Puglia, by air or by sea. The airport sits a short way out of the city; the cruise terminal sits inside the port, a working one. Both are easy to leave — the question is usually what happens after that, because most of the places people are heading for are an hour inland or down the coast.",
    primaryCta: "Request a Bari transfer quote",
    secondaryCta: "Arriving by ship",
    facts: [
      { label: "Airport", value: "Bari Karol Wojtyła · BRI / LIBD" },
      { label: "From the centre", value: "About 8 km, north-west" },
      { label: "Operator", value: "Aeroporti di Puglia" },
      { label: "Port", value: "Terminal Crociere, Porto di Bari" },
    ],
  },

  intro: {
    heading: "Who arrives at Bari",
    paragraphs: [
      "Bari is the regional capital and the busiest way into Puglia. Three quite different groups land here: holidaymakers heading for the Valle d'Itria and the trulli country around Alberobello; people staying on the Adriatic coast at Polignano a Mare or Monopoli; and cruise passengers with one day ashore and a ship that will not wait.",
      "A fourth group is easy to miss. Matera, the cave city, is not in Puglia at all — it is over the regional border in Basilicata — but Bari is its nearest practical airport, and a good share of the transfers we are asked for from Bari end up there.",
      "We arrange these journeys with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and you get the arrangement and the price in writing before anything is confirmed.",
    ],
  },

  airport: {
    heading: "If you are flying into Bari",
    lead: "BRI sits about 8 km north-west of the centre — officially Bari Karol Wojtyła, still Palese to plenty of people after the neighbourhood beside it. It is small and it empties quickly, so for a run into the city the arrival itself is rarely the difficult part.",
    summary: [
      "One terminal, one arrivals hall, no wrong exit to take. A driver meeting you waits in arrivals with a name board, and the two things worth settling before you fly are what that board will say and the flight number it is attached to.",
      "If you are heading somewhere that is not a Bari address — the trulli, the coast, Matera over the regional border — the routes, the published distances and the comparison with the train all belong on the airport's own page. This one stays with the city and the port.",
    ],
    handoff: {
      heading: "Transfers from Bari Airport, in full",
      body: "Being met at BRI, how a private transfer is arranged and paid for, every onward route with distances as published sources give them, and a straight comparison with the train and the city bus.",
      cta: "Bari Airport transfers (BRI)",
    },
  },

  // Reworded when the BRI page shipped. The facts are unchanged — they are
  // the same published timetables and route numbers — but the sentences no
  // longer run close to the airport page's own comparison, and the framing
  // is now "which way into the city suits you" rather than "how to leave
  // BRI", which is that page's question. Route 50 is included here because
  // the port is this page's subject.
  waysIn: {
    heading: "Ways into the city, honestly compared",
    lead: "A private transfer is not always the right answer. Bari is better served by public transport than most of Puglia, and which option suits you comes down to where in the city you are staying and how much you are carrying.",
    rows: [
      {
        mode: "Train",
        suits: "Reaching the centre from the airport with hand luggage. The Ferrotramviaria line has a station at the airport and its published timetables show roughly 15 to 20 minutes.",
        against: "The city end is the Ferrotramviaria station next door to Bari Centrale rather than a platform inside it, so continuing on Trenitalia means a change and a short walk. Nothing runs overnight.",
      },
      {
        mode: "City bus",
        suits: "Spending as little as possible. AMTAB route 16 covers the airport run; route 50 is the circular that links the port gate with Piazza Moro, beside Bari Centrale.",
        against: "Both are slower than the alternatives, and neither is designed around suitcases.",
      },
      {
        mode: "Taxi",
        suits: "There is a rank outside arrivals and at both port terminals, and that is the appeal: nothing has to be arranged beforehand.",
        against: "Equally, nothing has been arranged — no name board, no agreed route for a long run, nobody following a flight or a ship. Fine into the Murat quarter; much less predictable for an hour inland.",
      },
      {
        mode: "Private transfer",
        suits: "Addresses that public transport does not reach: a masseria behind an unmarked gate, a hill town with a restricted centre, Matera over the border, or a ship that sails in the early evening.",
        against: "It only works if it was arranged in advance, and for a hotel ten minutes from the station it is more car than the journey needs.",
      },
    ],
    verdict: "For Bari itself the honest answer is often the train or the number 16. It is when the journey leaves the city — or has to be back at a quayside by a fixed hour — that an arranged car starts to earn its place.",
  },

  port: {
    heading: "Arriving by ship",
    lead: "The Port of Bari is run by the Autorità di Sistema Portuale del Mare Adriatico Meridionale, and it does several jobs at once: cruise calls, ferries to Albania, Greece and Croatia, and cargo.",
    paragraphs: [
      "Cruise ships use the Terminal Crociere; the ferries to Durrës, Igoumenitsa, Corfu, Patras and the Croatian ports use the Stazione Marittima. A free shuttle runs between the quaysides inside the port, which matters more than it sounds: the port is large, and the berth a ship is given is not always the one nearest the gate.",
      "Lines that call at Bari include MSC, Costa, AIDA, Royal Caribbean, Celebrity, TUI Cruises and Phoenix Reisen. Bari is a call on an Adriatic itinerary far more often than it is a turnaround port, which shapes what a transfer from here usually is: a day out, not a journey to a hotel.",
      "Getting out of the port independently is possible — there are taxi ranks at both terminals, and AMTAB's circular route 50 links the port gate with Piazza Moro by Bari Centrale. For a walk round Bari Vecchia that is perfectly sufficient.",
    ],
    terminals: [
      {
        title: "Terminal Crociere",
        body: "Where cruise passengers disembark. A driver meeting a ship waits at the terminal, not at the ship's side — the quayside itself is a secure area.",
      },
      {
        title: "Stazione Marittima",
        body: "The ferry terminal, for the Albanian, Greek and Croatian routes. A different building, and worth naming correctly when you enquire so that nobody waits at the wrong one.",
      },
    ],
    shoreNote: "For a shore excursion, the all-aboard time is the only time that matters, and it is earlier than the departure time printed on the ticket. Send us the ship's name, the date, the arrival time and the all-aboard time, and the day gets planned backwards from the last of those. If what you want to fit in will not fit, we would rather say so while you can still change it.",
  },

  onward: {
    heading: "Where people go from Bari",
    lead: "Most transfers from Bari are not to a Bari address. These are the runs we are asked for most, with road distances as published sources give them.",
    items: [
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        distance: "About 48 km",
        note: "The shortest of the usual coastal runs. A town built on a limestone cliff straight above the sea.",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        distance: "About 60 km",
        note: "Further down the same coast, past Polignano. A harbour town with resorts either side of it.",
      },
      {
        id: null,
        name: "Matera",
        distance: "About 63 km",
        note: "Over the regional border into Basilicata. Frequently a full day out from Bari rather than a one-way move, and reached without going through central Bari at all.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        distance: "About 70 km",
        note: "The trulli town, inland into the Valle d'Itria. The classic first-day drive, and the most common cruise excursion from the port.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "Further again, inland and south",
        note: "The White City. Reachable from Bari, though Brindisi is usually the nearer airport for it.",
      },
    ],
    footnote: "Distances come from route planners and transfer operators and differ by a few kilometres between sources, depending on the route taken. Treat them as orientation. Driving times depend on the season — the coast road in August is not the coast road in March — and we confirm the actual routing when we quote.",
  },

  staying: {
    heading: "Where you are staying changes the answer",
    lead: "The single thing that most affects a transfer from Bari is not the distance. It is whether the address has a door a car can stop at.",
    groups: [
      {
        title: "Central Bari",
        body: "Hotels around Bari Centrale and the Murat quarter are straightforward. Bari Vecchia, the old town, is a different matter: the lanes are narrow and partly restricted, so the drop-off is usually at the edge rather than the door. A driver who knows which edge saves a circuit with suitcases.",
      },
      {
        title: "The coast",
        body: "Polignano, Monopoli and the resorts between them are an easy run down the SS16. Many of the properties are outside the towns, which is fine — it just means the pin matters more than the town name.",
      },
      {
        title: "Masserie and the countryside",
        body: "Converted farmhouses are a large part of why people come to Puglia, and most of them sit at the end of an unlit lane with a gate that is easy to drive past in the dark. Send the property's own arrival directions with your enquiry; many masserie keep a set written for drivers precisely because the lanes are hard to find.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that come up most often, answered before you have to ask.",
    items: [
      {
        term: "Child seats",
        detail: "Say the ages and the number of children when you enquire, not afterwards. Seats have to be arranged with the operator in advance; they are not something a driver can produce at the airport.",
      },
      {
        term: "Luggage",
        detail: "Tell us the real count, including golf clubs, pushchairs and anything that will not fold. The vehicle is chosen from that number, and a vehicle chosen from a guess is the usual cause of trouble at the kerb.",
      },
      {
        term: "Late arrivals",
        detail: "Bari takes late flights, and an arranged transfer is worth more at midnight than at midday — particularly if the address is rural. Availability is more limited late, so earlier notice helps.",
      },
      {
        term: "Limited-traffic zones",
        detail: "Bari Vecchia and several of the hill towns restrict vehicle access. This is normal in Italy and not an obstacle; it just means the legal drop-off point is sometimes a short walk from the door.",
      },
      {
        term: "Flight delays",
        detail: "Give the flight number and the driver tracks the flight. Delays are ordinary; what causes problems is a transfer arranged against a clock time with no flight number attached to it.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Bari transfers",
    items: [
      // The two questions that stood here — the distance from the airport
      // to the centre, and the airport train — are now answered on the BRI
      // page, which is where somebody asking them has landed. Repeating
      // them verbatim on two of our own URLs helped neither. These two are
      // this page's own subject: the city kerbside and the port.
      {
        question: "Where in Bari can a car actually drop us off?",
        answer: "At the door, for hotels in the Murat quarter and around Bari Centrale. Bari Vecchia is the exception: the lanes are narrow and partly restricted to traffic, so the legal drop-off is usually at the edge of the old town rather than outside the building. A driver who knows which edge is nearest your address saves a circuit of the walls with the suitcases.",
      },
      {
        question: "How do we get from the cruise terminal into the old town?",
        answer: "Independently, there are taxi ranks at both terminals and AMTAB's circular route 50 links the port gate with Piazza Moro beside Bari Centrale; inside the port a free shuttle runs between the quaysides, which matters because the berth a ship is given is not always the one nearest the gate. For a morning in Bari Vecchia that is enough. An arranged car earns its place when the day has to go somewhere else and be back before the all-aboard.",
      },
      {
        question: "Can you collect from the Bari cruise terminal?",
        answer: "Yes. Drivers meet at the Terminal Crociere, not at the ship's side, because the quayside is a secure area. Send the ship's name and the date so the right terminal and the right gate are arranged — the ferry terminal, the Stazione Marittima, is a separate building.",
      },
      {
        question: "We are on a cruise calling at Bari. Can we see Alberobello and get back?",
        answer: "It is the most requested excursion from the port. Give us the ship's name, the arrival time and — more importantly — the all-aboard time, and the day is planned backwards from the all-aboard. We will tell you plainly if what you want to fit in is not realistic in the hours ashore.",
      },
      {
        question: "Can you take us from Bari to Matera?",
        // The distance figure is deliberately not repeated here: the ~63 km
        // in the sources is measured from the airport, and the airport page
        // is where it belongs. From a city hotel or the quayside it is a
        // different start point, and we have no published figure for those.
        answer: "Yes, and from the cruise terminal it is among the most requested days out. Matera is in Basilicata rather than Puglia, and the route does not pass through central Bari. It is arranged either one way or as a day with waiting time included; if you are coming off a ship, the all-aboard time is what the day gets built around. Say which of the two you want and the quotation follows it.",
      },
      {
        question: "How much does a transfer from Bari cost?",
        answer: "There is no price list. The price depends on the route, the vehicle, the number of passengers and the date. Describe the journey and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do we need a car in Puglia, or are transfers enough?",
        answer: "It depends on the stay. Based in one place with a few excursions, individual transfers usually work out simpler than hiring a car, because parking in the historic centres is genuinely difficult. Moving somewhere new every day across a wide area, a hire car may suit you better — we will say so if that is the honest answer.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the flight or the ship",
    body: "The flight number or the ship's name, where you are going and how many of you there are. We come back with the arrangement and the price in writing — and if a journey will not work the way you have described it, we will tell you that instead.",
    cta: "Request a transfer quote",
  },
};
