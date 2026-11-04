import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PalermoPortPageView } from "@/components/sicily/palermo-port-page";
import { palermoPortPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = palermoPortPage.en;

/** Unbranded title, 53 characters with its call to action. */
export const metadata: Metadata = pageMetadata({
  id: "palermo-cruise-port",
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
          id: "palermo-cruise-port",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PalermoPortPageView locale="en" />
    </>
  );
}
