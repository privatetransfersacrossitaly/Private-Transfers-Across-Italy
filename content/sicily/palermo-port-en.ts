import type { SicilyPortPage } from "./types";

/**
 * Palermo cruise port — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * "Palermo cruise port transfers". The city belongs to the Palermo town
 * page and the airport to the PMO page; both are linked, and neither query
 * appears in this title, H1 or description.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 53 characters, unbranded, with a call to action.
 *
 * ── Sourcing, and its limits ──────────────────────────────────────────────
 * From the Port of Palermo entry: "one of the major ports for passenger
 * traffic in the Mediterranean"; in 2018, 1,986,941 passengers of whom
 * 577,934 were cruise passengers, 3,677 vessel arrivals and 6,189,091
 * tonnes of cargo; the port "stretches for a few kilometers away from
 * Francesco Crispi, near the ancient port of Cala, incorporating areas
 * including Arenella and Acqua Santa"; and the port area includes the
 * Fincantieri shipyard with two graving docks.
 *
 * Every passenger figure on that page is from 2018 and is printed here with
 * its year attached. Nothing is described as current traffic.
 *
 * No port authority is named. The 2016 reform, later sources and the
 * present decree do not agree on which authority runs which Sicilian port,
 * and we could not read the current document. See
 * docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials, and no claim to any arrangement with a cruise line.
 */

export const palermoPortEn: SicilyPortPage = {
  meta: {
    // 53 characters.
    title: "Palermo Cruise Port Transfers – Reserve a Private Car",
    description:
      "Private transfers from Palermo's cruise quays: shore days to Monreale and Cefalù, runs to the airport, and why the all-aboard time governs everything.",
  },

  hero: {
    eyebrow: "Sicily · Palermo cruise port",
    h1: "Private transfers from Palermo cruise port",
    lead: "Palermo's is a working port rather than a cruise terminal with a city attached. It handles ferries, cargo and a shipyard alongside the cruise calls, and it stretches for a few kilometres along the shore — which is why the quay your ship is given is not a detail a driver can guess at.",
    primaryCta: "Request a transfer from the cruise port",
    secondaryCta: "A day ashore",
    facts: [
      { label: "Port", value: "Porto di Palermo" },
      { label: "Passengers", value: "1,986,941 in 2018" },
      { label: "Of which cruise", value: "577,934 in 2018" },
      { label: "Inside the port", value: "The Fincantieri shipyard" },
    ],
  },

  identity: {
    heading: "A working port",
    paragraphs: [
      "The Port of Palermo is described by its own entry as one of the major ports for passenger traffic in the Mediterranean. The most recent figures published for it are from 2018: 1,986,941 passengers that year, of whom 577,934 were cruise passengers, across 3,677 vessel arrivals, alongside 6,189,091 tonnes of cargo. Those are seven-year-old numbers and we print them with their year rather than as a description of today.",
      "It stretches for a few kilometres along the shore from Francesco Crispi, near the ancient port of the Cala, taking in areas including Arenella and Acqua Santa. The port area also contains the Fincantieri shipyard and its two graving docks. The practical consequence of all that is simple: this is a large, industrial, multi-purpose port, and where a ship berths varies.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles, we do not employ the drivers directly, and we have no arrangement with any cruise line. You tell us the ship and the day, we arrange it with an operator who covers that work, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at the quayside",
    lead: "Meeting a ship is not like meeting a flight. There is no arrivals hall, the berth can change, and the clock runs the other way.",
    steps: [
      {
        title: "Send the ship's name and the date",
        body: "That is the equivalent of a flight number here. With it an operator can establish which quay you are likely to be on; without it, a driver is guessing at a port several kilometres long.",
      },
      {
        title: "Drivers wait at the terminal, not at the ship",
        body: "The quayside itself is a controlled area. A driver meets you at the terminal building, which is normal everywhere and still surprises people expecting to be collected at the gangway.",
      },
      {
        title: "Agree what the board says",
        body: "A name board with a surname spelled as you expect it. In a crowd disembarking all at once, this matters more than it does at a quiet airport.",
      },
      {
        title: "Allow for disembarkation",
        body: "Getting several thousand people off a ship takes time, and your allotted time is not the ship's arrival time. Tell us what the ship has told you rather than the scheduled arrival.",
      },
    ],
    note: "A ship's name and a date do here what a flight number does at an airport: they let somebody check reality instead of relying on a plan.",
  },

  shore: {
    heading: "A day ashore from Palermo",
    lead: "Most people calling here have one day and a hard deadline. These are the journeys that genuinely fit, and the page is more useful if it also says what does not.",
    allAboard: "The only time that matters is the all-aboard time, and it is earlier than the departure time printed on your ticket. Send it, and the day is planned backwards from it rather than forwards from the arrival. If what you want to see will not fit inside it, we would rather tell you while you can still change the plan than drive you somewhere you will have to leave immediately.",
    options: [
      {
        id: "palermo",
        note: "The city itself: the old quarters, the markets and the Arab-Norman monuments the World Heritage listing is named for. The shortest option and the one with the most margin against the clock.",
      },
      {
        id: "cefalu",
        note: "East along the coast, about 70 km by the published figure. A real day out rather than a half-day, and the one where the all-aboard time does most of the deciding.",
      },
      {
        id: "sicily",
        note: "The regional page, if you are weighing this call against others on the same itinerary.",
      },
    ],
    footnote: "Monreale, whose cathedral belongs to the same World Heritage listing as Palermo's monuments and Cefalù's, sits on the hill above the city and is the most requested half-day from this port. We publish no journey times for any of these: the figures in circulation disagree, and against a fixed deadline a wrong one is worse than none. The operator confirms the routing and the margin when we quote.",
  },

  airports: {
    heading: "Port to airport",
    lead: "The other half of the work here: people joining or leaving a ship with a flight at the other end.",
    items: [
      {
        id: "palermo-airport",
        note: "Falcone Borsellino, about 35 km west-north-west of the city. Send the flight as well as the ship — a transfer between two fixed times needs both ends, and we will say honestly whether the gap is comfortable.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "What decides whether a day ashore works.",
    items: [
      {
        term: "The all-aboard time",
        detail: "Not the departure time. It is earlier, it is the one the day is built around, and it is the single most useful thing you can send us.",
      },
      {
        term: "The ship's name and date",
        detail: "They do the work a flight number does. The port is several kilometres long and the berth varies, so this is how an operator finds you.",
      },
      {
        term: "How many of you",
        detail: "Ships produce groups. The vehicle is chosen from the number, and a group of nine is a different piece of work from a group of four.",
      },
      {
        term: "Mobility",
        detail: "Say in advance if anyone has difficulty with steps or slopes. Palermo's old quarters and Monreale's hill both have them, and it changes which plan is worth arranging.",
      },
      {
        term: "Luggage, if you are joining or leaving",
        detail: "A day ashore has none; an embarkation or disembarkation transfer has all of it. Count everything that will not fold.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Palermo cruise port transfers",
    items: [
      {
        question: "Where will the driver meet us?",
        answer: "At the terminal, not at the ship's side — the quayside is a controlled area. Send the ship's name and the date so the right terminal and gate can be arranged. Palermo's port runs for several kilometres and handles ferries, cargo and a shipyard as well as cruise calls, so the berth genuinely varies.",
      },
      {
        question: "What can we actually do in a day here?",
        answer: "The city comfortably, Monreale on the hill above it as a half-day, or Cefalù along the coast as a full one. Not all of them. Send the all-aboard time and we will tell you what fits — and say so plainly if what you have in mind does not.",
      },
      {
        question: "Why do you keep asking for the all-aboard time?",
        answer: "Because it is earlier than the departure time on your ticket, and it is the deadline the whole day is built backwards from. A plan built on the departure time has you arriving at the gangway after it has closed. It is the one piece of information we will not plan without.",
      },
      {
        question: "Can you take us to Cefalù and back before the ship leaves?",
        answer: "Often, and it depends entirely on your hours ashore. Cefalù is about 70 km east of Palermo by the published figure, which makes it a real day out rather than a quick excursion. Send the all-aboard time and we will say whether the margin is comfortable rather than quote something tight and hope.",
      },
      {
        question: "Can you take us from the port to the airport?",
        answer: "Yes, and it is a regular request in both directions. Palermo's airport is about 35 km west-north-west of the city. Send the flight and the ship: a transfer between two fixed times needs both ends, and we will tell you honestly if the connection is uncomfortable.",
      },
      {
        question: "Are those passenger figures current?",
        answer: "No, and we would rather say so. The most recent published figures we could find for this port are from 2018 — 1,986,941 passengers, of whom 577,934 were cruise passengers. We print the year with the number rather than describe seven-year-old traffic as today's.",
      },
      {
        question: "How much does a transfer from the cruise port cost?",
        answer: "There is no price list. A half-day to Monreale and a full day to Cefalù are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the day and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No, and we have no arrangement with any cruise line. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the ship, the date and the all-aboard time",
    body: "Those three settle a day ashore. Add how many of you there are and anything about mobility, and the arrangement and the price come back in writing — and if the day you have described will not fit inside your hours, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
