import type { HomeContent } from "./types";

/**
 * The English homepage.
 *
 * ── What is deliberately absent ────────────────────────────────────────────
 * No prices, journey times, distances, response times, fleet, vehicle
 * classes, "24/7", guaranteed availability, reviews, customer counts, awards,
 * office or telephone number. None of that has been verified, and several
 * would be promises the service has not made. Where something depends on
 * confirmation, the copy says so in the same breath rather than in small
 * print at the bottom.
 *
 * Airport names and IATA codes were checked against each airport's own
 * article before being listed.
 */
export const en: HomeContent = {
  meta: {
    title: "Private Transfers Across Italy | Airports, Cities, Cruise Ports",
    description:
      "Request a private car and driver in Italy: airport arrivals and departures, journeys between cities, cruise-port connections, day trips and selected cross-border routes. Quoted journey by journey.",
  },

  hero: {
    eyebrow: "Private car and driver — Italy",
    h1: "Private transfers across Italy",
    lead:
      "Airport arrivals and departures, journeys between Italian cities, cruise-port connections, days out on an itinerary of your own, and selected routes beyond the border. Tell us the journey and the date, and you get a written quotation for that journey.",
    primaryCta: "Request a quote",
    secondaryCta: "Explore destinations",
    caveat:
      "Every journey is quoted on its own and depends on a driver being available for your date. A quotation request is not a booking — nothing is held until the arrangement is confirmed in writing.",
    photo: "tuscany-val-dorcia",
  },

  services: {
    id: "services",
    eyebrow: "What can be requested",
    heading: "Journeys this service is asked for",
    lead:
      "Eight kinds of request cover almost everything that arrives. Each one needs slightly different details to be quoted properly, and each is a section of its own below or on a page still being written.",
    cards: [
      {
        id: "airport-transfers",
        title: "Airport transfers",
        body:
          "Meeting a flight, or leaving for one. The useful parts of the request are the airport, the flight number and the full address at the other end — the flight number because a delayed arrival changes the plan.",
        photo: "airport-check-in",
      },
      {
        id: "station-transfers",
        title: "Railway station transfers",
        body:
          "Italy's main-line stations are large and have more than one entrance. Which station, and which side of it, is what makes a station pickup work; the platform end of the walk is always on foot.",
        photo: "rome-termini",
      },
      {
        id: "cruise-port-transfers",
        title: "Cruise port transfers",
        body:
          "Cruise calls are made at working commercial ports, and the berth is assigned by the port and the line. The terminal printed on your documents is the thing that decides the drive.",
        photo: "cruise-ship-dock",
      },
      {
        id: "hotel-transfers",
        title: "Hotel transfers",
        body:
          "Door to door where the address allows it. Several Italian historic centres restrict vehicle access, so the exact street and number matter far more than the name of the district.",
        photo: "rome-trevi-fountain",
      },
      {
        id: "intercity-transfers",
        title: "Intercity transfers",
        body:
          "City to city in one vehicle: your luggage stays in the boot, there are no changes along the way, and the day is yours rather than a timetable's.",
        photo: "road-scenic",
      },
      {
        id: "cross-border-transfers",
        title: "Cross-border journeys",
        body:
          "Some journeys carry on past the Italian border. They are quoted route by route and are subject to confirmation — tell us at the time of asking if a journey leaves Italy.",
        photo: "italy-amalfi-coast",
      },
      {
        id: "day-trips",
        title: "Day trips and private tours",
        body:
          "A day shaped around where you want to go, with the stops you ask for and the time you want to set off. We drive it; we are not a tour operator and we do not sell admissions.",
        photo: "tuscany-val-dorcia",
      },
      {
        id: "business-events",
        title: "Business and events",
        body:
          "Meetings, exhibitions and conference days — usually several addresses in an order that matters, sometimes with the party splitting during the day.",
        photo: "milan-porta-nuova",
      },
    ],
  },

  destinations: {
    id: "destinations",
    eyebrow: "Where people are going",
    heading: "Destinations across Italy",
    lead:
      "The cities we are asked about most often. Rome, Milan, Venice and Florence each have pages of their own — their airports and stations, and the port, lake, lagoon and countryside that go with them. Anywhere not named here can still be requested through a quotation.",
    cards: [
      {
        id: "rome",
        name: "Rome",
        blurb:
          "Two airports, a cruise port an hour up the coast at Civitavecchia, and a historic centre with access rules that decide where a car can stop.",
        photo: "rome-colosseum",
        page: "rome",
      },
      {
        id: "milan",
        name: "Milan",
        blurb:
          "Three airports sold under the city's name, only one of which is close to it, and the exhibition traffic that comes with Rho Fiera.",
        photo: "milan-porta-nuova",
        page: "milan",
      },
      {
        id: "venice",
        name: "Venice",
        blurb:
          "The one Italian city where a car cannot finish at the door: road transport ends at Piazzale Roma, and the rest is on foot or by water.",
        photo: "venice-grand-canal",
        page: "venice",
      },
      {
        id: "florence",
        name: "Florence",
        blurb:
          "A small airport inside the urban area, a larger one at Pisa, a strictly regulated centre, and Tuscany beginning minutes past the ring road.",
        photo: "florence-skyline",
        page: "florence",
      },
    ],
    alsoHeading: "Also asked about",
    also: [
      "Naples and the Amalfi Coast",
      "Bologna",
      "Verona and Lake Garda",
      "Pisa and the Tuscan coast",
      "Turin",
      "Genoa",
      "Palermo",
      "Catania",
    ],
    note:
      "Naming a city here means a journey to or from it can be quoted. It does not mean a dedicated page exists yet, and it does not mean a vehicle is standing by.",
  },

  airports: {
    id: "airports",
    eyebrow: "Arriving by air",
    heading: "Airports we are asked to cover",
    lead:
      "Grouped by the part of the country they serve. Names and IATA codes were checked against each airport's own published information.",
    groups: [
      {
        id: "rome-airports",
        region: "Rome",
        airports: [
          { name: "Rome Fiumicino (Leonardo da Vinci)", code: "FCO", note: "Italy's largest airport, west of the city on the coast.", page: "fiumicino" },
          { name: "Rome Ciampino (G. B. Pastine)", code: "CIA", note: "South-east of the city, with no railway station of its own.", page: "ciampino" },
        ],
      },
      {
        id: "milan-airports",
        region: "Milan and the north-west",
        airports: [
          { name: "Milan Malpensa", code: "MXP", note: "North-west of Milan, in the province of Varese.", page: "malpensa" },
          { name: "Milan Linate", code: "LIN", note: "Close to the city, mostly short-haul and domestic.", page: "linate" },
          { name: "Milan Bergamo (Orio al Serio)", code: "BGY", note: "In the province of Bergamo, nearer Bergamo than Milan.", page: "bergamo-airport" },
          { name: "Turin", code: "TRN", note: "North of Turin at Caselle." },
          { name: "Genoa (Cristoforo Colombo)", code: "GOA", note: "On the Ligurian coast west of the city." },
        ],
      },
      {
        id: "northeast-airports",
        region: "The north-east",
        airports: [
          { name: "Venice Marco Polo", code: "VCE", note: "On the lagoon shore at Tessera, with a land side and a water side.", page: "venice-marco-polo" },
          { name: "Treviso (A. Canova)", code: "TSF", note: "Inland near Treviso, often sold under Venice's name.", page: "treviso-airport" },
          { name: "Verona Villafranca", code: "VRN", note: "South-west of Verona, the usual road gateway to Lake Garda.", page: "verona-airport" },
          { name: "Bologna (Guglielmo Marconi)", code: "BLQ", note: "North-west of the city centre.", page: "blq" },
        ],
      },
      {
        id: "centre-airports",
        region: "Tuscany and the centre",
        airports: [
          { name: "Florence (Peretola)", code: "FLR", note: "In the Peretola area at the edge of the city.", page: "florence-airport" },
          { name: "Pisa (Galileo Galilei)", code: "PSA", note: "The larger airport for Tuscany, close to Pisa itself.", page: "pisa-airport" },
        ],
      },
      {
        id: "south-airports",
        region: "The south and the islands",
        airports: [
          { name: "Naples (Capodichino)", code: "NAP", note: "Inside the Naples urban area.", page: "nap-airport" },
          { name: "Bari (Karol Wojtyła)", code: "BRI", note: "North-west of Bari, for Puglia." },
          { name: "Catania (Fontanarossa)", code: "CTA", note: "South of Catania, for eastern Sicily." },
          { name: "Palermo (Falcone Borsellino)", code: "PMO", note: "West of Palermo at Punta Raisi." },
          { name: "Cagliari (Elmas)", code: "CAG", note: "North-west of Cagliari, for southern Sardinia." },
          { name: "Olbia (Costa Smeralda)", code: "OLB", note: "For the north-east of Sardinia." },
        ],
      },
    ],
    note:
      "Listing an airport means a journey to or from it can be quoted. It is not a statement that a vehicle is available on a given date, and there are no terminal-by-terminal pickup procedures published here — those are confirmed for your own booking.",
    checklistHeading: "For an airport request, send",
    checklist: [
      "The airport, by name or IATA code",
      "The flight number and the arrival or departure time on the ticket",
      "The full address at the other end",
      "How many passengers, and how many pieces of luggage",
      "Anything that changes the vehicle: a child, a wheelchair, bulky equipment",
    ],
  },

  intercity: {
    id: "intercity",
    eyebrow: "Between places",
    heading: "Journeys between cities, and beyond the border",
    lead:
      "Not every journey is an airport run. A good share of what is asked for here is a long road journey that would otherwise be two trains and a wait.",
    paragraphs: [
      "An intercity transfer is one vehicle from the address you start at to the address you finish at. The luggage goes in once. There is no interchange, no platform, and no part of the day spent working out which train carriage you are in. It suits parties with cases, families, early starts, and anyone whose schedule does not fit the timetable.",
      "Cross-border journeys — into France, Switzerland, Austria or Slovenia, for example — are a different proposition and are quoted route by route. Say at the time of asking that the journey leaves Italy, because it changes the paperwork, the route and whether the journey can be covered at all.",
    ],
    photo: "road-scenic",
    note:
      "Route availability is confirmed when the journey is quoted, not when it is listed on a page. Nothing here states that a given city pair or border crossing is always covered.",
  },

  cruise: {
    id: "cruise-ports",
    eyebrow: "Arriving or leaving by sea",
    heading: "Cruise port connections",
    lead:
      "Italy's cruise calls are made at working commercial ports, and the city on the itinerary is often not the city at the quayside.",
    paragraphs: [
      "Rome's cruise traffic calls at Civitavecchia, up the coast. Florence and Pisa are reached from Livorno. Venice's berths are split between the mainland port and terminals nearer the centre. In each case the name printed on your cruise documents is the thing that decides the drive, and a request to “the port” without a terminal is a request to the wrong place about as often as the right one.",
      "Where a vehicle may wait is set by the port, not by us, and it differs between terminals. The arrangement for your own journey is confirmed when the quotation is prepared.",
    ],
    photo: "cruise-ship-dock",
    link: { page: "civitavecchia", label: "Civitavecchia cruise port transfers" },
    checklistHeading: "For a cruise request, send",
    checklist: [
      "The port and the terminal or berth named by your cruise line",
      "The ship's name and the date of the call or the sailing",
      "Where you want to go, and whether you are returning to the ship",
      "The latest time you must be back on board, if there is one",
      "Passengers and luggage",
    ],
  },

  dayTrips: {
    id: "day-trips-and-events",
    eyebrow: "A day, not a transfer",
    heading: "Day trips, private tours and event travel",
    lead:
      "Some requests are not a journey from A to B at all. They are a day: a start, a finish, and the stops you want in between.",
    paragraphs: [
      "A private day out is quoted as the whole day rather than as a fare between two points, which is why the stops matter as much as the endpoints. Tell us where you want to begin, what you want to see, and what time you would like to set off — and whether anyone in the party has a time they must be back by.",
      "Business travel works the same way. An exhibition or conference day is usually several addresses in a particular order, sometimes with the party splitting. Send the addresses in the order you need them and the times you have to be at each.",
    ],
    photos: ["rome-colosseum", "milan-porta-nuova"],
    note:
      "We drive. We are not a tour operator, we do not sell tickets or admissions, and nothing here is an offer of a guided visit or of guaranteed transport during a major event.",
  },

  how: {
    id: "how-it-works",
    eyebrow: "The process",
    heading: "How a request becomes a journey",
    lead: "Three steps, and only the last one is a booking.",
    steps: [
      {
        title: "Send the journey",
        body:
          "Where you are starting, where you are going, the date and the time, how many of you there are and how much luggage is coming. The more precisely the journey is described, the more exact the answer can be.",
      },
      {
        title: "Receive a quotation",
        body:
          "You get a price for that journey, with the arrangement set out: where the driver meets you, what the quotation covers and anything about the request that cannot be done as asked.",
      },
      {
        title: "Confirm in writing",
        body:
          "A journey is booked when it has been confirmed in writing, and not before. Until that point nothing is reserved and no vehicle is allocated to your date.",
      },
    ],
    note:
      "Sending a request is asking a question, not making a reservation. The quotation request form is the subject of a later phase of this site; for now the section below sets out what to have ready.",
  },

  prepare: {
    id: "prepare",
    eyebrow: "Before you ask",
    heading: "What to have ready",
    lead:
      "A quotation is only as good as the journey it describes. These are the details that change the answer.",
    items: [
      {
        title: "Both addresses in full",
        body:
          "A street and a number at each end. “Near the Duomo” cannot be assessed by anyone; an address can, including whether a vehicle may stop at it.",
      },
      {
        title: "The flight, train or ship",
        body:
          "The number and the scheduled time, where one applies. It is what makes a delayed arrival something that can be worked around.",
      },
      {
        title: "Date and time",
        body:
          "Including the time zone you are quoting from if you are booking from abroad, and the time you must arrive by if there is one.",
      },
      {
        title: "Passengers and luggage",
        body:
          "Count the cases, not just the people. Luggage is more often the thing that decides the vehicle than the number of passengers.",
      },
      {
        title: "Anything unusual",
        body:
          "A child, a wheelchair, a pet, bulky equipment, a stop along the way, or a restricted-access address. Better said now than discovered on the day.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Questions travellers ask",
    lead: "Straight answers, including the ones that are conditional.",
    items: [
      {
        question: "What do you need to prepare a quotation?",
        answer:
          "Both addresses in full, the date and time, the number of passengers and pieces of luggage, and the flight, train or ship number where one applies. Anything unusual — a child seat, a wheelchair, a stop along the way — is worth adding in the same message.",
      },
      {
        question: "Can I request a journey between two Italian cities?",
        answer:
          "Yes. City-to-city journeys are quoted as a single journey in one vehicle, with no changes along the way. Availability for your date is confirmed when the quotation is prepared.",
      },
      {
        question: "Can I request an airport pickup?",
        answer:
          "Yes, at any of the airports listed on this page and at others on request. Send the flight number as well as the time: it is what allows a late arrival to be handled rather than missed.",
      },
      {
        question: "Can a journey start or finish at a cruise port?",
        answer:
          "Yes. Send the port and the terminal or berth printed by your cruise line, with the ship's name and the date. Italian cruise berths sit inside working ports and differ in where a vehicle may wait, so the terminal is what the quotation is built on.",
      },
      {
        question: "Can I ask for a journey that leaves Italy?",
        answer:
          "You can ask, and selected cross-border routes are quoted. Say that the journey crosses a border when you first write, because it affects the route, the paperwork and whether the journey can be covered at all.",
      },
      {
        question: "How do I arrange a private day trip?",
        answer:
          "Describe the whole day: where it starts, the stops you want in between, where it should end, and the time you would like to set off. A day out is quoted as a day rather than as a fare between two points.",
      },
      {
        question: "When is a booking confirmed?",
        answer:
          "Only when it has been confirmed in writing, with the journey, the meeting point and the conditions set out. Sending a request is asking a question — it does not reserve a vehicle and it does not hold a date.",
      },
    ],
  },

  finalCta: {
    id: "request-a-quote",
    eyebrow: "Next step",
    heading: "Tell us the journey",
    body:
      "Both addresses, the date and time, how many of you there are and how much luggage, and the flight, train or ship if one is involved. That is enough to come back with a price for the journey and the arrangement in writing.",
    primaryCta: "Request a quote",
    secondaryCta: "See what to have ready",
    note:
      "The quotation form and its submission path are the subject of the next phase of this site. Until it is in place, this section is the quote destination that the navigation and the buttons point at — nothing here pretends to send a message or to confirm a booking.",
  },

  chrome: {
    skipToContent: "Skip to main content",
    quoteCta: "Request a quote",
    menuLabel: "Menu",
    openMenu: "Open the menu",
    closeMenu: "Close the menu",
    languageLabel: "Language",
    footerTagline:
      "Private car and driver, arranged in advance. Tell us the journey — airport, station, cruise port, a day out, or a route between cities — and you get a written quotation for it.",
    footerLegal:
      "Journeys are quoted individually and are subject to confirmation. A quotation request is not a booking.",
  },
};
