import type { SicilyDestination } from "./types";

/**
 * Agrigento — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Agrigento private transfers and the Valley of the Temples. It targets no
 * airport query at all, which is unusual in this cluster and correct here:
 * Agrigento is the one place in Sicily with no obvious airport, and the
 * page's job is to say so rather than to claim one.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 55 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * The southern-coast position, the capital of the province of Agrigento,
 * the UNESCO inscription — "Archaeological Area of Agrigento", 1997 — the
 * elevation of 230 m, "Akragas was founded on a plateau overlooking the
 * sea" and the population of 55,227 (2025) are from the city's own entry.
 * That the temples are "located on a ridge outside the town of Agrigento"
 * is from the Valle dei Templi entry.
 *
 * Deliberately absent, and this matters on this page more than most: the
 * distance or walk between the modern town and the temples. No source read
 * states one. A rail journey time of "approximately 2 hours and 30 minutes"
 * to Palermo airport appears only in an unverified page summary and is not
 * used. Porto Empedocle is likewise summary-only and is not named as a port
 * we serve. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const agrigentoEn: SicilyDestination = {
  meta: {
    // 55 characters.
    title: "Agrigento Private Transfers and Temples – Book a Driver",
    description:
      "Private transfers to Agrigento and the Valley of the Temples on Sicily's south coast — including which airport is actually worth flying into.",
  },

  hero: {
    eyebrow: "Sicily · Agrigento",
    h1: "Private transfers to Agrigento",
    lead: "Agrigento is the one place in Sicily with no obvious airport. It sits on the southern coast with the Valley of the Temples on a ridge below the town, and people reach it from Palermo, from Catania or from Trapani depending on the flight they found. That makes it the destination where asking before you book the flight genuinely saves a day.",
    primaryCta: "Request an Agrigento transfer quote",
    secondaryCta: "Which airport?",
    facts: [
      { label: "Coast", value: "Southern" },
      { label: "The town sits at", value: "230 m" },
      { label: "World Heritage", value: "Archaeological Area, inscribed 1997" },
      { label: "Population", value: "55,227 (2025)" },
    ],
  },

  intro: {
    heading: "The corner with no airport",
    paragraphs: [
      "Agrigento is a city on the southern coast of Sicily and the capital of its province. The ancient city of Akragas was founded on a plateau overlooking the sea, and the modern town still sits up at around 230 metres, with the Archaeological Area of Agrigento — inscribed as a World Heritage Site in 1997 and known as the Valley of the Temples — on a ridge outside it.",
      "Everything about a transfer here follows from the geography. The south coast has no airport of its own in this cluster, so the journey is a long one whichever end of the island you came in at, and the choice between Palermo, Catania and Trapani is a real decision rather than a formality. It is the one Sicilian destination where we would rather be asked before the flight is booked than after.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "Which airport for Agrigento?",
    lead: "There is no near one. There are three plausible ones, and the honest answer is that it depends on the flight more than on the map.",
    options: [
      {
        id: "palermo-airport",
        label: "Most often",
        body: "Palermo's Falcone Borsellino carries the most traffic of the three airports that reach this coast and usually has the flight. It is the arrival we are asked about most for Agrigento.",
      },
      {
        id: "catania-airport",
        label: "Also workable",
        body: "Catania is the island's busiest airport and will often have a flight when Palermo does not. The run across to the south coast is long, and worth knowing about in advance rather than discovering on the day.",
      },
      {
        id: "trapani-airport",
        label: "Sometimes",
        body: "Birgi is small, but Autolinee Lumia runs a scheduled bus from it to Agrigento — which is worth saying, because a transfer is not always the right answer from a small airport in daylight with one bag.",
      },
    ],
    note: "We publish no distances or journey times for any of the three. None could be sourced to anything better than route planners that disagree with one another, and on journeys this long a wrong figure is worse than no figure. The operator confirms the routing when we quote.",
  },

  kerb: {
    heading: "The town, the temples and the ridge between them",
    lead: "Agrigento is two destinations that share a name, and a transfer has to know which one you mean.",
    items: [
      {
        title: "The modern town is up",
        body: "The town sits at around 230 metres, on the plateau the ancient city was founded on. Its streets are an ordinary hill-town arrangement: reachable, but steep in places, and with the usual narrowing toward the historic centre.",
      },
      {
        title: "The temples are below, on a ridge",
        body: "The Archaeological Area is on a ridge outside the town rather than in it. A hotel described as being at Agrigento may be up in the town, down near the site, or out along the coast — three different arrivals. The full address settles it and the town name does not.",
      },
      {
        title: "We do not publish the distance between them",
        body: "You will find figures for it in circulation. We could not source one we would stand behind, so this page does not state one. What we can say is that it is a drive rather than a stroll, and that a day planned around visiting the site is planned around the site's own hours rather than around a transfer timetable.",
      },
      {
        title: "Out along the coast",
        body: "A good deal of the accommodation here is outside the town altogether, along the southern coast. Those are country or coastal addresses: send the property's own arrival directions if it has given you any, because out here they are worth more than a pin.",
      },
    ],
  },

  nearby: {
    heading: "Where people go next",
    lead: "Agrigento is more often a stop on a longer route than a base, and these are the pages either side of it.",
    items: [
      {
        id: "palermo",
        body: "North across the island, and the usual arrival or onward leg.",
      },
      {
        id: "trapani",
        body: "North-west up the coast, for the salt pans and the Egadi ferries.",
      },
      {
        id: "catania",
        body: "East across the island. Long, and better as a one-way move than a round trip.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that matter on a journey this long.",
    items: [
      {
        term: "Ask before you book the flight",
        detail: "For Agrigento specifically. The difference between the right airport and the wrong one is measured in hours at each end of the holiday, and it is the one decision we can help with before anything is booked.",
      },
      {
        term: "Town, temples or coast",
        detail: "Say which. Three quite different addresses are all sold as Agrigento, and the booking confirmation rarely makes it obvious to a driver which one you have.",
      },
      {
        term: "One way or a round trip",
        detail: "From Palermo or Catania, Agrigento often works better as a stop on the way somewhere than as a day out and back. Tell us which you intend and the day is built accordingly.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. On a long island crossing the vehicle is chosen from that number and there is no second trip.",
      },
      {
        term: "The flight number",
        detail: "Rather than the arrival time. With it the driver sees a delay for themselves; without it, a delayed flight becomes a phone call from a landed aircraft — which matters more when the drive ahead is a long one.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Agrigento transfers",
    items: [
      {
        question: "Which airport is nearest to Agrigento?",
        answer: "None of them is near, and that is the honest answer. Palermo, Catania and Trapani all reach the south coast and all of them are a long drive. Palermo is the one we are asked about most. Tell us where you are staying before you book the flight and we will say which makes sense for your trip rather than in general.",
      },
      {
        question: "How long does it take from Palermo or Catania?",
        answer: "We do not publish journey times, and on these routes that is a deliberate decision. The figures in circulation come from route planners that disagree with each other, and on a crossing this long a wrong number costs people their plans. The operator confirms the routing and the timing when we quote.",
      },
      {
        question: "Are the temples in the town?",
        answer: "No. The Archaeological Area of Agrigento is on a ridge outside the town, which itself sits at around 230 metres on the plateau the ancient city was founded on. They are two separate places, and a hotel sold as Agrigento might be at either — or out along the coast. Send the full address.",
      },
      {
        question: "Can you arrange a day at the Valley of the Temples?",
        answer: "Yes, and it is the most requested journey here. A day at the site is planned around the site's own opening hours and the heat rather than around a transfer timetable, particularly in summer. Tell us where you are coming from and whether you want waiting time, and the day is built around that.",
      },
      {
        question: "Is there a bus from Trapani airport?",
        answer: "Yes — Autolinee Lumia runs a scheduled service from Birgi to Agrigento. We mention it because from a small airport, in daylight, travelling light, it may well be the better answer, and we would rather tell you that than pretend a transfer is the only option.",
      },
      {
        question: "Does Agrigento work better as a stop or a day trip?",
        answer: "More often as a stop. From Palermo or Catania it is a long day out and back, and a good many people find it works better as a one-way leg between two bases than as a round trip. Say which you have in mind and we will tell you honestly whether it fits.",
      },
      {
        question: "How much does a transfer to Agrigento cost?",
        answer: "There is no price list, and on these distances an average would be meaningless. The route, the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Ask us before you book the flight",
    body: "Agrigento is the one place in Sicily where that advice is worth something. Tell us where you want to stay and roughly when, and we will say which airport actually makes sense. After that it is the usual: the address, the flight, how many of you there are, and the price in writing before anything is confirmed.",
    cta: "Request a transfer quote",
  },
};
