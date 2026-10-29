import type { Metadata } from "next";
import { CiampinoPage } from "@/components/rome/second-airport";
import { JsonLd } from "@/components/site/json-ld";
import { ciampino } from "@/content/rome/ciampino";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = ciampino.it;

export const metadata: Metadata = pageMetadata({
  id: "ciampino",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "ciampino",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CiampinoPage locale="it" />
    </>
  );
}
