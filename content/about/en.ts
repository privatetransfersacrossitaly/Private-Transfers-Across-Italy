import type { AboutContent } from "./types";

/**
 * About us, in English.
 *
 * Every sentence here is either a description of what this site does, or a
 * statement of what it declines to claim. There is nothing about a company,
 * because none has been described to this project; nothing about licences,
 * permits, insurance or driver checks, because none has been evidenced; and
 * no response time, because none has been agreed.
 *
 * The one operating claim that exists elsewhere on the site — Bologna's
 * "we work under a valid authorisation for access where one is required" —
 * is deliberately not generalised here. It was written about one city's
 * restricted zone and it stays there.
 */
export const aboutEn: AboutContent = {
  meta: {
    title: "About us",
    description:
      "What this site is for, how a transfer request becomes a quotation, and the rule it is written to: nothing stated that cannot be pointed at.",
  },

  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "About us",
    h1: "Private transfers, quoted one journey at a time",
    lead:
      "This site exists so that a traveller can describe a journey in Italy and get a considered answer about it — what it involves, what it would cost, and where it is genuinely difficult.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "How it works", hash: "how" },
    panel: {
      label: "In short",
      items: [
        {
          term: "What this site does",
          detail:
            "Sets out what is actually known about reaching a place by road — where a vehicle may go, where it may stop, and which authority says so — and takes the details of a journey so that it can be quoted.",
        },
        {
          term: "What it does not do",
          detail:
            "Take bookings. Nothing here reserves a vehicle or holds a date. A journey is booked when it has been confirmed in writing, and not before.",
        },
      ],
    },
  },

  purpose: {
    id: "purpose",
    eyebrow: "The idea",
    heading: "Why the pages read the way they do",
    lead:
      "Most of the difficulty in a private transfer is not the driving. It is knowing what is allowed where.",
    paragraphs: [
      "Italy is full of places a car can reach and then not stop at. Historic centres with timed access, coastal roads that change their rules by season, airport kerbs reserved for particular permits, cruise berths inside working ports where the terminal named on your ticket is not the one the ship docks at. Those rules are published. They are rarely published in one place, rarely in English, and they are the reason a journey that looks simple on a map turns out not to be.",
      "So the pages here are written from what the responsible authority actually publishes — a comune's ordinance, an airport operator's guidance, a port's own notice — and each one says which, with a link you can follow. Where the published record is incomplete, out of date, or contradicts itself, the page says so rather than choosing the more convenient reading.",
      "That is the whole idea, and it is also why the site is slower to make a promise than most. A quotation is only as good as the journey it describes, and a journey can only be described properly by someone who already knows what the far end is like.",
    ],
  },

  how: {
    id: "how",
    eyebrow: "The process",
    heading: "Three steps, and only the last one is a booking",
    lead: "What happens between describing a journey and travelling on it.",
    steps: [
      {
        title: "Send the journey details",
        body:
          "Where you are starting and where you are going, both in full; the date and the time; how many of you there are and how much luggage is coming; and the flight, train or ship number where one applies. The more precisely the journey is described, the more exact the answer can be.",
      },
      {
        title: "Receive a quotation",
        body:
          "A price for that journey, with the arrangement set out alongside it: where the driver meets you at each end, what the quotation covers, and anything about the request that cannot be done as asked.",
      },
      {
        title: "Confirm in writing",
        body:
          "A journey is booked when it has been confirmed in writing. Until that point nothing is reserved and no vehicle is allocated to your date, however far the conversation has gone.",
      },
    ],
    note:
      "The quotation form is the subject of a later phase of this site. Until it is in place, every “Request a quote” link leads to the section of the homepage that sets out what to have ready — nothing on the site sends a message or confirms a booking today.",
  },

  coverage: {
    id: "coverage",
    eyebrow: "Where we are asked to go",
    heading: "Across Italy, and across the awkward parts of it",
    lead:
      "Airport arrivals and departures, journeys between cities, cruise-port connections, railway stations, day trips and selected cross-border routes.",
    paragraphs: [
      "The pages written so far cover six regions and the gateways that serve them. Each hub below leads to the airports, ports, stations and towns around it, and each of those has been written from the same rule: name the authority, link the document, and say plainly where the document runs out.",
    ],
    items: [
      {
        page: "rome",
        label: "Rome and Lazio",
        detail: "Fiumicino, Ciampino, the Civitavecchia cruise port and the city's railway stations.",
      },
      {
        page: "milan",
        label: "Milan and Lombardy",
        detail: "Malpensa, Linate, Bergamo, the stations, and the lake beyond them.",
      },
      {
        page: "venice",
        label: "Venice and the Veneto",
        detail: "Marco Polo, Treviso, Verona, and the point at which a road journey has to end.",
      },
      {
        page: "florence",
        label: "Florence and Tuscany",
        detail: "Peretola, Pisa, and the Val d'Orcia as a day rather than a fare.",
      },
      {
        page: "bologna",
        label: "Bologna and Romagna",
        detail: "Marconi airport, named hotel addresses, Ravenna and its cruise terminal.",
      },
      {
        page: "naples",
        label: "Naples and Campania",
        detail: "Capodichino, the Stazione Marittima, Pompeii, Caserta and the Amalfi Coast towns.",
      },
    ],
    note:
      "This is the list of places with pages written so far, not a list of journeys that are always available. Availability for a particular date, a vehicle suited to your party and its luggage, where a car may actually stop at each end, and the price are all settled for the individual request. None of them is a property of a route.",
  },

  fulfilment: {
    id: "fulfilment",
    eyebrow: "How journeys are arranged",
    heading: "The part worth being plain about",
    label: "Our own statement",
    body:
      "What you are asking for here is a private car with a driver for a stated journey, arranged in advance and priced for that journey rather than by meter. What is settled with you in writing before anything is confirmed is the journey itself: the vehicle for your party and its luggage, where the driver meets you at each end, what the price covers, and anything about the request that cannot be done as asked.",
    paragraphs: [
      "This page names no operator, and it makes no claim about licences, permits, insurance or driver checks. Those are things a traveller is entitled to see stated precisely or not at all, and the rule this site holds to is that nothing appears on it which cannot be pointed at. A page elsewhere on the site states an access authorisation for one city's restricted zone; that statement was written about that zone and it is not a general claim.",
      "Where a restriction affects your journey — a zone a vehicle may enter but not stop in, an airport that publishes its bays by reference to drawings nobody can read, a town whose access charge is in dispute between two ordinances — the relevant page says so, names the authority, and tells you what remains unresolved. You will meet the limits of what is known before you are asked to decide anything.",
    ],
  },

  service: {
    id: "service",
    eyebrow: "What to expect",
    heading: "How we try to answer",
    lead: "Five things that are within this site's power to offer, and are therefore offered.",
    items: [
      "An answer about your journey rather than a rate from a table. Both addresses, the date, the party and the luggage all change it.",
      "The arrangement in writing: where the driver meets you, what the price covers, and what it does not.",
      "A straight answer when something cannot be done as asked — including when the reason is a rule that nobody can get around.",
      "The source named wherever a page states a restriction, with a link, so you can check it rather than take our word for it.",
      "No answer invented to fill a gap. Where the published record is unclear or disputed, you are told that it is.",
    ],
    note:
      "No support hours or response time is claimed here, because none has been set. Cancellation and refund terms are set out in their own policy. Where a page states a rule that carries a date, it also carries the date on which that rule was last verified.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this site",
    lead: "Five short answers about what it is, and what sending a request does.",
    items: [
      {
        question: "What is this website for?",
        answer:
          "Describing a private transfer in Italy and getting it quoted. The destination, airport, cruise-port, station and route pages set out what is known about reaching each place by road — where a vehicle may go, where it may stop, and which authority says so — and the quotation covers the journey you describe.",
      },
      {
        question: "How do I request a private transfer?",
        answer:
          "Send the journey: both addresses in full, the date and time, how many of you there are and how much luggage, and the flight, train or ship number where one applies. The “Request a quote” link on any page leads to the section that lists what to have ready.",
      },
      {
        question: "Is sending a request the same as confirming a booking?",
        answer:
          "No. A request is a question. Nothing is reserved and no vehicle is allocated to your date until the journey has been confirmed in writing, with the arrangement and the conditions set out.",
      },
      {
        question: "Are all routes available on every date?",
        answer:
          "No route is available in advance of being asked about. Availability for a specific date, and whether a vehicle suited to your party and its luggage can be arranged for it, are confirmed when the quotation is prepared.",
      },
      {
        question: "Who confirms the final price and the arrangements?",
        answer:
          "They are settled with you in writing before the journey is confirmed. A page here may tell you what a public authority charges for access to somewhere, but no page quotes a fare: the price belongs to the individual journey rather than to the route.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the journey",
    body:
      "Both addresses, the date and the time, how many of you there are and how much luggage, and the flight, train or ship if one is involved. That is enough to come back with a price for the journey and the arrangement in writing.",
    primaryCta: "Request a quote",
    secondaryCta: {
      label: "How a request becomes a journey",
      page: "home",
      hash: "how-it-works",
    },
    note:
      "Journeys are quoted individually and are subject to confirmation. A quotation request is not a booking.",
  },
};
