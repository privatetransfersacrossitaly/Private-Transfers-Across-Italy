/**
 * The handful of facts about this site that more than one file needs.
 *
 * Deliberately short, and deliberately free of anything that has not been
 * verified. There is no address, telephone number, company registration or
 * social account here, because none has been supplied — and an invented one
 * would end up in structured data, in the footer and in search results.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export const siteName = "Private Transfer Across Italy";

/**
 * One sentence, used for metadata and for the organisation's description in
 * structured data. It says what can be requested, not what is guaranteed.
 */
export const siteDescription =
  "Request private transfers across Italy: airport arrivals and departures, " +
  "journeys between cities, cruise-port connections, day trips and selected " +
  "cross-border routes. Every journey is quoted individually.";

export const locales = ["en", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Path of the homepage for a locale. English is the bare root. */
export const homePath: Record<Locale, string> = {
  en: "/",
  it: "/it",
};

/** BCP 47 tags used for `<html lang>` and `inLanguage`. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  it: "it",
};

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

/**
 * Where the quote request lives.
 *
 * Every "Request a quote" on the site — the header button, the footer
 * button, every page's closing call to action — goes through this one
 * function. That was the point of writing it: while the form did not exist
 * it returned the homepage's `#request-a-quote` section, which listed what
 * to have ready and said plainly that nothing was being sent.
 *
 * The form now exists, so it returns the form. This single edit repointed
 * every call to action on the site; nothing else had to change.
 *
 * It still takes a locale, because an Italian reader must land on the
 * Italian form. Sending them to the English one would be a language switch
 * disguised as a call to action.
 *
 * Deliberately not reading the route registry: `lib/routes.ts` imports from
 * this module, and having this import it back would be a cycle. The two
 * paths are checked against each other by the QA crawl instead.
 */
const quotePaths: Record<Locale, string> = {
  en: "/get-a-quote",
  it: "/it/richiedi-preventivo",
};

export function quotePathFor(locale: Locale): string {
  return quotePaths[locale];
}

/** The other language, for the switcher. */
export const otherLocale: Record<Locale, Locale> = { en: "it", it: "en" };

export const copyrightYear = 2026;
