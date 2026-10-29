import type { Metadata } from "next";
import { PisaAirportPage } from "@/components/tuscany/pisa-airport-page";
import { JsonLd } from "@/components/site/json-ld";
import { pisaAirport } from "@/content/tuscany/pisa";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = pisaAirport.en;

export const metadata: Metadata = pageMetadata({
  id: "pisa-airport",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "pisa-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PisaAirportPage locale="en" />
    </>
  );
}
