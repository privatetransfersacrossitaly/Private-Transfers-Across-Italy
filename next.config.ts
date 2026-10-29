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
