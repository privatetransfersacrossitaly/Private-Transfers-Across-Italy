import type { SicilyPillar } from "./types";

/**
 * Sicily regional pillar — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Regional intent: private transfers in Sicily, and the question that comes
 * before any of the others — which corner of the island you are actually in,
 * and what that means for the driving. It must not compete with the city,
 * airport or port pages for their own queries, so Palermo, Catania and the
 * rest are introduced here and answered there.
 *
 * ── Titles ────────────────────────────────────────────────────────────────
 * The whole Sicily cluster passes `brandedTitle: false`. The owner's rule is
 * 50-60 characters with a call to action, and " | Private Transfer Across
 * Italy" is 32 characters on its own, so keyword plus CTA plus brand cannot
 * fit. The title below is 51 characters.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Airport names, codes, operators, locations and passenger figures are from
 * each airport's own encyclopedic entry, which cites Assaeroporti for the
 * traffic. The two distance figures printed on this page — Cefalù to Palermo
 * and Cefalù to Messina — are from Cefalù's entry and are the only road
 * distances in this file, because they are the only ones that could be
 * attributed. Every other page in the cluster carries its own figures with
 * its own sources.
 *
 * Deliberately absent, and the reasons are in docs/sicily-cluster-plan.md:
 * train frequencies and journey times from Palermo Airport (the sources
 * disagree and none is official), the operator of the Catania airport bus
 * (unsourced), the current state of the Messina-Syracuse line (reported
 * suspended after a January 2026 storm and partly restored, which will be
 * wrong either way within a month), and the port authority names (the 2016
 * reform and later sources do not agree and the current decree was not
 * found).
 *
 * No prices, no journey-time promises, no fleet claims, no partnerships, no
 * testimonials.
 */

export const sicilyPillarEn: SicilyPillar = {
  meta: {
    // 51 characters. No brand: see the note above.
    title: "Private Transfers in Sicily – Book a Private Driver",
    description:
      "Private transfers across Sicily: which airport or port suits where you are staying, and how far apart the island really is. Written quote, no price list.",
  },

  hero: {
    eyebrow: "Sicily",
    h1: "Private transfers in Sicily",
    lead: "Sicily is the largest island in the Mediterranean and it is shaped like a triangle, which matters more than it sounds. Two airports sit at two of the corners and almost nothing sits at the third. Where you are staying decides which one you want, and nothing decides a Sicilian transfer more than that.",
    primaryCta: "Request a Sicily transfer quote",
    secondaryCta: "Which airport?",
    facts: [
      { label: "Main airports", value: "Palermo PMO · Catania CTA · Trapani TPS" },
      { label: "Cruise ports", value: "Palermo · Catania · Messina" },
      { label: "Island", value: "The largest in the Mediterranean" },
      { label: "Separated from Calabria by", value: "The Strait of Messina" },
    ],
  },

  intro: {
    heading: "Start with the corner, not the town",
    paragraphs: [
      "Most people arrive in Sicily having booked the flight first and thought about the ground afterwards. That is the wrong way round here more than it is almost anywhere else in Italy, because the island is big, the two main airports are at opposite ends of it, and a cheap flight into the wrong one can cost you most of a day at each end of the holiday.",
      "The useful way to think about Sicily is as three corners. The north-west is Palermo's, and the airport that serves it is Palermo's too. The east is Catania's, and Catania's airport is almost inside the city. The south coast — Agrigento and the temples — belongs to neither, and is the part of the island where the arithmetic is least obvious.",
      "We arrange these transfers with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  corners: {
    heading: "The three corners",
    lead: "Which one you are in is the first thing worth establishing, because it decides the airport, the port and most of the driving.",
    items: [
      {
        corner: "The north-west",
        arrival: "Palermo Airport (PMO), and Trapani Airport (TPS) for the far west",
        body: "The capital, the Tyrrhenian coast running east towards Cefalù, and the western end of the island around Trapani and the salt pans. Palermo's airport sits out along the coast at Cinisi, which means the drive in is longer than people expect from a capital city, and the drive onward along the coast is often shorter than they expect.",
        places: ["palermo", "cefalu", "trapani"],
      },
      {
        corner: "The east",
        arrival: "Catania Airport (CTA)",
        body: "Catania itself, Etna behind it, Taormina on its terrace up the coast, and Syracuse down towards the south-east. This is the busiest corner of the island and the one where the airport is closest to the city it serves — Catania's runway is a few kilometres from the centre, which is unusual anywhere.",
        places: ["catania", "taormina", "syracuse"],
      },
      {
        corner: "The south",
        arrival: "Either airport, and the choice is a real one",
        body: "Agrigento and the Valley of the Temples sit on the south coast with no airport of their own. People reach them from Palermo, from Catania or from Trapani depending on the flight they found, and this is the one part of Sicily where it is worth asking about the transfer before booking the flight rather than after.",
        places: ["agrigento"],
      },
    ],
  },

  airports: {
    heading: "The three airports",
    lead: "Two carry most of the island's traffic and the third is small and western. Figures below are each airport's own published passenger totals, with the year they belong to.",
    items: [
      {
        id: "catania-airport",
        code: "CTA",
        name: "Catania–Fontanarossa, also known as Vincenzo Bellini Airport",
        body: "The island's busiest, with 12,346,530 passengers in 2024, operated by SAC. It sits about 4.3 km south-west of Catania — close enough that the transfer into the city is a short run, which is rare for an airport of its size. It has three terminals, and Terminal C is used exclusively by easyJet, so which one you land at is worth knowing before anyone arranges to meet you.",
        serves: "Catania, Taormina, Syracuse and the east coast; Agrigento is reachable but long.",
      },
      {
        id: "palermo-airport",
        code: "PMO",
        name: "Falcone Borsellino Airport, formerly Punta Raisi",
        body: "The island's second airport, with 9,220,905 passengers in 2025, managed by GESAP. It is at Cinisi, about 35 km west-north-west of Palermo, and it is a focus city for Aeroitalia, Ryanair, Volotea and Wizz Air. It has its own railway station, which genuinely competes with a car for a central Palermo hotel and does not compete at all for anywhere else.",
        serves: "Palermo, Cefalù and the north coast, Trapani and the west, and Agrigento.",
      },
      {
        id: "trapani-airport",
        code: "TPS",
        name: "Vincenzo Florio Airport, Trapani–Birgi",
        body: "Much smaller — 1,007,409 passengers in 2025, down 6.29% on the year before — and shared with the Italian Air Force, whose 37° Stormo is based there. Civil operations are managed by Airgest. It sits between Trapani and Marsala rather than at either, and Ryanair has operated a base there since 2009.",
        serves: "Trapani, Marsala and the western corner. Palermo and Agrigento are both reachable by road.",
      },
    ],
    choosing: {
      heading: "Choosing between them",
      body: "If you are staying east of Etna — Catania, Taormina, Syracuse — fly into Catania. If you are staying anywhere along the north coast or in the west, fly into Palermo. Trapani suits the far west specifically, and its schedule is thinner than the other two, so it is a choice you make when the flight exists rather than a default. For the south coast, ask before you book: the difference between the right airport and the wrong one is measured in hours, not minutes.",
    },
  },

  ports: {
    heading: "Arriving by sea",
    lead: "Sicily takes cruise traffic at several points around the coast. These three have pages of their own because they are where private transfers are actually asked for.",
    items: [
      {
        id: "palermo-cruise-port",
        name: "Palermo",
        body: "A major passenger port: 1,986,941 passengers passed through it in 2018, of whom 577,934 were cruise passengers. It is a working port rather than a cruise terminal with a city attached — Fincantieri's shipyard is inside it — so which quay a ship is given is not a detail.",
      },
      {
        id: "catania-cruise-port",
        name: "Catania",
        body: "The port sits beside the city centre, which makes the shore-excursion arithmetic unusually generous here: Etna, Taormina and Syracuse are all plausible from a single day ashore, which is not true of every Sicilian call.",
      },
      {
        id: "messina-cruise-port",
        name: "Messina",
        body: "On the western shore of the Strait of Messina, and overwhelmingly a day call rather than a place people stay. Cruise traffic grew from 260,000 passengers in 2006 to 405,000 in 2009 — the most recent figures published for it. Almost everyone who lands here is going to Taormina or to Etna and coming back the same afternoon.",
      },
    ],
    ferries: {
      heading: "Ferries are a different thing",
      body: "Trapani is the main gateway to the Egadi Islands, and Milazzo is the mainland port for the Aeolians. Those are ferry journeys, not car journeys: a transfer takes you to the quayside and meets you off the return sailing, and no vehicle crosses with you unless that has been specifically arranged. We will say plainly which half of a plan we can cover.",
    },
  },

  places: {
    heading: "Where people go",
    lead: "Seven destinations with pages of their own. Each one says which arrival point suits it and what the drive is actually like.",
    items: [
      {
        id: "palermo",
        name: "Palermo",
        summary: "The capital, on the Tyrrhenian coast, and the seat of the Arab-Norman World Heritage Site that also takes in the cathedrals of Cefalù and Monreale.",
        arrival: "Palermo Airport, or the cruise port",
      },
      {
        id: "catania",
        name: "Catania",
        summary: "On the east coast at the base of Etna, with a late-baroque centre inscribed as part of the Late Baroque Towns of the Val di Noto.",
        arrival: "Catania Airport, a few kilometres away",
      },
      {
        id: "taormina",
        name: "Taormina",
        summary: "A terrace above the Ionian coast with a Greek theatre at the top of it. The old town sits around 250 m above the sea, and that is a transfer problem as much as a view.",
        arrival: "Catania Airport, or Messina by ship",
      },
      {
        id: "syracuse",
        name: "Syracuse",
        summary: "Ortygia, the island that is the historic centre, and the archaeological city behind it — a World Heritage Site since 2005 together with the Necropolis of Pantalica.",
        arrival: "Catania Airport",
      },
      {
        id: "trapani",
        name: "Trapani",
        summary: "The western corner: a fishing port, the salt pans either side of the road, and the main gateway to the Egadi Islands.",
        arrival: "Trapani Airport, or Palermo",
      },
      {
        id: "agrigento",
        name: "Agrigento",
        summary: "The Archaeological Area of Agrigento — the Valley of the Temples — inscribed in 1997, on a plateau above the southern coast.",
        arrival: "Palermo, Catania or Trapani; ask first",
      },
      {
        id: "cefalu",
        name: "Cefalù",
        summary: "A Norman cathedral begun in 1131 under a headland, on the north coast about 70 km east of Palermo.",
        arrival: "Palermo Airport",
      },
    ],
  },

  distances: {
    heading: "How far apart is everything, really?",
    lead: "This is the question that decides a Sicilian holiday, and it is the one most often answered with a guess. Here are the only two road distances this page states, both from a published source.",
    rows: [
      {
        between: "Cefalù to Palermo",
        figure: "About 70 km (43 mi)",
        source: "Cefalù's encyclopedic entry, which gives it as the distance east of the provincial capital",
      },
      {
        between: "Cefalù to Messina",
        figure: "185 km (115 mi)",
        source: "The same entry",
      },
      {
        between: "Palermo Airport to Palermo",
        figure: "About 35 km (22 mi), west-north-west",
        source: "The airport's own entry, which gives 19 NM",
      },
      {
        between: "Catania Airport to Catania",
        figure: "About 4.3 km (2.6 mi), south-west",
        source: "The airport's own entry, which gives 2.3 NM",
      },
    ],
    footnote: "Those four are the figures we can attribute, so they are the only ones here. Every destination page in this cluster carries its own distances with its own sources, and all of them are written as approximations, because Sicilian road distances differ between route planners depending on the route taken and the season driven. We confirm the actual routing when we quote. We do not publish journey times at all: a coast road in August and the same road in March are not the same road.",
  },

  alternatives: {
    heading: "When a private transfer is not the answer",
    lead: "Sicily is one of the places where this question has a real answer rather than a polite one, and the page is more useful if it gives it.",
    modes: [
      {
        mode: "Train from Palermo Airport",
        suits: "Central Palermo with light luggage. The airport has its own railway station, which is more than most Italian airports can say.",
        against: "It serves central Palermo and nowhere else you are likely to be going. We do not publish its frequency or journey time here: the sources we found disagree with each other and none of them is the operator, so check Trenitalia rather than us.",
      },
      {
        mode: "Train from Catania Airport",
        suits: "Onward travel by rail. There is a station at the airport, Catania Aeroporto-Fontanarossa, inaugurated by RFI in March 2021.",
        against: "Sicilian rail is weather-exposed and the lines along the east coast have been disrupted in recent years. We would rather send you to the operator for the current state of the line than print something that is wrong by next month.",
      },
      {
        mode: "Hire car",
        suits: "Touring. If you intend to be somewhere different every second day across an island this size, a hire car genuinely competes, and we will say so.",
        against: "Parking in Palermo, Catania and the hill towns is difficult, and several historic centres restrict access. Taormina in particular is a town a car cannot simply be driven into and left.",
      },
      {
        mode: "Private transfer",
        suits: "Arrivals with luggage, a group or children; an address that is not in a town centre; the long runs between corners of the island; a ship with an all-aboard time; and anywhere the last kilometre is the hard part.",
        against: "It has to be arranged in advance, and for a short hop in central Catania it is more than the journey needs.",
      },
    ],
    verdict: "The honest rule for Sicily: for a single short journey in a city, take the train or a taxi. For anything that crosses the island, arrives late, carries luggage or has to be back at a quayside by a fixed hour, arrange it.",
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that decide whether a Sicilian arrival is uneventful.",
    items: [
      {
        term: "The flight number",
        detail: "Not the arrival time. With it, a driver can see a delay or a diversion happen. Without it, a delayed flight becomes a phone call made from a landed aircraft.",
      },
      {
        term: "Which terminal",
        detail: "It matters at Catania, which has three and gives one of them over to a single airline. Say which you are landing at, or give us the flight and we will work it out.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Seats are arranged with the operator in advance; a driver cannot produce one at the kerb, and in high summer they are genuinely in demand.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and on a long island run there is no second trip.",
      },
      {
        term: "Limited-traffic zones",
        detail: "Taormina, Ortygia, central Palermo and several hill towns restrict vehicle access. Normal in Italy and not an obstacle — it means the legal drop-off is sometimes a short walk from the door, and that knowing which point to use saves a circuit.",
      },
      {
        term: "Ferry timings",
        detail: "If a plan involves the Egadi or Aeolian islands, the sailing decides everything around it. Send the sailing you intend to take and the day is built around that rather than around a pickup time.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about transfers in Sicily",
    items: [
      {
        question: "Which airport should I fly into for Sicily?",
        answer: "It depends entirely on where you are staying. Catania for the east — Catania itself, Taormina, Syracuse, Etna. Palermo for the capital, the north coast and Cefalù. Trapani for the far west, when the flight exists. For Agrigento and the south coast there is no obvious answer, which is exactly why it is worth asking before you book the flight.",
      },
      {
        question: "How far is Palermo Airport from the city?",
        answer: "About 35 km west-north-west, by the airport's own published figure. It is at Cinisi, out along the coast, so it is a longer run into the city than most capital-city airports — and a shorter one than people expect if you are heading west or along the north coast instead.",
      },
      {
        question: "How far is Catania Airport from Catania?",
        answer: "About 4.3 km south-west, which is unusually close for an airport handling over twelve million passengers a year. The short run into the city is one of the few Sicilian transfers where a taxi from the rank is a perfectly reasonable alternative.",
      },
      {
        question: "Can you take us from Catania to Taormina, or from Palermo to Cefalù?",
        answer: "Yes — those are two of the most requested journeys on the island. Both are covered on the destination pages with the distances as published sources give them. Tell us the flight or the ship and where you are staying, and the quotation follows that.",
      },
      {
        question: "Is a private transfer better than hiring a car in Sicily?",
        answer: "Not always, and we would rather say so. If you are moving on every second day across the island, a hire car may well suit you better. If you are based in one or two places with a few days out, individual transfers usually work out simpler, because parking in the cities and the hill towns is genuinely difficult.",
      },
      {
        question: "Can you meet a cruise ship at Palermo, Catania or Messina?",
        answer: "Yes. Each of those ports has a page here. Send the ship's name, the date, the arrival time and — the one that actually governs the day — the all-aboard time. If what you want to fit into the hours ashore is not realistic, we will say so while you can still change it.",
      },
      {
        question: "Can a transfer take us to the Aeolian or Egadi Islands?",
        answer: "A transfer takes you to the port and meets you off the return sailing. The crossing itself is a ferry journey and the vehicle does not come with you unless that has been arranged specifically. Trapani is the gateway for the Egadi Islands and Milazzo for the Aeolians; tell us the sailing and the rest is built around it.",
      },
      {
        question: "How much does a transfer in Sicily cost?",
        answer: "There is no price list, and on an island this size an average would be meaningless — a run across Catania and a run from Palermo to Syracuse are not comparable pieces of work. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us where you are staying",
    body: "In Sicily that matters more than the flight does. Give us the address, the date, the flight number or the ship, and how many of you there are. The arrangement and the price come back in writing — and if the plan does not work the way you have described it, we will tell you that instead of quoting it anyway.",
    cta: "Request a transfer quote",
  },
};
