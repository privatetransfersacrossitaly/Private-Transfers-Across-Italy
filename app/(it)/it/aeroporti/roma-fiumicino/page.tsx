import type { Metadata } from "next";
import { FiumicinoPage } from "@/components/rome/airport-hub";
import { JsonLd } from "@/components/site/json-ld";
import { fiumicino } from "@/content/rome/fiumicino";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = fiumicino.it;

export const metadata: Metadata = pageMetadata({
  id: "fiumicino",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "fiumicino",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <FiumicinoPage locale="it" />
    </>
  );
}
