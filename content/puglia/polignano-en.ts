import type { PolignanoPage } from "./types";

/**
 * Polignano a Mare — English.
 *
 * ── Boundary, per the approved keyword map ────────────────────────────────
 * "Leads on the cliff setting and resort/wedding arrivals." Monopoli is the
 * linked neighbour and is named, never described. Bari owns BRI and the
 * cruise port; this page says which airport and links on.
 *
 * On weddings: Ostuni owns wedding-guest *coordination* as a primary theme,
 * and this page does not restage it. What it owns instead is the narrower
 * case the keyword map gives it — the small cliff-top wedding, two cars and
 * twenty people, where the problem is a venue on a lane above the sea
 * rather than a hundred guests across four hotels. Different problem, so
 * different page, and the Ostuni page is linked for the larger kind.
 *
 * ── Sourcing, and one thing I will not repeat ─────────────────────────────
 * Population 17,491 (1 January 2021), area 67 km², elevation 24 m,
 * Metropolitan City of Bari, the economy depending on tourism, agriculture
 * and fishing, the Norman boost to olive oil in the eleventh century, the
 * belief that the site was the Greek Neapolis of Apulia, the possible place
 * on the Via Traiana, Lama Monachile, and the railway station — all from
 * Polignano's Wikipedia entry.
 *
 * It is very widely written that Domenico Modugno was born here. That entry
 * does not mention him at all, so this page does not claim it. Dropping a
 * famous name costs nothing; printing an unverified one costs more.
 *
 * The cliff setting is described plainly as the physical fact it is, not
 * attributed to a source, because the entry carries no prose about the
 * cliffs — only Lama Monachile as a named landmark.
 *
 * No prices, no fleet claims, no testimonials, no guarantees, no named
 * venue or hotel partnerships.
 */

export const polignanoEn: PolignanoPage = {
  meta: {
    title: "Polignano a Mare transfers",
    description:
      "Private transfers to Polignano a Mare: Bari airport arrivals, cliff-top hotels, coastal resorts and small weddings. Tell us the journey and get a written quote.",
  },

  hero: {
    eyebrow: "Puglia · Polignano a Mare",
    h1: "Polignano a Mare transfers",
    lead: "A small town built along the top of a limestone cliff, directly above the Adriatic. It is the shortest of the usual runs from Bari airport and one of the most awkward last two hundred metres in Puglia — because the old town sits on the edge, and the edge is not somewhere you drive.",
    primaryCta: "Request a Polignano transfer quote",
    secondaryCta: "Arriving at the edge",
    facts: [
      { label: "Metropolitan city", value: "Bari (BA)" },
      { label: "Population", value: "17,491" },
      { label: "Elevation", value: "24 m, on the cliff" },
      { label: "Nearest airport", value: "Bari (BRI), about 48 km" },
    ],
  },

  intro: {
    heading: "A small town, mostly visited by two people at a time",
    paragraphs: [
      "Polignano is small — around seventeen and a half thousand people — and its economy depends on tourism, agriculture and fishing, in that order. The Normans boosted olive oil production here in the eleventh century and the countryside behind the town still reflects it; the site is believed to have been the ancient Greek city of Neapolis of Apulia, and the town may have been a hub on the Via Traiana.",
      "None of that is why people come. They come because the old town is built along the top of a cliff above the sea, with Lama Monachile — the ravine inlet below — as the view everyone has already seen before they arrive. The practical consequence of a town shaped like that is that most of its best accommodation is in the least car-accessible part of it.",
      "The visitor profile matters here too. Polignano takes a high proportion of couples and small groups rather than families or large parties, which changes what a transfer usually is: two people, two cases, one short journey, and an arrival at a door in a lane.",
      "We arrange these journeys with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing first.",
    ],
  },

  theDrop: {
    heading: "Arriving at the edge",
    lead: "This is the one thing about Polignano worth planning, and it is a consequence of the geography rather than a rule anyone made.",
    paragraphs: [
      "The historic centre occupies the clifftop. Its streets are narrow, whitewashed and old, they were laid out for people on foot, and several of them end at a wall with a drop behind it. A car can reach the approaches to the old town; it cannot cross it, and in most of it there is nowhere to stop even briefly.",
      "That is not a problem so much as a thing to know. The walk from where a car can wait to a door inside the centre is short — this is a town of seventeen thousand people, not a city — but it is a walk, it is over stone, and if nobody mentioned it beforehand it arrives as a surprise at the end of a flight.",
    ],
    consequences: [
      {
        title: "Ask where cars stop",
        body: "Your property knows exactly, because every guest before you arrived the same way. Forward what they tell you with your enquiry and the whole question disappears.",
      },
      {
        title: "Send the street, not the name",
        body: "The old town is a grid of small lanes and a property name on its own is often ambiguous. The full address with the number resolves it.",
      },
      {
        title: "Mention steps",
        body: "Some approaches involve them. Worth saying if anyone in the party would find that difficult, because it may change where it is best to stop.",
      },
      {
        title: "Luggage is the real variable",
        body: "Two cabin bags and a short walk is nothing. Four large cases over the same ground is a different afternoon.",
      },
    ],
  },

  arriving: {
    heading: "Getting here",
    lead: "Bari is the airport, and Polignano is one of the closer towns to it — which makes this one of the shorter transfers anywhere in the region.",
    paragraphs: [
      "Published route figures put Polignano at around 48 kilometres from Bari airport, with roughly forty minutes' driving in ordinary conditions. That makes it the shortest of the usual coastal runs from BRI and a common first stop for people landing in the early evening with a dinner reservation.",
      "Polignano also has its own railway station, on the line down the Adriatic coast. For a couple with modest luggage staying in or near the centre, the train is a genuinely reasonable alternative and we will say so rather than talk you out of it. What changes the arithmetic is a late arrival, a property outside the town, or more luggage than two people can comfortably walk with.",
    ],
    options: [
      {
        mode: "From Bari airport",
        body: "About 48 km, roughly forty minutes. The usual arrival, and short enough that a late flight is less punishing here than almost anywhere else in Puglia.",
      },
      {
        mode: "From Bari cruise terminal",
        body: "A short run down the coast, and an easy half-day from a ship calling at Bari. The all-aboard time is the constraint, and we plan backwards from it.",
      },
      {
        mode: "By train",
        body: "The town has its own station on the coastal line. Reasonable for a central stay with light luggage; less so for a property outside the town or an arrival after dark.",
      },
      {
        mode: "From Brindisi airport",
        body: "Considerably further south. Workable if the flights suit, but Bari is the sensible airport for Polignano.",
      },
    ],
  },

  staying: {
    heading: "Where people stay",
    lead: "Three kinds of property, and the arrival is different for each.",
    paragraphs: [
      "Most of what gets booked in Polignano is small. The town is not big enough for large hotels in the centre, so the clifftop accommodation tends to be a handful of rooms in a converted building, sometimes with a terrace over the water — which is the whole point and also the reason the front door is where it is.",
    ],
    kinds: [
      {
        title: "In the old town",
        body: "Small hotels, guesthouses and apartments on the clifftop lanes. The best views and the most interesting arrival. Expect a short walk from where the car can stop.",
      },
      {
        title: "Coastal resorts outside the centre",
        body: "Larger properties along the shore north and south of the town, with their own entrances and parking. The arrival is simple; walking into the centre for dinner usually is not.",
      },
      {
        title: "Country properties inland",
        body: "Converted farm buildings behind the coast, in the olive country. The usual Puglia arrival: a lane, a gate, no lighting. Send the property's own directions.",
      },
    ],
  },

  weddings: {
    heading: "Small weddings on the cliff",
    lead: "Polignano takes a particular kind of wedding, and it is not the kind a masseria takes.",
    paragraphs: [
      "The typical booking here is small: twenty or thirty people, a venue with the sea behind it, and a party that mostly already knows each other. The transport problem is correspondingly different from a large rural wedding — fewer vehicles, but a harder set of pick-up and drop-off points, because the venues share the old town's geography and some of them are in it.",
      "What that means in practice is that the planning is about where vehicles can actually wait rather than about how many of them there are. A couple of cars arriving at a clifftop lane at the same moment is a coordination problem all by itself, and it is better solved the week before than on the day.",
      "If you are planning something larger — a hundred guests across several hotels and a rural venue — the Ostuni page covers that shape of arrangement, and the approach there is different.",
    ],
    scope: [
      "Guest collections from Bari airport, usually across one or two days",
      "Runs from wherever the party is staying to the ceremony",
      "Coordinating arrival times so several cars do not reach the same lane at once",
      "Return journeys afterwards, including late ones",
      "Departures back to the airport at the end",
    ],
    limits: "We arrange transport and nothing else. We have no agreements with venues or hotels in Polignano, we do not act as a planner, and we do not claim either. If your venue already has a transport arrangement it prefers, use it — we will say so rather than compete with it.",
  },

  neighbours: {
    heading: "Along the coast and inland",
    lead: "Polignano is small enough that most stays include a day or two elsewhere, and the places people go are close.",
    items: [
      {
        id: "monopoli",
        name: "Monopoli",
        note: "The next town down the coast and the obvious pairing — a harbour town rather than a cliff town, and a short run either way.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        note: "Inland into the trulli country. The classic day out from this stretch of coast.",
      },
      {
        id: "bari",
        name: "Bari",
        note: "Back up the coast: the regional capital, the old town and the cruise terminal.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        note: "Further south and inland, the White Town on its hill.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "Short list, because this is a short journey with one real complication.",
    items: [
      {
        term: "Where the car stops",
        detail: "The single useful question for a Polignano arrival. Ask the property; forward the answer. Everything else about the journey is straightforward.",
      },
      {
        term: "The full address",
        detail: "Street and number, not just the property name. The old town is a grid of small lanes and names repeat.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Arranged with the operator in advance; a driver cannot produce one on arrival.",
      },
      {
        term: "Luggage",
        detail: "Matters more here than the distance does, because of the walk at the end. Count everything that will not fold.",
      },
      {
        term: "Summer evenings",
        detail: "Polignano is busy out of proportion to its size in July and August, and the approaches to the centre are correspondingly slow. Allow for it.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Polignano transfers",
    items: [
      {
        question: "How far is Polignano a Mare from Bari airport?",
        answer: "Around 48 km by published route figures, roughly forty minutes in ordinary conditions. It is the shortest of the usual coastal runs from BRI, which makes a late arrival here less punishing than in most of Puglia.",
      },
      {
        question: "Can a car reach my hotel in the old town?",
        answer: "It can reach the approaches. The historic centre is on the clifftop, its lanes are narrow and old, and in much of it there is nowhere to stop. The walk to the door is short — it is a small town — but it is a walk over stone. Ask your property where vehicles stop and forward the answer with your enquiry.",
      },
      {
        question: "Should we take the train instead?",
        answer: "Possibly. Polignano has its own station on the coastal line, and for a couple with light luggage staying in or near the centre the train is a reasonable way in. A late arrival, a property outside the town, or more luggage than you want to walk with all change that, and we will tell you plainly which applies to you.",
      },
      {
        question: "Can you arrange transport for a wedding in Polignano?",
        answer: "Yes, and the ones here tend to be small — twenty or thirty people rather than a hundred. The planning is less about vehicle numbers and more about where cars can wait, because the venues share the old town's geography. For a larger rural wedding, the Ostuni page describes that shape of arrangement. We have no agreements with venues and we do not claim to.",
      },
      {
        question: "Can you take us from Polignano to Monopoli or Alberobello?",
        answer: "Yes — Monopoli is the next town down the coast and a short run, and Alberobello is the usual day out inland. Both are arranged either as a one-way transfer or as a car and driver for the day with waiting time. Tell us which and the quote will reflect it.",
      },
      {
        question: "We are on a cruise calling at Bari. Can we visit Polignano?",
        answer: "Yes, and it makes an easy half-day from the port. Send the ship's name, the arrival time and the all-aboard time — the all-aboard is the hard constraint and the day is planned backwards from it. We will say so if what you want to fit in is not realistic.",
      },
      {
        question: "How much does a transfer to Polignano cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date. Describe the journey and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Ask them where the car stops",
    body: "Your flight number, the full street address, and whatever your property has told you about where vehicles can wait. That is the whole of it — we come back with the arrangement and the price in writing.",
    cta: "Request a transfer quote",
  },
};
