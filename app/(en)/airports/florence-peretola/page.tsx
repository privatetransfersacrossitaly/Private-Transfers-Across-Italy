import type { Metadata } from "next";
import { FlorenceAirportPage } from "@/components/tuscany/florence-airport-page";
import { JsonLd } from "@/components/site/json-ld";
import { florenceAirport } from "@/content/tuscany/florence-airport";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = florenceAirport.en;

export const metadata: Metadata = pageMetadata({
  id: "florence-airport",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "florence-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <FlorenceAirportPage locale="en" />
    </>
  );
}
