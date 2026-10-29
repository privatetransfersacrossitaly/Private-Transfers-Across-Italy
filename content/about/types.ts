import type { PageChrome, Step, Term } from "@/content/page-types";
import type { PageId } from "@/lib/routes";

/**
 * The About page, in either language.
 *
 * ── Why this page gets a type of its own ──────────────────────────────────
 * Every other page on this site answers a question about a place. This one
 * answers a question about the site, which means its risks are different: a
 * destination page can only mis-state a rule somebody else published, while
 * this one could invent a company. So the shape is built to make the
 * inventions hard rather than merely discouraged.
 *
 * Three fields are required for that reason, and a later edit cannot quietly
 * drop them:
 *
 * - `hero.panel` carries a pair of statements, one of which is what the site
 *   does *not* do. The claim and its limit therefore arrive together, in the
 *   opening, rather than the limit living in a footnote nobody reaches.
 * - `how.note` says what "Request a quote" actually does today. The page
 *   describes a three-step process, and the third step is a booking; without
 *   this note the first step could be read as submitting one.
 * - `fulfilment.body` is where the commercial arrangement behind a vehicle
 *   would be described if it had been verified. It is a required string so
 *   that the page must say something deliberate there, rather than the
 *   section silently disappearing and taking the question with it.
 *
 * ── What has no field here, deliberately ──────────────────────────────────
 * There is nowhere to put a founding year, a legal entity, an office, a
 * headcount, a licence number, a response time, a booking volume or a
 * review. Not one of those has been supplied, and a field would eventually
 * be filled. `lib/site.ts` and `lib/structured-data.ts` hold the same line
 * for the same reason.
 */
export type AboutContent = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: { label: string; hash: string };
    /** Required: what the site does, and what it does not do. */
    panel: { label: string; items: Term[] };
  };

  purpose: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };

  how: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    /** Required: what the quote link does today. See the note above. */
    note: string;
  };

  coverage: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    /** Hubs that exist, labelled; the registry resolves the paths. */
    items: { page: PageId; label: string; detail: string }[];
    /** Required: that this is a list of pages, not a list of guarantees. */
    note: string;
  };

  fulfilment: {
    id: string;
    eyebrow: string;
    heading: string;
    /** Whose statement this is, in the manner of `OwnerNote`. */
    label: string;
    /** Required. See the note above. */
    body: string;
    paragraphs: string[];
  };

  service: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: string[];
    /** Required: that no response time or support hours are promised. */
    note: string;
  };
};
