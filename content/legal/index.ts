import { cancellation } from "./cancellation";
import { privacy } from "./privacy";
import { terms } from "./terms";
import type { LocalizedLegal } from "./types";

/**
 * The three policy pages, keyed by the page id that serves them.
 *
 * Keying on the page id rather than on a separate name means the route, the
 * breadcrumb, the footer link and the content cannot drift apart: all four
 * are reached from the same identifier in `lib/routes.ts`.
 */
export const legal = {
  privacy,
  terms,
  cancellation,
} satisfies Record<string, LocalizedLegal>;

export type LegalPageId = keyof typeof legal;

export type { LegalContent, PolicySection } from "./types";
