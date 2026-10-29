import type { Metadata } from "next";
import { BlqAirportPage } from "@/components/bologna/blq-page";
import { JsonLd } from "@/components/site/json-ld";
import { blqAirport } from "@/content/bologna/blq";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = blqAirport.en;

export const metadata: Metadata = pageMetadata({
  id: "blq",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "blq",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <BlqAirportPage locale="en" />
    </>
  );
}
