import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeRomeCivitavecchia } from "@/content/rome/routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeRomeCivitavecchia.en;

export const metadata: Metadata = pageMetadata({
  id: "route-rome-civitavecchia",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-rome-civitavecchia",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-rome-civitavecchia" content={routeRomeCivitavecchia} locale="en" />
    </>
  );
}
