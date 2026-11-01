import type { SalentoPage } from "./types";

/**
 * Salento — English.
 *
 * ── The boundary that matters most in the whole cluster ───────────────────
 * "Sub-regional only. Must not re-describe Lecce; links to it as the main
 * arrival city." Lecce has its own page with its own baroque, its own three
 * gates and its own historic-centre arrivals; if this page described the
 * city as well, the two would compete for the same searches and the better
 * of them would lose. So Lecce appears here exactly twice — once in the
 * list of places to base yourself, and once as a link — and the page's
 * structure gives it nowhere else to go. That is deliberate: the content
 * type has no section a city description could live in.
 *
 * Brindisi owns BDS and the airport comparison. Ostuni is, on the evidence,
 * not in Salento at all (see below), so it is linked as a neighbour and not
 * treated as part of the peninsula.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Salento's definition, its provinces, the "heel" description, the seas and
 * straits, the 5,856.57 km² area, the 2017 population estimate of 1,785,500
 * and Salentino Griko are from the Salento entry. Crucially, that entry
 * puts the boundary at "most of Brindisi province except Fasano, Ostuni and
 * Cisternino" — which is why this page does not claim Ostuni, and why the
 * Ostuni page was never written as a Salento page.
 *
 * Otranto, Gallipoli and Santa Maria di Leuca facts come from their own
 * entries. Three traps avoided:
 *
 *  1. Otranto is very commonly called Italy's easternmost town. Its entry
 *     does not say that. It says the Faro della Palascìa, about five
 *     kilometres south-east of the town, "marks the most easterly point of
 *     the Italian mainland". This page says that and not the other thing.
 *  2. Gallipoli's entry gives two conflicting population figures — 19,536
 *     in the infobox and 31,862 in the lead — so no population is printed.
 *  3. Where the two seas meet is given as "traditionally considered", not
 *     as a fact, and this page carries the qualifier through.
 *
 * Porto Cesareo's marine protected area was set up by ministerial decree in
 * 1997 and is managed jointly with Nardò; the coastal distance and hectare
 * figures that circulate could not be confirmed against an official source,
 * so they are not printed.
 *
 * No prices, no fleet claims, no testimonials, no guarantees.
 */

export const salentoEn: SalentoPage = {
  meta: {
    title: "Salento private transfers",
    description:
      "Private transfers across Salento: Brindisi airport, Gallipoli, Otranto, Santa Maria di Leuca and Porto Cesareo. How many journeys a week here really takes.",
  },

  hero: {
    eyebrow: "Puglia · Salento",
    h1: "Private transfers across Salento",
    lead: "Nobody stays in Salento. They stay somewhere in it — a town on one coast, a masseria inland, a beach on the other side — and then they move, because the things worth seeing are spread across a peninsula with a different sea on each side. This page is about the moving.",
    primaryCta: "Request a Salento transfer quote",
    secondaryCta: "How many journeys?",
    facts: [
      { label: "What it is", value: "The heel of the Italian boot" },
      { label: "Provinces", value: "Lecce, Brindisi, Taranto" },
      { label: "Area", value: "5,856.57 km²" },
      { label: "Main airport", value: "Brindisi (BDS)" },
    ],
  },

  definition: {
    heading: "What Salento actually is",
    paragraphs: [
      "Salento is a cultural, historical and geographic region at the southern end of Apulia — a sub-peninsula of the Italian peninsula, usually described as the heel of the boot. It is not an administrative region, which is why its edges are vaguer than people expect and why two guidebooks will draw it differently.",
      "By the standard definition it covers the whole province of Lecce, most of the province of Brindisi, and the south-eastern part of the province of Taranto without the city itself. Three named exceptions sit outside it in the Brindisi province: Fasano, Ostuni and Cisternino. That matters practically rather than pedantically — people book \"a week in Salento\" and then stay at a masseria near Ostuni, which is a different part of Puglia with different driving times.",
      "Geographically it divides the Gulf of Taranto to the west from the Strait of Otranto to the east, with the Adriatic to the north and the Ionian to the south. In plain terms: two coasts, and the peninsula is narrow enough that you can be on the other one within the hour.",
      "We arrange transfers across the whole of it with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing first.",
    ],
    bounds: [
      {
        term: "Northern edge",
        detail: "Roughly the Taranto–Ostuni line. Fasano, Ostuni and Cisternino sit outside Salento, in the part of Puglia that belongs to the Valle d'Itria instead.",
      },
      {
        term: "The two coasts",
        detail: "Adriatic to the east and north, Ionian to the west and south. They are genuinely different — rock and depth on one side, sand and shallows on the other.",
      },
      {
        term: "The southern tip",
        detail: "Santa Maria di Leuca, at the very end of the peninsula. Further than it looks on a map and the single most underestimated drive here.",
      },
      {
        term: "Language",
        detail: "Greek is still spoken in parts of Salento, as Salentino Griko — a survival from the Byzantine centuries rather than a modern import.",
      },
    ],
  },

  circuit: {
    heading: "The places people actually go",
    lead: "Read as a circuit rather than a list: down one coast, around the tip, and back up the other. Which coast a place is on tells you more about the journey than the kilometres do.",
    stops: [
      {
        name: "Otranto",
        coast: "Adriatic",
        reach: "Down the eastern coast",
        body: "A small coastal town and port of about five and a half thousand people. Its cathedral was consecrated in 1088 and carries a mosaic pavement of 1166 showing the months and Old Testament subjects — the thing most visitors come for. The relics of the Martyrs of Otranto, killed when the Ottomans took the town in 1480 and canonised in 2013, surround the high altar. The Faro della Palascìa, about five kilometres south-east, marks the most easterly point of the Italian mainland.",
      },
      {
        name: "Santa Maria di Leuca",
        coast: "The tip",
        reach: "The very end of the peninsula",
        body: "A frazione of the comune of Castrignano del Capo, at the end of everything. Punta Meliso is traditionally considered the point where the waters of the Adriatic and the Ionian meet — traditionally, because a rival promontory, Punta Ristola, sits about 440 metres further south. The Basilica De Finibus Terrae, \"the end of the land\", was built between 1720 and 1755 and is linked to the port by a staircase of 284 steps. The lighthouse stands 47 metres tall at 102 metres above sea level.",
      },
      {
        name: "Gallipoli",
        coast: "Ionian",
        reach: "Up the western coast",
        body: "From the Greek Kallípolis, \"beautiful city\". The old town sits on a limestone island joined to the mainland by a bridge built in the sixteenth century — which is the whole character of the place, and also the reason vehicles stop where they stop. The Angevine-Aragonese castle was begun in the thirteenth century by the Byzantines and remade repeatedly; its Rivellino bastion dates from 1522. The town faces the Gulf of Taranto, part of the Ionian Sea.",
      },
      {
        name: "Porto Cesareo",
        coast: "Ionian",
        reach: "Further up the western coast",
        body: "A shallow, sandy stretch of the Ionian coast with small islands offshore, and the side families more often choose. Its marine protected area was established by ministerial decree in 1997 and is managed jointly with neighbouring Nardò. Figures for the reserve's size circulate widely but could not be confirmed against an official source, so they are not repeated here.",
      },
      {
        name: "Lecce",
        coast: "Inland",
        reach: "The usual arrival city",
        body: "The baroque city at the top of the peninsula, and where most Salento stays begin. It has a page of its own and is not described again here — follow the link for the city, its three gates and its historic-centre arrivals.",
      },
    ],
    footnote: "Distances across Salento vary considerably between published sources depending on whether a route runs inland through Lecce or follows the coast, and the coast roads in August bear little relation to the same roads in March. Rather than print figures we cannot stand behind, we confirm the actual routing when we quote.",
  },

  tip: {
    heading: "About the far end",
    paragraphs: [
      "Santa Maria di Leuca is the journey people most often misjudge. On a map the peninsula looks short; on the road it is not, and the last stretch down either coast is slow in a way the distance does not predict. A day trip from Lecce to Leuca and back is a long day, and a day trip that also takes in Otranto or Gallipoli on the way is longer than most people expect when they ask for it.",
      "We would rather say that when you enquire than have you discover it at six in the evening. If what you have described does not fit the hours you have, we will tell you, and usually suggest dropping a stop rather than hurrying all of them.",
    ],
  },

  planning: {
    heading: "How many journeys does a week here take?",
    lead: "This is the question behind most Salento enquiries, and it is worth answering with arithmetic rather than reassurance.",
    paragraphs: [
      "A week in Salento is almost never one transfer in and one transfer out. The peninsula is wide enough that the beach you want, the town you want to eat in and the place you are sleeping are frequently three different places, and the gap between them is a drive rather than a walk.",
      "These are the shapes we are asked for most often. None of them is a package and none is priced here — they are patterns, offered so you can recognise yours before you write to us.",
    ],
    patterns: [
      {
        shape: "One base, a few days out",
        journeys: "Typically 4 to 6 journeys",
        body: "Airport in, airport out, and two or three days with a car and driver. The commonest shape and usually the simplest to arrange, because the waiting time is the thing being booked rather than the distance.",
      },
      {
        shape: "Two bases, split week",
        journeys: "Typically 5 to 8 journeys",
        body: "A few nights on one coast and a few on the other, with a one-way move between them. Add the days out at each end and the count rises quickly.",
      },
      {
        shape: "Touring, moving most days",
        journeys: "Often 8 or more",
        body: "A different property every night or two. This is the shape where a hire car frequently does make more sense, and we will say so rather than quote you eight separate transfers for the sake of it.",
      },
      {
        shape: "A wedding or a group",
        journeys: "Depends entirely on the party",
        body: "Arrivals spread across days, a coordinated run on the day itself, and late returns. Quoted as one piece of work rather than as a pile of separate bookings.",
      },
    ],
    note: "If the honest answer for your trip is a hire car, we will tell you that. Salento is one of the few parts of Puglia where touring under your own steam genuinely competes with arranged transfers — the distances are long enough to matter and the parking outside the historic centres is less impossible than it is further north.",
  },

  basing: {
    heading: "Where to base yourself",
    lead: "The choice of base decides nearly everything else about the week, including how many journeys it takes.",
    options: [
      {
        id: "lecce",
        name: "Lecce",
        body: "The usual answer, and the most connected: a real city with somewhere to eat every night and a short run to Brindisi airport. Everything in the peninsula is a day trip from here, though the far end is a long one. The city has its own page.",
      },
      {
        id: null,
        name: "The Adriatic side",
        body: "Otranto and the coast around it. Rockier, deeper water, dramatic rather than easy. Good if you want coves rather than long beaches, and well placed for the drive down to the tip.",
      },
      {
        id: null,
        name: "The Ionian side",
        body: "Gallipoli, Porto Cesareo and the beaches between them. Sandier, shallower, and the side that suits families. Further from Brindisi airport than the Adriatic coast is.",
      },
      {
        id: "brindisi",
        name: "Near the airport",
        body: "Worth considering for a short stay or an early flight out. Brindisi is the arrival point for almost everyone coming to Salento and the page for it covers the drive south in detail.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "What applies across the whole peninsula.",
    items: [
      {
        term: "Rural addresses",
        detail: "Salento has a great deal of accommodation down unnamed lanes. Send the property's own arrival directions, not just the name — many keep a set written for drivers.",
      },
      {
        term: "Historic centres",
        detail: "Otranto, Gallipoli's island old town and the rest are old and compact. A car gets close; the last stretch is often on foot. Normal, and not an obstacle.",
      },
      {
        term: "The tip is further than it looks",
        detail: "Allow considerably more than the map suggests for anything beyond Otranto or Gallipoli, particularly in summer.",
      },
      {
        term: "Seasonality",
        detail: "Salento in August is a different place from Salento in May — busier roads, fuller operators, slower coast routes. Arranging early is worth more here than almost anywhere in Puglia.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Arranged with the operator in advance, and genuinely in demand in high season.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Salento transfers",
    items: [
      {
        question: "Which airport serves Salento?",
        answer: "Brindisi. It is the arrival point for almost everyone coming to the peninsula, and the Brindisi page covers the drive south in detail. Bari is considerably further north and means a longer drive — workable if the flights suit, but not the obvious choice for a Salento holiday.",
      },
      {
        question: "Is Ostuni in Salento?",
        answer: "By the standard definition, no. Salento covers all of the province of Lecce, most of the province of Brindisi and part of the province of Taranto — but Fasano, Ostuni and Cisternino are named exceptions that sit outside it. This matters practically: people book a week \"in Salento\" and stay near Ostuni, which is a different part of Puglia with different driving times. Ostuni has its own page.",
      },
      {
        question: "How many transfers will a week in Salento need?",
        answer: "More than two, almost always. One base with a few days out is typically four to six journeys; a split week across both coasts is five to eight; touring and moving most days is often eight or more, and that is the shape where a hire car frequently makes better sense. Tell us the trip and we will count it honestly rather than sell you journeys.",
      },
      {
        question: "Can we see Gallipoli and Otranto in one day?",
        answer: "It is possible but it is a long day, and it means crossing the peninsula. They are on opposite coasts. We will tell you plainly whether what you want fits the hours you have, and usually suggest dropping a stop rather than rushing all of them.",
      },
      {
        question: "How far is Santa Maria di Leuca?",
        answer: "Further than the map suggests. It sits at the very end of the peninsula, and the last stretch down either coast is slow in a way the distance does not predict. Published figures vary considerably depending on whether the route runs inland or along the coast, so we confirm the actual routing when we quote rather than print a number we cannot stand behind.",
      },
      {
        question: "Which coast should we stay on?",
        answer: "The Adriatic side around Otranto is rockier, with deeper water and coves rather than long beaches. The Ionian side around Gallipoli and Porto Cesareo is sandier and shallower, and the side families more often choose. They are different holidays, and which you pick also changes the drive from the airport.",
      },
      {
        question: "Would a hire car be better?",
        answer: "In Salento, sometimes genuinely yes — more often than elsewhere in Puglia. The distances are long enough to matter and parking outside the historic centres is less difficult than further north. If you intend to move most days, we will say so. If you are based in one place with a few days out, arranged transfers usually work out simpler.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the whole week, not one journey",
    body: "Where you are staying, what you want to see and how long you have. Salento is a peninsula rather than a destination, and a week here is usually several journeys — we would rather quote the shape of it at once than piece by piece.",
    cta: "Request a transfer quote",
  },
};
