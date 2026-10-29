import type { Metadata } from "next";
import { TrevisoPage } from "@/components/veneto/treviso-page";
import { JsonLd } from "@/components/site/json-ld";
import { trevisoAirport } from "@/content/veneto/treviso";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = trevisoAirport.it;

export const metadata: Metadata = pageMetadata({
  id: "treviso-airport",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "treviso-airport",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TrevisoPage locale="it" />
    </>
  );
}
