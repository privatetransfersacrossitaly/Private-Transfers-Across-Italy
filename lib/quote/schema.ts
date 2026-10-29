import { phoneCountryFor } from "@/content/quote/countries";
import { parsePhone, type PhoneParts } from "./phone";
import type { Locale } from "@/lib/site";

/**
 * The shape of a quotation request, and the rules that decide whether one is
 * valid.
 *
 * Kept deliberately free of React, Next, transport and storage. Validation
 * returns error *codes* rather than sentences, so the same rules produce
 * English or Italian messages depending on which locale the page is in, and
 * so the next phase can reuse this module when it wires the shared CRM in
 * without inheriting any of this page's wording.
 *
 * `QuoteRequest` is the contract that phase will consume. Nothing in it is
 * specific to a database, a mailer or an HTTP client.
 */

export type TripType = "one-way" | "return";

export type ServiceKey =
  | "airport"
  | "hotel"
  | "station"
  | "cruise"
  | "intercity"
  | "day-trip"
  | "hourly"
  | "other";

export const tripTypes: readonly TripType[] = ["one-way", "return"] as const;

export const serviceKeys: readonly ServiceKey[] = [
  "airport",
  "hotel",
  "station",
  "cruise",
  "intercity",
  "day-trip",
  "hourly",
  "other",
] as const;

/** One leg of the journey. Both legs have the same shape. */
export type QuoteLeg = {
  pickup: string;
  dropoff: string;
  /** YYYY-MM-DD, as produced by <input type="date">. */
  date: string;
  /** HH:MM, as produced by <input type="time">. */
  time: string;
  /** The two above joined, for systems that want one field. */
  datetime: string;
  /** Flight, train or ship reference. Optional, and often empty. */
  travelReference: string;
};

export type QuoteRequest = {
  /** Which language the request was made in, so replies match it. */
  locale: Locale;
  /** Which form produced this. Set by the server, not the user. */
  sourceForm: string;
  /** Server clock, ISO 8601. Never taken from the client. */
  submittedAt: string;

  service: ServiceKey;
  tripType: TripType;

  outbound: QuoteLeg;
  /** Present only when `tripType` is "return". */
  inbound: QuoteLeg | null;

  party: {
    adults: number;
    children: number;
    /** Free text: the site asks for ages because restraints depend on them. */
    childAges: string;
  };

  luggage: {
    hold: number;
    cabin: number;
  };

  contact: {
    name: string;
    email: string;
    /**
     * The phone number in three forms, because each is needed somewhere.
     *
     * `country` is what the validator needs — a calling code does not
     * identify a country, so it alone cannot validate a number. `callingCode`
     * and `national` are what the customer chose and typed, kept separately
     * so a quotation can be followed up without guessing where the number is.
     * `e164` is the canonical form, used for deduplication, search and
     * click-to-call. See `lib/quote/phone.ts`.
     */
    phone: {
      country: string;
      callingCode: string;
      national: string;
      e164: string;
    };
  };

  notes: string;
};

/**
 * Stable identifiers for everything that can be wrong. The page's content
 * files hold one sentence per code per language.
 */
export type ErrorCode =
  | "required"
  | "email"
  | "phone"
  | "date_past"
  | "date_invalid"
  | "return_before_outbound"
  | "adults_min"
  | "number_invalid"
  | "too_long"
  /** A country was chosen that is not in the selector's list. */
  | "phone_country"
  /** The national number is not valid for the chosen country. */
  | "phone_national";

/** Form field names, which are also the keys errors are reported against. */
export type FieldName =
  | "service"
  | "tripType"
  | "pickup"
  | "dropoff"
  | "date"
  | "time"
  | "travelReference"
  | "returnPickup"
  | "returnDropoff"
  | "returnDate"
  | "returnTime"
  | "returnTravelReference"
  | "adults"
  | "children"
  | "childAges"
  | "holdBags"
  | "cabinBags"
  | "name"
  | "email"
  | "phoneCountry"
  | "phoneNational"
  | "notes";

export type FieldErrors = Partial<Record<FieldName, ErrorCode>>;

export type ValidationResult =
  | { ok: true; data: Omit<QuoteRequest, "sourceForm" | "submittedAt"> }
  | { ok: false; errors: FieldErrors };

/** Raw strings as they arrive from a form, before any checking. */
export type RawQuoteInput = Partial<Record<FieldName, string>> & {
  locale?: string;
};

const MAX_SHORT = 200;
const MAX_NOTES = 2000;

const clean = (value: string | undefined) => (value ?? "").trim();

/**
 * One @, something either side, a dot in the domain.
 *
 * Deliberately permissive, as the phone check used to be. The phone number
 * is no longer checked by a pattern at all: a country is chosen and the
 * national number is validated against that country's numbering plan in
 * `lib/quote/phone.ts`, which is both stricter and less likely to reject a
 * number that is genuinely valid somewhere.
 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function parseCount(value: string | undefined, max: number): number | null {
  const raw = clean(value);
  if (raw === "") return 0;
  if (!/^\d{1,3}$/.test(raw)) return null;
  const n = Number(raw);
  return n <= max ? n : null;
}

function isCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return (
    date.getUTCFullYear() === y &&
    date.getUTCMonth() === m - 1 &&
    date.getUTCDate() === d
  );
}

function isClockTime(value: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

/** Minutes since the epoch, for comparing two legs without timezone maths. */
function toMinutes(date: string, time: string): number {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  return Date.UTC(y, m - 1, d, hh, mm) / 60000;
}

/**
 * Check one submission.
 *
 * `now` is injected so the "not in the past" rule is testable and so the
 * server clock — never the browser's — decides what counts as past.
 */
export function validateQuoteRequest(
  input: RawQuoteInput,
  now: Date = new Date(),
): ValidationResult {
  const errors: FieldErrors = {};

  const service = clean(input.service) as ServiceKey;
  if (!serviceKeys.includes(service)) errors.service = "required";

  const tripType = (clean(input.tripType) || "one-way") as TripType;
  if (!tripTypes.includes(tripType)) errors.tripType = "required";

  // ── Outbound leg ──────────────────────────────────────────────────────────
  const pickup = clean(input.pickup);
  const dropoff = clean(input.dropoff);
  const date = clean(input.date);
  const time = clean(input.time);
  const travelReference = clean(input.travelReference);

  if (!pickup) errors.pickup = "required";
  else if (pickup.length > MAX_SHORT) errors.pickup = "too_long";

  if (!dropoff) errors.dropoff = "required";
  else if (dropoff.length > MAX_SHORT) errors.dropoff = "too_long";

  if (!date) errors.date = "required";
  else if (!isCalendarDate(date)) errors.date = "date_invalid";

  if (!time) errors.time = "required";
  else if (!isClockTime(time)) errors.time = "date_invalid";

  // Compared by calendar day rather than by the minute: a request made at
  // 09:00 for 08:00 the same morning is unusual but not invalid, and bouncing
  // it over a clock difference would be worse than letting a human read it.
  if (!errors.date && isCalendarDate(date)) {
    const [y, m, d] = date.split("-").map(Number);
    const requested = Date.UTC(y, m - 1, d);
    const today = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
    );
    if (requested < today) errors.date = "date_past";
  }

  if (travelReference.length > MAX_SHORT) errors.travelReference = "too_long";

  // ── Return leg, only when one was asked for ───────────────────────────────
  let inbound: QuoteLeg | null = null;
  if (tripType === "return") {
    const rPickup = clean(input.returnPickup);
    const rDropoff = clean(input.returnDropoff);
    const rDate = clean(input.returnDate);
    const rTime = clean(input.returnTime);
    const rRef = clean(input.returnTravelReference);

    if (!rPickup) errors.returnPickup = "required";
    else if (rPickup.length > MAX_SHORT) errors.returnPickup = "too_long";

    if (!rDropoff) errors.returnDropoff = "required";
    else if (rDropoff.length > MAX_SHORT) errors.returnDropoff = "too_long";

    if (!rDate) errors.returnDate = "required";
    else if (!isCalendarDate(rDate)) errors.returnDate = "date_invalid";

    if (!rTime) errors.returnTime = "required";
    else if (!isClockTime(rTime)) errors.returnTime = "date_invalid";

    if (rRef.length > MAX_SHORT) errors.returnTravelReference = "too_long";

    const legsWellFormed =
      !errors.date && !errors.time && !errors.returnDate && !errors.returnTime;

    if (legsWellFormed && toMinutes(rDate, rTime) < toMinutes(date, time)) {
      errors.returnDate = "return_before_outbound";
    }

    if (!errors.returnPickup && !errors.returnDropoff && !errors.returnDate && !errors.returnTime) {
      inbound = {
        pickup: rPickup,
        dropoff: rDropoff,
        date: rDate,
        time: rTime,
        datetime: `${rDate}T${rTime}`,
        travelReference: rRef,
      };
    }
  }

  // ── Party and luggage ─────────────────────────────────────────────────────
  const adults = parseCount(input.adults, 99);
  const children = parseCount(input.children, 99);
  const hold = parseCount(input.holdBags, 99);
  const cabin = parseCount(input.cabinBags, 99);

  if (adults === null) errors.adults = "number_invalid";
  else if (adults < 1) errors.adults = "adults_min";

  if (children === null) errors.children = "number_invalid";
  if (hold === null) errors.holdBags = "number_invalid";
  if (cabin === null) errors.cabinBags = "number_invalid";

  const childAges = clean(input.childAges);
  if (childAges.length > MAX_SHORT) errors.childAges = "too_long";
  // The site asks for ages wherever children travel, because Italian law ties
  // the required restraint to the child's age rather than to their number.
  if (children !== null && children > 0 && !childAges) {
    errors.childAges = "required";
  }

  // ── Contact ───────────────────────────────────────────────────────────────
  const name = clean(input.name);
  const email = clean(input.email);
  const notes = clean(input.notes);

  if (!name) errors.name = "required";
  else if (name.length > MAX_SHORT) errors.name = "too_long";

  if (!email) errors.email = "required";
  else if (!emailPattern.test(email) || email.length > MAX_SHORT) {
    errors.email = "email";
  }

  // ── Phone: a country and a national number, checked together ─────────────
  // Both halves are required, and neither can be judged without the other.
  // The country is reported against its own field so the selector, not the
  // number input, is the thing that lights up when it is the country that is
  // wrong.
  const phoneCountry = clean(input.phoneCountry).toUpperCase();
  const phoneNational = clean(input.phoneNational);
  let phone: PhoneParts | null = null;

  if (!phoneCountry) {
    errors.phoneCountry = "required";
  } else if (!phoneCountryFor(phoneCountry)) {
    errors.phoneCountry = "phone_country";
  }

  if (!phoneNational) {
    errors.phoneNational = "required";
  } else if (phoneNational.length > MAX_SHORT) {
    errors.phoneNational = "too_long";
  } else if (!errors.phoneCountry) {
    phone = parsePhone(phoneCountry, phoneNational);
    if (!phone) errors.phoneNational = "phone_national";
  }

  if (notes.length > MAX_NOTES) errors.notes = "too_long";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const locale: Locale = input.locale === "it" ? "it" : "en";

  return {
    ok: true,
    data: {
      locale,
      service,
      tripType,
      outbound: {
        pickup,
        dropoff,
        date,
        time,
        datetime: `${date}T${time}`,
        travelReference,
      },
      inbound,
      party: {
        adults: adults as number,
        children: children as number,
        childAges,
      },
      luggage: { hold: hold as number, cabin: cabin as number },
      contact: { name, email, phone: phone as PhoneParts },
      notes,
    },
  };
}
