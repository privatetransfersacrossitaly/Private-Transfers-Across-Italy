import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    // This app has one root layout per language, so there is no single layout
    // for a route-level not-found to compose from. See app/global-not-found.tsx.
    globalNotFound: true,
  },
  cacheComponents: true,
  partialPrefetching: true,

  /**
   * Image optimization is off, and that is a cost decision rather than a
   * technical one.
   *
   * Next's built-in optimizer needs `sharp`, which cannot run on workerd. The
   * Cloudflare alternative is the `IMAGES` binding, whose transformations are
   * billable beyond a free allowance and have not been approved. With neither,
   * `/_next/image` has no backend, so `unoptimized` is what makes `next/image`
   * work at all on Workers.
   *
   * What it costs: the 23 photographs in `public/photos` are 5.1 MB of JPEG,
   * the largest 467 KB. Unoptimized, every visitor gets the full-size file —
   * a phone rendering a 390px-wide hero still downloads the desktop original,
   * and no AVIF or WebP is served. `next/image` keeps everything else: layout
   * stability from width/height, lazy loading, and `sizes`.
   *
   * The cheap fix is not this flag and not the binding: it is converting those
   * 23 files to AVIF/WebP once, in the repository. They are static, they never
   * change, and it would cut most of the weight with no runtime cost on any
   * host. Flagged for the owner rather than done unasked.
   */
  images: {
    unoptimized: true,
  },

  /**
   * The CRM must never be indexed.
   *
   * The layout's metadata already sets `noindex, nofollow`, and this covers
   * what metadata cannot: a redirect, a 404, or anything served before a
   * page renders. The routes are also absent from `lib/routes.ts`, which is
   * the only source the sitemap is built from, so there are three
   * independent reasons a crawler never sees them.
   */
  async headers() {
    return [
      {
        source: "/crm/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

/**
 * Gives `next dev` the Cloudflare bindings.
 *
 * Required now, and it was not before. `lib/db/d1.ts` reads the `DB` binding
 * through `getCloudflareContext()`, and outside the Worker that binding only
 * exists if this runs: it starts a workerd instance beside the dev server and
 * wires the bindings from `wrangler.jsonc` into it. Without it, `next dev`
 * reports the database as unconfigured and the quotation form degrades to
 * "nothing was sent" — correct behaviour, but useless for development.
 *
 * It does mean `next dev` owns a second runtime, and that workerd respawns
 * for as long as the dev server lives. That is the cost of local bindings.
 */
initOpenNextCloudflareForDev();
