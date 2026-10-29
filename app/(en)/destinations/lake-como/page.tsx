import type { Metadata } from "next";
import { LakeComoPage } from "@/components/milan/lake-como-page";
import { JsonLd } from "@/components/site/json-ld";
import { lakeComo } from "@/content/milan/lake-como";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = lakeComo.en;

export const metadata: Metadata = pageMetadata({
  id: "lake-como",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "lake-como",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <LakeComoPage locale="en" />
    </>
  );
}
