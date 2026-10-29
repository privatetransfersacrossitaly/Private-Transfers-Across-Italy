import type { Metadata } from "next";
import { QuotePage } from "@/components/quote/quote-page";
import { JsonLd } from "@/components/site/json-ld";
import { quote } from "@/content/quote";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = quote.en;

export const metadata: Metadata = pageMetadata({
  id: "quote",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

/**
 * Get a Quote (English).
 *
 * No `faq` is passed to the structured data: this page renders no questions,
 * and the project emits `FAQPage` only where a page shows them as text.
 */
export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "quote",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
        })}
      />
      <QuotePage locale="en" />
    </>
  );
}
