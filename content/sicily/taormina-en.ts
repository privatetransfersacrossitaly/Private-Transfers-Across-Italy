import type { SicilyDestination } from "./types";

/**
 * Taormina — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Taormina private transfers, and the arrival problem that is particular to
 * it: a town 250 metres up a hillside with a restricted centre, where the
 * question is never the drive but the last few hundred metres. It does not
 * own "Catania Airport transfers" — that is the airport's page — and it does
 * not own Messina's port query.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 54 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Position (a comune in the Metropolitan City of Messina, on the east
 * coast), the old town "about 250 metres above the sea", the Norman castle
 * rock "about 150 metres higher", the ancient Greek theatre, Isola Bella
 * "just south of Taormina ... a nature reserve", Giardini Naxos "further
 * south, beside a bay", the aerial tramway "built in 1992" serving the
 * beaches including Isola Bella, the approach "via highways from Messina in
 * the north and Catania in the south", the "approximately a 45-minute drive
 * from ... Mount Etna" and the population of 10,440 (31 May 2025) are all
 * from the town's encyclopedic entry.
 *
 * The limited-traffic zone is attested by Italian regional press and
 * motoring sources rather than an official document we could read, and they
 * disagree on enforcement and hours. So the page states that the centre is
 * restricted and that the permitted stopping point depends on the property —
 * which is true however the rules are currently applied — and publishes no
 * hours, no camera status and no car-park capacity.
 *
 * Deliberately absent: the name of the railway station (attested only in a
 * page summary we could not verify), the cable car's frequency and journey
 * time (travel sources only), and any road distance to Catania, Messina or
 * Etna. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const taorminaEn: SicilyDestination = {
  meta: {
    // 54 characters.
    title: "Taormina Private Transfers and Coast Runs – Book a Car",
    description:
      "Private transfers to Taormina, 250 m above the Ionian coast. Where a car can actually stop, and the runs to Isola Bella and Giardini Naxos below.",
  },

  hero: {
    eyebrow: "Sicily · Taormina",
    h1: "Private transfers to Taormina",
    lead: "Taormina sits about 250 metres above the sea on the east coast, with a Greek theatre at the top and the beaches a long way below. Everything that makes it worth coming to is also what makes arriving here awkward: the town is high, the centre is restricted, and the last few hundred metres are the part nobody plans for.",
    primaryCta: "Request a Taormina transfer quote",
    secondaryCta: "Where a car can stop",
    facts: [
      { label: "Above the sea", value: "About 250 m" },
      { label: "Province", value: "Metropolitan City of Messina" },
      { label: "Usual airport", value: "Catania (CTA)" },
      { label: "Population", value: "10,440 (2025)" },
    ],
  },

  intro: {
    heading: "A town on a terrace",
    paragraphs: [
      "Taormina is a comune in the Metropolitan City of Messina, on Sicily's east coast, and it is built on a shelf of hillside about 250 metres above the Ionian. The Greek theatre people come for sits at the top of the town, and the rock with the Norman castle on it stands about 150 metres higher again. Roads reach it from Messina in the north and Catania in the south.",
      "That height is the whole character of a Taormina transfer. The drive up is ordinary; the arrival is not. The historic centre is a limited-traffic zone, Corso Umberto is largely given over to people on foot, and whether a vehicle can reach a particular door depends on the property rather than on the driver.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "Getting to Taormina",
    lead: "Most people arrive at Catania and drive up the coast. A good number arrive by ship at Messina and come down it.",
    options: [
      {
        id: "catania-airport",
        label: "By air",
        body: "Catania–Fontanarossa is the airport for Taormina, and the approach runs up the coast from the south. The airport page covers being met there, the terminals and the onward routes. We publish no journey time for the run up: the figures in circulation disagree and the coast road in August is not the coast road in March.",
      },
      {
        id: "messina-cruise-port",
        label: "By ship",
        body: "Messina is the cruise call for Taormina, and most people who land there are coming here for the day and going back the same afternoon. That makes the all-aboard time the only time that matters, and it is what the day gets planned backwards from.",
      },
    ],
    note: "Whichever way you arrive, tell us the name of the hotel as well as the street. In Taormina that is not politeness — it decides where the vehicle is allowed to stop, and the property is usually the only one who can arrange otherwise.",
  },

  kerb: {
    heading: "Where a car can actually stop",
    lead: "This is the Taormina question, and it has a real answer rather than a reassuring one.",
    items: [
      {
        title: "The historic centre is restricted",
        body: "Access to the old town is limited, and the main street through it is largely pedestrian. Local rules on hours and enforcement have changed more than once and the sources available to us disagree about the current state of them, so we will not print a timetable here. What is consistent is that a vehicle cannot simply be driven to a door inside the centre and left.",
      },
      {
        title: "Hotels can often arrange access",
        body: "Properties inside the restricted area can frequently register a vehicle in advance with the authorities so that it is permitted to approach. This is arranged by the hotel, not by the driver and not by us. Ask them when you book, and tell us what they say — it is the single thing that most changes how a Taormina arrival ends.",
      },
      {
        title: "Otherwise, the edge and a short walk",
        body: "Where access cannot be arranged, the drop-off is at the edge of the restricted zone and the last stretch is on foot, sometimes uphill and usually with steps somewhere. A driver who knows which approach is nearest your street saves the worst version of that walk. Luggage is the thing to think about here, not distance.",
      },
      {
        title: "The beaches are below, not beside",
        body: "Isola Bella, the nature reserve just south of the town, and the shore beneath it are reached by an aerial tramway built in 1992, or by road down the hillside. A property described as being in Taormina may be at sea level rather than in the town, which changes the arrival completely. The address settles it; the town name does not.",
      },
    ],
  },

  going: {
    heading: "What people ask us for from Taormina",
    lead: "Taormina is a base for the whole eastern corner, and the requests are consistent.",
    items: [
      {
        name: "Mount Etna",
        body: "The town's entry puts it at approximately a 45-minute drive from the volcano — one of the very few journey times in Sicily that has a published source behind it, which is why it appears here. What is possible on any given day still depends on conditions on the mountain.",
      },
      {
        name: "Isola Bella and the shore",
        body: "The nature reserve just below the town, reached by the aerial tramway or by road. Often a half-day, and frequently combined with the drive rather than booked on its own.",
      },
      {
        name: "Giardini Naxos",
        body: "The seaside resort further south, beside its bay. A good many people staying 'in Taormina' are in fact staying here, at sea level, which makes for a much simpler arrival than the town itself.",
      },
      {
        name: "Syracuse and the baroque south",
        body: "Down the coast past Catania. A full day rather than a half, and a journey where an arranged car and a driver who has made it before is worth more than the map suggests.",
      },
    ],
  },

  nearby: {
    heading: "Where people go next",
    lead: "The pages for the places most often paired with Taormina.",
    items: [
      {
        id: "catania",
        body: "The city below and to the south, and the base most Taormina visitors arrive through.",
      },
      {
        id: "syracuse",
        body: "Further down the coast, for Ortygia and the archaeological city. A full day out.",
      },
      {
        id: "messina-cruise-port",
        body: "The cruise call for Taormina, for anyone arriving by ship for the day.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that decide how a Taormina arrival actually ends.",
    items: [
      {
        term: "The hotel's own access arrangement",
        detail: "Ask the property whether it can register a vehicle for access, and tell us the answer. It is the most useful single piece of information for an arrival here, and it is the one most often left until the driver is already at the barrier.",
      },
      {
        term: "Town or shore",
        detail: "A great many properties described as being in Taormina are at sea level below it. Send the full address so the driver is going to the right altitude, not just the right name.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. If the last stretch turns out to be on foot it will be on a slope and quite possibly on steps, so the number of bags matters more here than in a flat city.",
      },
      {
        term: "The flight number",
        detail: "Rather than the arrival time. With it the driver sees a delay for themselves; without it, a delayed flight becomes a phone call from a landed aircraft.",
      },
      {
        term: "Mobility",
        detail: "Tell us in advance if anyone in the party has difficulty with slopes or steps. It changes which stopping point is worth arranging, and it is better dealt with before the day than at the kerb.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Taormina transfers",
    items: [
      {
        question: "Can a car drive us to our hotel in Taormina?",
        answer: "Sometimes, and it depends on the hotel rather than on the driver. The historic centre is a limited-traffic zone, and properties inside it can frequently register a vehicle in advance so that it is permitted to approach. Ask yours whether it can, and tell us the answer — where it cannot, the drop-off is at the edge of the zone and the last stretch is on foot.",
      },
      {
        question: "Which airport do we fly into for Taormina?",
        answer: "Catania. The road up the coast from the south is the usual approach, and the other road reaches the town from Messina in the north. Catania's airport page covers arrivals there, the three terminals and being met.",
      },
      {
        question: "How long does the drive from Catania Airport take?",
        answer: "We do not publish a figure, and that is a decision rather than an evasion: the times in circulation disagree with one another and the coast road in August is not the coast road in March. The operator confirms the routing and the timing when we quote.",
      },
      {
        question: "Can you arrange a day on Etna from Taormina?",
        answer: "Yes, and it is the most requested journey from the town. Taormina's own entry describes it as approximately a 45-minute drive from the volcano, which is a published figure rather than our estimate. What is actually possible on the mountain on a given day depends on conditions, and we will say what an operator can do rather than promise a view.",
      },
      {
        question: "Is our hotel in Taormina or down at the beach?",
        answer: "It is worth checking, because a surprising number of properties sold as Taormina are at sea level below the town rather than in it. The two are connected by an aerial tramway built in 1992 and by the road down the hillside, but they are completely different arrivals. Send the full address and the question answers itself.",
      },
      {
        question: "We are on a cruise calling at Messina. Can we see Taormina?",
        answer: "Yes — it is the most common reason people land at Messina at all. Send the ship's name, the date, the arrival time and the all-aboard time, and the day gets built backwards from the all-aboard. If what you want to fit into the hours ashore is not realistic, we will say so while you can still change it.",
      },
      {
        question: "How much does a transfer to Taormina cost?",
        answer: "There is no price list. The vehicle, the number of passengers, the date and where exactly in or below the town you are going all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the hotel, the address and what it told you",
    body: "Taormina is the one place in Sicily where the property's own access arrangement decides how the journey ends. Send that along with the flight or the ship and how many of you there are. The arrangement and the price come back in writing — and if the arrival will not work the way you have described it, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
