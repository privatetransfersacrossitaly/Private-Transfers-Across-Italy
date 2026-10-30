import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Everything is crawlable, and that is deliberate.
 *
 * ── Why /crm is not disallowed ────────────────────────────────────────────
 * It would be the wrong tool twice over. A `Disallow` line publishes the path
 * to anyone who reads robots.txt, and robots.txt is the most-read file on any
 * site — concealment is not what it is for. Worse, it is counterproductive: a
 * disallowed URL can still be indexed if something links to it, and a crawler
 * told not to fetch the page never sees the `noindex` that would have kept it
 * out. So /crm is left crawlable and kept out by `X-Robots-Tag: noindex,
 * nofollow` from next.config.ts, which a crawler has to fetch the page to
 * read. Access control is enforced separately, in proxy.ts and in every CRM
 * page and action.
 *
 * The three draft policy pages work the same way: `noindex` in their own
 * metadata, and absent from the sitemap because the registry says they are
 * unpublished. Nothing here needs to list them either.
 *
 * `sitemap` is absolute because the specification requires it, and it comes
 * from `absoluteUrl` so it can never disagree with the canonical origin the
 * pages use.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
