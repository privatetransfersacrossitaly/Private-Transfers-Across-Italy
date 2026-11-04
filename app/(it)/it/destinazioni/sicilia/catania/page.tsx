import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { CataniaPageView } from "@/components/sicily/catania-page";
import { cataniaPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = cataniaPage.it;

/** Titolo senza brand, 52 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "catania",
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
          id: "catania",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CataniaPageView locale="it" />
    </>
  );
}
