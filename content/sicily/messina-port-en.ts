import type { SicilyPortPage } from "./types";

/**
 * Messina cruise port — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * "Messina cruise port transfers", and the one thing that makes this call
 * different from the other two: almost nobody who lands here stays. Messina
 * is overwhelmingly a day call, and the day is nearly always Taormina or
 * Etna. The page is built around that rather than around the city.
 *
 * Messina itself has no destination page in this cluster, which is a
 * deliberate consequence of the approved scope: the seven destinations were
 * chosen for where people actually go, and Messina is a place people pass
 * through. The page therefore links Taormina and Catania rather than a
 * Messina town page that does not exist.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 50 characters, unbranded, with a call to action.
 *
 * ── Sourcing, and its limits ──────────────────────────────────────────────
 * From the Port of Messina entry: the port "opens on the western shore of
 * the Strait of Messina"; it is "one of the largest and most important in
 * the Mediterranean for cruise ships, growing from 260,000 passengers in
 * 2006 to 405,000 in 2009"; and it is "linked by rail through Messina
 * Centrale and Messina Marittima railway stations".
 *
 * Those passenger figures are from 2006 and 2009 and are printed with their
 * years. We do not repeat the "one of the largest and most important"
 * characterisation as a current claim, because the only numbers supporting
 * it are sixteen years old.
 *
 * No port authority is named: the 2016 reform places the Strait ports under
 * a separate authority from Sicily's, later sources differ, and we could
 * not read the current decree. The entry says nothing about the Strait
 * crossing, train ferries or Villa San Giovanni, so neither does this page.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials, no cruise-line arrangements.
 */

export const messinaPortEn: SicilyPortPage = {
  meta: {
    // 50 characters.
    title: "Messina Cruise Port Transfers – Book a Private Car",
    description:
      "Private transfers from Messina's cruise quays. Nearly everyone landing here is going to Taormina or Etna for the day and back before all-aboard.",
  },

  hero: {
    eyebrow: "Sicily · Messina cruise port",
    h1: "Private transfers from Messina cruise port",
    lead: "Messina is a day call, not a destination. The port opens on the western shore of the Strait, and almost everyone who steps off a ship here is heading somewhere else — Taormina up on its terrace, or Etna behind the coast — and coming back the same afternoon. That makes this the most deadline-driven page in the cluster.",
    primaryCta: "Request a transfer from the cruise port",
    secondaryCta: "A day ashore",
    facts: [
      { label: "Port", value: "Porto di Messina" },
      { label: "Position", value: "Western shore of the Strait" },
      { label: "Cruise passengers", value: "405,000 in 2009" },
      { label: "Usual day ashore", value: "Taormina or Etna" },
    ],
  },

  identity: {
    heading: "A port people pass through",
    paragraphs: [
      "The Port of Messina opens on the western shore of the Strait of Messina and is linked by rail through the Messina Centrale and Messina Marittima stations. Its own entry describes it as an important Mediterranean cruise port, with traffic growing from 260,000 passengers in 2006 to 405,000 in 2009 — the most recent figures published for it. Sixteen-year-old numbers are printed here with their years rather than offered as a picture of today.",
      "What matters for a transfer is not the port's size but the shape of a call here. This is a stop on an itinerary rather than a place people stay, and the overwhelming majority of visitors have a single day with a fixed deadline at the end of it. Every decision on this page follows from that.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles, we do not employ the drivers directly, and we have no arrangement with any cruise line. You tell us the ship and the day, we arrange it with an operator who covers that work, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  meeting: {
    heading: "Being met at the quayside",
    lead: "The mechanics are the same as at any port. What differs is how little slack there is around them when the whole day is a round trip.",
    steps: [
      {
        title: "Send the ship's name and the date",
        body: "They do the work a flight number does: they let an operator confirm what is actually happening rather than rely on a printed schedule.",
      },
      {
        title: "Drivers wait at the terminal",
        body: "Not at the ship's side — the quayside is a controlled area. Normal everywhere, and worth knowing before you are looking for someone at the gangway.",
      },
      {
        title: "Say where the day is going",
        body: "Taormina and Etna are different journeys with different margins. The destination is the booking here, because the return leg is half the work.",
      },
      {
        title: "Give the all-aboard time first",
        body: "Not last. At a day call it is not a detail to confirm later — it is the number the entire arrangement is built from.",
      },
    ],
    note: "At a port where nearly every job is a round trip against a deadline, the all-aboard time is more important than the pickup time. It is the only fixed point in the day.",
  },

  shore: {
    heading: "A day ashore from Messina",
    lead: "Two journeys account for nearly everything asked for here, and both are round trips with a hard stop at the end.",
    allAboard: "The all-aboard time is earlier than the departure time printed on your ticket, and at a day call it governs everything: when you leave, how long you get where you are going, and when the car turns around. Send it with your enquiry rather than after. If the day you want will not fit inside it with a sensible margin, we will say so — a day out that gets you back late is not a service we want to have sold you.",
    options: [
      {
        id: "taormina",
        note: "The usual reason people land here. The town is about 250 m above the sea with a restricted historic centre, so the arrival takes longer than the drive suggests — which matters doubly when the return leg is already booked by the ship.",
      },
      {
        id: "catania",
        note: "South along the coast, for the baroque centre or as the starting point for Etna. Further than Taormina and a fuller day.",
      },
      {
        id: "catania-cruise-port",
        note: "If your itinerary calls at both, worth comparing: Catania's is a central port with more usable hours, so it may be the better call to spend on a longer journey.",
      },
      {
        id: "sicily",
        note: "The regional page, for how the island fits together and what else is within reach.",
      },
    ],
    footnote: "Etna is the other common request and the one that depends least on arrangement: journeys reach the visitor areas on the mountain, and what is possible on a given day is decided by conditions rather than by a booking. We publish no journey times for any of these. Against a fixed deadline a wrong figure is worse than none, and the operator confirms the routing and the margin when we quote.",
  },

  practical: {
    heading: "Practical detail",
    lead: "Short, and weighted entirely towards the clock.",
    items: [
      {
        term: "The all-aboard time",
        detail: "First, not last. It is the only fixed point in a day call and everything else is arranged around it.",
      },
      {
        term: "One destination",
        detail: "Taormina or Etna or Catania. Combining two on a day call from here is rarely realistic, and we will tell you when it is not.",
      },
      {
        term: "The ship's name and date",
        detail: "So an operator can work from what is happening rather than from a schedule.",
      },
      {
        term: "Taormina's restricted centre",
        detail: "If the day is Taormina, the limited-traffic zone decides where the vehicle stops and how much walking is involved. Worth factoring into the hours you have.",
      },
      {
        term: "Mobility",
        detail: "Say in advance if anyone has difficulty with slopes or steps. Taormina has both, and on a timed day it changes what is worth attempting.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Messina cruise port transfers",
    items: [
      {
        question: "We are calling at Messina. Can we see Taormina?",
        answer: "Yes — it is the most common reason people land here at all. Send the ship's name, the date, your disembarkation time and the all-aboard time. The day is built backwards from the all-aboard, and we will tell you honestly whether the margin is comfortable or tight.",
      },
      {
        question: "Why does this page keep talking about the deadline?",
        answer: "Because Messina is a day call rather than a destination. Nearly every journey from this quayside is a round trip with a fixed stop at the end of it, so the all-aboard time is not a detail to confirm later — it is the number the whole arrangement is built from.",
      },
      {
        question: "Can we do Taormina and Etna in the same day?",
        answer: "Rarely, from here. Both are real journeys with real return legs, and a day call does not usually hold both with a safe margin. Send your hours ashore and we will give you a straight answer for your call rather than a general rule.",
      },
      {
        question: "Where will the driver meet us?",
        answer: "At the terminal, not at the ship's side, because the quayside is a controlled area. Send the ship's name and date so the meeting point is arranged against what is actually happening that morning rather than against a printed schedule.",
      },
      {
        question: "Is there a Messina page on this site?",
        answer: "No, and that is deliberate rather than an omission. The seven Sicilian destinations we cover were chosen for where people actually travel to, and Messina is a place most visitors pass through. This port page links Taormina and Catania, which is where days ashore from here actually go.",
      },
      {
        question: "How busy is this port?",
        answer: "The most recent published figures we could find are old: cruise traffic grew from 260,000 passengers in 2006 to 405,000 in 2009, and nothing more recent appears in the source. We print the years with the numbers rather than describe sixteen-year-old traffic as current.",
      },
      {
        question: "How much does a transfer from the cruise port cost?",
        answer: "There is no price list. A round trip to Taormina and a day towards Etna are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the day and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No, and we have no arrangement with any cruise line. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Give us the all-aboard time first",
    body: "At a day call it is the only fixed point there is. Send it with the ship's name, the date, where you would like to go and how many of you there are. The arrangement and the price come back in writing — and if the day will not fit with a sensible margin, we will say so rather than sell it to you.",
    cta: "Request a transfer quote",
  },
};
