import type { LeccePage } from "./types";

/**
 * Lecce — English.
 *
 * ── Boundary, per the approved keyword map ────────────────────────────────
 * "City only. Gallipoli and Otranto are mentioned as onward journeys and
 * linked to Salento, not described here." That is honoured literally: the
 * onward section names them and says what sort of journey each is, and
 * nothing more. The Salento page, when it ships, carries the description.
 *
 * Equally, this page does not re-argue "Bari or Brindisi?" — that belongs to
 * the Brindisi page and the pillar. It states which airport is nearer for
 * Lecce and links onward, which is a different thing from owning the
 * comparison.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * The nickname, Lecce stone, the population, the elevation, the three gates,
 * Santa Croce, the Duomo bell tower and the column of Sant'Oronzo are from
 * Lecce's Wikipedia entry and are quoted close to its wording. The 39 km
 * figure from Brindisi Airport is the Puglia regional route guide's, as used
 * on the Brindisi page.
 *
 * What is deliberately NOT asserted: any specific limited-traffic scheme,
 * its hours or its boundaries. No source I could reach documents Lecce's ZTL
 * in a form worth publishing, so the page describes the physical reality —
 * a walled centre entered through gates, with narrow streets behind them —
 * and tells people to send a full address. That is true, useful, and does
 * not invent a regulation.
 *
 * No prices, no fleet claims, no testimonials, no guarantees, no named
 * partnerships with venues or hotels.
 */

export const lecceEn: LeccePage = {
  meta: {
    title: "Lecce private transfers",
    description:
      "Private transfers to and around Lecce: Brindisi and Bari airports, the walled historic centre, wedding transport and onward journeys into Salento. Written quotes.",
  },

  hero: {
    eyebrow: "Puglia · Lecce",
    h1: "Private transfers in Lecce",
    lead: "Lecce is a baroque city built out of a soft golden limestone, and almost everything a visitor wants from it sits inside a walled centre entered through three old gates. Getting to the city is easy. Getting to a door inside the walls is the part that rewards a little planning.",
    primaryCta: "Request a Lecce transfer quote",
    secondaryCta: "The three gates",
    facts: [
      { label: "Nearest airport", value: "Brindisi (BDS), about 39 km" },
      { label: "Province", value: "Capital of the province of Lecce" },
      { label: "Population", value: "94,387" },
      { label: "Setting", value: "The Salentine peninsula" },
    ],
  },

  intro: {
    heading: "A city made of one stone",
    paragraphs: [
      "Lecce is nicknamed the Florence of the South for its baroque architecture, and the architecture exists because of the ground it stands on. Lecce stone is a limestone soft enough to be carved like wood — soft and workable, and so suited to sculpture — which is why the façades here carry a density of ornament you do not see elsewhere in Puglia. The Basilica di Santa Croce, begun in 1353 and not finished until 1695, is the extreme case: animals, grotesque figures and vegetables worked into the front of a church, under a large rose window.",
      "The practical consequence for a visitor is that the good part of Lecce is concentrated and old. The centre is compact, the streets inside it are narrow, and the city's three surviving gates — Porta Napoli, Porta San Biagio and Porta Rudiae — are still how you enter it.",
      "We arrange transfers in and around Lecce with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and you get the arrangement and the price in writing before anything is confirmed.",
    ],
  },

  arriving: {
    heading: "Getting to Lecce",
    lead: "Two airports serve the city, and they are not equally convenient. There is also a railway, which for some journeys is genuinely the better answer.",
    routes: [
      {
        from: "Brindisi Airport (BDS)",
        body: "The near one, and the usual arrival for Lecce. The Puglia regional route guide puts it at about 39 km and roughly half an hour, mostly on the SS613.",
        detail: "If you are choosing flights and Lecce is your base, this is the airport to aim for.",
      },
      {
        from: "Bari Airport (BRI)",
        body: "Considerably further north. Perfectly workable — the transfer is arranged the same way — but it is a long drive rather than a short one, and worth knowing about before you book the flight rather than after.",
        detail: "Often the right choice anyway if the flights are better, or if Lecce is the second half of a trip that started further north.",
      },
      {
        from: "By train",
        body: "Lecce has a mainline station and good connections up the Adriatic coast. For a city-centre hotel with modest luggage, arriving by train and walking or taking a short transfer from the station is often the simplest thing you can do.",
        detail: "We will say so if that is the honest answer for your journey.",
      },
    ],
    note: "Whichever airport you fly into, give us the flight number rather than the arrival time. The driver can then see a delay or a diversion for themselves, which a time written on a form cannot show them.",
  },

  gates: {
    heading: "The three gates, and why they matter",
    lead: "This is the one genuinely Lecce-specific thing about a transfer here. The historic centre is entered through three gates, the streets behind them are narrow and old, and which gate your address sits nearest decides where a car can reasonably stop.",
    items: [
      {
        name: "Porta Napoli",
        detail: "A triumphal arch raised in 1548 in honour of Charles V, and the grandest of the three.",
        serves: "The northern side of the centre and the streets toward the university quarter.",
      },
      {
        name: "Porta San Biagio",
        detail: "The eastern gate into the old city.",
        serves: "The eastern approach, and the side nearest Piazza Sant'Oronzo.",
      },
      {
        name: "Porta Rudiae",
        detail: "The western gate, named for the ancient settlement of Rudiae outside the city.",
        serves: "The western streets and the quieter end of the centre.",
      },
    ],
    note: "A driver who already knows which gate serves your street will put you down a short walk from the door. A driver who does not will circle the walls with your suitcases in the boot. This is why we ask for the full street address rather than just the name of the property — and in Lecce in particular, more than one hotel shares its name with a street or a square.",
  },

  staying: {
    heading: "Staying inside the walls",
    lead: "Most people who come to Lecce stay in the historic centre, and a great many of them stay in a converted palazzo.",
    paragraphs: [
      "The city is full of small hotels and guesthouses made out of old townhouses — high ceilings, a courtyard, eight or ten rooms, and a front door on a lane rather than a main road. They are the best thing about staying here and they are also the reason arrivals need a little thought: a lane that a car cannot turn into is still a lane your room is on.",
      "None of this is an obstacle. It simply means that the drop-off point and the front door are sometimes not the same place, which is ordinary in Italian historic centres and only becomes a problem when nobody has thought about it in advance.",
    ],
    tips: [
      {
        title: "Send the street, not just the name",
        body: "The full address with the street number. Several Lecce properties are named after the street or square they sit on, and the two are not always the same place.",
      },
      {
        title: "Say if there are stairs",
        body: "Palazzo conversions often have a flight of stairs before the lift, if there is a lift. Worth mentioning if anyone in the party would find that difficult, because it may change where it is best to stop.",
      },
      {
        title: "Ask the property where cars stop",
        body: "Most of them know exactly, because every guest before you has arrived the same way. Forward what they tell you with your enquiry.",
      },
    ],
  },

  weddings: {
    heading: "Weddings in and around Lecce",
    lead: "Lecce is a popular place to get married, and wedding transport is a different job from an airport transfer.",
    paragraphs: [
      "The usual shape is not one journey but a sequence: guests landing at Brindisi across two or three days, a coordinated run from wherever people are staying to the ceremony, and return journeys afterwards at an hour when nothing else is running. The guests are rarely all in one hotel, and the venue is often outside the city rather than in it.",
      "Tell us the guest numbers, the pickup points and the times, and we will quote the whole thing together rather than piece by piece. Quoting it as separate journeys usually costs more and co-ordinates worse.",
    ],
    covers: [
      "Airport arrivals for guests spread across several days",
      "Hotel-to-venue runs on the day, in whatever number of vehicles the group needs",
      "Return journeys after the reception, including late ones",
      "Transport between the ceremony and a separate reception venue",
      "Departures back to the airport at the end",
    ],
  },

  around: {
    heading: "Moving around once you are here",
    lead: "Lecce is a walking city, and for most of a stay you will not need a car at all. These are the exceptions.",
    items: [
      {
        term: "Evenings outside the centre",
        detail: "Restaurants and venues in the countryside around Lecce are a common reason to want a car for one evening rather than a whole trip.",
      },
      {
        term: "Days out to the coast",
        detail: "Both Salento coasts are within a day's reach from the city. A car with a driver for the day, rather than a one-way transfer, is usually the arrangement that suits.",
      },
      {
        term: "Groups and luggage",
        detail: "Even inside the city, a party of six with cases is a different problem from a couple with carry-ons. Tell us the real numbers.",
      },
      {
        term: "Early departures",
        detail: "An early flight from Brindisi means leaving Lecce before most things are open. Arranged in advance, this is unremarkable; arranged at midnight the night before, it is not.",
      },
    ],
  },

  onward: {
    heading: "Onward from Lecce",
    lead: "Lecce is the usual base for Salento, and most stays include at least one journey out of the city. These are the common ones — the Salento page covers the peninsula itself.",
    items: [
      {
        id: "salento",
        name: "Into Salento",
        note: "The peninsula as a whole: two coasts, a different sea on each, and the towns at the tip. Most people who base themselves in Lecce make two or three of these journeys over a week.",
      },
      {
        id: null,
        name: "Gallipoli",
        note: "On the Ionian side, across the peninsula. A day out, or a one-way move if the second half of the trip is on that coast.",
      },
      {
        id: null,
        name: "Otranto",
        note: "On the Adriatic side. Also usually a day out from Lecce rather than a base in its own right.",
      },
      {
        id: "brindisi",
        name: "Brindisi Airport",
        note: "The return leg. Worth arranging at the same time as the arrival, because the departure is the journey people most often leave until too late.",
      },
    ],
    footnote: "Each of these is arranged individually and quoted on its own terms. There is no fixed menu and no price list: describe the day you want and we will tell you what it involves.",
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that come up most often with Lecce journeys.",
    items: [
      {
        term: "The full address",
        detail: "More useful here than almost anywhere else in the cluster, because the centre is a grid of narrow old streets and the property name alone is frequently ambiguous.",
      },
      {
        term: "Historic-centre access",
        detail: "Streets inside the walls are narrow and old, and the practical drop-off is sometimes a short walk from the door. This is normal in an Italian historic centre and is not an obstacle — it is just worth knowing before you arrive with cases.",
      },
      {
        term: "Child seats",
        detail: "Give the number of children and their ages when you enquire. Seats are arranged with the operator in advance; a driver cannot produce one on arrival.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and the trouble with a guess shows up at the kerb.",
      },
      {
        term: "Flight delays",
        detail: "Give the flight number and the driver tracks the flight. A transfer fixed to a clock time with no flight attached to it is the arrangement that goes wrong.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and put the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Lecce transfers",
    items: [
      {
        question: "Which airport is nearest to Lecce?",
        answer: "Brindisi. The Puglia regional route guide gives about 39 km and roughly half an hour. Bari is considerably further north and the drive is correspondingly longer — still perfectly arrangeable, and often the right choice if the flights are better, but it is worth knowing which is which before booking the flight.",
      },
      {
        question: "Can a car reach my hotel in the historic centre?",
        answer: "Usually it can reach a point very near it. The centre is entered through three gates and the streets behind them are narrow, so the practical drop-off is sometimes a short walk from the door rather than at it. Send the full street address and the property's own arrival instructions if it has given you any, and the driver will use the right gate.",
      },
      {
        question: "Should I take the train to Lecce instead?",
        answer: "For a city-centre hotel with modest luggage, often yes — Lecce has a mainline station with good connections. The arithmetic changes with a late arrival, a group, a lot of luggage, a child seat, or an address that is not in the centre. We will tell you plainly if the train is the better answer for your journey.",
      },
      {
        question: "Can you arrange transport for a wedding in Lecce?",
        answer: "Yes. The usual arrangement is guest arrivals at Brindisi across several days, coordinated runs to the ceremony, and return journeys afterwards. Tell us guest numbers, pickup points and times and we will quote it as one piece of work. We do not have agreements with specific venues and we do not claim to.",
      },
      {
        question: "Can you take us from Lecce to Gallipoli or Otranto?",
        answer: "Yes — both are common days out from the city, Gallipoli on the Ionian side and Otranto on the Adriatic. They are arranged either as a one-way transfer or as a car and driver for the day with waiting time. Tell us which you want and the quote will reflect it.",
      },
      {
        question: "Do we need a car for a week in Lecce?",
        answer: "Often not. Lecce is a walking city and a stay based here can work entirely on foot plus two or three arranged journeys out. If you intend to move somewhere new every day across a wide area, a hire car may suit you better, and we will say so.",
      },
      {
        question: "How much does a transfer to Lecce cost?",
        answer: "There is no price list. It depends on the route, the vehicle, the number of passengers and the date. Describe the journey and you will get a written quotation; nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Puglia. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the address, not just the hotel",
    body: "The flight number, the full street address and how many of you there are. We come back with the arrangement and the price in writing — and if the journey will not work the way you have described it, we will tell you that instead.",
    cta: "Request a transfer quote",
  },
};
