import type { Metadata } from "next";
import { MarcoPoloPage } from "@/components/veneto/marco-polo-page";
import { JsonLd } from "@/components/site/json-ld";
import { marcoPolo } from "@/content/veneto/marco-polo";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = marcoPolo.it;

export const metadata: Metadata = pageMetadata({
  id: "venice-marco-polo",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "venice-marco-polo",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <MarcoPoloPage locale="it" />
    </>
  );
}
