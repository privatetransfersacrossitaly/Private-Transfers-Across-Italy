import type { Metadata } from "next";
import { LinatePage } from "@/components/milan/linate-page";
import { JsonLd } from "@/components/site/json-ld";
import { linate } from "@/content/milan/linate";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = linate.en;

export const metadata: Metadata = pageMetadata({
  id: "linate",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "linate",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <LinatePage locale="en" />
    </>
  );
}
