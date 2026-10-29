import type { Metadata } from "next";
import { homeContent } from "@/content/home";
import { alternatesFor, urlFor, type PageId } from "@/lib/routes";
import { htmlLang, siteName, type Locale } from "@/lib/site";

/**
 * Metadata for any page, in one language.
 *
 * The canonical and the hreflang set both come from the route registry, so a
 * page cannot declare a canonical that disagrees with its sitemap entry or
 * with its counterpart's alternates. Nothing here takes a URL as an argument;
 * it takes a page id.
 *
 * Titles are composed here rather than by the layout's `%s | <brand>`
 * template, and then passed as `absolute`. The template applies only to the
 * `<title>` element, so a page that relied on it ended up with the brand in
 * its `<title>` and missing from its `og:title`. Composing it once means the
 * three titles a page emits are the same string.
 *
 * `brandedTitle: false` is for a title that already contains the brand — the
 * homepage's does, and appending it again read as a stutter.
 */
export function pageMetadata({
  id,
  locale,
  title,
  description,
  brandedTitle = true,
}: {
  id: PageId;
  locale: Locale;
  title: string;
  description: string;
  brandedTitle?: boolean;
}): Metadata {
  const url = urlFor(id, locale);
  const other: Locale = locale === "en" ? "it" : "en";
  const fullTitle = brandedTitle ? `${title} | ${siteName}` : title;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
      languages: alternatesFor(id),
    },
    openGraph: {
      type: "website",
      locale: htmlLang[locale],
      alternateLocale: [htmlLang[other]],
      url,
      siteName,
      title: { absolute: fullTitle },
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: fullTitle },
      description,
    },
    robots: { index: true, follow: true },
  };
}

/** The homepage, which keeps its copy in the home content files. */
export function homeMetadata(locale: Locale): Metadata {
  const { meta } = homeContent[locale];
  return pageMetadata({
    id: "home",
    locale,
    title: meta.title,
    description: meta.description,
    brandedTitle: false,
  });
}
