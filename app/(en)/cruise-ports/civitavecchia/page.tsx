import type { Metadata } from "next";
import { CivitavecchiaPage } from "@/components/rome/cruise-port";
import { JsonLd } from "@/components/site/json-ld";
import { civitavecchia } from "@/content/rome/civitavecchia";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = civitavecchia.en;

export const metadata: Metadata = pageMetadata({
  id: "civitavecchia",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "civitavecchia",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <CivitavecchiaPage locale="en" />
    </>
  );
}
