import type { PageId } from "@/lib/routes";

/**
 * The content primitives both clusters are built from.
 *
 * These describe shapes that are genuinely common to any page on the site —
 * a page's metadata, a question and its answer, a labelled term, a numbered
 * step, an attributable source — plus the two page types that are shared
 * rather than cluster-specific: the chrome every page carries, and the route
 * page, which Rome and Milan both use because they answer the same kind of
 * question in the same shape.
 *
 * Everything that is specific to one cluster lives in that cluster's own
 * types file. Content never holds a URL: links are declared as page ids and
 * resolved through the route registry when they are rendered.
 */

export type Meta = { title: string; description: string };

export type Cta = { label: string; href?: string };

export type Faq = { question: string; answer: string };

export type Term = { term: string; detail: string };

export type Step = { title: string; body: string };

export type Source = { text: string; linkText: string; href: string };

/** Shared by every page in the cluster. */
export type PageChrome = {
  meta: Meta;
  breadcrumbLabel: string;
  closing: {
    id: string;
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: { label: string; page: PageId; hash?: string };
    note: string;
  };
  faq: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Faq[];
  };
};

/* ── Route pages: shared by every cluster ─────────────────────────────── */

/**
 * One end of a journey.
 *
 * Both ends get the same shape but almost never the same content: an airport
 * end and a city end pose different problems, which is the argument every
 * route page in this project is built on.
 */
export type Endpoint = {
  id: string;
  label: string;
  name: string;
  page: PageId;
  linkText: string;
  items: Term[];
};

/**
 * A route page.
 *
 * Rome and Milan share this type because their route pages answer the same
 * kind of question. What they do not share is a shape: `lead` holds whichever
 * module this particular route is led by — a difference panel, a countdown, a
 * fork — and a route with no `lead` opens on its endpoints instead. See
 * `components/rome/route-page.tsx`.
 */
export type RoutePage = PageChrome & {
  hero: {
    from: string;
    to: string;
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  lead?: {
    id: string;
    eyebrow: string;
    heading: string;
    text: string;
    steps?: Step[];
    columns?: { id: string; heading: string; subheading: string; rows: Term[] }[];
    terms?: Term[];
    source?: Source;
  };
  endpoints: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    from: Endpoint;
    to: Endpoint;
  };
  prepare: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  /**
   * The journey home, on the page about the journey out.
   *
   * Added for Bologna, where a feasibility audit found that mirrored
   * departure pages would repeat three-quarters of their arrival
   * counterparts while adding almost nothing verified. A section answers the
   * departing traveller without creating a near-duplicate page.
   *
   * Optional, and no other cluster sets it, so every existing route page
   * renders exactly as before. Where a hotel publishes nothing about leaving,
   * the honest section is a short reminder rather than padding.
   */
  departure?: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    note: string;
    source?: Source;
  };
  related: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};
