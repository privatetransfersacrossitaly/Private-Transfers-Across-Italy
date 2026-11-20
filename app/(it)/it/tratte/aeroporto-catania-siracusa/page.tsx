import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeCtaSyracuse } from "@/content/sicily/routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeCtaSyracuse.it;

export const metadata: Metadata = pageMetadata({
  id: "route-cta-syracuse",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-cta-syracuse",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-cta-syracuse" content={routeCtaSyracuse} locale="it" />
    </>
  );
}
