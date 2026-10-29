import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeFcoCivitavecchia } from "@/content/rome/routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeFcoCivitavecchia.en;

export const metadata: Metadata = pageMetadata({
  id: "route-fco-civitavecchia",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-fco-civitavecchia",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-fco-civitavecchia" content={routeFcoCivitavecchia} locale="en" />
    </>
  );
}
