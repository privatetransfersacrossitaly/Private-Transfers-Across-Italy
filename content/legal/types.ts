import type { Meta, Term } from "@/content/page-types";
import type { PageId } from "@/lib/routes";

/**
 * The three policy pages, in either language.
 *
 * ── One shape for all three ───────────────────────────────────────────────
 * A privacy policy, a set of terms and a refund policy are the same kind of
 * document: a title, a status, a numbered run of sections, and cross-links to
 * the other two. Three bespoke layouts would drift apart, and a reader who
 * learned to read one would have to learn the next. So there is one shape and
 * one component, and the difference between the pages is entirely content.
 *
 * ── `status` ──────────────────────────────────────────────────────────────
 * Required, and the only non-content field left: whether the policy is in
 * force, when it last changed, and from when it applies. A policy without a
 * date is a policy nobody can tell the age of, and the Terms rely on it —
 * the version that governs a booking is the one in force when the booking
 * was confirmed.
 *
 * ── Two fields that used to be here ───────────────────────────────────────
 * `draft`, a notice at the top of each page, and `section.pending`, a
 * callout inside a section. Both existed while these pages were unpublished
 * drafts depending on facts nobody had supplied, and both were drafting
 * apparatus: a review checklist — "needs legal advice", "the owner must
 * decide" — rendered onto a public page as though a customer had come to
 * read it. There was also a convention of bracketed `[TO BE CONFIRMED — …]`
 * tokens in the copy.
 *
 * All three are gone, and the pages are published. Nothing substantive went
 * with them: where one was the only place a reader was told about a limit,
 * that limit is now stated in the section's own prose, in the second person.
 * A policy that says "we have not set a rule for this, so your consumer
 * rights govern it" is finished writing. The same thing in a bracketed token
 * is an unfinished file somebody published by accident.
 */
export type PolicySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  /** A plain list, where one reads better than prose. */
  bullets?: string[];
  /** Named things with a consequence each. */
  terms?: Term[];
};

export type LegalContent = {
  meta: Meta;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  lead: string;

  /** Required. Dated, and says whether the policy is in force. */
  status: {
    stateLabel: string;
    state: string;
    draftedLabel: string;
    drafted: string;
    effectiveLabel: string;
    effective: string;
  };

  tocLabel: string;
  sections: PolicySection[];

  /** The other two policies, and anything else worth reaching from here. */
  related: {
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

export type LocalizedLegal = { en: LegalContent; it: LegalContent };
