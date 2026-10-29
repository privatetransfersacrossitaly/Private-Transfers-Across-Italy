import type { Metadata } from "next";
import { HotelCommerciantiPage } from "@/components/bologna/hotel-commercianti-page";
import { JsonLd } from "@/components/site/json-ld";
import { hotelCommercianti } from "@/content/bologna/hotel-commercianti";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = hotelCommercianti.en;

export const metadata: Metadata = pageMetadata({
  id: "hotel-commercianti",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "hotel-commercianti",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <HotelCommerciantiPage locale="en" />
    </>
  );
}
