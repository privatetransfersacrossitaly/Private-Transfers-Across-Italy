import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PalermoPageView } from "@/components/sicily/palermo-page";
import { palermoPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = palermoPage.en;

/** Unbranded title, 55 characters with its call to action. See the pillar. */
export const metadata: Metadata = pageMetadata({
  id: "palermo",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "palermo",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PalermoPageView locale="en" />
    </>
  );
}
