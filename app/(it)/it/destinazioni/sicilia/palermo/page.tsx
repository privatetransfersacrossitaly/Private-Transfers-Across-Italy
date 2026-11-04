import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PalermoPageView } from "@/components/sicily/palermo-page";
import { palermoPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = palermoPage.it;

/** Titolo senza brand, 56 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "palermo",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "palermo",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PalermoPageView locale="it" />
    </>
  );
}
