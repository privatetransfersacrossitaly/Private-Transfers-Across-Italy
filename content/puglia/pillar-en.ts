import type { PugliaPillar } from "./types";

/**
 * The Puglia regional pillar, in English.
 *
 * ── What is deliberately absent ───────────────────────────────────────────
 * No prices, no journey times, no promises about vehicle availability, and
 * no claim that this business owns cars or employs drivers. Where a distance
 * appears it is a range, because the published figures disagree — straight
 * line against road, airport perimeter against terminal door — and a single
 * confident number would be the least honest way to present them.
 *
 * Verified before writing:
 *   · Bari Karol Wojtyła (BRI) sits roughly 8–9 km from the city centre.
 *   · Brindisi (BDS) is roughly 35–40 km from Lecce by road, 32–37 km from
 *     Ostuni; sources vary with the measurement used.
 *   · The trulli of Alberobello were inscribed on the UNESCO World Heritage
 *     List in 1996, under criteria (iii), (iv) and (v).
 *   · At Bari's cruise terminal the walk into the old town depends on the
 *     berth, and ranges from a short stroll to around 3 km.
 */
export const pugliaPillarEn: PugliaPillar = {
  meta: {
    // Bare, because the root layout appends " | Private Transfer Across
    // Italy" as a title template. Writing the brand here too produced an
    // 88-character title with the brand in it twice.
    //
    // The brief asked for keyword + brand + CTA. Brand arrives from the
    // template; the CTA is deliberately not here. With the suffix this
    // renders at 59 characters, and anything long enough to carry a CTA as
    // well would be cut off in the results — so the CTA lives in the meta
    // description, where it survives.
    title: "Private transfers in Puglia",
    description:
      "Private transfers across Puglia — Bari and Brindisi airports, cruise arrivals, masserie, wedding venues and the coast. Tell us the journey and get a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Apulia",
    h1: "Private transfers in Puglia",
    lead:
      "The heel of Italy is wider than it looks on a map. Two airports sit roughly two hours apart, much of the best accommodation is down an unmarked country lane, and the towns worth seeing are strung along two different coasts. A car with a driver, arranged in advance, is how most of that becomes simple.",
    primaryCta: "Plan your journey in Puglia",
    secondaryCta: "How booking works",
  },

  intro: {
    heading: "What this page covers",
    paragraphs: [
      "This is the regional page for Puglia. It explains which airport suits which part of the region, what a private transfer actually involves here, and how the towns relate to one another — so that you can work out the shape of your travel before booking anything.",
      "We arrange private transfers with licensed local transfer companies and drivers across Puglia. We do not own vehicles and we do not employ the drivers directly. What we do is take the journey you describe, arrange it with an operator who covers that route, and send you the arrangement and the price in writing before anything is confirmed.",
      "Every journey below starts the same way: you tell us where you are going and when, and we come back with a quotation. Nothing is held, reserved or charged until you have agreed it.",
    ],
  },

  why: {
    heading: "Why a private transfer makes sense here",
    lead:
      "Puglia rewards people who booked their ground travel before they arrived, more than most Italian regions do. Four reasons come up again and again.",
    points: [
      {
        title: "The accommodation is often rural",
        body:
          "Masserie — fortified farmhouses converted into hotels — are a large part of why people come to Puglia, and most of them sit outside the towns, at the end of a lane with no street lighting and a gate that is easy to drive past in the dark. A driver who has been there before is worth considerably more than a map pin.",
      },
      {
        title: "Two airports, far apart",
        body:
          "Bari serves the north and centre of the region; Brindisi serves the south. Arriving at the wrong one is not a disaster, but it can add a long drive to the start of a holiday. Knowing which to book is the single most useful thing on this page.",
      },
      {
        title: "Public transport thins out quickly",
        body:
          "Trains link the larger towns along the Adriatic, and they are perfectly good. Away from that line — into the Valle d'Itria, down the Salento coast, out to a masseria — services become infrequent, and connections with luggage and a late flight rarely line up.",
      },
      {
        title: "Historic centres are restricted",
        body:
          "Ostuni, Alberobello, Lecce, Monopoli and Polignano all have old quarters that are either pedestrian or limited-traffic. A driver who knows where the legal drop-off point is saves a circuit of the walls with suitcases.",
      },
    ],
  },

  airports: {
    heading: "Bari and Brindisi airports",
    lead:
      "Puglia has two international airports. They are both small, straightforward and quick to leave — the question is not which is better, but which is nearer to where you are sleeping.",
    items: [
      {
        code: "BRI",
        name: "Bari Karol Wojtyła Airport",
        body:
          "The region's busiest airport, roughly 8–9 km north-west of central Bari. It is the natural arrival point for Bari itself, for the Valle d'Itria and the trulli country around Alberobello, and for the Adriatic coast south of the city through Polignano a Mare and Monopoli. It is also the usual airport for anyone continuing to Matera, over the regional border in Basilicata.",
        suits: [
          "Bari city and the cruise terminal",
          "Alberobello and the Valle d'Itria",
          "Polignano a Mare and Monopoli",
          "Onward travel to Matera",
        ],
      },
      {
        code: "BDS",
        name: "Brindisi Airport",
        body:
          "Smaller, and the better choice for the south. Published road distances put it roughly 35–40 km from Lecce and 32–37 km from Ostuni, depending on the source and the route taken. For anywhere in Salento — Lecce, Otranto, Gallipoli, the southern capes — arriving at Brindisi rather than Bari removes a long and avoidable drive.",
        suits: [
          "Lecce and the whole of Salento",
          "Ostuni and the Valle d'Itria's southern edge",
          "The Adriatic coast south of Brindisi",
          "Gallipoli, Otranto and the Ionian beaches",
        ],
      },
    ],
    choosing: {
      heading: "Choosing between them",
      body:
        "As a rough rule: if your accommodation is north of Ostuni, fly to Bari; if it is south of Ostuni, fly to Brindisi. Ostuni itself sits near the dividing line and is comfortably reached from either. If the flights only work into the 'wrong' airport, the transfer is still perfectly possible — it is simply a longer drive, and worth knowing about before you book the flight rather than after.",
    },
  },

  cruise: {
    heading: "Cruise arrivals at Bari",
    paragraphs: [
      "Bari is a regular call on Adriatic itineraries, and for many passengers it is their only day in Puglia. The cruise terminal is part of the working port, immediately north of the old town.",
      "How far you are from the centre depends entirely on which berth your ship is assigned. Some berths leave a short walk to the Murat quarter; from others the walk is closer to three kilometres through port roads that were not designed for pedestrians. Because the berth is usually not known far in advance, a pre-arranged car that meets you at the terminal removes the uncertainty.",
      "Most cruise enquiries we receive are not for the city at all. They are for a half-day out to Alberobello, Polignano a Mare or Matera and back to the ship — a journey where the return timing matters more than anything else, and where it is worth telling us the all-aboard time so that the schedule is built backwards from it.",
    ],
  },

  towns: {
    heading: "Where people go in Puglia",
    lead:
      "Eight places account for most of the transfers we are asked about. They are very different from one another, and the right arrival airport differs with them.",
    items: [
      {
        id: "bari",
        name: "Bari",
        summary:
          "The regional capital: a working port city with a walled old town, and the gateway airport for the north.",
        travellers:
          "Arriving and departing passengers, cruise calls, and anyone heading inland to the trulli.",
        airport: "Bari (BRI)",
      },
      {
        id: "brindisi",
        name: "Brindisi",
        summary:
          "A quieter port city and the airport that opens the south of the region.",
        travellers:
          "Salento-bound visitors, ferry passengers, and travellers heading straight out to the coast.",
        airport: "Brindisi (BDS)",
      },
      {
        id: "lecce",
        name: "Lecce",
        summary:
          "The baroque city of the south, built in a limestone soft enough to carve like wood.",
        travellers:
          "City breaks, wedding parties, and people using it as a base for the whole of Salento.",
        airport: "Brindisi (BDS)",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        summary:
          "The White City, stacked on a hill above olive groves that run to the sea.",
        travellers:
          "Masseria guests, wedding parties, and couples staying in the countryside rather than the town.",
        airport: "Brindisi (BDS) or Bari (BRI)",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        summary:
          "The trulli town, on the UNESCO World Heritage List since 1996.",
        travellers:
          "Day visitors from Bari and the cruise terminal, and guests staying in converted trulli nearby.",
        airport: "Bari (BRI)",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        summary:
          "A harbour town on the Adriatic with a compact old centre and beaches either side.",
        travellers:
          "Week-long coastal stays, resort guests, and families.",
        airport: "Bari (BRI)",
      },
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        summary:
          "A town built on the edge of a limestone cliff, directly above the sea.",
        travellers:
          "Couples, short coastal stays, and wedding and event parties.",
        airport: "Bari (BRI)",
      },
      {
        id: "salento",
        name: "Salento",
        summary:
          "The peninsula at the very tip of the heel, with two coasts and a different sea on each.",
        travellers:
          "Beach holidays, touring stays, and anyone moving between several towns in a week.",
        airport: "Brindisi (BDS)",
      },
    ],
  },

  journeys: {
    heading: "Journeys we are asked for most",
    lead:
      "These are the routes that come up repeatedly. Every one of them is arranged individually — the list is here to show the shape of the region, not to offer a fixed menu.",
    items: [
      {
        from: "Bari Airport",
        to: "Alberobello",
        note: "The classic first-day drive inland, and the most common cruise excursion.",
      },
      {
        from: "Bari Airport",
        to: "Polignano a Mare",
        note: "A short run down the coast; frequently the shortest airport transfer in the region.",
      },
      {
        from: "Bari Airport",
        to: "Monopoli",
        note: "Continues past Polignano to the harbour town and the resorts either side of it.",
      },
      {
        from: "Brindisi Airport",
        to: "Lecce",
        note: "Roughly 35–40 km by road. The standard arrival for a Salento holiday.",
      },
      {
        from: "Brindisi Airport",
        to: "Ostuni",
        note: "Roughly 32–37 km, usually ending at a masseria rather than in the town itself.",
      },
      {
        from: "Lecce",
        to: "Gallipoli or Otranto",
        note: "Crossing the peninsula to the Ionian, or dropping down the Adriatic side.",
      },
      {
        from: "Monopoli",
        to: "Polignano a Mare",
        note: "A short coastal hop between neighbours, often arranged for an evening out.",
      },
      {
        from: "Bari",
        to: "Matera",
        note: "Over the border into Basilicata; a full day out or a one-way onward move.",
      },
    ],
  },

  staying: {
    heading: "The kinds of stay we arrange for",
    lead:
      "What you need from a transfer in Puglia depends less on the town than on what you are arriving at.",
    groups: [
      {
        title: "Masserie and country accommodation",
        body:
          "A masseria is usually reached by a single-track lane off a provincial road, often without a street number and sometimes without a sign. Send us the property's name and whatever arrival notes they gave you — many masserie have a standard set of directions for drivers, and passing them on in advance is the difference between arriving and circling.",
      },
      {
        title: "Weddings and events",
        body:
          "Puglia has become a destination-wedding region, and the transport problem is almost always the same: guests arriving on different flights into two different airports over two or three days, then everyone needing to reach one venue at one time. We can quote for airport arrivals, a coordinated run to the ceremony, and the return afterwards. Tell us guest numbers and the pickup points and we will put the whole thing in one written quotation.",
      },
      {
        title: "Beach resorts and the coast",
        body:
          "Coastal accommodation runs from large resorts to a handful of rooms above a cove. In July and August the coast roads are slow, and a pickup time that works in May may not work in August — if your stay is in high season, say so, and the quotation will reflect it rather than ignoring it.",
      },
      {
        title: "Hotels and private villas",
        body:
          "Town-centre hotels in Lecce, Ostuni, Monopoli and Polignano are frequently inside limited-traffic zones. The usual arrangement is a drop-off at the nearest legal point with help to the door; if the property has a permit or a preferred access point, tell us and we will pass it to the driver.",
      },
      {
        title: "Families and larger groups",
        body:
          "Passenger numbers and luggage decide the vehicle, so both go in the quotation request. Child seats can usually be arranged when requested in advance, and we will confirm availability rather than assume it. For groups large enough to need more than one vehicle, we will say so in the quote.",
      },
      {
        title: "Chauffeur services by the hour or day",
        body:
          "Some journeys are not point-to-point. A day in the Valle d'Itria taking in three towns, or a wedding party needing a car on call, is quoted by time rather than by route. Describe the day you have in mind and we will tell you what it involves.",
      },
    ],
  },

  booking: {
    heading: "How booking works",
    lead: "There is no instant checkout, and that is deliberate.",
    steps: [
      {
        title: "You describe the journey",
        body:
          "Pickup, drop-off, date, time, how many of you there are and how much luggage. If you have a flight number, a ship name or an accommodation name, include it — they are the details that make a pickup work.",
      },
      {
        title: "We arrange it and quote",
        body:
          "We take it to a local transfer company that covers the route, and send you the price and the arrangement in writing. If something about the journey will not work as described, we say so at this point rather than later.",
      },
      {
        title: "You decide",
        body:
          "Nothing is reserved and no vehicle is allocated to your date until you have agreed the quotation in writing. A request is not a booking.",
      },
      {
        title: "You pay the operator",
        body:
          "Payment is made directly to the local transfer company that carries out the journey. We are not a payment intermediary and we do not take card details.",
      },
    ],
  },

  practical: {
    heading: "Practical points worth knowing",
    lead:
      "Things that come up often enough in Puglia that they are better said before you ask.",
    items: [
      {
        term: "Airport pickups",
        detail:
          "Give us the flight number. A driver who knows the flight can follow it, which matters more in Puglia than in a larger hub because both airports are small and the arrivals hall empties quickly.",
      },
      {
        term: "Cruise pickups",
        detail:
          "Give us the ship and the all-aboard time. Berth assignments at Bari change, so the meeting point is confirmed around arrival rather than weeks ahead.",
      },
      {
        term: "Luggage",
        detail:
          "Tell us the real number of cases, including the awkward ones. A vehicle chosen for four passengers and four cabin bags is not the vehicle for four passengers with golf clubs.",
      },
      {
        term: "Child seats",
        detail:
          "Available on request in most cases, subject to the operator's stock on your date. Ask when you enquire; we will confirm rather than assume.",
      },
      {
        term: "Accessibility",
        detail:
          "Step-free and adapted vehicles exist in the region but are not universal. Tell us what is needed and we will check availability before quoting, rather than quoting and discovering afterwards.",
      },
      {
        term: "Limited-traffic zones",
        detail:
          "Several historic centres restrict vehicle access. Expect a drop-off at the edge of the zone with help to the door — this is normal here, not a shortcoming of the service.",
      },
      {
        term: "Season",
        detail:
          "July and August are busy on the coast roads and around the UNESCO sites. Journeys that are quick in spring take longer at the height of summer, and quotations reflect the date you are actually travelling.",
      },
      {
        term: "Journey times",
        detail:
          "We do not publish fixed durations. Traffic, season, the exact pickup point and roadworks all move them, and a guaranteed time would be a guess presented as a promise.",
      },
    ],
  },

  faq: {
    heading: "Questions we are asked about Puglia",
    items: [
      {
        question: "Should I fly to Bari or Brindisi?",
        answer:
          "It depends where you are staying. Bari suits the north and centre — the city itself, Alberobello and the Valle d'Itria, Polignano a Mare and Monopoli. Brindisi suits the south — Lecce, Ostuni and the whole of Salento. Ostuni sits near the dividing line and works from either. If only one airport has sensible flights, the transfer is still arrangeable; it is just a longer drive.",
      },
      {
        question: "Do I need a car in Puglia, or are transfers enough?",
        answer:
          "It depends on your stay. If you are based in one place and making a few excursions, individual transfers usually work out simpler than hiring a car, because parking in the historic centres is genuinely difficult. If you intend to move somewhere new every day across a wide area, a hire car may suit you better. We will say so if that is the honest answer for your itinerary.",
      },
      {
        question: "Can you collect from a masseria in the countryside?",
        answer:
          "Yes, and it is one of the most common requests we get. Send the property name and any arrival directions it has given you. Many masserie keep a standard set of driver directions precisely because the lanes are hard to find; forwarding them when you enquire is the single most useful thing you can do.",
      },
      {
        question: "Can you arrange transport for a wedding in Puglia?",
        answer:
          "Yes. The usual arrangement is airport arrivals for guests across several days, a coordinated run to the venue, and return journeys afterwards. Tell us the guest numbers, the pickup points and the times, and we will quote the whole thing together rather than piecemeal. We do not have agreements with specific venues and we do not claim to.",
      },
      {
        question: "We are on a cruise calling at Bari. Can we get to Alberobello and back?",
        answer:
          "That is one of the most requested journeys in the region. Give us the ship name, the arrival time and — importantly — the all-aboard time, and the schedule is planned backwards from the latter. We will tell you plainly if what you want to fit in is not realistic in the time ashore.",
      },
      {
        question: "How much does a transfer in Puglia cost?",
        answer:
          "There is no price list, because the price depends on the route, the vehicle, the number of passengers and the date. Describe the journey and you will get a written quotation. Nothing is charged until you have agreed it.",
      },
      {
        question: "How far in advance should I arrange a transfer?",
        answer:
          "As early as you reasonably can, particularly for July and August, for wedding parties, and for anything needing a larger vehicle or a child seat. Availability in Puglia is genuinely seasonal, and we would rather tell you early that something is tight than late.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer:
          "No. We arrange transfers with licensed local transfer companies and drivers across Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the journey",
    body:
      "Give us the pickup, the destination, the date and how many of you there are. We will come back with the arrangement and the price in writing — and if a journey will not work the way you have described it, we will tell you that instead.",
    cta: "Request a transfer quote",
  },
};
