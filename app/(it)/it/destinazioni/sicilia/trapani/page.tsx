import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { TrapaniPageView } from "@/components/sicily/trapani-page";
import { trapaniPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = trapaniPage.it;

/** Titolo senza brand, 52 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "trapani",
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
          id: "trapani",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TrapaniPageView locale="it" />
    </>
  );
}
