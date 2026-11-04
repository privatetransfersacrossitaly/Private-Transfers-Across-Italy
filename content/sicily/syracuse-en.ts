import type { SicilyDestination } from "./types";

/**
 * Syracuse — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Syracuse and Ortygia private transfers. The airport query belongs to
 * Catania's airport page and the port query to Catania's port page; both are
 * introduced and linked here and neither appears in this page's title, H1 or
 * description.
 *
 * ── The English/Italian slug split ────────────────────────────────────────
 * /destinations/sicily/syracuse and /it/destinazioni/sicilia/siracusa. The
 * registry holds both, which is what keeps the hreflang pair correct; this
 * file never constructs a URL.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 54 characters, unbranded, with a call to action. It leads on Syracuse and
 * Ortygia together because the two are searched as one place.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * The south-eastern coastal position, the Province of Syracuse, Ortygia as
 * the historic centre and an island, the population of 115,515 and the 2005
 * World Heritage inscription "together with the Necropolis of Pantalica" are
 * from the city's encyclopedic entry. The two bridges to the island — the
 * Ponte Umbertino and the Ponte Santa Lucia — are named by a travel wiki.
 *
 * Ortygia's limited-traffic zone is real and well attested in the Sicilian
 * press, but the sources contradict each other on which bridge is the
 * permitted entry, on whether the car parks inside the island are reachable
 * during restricted hours, and on the hours themselves — and none we could
 * read is the comune's own current document. The page therefore says the
 * island is restricted and that the stopping point is confirmed with the
 * operator, and publishes no hours, no bridge rule and no car park.
 *
 * Deliberately absent: any road distance or journey time to Catania or its
 * airport. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const syracuseEn: SicilyDestination = {
  meta: {
    // 54 characters.
    title: "Syracuse and Ortigia Private Transfers – Reserve a Car",
    description:
      "Private transfers to Syracuse and Ortigia, the island that is its old centre. How arrivals work where the historic quarter is restricted.",
  },

  hero: {
    eyebrow: "Sicily · Syracuse",
    h1: "Private transfers to Syracuse",
    lead: "Syracuse is two places joined by bridges: a modern city on the south-eastern coast, and Ortygia, the island that is its historic centre and the reason almost everyone comes. Getting to the city is simple. Getting onto the island with luggage is the part worth arranging in advance.",
    primaryCta: "Request a Syracuse transfer quote",
    secondaryCta: "Getting onto Ortigia",
    facts: [
      { label: "Coast", value: "South-eastern" },
      { label: "Historic centre", value: "Ortygia, an island" },
      { label: "World Heritage", value: "Inscribed 2005, with Pantalica" },
      { label: "Population", value: "115,515" },
    ],
  },

  intro: {
    heading: "A city and an island",
    paragraphs: [
      "Syracuse sits on Sicily's south-eastern coast and was inscribed as a World Heritage Site in 2005, together with the Necropolis of Pantalica. Its historic centre is Ortygia — an island, joined to the mainland city by bridges, and where the great majority of the hotels people book actually are.",
      "That division is the whole shape of a transfer here. The mainland city has ordinary streets and ordinary addresses. The island does not: it is small, dense, substantially restricted to traffic, and the rules governing which bridge may be used and when have changed repeatedly. A driver needs to know which side of the water your address is on before the day, not at the bridge.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "Getting to Syracuse",
    lead: "Almost everyone arrives through Catania, by air or by ship. There is no airport closer.",
    options: [
      {
        id: "catania-airport",
        label: "By air",
        body: "Catania–Fontanarossa is the airport for the whole south-east. Its page covers the three terminals, being met and the onward routes. We publish no journey time for the run down: the figures in circulation disagree with each other and we would rather the operator confirm it when quoting than print something that is wrong half the year.",
      },
      {
        id: "catania-cruise-port",
        label: "By ship",
        body: "Syracuse is one of the three things a cruise passenger landing at Catania can realistically do in a day, along with Etna and Taormina — one of them, not all three. The port's page covers the call; the all-aboard time is what the day gets planned backwards from.",
      },
    ],
    note: "Tell us whether your address is on Ortygia or on the mainland. It is the single most useful thing you can say about a Syracuse arrival, and it is the one most often left out because the booking just said Syracuse.",
  },

  kerb: {
    heading: "Getting onto Ortigia",
    lead: "The island is reached by two bridges, and what a vehicle may do once across them depends on rules that change.",
    items: [
      {
        title: "Two bridges, and they are not interchangeable",
        body: "Ortygia is joined to the city by the Ponte Umbertino, the older of the two, and the Ponte Santa Lucia. Which one a vehicle may use, and in which direction, has been changed more than once by the comune. The sources available to us disagree with each other about the current arrangement, so we will not publish a rule here that might be wrong by the time you read it.",
      },
      {
        title: "The island is restricted",
        body: "Access for non-residents is limited, and has been tightened in stages. What this means in practice is that the drop-off point for an Ortygia address is something the operator confirms close to the day, against the rules actually in force then — not something we can print in advance and stand behind.",
      },
      {
        title: "Ask your hotel, and tell us",
        body: "As in Taormina, a property inside a restricted zone is often the only party that can arrange access for a vehicle, usually by registering it in advance. Ask when you book. If the answer is no, the arrival is a drop at the edge and a short walk across the bridge or through the lanes, which is fine — but it is better known beforehand than discovered with the cases out.",
      },
      {
        title: "The mainland city is straightforward",
        body: "Addresses off the island behave normally: ordinary streets, ordinary stopping. The archaeological park and the hotels on that side of the water are easy arrivals. If you have a choice and you are travelling heavy, this is worth knowing before you book the room.",
      },
    ],
  },

  nearby: {
    heading: "Where people go next",
    lead: "The pages for the places most often paired with Syracuse.",
    items: [
      {
        id: "catania",
        body: "North up the coast, and the base most people reach Syracuse through.",
      },
      {
        id: "taormina",
        body: "Further north again, above the coast. A full day from here rather than a half.",
      },
      {
        id: "catania-cruise-port",
        body: "The cruise call that Syracuse is most often visited from.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that decide how a Syracuse arrival ends.",
    items: [
      {
        term: "Island or mainland",
        detail: "Say which. It changes the vehicle, the stopping point and whether there is a walk at the end, and the booking confirmation usually will not tell a driver on its own.",
      },
      {
        term: "The hotel's access arrangement",
        detail: "For an Ortygia address, ask the property whether it can register a vehicle, and tell us the answer. Where it can, the arrival is simple. Where it cannot, we plan for the walk rather than discover it.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. On the island the last stretch may be on foot over a bridge or through narrow lanes, which makes the number of bags a real constraint rather than a formality.",
      },
      {
        term: "The flight number",
        detail: "Rather than the arrival time. With it the driver watches a delay happen; without it, a delayed flight becomes a phone call from a landed aircraft.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Arranged with the operator in advance; in summer they are genuinely in demand.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Syracuse transfers",
    items: [
      {
        question: "Can a car take us onto Ortigia?",
        answer: "It depends on the rules in force and on your hotel. The island is reached by two bridges and access for non-residents is restricted, and the arrangements have been changed more than once. Where a property can register a vehicle in advance, the arrival is straightforward. Where it cannot, the drop-off is at the edge and the last stretch is on foot. The operator confirms which applies close to the day.",
      },
      {
        question: "Which airport do we use for Syracuse?",
        answer: "Catania — there is no airport closer, and it serves the whole south-east. Its page covers the three terminals, being met and the onward journeys. Tell us whether you are staying on Ortygia or on the mainland and the rest follows from that.",
      },
      {
        question: "How long does it take from Catania Airport?",
        answer: "We do not publish a figure. The times in circulation disagree with one another and we would rather have the operator confirm the routing when quoting than print a number that is wrong for half the year. It is a straightforward run; it is simply not one we will put a stopwatch on in advance.",
      },
      {
        question: "Is Ortigia really an island?",
        answer: "Yes — it is the historic centre of Syracuse and it is separated from the mainland city, joined by the Ponte Umbertino and the Ponte Santa Lucia. That is not a technicality. It is why a hotel address on the island and one five minutes away on the mainland are two completely different arrivals.",
      },
      {
        question: "We are on a cruise calling at Catania. Can we see Syracuse?",
        answer: "Yes, and it is one of the three realistic choices from a Catania call — Syracuse, Etna or Taormina. One of them, not all three. Send the ship's name, the date and the all-aboard time, and the day gets planned backwards from the all-aboard. If what you have in mind will not fit, we will say so.",
      },
      {
        question: "What is the World Heritage listing here?",
        answer: "Syracuse was inscribed in 2005 together with the Necropolis of Pantalica. In practice that means two quite separate things to visit: the city and its island, and the rock-cut necropolis inland. They are not a single stop, and a day that intends to cover both is a different piece of work from one that stays in the city.",
      },
      {
        question: "How much does a transfer to Syracuse cost?",
        answer: "There is no price list. The vehicle, the number of passengers, the date and whether the address is on the island all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us which side of the water you are on",
    body: "Island or mainland, the full address, the flight or the ship, and how many of you there are. The arrangement and the price come back in writing — and if the arrival will not work the way you have described it, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
