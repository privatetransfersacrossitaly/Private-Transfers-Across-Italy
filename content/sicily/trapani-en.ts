import type { SicilyDestination } from "./types";

/**
 * Trapani — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Trapani private transfers and the Egadi ferry connections. The airport
 * query belongs to /airports/trapani-birgi. This is also the page that
 * absorbs the ferry material the brief originally wanted as a separate
 * /ports/trapani page — the approved scope folded it in here rather than
 * filing a ferry port under "cruise-ports", which would have misdescribed
 * it. See docs/sicily-cluster-plan.md.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 53 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * The western-coast position, the Province of Trapani, "still an important
 * fishing port and the main gateway to the nearby Egadi Islands", the salt
 * economy, the elevation of 3 m and the population of 54,636 — "the
 * 11th-largest city in Sicily" — are from the city's encyclopedic entry.
 * The island distances are from the Aegadian Islands entry: Favignana
 * "16 kilometres (9.9 mi) southwest of Trapani" and Marettimo "24
 * kilometres (15 mi) west of Trapani". Levanzo's entry gives 13 km west
 * without stating what from, so it is not printed.
 *
 * Airport facts — between Trapani and Marsala, managed by Airgest, dual
 * civil and military with the 37° Stormo based there, 1,007,409 passengers
 * in 2025 down 6.29%, a Ryanair base since 2009, and the named bus
 * operators — are from the airport's own entry.
 *
 * Deliberately absent: the road distance from the airport to the town (no
 * source states one), ferry operators, sailing times and crossing durations
 * (not verified), and the planned airport railway station, whose completion
 * date the source itself gives inconsistently as July 2026 in the body and
 * 2028 in a cited headline.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const trapaniEn: SicilyDestination = {
  meta: {
    // 53 characters.
    title: "Trapani Private Transfers and Salt Coast – Book a Car",
    description:
      "Private transfers in Trapani, the western corner of Sicily: the salt coast, the town, and the quayside for the Egadi Islands. Written quote, no price list.",
  },

  hero: {
    eyebrow: "Sicily · Trapani",
    h1: "Private transfers in Trapani",
    lead: "Trapani is the western corner of Sicily: a working fishing port at sea level, salt pans either side of the road out of it, and the quayside that almost everyone going to the Egadi Islands passes through. It is the flattest, simplest arrival in this cluster — and the one where the journey most often continues by boat.",
    primaryCta: "Request a Trapani transfer quote",
    secondaryCta: "Ferries to the Egadi",
    facts: [
      { label: "Coast", value: "Western" },
      { label: "Above the sea", value: "3 m" },
      { label: "Airport", value: "Vincenzo Florio, Birgi (TPS)" },
      { label: "Population", value: "54,636" },
    ],
  },

  intro: {
    heading: "The western corner",
    paragraphs: [
      "Trapani is a city and comune on the western coast of Sicily and the capital of its province. Its own entry describes it as still an important fishing port and the main gateway to the nearby Egadi Islands, and its economy has long rested on the extraction and trade of salt — which is why the approach to the town runs between salt pans rather than through hills.",
      "For a transfer, that flatness is good news and the ferry is the complication. The town sits three metres above the sea, the streets take a vehicle, and arrivals here are among the least troublesome in Sicily. What needs planning is not the drive but the connection: if a boat is involved, the sailing decides everything around it.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "Getting to Trapani",
    lead: "Two airports serve this corner, and which one you use is usually decided by which has the flight rather than by distance.",
    options: [
      {
        id: "trapani-airport",
        label: "The local one",
        body: "Vincenzo Florio Airport at Birgi sits between Trapani and Marsala rather than at either, and is shared with the Italian Air Force. It handled 1,007,409 passengers in 2025, down 6.29% on the year before, and Ryanair has had a base there since 2009. Its schedule is thinner than Palermo's, so it is an airport you use when the flight exists rather than a default.",
      },
      {
        id: "palermo-airport",
        label: "The bigger one",
        body: "Palermo's Falcone Borsellino handles roughly nine times the traffic and will often have the flight when Birgi does not. It is further away by road, but for many itineraries that is the trade worth making — and it is a straightforward run across the western end of the island.",
      },
    ],
    note: "There are scheduled buses from Birgi as well — Autoservizi Salemi serves Trapani, Marsala and Palermo, Autolinee Lumia serves Agrigento, and AST serves Trapani. We would rather name them than pretend a transfer is the only way out of a small airport.",
  },

  kerb: {
    heading: "On the ground in Trapani",
    lead: "The easiest arrivals in this cluster, with one real constraint and one that catches people out.",
    items: [
      {
        title: "The town is flat and reachable",
        body: "At three metres above the sea and laid out along a promontory, Trapani has none of Taormina's altitude problem or Ortygia's water. Most addresses are ordinary addresses, and a vehicle can generally get to them.",
      },
      {
        title: "The old centre still narrows",
        body: "The historic streets toward the end of the promontory are narrow in the usual Italian way, and access to parts of them is restricted. It is not an obstacle — it means the stopping point can be a short walk from the door, and knowing which approach to use saves a circuit.",
      },
      {
        title: "The quayside is a deadline, not an address",
        body: "A transfer to a ferry is governed by the sailing, not by a pickup time. Send the crossing you intend to take and the day is built backwards from it, with the margin that implies. This is the single thing most worth getting right about a Trapani journey.",
      },
      {
        title: "Out among the salt pans",
        body: "A good deal of the accommodation in this corner is outside the town, along the coast road or inland towards Marsala. Those are country addresses: send the property's own arrival directions if it has given you any, because the lanes out here are easier to describe than to find.",
      },
    ],
  },

  ferries: {
    heading: "The Egadi Islands, and what a transfer can and cannot do",
    body: "Trapani is the main gateway to the Egadi Islands. Favignana lies about 16 km south-west of the town and Marettimo about 24 km west, by the figures their own entry gives — those are distances across water, not road distances, and no vehicle covers them. A transfer takes you to the quayside and meets you off the return sailing; the crossing itself is a ferry journey and the car does not come with you unless that has been arranged specifically. We will say plainly which half of a plan we can cover, and we do not publish sailing times or operators here because we have not verified them.",
  },

  nearby: {
    heading: "Where people go next",
    lead: "The pages for the places most often paired with Trapani.",
    items: [
      {
        id: "palermo",
        body: "East along the coast, and the usual second base — or the airport you arrived through.",
      },
      {
        id: "agrigento",
        body: "South-east down the coast, for the Valley of the Temples. A long day rather than a half.",
      },
      {
        id: "cefalu",
        body: "Beyond Palermo on the north coast. Usually a separate leg rather than a day trip from here.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things worth settling before you fly or sail.",
    items: [
      {
        term: "The sailing, if there is one",
        detail: "Send the crossing you intend to take rather than a pickup time. Everything else about the day gets arranged around it, and a boat does not wait.",
      },
      {
        term: "Which airport",
        detail: "Birgi or Palermo. Tell us the flight and we will work out which, rather than assuming the nearer one is the one you landed at.",
      },
      {
        term: "Rural addresses",
        detail: "Out among the salt pans and towards Marsala, send the property's own arrival directions if it has provided them. It is the most useful thing you can forward for a country address here.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. It matters doubly if a ferry is involved, because what goes on a boat is handled more than what goes in a boot.",
      },
      {
        term: "The flight number",
        detail: "Rather than the arrival time. With it the driver sees a delay for themselves; without it, a delayed flight becomes a phone call from a landed aircraft.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Trapani transfers",
    items: [
      {
        question: "Can a transfer take us to the Egadi Islands?",
        answer: "It takes you to the quayside at Trapani and meets you off the return sailing. The crossing is a ferry journey — Favignana is about 16 km south-west of the town and Marettimo about 24 km west, across water — and the vehicle does not come with you unless that has been arranged specifically. Tell us the sailing you intend to take and the day is built around it.",
      },
      {
        question: "Which airport should we use for Trapani?",
        answer: "Birgi if the flight exists, Palermo if it does not. Birgi is the local airport and sits between Trapani and Marsala, but its schedule is much thinner — it handled about a million passengers in 2025 against Palermo's nine million. Plenty of people flying to this corner land at Palermo and drive across, and that is a perfectly ordinary arrangement.",
      },
      {
        question: "How far is Birgi airport from Trapani?",
        answer: "We do not publish a figure, because no source we could rely on states one — the airport's own entry says only that it sits between Trapani and Marsala. The operator confirms the routing when we quote. We would rather tell you that than put a number on the page that we cannot stand behind.",
      },
      {
        question: "Is there a bus from the airport?",
        answer: "Yes. Autoservizi Salemi serves Trapani, Marsala and Palermo, Autolinee Lumia serves Agrigento, and AST serves Trapani. We name them because a transfer is not always the right answer from a small airport in daylight with one bag — check current timetables with the operators rather than with us.",
      },
      {
        question: "Can you collect us from a property out among the salt pans?",
        answer: "Yes, and a good share of what we are asked for here is exactly that. Send the property's own arrival directions along with the address. Country addresses in this corner are considerably easier to describe than to find, and the directions a property writes for drivers are worth more than a map pin.",
      },
      {
        question: "Can you take us from Trapani to Agrigento or Palermo?",
        answer: "Yes — both are regular requests. Agrigento is a long day down the south coast rather than a half-day, and Palermo is the usual onward leg east. We do not publish distances or journey times for either, because the figures in circulation disagree; the operator confirms the routing when we quote.",
      },
      {
        question: "How much does a transfer in Trapani cost?",
        answer: "There is no price list. A run to the quayside and a day to Agrigento are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the sailing, or the flight",
    body: "In Trapani one of those two usually governs the day. Send it along with the address, the date and how many of you there are. The arrangement and the price come back in writing — and if the connection you have described is too tight, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
