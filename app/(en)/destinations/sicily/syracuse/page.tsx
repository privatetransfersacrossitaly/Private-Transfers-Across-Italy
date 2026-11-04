import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { SyracusePageView } from "@/components/sicily/syracuse-page";
import { syracusePage } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = syracusePage.en;

/** Unbranded title, 54 characters with its call to action. */
export const metadata: Metadata = pageMetadata({
  id: "syracuse",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "syracuse",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <SyracusePageView locale="en" />
    </>
  );
}
