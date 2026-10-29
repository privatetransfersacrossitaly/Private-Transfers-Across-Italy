import type { Metadata } from "next";
import { PompeiiPage } from "@/components/campania/pompeii-page";
import { JsonLd } from "@/components/site/json-ld";
import { pompeii } from "@/content/campania/pompeii";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = pompeii.it;

export const metadata: Metadata = pageMetadata({
  id: "pompeii",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "pompeii",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PompeiiPage locale="it" />
    </>
  );
}
