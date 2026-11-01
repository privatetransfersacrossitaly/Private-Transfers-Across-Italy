import type { BariPage } from "./types";

/**
 * Bari — English.
 *
 * ── What this page owns, and what it does not ─────────────────────────────
 * Per the approved keyword map: this page owns Bari Karol Wojtyła Airport
 * (BRI) and the Port of Bari. Journeys *from* Bari to Alberobello, Polignano
 * and the rest are introduced here and detailed on their own pages when
 * those ship. The "Bari or Brindisi?" comparison is deliberately absent —
 * that belongs to the Brindisi page and the pillar, and repeating it here
 * would put two pages in competition for the same query.
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
    title: "Bari airport transfers",
    description:
      "Private transfers from Bari Karol Wojtyła Airport (BRI) and the cruise terminal: the city, Alberobello, Polignano, Matera. Tell us the journey for a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Bari",
    h1: "Bari airport and cruise port transfers",
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
    heading: "Arriving at Bari Karol Wojtyła",
    lead: "BRI is a small, straightforward airport — officially Bari Karol Wojtyła, still called Palese by plenty of people after the neighbourhood next to it. It is a focus city for Ryanair and Volotea, which is why so many of the arrivals are early-morning or late-evening. Here is the shape of an arrival.",
    steps: [
      {
        title: "On the ground",
        body: "Walk or bus to the terminal, depending on the stand. Passport control only applies on arrivals from outside Schengen; on a flight from elsewhere in Italy or the EU you walk straight through.",
      },
      {
        title: "Baggage reclaim",
        body: "The hall is small and the belts are close together. On a busy summer evening with several aircraft down at once, bags can take a while — this is the part of an arrival that most often runs over.",
      },
      {
        title: "Into arrivals",
        body: "One arrivals area, so there is no wrong exit to take. A driver meeting you waits here with a name board, and that is the point at which the two of you need to have agreed what the board will say.",
      },
      {
        title: "To the car",
        body: "The pick-up area is a short walk from the terminal doors. Your driver takes the luggage from there; nothing about the walk changes whether the car is waiting.",
      },
    ],
    note: "Flight numbers matter more than arrival times. Give us the flight number and the driver can see for themselves whether you are early, late or diverted — a time written down on a booking form cannot do that.",
  },

  waysIn: {
    heading: "Ways into the city, honestly compared",
    lead: "A private transfer is not always the right answer, and this page is more useful if it says so. Bari is one of the easier Italian airports to leave under your own steam.",
    rows: [
      {
        mode: "Train",
        suits: "Going to central Bari with little luggage. The airport has its own station on the Ferrotramviaria line, and published timetables put the run to the centre at roughly 15 to 20 minutes.",
        against: "It terminates at the Ferrotramviaria station beside Bari Centrale, not inside it, so there is a walk and a change if you are continuing by Trenitalia. It does not run through the night.",
      },
      {
        mode: "City bus",
        suits: "The cheapest way in. AMTAB route 16 connects the airport with the centre.",
        against: "Slower than the train, and awkward with more than a cabin bag.",
      },
      {
        mode: "Taxi",
        suits: "Short hops into Bari itself when you have not arranged anything in advance. There is a rank outside arrivals.",
        against: "Nothing is arranged beforehand, so there is no name board, no fixed route and nobody expecting your flight. For a long run inland it is the least predictable option.",
      },
      {
        mode: "Private transfer",
        suits: "Anywhere that is not central Bari: a masseria down an unlit lane, a hill town with a limited-traffic centre, Matera over the border, or a late arrival with children and luggage.",
        against: "It has to be arranged in advance, and for a short run to a city-centre hotel it is more than the journey needs.",
      },
    ],
    verdict: "Rule of thumb: if you are staying in central Bari and travelling light, take the train. If you are going anywhere else in the region, the arithmetic changes quickly — especially after dark, and especially with a car seat in the equation.",
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
      {
        question: "How far is Bari airport from the city centre?",
        answer: "Roughly 8 km, north-west of the centre. It is one of the closer Italian airports to the city it serves, and the drive into central Bari is short — most of the transfers we arrange from BRI are going considerably further than that.",
      },
      {
        question: "Is there a train from Bari airport?",
        answer: "Yes. The airport has a station on the Ferrotramviaria line and published timetables put the run into the centre at roughly 15 to 20 minutes. It arrives at the Ferrotramviaria station beside Bari Centrale rather than inside it, so allow for a walk and a change if you are continuing by Trenitalia, and check current times with the operator.",
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
        answer: "Yes, and it is one of the more common requests. Matera is in Basilicata rather than Puglia, about 63 km from the airport by published figures, and the route does not go through central Bari. It is arranged as either a one-way transfer or a day out with waiting time — tell us which you want and we will quote accordingly.",
      },
      {
        question: "How much does a transfer from Bari airport cost?",
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
