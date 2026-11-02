import type { AirportPage } from "./types";

/**
 * Bari Karol Wojtyła Airport (BRI) — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * The airport: BRI itself, being met in its arrivals hall, and every road
 * that leads away from it. The Bari *town* page keeps the city, the old
 * quarter and the cruise terminal, and is linked from here for those.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Codes, operator, the ~8 km distance north-west of the centre, the Palese
 * name, Ryanair and Volotea as focus-city carriers, the Ferrotramviaria
 * rail link and AMTAB route 16 are as established during the Puglia cluster
 * research and used identically here. Road distances (Polignano ~48 km,
 * Monopoli ~60 km, Matera ~63 km, Alberobello ~70 km) come from route
 * planners and transfer operators that disagree by a few kilometres, so
 * every one is written as an approximation and the page says so.
 *
 * Passenger totals are deliberately absent: the sources give 2023 and 2025
 * figures that cannot both be current, and the number tells someone booking
 * a car nothing.
 *
 * No prices, no journey-time promises, no vehicle classes, no fleet claims,
 * no partnerships, no testimonials.
 */

export const bariAirportEn: AirportPage = {
  meta: {
    title: "Bari Airport transfers (BRI)",
    // 146 characters, so nothing is cut in a desktop result. The earlier
    // version ran six place names together, which read as a list rather
    // than a sentence; the routes are all on the page, and a description
    // has to persuade somebody to click rather than enumerate.
    description:
      "Private transfers from Bari Karol Wojtyła Airport (BRI) to the city, the trulli and Matera. Give us the flight number; the price comes in writing.",
  },

  hero: {
    eyebrow: "Puglia · Bari Airport",
    h1: "Private transfers from Bari Airport",
    lead: "BRI is a small airport that empties quickly, which is its great advantage and the reason arrivals here go wrong when nobody has planned them. Most people landing at Bari are not staying in Bari — they are going an hour inland to the trulli, down the coast, or over the border to Matera.",
    primaryCta: "Request a transfer from Bari Airport",
    secondaryCta: "Where people go",
    facts: [
      { label: "Airport", value: "Bari Karol Wojtyła · BRI / LIBD" },
      { label: "From the centre", value: "About 8 km, north-west" },
      { label: "Operator", value: "Aeroporti di Puglia" },
      { label: "Also called", value: "Palese" },
    ],
  },

  identity: {
    heading: "The airport itself",
    paragraphs: [
      "Bari Karol Wojtyła Airport sits roughly eight kilometres north-west of the city centre. A good many people still call it Palese, after the neighbourhood beside it, and you will see that name on older signage and on some booking confirmations. It is run by Aeroporti di Puglia, which operates Brindisi as well.",
      "It is a focus city for Ryanair and Volotea, and that shapes the day here more than anything else about it: a large share of arrivals are early morning or late evening, because that is when low-cost schedules put them. An arrival at eleven at night into a small airport with one arrivals hall is straightforward — but only if the person meeting you already knows the flight.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You give us the flight and the destination, we arrange it with an operator covering that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at BRI",
    lead: "One terminal, one arrivals hall, one way out. There is no wrong exit to take here, which removes the commonest cause of missed meetings at larger airports — and leaves two others.",
    steps: [
      {
        title: "Baggage first",
        body: "The reclaim hall is small and the belts sit close together. On a summer evening with several aircraft down at once, bags are the part of an arrival that most often runs long. A driver tracking the flight expects this; a driver given only a clock time does not.",
      },
      {
        title: "The name board",
        body: "Drivers wait in arrivals with a board. Agree in advance what it will say — a surname spelled differently from the one you expected is the usual reason two people stand ten metres apart without finding each other.",
      },
      {
        title: "The walk to the car",
        body: "The pick-up area is a short walk from the terminal doors. Your driver takes the luggage from there. Nothing about that walk changes whether the car is already waiting.",
      },
      {
        title: "If the flight moves",
        body: "Delays and diversions are ordinary. What matters is that the driver can see them happen, which is why we ask for the flight number rather than an arrival time.",
      },
    ],
    note: "Give the flight number, not the scheduled time. It is the single most useful thing in an airport transfer enquiry and the one most often left out.",
  },

  howItWorks: {
    heading: "How a private airport transfer works here",
    lead: "Four steps, and no payment until you have agreed the price in writing.",
    steps: [
      {
        title: "You describe the journey",
        body: "Flight number, where you are going, how many passengers and how much luggage. If anyone needs a child seat, the ages matter — seats are arranged in advance and cannot be produced at the kerb.",
      },
      {
        title: "We arrange it with a local operator",
        body: "We pass the journey to a licensed transfer company that covers that route. We are not the carrier; we are the people who set it up and stay responsible for the arrangement being right.",
      },
      {
        title: "You get the price in writing",
        body: "Before anything is confirmed. If the journey will not work the way you have described it — too tight against a cruise departure, too many bags for one vehicle — we say so at this point rather than later.",
      },
      {
        title: "You pay the operator",
        body: "The local company that carries out the journey takes the payment directly. Nothing is charged until you have agreed the quotation.",
      },
    ],
  },

  routes: {
    heading: "Where people go from Bari Airport",
    lead: "Most transfers from BRI are not to a Bari address. These are the runs we are asked for most often, with road distances as published sources give them.",
    city: {
      id: "bari",
      name: "Bari city centre",
      distance: "About 8 km",
      note: "The shortest journey on this page, and the one where the train is a genuine alternative. The city page covers Bari itself, the old quarter and the cruise terminal.",
    },
    items: [
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        distance: "About 48 km",
        note: "The shortest of the coastal runs — a town on a cliff above the sea. Mostly couples and small parties, and a common first evening.",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        distance: "About 60 km",
        note: "Further down the same coast. The comune is large, so the town name alone rarely locates a property: send the full address.",
      },
      {
        id: null,
        name: "Matera",
        distance: "About 63 km",
        note: "Over the regional border, in Basilicata rather than Puglia. Bari is nonetheless its nearest practical airport, and the route does not pass through central Bari.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        distance: "About 70 km",
        note: "Inland into the Valle d'Itria and the trulli. The classic first-day drive in Puglia, and the most requested excursion from the cruise port.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "Further again, inland and south",
        note: "The White Town and the masserie below it. Reachable from Bari, though Brindisi is usually nearer — Ostuni sits close to the line between the two airports.",
      },
      {
        id: "puglia",
        name: "Elsewhere in Puglia",
        distance: "Varies considerably",
        note: "The regional page sets out how far apart things really are, which is the question most people have before they pick an airport at all.",
      },
    ],
    footnote: "Distances come from route planners and transfer operators, differ by a few kilometres between sources depending on the route taken, and should be treated as orientation rather than as a timetable. Driving times depend heavily on the season — the coast road in August is not the coast road in March — and we confirm the actual routing when we quote.",
  },

  alternatives: {
    heading: "When not to book a transfer",
    lead: "Bari is one of the easier Italian airports to leave under your own steam, and this page is more useful if it says so plainly.",
    modes: [
      {
        mode: "Train",
        suits: "Central Bari with light luggage. The airport has its own station on the Ferrotramviaria line and published timetables put the run into the centre at roughly 15 to 20 minutes.",
        against: "It arrives at the Ferrotramviaria station beside Bari Centrale rather than inside it, so there is a walk and a change if you are continuing by Trenitalia. It does not run through the night.",
      },
      {
        mode: "City bus",
        suits: "The cheapest way in. AMTAB route 16 connects the airport with the centre.",
        against: "Slower than the train, and awkward with more than a cabin bag.",
      },
      {
        mode: "Taxi from the rank",
        suits: "A short hop into Bari when nothing was arranged in advance.",
        against: "No name board, no agreed route, and nobody watching your flight. For a long run inland it is the least predictable of the four.",
      },
      {
        mode: "Private transfer",
        suits: "Anywhere that is not central Bari: a masseria down an unlit lane, a hill town with restricted access, Matera over the border, or a late arrival with children and luggage.",
        against: "It has to be arranged in advance, and for a short run to a city-centre hotel it is more than the journey needs.",
      },
    ],
    verdict: "Rule of thumb: staying in central Bari and travelling light, take the train. Going anywhere else in the region, the arithmetic changes quickly — and it changes fastest after dark, with a rural address, or with a car seat in the equation.",
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that decide whether an arrival is uneventful.",
    items: [
      {
        term: "The flight number",
        detail: "Not the arrival time. With it the driver sees a delay or a diversion for themselves; without it, a delayed flight becomes a phone call from a landed aircraft.",
      },
      {
        term: "Child seats",
        detail: "Number of children and their ages, at the time of enquiry. Arranged with the operator in advance; a driver cannot produce one on arrival, and in high season they are genuinely in demand.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold — golf clubs, pushchairs, instruments. The vehicle is chosen from that number, and a guess shows up at the kerb with the boot open.",
      },
      {
        term: "Rural addresses",
        detail: "A great deal of Puglia's accommodation sits down an unnamed lane behind an unmarked gate. Send the property's own arrival directions if it has given you any; many keep a set written for drivers.",
      },
      {
        term: "Late arrivals",
        detail: "BRI takes late flights and an arranged car is worth more at midnight than at midday, particularly to a country address. Availability is tighter in the small hours, so earlier notice helps.",
      },
      {
        term: "Limited-traffic zones",
        detail: "Bari Vecchia and several hill towns restrict vehicle access. Normal in Italy and not an obstacle — it only means the legal drop-off is sometimes a short walk from the door.",
      },
    ],
  },

  faq: {
    heading: "Questions about Bari Airport transfers",
    items: [
      {
        question: "How far is Bari Airport from the city centre?",
        answer: "Roughly 8 km, north-west. It is one of the closer Italian airports to the city it serves. Most of the transfers we arrange from BRI are going considerably further than that — inland to the trulli, down the coast, or over the border to Matera.",
      },
      {
        question: "Is there a train from Bari Airport?",
        answer: "Yes. The airport has its own station on the Ferrotramviaria line, and published timetables give roughly 15 to 20 minutes into the centre. It arrives beside Bari Centrale rather than inside it, so allow for a short walk and a change if you are continuing by Trenitalia, and check current times with the operator. It does not run overnight.",
      },
      {
        question: "How much does a transfer from Bari Airport cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date — a run into the city and a run to Matera are not comparable journeys. Describe what you need and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Can you take us from Bari Airport to Alberobello?",
        answer: "Yes, and it is among the most requested journeys from this airport — about 70 km by published figures. It is arranged either as a one-way transfer or as a car and driver for the day with waiting time, which usually suits better if you want to combine it with other Valle d'Itria towns.",
      },
      {
        question: "Can you take us from Bari Airport to Matera?",
        answer: "Yes. Matera is in Basilicata rather than Puglia, about 63 km from the airport by published figures, and the route does not go through central Bari. It is arranged as a one-way transfer or as a day out with waiting time — tell us which and the quote will reflect it.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "Give us the flight number when you enquire and the driver follows the flight. Delays are ordinary and absorbed. The arrangement that goes wrong is one fixed to a clock time with no flight attached to it.",
      },
      {
        question: "Do you meet cruise passengers as well?",
        answer: "Yes, but the cruise terminal is a separate arrangement from the airport and the planning is different, because an all-aboard time is a hard limit. The Bari page covers the Terminal Crociere and the Stazione Marittima.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send us the flight number",
    body: "The flight number, where you are going and how many of you there are. We come back with the arrangement and the price in writing — and if the journey will not work the way you have described it, we will tell you that instead.",
    cta: "Request a transfer quote",
  },
};
