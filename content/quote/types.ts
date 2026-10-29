import type { ErrorCode, ServiceKey } from "@/lib/quote/schema";
import type { Meta } from "@/content/page-types";

/**
 * The Get a Quote page, in either language.
 *
 * ── Why the error messages live here ──────────────────────────────────────
 * `lib/quote/schema.ts` returns error *codes*, never sentences. That is what
 * lets one validator serve both languages and lets the same rules run on the
 * server and in the browser without either owning any wording. The sentences
 * are here, one per code, in each language.
 *
 * `Record<ErrorCode, string>` rather than a partial: adding a new code to the
 * validator is then a compile error in both content files until somebody has
 * written what it should say. A missing message would otherwise surface as an
 * empty error that tells the visitor nothing.
 */
export type QuoteContent = {
  meta: Meta;
  breadcrumbLabel: string;

  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    /** Three short promises about the form itself, not about the service. */
    assurances: string[];
  };

  /**
   * The heading of each numbered step, in order.
   *
   * Six, matching the six fieldsets the form renders. `review` is the last:
   * the disclaimer and the submit button, which are a step of the form
   * rather than a footer under it.
   */
  sections: {
    journey: string;
    return: string;
    party: string;
    contact: string;
    extra: string;
    review: string;
  };

  /** One line under each step heading, saying what it is for. */
  sectionNotes: {
    journey: string;
    party: string;
    contact: string;
    extra: string;
  };

  /** Marks a field that may be left blank. */
  optionalLabel: string;

  labels: {
    service: string;
    tripType: string;
    tripTypeDescription: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    travelReference: string;
    returnPickup: string;
    returnDropoff: string;
    returnDate: string;
    returnTime: string;
    returnTravelReference: string;
    adults: string;
    children: string;
    childAges: string;
    holdBags: string;
    cabinBags: string;
    name: string;
    email: string;
    phoneCountry: string;
    phoneNational: string;
    notes: string;
  };

  hints: {
    pickup: string;
    dropoff: string;
    travelReference: string;
    childAges: string;
    holdBags: string;
    phoneCountry: string;
    phoneNational: string;
    notes: string;
    swap: string;
  };

  placeholders: {
    pickup: string;
    dropoff: string;
    travelReference: string;
    childAges: string;
    name: string;
    email: string;
    phoneNational: string;
    notes: string;
  };

  /** The service selector's options, labelled. */
  services: Record<ServiceKey, string>;

  /** One sentence per validation code. */
  errors: Record<ErrorCode, string>;

  actions: {
    submit: string;
    submitting: string;
    swapLegs: string;
    another: string;
  };

  /** What the page says after a submission, in each outcome. */
  outcomes: {
    invalid: string;
    delivered: {
      heading: string;
      body: string;
      referenceLabel: string;
      note: string;
    };
    notConfigured: { heading: string; body: string };
    unreachable: { heading: string; body: string };
    rejected: { heading: string; body: string };
  };

  /** The standing caveat, shown beside the submit button. */
  disclaimer: string;

  aside: {
    heading: string;
    items: { term: string; detail: string }[];
    note: string;
  };
};
