import type { Metadata } from "next";
import { VeniceHubPage } from "@/components/veneto/venice-hub";
import { JsonLd } from "@/components/site/json-ld";
import { veniceHub } from "@/content/veneto/venice";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = veniceHub.it;

export const metadata: Metadata = pageMetadata({
  id: "venice",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "venice",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <VeniceHubPage locale="it" />
    </>
  );
}
