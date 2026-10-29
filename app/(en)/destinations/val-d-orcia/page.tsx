import type { Metadata } from "next";
import { ValDOrciaPage } from "@/components/tuscany/val-dorcia-page";
import { JsonLd } from "@/components/site/json-ld";
import { valDOrcia } from "@/content/tuscany/val-dorcia";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = valDOrcia.en;

export const metadata: Metadata = pageMetadata({
  id: "val-dorcia",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "val-dorcia",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <ValDOrciaPage locale="en" />
    </>
  );
}
