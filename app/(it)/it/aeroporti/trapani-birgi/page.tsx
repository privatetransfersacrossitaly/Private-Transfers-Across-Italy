import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { TrapaniAirportPageView } from "@/components/sicily/trapani-airport-page";
import { trapaniAirportPage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = trapaniAirportPage.it;

/** Titolo senza brand, 54 caratteri con la call to action. */
export const metadata: Metadata = pageMetadata({
  id: "trapani-airport",
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
          id: "trapani-airport",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TrapaniAirportPageView locale="it" />
    </>
  );
}
