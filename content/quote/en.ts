import type { QuoteContent } from "./types";

/**
 * Get a Quote, in English.
 *
 * The wording is held to the same line as every other page on this site: a
 * request is a question, not a booking, and nothing here promises a price, a
 * vehicle, a response time or availability. The disclaimer beside the submit
 * button says so in the place a visitor is most likely to read it — not in a
 * footnote underneath.
 */
export const quoteEn: QuoteContent = {
  meta: {
    title: "Get a quote",
    description:
      "Describe your journey in Italy and get a written quotation for it: both addresses, the date, who is travelling and how much luggage. A request is not a booking.",
  },

  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Request a quote",
    h1: "Tell us the journey",
    lead:
      "The more precisely a journey is described, the more exact the answer can be. Everything below is read by a person, not scored by a system.",
    assurances: [
      "No account, no payment, nothing to confirm here.",
      "A written quotation with the arrangement set out.",
      "A straight answer if the journey cannot be done as asked.",
    ],
  },

  sections: {
    journey: "The journey",
    return: "Coming back",
    party: "Who is travelling",
    contact: "How to reach you",
    extra: "Anything else",
    review: "Send it",
  },

  sectionNotes: {
    journey: "Where you are going, and when. Both addresses matter more than anything else on this form.",
    party: "Luggage decides the vehicle more often than the number of people does.",
    contact: "So the quotation can reach you, and so we can ask if something is unclear.",
    extra: "Anything that changes the vehicle, the route or the timing.",
  },

  optionalLabel: "Optional",

  labels: {
    service: "Type of transfer",
    tripType: "Add a return journey",
    tripTypeDescription:
      "Tick this and a second set of details appears. Leave it unticked for a one-way journey.",
    pickup: "Pickup address",
    dropoff: "Drop-off address",
    date: "Date",
    time: "Time",
    travelReference: "Flight, train or ship number",
    returnPickup: "Return pickup address",
    returnDropoff: "Return drop-off address",
    returnDate: "Return date",
    returnTime: "Return time",
    returnTravelReference: "Return flight, train or ship number",
    adults: "Adults",
    children: "Children",
    childAges: "Ages of the children",
    holdBags: "Suitcases",
    cabinBags: "Cabin bags",
    name: "Full name",
    email: "Email address",
    phoneCountry: "Country",
    phoneNational: "Phone number",
    notes: "Anything we should know",
  },

  hints: {
    pickup: "A street and a number where there is one. An airport or station name is fine.",
    dropoff: "Including the terminal or berth if the journey ends at an airport or a port.",
    travelReference: "Optional, and the thing that lets a delayed arrival be worked around.",
    childAges: "Required when children are travelling: the restraint depends on the age.",
    holdBags: "Count the cases, not the people. Luggage decides the vehicle more often than passengers do.",
    phoneCountry: "Where your number is registered, so the dialling code is right.",
    phoneNational: "Without the country code — just the number as you would dial it at home.",
    notes: "A wheelchair, a pet, a child seat, bulky equipment, a stop on the way, a restricted address.",
    swap: "Copies the outbound details into the return, with the two ends swapped.",
  },

  placeholders: {
    pickup: "e.g. Fiumicino Airport, Terminal 1",
    dropoff: "e.g. Via dei Condotti 12, Rome",
    travelReference: "e.g. AZ610",
    childAges: "e.g. 3 and 7",
    name: "Your name",
    email: "you@example.com",
    phoneNational: "333 123 4567",
    notes: "Optional",
  },

  services: {
    airport: "Airport transfer",
    hotel: "Hotel transfer",
    station: "Railway station transfer",
    cruise: "Cruise port transfer",
    intercity: "Between two cities",
    "day-trip": "Day trip or private tour",
    hourly: "By the hour",
    other: "Something else",
  },

  errors: {
    required: "This is needed before the journey can be quoted.",
    email: "That does not look like an email address we could reply to.",
    phone: "That does not look like a phone number.",
    phone_country: "Choose a country from the list.",
    phone_national: "That is not a valid number for the country you chose. Leave out the country code.",
    date_past: "That date and time have already passed.",
    date_invalid: "That is not a date and time we can read.",
    return_before_outbound: "The return journey cannot be before the outbound one.",
    adults_min: "At least one adult has to be travelling.",
    number_invalid: "Please enter a whole number.",
    too_long: "That is longer than this field can hold.",
  },

  actions: {
    submit: "Send the journey",
    submitting: "Sending…",
    swapLegs: "Use the outbound details, reversed",
    another: "Send another journey",
  },

  outcomes: {
    invalid: "A few things need correcting before this can be sent. They are marked below.",
    delivered: {
      heading: "We have your request",
      body:
        "A copy has gone to the address you gave. We will come back to you with a price for this journey and the arrangement in writing.",
      referenceLabel: "Your reference",
      note:
        "This is a request, not a booking. Nothing is reserved and no vehicle is allocated to your date until the journey has been confirmed in writing and you have agreed to it.",
    },
    notConfigured: {
      heading: "This form is not live yet",
      body:
        "Your details were checked but nothing was sent, because the system behind this form has not been set up. Nothing has been stored and nobody has been told. Please try again later.",
    },
    unreachable: {
      heading: "Nothing was sent",
      body:
        "Something went wrong at our end and your request did not reach us. Nothing was saved. Please try again in a few minutes.",
    },
    rejected: {
      heading: "This request was not accepted",
      body:
        "We could not accept this submission. If you believe that is a mistake, please try again in a few minutes.",
    },
  },

  disclaimer:
    "Sending this is asking a question. It does not reserve a vehicle, hold a date or create a booking — a journey is booked only when it has been confirmed in writing and you have agreed to it.",

  aside: {
    heading: "What happens next",
    items: [
      {
        term: "We read it",
        detail:
          "Every request is read by a person. If a page on this site says a car cannot stop where you have asked, you will be told that rather than quoted for something that will not work.",
      },
      {
        term: "You get a quotation",
        detail:
          "A price for this journey, with the vehicle, where the driver meets you at each end, what the price covers, and anything about the request that cannot be done as asked.",
      },
      {
        term: "You decide",
        detail:
          "A journey is booked when it has been confirmed in writing and you have agreed to it. Until then nothing is owed and nothing is held.",
      },
    ],
    note:
      "No response time is promised here, because none has been set. Nothing on this page is a confirmation.",
  },
};
