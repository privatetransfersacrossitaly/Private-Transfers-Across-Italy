import type { SicilyDestination } from "./types";

/**
 * Cefalù — English.
 *
 * ── What this page owns ───────────────────────────────────────────────────
 * Cefalù private transfers and the north-coast beach runs. The airport query
 * belongs to Palermo's airport page and the cruise query to Palermo's port
 * page; both are introduced and linked here.
 *
 * ── Slug ──────────────────────────────────────────────────────────────────
 * Unaccented in the URL in both languages — /destinations/sicily/cefalu —
 * matching val-d-orcia and salerno-costa-damalfi. The accent comes back in
 * the page name, the H1 and the title.
 *
 * ── Title ─────────────────────────────────────────────────────────────────
 * 55 characters, unbranded, with a call to action.
 *
 * ── Sourcing ──────────────────────────────────────────────────────────────
 * This is the best-sourced page in the cluster for distances, because
 * Cefalù's own entry states two: it is "about 70 km (43 mi) east of the
 * provincial capital and 185 km (115 mi) west of Messina". The infobox gives
 * the Metropolitan City of Palermo, which is what identifies the capital in
 * that sentence. The cathedral "begun in 1131, in a style of Norman
 * architecture" and its place as "one of nine structures comprising the
 * UNESCO World Heritage Site, Arab-Norman Palermo and the Cathedral Churches
 * of Cefalù and Monreale" are from the same entry, as is the elevation of
 * 16 m and the promontory with "extensive remains of a Norman castle" on its
 * summit.
 *
 * The population is given as 13,777 — but for 2007, and the lead says "just
 * under 14,000". An eighteen-year-old figure is not printed as current;
 * the hero carries the World Heritage fact instead.
 *
 * Deliberately absent: the beach, which the entry does not describe, and any
 * journey time from Palermo airport.
 *
 * No prices, no journey times, no fleet claims, no partnerships, no
 * testimonials.
 */

export const cefaluEn: SicilyDestination = {
  meta: {
    // 55 characters.
    title: "Cefalù Private Transfers and Beach Runs – Reserve a Car",
    description:
      "Private transfers to Cefalù on Sicily's north coast, about 70 km east of Palermo: the Norman cathedral, the headland and the coast either side.",
  },

  hero: {
    eyebrow: "Sicily · Cefalù",
    h1: "Private transfers to Cefalù",
    lead: "Cefalù sits on the Tyrrhenian coast about 70 km east of Palermo, under a headland with the remains of a Norman castle on top of it. It is the easiest day out from the capital and one of the more common second bases on the north coast — and, unusually for Sicily, a place where we can tell you the distance with a source behind it.",
    primaryCta: "Request a Cefalù transfer quote",
    secondaryCta: "Getting there",
    facts: [
      { label: "Coast", value: "Tyrrhenian, north" },
      { label: "East of Palermo", value: "About 70 km (43 mi)" },
      { label: "West of Messina", value: "185 km (115 mi)" },
      { label: "Cathedral begun", value: "1131" },
    ],
  },

  intro: {
    heading: "Under the headland",
    paragraphs: [
      "Cefalù is on the Tyrrhenian coast of Sicily, about 70 km east of the provincial capital — Palermo — and 185 km west of Messina. Those two figures come from the town's own entry, and they are among the very few road distances in this cluster that could be attributed to a source rather than guessed at, which is why they are printed here and almost nowhere else.",
      "The town sits at sea level under a precipitous rock that has the extensive remains of a Norman castle on its summit. Its cathedral, begun in 1131, is one of the nine structures making up the World Heritage Site called Arab-Norman Palermo and the Cathedral Churches of Cefalù and Monreale — which is the practical reason so many people visiting Palermo come here too.",
      "We arrange transfers here with licensed local transfer companies and drivers. We do not own vehicles and we do not employ the drivers directly. You describe the journey, we arrange it with an operator who covers that route, and the arrangement and the price come to you in writing before anything is confirmed.",
    ],
  },

  arrival: {
    heading: "Getting to Cefalù",
    lead: "Almost everyone comes from Palermo, by road from the airport or out for the day from the city or the port.",
    options: [
      {
        id: "palermo-airport",
        label: "By air",
        body: "Palermo's Falcone Borsellino is the airport, and the run to Cefalù goes east along the coast rather than through the city. Its page covers arrivals there and the onward routes. Note that the airport is already west of Palermo, so the drive here is the length of the city plus the coast beyond it.",
      },
      {
        id: "palermo-cruise-port",
        label: "By ship",
        body: "Cefalù is a common day out from a cruise call at Palermo. The port page covers the call itself; the all-aboard time is what a day like this gets planned backwards from, and it is earlier than the departure time printed on a ticket.",
      },
    ],
    note: "This is one of the few journeys in Sicily where we can quote a distance with a source: about 70 km east of Palermo, by the town's own entry. We still do not publish a journey time, because the coast road in August and the same road in March are not the same road.",
  },

  kerb: {
    heading: "Where a car can stop",
    lead: "An easier arrival than Taormina or Ortigia, with one familiar constraint.",
    items: [
      {
        title: "The town is at sea level",
        body: "Unlike Taormina, Cefalù is down on the shore rather than up a hillside. The approach is flat and the modern streets take a vehicle, which makes this one of the more straightforward arrivals on the north coast.",
      },
      {
        title: "The old centre is narrow",
        body: "The medieval streets under the rock are the usual Italian arrangement: narrow, partly restricted, and not a place to drive a large vehicle looking for a door. The stopping point for a hotel in here can be at the edge, and knowing which edge saves the circuit.",
      },
      {
        title: "The rock is above everything",
        body: "The headland with the Norman castle remains on its summit is reached on foot and on a climb. No transfer takes you up it, and nobody should arrange one expecting to be driven to the top.",
      },
      {
        title: "The coast either side",
        body: "A good deal of the accommodation is outside the town along the coast in both directions. Those are ordinary addresses a car can reach, but the pin matters more than the town name — properties several kilometres out are still sold as Cefalù.",
      },
    ],
  },

  going: {
    heading: "What people ask us for from Cefalù",
    lead: "Mostly the two things the town is for, and one longer journey.",
    items: [
      {
        name: "The cathedral and the old town",
        body: "Begun in 1131 and one of the nine structures in the Arab-Norman World Heritage listing. For most visitors this is a half-day on foot once the vehicle has done its part.",
      },
      {
        name: "The coast either side",
        body: "The beaches and the smaller places along the north coast. Usually reached as part of a transfer rather than booked separately, and a reason to send the exact address rather than the town name.",
      },
      {
        name: "Palermo and Monreale",
        body: "West along the coast — about 70 km by the published figure — for the capital and the third church in the same World Heritage listing. The most common pairing with a stay here.",
      },
      {
        name: "Further east",
        body: "The run towards Messina is long: 185 km by the same source. That makes Cefalù a staging point on a cross-island itinerary rather than a base from which the east is a day trip.",
      },
    ],
  },

  nearby: {
    heading: "Where people go next",
    lead: "The pages for the places most often paired with Cefalù.",
    items: [
      {
        id: "palermo",
        body: "West along the coast, and where nearly everyone arrives from.",
      },
      {
        id: "palermo-cruise-port",
        body: "The cruise call Cefalù is most often visited from.",
      },
      {
        id: "trapani",
        body: "Beyond Palermo at the western end, for the salt coast and the Egadi ferries.",
      },
      {
        id: "sicily",
        body: "The regional page: which airport suits where you are staying, and how the island fits together.",
      },
    ],
  },

  practical: {
    heading: "Practical detail",
    lead: "The things worth settling before the day.",
    items: [
      {
        term: "In the town or along the coast",
        detail: "Properties several kilometres out in either direction are still described as Cefalù. Send the full address so the driver is going to the right stretch of coast and not just the right name.",
      },
      {
        term: "Restricted streets",
        detail: "The old centre under the rock limits access in the usual way. It means the stopping point is sometimes a short walk from the door, and that the right approach is worth knowing in advance.",
      },
      {
        term: "A day out or a move",
        detail: "From Palermo, Cefalù works as either — a day with waiting time, or a one-way transfer to a second base. Say which and the quotation follows it.",
      },
      {
        term: "All-aboard time",
        detail: "If you are coming from a ship at Palermo, this is the only time that matters, and it is earlier than the departure printed on the ticket. Send it and the day gets built backwards from it.",
      },
      {
        term: "Luggage",
        detail: "Count everything that will not fold. In the old centre the last stretch may be on foot, which makes the number of bags a real constraint.",
      },
      {
        term: "Paying",
        detail: "You pay the local operator who carries out the journey. We arrange it and send the price in writing first; nothing is charged until you have agreed it.",
      },
    ],
  },

  faq: {
    heading: "Questions about Cefalù transfers",
    items: [
      {
        question: "How far is Cefalù from Palermo?",
        answer: "About 70 km (43 mi) east, by the figure the town's own entry gives for its distance from the provincial capital. That is a sourced number rather than our estimate, which is worth saying because most Sicilian road distances are not. We still do not publish a journey time for it.",
      },
      {
        question: "Can you take us there for the day from Palermo?",
        answer: "Yes — it is the most requested day out from the capital. It works as a day with waiting time or as a one-way move to a second base on the north coast. Tell us which you want and roughly how long you would like there, and the day is built around that.",
      },
      {
        question: "We are on a cruise calling at Palermo. Can we see Cefalù?",
        answer: "Yes, and it is one of the most common requests from the port. Send the ship's name, the date, the arrival time and the all-aboard time — the last of those is what the day is actually planned backwards from, and it is earlier than the departure time on the ticket. If it will not fit, we will say so.",
      },
      {
        question: "Can a car reach our hotel in the old town?",
        answer: "Sometimes to the door and sometimes to the edge. The medieval streets under the rock are narrow and partly restricted, as in most Italian towns of that age. Send the full address rather than the hotel name and the driver will know which stopping point applies before arriving.",
      },
      {
        question: "Can you drive us up to the castle on the rock?",
        answer: "No. The remains of the Norman castle are on the summit of the headland and the way up is on foot and uphill. We would rather tell you that plainly than take a booking for something a vehicle cannot do.",
      },
      {
        question: "How far is Cefalù from Messina or the east coast?",
        answer: "185 km (115 mi) west of Messina, by the same published figure. That is far enough that Cefalù works as a staging point on a cross-island route rather than as a base from which the east coast is a day trip, and we would rather set that expectation now than at the kerb.",
      },
      {
        question: "How much does a transfer to Cefalù cost?",
        answer: "There is no price list. The vehicle, the number of passengers, the date and whether you want waiting time all move the figure. Describe the journey and the quotation comes in writing. Nothing is charged until you have agreed it.",
      },
      {
        question: "Do you operate the vehicles yourselves?",
        answer: "No. We arrange transfers with licensed local transfer companies and drivers in Sicily. We handle the enquiry, the arrangement and the written quotation; the journey is carried out by the local operator, and you pay them directly.",
      },
    ],
  },

  close: {
    heading: "Tell us the address and the day",
    body: "Whether it is a day out from Palermo, a move to a second base or an arrival from a ship, the address and the date are what we need — plus the all-aboard time if a ship is involved. The arrangement and the price come back in writing, and if the day will not fit we will say so rather than quote it anyway.",
    cta: "Request a transfer quote",
  },
};
