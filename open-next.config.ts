import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * OpenNext configuration for the Cloudflare Workers build.
 *
 * ── Why an incremental cache is configured at all ─────────────────────────
 * `next.config.ts` sets `cacheComponents: true` and `partialPrefetching:
 * true`. Next's own deployment guide lists a shared cache as a requirement
 * for functional fidelity with those, and the adapter leaves
 * `incrementalCache` unset by default — so the default build had no cache
 * backend for `use cache` entries to resolve against.
 *
 * ── Why static assets rather than R2 ──────────────────────────────────────
 * This site is 130 prerendered pages and has no on-demand revalidation: no
 * route calls `revalidatePath`, `revalidateTag`, or sets a `revalidate`
 * window. The cache is therefore read-only in practice, and the static-assets
 * backend serves it straight out of the Worker's own asset bundle — no R2
 * bucket, no KV namespace, nothing billable, and nothing to keep in sync.
 *
 * R2 (`r2IncrementalCache`) becomes the right choice the moment a page needs
 * to be revalidated at runtime, because the asset bundle is immutable between
 * deploys and cannot be written to. The adapter's own template suggests R2 by
 * default for that reason; it is the safe general answer, not the correct one
 * for a site that only ever rebuilds.
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
