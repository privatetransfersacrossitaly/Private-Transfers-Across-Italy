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
 * ── The fields that exist because facts are missing ───────────────────────
 * These pages are being written before the business facts they depend on have
 * been supplied — no legal identity, no contact address, no hosting provider,
 * no contracting party, no governing law. Three fields carry that honestly
 * rather than papering over it, and all three are required:
 *
 * - `draft` renders at the top of every page. These are drafts, they are not
 *   in force, and a visitor must not be able to read them as binding terms.
 *   Making it required means no page can quietly lose the notice.
 * - `status` carries the drafted date and the version. A policy without a
 *   date is a policy nobody can tell the age of.
 * - `section.pending` marks an individual provision that needs the owner's
 *   decision or legal review. It renders as visible, customer-readable text —
 *   never as an internal note — and it is what keeps an unresolved rule from
 *   sitting on the page looking settled.
 *
 * ── Placeholders ──────────────────────────────────────────────────────────
 * Where a fact is missing the copy carries a bracketed token, `[TO BE
 * CONFIRMED — …]` in English and `[DA CONFERMARE — …]` in Italian. They are
 * deliberately ugly and deliberately greppable: nothing invented, and nothing
 * that could be mistaken for a real name, address or jurisdiction.
 */
export type PolicySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  /** A plain list, where one reads better than prose. */
  bullets?: string[];
  /** Named things with a consequence each. */
  terms?: Term[];
  /** A provision that is not settled. Rendered as visible text. */
  pending?: { label: string; body: string };
};

export type LegalContent = {
  meta: Meta;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  lead: string;

  /** Required. Renders above everything else. See the note above. */
  draft: { label: string; body: string };

  /** Required. Dated, versioned, and honest about not being in force. */
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
