import type { Metadata } from "next";
import { RomeHubPage } from "@/components/rome/rome-hub";
import { JsonLd } from "@/components/site/json-ld";
import { romeHub } from "@/content/rome/rome";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = romeHub.en;

export const metadata: Metadata = pageMetadata({
  id: "rome",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "rome",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RomeHubPage locale="en" />
    </>
  );
}
