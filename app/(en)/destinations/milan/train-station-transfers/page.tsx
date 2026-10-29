import type { Metadata } from "next";
import { MilanStationsPage } from "@/components/milan/stations-page";
import { JsonLd } from "@/components/site/json-ld";
import { milanStations } from "@/content/milan/stations";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = milanStations.en;

export const metadata: Metadata = pageMetadata({
  id: "milan-stations",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "milan-stations",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <MilanStationsPage locale="en" />
    </>
  );
}
