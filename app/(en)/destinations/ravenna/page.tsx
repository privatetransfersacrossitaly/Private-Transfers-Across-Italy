import type { Metadata } from "next";
import { RavennaHubPage } from "@/components/bologna/ravenna-hub";
import { JsonLd } from "@/components/site/json-ld";
import { ravennaHub } from "@/content/bologna/ravenna";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = ravennaHub.en;

export const metadata: Metadata = pageMetadata({
  id: "ravenna",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "ravenna",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RavennaHubPage locale="en" />
    </>
  );
}
