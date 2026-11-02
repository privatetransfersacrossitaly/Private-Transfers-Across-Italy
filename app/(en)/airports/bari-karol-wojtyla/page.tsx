import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { AirportPageView } from "@/components/puglia/airport-page";
import { bariAirportTheme } from "@/components/puglia/airport-themes";
import { bariAirportPage } from "@/content/puglia";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = bariAirportPage.en;

export const metadata: Metadata = pageMetadata({
  id: "bari-airport",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      {/* Canonical, hreflang, Open Graph and the breadcrumb trail all derive
          from the `bari-airport` registry entry, so this page cannot declare a URL
          that disagrees with its sitemap entry or with its counterpart's
          alternates. The FAQ markup is built from the same questions the
          page renders — nothing is marked up that a visitor cannot see. */}
      <JsonLd
        data={pageJsonLd({
          id: "bari-airport",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <AirportPageView
        locale="en"
        id="bari-airport"
        content={content}
        theme={bariAirportTheme}
      />
    </>
  );
}
