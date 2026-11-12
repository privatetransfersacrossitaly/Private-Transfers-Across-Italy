import { homeContent } from "@/content/home";
import { pageName } from "@/content/page-names";
import { trailFor, urlFor, type PageId } from "@/lib/routes";
import {
  absoluteUrl,
  homePath,
  htmlLang,
  siteDescription,
  publicSiteName,
  siteUrl,
  type Locale,
} from "@/lib/site";

/**
 * Structured data for the site.
 *
 * What is deliberately absent matters as much as what is here: there is no
 * `address`, `telephone`, `aggregateRating`, `review`, `priceRange`,
 * `openingHours`, `areaServed`, `offers` or `Service` node anywhere, because
 * none of those has been verified, and structured data is exactly the wrong
 * place to put an invented fact.
 *
 * `LocalBusiness` is not used either: that type expects a physical location
 * customers visit, and no address has been supplied. `Organization` says what
 * is true without implying a shopfront.
 *
 * Every node is generated from the content the page actually renders — the
 * FAQ entries from its visible questions, the breadcrumb from its visible
 * breadcrumb — so the markup cannot drift from what a reader sees.
 */
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

function organization() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: publicSiteName,
    url: siteUrl,
    description: siteDescription,
  };
}

function website(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl(homePath[locale]),
    name: publicSiteName,
    description: siteDescription,
    inLanguage: htmlLang[locale],
    publisher: { "@id": organizationId },
  };
}

function breadcrumb(id: PageId, locale: Locale) {
  const trail = trailFor(id);
  return {
    "@type": "BreadcrumbList",
    "@id": `${urlFor(id, locale)}#breadcrumb`,
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pageName(step, locale),
      item: urlFor(step, locale),
    })),
  };
}

function faqPage(
  id: PageId,
  locale: Locale,
  items: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${urlFor(id, locale)}#faq`,
    isPartOf: { "@id": websiteId },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** The homepage: organisation, site, and the questions visibly on the page. */
export function homeJsonLd(locale: Locale) {
  const content = homeContent[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      website(locale),
      faqPage("home", locale, content.faq.items),
    ],
  };
}

/**
 * Any other page: a `WebPage`, its breadcrumb, and its own questions.
 *
 * `faq` is optional and is passed only where the page renders those questions
 * and answers as visible text.
 */
/**
 * A blog post: BlogPosting, its breadcrumb, and FAQPage when it has one.
 *
 * Posts are not in the route registry, so the breadcrumb is built here
 * rather than by `trailFor`: Home → Blog → the post. The author is the
 * named blogger when the post has one, and the organisation otherwise —
 * Italy Taxi always used the organisation; a real byline is better when
 * there is one.
 */
export function blogPostJsonLd({
  locale,
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  keywords,
  faq,
}: {
  locale: Locale;
  url: string;
  headline: string;
  description: string;
  image?: string | null;
  datePublished: string;
  dateModified: string;
  authorName?: string | null;
  keywords?: string[];
  faq?: { question: string; answer: string }[];
}) {
  const blogUrl = urlFor("blog", locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      website(locale),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        url,
        headline,
        description,
        inLanguage: htmlLang[locale],
        ...(image ? { image: absoluteUrl(image) } : {}),
        datePublished,
        dateModified,
        author: authorName
          ? { "@type": "Person", name: authorName }
          : { "@id": organizationId },
        publisher: { "@id": organizationId },
        isPartOf: { "@type": "Blog", "@id": `${blogUrl}#blog`, url: blogUrl },
        ...(keywords && keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: pageName("home", locale), item: urlFor("home", locale) },
          { "@type": "ListItem", position: 2, name: pageName("blog", locale), item: blogUrl },
          { "@type": "ListItem", position: 3, name: headline, item: url },
        ],
      },
      ...(faq && faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              isPartOf: { "@id": websiteId },
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };
}

export function pageJsonLd({
  id,
  locale,
  title,
  description,
  faq,
}: {
  id: PageId;
  locale: Locale;
  title: string;
  description: string;
  faq?: { question: string; answer: string }[];
}) {
  const url = urlFor(id, locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      website(locale),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: title,
        description,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: { "@id": organizationId },
      },
      breadcrumb(id, locale),
      ...(faq && faq.length > 0 ? [faqPage(id, locale, faq)] : []),
    ],
  };
}
