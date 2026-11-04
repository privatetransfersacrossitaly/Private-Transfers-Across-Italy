import type { MetadataRoute } from "next";
import { alternatesFor, publishedPages, urlFor } from "@/lib/routes";
import { locales } from "@/lib/site";
import pageDates from "@/lib/page-dates.generated.json";

/**
 * Every published page, in both languages, with the same reciprocal
 * alternates the pages themselves declare.
 *
 * The list comes from the route registry, not from the filesystem: a route
 * can exist while `published` is false, and it will not appear here. Section
 * anchors are not URLs and are not listed.
 *
 * ── `lastModified`, and how it is arrived at ──────────────────────────────
 * There used to be a hardcoded date, stamped identically onto every URL.
 * That is not a modification date, it is a number that looks like one, and
 * it said the homepage and a hotel route page had last changed at the same
 * instant. It was removed for that reason, and removing it had a cost that
 * showed up later: `lastmod` is how a crawler decides what deserves a
 * recrawl, so a sitemap without it leaves every URL looking equally stale.
 *
 * So the date is back, derived rather than invented. `scripts/build-page-dates.mjs`
 * asks git for the most recent commit touching the files that actually
 * render each page — its two route files and the content modules they
 * import — and writes the result to the generated map imported below.
 *
 * A page absent from that map gets no `lastModified` at all. That is the
 * deliberate fallback: the generator omits anything it cannot date
 * honestly, including every page when the checkout is shallow, because a
 * missing date is a crawler shrugging and a wrong one is a crawler being
 * misled.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return publishedPages().flatMap(({ id, priority }) =>
    locales.map((locale) => {
      const lastModified = (pageDates as Partial<Record<string, string>>)[id];
      return {
        url: urlFor(id, locale),
        ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages: alternatesFor(id) },
      };
    }),
  );
}
