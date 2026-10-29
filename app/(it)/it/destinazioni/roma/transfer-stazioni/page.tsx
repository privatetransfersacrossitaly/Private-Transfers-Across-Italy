import type { Metadata } from "next";
import { StationsPageView } from "@/components/rome/stations-page";
import { JsonLd } from "@/components/site/json-ld";
import { stations } from "@/content/rome/stations";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = stations.it;

export const metadata: Metadata = pageMetadata({
  id: "rome-stations",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "rome-stations",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <StationsPageView locale="it" />
    </>
  );
}
