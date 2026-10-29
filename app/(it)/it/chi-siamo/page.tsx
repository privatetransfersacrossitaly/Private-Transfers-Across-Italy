import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";
import { JsonLd } from "@/components/site/json-ld";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = about.it;

export const metadata: Metadata = pageMetadata({
  id: "about",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "about",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <AboutPage locale="it" />
    </>
  );
}
