import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { TrapaniAirportPageView } from "@/components/sicily/trapani-airport-page";
import { trapaniAirportPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = trapaniAirportPage.en;

/** Unbranded title, 52 characters with its call to action. */
export const metadata: Metadata = pageMetadata({
  id: "trapani-airport",
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
          id: "trapani-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TrapaniAirportPageView locale="en" />
    </>
  );
}
