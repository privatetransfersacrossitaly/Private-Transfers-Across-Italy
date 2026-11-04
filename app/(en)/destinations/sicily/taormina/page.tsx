import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { TaorminaPageView } from "@/components/sicily/taormina-page";
import { taorminaPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = taorminaPage.en;

/** Unbranded title, 54 characters with its call to action. */
export const metadata: Metadata = pageMetadata({
  id: "taormina",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "taormina",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TaorminaPageView locale="en" />
    </>
  );
}
