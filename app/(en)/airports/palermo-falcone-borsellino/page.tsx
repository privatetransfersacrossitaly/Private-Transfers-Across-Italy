import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PalermoAirportPageView } from "@/components/sicily/palermo-airport-page";
import { palermoAirportPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = palermoAirportPage.en;

/** Unbranded title, 50 characters with its call to action. */
export const metadata: Metadata = pageMetadata({
  id: "palermo-airport",
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
          id: "palermo-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PalermoAirportPageView locale="en" />
    </>
  );
}
