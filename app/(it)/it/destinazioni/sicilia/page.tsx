import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { SicilyPillarPage } from "@/components/sicily/sicily-pillar";
import { sicilyPillar } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = sicilyPillar.it;

/**
 * `brandedTitle: false`, come per tutto il cluster Sicilia: la regola è
 * 50-60 caratteri con una call to action, e il suffisso di marca pesa da
 * solo 32 caratteri. Questo titolo ne conta 52.
 */
export const metadata: Metadata = pageMetadata({
  id: "sicily",
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
          id: "sicily",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <SicilyPillarPage locale="it" />
    </>
  );
}
