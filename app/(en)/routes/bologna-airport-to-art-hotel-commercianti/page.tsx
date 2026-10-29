import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeBlqCommercianti } from "@/content/bologna/hotel-routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeBlqCommercianti.en;

export const metadata: Metadata = pageMetadata({
  id: "route-blq-commercianti",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-blq-commercianti",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-blq-commercianti" content={routeBlqCommercianti} locale="en" />
    </>
  );
}
