import type { Metadata } from "next";
import { BolognaHubPage } from "@/components/bologna/bologna-hub";
import { JsonLd } from "@/components/site/json-ld";
import { bolognaHub } from "@/content/bologna/bologna";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = bolognaHub.it;

export const metadata: Metadata = pageMetadata({
  id: "bologna",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "bologna",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <BolognaHubPage locale="it" />
    </>
  );
}
