import type { Metadata } from "next";
import { BlogIndexRoute, blogIndexMetadata } from "@/lib/blog/pages";

/**
 * Rendered per request: posts live in D1, which exists only inside the
 * Worker, so there is no static shell to validate. The same opt-out the CRM
 * uses (app/(crm)/layout.tsx), placed on these pages only so every other
 * route keeps its validation.
 */
export const instant = false;

/** The blog index. Everything is in lib/blog/pages.tsx, shared by both languages. */
export function generateMetadata(): Promise<Metadata> {
  return blogIndexMetadata("en");
}

export default function Page() {
  return <BlogIndexRoute locale="en" />;
}
