import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { CefaluPageView } from "@/components/sicily/cefalu-page";
import { cefaluPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = cefaluPage.it;

/** Titolo senza brand, 54 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "cefalu",
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
          id: "cefalu",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CefaluPageView locale="it" />
    </>
  );
}
