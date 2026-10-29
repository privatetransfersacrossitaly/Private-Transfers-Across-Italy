import type { Metadata } from "next";
import { AmalfiPage } from "@/components/campania/amalfi-page";
import { JsonLd } from "@/components/site/json-ld";
import { amalfi } from "@/content/campania/amalfi";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = amalfi.en;

export const metadata: Metadata = pageMetadata({
  id: "amalfi",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "amalfi",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <AmalfiPage locale="en" />
    </>
  );
}
