import type { AlberobelloPage } from "./types";

/**
 * Alberobello — English.
 *
 * ── Boundary, per the approved keyword map ────────────────────────────────
 * Alberobello "owns Valle d'Itria orientation — Locorotondo, Martina Franca,
 * Cisternino — as onward context." So the valley section is here and not on
 * the pillar, and the neighbouring towns are named here as context rather
 * than described as destinations. The airport comparison is not re-argued;
 * the page states which airport is nearer and links on.
 *
 * ── Sourcing, and one source that refused ─────────────────────────────────
 * The UNESCO facts — official name "The Trulli of Alberobello", criteria
 * iii/iv/v, reference 787, inscribed 1996 at the 20th Session, 10.52 ha —
 * are as recorded in Alberobello's Wikipedia entry, which cites the UNESCO
 * listing. whc.unesco.org itself returns HTTP 403 to automated requests, so
 * nothing here is attributed to a page I could not read.
 *
 * Also from that entry: the dry-stone construction without mortar, the 1481
 * obligation that the houses be demolishable, the self-supporting domed
 * roofs, the pinnacles signed by the master trullaro, the settlement by
 * about forty families from Noci under Count Andrea Matteo III Acquaviva
 * d'Aragona, population 10,237 (2022), elevation 402.5 m, Metropolitan City
 * of Bari, and Rione Monti.
 *
 * District scale — roughly a thousand trulli in Rione Monti and around four
 * hundred in Aia Piccola — comes from travel and tourism sources, not from
 * the encyclopaedia entry or UNESCO, and is written as approximate because
 * that is what it is. The Trullo Sovrano is described as the two-storey
 * trullo and now a house-museum; its national-monument designation year is
 * given as 1923 by some sources and 1930 by others, so no year is printed.
 *
 * Road distances from Bari (about 70 km) are those used on the Bari page.
 *
 * NOT asserted: any specific pedestrian or limited-traffic scheme. No source
 * I could reach documents one in publishable form. The page says what is
 * true and verifiable instead — that the districts are protected, that they
 * are built of narrow stepped lanes, and that a car does not belong in them.
 *
 * No prices, no fleet claims, no testimonials, no guarantees.
 */

export const alberobelloEn: AlberobelloPage = {
  meta: {
    title: "Alberobello transfers and trulli arrivals",
    description:
      "Private transfers to Alberobello: Bari and Brindisi airports, trulli accommodation, cruise excursions and the Valle d'Itria. Tell us the journey for a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Alberobello",
    h1: "Alberobello transfers",
    lead: "Alberobello is a UNESCO World Heritage Site that people live in. Two whole districts of dry-stone trulli, roughly fourteen hundred of them, laid out as narrow stepped lanes — which is wonderful to walk through and no place at all for a car. Almost every journey here ends with a short walk, and the useful question is where it starts from.",
    primaryCta: "Request an Alberobello transfer quote",
    secondaryCta: "The two districts",
    facts: [
      { label: "World Heritage", value: "Inscribed 1996" },
      { label: "Elevation", value: "402.5 m" },
      { label: "Population", value: "10,237" },
      { label: "Nearest airport", value: "Bari (BRI), about 70 km" },
    ],
  },

  listing: {
    heading: "What is actually protected",
    officialName: "The Trulli of Alberobello",
    rows: [
      { label: "Inscribed", value: "1996, at the 20th Session" },
      { label: "Criteria", value: "Cultural: iii, iv, v" },
      { label: "Reference", value: "787" },
      { label: "Property area", value: "10.52 ha" },
    ],
    note: "These are the UNESCO listing details as recorded in Alberobello's encyclopaedia entry, which cites the listing. The UNESCO site itself refuses automated requests, so nothing above is quoted from a page we could not read — check whc.unesco.org directly if the exact wording matters to you.",
  },

  intro: {
    heading: "Why the town looks like this",
    paragraphs: [
      "A trullo is a dry-stone house with a conical, self-supporting domed roof, built without mortar. That last detail is not a style choice. In 1481 the local count required that the houses be built dry, without mortars, so that they could be configured as precarious buildings and easily demolished — a way of avoiding the taxes the Spanish Viceroy of the Kingdom of Naples levied on settlements. A town that could be taken down in a day was not, on paper, a town.",
      "What began as tax avoidance became a building tradition. The peasants found the round form with a self-supporting domed roof the simplest configuration, and the roofs acquired decorative pinnacles that worked as the signature of the builder — the master trullaro. The settlement itself dates from the early sixteenth century, when about forty peasant families from Noci were allowed to settle here by Count Andrea Matteo III Acquaviva d'Aragona.",
      "Alberobello is the only inhabited centre with an entire district of trulli, and is considered the cultural capital of the trulli of the Itria Valley. That is the distinction worth understanding: trulli are scattered across the whole valley, but only here do they make up the town.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing first.",
    ],
  },

  districts: {
    heading: "Two districts, two different visits",
    lead: "The protected trulli are concentrated in two quarters on opposite slopes, and knowing which one you are heading for changes where it makes sense to be dropped.",
    items: [
      {
        name: "Rione Monti",
        scale: "Roughly a thousand trulli",
        character: "The busy one",
        body: "The larger district, running down the hillside, and the one almost every photograph is taken in. A great many of its trulli are now shops, bars and places to stay, which makes it lively and, in July and August, very full indeed.",
      },
      {
        name: "Rione Aia Piccola",
        scale: "Around four hundred trulli",
        character: "The quiet one",
        body: "Smaller, close by, and still largely residential — many of its trulli are lived in by local families rather than let or sold from. It is what Rione Monti would feel like without the commerce, and it is the reason to come back in the evening.",
      },
    ],
    note: "District sizes here are approximate and come from travel sources rather than the UNESCO listing, which does not publish a count. The one building most visitors look for is the Trullo Sovrano, the town's two-storey trullo, now a house-museum — unusual because trulli are otherwise single-storey.",
  },

  arriving: {
    heading: "Getting to Alberobello",
    lead: "The town is inland, up in the Valle d'Itria at just over 400 metres, which is further from the sea and further up than people expect from the photographs.",
    routes: [
      {
        from: "Bari Airport (BRI)",
        distance: "About 70 km",
        body: "The usual arrival and the nearer airport. Published figures put the drive at around an hour. This is the classic first-day journey in Puglia — straight from the aircraft into the trulli country.",
      },
      {
        from: "Brindisi Airport (BDS)",
        distance: "Further south",
        body: "Workable, and sometimes the right answer if Alberobello is the northern end of a trip based in Salento, or if the flights simply suit better. It is a longer drive than from Bari.",
      },
      {
        from: "Bari cruise terminal",
        distance: "A shore excursion",
        body: "Alberobello is the single most requested excursion from ships calling at Bari. The planning for one is different from an airport transfer, because the all-aboard time is a hard limit rather than a preference.",
      },
    ],
    note: "Road distances come from route planners and transfer operators, which differ by a few kilometres depending on the route taken, so treat them as orientation. Driving times depend heavily on the season: the roads into the valley in August are not the roads in March.",
  },

  dayVisit: {
    heading: "Coming for the day",
    lead: "Most people see Alberobello on a day out rather than staying the night, and the day has a shape worth knowing.",
    paragraphs: [
      "The town is small and the two districts can be walked in a few hours. What fills the day is everything around it — the valley towns, a masseria lunch, a winery — which is why a car with a driver for the day often suits better than a one-way transfer in each direction.",
      "If you are coming from a cruise ship at Bari, the arithmetic is tighter and the constraint is absolute. Give us the ship's name, the arrival time and the all-aboard time, and the day is planned backwards from the all-aboard. If what you want to fit in is not realistic in the hours ashore, we would rather say so while you can still change the plan.",
    ],
    steps: [
      {
        title: "Arrive early or late",
        body: "The middle of a summer day is when the coaches are in. Early morning and the hour before dusk are a different town entirely.",
      },
      {
        title: "Expect to walk",
        body: "The lanes are narrow, stepped in places and built of stone worn smooth. Sensible shoes matter more here than in most Italian towns.",
      },
      {
        title: "Both districts, not one",
        body: "Rione Monti is the famous one, and Aia Piccola five minutes away is the one people remember. Seeing only the first is the common mistake.",
      },
      {
        title: "Agree where the car waits",
        body: "Cars do not go into the districts. Settle the meeting point with your driver before you set off walking, not afterwards.",
      },
    ],
  },

  staying: {
    heading: "Staying in a trullo",
    lead: "A good many visitors now stay in a converted trullo, either in the town or out in the surrounding countryside, and the two are quite different arrivals.",
    paragraphs: [
      "In the town, a trullo conversion sits on a lane inside or beside a protected district — which means a car brings you close and you walk the last part, over stone, possibly up steps, with your luggage. It is a short walk and it is worth asking the property exactly where vehicles can stop, because every guest before you has arrived the same way and they will know precisely.",
      "Out in the countryside, a trullo or a masseria is the same proposition as anywhere else in Puglia: an unlit lane, a gate that is easy to miss, and a satellite view that is mostly olive trees. Send the property's own arrival directions with your enquiry. Many of them keep a set written for drivers for exactly this reason.",
    ],
  },

  valley: {
    heading: "The Valle d'Itria around it",
    lead: "Alberobello is the best-known town in the valley but not the only reason to be in it. These are the neighbours people usually combine it with — named here as context, since each is a short drive rather than a separate trip.",
    towns: [
      {
        id: null,
        name: "Locorotondo",
        note: "A circular hill town of whitewashed houses, looking out over the valley. Frequently paired with Alberobello in the same day.",
      },
      {
        id: null,
        name: "Martina Franca",
        note: "The largest of the valley towns, and a baroque one — a different architecture entirely from the trulli a few kilometres away.",
      },
      {
        id: null,
        name: "Cisternino",
        note: "A small whitewashed town on the valley's southern edge, known for its old centre.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        note: "Beyond the valley's southern edge, the White Town on its hill — and the masserie below it.",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        note: "Down on the Adriatic coast, about half an hour away. A common pairing: a morning in the trulli, an afternoon by the sea.",
      },
    ],
    footnote: "A day combining two or three of these is usually arranged as a car and driver for the day rather than as separate transfers, because the waiting time between stops is most of what you are actually arranging.",
  },

  practical: {
    heading: "Practical detail",
    lead: "The things specific to arriving here.",
    items: [
      {
        term: "Cars and the districts",
        detail: "The trulli quarters are protected and built of narrow stepped lanes. A car gets you to the edge, not to the door, and that is the correct outcome rather than a limitation.",
      },
      {
        term: "Luggage over stone",
        detail: "If you are staying in the town, the last stretch is on foot over worn stone, sometimes up steps. Worth knowing if anyone in the party would find that hard, because it may change where it is best to stop.",
      },
      {
        term: "Cruise all-aboard times",
        detail: "For an excursion from Bari, the all-aboard time is the only time that matters, and it is earlier than the departure printed on the ticket. Send it with your enquiry.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages when you enquire. Arranged with the operator in advance; a driver cannot produce one on the day.",
      },
      {
        term: "Seasonality",
        detail: "Alberobello is one of the busiest places in Puglia in high summer. Arranging early matters more here than almost anywhere else in the region.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Alberobello transfers",
    items: [
      {
        question: "How far is Alberobello from Bari airport?",
        answer: "About 70 km by published figures, and roughly an hour's drive. Bari is the nearer of the two Puglia airports for Alberobello and the usual arrival. Brindisi works too, but it is a longer drive.",
      },
      {
        question: "Can a car drive into the trulli districts?",
        answer: "No, and you would not want it to. Rione Monti and Aia Piccola are protected districts of narrow, stepped stone lanes. A transfer brings you to the edge and you walk the last part — a short walk in a small town. Agree the exact meeting point with your driver before you set off.",
      },
      {
        question: "We are on a cruise calling at Bari. Can we see Alberobello and get back?",
        answer: "It is the most requested excursion from the port. Give us the ship's name, the arrival time and — most importantly — the all-aboard time, and the day gets planned backwards from the last of those. We will tell you plainly if what you want to fit in is not realistic in the hours ashore.",
      },
      {
        question: "Why is Alberobello a World Heritage Site?",
        answer: "It was inscribed in 1996 as \"The Trulli of Alberobello\", under cultural criteria iii, iv and v, covering a property of 10.52 hectares. Alberobello is the only inhabited centre with an entire district of trulli, which is what distinguishes it from the many scattered trulli elsewhere in the Itria Valley.",
      },
      {
        question: "Can you collect us from a trullo in the countryside?",
        answer: "Yes, and it is common. A rural trullo or masseria is reached the same way as any country property here: an unnamed lane and a gate that is easy to drive past. Send the property's own arrival directions with your enquiry — many keep a set written for drivers precisely because the turnings are hard to find.",
      },
      {
        question: "Can you combine Alberobello with other Valle d'Itria towns?",
        answer: "Yes, and it is usually the better way to spend the day. Locorotondo, Martina Franca and Cisternino are all short drives away, and Monopoli is about half an hour down on the coast. A day like that is arranged as a car and driver with waiting time rather than as separate transfers.",
      },
      {
        question: "How much does a transfer to Alberobello cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers, the date, and whether you want a one-way transfer or a car for the day. Describe what you have in mind and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the day you want",
    body: "The flight number or the ship, where you are staying, and whether you want a one-way transfer or a car for the day. We come back with the arrangement and the price in writing — and if the day will not fit the way you have described it, we will say so.",
    cta: "Request a transfer quote",
  },
};
