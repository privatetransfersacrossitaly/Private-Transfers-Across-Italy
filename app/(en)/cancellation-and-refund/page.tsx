import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { JsonLd } from "@/components/site/json-ld";
import { legal } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = legal.cancellation.en;

/**
 * Cancellation and Refund Policy (English) — draft.
 *
 * `robots: noindex, nofollow` overrides the site default, and the page is
 * marked `published: false` in the route registry so it stays out of the
 * sitemap. Both come off together, in one commit, once the outstanding
 * business facts are confirmed and the text has had legal review.
 *
 * No `faq` is passed to the structured data: this page renders no questions,
 * and the project only emits `FAQPage` where a page shows them as text.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    id: "cancellation",
    locale: "en",
    title: content.meta.title,
    description: content.meta.description,
  }),
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "cancellation",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
        })}
      />
      <PolicyPage page="cancellation" locale="en" />
    </>
  );
}
