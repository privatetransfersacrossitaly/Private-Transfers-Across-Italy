import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { JsonLd } from "@/components/site/json-ld";
import { legal } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = legal.terms.en;

/**
 * Terms and Conditions (English).
 *
 * No `faq` is passed to the structured data: this page renders no questions,
 * and the project only emits `FAQPage` where a page shows them as text.
 */
export const metadata: Metadata = pageMetadata({
    id: "terms",
    locale: "en",
    title: content.meta.title,
    description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "terms",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
        })}
      />
      <PolicyPage page="terms" locale="en" />
    </>
  );
}
