import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routePsaFlorence } from "@/content/tuscany/routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routePsaFlorence.en;

export const metadata: Metadata = pageMetadata({
  id: "route-psa-florence",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-psa-florence",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-psa-florence" content={routePsaFlorence} locale="en" />
    </>
  );
}
