import type { Metadata } from "next";
import { MalpensaPage } from "@/components/milan/malpensa-page";
import { JsonLd } from "@/components/site/json-ld";
import { malpensa } from "@/content/milan/malpensa";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = malpensa.en;

export const metadata: Metadata = pageMetadata({
  id: "malpensa",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "malpensa",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <MalpensaPage locale="en" />
    </>
  );
}
