import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PugliaPillarPage } from "@/components/puglia/puglia-pillar";
import { pugliaPillar } from "@/content/puglia";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = pugliaPillar.it;

export const metadata: Metadata = pageMetadata({
  id: "puglia",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      {/* Same registry entry as the English page, different locale. The
          canonical is this page's own Italian URL — an Italian page is never
          canonicalised to its English counterpart — and the alternates are
          reciprocal because both sides read the same record. */}
      <JsonLd
        data={pageJsonLd({
          id: "puglia",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PugliaPillarPage locale="it" />
    </>
  );
}
