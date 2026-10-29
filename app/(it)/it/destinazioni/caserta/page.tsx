import type { Metadata } from "next";
import { CasertaPage } from "@/components/campania/caserta-page";
import { JsonLd } from "@/components/site/json-ld";
import { caserta } from "@/content/campania/caserta";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = caserta.it;

export const metadata: Metadata = pageMetadata({
  id: "caserta",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "caserta",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CasertaPage locale="it" />
    </>
  );
}
