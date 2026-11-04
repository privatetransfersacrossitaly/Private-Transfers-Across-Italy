import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { CataniaPortPageView } from "@/components/sicily/catania-port-page";
import { cataniaPortPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = cataniaPortPage.it;

/** Titolo senza brand, 54 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "catania-cruise-port",
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
          id: "catania-cruise-port",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CataniaPortPageView locale="it" />
    </>
  );
}
