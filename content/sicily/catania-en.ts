import type { SicilyDestination } from "./types";

/**
 * Catania — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Catania private transfers, and the Etna days people ask for from the city.
 * It does NOT own "Catania Airport transfers" — that is
 * /airports/catania-fontanarossa — nor "Catania cruise port transfers",
 * which is the port page. Both are introduced and linked here, and neither
 * appears in this page's title, H1 or description.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 55 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Position ("on Sicily's east coast, facing the Ionian Sea at the base of
 * the active volcano Mount Etna"), the population of 296,984 and the UNESCO
 * listing — the old town is part of the Late Baroque Towns of the Val di
 * Noto, inscribed 2002 — are from the city's encyclopedic entry. Airport
 * figures (4.3 km south-west, SAC, 12,346,530 passengers in 2024, three
 * terminals with C used exclusively by easyJet) are from the airport's own
 * entry; the airport station, Catania Aeroporto-Fontanarossa, was
 * inaugurated by RFI on 13 March 2021 per RFI's own announcement.
 *
 * The port is described as a city port a short walk from the historic
 * centre. That rests on trade press rather than an encyclopedic source —
 * the English Wikipedia article "Port of Catania" is a 404 — so the page
 * says it is a city port and does not print a distance or a walking time.
 *
 * Deliberately absent: any road distance or drive time to Taormina,
 * Syracuse or Etna's visitor areas. None could be sourced to anything but
 * travel sites that disagree. See docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const cataniaEn: SicilyDestination = {
  meta: {
    // 55 characters.
    title: "Catania Private Transfers and Etna Days – Book a Driver",
    description:
      "Private transfers in Catania: the baroque centre, the port, and the days out to Etna and the coast. Send the address or the flight for a written quote.",
  },

  hero: {
    eyebrow: "Sicily · Catania",
    h1: "Private transfers in Catania",
    lead: "Catania is built out of the volcano it sits under, in a dark stone that makes the whole centre look like one building. It is also the easiest Sicilian city to arrive in: the airport is a few kilometres out and the port is a short walk from the old town. The complications here start when you leave the city, not when you enter it.",
    primaryCta: "Request a Catania transfer quote",
    secondaryCta: "Days out to Etna",
    facts: [
      { label: "Coast", value: "East, on the Ionian Sea" },
      { label: "Behind the city", value: "Mount Etna" },
      { label: "Airport", value: "Fontanarossa (CTA), about 4.3 km" },
      { label: "Population", value: "296,984" },
    ],
  },

  intro: {
    heading: "The city at the base of the volcano",
    paragraphs: [
      "Catania sits on Sicily's east coast facing the Ionian Sea, at the base of Mount Etna. The old town is part of the Late Baroque Towns of the Val di Noto, inscribed as a World Heritage Site in 2002 — a rebuilding after catastrophe that produced one of the most coherent city centres in Italy, and the reason the streets here are wider and straighter than Palermo's.",
      "For a transfer that coherence is good news. A late-baroque grid is a grid: most addresses in the centre are reachable, the avenues take a vehicle, and the arrival is rarely the hard part. What is harder is everything the city is a base for — the volcano behind it, the coast north towards Taormina and the run south towards Syracuse.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "How people arrive in Catania",
    lead: "Both arrival points are close to the city, which is unusual and worth taking advantage of.",
    options: [
      {
        id: "catania-airport",
        label: "By air",
        body: "Catania–Fontanarossa, also known as Vincenzo Bellini Airport, about 4.3 km south-west of the city. It is the busiest airport in Sicily — 12,346,530 passengers in 2024, operated by SAC — and unusually close to the city it serves. It has three terminals, and Terminal C is used exclusively by easyJet, so which one you land at is worth establishing before anyone arranges to meet you.",
      },
      {
        id: "catania-cruise-port",
        label: "By sea",
        body: "A city port rather than an industrial one set apart from the town: the quays are a short walk from the historic centre. That shapes what a call here can be — Etna, Taormina and Syracuse are all plausible from a single day ashore, which is not true of every Sicilian port.",
      },
    ],
    note: "Because the airport is close and the port is central, Catania is one of the few places in Sicily where arranging a transfer is a convenience rather than a necessity for the arrival itself. It becomes a necessity the moment the journey leaves the city.",
  },

  kerb: {
    heading: "Where a car can stop",
    lead: "Catania is kinder to vehicles than most Sicilian cities, with two exceptions worth knowing about.",
    items: [
      {
        title: "The baroque centre",
        body: "The grid rebuilt after the seventeenth century takes traffic well. Via Etnea and the streets off it are wide, and hotels along them are generally reachable. This is the straightforward half of the city for an arrival.",
      },
      {
        title: "The restricted streets",
        body: "Parts of the historic centre limit vehicle access, as in every Italian city of this age. It is not an obstacle — it means the permitted stopping point is sometimes a short walk from the door, and that a driver who already knows which point applies saves the circuit.",
      },
      {
        title: "Up the mountain",
        body: "The roads onto Etna are a different kind of driving: they climb, they are narrower than the coast roads, and conditions change with the season and the weather. This is the part of a Catania stay where an arranged car and a driver who knows the road earns its place most clearly.",
      },
      {
        title: "The coast road north",
        body: "The run up the coast towards Taormina passes through the seaside towns strung along it. Many properties sit below the road or down a track to the shore, so the address matters more than the town name — and the final approach is often the slow part.",
      },
    ],
  },

  going: {
    heading: "What people ask us for from Catania",
    lead: "Catania is the busiest base in Sicily, and the requests are consistent.",
    items: [
      {
        name: "Mount Etna",
        body: "The volcano the city is built from and built under. Journeys go to the visitor areas on the mountain rather than to a summit, and what is possible on any given day depends on conditions. We will tell you what an operator can actually do rather than promise a view.",
      },
      {
        name: "Taormina",
        body: "Up the coast, on its terrace above the Ionian — the most requested day out from Catania and from the port. Taormina's own page covers what arriving there involves, which is more than it looks, because the town sits high above the coast road.",
      },
      {
        name: "Syracuse and Ortygia",
        body: "South, towards the island that is Syracuse's historic centre. A full day rather than a half, and frequently done as a one-way move to a second base rather than a round trip.",
      },
      {
        name: "The baroque towns",
        body: "The Val di Noto towns that share Catania's World Heritage listing lie inland and south. These are proper day journeys and they suit an arranged car, because the places are small, the parking is limited and the driving between them is the point.",
      },
    ],
  },

  nearby: {
    heading: "Where people go next",
    lead: "The pages for the places most often paired with Catania.",
    items: [
      {
        id: "taormina",
        body: "The most requested day out, and a common second base up the coast.",
      },
      {
        id: "syracuse",
        body: "South, for Ortygia and the archaeological city. A full day, or a one-way move.",
      },
      {
        id: "messina-cruise-port",
        body: "The other eastern cruise call. Most people landing there are heading for Taormina or Etna too.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things worth settling before you fly rather than at the kerb.",
    items: [
      {
        term: "Which terminal",
        detail: "Catania has three, and one of them is given over to a single airline. Say which you are landing at, or send the flight number and we will work it out.",
      },
      {
        term: "The flight number",
        detail: "Rather than the arrival time. With it a driver watches a delay happen for themselves; without it, a delayed flight becomes a phone call from a landed aircraft.",
      },
      {
        term: "Etna conditions",
        detail: "The mountain decides what is possible on the day, not the booking. We will say what an operator can do and what depends on conditions, rather than describe a view as though it were guaranteed.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and on a day out there is no second trip back for the rest of it.",
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
    heading: "Questions about Catania transfers",
    items: [
      {
        question: "How far is Catania Airport from the city?",
        answer: "About 4.3 km south-west, by the airport's own published figure — unusually close for an airport handling more than twelve million passengers a year. It is one of the few Sicilian transfers where a taxi from the rank is a perfectly reasonable alternative, and we would rather say so than pretend otherwise.",
      },
      {
        question: "Can you arrange a day on Etna?",
        answer: "Yes, and it is the most requested journey from the city. Transfers go to the visitor areas on the mountain. What is possible on a given day depends on conditions, and we will tell you what an operator can actually do rather than promise a summit or a view.",
      },
      {
        question: "Can you take us from Catania to Taormina?",
        answer: "Yes — it is the most requested day out from both the city and the port. Taormina sits high above the coast, so the arrival there is more involved than the drive, and its own page covers that. Tell us whether you want waiting time or a one-way move and the quotation follows it.",
      },
      {
        question: "We are on a cruise calling at Catania. What fits in a day?",
        answer: "More than at most Sicilian ports, because the quays are a short walk from the centre and the roads out of the city are quick. Etna, Taormina or Syracuse are each plausible — not all three. Send the ship's name, the date and the all-aboard time, and the day gets planned backwards from the all-aboard. If what you want will not fit, we will say so.",
      },
      {
        question: "How long does it take to get to Taormina or Syracuse?",
        answer: "We do not publish journey times, and on this coast that is a deliberate decision rather than an evasion. The figures in circulation disagree with each other, and the same road in August and in March is not the same road. The operator confirms the routing and the timing when we quote.",
      },
      {
        question: "Is there a train from Catania Airport?",
        answer: "There is a station at the airport — Catania Aeroporto-Fontanarossa, inaugurated by RFI in March 2021. For the current state of the lines and the timetable, check with the operator rather than with us: services on this coast have been disrupted in recent years and anything we printed here would be out of date quickly.",
      },
      {
        question: "How much does a transfer in Catania cost?",
        answer: "There is no price list. A run from the airport into the city and a day on Etna are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the flight, the ship or the address",
    body: "Catania is an easy city to arrive in and a busy one to leave. Send the flight number or the ship's name, where you are going and how many of you there are. The arrangement and the price come back in writing — and if the day you have described will not fit, we will tell you that instead of quoting it anyway.",
    cta: "Request a transfer quote",
  },
};
