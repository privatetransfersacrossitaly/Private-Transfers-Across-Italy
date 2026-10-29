import { parsePhoneNumberFromString } from "libphonenumber-js/min";
import { phoneCountryFor } from "@/content/quote/countries";

/**
 * The only module in this project that imports `libphonenumber-js`.
 *
 * Everything else — the validator, the form, the lead repository — goes
 * through these three functions and this project's own types. Replacing the
 * library, or dropping it for a simpler rule, is a one-file change.
 *
 * ── Why `/min` ────────────────────────────────────────────────────────────
 * The `/min` metadata set can parse a number, say whether it is valid for a
 * country, and produce E.164. That is all this form needs. `/mobile` and
 * `/max` additionally classify a number as mobile, landline or toll-free,
 * which nothing here reads and which costs tens of kilobytes to know. See
 * `docs/dependency-libphonenumber-js.md`.
 *
 * ── Why a country and not a calling code ──────────────────────────────────
 * `parsePhoneNumberFromString(national, iso)` needs an ISO country, because
 * a calling code does not identify one: +1 is twenty-two countries, +44 is
 * four. The form therefore asks for a country and keeps its calling code
 * alongside, and both end up on the lead.
 */

export type PhoneParts = {
  /** ISO 3166-1 alpha-2, as chosen in the selector. */
  country: string;
  /** Calling code with its plus, e.g. "+39". */
  callingCode: string;
  /** Digits only, no calling code, no spaces. */
  national: string;
  /** Canonical international form, e.g. "+393331234567". */
  e164: string;
};

/**
 * Strip everything a person might type for legibility.
 *
 * Spaces, hyphens, dots, parentheses and a leading plus all go. A leading
 * zero does *not*: it is significant in several numbering plans, and the
 * library knows which. Removing it here would silently corrupt an Italian
 * landline.
 */
export function cleanNationalNumber(value: string): string {
  return (value ?? "").replace(/[\s().\-+]/g, "");
}

/**
 * Check a country and national number together.
 *
 * Returns the parts when the pair is a valid number, and `null` when it is
 * not. The caller decides what to say about it — this module does not own
 * any wording.
 */
export function parsePhone(
  country: string,
  nationalInput: string,
): PhoneParts | null {
  const iso = (country ?? "").trim().toUpperCase();
  const entry = phoneCountryFor(iso);
  if (!entry) return null;

  const national = cleanNationalNumber(nationalInput);
  if (!national || !/^\d+$/.test(national)) return null;

  const parsed = parsePhoneNumberFromString(national, iso as never);
  if (!parsed || !parsed.isValid()) return null;

  return {
    country: iso,
    callingCode: entry.code,
    national,
    e164: parsed.number,
  };
}

/**
 * A number formatted for a human to read, from the stored parts.
 *
 * Used by the CRM and the emails. Falls back to the E.164 string if the
 * library cannot format it, which is better than showing nothing.
 */
export function formatPhone(parts: {
  country?: string | null;
  e164?: string | null;
  callingCode?: string | null;
  national?: string | null;
}): string {
  if (parts.e164) {
    const parsed = parsePhoneNumberFromString(parts.e164);
    if (parsed) return parsed.formatInternational();
    return parts.e164;
  }
  if (parts.callingCode && parts.national) {
    return `${parts.callingCode} ${parts.national}`;
  }
  return "";
}
