import type { Metadata } from "next";
import { RavennaTerminalPage } from "@/components/bologna/terminal-page";
import { JsonLd } from "@/components/site/json-ld";
import { ravennaTerminal } from "@/content/bologna/terminal";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = ravennaTerminal.it;

export const metadata: Metadata = pageMetadata({
  id: "ravenna-terminal",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "ravenna-terminal",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RavennaTerminalPage locale="it" />
    </>
  );
}
