import type { Metadata } from "next";
import { NaplesHubPage } from "@/components/campania/naples-hub";
import { JsonLd } from "@/components/site/json-ld";
import { naplesHub } from "@/content/campania/naples";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = naplesHub.it;

export const metadata: Metadata = pageMetadata({
  id: "naples",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "naples",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <NaplesHubPage locale="it" />
    </>
  );
}
