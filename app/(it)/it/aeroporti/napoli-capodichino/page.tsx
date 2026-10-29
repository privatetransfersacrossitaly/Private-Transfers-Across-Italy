import type { Metadata } from "next";
import { NaplesAirportPage } from "@/components/campania/nap-airport-page";
import { JsonLd } from "@/components/site/json-ld";
import { naplesAirport } from "@/content/campania/nap-airport";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = naplesAirport.it;

export const metadata: Metadata = pageMetadata({
  id: "nap-airport",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "nap-airport",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <NaplesAirportPage locale="it" />
    </>
  );
}
