import type { Metadata } from "next";
import { HotelExcelsiorPage } from "@/components/bologna/hotel-excelsior-page";
import { JsonLd } from "@/components/site/json-ld";
import { hotelExcelsior } from "@/content/bologna/hotel-excelsior";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = hotelExcelsior.it;

export const metadata: Metadata = pageMetadata({
  id: "hotel-excelsior",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "hotel-excelsior",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <HotelExcelsiorPage locale="it" />
    </>
  );
}
