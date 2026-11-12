import { blogChrome } from "@/content/blog";
import { pathFor } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/** `/blog/<slug>` or `/it/blog/<slug>`, from the registry's blog index path. */
export function postPath(locale: Locale, slug: string): string {
  return `${pathFor("blog", locale)}/${slug}`;
}

/**
 * "12 November 2026" / "12 novembre 2026", in Italian time.
 *
 * Fixed to Europe/Rome so a post published late in the evening does not show
 * the next day's date to a reader in another timezone — or a different date
 * in the HTML than in the structured data a crawler compares it with.
 */
export function formatPostDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(blogChrome[locale].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Rome",
  });
}

/** Same calendar day in Rome — used to decide whether "Updated" is worth showing. */
export function sameRomeDay(a: string, b: string): boolean {
  const day = (iso: string) =>
    new Date(iso).toLocaleDateString("en-CA", { timeZone: "Europe/Rome" });
  return day(a) === day(b);
}
