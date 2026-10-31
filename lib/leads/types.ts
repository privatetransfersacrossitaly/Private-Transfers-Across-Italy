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

/**
 * The booking pipeline.
 *
 * `completed` is never stored — it is derived from a confirmed booking whose
 * last leg is in the past, so a journey rolls over on its own. Everything
 * else is a deliberate state someone put the booking into.
 *
 * Widened from four values to six by migration 0004. `quoted` and
 * `awaiting_customer` sit between an enquiry arriving and it being confirmed,
 * which is where this business actually spends its time.
 */
export type LeadStatus =
  | "pending"
  | "quoted"
  | "awaiting_customer"
  | "confirmed"
  | "completed"
  | "cancelled";

/** The statuses a person may set by hand. `completed` is derived. */
export const SETTABLE_STATUSES = [
  "pending",
  "quoted",
  "awaiting_customer",
  "confirmed",
  "cancelled",
] as const satisfies readonly LeadStatus[];

/** How each status reads in the interface. */
export const STATUS_LABELS: Record<LeadStatus, string> = {
  pending: "Pending",
  quoted: "Quoted",
  awaiting_customer: "Awaiting customer",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
};

/** Where the customer stands on paying. Independent of booking status. */
export type PaymentStatus = "unpaid" | "partial" | "paid" | "refunded";

export const PAYMENT_LABELS: Record<PaymentStatus, string> = {
  unpaid: "Unpaid",
  partial: "Part paid",
  paid: "Paid",
  refunded: "Refunded",
};

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
