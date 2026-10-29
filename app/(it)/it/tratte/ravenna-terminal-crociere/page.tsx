import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeRavennaTerminal } from "@/content/bologna/routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeRavennaTerminal.it;

export const metadata: Metadata = pageMetadata({
  id: "route-ravenna-terminal",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-ravenna-terminal",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-ravenna-terminal" content={routeRavennaTerminal} locale="it" />
    </>
  );
}
