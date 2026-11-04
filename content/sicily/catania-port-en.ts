import type { SicilyPortPage } from "./types";

/**
 * Catania cruise port — English.
 *
 * ── The thinnest-sourced page in the cluster, and it says so ──────────────
 * There is no encyclopedic article for this port: en.wikipedia.org's
 * "Port of Catania" returns 404. What exists is Italian trade press, which
 * reports a city port roughly ten minutes' walk from the historic centre,
 * cruise berths increased to three when work on molo 25 finished in July
 * 2025, and a terminal concession held by Catania Cruise Terminal, part of
 * Global Ports Holding.
 *
 * Those are trade reports rather than official or encyclopedic sources, so
 * this page uses only the proximity claim — which several sources agree on
 * and which is the one fact that changes what a visitor can do — and
 * attributes it rather than asserting it. No berth count, no concession
 * holder, no walking time in minutes, no passenger figures: none of those
 * could be corroborated well enough to print.
 *
 * The result is a shorter page than Palermo's or Messina's. That is the
 * correct outcome of thin sourcing, not a defect to be padded out.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 53 characters, unbranded, with a call to action.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials, no cruise-line arrangements.
 */

export const cataniaPortEn: SicilyPortPage = {
  meta: {
    // 53 characters.
    title: "Catania Cruise Port Transfers – Book a Private Driver",
    description:
      "Private transfers from Catania's cruise quays. A central port, so Etna, Taormina or Syracuse are each possible in a day — one of them, not all three.",
  },

  hero: {
    eyebrow: "Sicily · Catania cruise port",
    h1: "Private transfers from Catania cruise port",
    lead: "Catania's is a city port: the quays sit close to the historic centre rather than in an industrial zone outside it. That one fact makes this the most generous cruise call in Sicily for a day ashore — Etna, Taormina and Syracuse are each genuinely possible from here. Each of them. Not all three.",
    primaryCta: "Request a transfer from the cruise port",
    secondaryCta: "A day ashore",
    facts: [
      { label: "Port", value: "Porto di Catania" },
      { label: "Position", value: "Beside the historic centre" },
      { label: "Nearest airport", value: "Fontanarossa (CTA)" },
      { label: "Behind the city", value: "Mount Etna" },
    ],
  },

  identity: {
    heading: "A city port",
    paragraphs: [
      "Catania's port sits beside the city rather than apart from it, and trade sources describe the cruise quays as a short walk from the historic centre. We are attributing that rather than stating it flatly, because — unusually for this cluster — there is no encyclopedic entry for this port to check it against, and we would rather tell you where a claim comes from than pretend to a certainty we do not have.",
      "What is not in doubt is what the position means for you. A central port, a baroque grid that takes traffic well, and quick roads out of the city in three directions make this the Sicilian call with the most usable hours ashore. The constraint here is not getting out of the port; it is choosing between three good options and not attempting all of them.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles, we do not employ the drivers directly, and we have no arrangement with any cruise line. You tell us the ship and the day, we arrange it with an operator who covers that work, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at the quayside",
    lead: "Short and simple here, which is the advantage of a central port.",
    steps: [
      {
        title: "Send the ship's name and the date",
        body: "They do the job a flight number does at an airport: they let an operator check what is actually happening rather than work from a schedule.",
      },
      {
        title: "Drivers wait at the terminal",
        body: "Not at the ship's side — the quayside is a controlled area. That is normal at every port and still catches people out.",
      },
      {
        title: "Tell us the plan, not just the pickup",
        body: "Whether the day is Etna, Taormina or Syracuse changes the vehicle, the timing and the margin. The destination is the booking here; the pickup is a detail of it.",
      },
      {
        title: "Allow for disembarkation",
        body: "Your allotted time off the ship is not the ship's arrival time. Use what the ship has told you.",
      },
    ],
    note: "At a central port the margin against the clock is better than almost anywhere in Sicily — which is exactly why people overreach here.",
  },

  shore: {
    heading: "A day ashore from Catania",
    lead: "Three real options, and the honest advice is to pick one. The reason this page exists is to stop people attempting two.",
    allAboard: "The all-aboard time is the only time that matters, and it is earlier than the departure printed on your ticket. Send it and the day is built backwards from it. Because this port is central and the roads out are quick, people routinely ask whether they can fit in two of the three below. We will tell you honestly when the answer is no, which it usually is.",
    options: [
      {
        id: "catania",
        note: "The city itself: the late-baroque centre inscribed as part of the Late Baroque Towns of the Val di Noto, a short walk from the quays. The option with the most margin and the least arrangement needed.",
      },
      {
        id: "taormina",
        note: "North up the coast, on its terrace above the sea. The most requested day from this port, and the one where the restricted centre makes the arrival more involved than the drive.",
      },
      {
        id: "syracuse",
        note: "South, for Ortygia and the archaeological city. A full day rather than a half, and the furthest of the three.",
      },
      {
        id: "sicily",
        note: "The regional page, if you are weighing this call against others on the same itinerary.",
      },
    ],
    footnote: "Etna is the fourth option and the one that depends least on us: journeys reach the visitor areas on the mountain, and what is possible on a given day is decided by conditions rather than by a booking. We publish no journey times for any of these. The figures in circulation disagree, and against a fixed deadline a wrong one is worse than none at all.",
  },

  airports: {
    heading: "Port to airport",
    lead: "Short, because the airport is close to the city too.",
    items: [
      {
        id: "catania-airport",
        note: "Fontanarossa, about 4.3 km south-west of the city. One of the shortest port-to-airport runs anywhere in Sicily. Send the flight and the ship, and say which terminal if you know it — there are three.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "Short list, because this is a straightforward port.",
    items: [
      {
        term: "The all-aboard time",
        detail: "Earlier than the departure time, and the deadline everything is planned backwards from.",
      },
      {
        term: "One destination, not two",
        detail: "Say which of Etna, Taormina or Syracuse you want. If you ask for two we will tell you whether it fits, and most of the time it does not.",
      },
      {
        term: "The ship's name and date",
        detail: "They let an operator confirm the berth and the timing rather than work from a printed schedule.",
      },
      {
        term: "Etna conditions",
        detail: "The mountain decides on the day, not the booking. We say what an operator can do rather than promise a view.",
      },
      {
        term: "Taormina's restricted centre",
        detail: "If the day is Taormina, the town's limited-traffic zone shapes where the vehicle can stop. The Taormina page covers it.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Catania cruise port transfers",
    items: [
      {
        question: "Can we fit in both Taormina and Etna in one day?",
        answer: "Usually not, and we would rather say so now than at the kerb. The port's position makes a single destination comfortable and two a stretch against an all-aboard deadline. Send your hours ashore and we will give you a straight answer for your particular call rather than a general one.",
      },
      {
        question: "How close is the port to the city?",
        answer: "Close — the quays are beside the historic centre rather than in an industrial zone outside it. We are describing that from trade sources rather than an encyclopedic one, because no encyclopedic entry for this port exists to check against, and we would rather attribute the claim than overstate it.",
      },
      {
        question: "Where will the driver meet us?",
        answer: "At the terminal, not at the ship's side — the quayside is a controlled area, as at every port. Send the ship's name and the date so the meeting point can be arranged against what is actually happening on the day.",
      },
      {
        question: "Can you take us up Etna?",
        answer: "Transfers go to the visitor areas on the mountain. What is possible on any given day depends on conditions up there, and we will tell you what an operator can actually do rather than promise a summit or a view. Against a ship's deadline that caveat matters more than usual.",
      },
      {
        question: "Can you take us from the port to the airport?",
        answer: "Yes, and it is one of the shortest such runs in Sicily — Fontanarossa is about 4.3 km south-west of the city. Send the flight and the ship, and say which of the three terminals if you know it.",
      },
      {
        question: "How many passengers does this port handle?",
        answer: "We do not publish a figure. Unlike Palermo and Messina, this port has no encyclopedic entry with traffic statistics, and we were not able to corroborate the numbers in circulation well enough to print them. It is a gap in what we can tell you, and we would rather name it than fill it with a guess.",
      },
      {
        question: "How much does a transfer from the cruise port cost?",
        answer: "There is no price list. A walk-distance drop in the city and a full day to Syracuse are not comparable pieces of work. Describe the day and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No, and we have no arrangement with any cruise line. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us which one you want",
    body: "Etna, Taormina or Syracuse — plus the ship, the date and the all-aboard time. The arrangement and the price come back in writing, and if the day you have described will not fit inside your hours ashore, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
