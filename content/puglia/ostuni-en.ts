import type { OstuniPage } from "./types";

/**
 * Ostuni — English.
 *
 * ── Boundary, per the approved keyword map ────────────────────────────────
 * Ostuni "owns 'masseria transfer' and wedding-guest coordination as primary
 * themes. Other pages may mention masserie; only Ostuni leads on them."
 * The Brindisi page mentions masserie in one section; this page is built
 * around them. That is the intended division and it is why this page's
 * spine is town-versus-country rather than arrival logistics.
 *
 * It also does not own the "Bari or Brindisi?" comparison, which lives on
 * Brindisi and the pillar. What it does say — and must, because it is the
 * single most useful fact about Ostuni's position — is that the town sits
 * near the dividing line and works from either airport. Stating the
 * consequence for one town is not the same as hosting the comparison.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * "La Città Bianca", the white walls and white-painted architecture, the
 * 207 m elevation, the hilltop citadel still fortified by its ancient walls,
 * the four medieval gates, "about 8 km from the coast", the population, the
 * province of Brindisi, the olive oil and wine, and the masserie as
 * "fortified large estate-farms" are all from Ostuni's Wikipedia entry and
 * are quoted close to its wording. The 32–37 km range from Brindisi Airport
 * is the range the Phase 2 research produced, carried over unchanged.
 *
 * NOT asserted: any traffic-restriction scheme. The entry documents none,
 * and inventing one would be worse than describing what is verified — a
 * citadel on a hill, inside walls, reached through gates.
 *
 * No prices, no fleet claims, no testimonials, no guarantees, no named
 * venue partnerships.
 */

export const ostuniEn: OstuniPage = {
  meta: {
    title: "Ostuni masseria and airport transfers",
    description:
      "Private transfers to Ostuni and the masserie around it: Brindisi and Bari airports, countryside addresses, wedding-guest coordination. Tell us the journey for a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Ostuni",
    h1: "Ostuni transfers, town and countryside",
    lead: "Ostuni is a white town stacked on a hill about eight kilometres back from the sea, and most people who come here do not actually stay in it. They stay in a masseria somewhere in the olive country below — down a lane, behind a gate, with no street lighting. That is the whole reason this page exists.",
    primaryCta: "Request an Ostuni transfer quote",
    secondaryCta: "Masseria arrivals",
    facts: [
      { label: "Known as", value: "La Città Bianca — the White Town" },
      { label: "Elevation", value: "207 m, about 8 km from the coast" },
      { label: "Province", value: "Brindisi (BR)" },
      { label: "Nearest airport", value: "Brindisi (BDS), about 32–37 km" },
    ],
  },

  intro: {
    heading: "Why Ostuni is a transfer problem worth solving",
    paragraphs: [
      "The town is called the White Town for its white walls and white-painted architecture, and the old quarter is a citadel on top of a hill, still fortified by its ancient walls — walls that once had four gates. It is beautiful and it is almost entirely vertical. Around it, in a countryside that produces high-quality olive oil and wine, sit the masserie: fortified estate farms, many of them now hotels.",
      "Those two facts between them describe the arrival. If you are staying in the citadel, the last part of the journey is steep and narrow. If you are staying in a masseria — and most visitors are — the last part is an unlit country lane with a gate on it that is easy to drive past in the dark.",
      "We arrange these journeys with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe where you are going, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  twoWorlds: {
    heading: "Two Ostunis",
    lead: "Almost every question about a transfer here resolves to which of these two places you are actually going to. They are a few kilometres apart and they are completely different arrivals.",
    town: {
      heading: "The citadel",
      body: "The white old town on the hill, inside the walls. Steep, stepped in places, and built long before cars. Hotels and guesthouses here are small and the doors open onto lanes.",
      points: [
        "Drop-off is often at a gate or a square rather than the door",
        "Worth asking the property where cars stop — they all know",
        "Luggage up a stepped lane is the thing to plan around",
        "Short walk, usually; it is a small town",
      ],
    },
    country: {
      heading: "The masserie",
      body: "The olive country below and around the town. Converted farm estates, frequently several kilometres out, reached by lanes that are not always named and gates that are not always marked.",
      points: [
        "A map pin matters more than a town name",
        "Unlit at night, and phone signal can be patchy",
        "Many masserie keep written directions for drivers — send them",
        "A driver who has been before is worth more than any map",
      ],
    },
  },

  masserie: {
    heading: "Masseria arrivals",
    lead: "This is the strongest honest argument for a pre-arranged car anywhere in Puglia, and it is worth setting out plainly rather than selling.",
    paragraphs: [
      "A masseria is a fortified estate farm, and the ones that have become hotels kept what made them good farms: space, isolation and a long approach. San Domenico, one of the best known of them, was once held by the Knights of Malta. That history is exactly why they sit where they sit — away from the road, behind their own land.",
      "In daylight this is the point of the holiday. The trouble is that flights into Brindisi are frequently in the evening, and the combination of a dark lane, an unmarked turning, a hire car and a phone that has lost signal is the single most common way a Puglia trip starts badly. We hear about it constantly.",
      "None of that is an argument that you must book a transfer. It is an argument that if you are going to arrive after dark at a rural address you have never seen, somebody should know the way in advance — and the operators working out of Brindisi know most of the established masserie in this area.",
    ],
    problems: [
      {
        title: "The gate is easy to miss",
        body: "Many entrances are a break in a dry-stone wall with a small sign, or no sign. From a moving car at night, in both directions, it looks like nothing.",
      },
      {
        title: "The lane is not always named",
        body: "Satellite navigation will get you to the area. The last few hundred metres are often the part no map resolves properly.",
      },
      {
        title: "The address is not the entrance",
        body: "A registered address and the gate guests actually use are frequently different points, sometimes on different roads.",
      },
      {
        title: "Nothing is lit",
        body: "This is olive country, not suburbia. After dusk there is no street lighting to read a sign by.",
      },
    ],
    send: {
      heading: "Send this with your enquiry",
      items: [
        "The masseria's full name and its own written arrival directions — most keep a set for drivers",
        "A map pin or coordinates if the property gives them",
        "The nearest town and the road the entrance is off",
        "Your flight number, and the number of passengers and bags",
        "Whether anyone needs a child seat, and the ages",
        "Roughly what time you expect to arrive at the property, not just at the airport",
      ],
    },
  },

  airports: {
    heading: "Which airport for Ostuni",
    lead: "Ostuni is one of the few places in Puglia where this is a genuine question rather than an obvious answer, because it sits close to the line where the region's two airports divide.",
    options: [
      {
        airport: "Brindisi (BDS)",
        distance: "About 32–37 km",
        body: "The nearer of the two and the usual arrival. Allow around 35 minutes to the town itself; a masseria outside it may be a little more or a little less depending on which side it is on.",
      },
      {
        airport: "Bari (BRI)",
        distance: "Further, inland and north",
        body: "A longer drive, and entirely workable. Often the right choice if the flights are better, or if Ostuni is the southern end of a trip that started in the trulli country.",
      },
    ],
    note: "Ostuni sits near the dividing line between the two airports and works comfortably from either, which is unusual — most places in Puglia have a clear answer. If the flights point you at Bari, take them; it is a longer drive, not a problem.",
  },

  weddings: {
    heading: "Wedding transport around Ostuni",
    lead: "A great many weddings in Puglia happen at a masseria near Ostuni, and the transport for one is a coordination job rather than a booking.",
    paragraphs: [
      "The venue is rural, which means there is no walking to it and no taxi rank outside it. The guests arrive across several days, on different flights, into possibly different airports, and they are staying in several places — some at the venue, some in the town, some at other properties nearby. On the day, all of them have to arrive at one gate within about twenty minutes of each other, and afterwards they have to leave it late at night from a place with no public transport.",
      "That is why we would rather quote the whole thing as one piece of work. Treated as a dozen separate bookings it usually costs more, and it coordinates considerably worse.",
    ],
    phases: [
      {
        title: "Before — arrivals",
        body: "Guest collections from Brindisi and Bari spread across two or three days, each tied to its own flight number rather than to a guessed time.",
      },
      {
        title: "On the day — to the venue",
        body: "Coordinated runs from however many properties the party is spread across, in as many vehicles as the numbers need, arriving together rather than in a trickle.",
      },
      {
        title: "After — the late return",
        body: "The part most often left out of the planning. A rural venue at one in the morning has no other way home, and the return has to be arranged before the day, not during it.",
      },
      {
        title: "Departures",
        body: "Guests leaving over several days, again on their own flights. Worth arranging at the same time as the arrivals.",
      },
    ],
    limits: "We arrange transport and nothing else. We do not have agreements with specific venues, we do not act as a planner, and we do not claim either. If your venue has a transport arrangement it prefers, use it — we will say so rather than compete with it.",
  },

  luxury: {
    heading: "On the more expensive end of the market",
    paragraphs: [
      "Ostuni has a concentration of high-end rural hotels, and people arriving at them reasonably expect the ground transport to match. What that means in practice is narrower than the marketing usually suggests: a vehicle appropriate to the party and the luggage, a driver who knows the property, and an arrival that happens without three phone calls.",
      "What we will not do is describe a fleet we do not own or promise a specific class of vehicle before an operator has confirmed it. Tell us the party size, the luggage and anything that genuinely matters — a child seat, a wheelchair, a dog, an instrument — and the quotation will say exactly what is being provided. Everything in it will have been confirmed before you see it.",
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things worth settling before you fly.",
    items: [
      {
        term: "Arrival directions",
        detail: "The single most useful thing you can send for an Ostuni journey. Ask the property for the version they give drivers and forward it unchanged.",
      },
      {
        term: "Evening arrivals",
        detail: "Brindisi's summer schedule has plenty of late flights, and a rural address after dark is the case a transfer is actually for. Availability late at night is tighter, so earlier notice helps.",
      },
      {
        term: "The citadel",
        detail: "If you are staying inside the old town rather than outside it, expect the drop-off to be at a gate or a square and the last stretch to be on foot, possibly up steps.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Arranged with the operator in advance, and in high season genuinely in demand.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. For a masseria run the vehicle choice matters more than usual, because there is no second trip.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Ostuni transfers",
    items: [
      {
        question: "Can you collect us from a masseria in the countryside?",
        answer: "Yes, and around Ostuni it is the most common request we get. Send the property's full name and the arrival directions it has given you — most masserie keep a set written specifically for drivers, because the lanes are hard to find. Forwarding those is the single most useful thing you can do.",
      },
      {
        question: "Which airport should I use for Ostuni?",
        answer: "Brindisi is nearer, at roughly 32–37 km, and is the usual arrival. Ostuni sits near the line where the two airports divide, though, so Bari works comfortably too — it is simply a longer drive. If the flights point you at Bari, take them.",
      },
      {
        question: "How far is Ostuni from the sea?",
        answer: "About 8 km. The town is on a hill inland, not on the coast, which surprises people who have only seen photographs of it. If you are staying at a beach property rather than in or near the town, say so — it changes the journey.",
      },
      {
        question: "Can a car reach my hotel in the old town?",
        answer: "It can reach a point near it. The old quarter is a citadel on top of a hill, still inside its ancient walls, and it was built long before cars — so the practical drop-off is often at a gate or a square, with a short walk, sometimes up steps, to the door. It is a small town and the walk is rarely long, but it is worth knowing before you arrive with cases.",
      },
      {
        question: "Can you arrange transport for a wedding at a masseria?",
        answer: "Yes, and it is a large part of what we do around Ostuni. The usual shape is guest arrivals across several days, coordinated runs to the venue on the day, and late return journeys afterwards — that last one being the part most often forgotten. Tell us guest numbers, pickup points and times and we will quote it as one piece of work rather than piecemeal. We do not have agreements with specific venues and we do not claim to.",
      },
      {
        question: "Do we need a hire car if we are staying at a masseria?",
        answer: "It depends on the stay. If you are at the property most of the time with two or three excursions, individual transfers usually work out simpler, because parking in the historic centres around here is genuinely difficult. If you intend to be out somewhere different every day, a hire car may suit you better — we will say so if that is the honest answer.",
      },
      {
        question: "How much does a transfer to Ostuni cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date — and a masseria several kilometres out is not the same journey as the town itself. Describe where you are going and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the directions the property gave you",
    body: "The masseria's name and its own arrival directions, your flight number, and how many of you there are. We come back with the arrangement and the price in writing — and if what you have described will not work, we will tell you that instead.",
    cta: "Request a transfer quote",
  },
};
