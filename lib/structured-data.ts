import { homeContent } from "@/content/home";
import { pageName } from "@/content/page-names";
import { trailFor, urlFor, type PageId } from "@/lib/routes";
import {
  absoluteUrl,
  homePath,
  htmlLang,
  siteDescription,
  siteName,
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
    name: siteName,
    url: siteUrl,
    description: siteDescription,
  };
}

function website(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl(homePath[locale]),
    name: siteName,
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
