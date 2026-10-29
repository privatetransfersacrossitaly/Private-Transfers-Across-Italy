import type { Locale } from "@/lib/site";

/**
 * What a lead is, in this project.
 *
 * It is deliberately close to `QuoteRequest` from `lib/quote/schema.ts` —
 * the quotation form is the only thing that creates one today — but it is a
 * separate type on purpose. `QuoteRequest` is what a visitor submitted;
 * `Lead` is what the business stores, and the two will diverge the moment
 * the CRM can create a lead by hand or change a status.
 */

export type LeadStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type EmailStatus = "pending" | "sent" | "failed" | "skipped";

/** One leg of the journey, as stored. */
export type LeadLeg = {
  pickup: string;
  dropoff: string;
  /** Real instant, for sorting and "has this happened yet". */
  at: Date;
  /** Exactly what the form produced, kept for display fidelity. */
  atLocal: string;
  travelReference: string;
};

export type LeadPhone = {
  /** ISO 3166-1 alpha-2. */
  country: string;
  callingCode: string;
  national: string;
  e164: string;
};

/** Everything needed to create a lead. */
export type NewLead = {
  sourceForm: string;
  locale: Locale;
  serviceType: string;
  tripType: "one-way" | "return";

  fullName: string;
  email: string;
  phone: LeadPhone;

  outbound: LeadLeg;
  inbound: LeadLeg | null;

  adults: number;
  children: number;
  childAges: string;
  luggageHold: number;
  luggageCabin: number;

  customerMessage: string;

  /**
   * Supplied by the caller so a retried submission resolves to the row it
   * already created rather than making a second one. The reference system
   * supports this on its machine-to-machine path and *not* on its public
   * form, which is why a double click there creates two leads.
   */
  idempotencyKey: string;
};

/** The outcome of trying to create one. */
export type CreatedLead = {
  id: string;
  /** A short, human-quotable form of the id, for the customer. */
  reference: string;
  /** True when an existing lead with the same key was returned instead. */
  deduplicated: boolean;
};

export type LeadCreateResult =
  | { ok: true; lead: CreatedLead }
  | { ok: false; reason: "not_configured" | "invalid" | "failed" };
