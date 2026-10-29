import type { Metadata } from "next";
import { VeronaHubPage } from "@/components/veneto/verona-hub";
import { JsonLd } from "@/components/site/json-ld";
import { veronaHub } from "@/content/veneto/verona";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = veronaHub.en;

export const metadata: Metadata = pageMetadata({
  id: "verona",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "verona",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <VeronaHubPage locale="en" />
    </>
  );
}
