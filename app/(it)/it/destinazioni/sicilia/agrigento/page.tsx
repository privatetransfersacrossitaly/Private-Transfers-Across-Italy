import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { AgrigentoPageView } from "@/components/sicily/agrigento-page";
import { agrigentoPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = agrigentoPage.it;

/** Titolo senza brand, 55 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "agrigento",
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
          id: "agrigento",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <AgrigentoPageView locale="it" />
    </>
  );
}
