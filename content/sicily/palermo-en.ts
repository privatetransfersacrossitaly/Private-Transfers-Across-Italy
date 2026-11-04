import type { SicilyDestination } from "./types";

/**
 * Palermo — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Palermo private transfers: the city itself, its quarters, and the day
 * trips people actually ask for from it. It does NOT own "Palermo Airport
 * transfers" — that belongs to /airports/palermo-falcone-borsellino — and it
 * does not own "Palermo cruise port transfers", which belongs to the port
 * page. Both are introduced here and linked, and neither appears in this
 * page's title, H1 or description.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 55 characters, unbranded, with a call to action. See the pillar's note.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * Population (626,273, 2026) and the Tyrrhenian/Gulf of Palermo position are
 * from the city's encyclopedic entry, which also gives the UNESCO listing by
 * its full name: "Arab-Norman Palermo and the Cathedral Churches of Cefalù
 * and Monreale". The airport figures — Cinisi, 35 km west-north-west, GESAP,
 * 9,220,905 passengers in 2025 — are from the airport's own entry. The port
 * figures (1,986,941 passengers in 2018, of whom 577,934 were cruise
 * passengers; the Fincantieri shipyard inside the port area) are from the
 * Port of Palermo entry and carry their year because they are seven years
 * old. Mondello is a borough of the city between Monte Pellegrino and Monte
 * Gallo, with the Monte Pellegrino park between it and the centre.
 *
 * Deliberately absent: the distance from the centre to Mondello (sources
 * give 9.8, 10, 11 and 12 km), the airport train's frequency, journey time
 * and fare (sources disagree and none is the operator), and any road
 * distance to Agrigento, Trapani or Cefalù — see docs/sicily-cluster-plan.md.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const palermoEn: SicilyDestination = {
  meta: {
    // 55 characters.
    title: "Palermo Private Transfers and Day Trips – Book a Driver",
    description:
      "Private transfers in Palermo: the old quarters, Mondello, Monreale and the day trips people actually ask for. Tell us the address for a written quote.",
  },

  hero: {
    eyebrow: "Sicily · Palermo",
    h1: "Private transfers in Palermo",
    lead: "Palermo is a capital city with a medieval street plan, which is the whole problem and most of the pleasure. Getting into the city is easy. Getting to a particular door inside it is the part worth arranging, and it is the part most people discover at the kerb with the suitcases already out.",
    primaryCta: "Request a Palermo transfer quote",
    secondaryCta: "Where a car can stop",
    facts: [
      { label: "Region", value: "Capital of Sicily" },
      { label: "Coast", value: "Tyrrhenian, on the Gulf of Palermo" },
      { label: "Airport", value: "Falcone Borsellino (PMO), about 35 km" },
      { label: "Population", value: "626,273 (2026)" },
    ],
  },

  intro: {
    heading: "A capital that is not laid out for cars",
    paragraphs: [
      "Palermo is the largest city in Sicily and the seat of the UNESCO World Heritage Site called Arab-Norman Palermo and the Cathedral Churches of Cefalù and Monreale — a listing whose name tells you something useful about the region, which is that the three places belong together and people visiting one usually want the others.",
      "The city sits on the Tyrrhenian coast at the head of its own gulf, with Monte Pellegrino closing off one end of it. That geography matters more than it sounds: the mountain and its park stand between the centre and Mondello, the city's bathing quarter, so what looks on a map like a short hop along the shore is a road around a mountain.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "How people arrive in Palermo",
    lead: "Two ways, and they produce completely different transfers. One starts 35 km out of town; the other starts inside a working port.",
    options: [
      {
        id: "palermo-airport",
        label: "By air",
        body: "Falcone Borsellino Airport, at Cinisi, about 35 km west-north-west of the city — further out than most capital-city airports, because it sits along the coast rather than on the edge of the suburbs. It handled 9,220,905 passengers in 2025 and is managed by GESAP. The airport page covers being met there, the onward routes and the honest comparison with the train.",
      },
      {
        id: "palermo-cruise-port",
        label: "By sea",
        body: "The Port of Palermo is a major passenger port — 1,986,941 passengers passed through it in 2018, of whom 577,934 were cruise passengers — and it is a working port rather than a cruise terminal with a city attached. Fincantieri's shipyard is inside the port area, so which quay a ship is given is not a detail, and a driver needs to be told it.",
      },
    ],
    note: "Whichever way you arrive, the useful thing to send is not the arrival time. For a flight it is the flight number; for a ship it is the vessel's name and the date. Both let a driver see for themselves what is happening rather than wait at a time written on a form.",
  },

  kerb: {
    heading: "Where a car can actually stop",
    lead: "Palermo is not one city for a vehicle. It is four or five, and which one your address is in decides whether the transfer ends at the door or two streets away.",
    items: [
      {
        title: "The Vucciria, Kalsa and the old quarters",
        body: "The historic quarters are a medieval plan with later streets cut through them. Many of the lanes are too narrow for anything larger than a small car, some are restricted, and a few are stepped. The legal stopping point for a hotel in here is frequently at the end of the street rather than outside it. A driver who knows which end saves a circuit with the luggage.",
      },
      {
        title: "The nineteenth-century grid",
        body: "The avenues laid out north of the old town — the Via Roma and Via Maqueda axis and the streets around the Politeama — behave like any other European city. Hotels here are generally straightforward to reach and to leave, which is worth knowing when you choose where to stay.",
      },
      {
        title: "Mondello",
        body: "The city's bathing quarter, a borough of Palermo set between Monte Pellegrino and Monte Gallo. The park on the mountain lies between it and the centre, so the road runs around rather than along. Properties here are mostly ordinary addresses a car can reach, which makes it an easier arrival than the old town — and a longer one than the map suggests.",
      },
      {
        title: "Up the hill",
        body: "Monreale, whose cathedral is one of the churches in the Arab-Norman World Heritage listing, sits above the city. It is the most-requested half-day from Palermo, and the sort of trip where an arranged car and a driver who knows the parking is worth considerably more than it looks on paper.",
      },
    ],
  },

  going: {
    heading: "What people ask us for from Palermo",
    lead: "Palermo is a base as much as a destination, and the requests divide neatly into three kinds.",
    items: [
      {
        name: "Monreale",
        body: "Up the hill behind the city. The cathedral is one of the nine structures making up the Arab-Norman World Heritage Site, together with Palermo's own monuments and the cathedral at Cefalù. Usually a half-day.",
      },
      {
        name: "Cefalù",
        body: "East along the Tyrrhenian coast — about 70 km, by the figure Cefalù's own entry gives for its distance from the provincial capital. A Norman cathedral begun in 1131 under a headland, and the third corner of the same World Heritage listing.",
      },
      {
        name: "Mondello",
        body: "The city's own seaside, around the far side of Monte Pellegrino. More often an evening or a half-day than a transfer in its own right, and frequently added to the end of an airport run rather than booked separately.",
      },
      {
        name: "The west and the south",
        body: "Trapani, the salt pans, Segesta, and Agrigento's Valley of the Temples on the far coast. These are full-day journeys rather than excursions, and they are the ones where it is worth telling us what you want to see before the day is planned, because what fits is not always what people expect.",
      },
    ],
  },

  nearby: {
    heading: "Where people go next",
    lead: "The pages for the places most often paired with Palermo.",
    items: [
      {
        id: "cefalu",
        body: "The usual day out, and a common second base on the north coast.",
      },
      {
        id: "trapani",
        body: "The western corner, the salt pans, and the ferries to the Egadi Islands.",
      },
      {
        id: "agrigento",
        body: "The Valley of the Temples, on the south coast. A long day from Palermo, and better as a stop than a round trip.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things that decide whether an arrival in Palermo is uneventful.",
    items: [
      {
        term: "The full address",
        detail: "Not the hotel name. Several Palermo properties share a name with a street or a square, and in the old quarters the difference between two of them is a ten-minute walk with the cases.",
      },
      {
        term: "The flight number",
        detail: "Rather than the arrival time. With it a driver watches a delay happen; without it, a delayed flight becomes a phone call from a landed aircraft.",
      },
      {
        term: "Restricted streets",
        detail: "Parts of the historic centre limit vehicle access. Normal in Italy and not an obstacle — it means the permitted stopping point is sometimes a short walk from the door, and that knowing which point to use saves a circuit of the block.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. The vehicle is chosen from that number, and in the narrow quarters a larger vehicle is not simply a bigger version of a smaller one — it changes where it can stop.",
      },
      {
        term: "Child seats",
        detail: "Numbers and ages at the time of enquiry. Arranged with the operator in advance; a driver cannot produce one at the kerb, and in summer they are genuinely in demand.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Palermo transfers",
    items: [
      {
        question: "How far is Palermo Airport from the city?",
        answer: "About 35 km west-north-west, by the airport's own published figure. It is at Cinisi, out along the coast, which makes it a longer run than most capital-city airports — and a shorter one than people expect if you are heading west or along the north coast rather than into town. The airport page covers arrivals there in full.",
      },
      {
        question: "Can a car reach our hotel in the old town?",
        answer: "Sometimes to the door and sometimes to the end of the street. The historic quarters are a medieval plan: narrow lanes, some restricted, a few stepped. Send the full address rather than the hotel name and the driver will know in advance which stopping point applies, which is the difference between a short walk and a circuit of the block.",
      },
      {
        question: "Can you arrange a half-day to Monreale?",
        answer: "Yes — it is the most requested trip from the city. Monreale's cathedral is one of the structures in the Arab-Norman World Heritage listing that Palermo heads. Tell us how long you want there and whether you are coming back to the same address, and the day gets built around that.",
      },
      {
        question: "Can you take us from Palermo to Cefalù?",
        answer: "Yes. Cefalù is east along the Tyrrhenian coast — about 70 km, by the figure its own entry gives for the distance from the provincial capital. It works as a day out with waiting time or as a one-way move to a second base. Say which and the quotation follows it.",
      },
      {
        question: "Is Mondello far from the centre?",
        answer: "It is a borough of Palermo rather than a separate town, but the road is longer than the map implies: Monte Pellegrino and its park sit between the two, so the route goes around the mountain. We do not publish a figure for it because the sources we found disagree with each other. It is an easy arrival in itself — ordinary addresses a car can reach.",
      },
      {
        question: "Do you meet cruise ships at Palermo?",
        answer: "Yes, and the port page covers it properly. The thing worth knowing in advance is that Palermo is a working port with a shipyard inside it, so the quay a ship is given matters. Send the ship's name and the date, and the all-aboard time, which is what the day actually gets planned backwards from.",
      },
      {
        question: "How much does a transfer in Palermo cost?",
        answer: "There is no price list. A run across the city and a day out to Agrigento are not comparable pieces of work, and the vehicle, the number of passengers and the date all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Send the address, not just the hotel name",
    body: "In Palermo that is the single most useful thing you can give us. The address, the date, the flight number or the ship, and how many of you there are. The arrangement and the price come back in writing — and if the journey will not work the way you have described it, we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
