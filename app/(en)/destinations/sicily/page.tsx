import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { SicilyPillarPage } from "@/components/sicily/sicily-pillar";
import { sicilyPillar } from "@/content/sicily";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = sicilyPillar.en;

/**
 * `brandedTitle: false` across the whole Sicily cluster.
 *
 * The title rule for these pages is 50-60 characters including a call to
 * action. The layout's " | Private Transfers Across Italy" is 33 characters
 * on its own, so keyword plus CTA plus brand cannot fit inside 60 — the
 * brand is what gives way. The title below is 51 characters and carries
 * the primary keyword first.
 */
export const metadata: Metadata = pageMetadata({
  id: "sicily",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      {/* Canonical, hreflang and the breadcrumb trail all derive from the
          route registry entry for `sicily`, so this page cannot declare a
          URL that disagrees with its sitemap entry or with its Italian
          counterpart's alternates. The FAQ markup is generated from the
          same questions rendered on the page — nothing is marked up that a
          visitor cannot see. */}
      <JsonLd
        data={pageJsonLd({
          id: "sicily",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <SicilyPillarPage locale="en" />
    </>
  );
}
