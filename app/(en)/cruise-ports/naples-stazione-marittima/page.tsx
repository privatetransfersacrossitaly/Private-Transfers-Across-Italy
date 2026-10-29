import type { Metadata } from "next";
import { NaplesCruisePortPage } from "@/components/campania/cruise-port-page";
import { JsonLd } from "@/components/site/json-ld";
import { naplesCruisePort } from "@/content/campania/cruise-port";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = naplesCruisePort.en;

export const metadata: Metadata = pageMetadata({
  id: "naples-cruise-port",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "naples-cruise-port",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <NaplesCruisePortPage locale="en" />
    </>
  );
}
