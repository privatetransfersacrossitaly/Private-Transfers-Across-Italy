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
 * Strip everything a person might type for legibility, and nothing else.
 *
 * Spaces, dashes, dots, slashes, parentheses and a plus all go — of every
 * kind, including the non-breaking spaces, non-breaking hyphens and invisible
 * direction marks that come along when a number is pasted from a contacts app
 * or a WhatsApp profile. Digits typed on an Urdu, Arabic, Persian, Hindi or
 * full-width keypad (۰۳۰۰ / ٠٣٠٠ / ０３００) become ASCII: to the visitor they
 * are simply digits, and rejecting them looks like rejecting a correct number.
 *
 * A leading zero is *kept*. It is the trunk prefix in many numbering plans
 * (0300… in Pakistan, 07… in the UK) and part of the number itself in Italy,
 * and the library knows which is which. So 3001234567 and 03001234567 both
 * validate for Pakistan, and an Italian landline is never corrupted.
 */
export function cleanNationalNumber(value: string): string {
  return (value ?? "")
    .replace(/\p{Nd}/gu, toAsciiDigit)
    .replace(/[\p{Cf}\p{Z}\s\p{Pd}().\/+]/gu, "");
}

/** Code points of "0" in the digit sets a phone keypad can produce. */
const digitZeros = [
  0x0660, // Arabic-Indic ٠
  0x06f0, // Extended Arabic-Indic (Urdu, Persian) ۰
  0x0966, // Devanagari ०
  0x09e6, // Bengali ০
  0x0a66, // Gurmukhi ੦
  0x0ae6, // Gujarati ૦
  0x0e50, // Thai ๐
  0xff10, // Full-width ０
];

/** "۳" → "3". Anything not in a known set is left for the validator to reject. */
function toAsciiDigit(d: string): string {
  const code = d.codePointAt(0)!;
  if (code >= 0x30 && code <= 0x39) return d;
  for (const zero of digitZeros) {
    if (code >= zero && code <= zero + 9) return String(code - zero);
  }
  return d;
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
