import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { listPublishedForSitemap } from "@/lib/blog/repository";
import { alternatesFor, pathFor, publishedPages, urlFor } from "@/lib/routes";
import { absoluteUrl, locales, type Locale } from "@/lib/site";
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
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog posts live in D1, which exists only at request time; without this
  // the sitemap would be prerendered at build with no posts in it and never
  // list one. Every registry entry below is computed exactly as before.
  await connection();
  const posts = await listPublishedForSitemap();

  const registry = publishedPages()
    // The blog index is listed from D1 below, per language, only while it
    // has posts — an empty index is noindex and must not be in a sitemap.
    .filter(({ id }) => id !== "blog")
    .flatMap(({ id, priority }) =>
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

  return [...registry, ...blogEntries(posts)];
}

type SitemapPost = Awaited<ReturnType<typeof listPublishedForSitemap>>[number];

/**
 * The blog index and its posts, from D1.
 *
 * Alternates mirror what each page declares in its own `<head>` (see
 * lib/blog/pages.tsx), because seo-check.mjs compares the two:
 *   - an index names the other language's index only if that one has posts;
 *   - a post names its translation only if the translation is published.
 * `lastModified` is the post's own `updated_at`, and an index's is its
 * newest post's — real dates, as for every other entry here.
 */
function blogEntries(posts: SitemapPost[]): MetadataRoute.Sitemap {
  const byLocale: Record<Locale, SitemapPost[]> = { en: [], it: [] };
  for (const p of posts) byLocale[p.language].push(p);

  const indexUrl = (l: Locale) => absoluteUrl(pathFor("blog", l));
  const postUrl = (l: Locale, slug: string) => absoluteUrl(`${pathFor("blog", l)}/${slug}`);
  const newest = (list: SitemapPost[]) =>
    list.reduce((max, p) => (p.updated_at > max ? p.updated_at : max), list[0].updated_at);

  const live = locales.filter((l) => byLocale[l].length > 0);
  const indexAlternates: Record<string, string> = Object.fromEntries(
    live.map((l) => [l, indexUrl(l)]),
  );
  indexAlternates["x-default"] = indexAlternates.en ?? indexAlternates[live[0]];

  const indexes = live.map((l) => ({
    url: indexUrl(l),
    lastModified: new Date(newest(byLocale[l])),
    changeFrequency: "weekly" as const,
    priority: 0.6,
    alternates: { languages: indexAlternates },
  }));

  // English slug → Italian slug, for published pairs only.
  const enSlugs = new Set(byLocale.en.map((p) => p.slug));
  const itFor = new Map(
    byLocale.it
      .filter((p) => p.translation_of && enSlugs.has(p.translation_of))
      .map((p) => [p.translation_of as string, p.slug]),
  );

  const entries = posts.map((p) => {
    const enSlug = p.language === "en" ? p.slug : p.translation_of && enSlugs.has(p.translation_of) ? p.translation_of : null;
    const itSlug = p.language === "it" ? p.slug : itFor.get(p.slug) ?? null;
    const languages: Record<string, string> = {};
    if (enSlug) languages.en = postUrl("en", enSlug);
    if (itSlug) languages.it = postUrl("it", itSlug);
    languages["x-default"] = languages.en ?? languages.it;
    return {
      url: postUrl(p.language, p.slug),
      lastModified: new Date(p.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: { languages },
    };
  });

  return [...indexes, ...entries];
}
