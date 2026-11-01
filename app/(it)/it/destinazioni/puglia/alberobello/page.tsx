import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { AlberobelloPageView } from "@/components/puglia/alberobello-page";
import { alberobelloPage } from "@/content/puglia";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = alberobelloPage.it;

export const metadata: Metadata = pageMetadata({
  id: "alberobello",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      {/* Canonical, hreflang and the breadcrumb trail all derive from the
          `alberobello` registry entry, so this page cannot declare a URL that
          disagrees with its sitemap entry or with its counterpart's
          alternates. The FAQ markup is built from the same questions the
          page renders — nothing is marked up that a visitor cannot see. */}
      <JsonLd
        data={pageJsonLd({
          id: "alberobello",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <AlberobelloPageView locale="it" />
    </>
  );
}
