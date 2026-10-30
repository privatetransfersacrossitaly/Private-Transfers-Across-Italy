import type { MetadataRoute } from "next";
import { alternatesFor, publishedPages, urlFor } from "@/lib/routes";
import { locales } from "@/lib/site";

/**
 * Every published page, in both languages, with the same reciprocal
 * alternates the pages themselves declare.
 *
 * The list comes from the route registry, not from the filesystem: a route
 * can exist while `published` is false, and it will not appear here. Section
 * anchors are not URLs and are not listed.
 *
 * ── Why there is no `lastModified` ────────────────────────────────────────
 * There used to be: one hardcoded date, stamped identically onto every URL.
 * That is not a modification date, it is a number that looks like one, and it
 * said the homepage and a hotel route page had last changed at the same
 * instant. A crawler that trusts it is misled; a crawler that does not trust
 * it ignores the field. Either way the honest value is no value.
 *
 * Restoring it means deriving a real per-page date — the last commit that
 * touched that page's content file would do — not reinstating a constant.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return publishedPages().flatMap(({ id, priority }) =>
    locales.map((locale) => ({
      url: urlFor(id, locale),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: alternatesFor(id) },
    })),
  );
}
