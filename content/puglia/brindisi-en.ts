import type { BrindisiPage } from "./types";

/**
 * Brindisi — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Per the approved keyword map as amended when the dedicated BDS page
 * shipped: Brindisi as the southern gateway, the road south, and the "Bari
 * or Brindisi?" comparison, which lives here and on the pillar and nowhere
 * else. The airport itself — its names, its traffic, being met in its
 * arrivals hall, the routes away from it and the public-transport
 * comparison — belongs to /airports/brindisi, which is linked prominently
 * from the section that used to carry that material. Lecce, Ostuni and
 * Salento are *introduced* here as destinations; each has its own page and
 * the detail belongs there.
 *
 * ── Why the page is built around distance ─────────────────────────────────
 * Everyone who lands at Brindisi has the same question, and it is not about
 * the airport: it is how long the drive is to wherever they are staying.
 * The page is therefore organised as a ladder running south, because that
 * is the shape of the answer.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Name, codes, the 6 km figure, the passenger total and Ryanair's focus-city
 * status are from the airport's Wikipedia entry, which cites Assaeroporti
 * for the traffic figures. The Brindisi–Lecce distance of about 39 km is
 * from the Puglia regional government's own route guide. Figures further
 * south vary considerably between sources — Otranto is given as anything
 * from 65 to 97 km depending on whether the route runs inland via Lecce or
 * down the coast — and the page says so rather than picking a number and
 * presenting it as settled.
 *
 * No prices, no fleet claims, no testimonials, no guarantees.
 */

export const brindisiEn: BrindisiPage = {
  meta: {
    // Bare title; the layout appends the brand. Renders at 62 characters.
    // Re-pointed when the dedicated BDS page shipped. This page previously
    // carried the title "Brindisi airport transfers", which is the query that
    // page now owns; two of our own pages competing for it helped neither.
    // The body below is unchanged — only the targeting moved.
    title: "Brindisi transfers and southern Puglia",
    description:
      "Private transfers in and around Brindisi: the southern gateway to Puglia, which airport suits where you are staying, and the drive down into Salento.",
  },

  hero: {
    eyebrow: "Puglia · Brindisi",
    h1: "Brindisi transfers and the road south",
    lead: "Brindisi is the airport for the south of Puglia. Lecce is about half an hour away, Ostuni a little less, and almost everything people come to Salento for is nearer to this runway than to Bari's. The airport itself is small and quick to leave; the drive afterwards is the part worth getting right.",
    primaryCta: "Request a Brindisi transfer quote",
    secondaryCta: "Bari or Brindisi?",
    facts: [
      { label: "Airport", value: "Brindisi · BDS / LIBR" },
      { label: "Also known as", value: "Papola Casale · Salento Airport" },
      { label: "From the centre", value: "About 6 km" },
      { label: "Passengers", value: "3,385,610 in 2024" },
    ],
  },

  intro: {
    heading: "The southern gateway",
    // The airport's own identity — the Antonio Papola naming, the Papola
    // Casale and Salento Airport alternatives, the 2024 passenger total and
    // the Ryanair focus-city status — is not repeated here. It is sourced
    // and set out in full on the BDS page, which owns that query. What this
    // page needs from the airport is only what it implies for the drive.
    paragraphs: [
      "Brindisi is the way into the south of Puglia, and the name it also goes by — Salento Airport — says what it is for better than its own does. Almost everything the far south is visited for is nearer to this corner of the region than to Bari: Lecce, the masserie in the olive country, the beaches on both coasts, and the towns at the very end of the heel.",
      "Flights here are heavily seasonal, and so is everything on the ground that meets them. Through July and August the airport and the operators working out of it are at their busiest together; in the shoulder months there is considerably more room. That affects how far ahead it is worth arranging a car far more than the distance does.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You tell us the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  ladder: {
    heading: "How far south are you going?",
    lead: "This is the only question that really shapes a Brindisi transfer. The further down the heel you are staying, the more the drive is the journey — and the more it matters that it was arranged rather than improvised at the rank.",
    stops: [
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "About 32–37 km",
        drive: "Allow around 35 minutes",
        note: "North-west of the airport rather than south. The White City, stacked on a hill above olive groves — and most guests are staying at a masseria below it rather than in the town.",
      },
      {
        id: "lecce",
        name: "Lecce",
        distance: "About 39 km",
        drive: "Allow around 30–40 minutes",
        note: "The baroque capital of the south and the standard arrival for a Salento holiday. The regional route guide gives 39 km and about half an hour.",
      },
      {
        id: null,
        name: "Otranto",
        distance: "Sources give 65–97 km",
        drive: "Allow around an hour and a quarter",
        note: "On the Adriatic side. The spread in published distances is real — it depends on whether the route runs inland through Lecce or down the coast.",
      },
      {
        id: null,
        name: "Gallipoli",
        distance: "About 80–86 km",
        drive: "Allow around an hour and a quarter",
        note: "On the Ionian side, usually via Lecce and then the SS101. A different sea, and a noticeably different kind of holiday.",
      },
      {
        id: null,
        name: "Santa Maria di Leuca",
        distance: "The far tip, beyond Otranto",
        drive: "Allow well over an hour and a half",
        note: "Where the two seas meet at the very end of the heel. The longest of the usual runs from BDS, and the one most often underestimated.",
      },
    ],
    footnote: "These are published figures from route planners, transfer operators and the regional route guide, and they do not all agree — the Otranto spread above is the clearest example. Treat the ladder as orientation, not as a timetable. Summer traffic on the coast roads adds time that no planner accounts for, and we confirm the actual routing when we quote.",
  },

  versusBari: {
    heading: "Bari or Brindisi?",
    lead: "The two airports are at opposite ends of a long region, and arriving at the wrong one is not a disaster — it just adds a drive you did not need to make. The rule is simpler than people expect.",
    rule: "If your accommodation is south of Ostuni, fly to Brindisi. If it is north of Ostuni, fly to Bari. Ostuni itself sits near the dividing line and works comfortably from either.",
    columns: [
      {
        heading: "Brindisi suits",
        points: [
          "Lecce and the whole of Salento",
          "Otranto, Gallipoli and the southern capes",
          "Ostuni and the southern edge of the Valle d'Itria",
          "The Adriatic coast south of Brindisi",
        ],
      },
      {
        heading: "Bari suits",
        points: [
          "Bari itself and the cruise terminal",
          "Alberobello and the trulli country",
          "Polignano a Mare and Monopoli",
          "Matera, over the border in Basilicata",
        ],
      },
    ],
    caveat: "Flights decide this more often than geography does. If the only sensible flight goes into the other airport, take it — the transfer is still perfectly arrangeable, it is simply a longer drive, and it is worth knowing that before you book the flight rather than after.",
  },

  airport: {
    heading: "If you are flying into Brindisi",
    summary: [
      "BDS is about 6 km from the city and genuinely small: a short walk from the aircraft, one place to collect bags, one way out. The consequence that matters for a transfer is that it empties quickly, so there is less slack here to absorb a loose arrangement than at a larger airport.",
      "The mechanics of being met — the name board, why the flight number beats a written-down arrival time, the late-evening summer schedule, what to send about a country address — are set out on the airport's own page, together with every route south and a straight comparison with the bus, the train and a hire car. This page stays with Brindisi and the road south.",
    ],
    handoff: {
      heading: "Transfers from Brindisi Airport, in full",
      body: "Being met at BDS, how a private transfer is arranged and paid for, every route down the heel with distances as published sources give them, and what the bus, the train and driving yourself genuinely do and do not cover.",
      cta: "Brindisi Airport transfers (BDS)",
    },
  },

  lecce: {
    heading: "Getting to Lecce",
    paragraphs: [
      "Lecce is the single most common destination from this airport, and the run is straightforward: about 39 km by the regional route guide's figure, roughly half an hour in ordinary conditions, mostly on the SS613.",
      "The complication is not the drive but the arrival. Lecce's historic centre is partly restricted to traffic, and a great many of the places people stay — the palazzo conversions and small boutique hotels the city is full of — are inside it. The legal drop-off is sometimes a short walk from the door, and a driver who already knows which of the gates to use for your street saves a circuit of the walls with suitcases.",
      "If you are staying in the centre, send the full address with your enquiry rather than just the hotel name. Several Lecce properties share a name with a street or a square, and the difference between them can be ten minutes of walking at the end of a flight.",
    ],
  },

  masserie: {
    heading: "Masserie and country stays",
    lead: "A large share of Brindisi arrivals are not going to a town at all. They are going to a converted farmhouse somewhere between the airport and the sea, and that is a different kind of journey.",
    paragraphs: [
      "Masserie are fortified farm buildings turned into hotels, and the good ones are deliberately remote. The lane is unlit, the gate is unmarked or marked only with a small sign, and the satellite view of the area is mostly olive trees. In daylight this is charming. At eleven at night, after a delayed flight, with a hire car and a phone signal that comes and goes, it is the single most common way a Puglia holiday starts badly.",
      "This is the clearest case for arranging the transfer rather than improvising it. A driver who has been to a property before is worth considerably more than a map pin, and operators working out of Brindisi know most of the established masserie in the area.",
    ],
    send: {
      heading: "What to send with your enquiry",
      items: [
        "The property's full name and its own written arrival directions — many masserie keep a set specifically for drivers",
        "A map pin or coordinates if the property supplies them, not just the town",
        "The nearest town and the road the entrance is off",
        "Your flight number and the number of passengers and bags",
        "Whether anyone needs a child seat, and the ages",
      ],
    },
  },

  coasts: {
    heading: "Two coasts, two different holidays",
    lead: "Salento is a peninsula with a sea on each side, and they are not interchangeable. Which one you are on changes the drive, and often changes which airport was right in the first place.",
    sides: [
      {
        heading: "The Adriatic side",
        body: "East-facing, rockier, with cliffs and small coves rather than long beaches. The water is deep close in. Reached from Brindisi down the coast or inland through Lecce, depending on how far south you are going.",
        places: "Otranto · Santa Cesarea Terme · the coast south of Brindisi",
      },
      {
        heading: "The Ionian side",
        body: "West-facing, flatter, with wide sandy beaches and shallower water — the side families more often choose. Usually reached via Lecce and then across the peninsula.",
        places: "Gallipoli · Porto Cesareo · the Ionian beaches",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things worth settling before you fly, rather than at the kerb.",
    items: [
      {
        term: "Child seats",
        detail: "Give the number of children and their ages when you enquire. Seats are arranged with the operator in advance — they are not something a driver can produce on arrival, and in high season they are genuinely in demand.",
      },
      {
        term: "Luggage",
        detail: "Count everything, including anything that will not fold. The vehicle is chosen from that number, and the problem with a guess only becomes visible when the boot is open.",
      },
      {
        term: "Rural addresses",
        detail: "Send the property's own arrival directions, not just the name. This matters more in Salento than almost anywhere else in Italy, because so much of the accommodation is down unnamed lanes.",
      },
      {
        term: "Limited-traffic zones",
        detail: "Lecce and Ostuni both restrict access to their old centres, and so do most of the smaller hill towns down the peninsula. It is ordinary in Italy rather than an obstacle; it simply means the permitted stopping point can be a couple of streets from the address, and that the right gate is worth knowing in advance.",
      },
      {
        term: "Seasonality",
        detail: "In high summer the whole region is working at capacity, cars and drivers included, and the gap between arranging something a fortnight ahead and asking for it on the day is wider here than almost anywhere else in Puglia.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Brindisi transfers",
    items: [
      // Rewritten when the BDS page shipped. The airport page answers the
      // same questions from the airport's side; these answer them from the
      // town's, and no answer below now repeats one of its sentences.
      {
        question: "How far is Brindisi airport from Lecce?",
        answer: "About 39 km, by the Puglia regional government's route guide — and the drive is the straightforward half of it. What decides the end of the journey is Lecce's restricted historic centre, as the section above describes: the legal drop-off can be a short walk from the door, and which gate the driver uses depends on the street.",
      },
      {
        question: "Should I fly to Brindisi or Bari?",
        answer: "If you are staying south of Ostuni — Lecce, Otranto, Gallipoli, anywhere in Salento — fly to Brindisi. North of Ostuni, Bari is nearer. Ostuni itself sits near the dividing line and works from either. If the flights only suit the other airport, the transfer is still arrangeable; it is simply a longer drive.",
      },
      {
        question: "We are staying in Brindisi itself. Is a transfer worth arranging?",
        answer: "Possibly not, and we would rather say so. The town is about 6 km from the runway, which makes it one of the shortest airport runs in Puglia and one of the few where arriving without anything arranged is a reasonable plan. Tell us where you are staying and we will give you a straight answer. It is the journeys that carry on south — an hour or more, often to an address with no street number — where arranging it in advance changes the evening.",
      },
      {
        question: "Can you collect us from a masseria in the countryside?",
        answer: "Yes, and in this part of Puglia it is the request we get most. The list above sets out what to send: the property's full name, a pin or coordinates where it supplies them, the nearest town and the road the entrance is off. Country properties here are far easier to describe than to find, which is exactly why so many of them keep directions written for drivers.",
      },
      {
        question: "Does it matter which coast we are staying on?",
        answer: "It changes the drive more than people expect. Salento has a sea on each side and the roads do not treat them alike: the Adriatic side is reached either down the coast or inland through Lecce, and the Ionian side almost always across the peninsula via Lecce. For somewhere like Otranto the published distances run anywhere from about 65 to 97 km depending on which of those routes is taken, which is why we confirm the routing when we quote rather than before.",
      },
      {
        question: "Can you arrange transport for a wedding in Salento?",
        answer: "Yes, and it is usually one piece of work rather than several: guests arriving across several days, a coordinated run to the venue, and the late journeys back afterwards, which are the part most often left until too late. Send guest numbers, pickup points and times and it gets quoted as a whole. We have no agreements with particular venues and make no claim to.",
      },
      {
        question: "How much does a transfer from Brindisi cost?",
        answer: "There is no price list, because the journeys are not comparable: an address ten minutes from the terminal and one at the end of the heel are different pieces of work, and the date and the vehicle move the figure as well. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us where you are staying",
    body: "Where you are going matters more here than where you land: the address, how many of you there are, and the flight it has to meet. The arrangement and the price come back in writing, and if the journey will not work the way you have described it, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
