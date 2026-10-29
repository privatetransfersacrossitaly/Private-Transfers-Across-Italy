import type { Metadata } from "next";
import { VeniceStationsPage } from "@/components/veneto/stations-page";
import { JsonLd } from "@/components/site/json-ld";
import { veniceStations } from "@/content/veneto/stations";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = veniceStations.it;

export const metadata: Metadata = pageMetadata({
  id: "venice-stations",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "venice-stations",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <VeniceStationsPage locale="it" />
    </>
  );
}
