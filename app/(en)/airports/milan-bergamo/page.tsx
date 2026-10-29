import type { Metadata } from "next";
import { BergamoPage } from "@/components/milan/bergamo-page";
import { JsonLd } from "@/components/site/json-ld";
import { bergamoAirport } from "@/content/milan/bergamo";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = bergamoAirport.en;

export const metadata: Metadata = pageMetadata({
  id: "bergamo-airport",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "bergamo-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <BergamoPage locale="en" />
    </>
  );
}
