import type { Metadata } from "next";
import { PositanoPage } from "@/components/campania/positano-page";
import { JsonLd } from "@/components/site/json-ld";
import { positano } from "@/content/campania/positano";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = positano.it;

export const metadata: Metadata = pageMetadata({
  id: "positano",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "positano",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PositanoPage locale="it" />
    </>
  );
}
