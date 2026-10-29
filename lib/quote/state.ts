import type { FieldErrors } from "./schema";

/**
 * The state the form and the action pass back and forth.
 *
 * It lives here rather than beside the action because a `"use server"` file
 * may export async functions and nothing else — exporting the initial state
 * object from there compiles, but throws at request time with "A 'use server'
 * file can only export async functions, found object". Keeping the shape and
 * its initial value in a plain module avoids that entirely.
 */

export type QuoteFormState = {
  status: "idle" | "invalid" | "delivered" | "not_delivered" | "error";
  /** Error codes by field, for the form to render in its own language. */
  errors: FieldErrors;
  /** Why delivery failed, when it did. Drives which sentence is shown. */
  reason: "not_configured" | "rejected" | "unreachable" | null;
  /** Reference returned by the endpoint, when there is one. */
  reference: string | null;
  /** Server clock at the moment the request was accepted for delivery. */
  submittedAt: string | null;
};

export const initialQuoteState: QuoteFormState = {
  status: "idle",
  errors: {},
  reason: null,
  reference: null,
  submittedAt: null,
};
