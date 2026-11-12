import type { Metadata } from "next";
import { BlogPostRoute, blogPostMetadata } from "@/lib/blog/pages";

type Props = { params: Promise<{ slug: string }> };

/**
 * Rendered per request: posts live in D1, which exists only inside the
 * Worker, so there is no static shell to validate. The same opt-out the CRM
 * uses (app/(crm)/layout.tsx), placed on these pages only so every other
 * route keeps its validation.
 */
export const instant = false;

/** One post, read from D1 at request time. See lib/blog/pages.tsx. */
export function generateMetadata({ params }: Props): Promise<Metadata> {
  return blogPostMetadata("en", params);
}

export default function Page({ params }: Props) {
  return <BlogPostRoute locale="en" params={params} />;
}
