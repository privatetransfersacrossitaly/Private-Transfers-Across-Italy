import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { CataniaAirportPageView } from "@/components/sicily/catania-airport-page";
import { cataniaAirportPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = cataniaAirportPage.en;

/** Unbranded title, 51 characters with its call to action. */
export const metadata: Metadata = pageMetadata({
  id: "catania-airport",
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
          id: "catania-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CataniaAirportPageView locale="en" />
    </>
  );
}
