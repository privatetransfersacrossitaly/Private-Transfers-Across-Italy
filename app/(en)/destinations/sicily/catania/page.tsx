import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { CataniaPageView } from "@/components/sicily/catania-page";
import { cataniaPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = cataniaPage.en;

/** Unbranded title, 55 characters with its call to action. See the pillar. */
export const metadata: Metadata = pageMetadata({
  id: "catania",
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
          id: "catania",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CataniaPageView locale="en" />
    </>
  );
}
