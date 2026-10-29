import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeTerminalRavenna } from "@/content/bologna/routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeTerminalRavenna.it;

export const metadata: Metadata = pageMetadata({
  id: "route-terminal-ravenna",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "route-terminal-ravenna",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-terminal-ravenna" content={routeTerminalRavenna} locale="it" />
    </>
  );
}
