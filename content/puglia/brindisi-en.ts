import type { BrindisiPage } from "./types";

/**
 * Brindisi — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Per the approved keyword map: BDS, and the "Bari or Brindisi?" comparison,
 * which lives here and on the pillar and nowhere else. Lecce, Ostuni and
 * Salento are *introduced* here as destinations reached from this airport;
 * each gets its own page in a later phase and the detail belongs there.
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
    title: "Brindisi airport transfers",
    description:
      "Private transfers from Brindisi Airport (BDS) to Lecce, Ostuni, Salento and the masserie. The southern gateway to Puglia — tell us the journey and get a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Brindisi",
    h1: "Brindisi airport transfers to Salento",
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
    paragraphs: [
      "Brindisi Airport is formally named after Antonio Papola, an Italian aviator killed in an air accident in February 1948, and it carries two other names that you will see on tickets and signage: Papola Casale, after the neighbourhood, and Salento Airport, after the region it opens. The last of those is the one that explains what the airport is for.",
      "It is small — a little under 3.4 million passengers in 2024 — and it is a focus city for Ryanair, with seasonal routes from across northern Europe that thicken sharply in summer and thin out again by November. That seasonality matters when you are arranging ground transport: in August the airport is busy and so is every operator working out of it.",
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
    heading: "Leaving the airport",
    paragraphs: [
      "BDS is genuinely small, and that is its great virtue. The walk from the aircraft to the arrivals hall is short, there is one place to collect bags, and there is one way out — so there is no wrong exit and no long internal transit to allow for.",
      "The practical consequence is that arrivals happen fast. Where a larger airport gives a driver twenty minutes of slack while passengers work their way out, Brindisi does not. A transfer arranged against a flight number rather than a clock time absorbs that; one arranged against a guessed arrival time does not.",
    ],
    meeting: [
      {
        title: "Meeting point",
        body: "Drivers meet in the arrivals hall with a name board. Agree in advance what the board will say — a surname you did not expect is the commonest reason two people stand ten metres apart without finding each other.",
      },
      {
        title: "Give the flight number",
        body: "With the flight number the driver can see a delay or a diversion for themselves. Without it, a delayed flight becomes a phone call from a landed aircraft, which is the worst moment to be arranging anything.",
      },
      {
        title: "Late and seasonal flights",
        body: "Brindisi's summer schedule includes a good many late evening arrivals, and availability in the small hours is tighter than in the middle of the day. Earlier notice genuinely helps in July and August.",
      },
    ],
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
        detail: "Lecce, Ostuni and most of the old centres restrict vehicle access. Normal, and not an obstacle — it only means the legal drop-off is sometimes a few minutes' walk from the door.",
      },
      {
        term: "Seasonality",
        detail: "Brindisi's schedule is strongly seasonal and so is the ground transport around it. July and August are busy for everyone working out of the airport; arranging early is worth more here than at a year-round airport.",
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
      {
        question: "How far is Brindisi airport from Lecce?",
        answer: "About 39 km by the Puglia regional route guide's figure, and roughly half an hour in ordinary conditions. It is the most requested journey from this airport by some margin.",
      },
      {
        question: "Should I fly to Brindisi or Bari?",
        answer: "If you are staying south of Ostuni — Lecce, Otranto, Gallipoli, anywhere in Salento — fly to Brindisi. North of Ostuni, Bari is nearer. Ostuni itself sits near the dividing line and works from either. If the flights only suit the other airport, the transfer is still arrangeable; it is simply a longer drive.",
      },
      {
        question: "How far is Brindisi airport from the city centre?",
        answer: "About 6 km. The airport is close to Brindisi itself, which is part of why it is quick to leave — but most people landing here are not staying in Brindisi, and the drive that matters is the one further south.",
      },
      {
        question: "Can you collect us from a masseria in the countryside?",
        answer: "Yes, and it is one of the most common requests we get here. Send the property name and any arrival directions it has given you. Many masserie keep a set of directions written for drivers precisely because the lanes are hard to find; forwarding them is the single most useful thing you can do.",
      },
      {
        question: "Is there a bus or train from Brindisi airport?",
        answer: "There are bus connections from the airport, but we would rather point you at current timetables than publish times we cannot verify — services vary by season and by operator. For Lecce and the towns beyond, the practical comparison is usually between a connection with a change and a door-to-door car, and with luggage and a late arrival that comparison tends to settle itself.",
      },
      {
        question: "Can you arrange transport for a wedding in Salento?",
        answer: "Yes. The usual arrangement is airport arrivals for guests across several days, a coordinated run to the venue and return journeys afterwards. Tell us guest numbers, pickup points and times and we will quote the whole thing together rather than piecemeal. We do not have agreements with specific venues and we do not claim to.",
      },
      {
        question: "How much does a transfer from Brindisi airport cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date — a run to Ostuni and a run to Santa Maria di Leuca are not comparable journeys. Describe what you need and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us where you are staying",
    body: "The flight number, the property and how many of you there are — and the property's own arrival directions if it has sent you any. We come back with the arrangement and the price in writing, and if the journey will not work the way you have described it, we will say so.",
    cta: "Request a transfer quote",
  },
};
