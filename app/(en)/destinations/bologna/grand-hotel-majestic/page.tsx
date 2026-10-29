import type { Metadata } from "next";
import { HotelMajesticPage } from "@/components/bologna/hotel-majestic-page";
import { JsonLd } from "@/components/site/json-ld";
import { hotelMajestic } from "@/content/bologna/hotel-majestic";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = hotelMajestic.en;

export const metadata: Metadata = pageMetadata({
  id: "hotel-majestic",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "hotel-majestic",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <HotelMajesticPage locale="en" />
    </>
  );
}
