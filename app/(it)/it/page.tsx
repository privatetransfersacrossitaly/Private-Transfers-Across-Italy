import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { JsonLd } from "@/components/site/json-ld";
import { homeMetadata } from "@/lib/metadata";
import { homeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = homeMetadata("it");

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("it")} />
      <HomePage locale="it" />
    </>
  );
}
