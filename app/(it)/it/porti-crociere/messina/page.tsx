import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { MessinaPortPageView } from "@/components/sicily/messina-port-page";
import { messinaPortPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = messinaPortPage.it;

/** Titolo senza brand, 53 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "messina-cruise-port",
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
          id: "messina-cruise-port",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <MessinaPortPageView locale="it" />
    </>
  );
}
