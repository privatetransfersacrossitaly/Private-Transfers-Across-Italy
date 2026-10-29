import type { Metadata } from "next";
import { VeronaAirportPage } from "@/components/veneto/verona-airport-page";
import { JsonLd } from "@/components/site/json-ld";
import { veronaAirport } from "@/content/veneto/verona-airport";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = veronaAirport.en;

export const metadata: Metadata = pageMetadata({
  id: "verona-airport",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "verona-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <VeronaAirportPage locale="en" />
    </>
  );
}
