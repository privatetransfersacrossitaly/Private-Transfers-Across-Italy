import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PugliaPillarPage } from "@/components/puglia/puglia-pillar";
import { pugliaPillar } from "@/content/puglia";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = pugliaPillar.en;

export const metadata: Metadata = pageMetadata({
  id: "puglia",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      {/* Canonical, hreflang and the breadcrumb trail all derive from the
          route registry entry for `puglia`, so this page cannot declare a
          URL that disagrees with its sitemap entry or with its Italian
          counterpart's alternates. The FAQ markup is generated from the same
          questions that are rendered on the page — nothing is marked up that
          a visitor cannot see. */}
      <JsonLd
        data={pageJsonLd({
          id: "puglia",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PugliaPillarPage locale="en" />
    </>
  );
}
