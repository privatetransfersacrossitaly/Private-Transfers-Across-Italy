import type { MonopoliPage } from "./types";

/**
 * Monopoli — English.
 *
 * ── Boundary, per the approved keyword map ────────────────────────────────
 * "Leads on the harbour town and its beaches. Polignano is a linked
 * neighbour." So Polignano is named and linked and never described here;
 * the cliff setting belongs to its own page. Alberobello is named as an
 * excursion, not described — that page owns the trulli and the valley.
 *
 * ── Sourcing, and one distance worth getting right ────────────────────────
 * Population 49,246 (31 December 2014), area 157.89 km², elevation 9 m,
 * Metropolitan City of Bari, the Castle of Charles V (finished 1525,
 * pentagonal, a jail until 1969, now exhibitions), the 18th-century
 * cathedral and minor basilica, the coastal castle of St Stephen (1086),
 * Cala Porta Vecchia as the city beach, the Via Traiana claim, and the
 * bordering comuni — all from Monopoli's Wikipedia entry.
 *
 * That entry gives two figures for Bari: "about 40 kilometres southeast of
 * Bari" in the lead and "44 from Bari" in the geography section. Both are
 * to the *city*. The Bari page in this cluster gives about 60 km from the
 * *airport*, which is 8 km north-west of the city — so the numbers are
 * consistent and the page says which is which, because a reader comparing
 * them would otherwise think one of us had it wrong.
 *
 * Capitolo, the resort stretch south of the town, is NOT in the entry, so
 * it is not named here as a verified place. Beaches are described in terms
 * of the one the entry names and the general fact that the comune is on the
 * Adriatic coast.
 *
 * No prices, no fleet claims, no testimonials, no guarantees.
 */

export const monopoliEn: MonopoliPage = {
  meta: {
    title: "Monopoli transfers and coastal arrivals",
    description:
      "Private transfers to Monopoli: Bari airport, the harbour town, the beaches either side of it, and days out to Alberobello. Tell us the journey for a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Monopoli",
    h1: "Monopoli transfers",
    lead: "Monopoli is a working harbour town on the Adriatic with a long coastline either side of it, and that coastline is the thing worth getting right. Two properties a few kilometres apart can mean two quite different journeys, and the town itself may not be where you are staying at all.",
    primaryCta: "Request a Monopoli transfer quote",
    secondaryCta: "Along the coast",
    facts: [
      { label: "Where", value: "Adriatic coast, about 40 km SE of Bari city" },
      { label: "Metropolitan city", value: "Bari (BA)" },
      { label: "Population", value: "49,246" },
      { label: "Comune area", value: "157.89 km²" },
    ],
  },

  intro: {
    heading: "A town with a long shoreline",
    paragraphs: [
      "Monopoli is described in its own right as an agricultural, industrial and tourist centre — which is an unusually honest summary, because it is all three. It is not a resort that happens to have a town attached; it is a town of nearly fifty thousand people with a working port, and the tourism sits alongside the rest rather than replacing it. That is most of its appeal.",
      "The comune covers nearly 158 square kilometres, and a good share of the accommodation people book is spread along the coast rather than concentrated in the old town. Resorts, converted farm buildings and self-catering properties run north and south of the harbour, which is why the single most useful thing in an enquiry is not the word \"Monopoli\" but where along that shoreline you actually are.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe where you are going, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  coast: {
    heading: "Where along the coast are you?",
    lead: "The old town is the middle of the line, not the whole of it. These are the stretches people stay on, read from the north end down — and the difference between them is real driving time, not minutes.",
    stops: [
      {
        name: "North, towards Polignano",
        position: "Above the harbour",
        note: "The coast running up towards Polignano a Mare, the next town along. Properties here are closer to Bari and the airport, and a little further from the Valle d'Itria.",
      },
      {
        name: "The old town and harbour",
        position: "The centre",
        note: "The historic core and the old port. Hotels here are small, the streets are narrow, and the practical drop-off is sometimes at the edge rather than at the door.",
      },
      {
        name: "Cala Porta Vecchia",
        position: "At the town's edge",
        note: "The city beach, right beside the old town. The only beach the municipal record names, and the one you can walk to from a town-centre hotel.",
      },
      {
        name: "South, towards Fasano",
        position: "Below the harbour",
        note: "The longer stretch, running down towards Fasano — the town records the distance between them as 15 km. Most of the larger coastal resorts and country properties are on this side.",
      },
    ],
    footnote: "A property's address will often just say Monopoli, because the comune is large and that is the registered town. Send the full address, or the map pin the property gives you, rather than the town name on its own — on a shoreline this long, the town name narrows the search down to about twenty kilometres.",
  },

  harbour: {
    heading: "The old town and the port",
    paragraphs: [
      "The historic centre sits around the old port, and the two most visible things in it are both fortified. The Castle of Charles V was finished in 1525 on a pentagonal plan, standing on a promontory that was originally separated from the medieval city; it was enlarged in the seventeenth century, served as a jail from the early nineteenth century until 1969, and now houses exhibitions and cultural events. Further along the coast, the castle of St Stephen was built in 1086 by Godfrey of Conversano and later became a Benedictine monastery.",
      "The cathedral — the eighteenth-century Basilica of the Madonna della Madia, a minor basilica — is the other landmark, and the streets around it are the part of Monopoli people walk. Monopoli also has the longest stretch of the Via Traiana of any town in Puglia, with an archaeological park created in 2012.",
      "For a transfer, what matters about all of this is simply that it is old and compact. A car will get close; it will not always get to the door.",
    ],
    sights: [
      {
        title: "Castle of Charles V",
        body: "Finished 1525, pentagonal, on its own promontory. A jail until 1969, now exhibitions and events.",
      },
      {
        title: "Basilica della Madonna della Madia",
        body: "The eighteenth-century cathedral, a minor basilica, at the centre of the old town.",
      },
      {
        title: "Castle of St Stephen",
        body: "Built 1086 by Godfrey of Conversano, later a Benedictine monastery, out along the coast.",
      },
    ],
  },

  arriving: {
    heading: "Getting to Monopoli",
    lead: "Bari is the airport, and there is a railway station in the town — which for some arrivals genuinely is the better answer.",
    routes: [
      {
        from: "Bari Airport (BRI)",
        distance: "About 60 km",
        body: "The usual arrival. Note that the town's own record gives 44 km to Bari — that is to the city. The airport sits a further 8 km north-west of it, which is why the airport figure is larger. Both numbers are right; they measure different things.",
      },
      {
        from: "Brindisi Airport (BDS)",
        distance: "The town records 75 km to Brindisi",
        body: "A longer drive, and perfectly workable if the flights suit better or if Monopoli is the northern end of a trip based further south.",
      },
      {
        from: "By train",
        distance: "Monopoli has its own station",
        body: "For a town-centre hotel with modest luggage this is a reasonable way in. The arithmetic changes if you are staying out along the coast, which most people are, because the station is in the town and the property may not be.",
      },
    ],
    note: "Give us the flight number rather than the arrival time. The driver can then see a delay or a diversion for themselves, which a time written on a form cannot show them.",
  },

  staying: {
    heading: "The three kinds of stay",
    lead: "Almost everyone booking a transfer to Monopoli falls into one of these, and each one changes the journey.",
    groups: [
      {
        title: "In the old town",
        body: "Small hotels and apartments around the port. Walkable, close to the city beach, and the part of a stay that needs no car at all once you are there. The arrival is the only awkward bit, and only mildly.",
      },
      {
        title: "A coastal resort",
        body: "The larger properties along the shore, mostly to the south. They have their own entrances and parking, so the arrival itself is simple — but they are genuinely out of town, and walking to dinner is usually not an option.",
      },
      {
        title: "A country property",
        body: "Converted farm buildings inland from the coast. The same proposition as anywhere in Puglia: a lane, a gate, no street lighting. Send the property's own arrival directions if it has given you any.",
      },
    ],
  },

  excursions: {
    heading: "Days out from Monopoli",
    lead: "Monopoli is a good base precisely because of what is within half an hour of it. These are the journeys people ask for most — each is described on its own page.",
    items: [
      {
        id: "alberobello",
        name: "Alberobello",
        note: "Inland into the trulli country. The two comuni actually border one another, which surprises people who assume the Valle d'Itria is far away — it starts immediately behind the coast.",
      },
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        note: "The next town up the coast, and a short run. Often an evening out rather than a day.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        note: "South and inland, the White Town on its hill. A straightforward day from here.",
      },
      {
        id: "bari",
        name: "Bari",
        note: "The regional capital and the cruise terminal, back up the coast. The town records 44 km to the city.",
      },
      {
        id: null,
        name: "Martina Franca",
        note: "Up into the valley — the town's own record gives 33 km. Usually combined with Alberobello in a single day.",
      },
    ],
    footnote: "A day taking in two or three of these is normally arranged as a car and driver with waiting time rather than as separate one-way transfers, because the waiting is most of what you are actually arranging.",
  },

  practical: {
    heading: "Practical detail",
    lead: "What is worth settling before you fly.",
    items: [
      {
        term: "The full address",
        detail: "More important here than in a small town, because the comune covers nearly 158 square kilometres of coast and countryside and the word Monopoli alone does not locate a property.",
      },
      {
        term: "Old-town access",
        detail: "The historic centre around the port is compact and old. A car gets close; the last stretch to the door is sometimes on foot. Worth knowing before you arrive with cases.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Seats are arranged with the operator in advance — a driver cannot produce one on arrival.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and a guess shows up at the kerb.",
      },
      {
        term: "Summer traffic",
        detail: "The coast road in August is not the coast road in March. Published driving times assume ordinary conditions and high summer is not ordinary.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Monopoli transfers",
    items: [
      {
        question: "How far is Monopoli from Bari airport?",
        answer: "About 60 km by published route figures. You may see 40 or 44 km quoted elsewhere — those are distances to Bari the city, and the airport sits a further 8 km north-west of it. Both are right; they measure different things. Allow roughly 45 minutes to an hour in ordinary conditions.",
      },
      {
        question: "My booking just says \"Monopoli\" — is that enough?",
        answer: "Usually not. The comune covers nearly 158 square kilometres and the accommodation is spread along a long stretch of coast, so the town name narrows it down to about twenty kilometres rather than to an address. Send the full address or the property's map pin.",
      },
      {
        question: "Can you take us from Monopoli to Alberobello?",
        answer: "Yes, and it is the most requested day out from here. The two comuni actually border one another, so the trulli country starts closer than most people expect. It is normally arranged as a car and driver for the day with waiting time rather than as two one-way transfers.",
      },
      {
        question: "Is there a train to Monopoli?",
        answer: "Yes — the town has its own railway station. For a hotel in the old town with modest luggage that is a reasonable way to arrive. If you are staying out along the coast, which most visitors are, the station is in the town and your property probably is not, so the comparison changes.",
      },
      {
        question: "Can a car reach my hotel in the old town?",
        answer: "It can get close. The historic centre around the port is compact and old, so the practical drop-off is sometimes at the edge rather than at the door, with a short walk. Send the full street address and anything the property has told you about where vehicles stop.",
      },
      {
        question: "Do we need a hire car for a week in Monopoli?",
        answer: "It depends on where you are staying and what you want to do. In the old town with two or three excursions, individual transfers usually work out simpler, because parking in the historic centres around here is difficult. Out at a coastal property planning to be somewhere different every day, a hire car may suit you better — we will say so if that is the honest answer.",
      },
      {
        question: "How much does a transfer to Monopoli cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date — and a property at the southern end of the coast is not the same journey as the town centre. Describe where you are going and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us where on the coast",
    body: "The flight number, the full address or map pin, and how many of you there are. We come back with the arrangement and the price in writing — and if the journey will not work the way you have described it, we will tell you that instead.",
    cta: "Request a transfer quote",
  },
};
