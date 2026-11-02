import type { AirportPage } from "./types";

/**
 * Brindisi Airport (BDS) — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * BDS itself and every road running south from it. The Brindisi *town* page
 * keeps Brindisi as a destination and the wider "southern gateway"
 * framing, and is linked from here.
 *
 * The "Bari or Brindisi?" comparison stays on the Brindisi town page and
 * the Puglia pillar, as the approved keyword map allocates it. This page
 * states which destinations BDS is nearest to, which is a different claim
 * from hosting the comparison, and links out for the full argument.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Codes, the Papola Casale and Salento Airport names, Antonio Papola, the
 * ~6 km from the centre, 3,385,610 passengers in 2024 (Assaeroporti via the
 * airport's encyclopaedia entry) and Ryanair as focus-city carrier are as
 * established during the Puglia cluster research. Lecce at about 39 km is
 * the Puglia regional route guide's figure. Ostuni 32–37 km, Gallipoli
 * 80–86 km and Otranto 65–97 km are ranges because the sources genuinely
 * disagree, and the page says so rather than picking one.
 *
 * Bus and rail services from BDS are NOT given timetables here: no source
 * reachable during this work documents them in a form worth publishing, and
 * inventing one would be worse than pointing at the operators.
 *
 * No prices, no journey-time promises, no vehicle classes, no fleet claims,
 * no partnerships, no testimonials.
 */

export const brindisiAirportEn: AirportPage = {
  meta: {
    title: "Brindisi Airport transfers (BDS)",
    // 146 characters. Five place names became three: Gallipoli and Otranto
    // are on the page, and a description that lists everything persuades
    // nobody. The code is in the title, so it is not repeated here.
    description:
      "Private transfers from Brindisi Airport to Lecce, Ostuni and the Salento coast. Send the flight and the address; the price comes in writing.",
  },

  hero: {
    eyebrow: "Puglia · Brindisi Airport",
    h1: "Private transfers from Brindisi Airport",
    lead: "BDS is the airport for the south of Puglia, and it is small enough to leave in minutes. That speed is the point: there is no long internal transit to absorb a delay, so a transfer arranged against a flight number works here and one arranged against a guessed time does not.",
    primaryCta: "Request a transfer from Brindisi Airport",
    secondaryCta: "Where people go",
    facts: [
      { label: "Airport", value: "Brindisi · BDS / LIBR" },
      { label: "Also called", value: "Papola Casale · Salento Airport" },
      { label: "From the centre", value: "About 6 km" },
      { label: "Passengers", value: "3,385,610 in 2024" },
    ],
  },

  identity: {
    heading: "The airport itself",
    paragraphs: [
      "Brindisi Airport is formally named after Antonio Papola, an Italian aviator killed in an air accident in February 1948. You will meet two other names on tickets and signage: Papola Casale, after the neighbourhood, and Salento Airport, after the region it opens. The last of those explains what the airport is actually for.",
      "It handled 3,385,610 passengers in 2024 and is a focus city for Ryanair, with seasonal routes from across northern Europe that thicken sharply in summer and thin out by November. That seasonality matters when you are arranging ground transport: in August the airport is busy and so is every operator working out of it.",
      "It is also genuinely small, which changes how an arrival behaves. The walk from the aircraft to the arrivals hall is short, there is one place to collect bags and one way out. Where a larger airport gives a driver twenty minutes of slack while passengers work their way through it, Brindisi does not.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You give us the flight and the property, we arrange it with an operator covering that route, and the arrangement and the price come to you in writing first.",
    ],
  },

  meeting: {
    heading: "Being met at BDS",
    lead: "Because the airport empties fast, the margin for a vague arrangement is smaller here than almost anywhere else in Puglia.",
    steps: [
      {
        title: "The arrivals hall",
        body: "One hall, one exit. Drivers wait with a name board. Agree in advance what the board will say — a surname spelled differently from the one you expected is the commonest reason two people fail to find each other in a room this size.",
      },
      {
        title: "Give the flight number",
        body: "With it, a delay or a diversion is something the driver watches happen. Without it, a delayed flight becomes a phone call made from a landed aircraft, which is the worst possible moment to be arranging anything.",
      },
      {
        title: "Say where you are actually going",
        body: "Not the town — the property, with its own arrival directions if it has sent you any. A great many BDS arrivals end at a masseria down an unlit lane, and that last kilometre is the part that goes wrong.",
      },
      {
        title: "Late and seasonal flights",
        body: "The summer schedule carries a good many late-evening arrivals, and availability in the small hours is tighter than in the middle of the day. In July and August earlier notice genuinely helps.",
      },
    ],
    note: "The flight number and the property's own directions are the two things that make a Brindisi arrival uneventful. Both are usually sitting in an email you have already been sent.",
  },

  howItWorks: {
    heading: "How a private airport transfer works here",
    lead: "Four steps, and nothing is charged until you have agreed the price in writing.",
    steps: [
      {
        title: "You describe the journey",
        body: "Flight number, the property you are going to, passengers and luggage. Child seats are arranged in advance and need ages, not just a count.",
      },
      {
        title: "We arrange it with a local operator",
        body: "The journey goes to a licensed transfer company that covers that route. We are not the carrier; we set the arrangement up and stay answerable for it being right.",
      },
      {
        title: "You get the price in writing",
        body: "Before anything is confirmed. If a journey will not work the way you have described it — a drive to Leuca squeezed into an afternoon, more bags than one vehicle takes — we say so now rather than on the day.",
      },
      {
        title: "You pay the operator",
        body: "The local company carrying out the journey takes payment directly. Nothing is charged until the quotation is agreed.",
      },
    ],
  },

  routes: {
    heading: "Where people go from Brindisi Airport",
    lead: "Almost nobody lands at BDS to stay in Brindisi. The drive south is the journey, and how far south you are going is the question that shapes everything else.",
    city: {
      id: "brindisi",
      name: "Brindisi city centre",
      distance: "About 6 km",
      note: "Short, and the reason the airport is quick to leave. The town page covers Brindisi as a destination and the wider choice between the region's two airports.",
    },
    items: [
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "About 32–37 km",
        note: "North-west rather than south. The White Town on its hill — though most guests are staying at a masseria below it, which makes the property's own directions more useful than the town name.",
      },
      {
        id: "lecce",
        name: "Lecce",
        distance: "About 39 km",
        note: "The most requested journey from this airport by some margin. The Puglia regional route guide gives 39 km and roughly half an hour, mostly on the SS613.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        distance: "Further north, inland",
        note: "Reachable from here, though Bari is the nearer airport for the trulli country. Worth knowing before booking a flight rather than after.",
      },
      {
        id: null,
        name: "Otranto",
        distance: "Sources give 65–97 km",
        note: "On the Adriatic side. The spread in published distances is real and depends on whether the route runs inland through Lecce or down the coast.",
      },
      {
        id: null,
        name: "Gallipoli",
        distance: "About 80–86 km",
        note: "On the Ionian side, usually via Lecce and then the SS101. A different sea and a noticeably different kind of holiday.",
      },
      {
        id: "salento",
        name: "Salento",
        distance: "The whole peninsula",
        note: "Porto Cesareo, Santa Maria di Leuca and the towns at the tip. The Salento page counts how many journeys a week down here actually takes, which is usually more than people expect.",
      },
    ],
    footnote: "These figures come from route planners, transfer operators and the Puglia regional route guide, and they do not all agree — the Otranto spread above is the clearest example. Treat them as orientation rather than as a timetable. Summer traffic on the coast roads adds time no planner accounts for, and we confirm the actual routing when we quote.",
  },

  alternatives: {
    heading: "Other ways out of the airport",
    lead: "There are bus connections from BDS, and for some journeys they are a reasonable answer. We would rather describe them honestly than pretend they do not exist.",
    modes: [
      {
        mode: "Bus",
        suits: "Budget travel to Brindisi itself or to the larger towns, when you are travelling light and arriving in daylight.",
        against: "Services vary by season and by operator, so we point you at current timetables rather than publish times we cannot verify. With luggage, a connection and a rural destination, the comparison tends to settle itself.",
      },
      {
        mode: "Train",
        suits: "Onward travel once you have reached a town with a station — Brindisi and Lecce both have mainline services.",
        against: "The station is not at the airport, so there is a leg to get there first. For a Lecce city-centre hotel this can still work well; for a masseria it does not.",
      },
      {
        mode: "Hire car",
        suits: "Touring Salento and moving somewhere new most days. This is one of the few parts of Puglia where driving yourself genuinely competes — distances are long and parking outside the historic centres is less difficult than further north.",
        against: "Parking inside the old centres is genuinely difficult, and a rural gate at midnight is harder to find for the first time than it looks on a map.",
      },
      {
        mode: "Private transfer",
        suits: "A rural property, a late arrival, a group, children, or a first visit where nobody in the car has seen the lane before.",
        against: "It has to be arranged in advance. For a short hop into Brindisi town in daylight it is more than the journey needs.",
      },
    ],
    verdict: "If you are based in one place with a few days out, arranged transfers usually work out simpler. If you intend to be somewhere different every day across the peninsula, a hire car may suit you better — and we will say so rather than quote you eight separate journeys.",
  },

  practical: {
    heading: "Practical detail",
    lead: "What is worth settling before you fly.",
    items: [
      {
        term: "The property's arrival directions",
        detail: "The single most useful thing you can send for a Brindisi journey. Many masserie keep a set written specifically for drivers, precisely because the lanes are hard to find.",
      },
      {
        term: "The flight number",
        detail: "Not the arrival time. BDS empties fast, so there is little slack to absorb a vague arrangement.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages when you enquire. Arranged with the operator in advance and, in high season, genuinely in demand.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number and there is no second trip to a rural property.",
      },
      {
        term: "Seasonality",
        detail: "Brindisi's schedule is strongly seasonal and so is the ground transport around it. Arranging early is worth more here than at a year-round airport.",
      },
      {
        term: "Limited-traffic zones",
        detail: "Lecce, Ostuni and most old centres restrict vehicle access. Normal, and not an obstacle — it only means the legal drop-off is sometimes a few minutes' walk from the door.",
      },
    ],
  },

  faq: {
    heading: "Questions about Brindisi Airport transfers",
    items: [
      {
        question: "How far is Brindisi Airport from Lecce?",
        answer: "About 39 km by the Puglia regional route guide's figure, and roughly half an hour in ordinary conditions, mostly on the SS613. It is the most requested journey from this airport by a clear margin.",
      },
      {
        question: "How far is the airport from Brindisi itself?",
        answer: "About 6 km. The airport is close to the city, which is part of why it is quick to leave — but most people landing here are not staying in Brindisi, and the drive that matters is the one further south.",
      },
      {
        question: "Can you collect us from a masseria in the countryside?",
        answer: "Yes, and around here it is one of the most common requests we get. Send the property's full name and any arrival directions it has given you. Many masserie keep a set written for drivers because the lanes are genuinely hard to find; forwarding them is the single most useful thing you can do.",
      },
      {
        question: "Is there a bus or train from Brindisi Airport?",
        answer: "There are bus connections, but services vary by season and operator, so we would rather point you at current timetables than publish times we cannot verify. The station is not at the airport. For Lecce and the towns beyond, the practical comparison is usually between a connection with a change and a door-to-door car — and with luggage and a late arrival, that comparison tends to settle itself.",
      },
      {
        question: "Should I have flown to Bari instead?",
        answer: "If you are staying south of Ostuni — Lecce, Otranto, Gallipoli, anywhere in Salento — Brindisi is the right airport. North of Ostuni, Bari is nearer. The Brindisi town page and the Puglia regional page set the comparison out in full. If the flights only suited one of them, the transfer is still perfectly arrangeable; it is simply a longer drive.",
      },
      {
        question: "Can you arrange transport for a wedding in Salento?",
        answer: "Yes. The usual shape is guest arrivals at BDS across several days, a coordinated run to the venue, and late return journeys afterwards — that last being the part most often forgotten. Tell us guest numbers, pickup points and times and we will quote it as one piece of work. We have no agreements with specific venues and do not claim to.",
      },
      {
        question: "How much does a transfer from Brindisi Airport cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date — a run to Ostuni and a run to Santa Maria di Leuca are not comparable journeys. Describe what you need and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the flight and the property",
    body: "The flight number, the property you are going to, how many of you there are — and the property's own arrival directions if it has sent you any. We come back with the arrangement and the price in writing.",
    cta: "Request a transfer quote",
  },
};
