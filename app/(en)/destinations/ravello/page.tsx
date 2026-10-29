import type { Metadata } from "next";
import { RavelloPage } from "@/components/campania/ravello-page";
import { JsonLd } from "@/components/site/json-ld";
import { ravello } from "@/content/campania/ravello";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = ravello.en;

export const metadata: Metadata = pageMetadata({
  id: "ravello",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "ravello",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RavelloPage locale="en" />
    </>
  );
}
