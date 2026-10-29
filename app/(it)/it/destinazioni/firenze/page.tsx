import type { Metadata } from "next";
import { FlorenceHubPage } from "@/components/tuscany/florence-hub";
import { JsonLd } from "@/components/site/json-ld";
import { florenceHub } from "@/content/tuscany/florence";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = florenceHub.it;

export const metadata: Metadata = pageMetadata({
  id: "florence",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "florence",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <FlorenceHubPage locale="it" />
    </>
  );
}
