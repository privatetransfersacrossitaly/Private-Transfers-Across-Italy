import type { Metadata } from "next";
import { SalernoAirportPage } from "@/components/campania/salerno-airport-page";
import { JsonLd } from "@/components/site/json-ld";
import { salernoAirport } from "@/content/campania/salerno-airport";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = salernoAirport.it;

export const metadata: Metadata = pageMetadata({
  id: "salerno-airport",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "salerno-airport",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <SalernoAirportPage locale="it" />
    </>
  );
}
