import type { Metadata } from "next";
import { MilanHubPage } from "@/components/milan/milan-hub";
import { JsonLd } from "@/components/site/json-ld";
import { milanHub } from "@/content/milan/milan";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = milanHub.en;

export const metadata: Metadata = pageMetadata({
  id: "milan",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "milan",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <MilanHubPage locale="en" />
    </>
  );
}
