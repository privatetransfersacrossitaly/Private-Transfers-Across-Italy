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
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-24");

  return publishedPages().flatMap(({ id, priority }) =>
    locales.map((locale) => ({
      url: urlFor(id, locale),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: alternatesFor(id) },
    })),
  );
}
