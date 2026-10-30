import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { outboundRel } from "@/lib/site";

/**
 * The modules the Rome cluster pages are built from.
 *
 * ── Why a kit rather than a page template ─────────────────────────────────
 * Every page in the cluster uses the same type scale, the same palette, the
 * same focus rings and the same spacing rhythm, because it is one brand. What
 * must differ is which of these modules a page uses, in what order, and which
 * one dominates — a port page is led by a checklist, an airport page by a
 * timeline, a station page by a table.
 *
 * So none of these is a page. Each is one idea, rendered well, and the pages
 * in `components/rome/` decide the composition. `docs/rome-design-differentiation.md`
 * records which page chose what and why.
 */

/* ── Headings ─────────────────────────────────────────────────────────── */

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "deep";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 type-label",
        tone === "deep" ? "text-accent-glow" : "text-accent-ink",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

export function BandHeading({
  id,
  children,
  lead,
  tone = "default",
  className,
}: {
  id: string;
  children: React.ReactNode;
  lead?: string;
  tone?: "default" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <div className={cn("max-w-[54ch]", className)}>
      <h2
        id={id}
        className={cn(
          "type-h2",
          deep ? "text-deep-foreground" : "text-foreground",
        )}
      >
        {children}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 type-lead",
            deep ? "text-deep-muted" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ── Prose ────────────────────────────────────────────────────────────── */

export function Paragraphs({
  items,
  tone = "default",
  className,
}: {
  items: string[];
  tone?: "default" | "deep";
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((text, index) => (
        <p
          key={index}
          className={cn(
            "max-w-[68ch] type-body",
            tone === "deep" ? "text-deep-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ))}
    </div>
  );
}

/**
 * A short line crediting where a fact came from.
 *
 * This is the opposite of an image source caption: the architecture document
 * forbids those and asks for factual claims to be attributable. A reader who
 * wants to check today's ZTL hours or today's terminal allocation needs the
 * operator's own page, and time-sensitive facts are dated here rather than
 * presented as permanent.
 */
export function SourceNote({
  children,
  href,
  linkText,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  href: string;
  linkText: string;
  tone?: "default" | "deep";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "type-caption",
        tone === "deep" ? "text-deep-muted" : "text-muted-foreground",
        className,
      )}
    >
      {children}{" "}
      <a
        href={href}
        // Decided by the destination. Every citation written so far is
        // external, but see `outboundRel` for the one that is not.
        rel={outboundRel(href)}
        className={cn(
          "underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          tone === "deep"
            ? "text-deep-foreground decoration-deep-muted hover:decoration-current"
            : "text-foreground decoration-border-strong hover:decoration-current",
        )}
      >
        {linkText}
      </a>
    </p>
  );
}

/* ── Choosing between places ──────────────────────────────────────────── */

export type ChooserRow = {
  id: string;
  role: string;
  name: string;
  href: string;
  fact: string;
  body: string;
};

/**
 * Rows a visitor scans to find the one that describes their own arrival.
 *
 * Rules rather than cards: four cards would read as four equal products,
 * which is wrong — these are four different kinds of place, and the visitor
 * belongs to exactly one of them.
 */
export function ChooserList({ rows }: { rows: ChooserRow[] }) {
  return (
    <ul className="mt-10 border-t border-border">
      {rows.map((row) => (
        <li key={row.id} className="border-b border-border">
          <Link
            href={row.href}
            className="group grid gap-x-8 gap-y-2 py-6 transition-colors hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:grid-cols-[10rem_minmax(0,1fr)] lg:grid-cols-[12rem_minmax(0,22rem)_minmax(0,1fr)] lg:py-7"
          >
            <span className="type-label text-accent-ink">{row.role}</span>
            <span>
              <span className="block font-heading type-h3 text-foreground underline decoration-transparent underline-offset-4 group-hover:decoration-accent">
                {row.name}
              </span>
              <span className="mt-1 block type-small text-muted-foreground">
                {row.fact}
              </span>
            </span>
            <span className="type-body text-muted-foreground lg:max-w-[46ch]">
              {row.body}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ── Facts at a glance ────────────────────────────────────────────────── */

export function FactStrip({
  items,
  tone = "default",
  className,
}: {
  items: { label: string; value: string }[];
  tone?: "default" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4",
        deep ? "bg-deep-line" : "bg-border",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn("px-5 py-5", deep ? "bg-deep" : "bg-surface")}
        >
          <dt
            className={cn(
              "type-label",
              deep ? "text-deep-muted" : "text-muted-foreground",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "mt-2 font-heading type-h3",
              deep ? "text-deep-foreground" : "text-foreground",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ── Comparing two things ─────────────────────────────────────────────── */

export type CompareColumn = {
  id: string;
  heading: string;
  subheading?: string;
  rows: { term: string; detail: string }[];
};

export function CompareColumns({
  columns,
  className,
}: {
  columns: CompareColumn[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-2", className)}>
      {columns.map((column) => (
        <div
          key={column.id}
          className="rounded-lg border border-border bg-surface p-6 sm:p-7"
        >
          <h3 className="font-heading type-h3 text-foreground">
            {column.heading}
          </h3>
          {column.subheading ? (
            <p className="mt-1 type-small text-accent-ink">
              {column.subheading}
            </p>
          ) : null}
          <dl className="mt-5 space-y-4">
            {column.rows.map((row) => (
              <div key={row.term} className="border-t border-border pt-4">
                <dt className="type-label text-muted-foreground">{row.term}</dt>
                <dd className="mt-1.5 type-small text-foreground">
                  {row.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

/* ── Reference data ───────────────────────────────────────────────────── */

/**
 * A real table, for information that is genuinely tabular.
 *
 * It scrolls horizontally on a narrow screen rather than reflowing into
 * stacked cards, because the comparison across a row is the point and a card
 * stack destroys it. The scroll container is focusable so it can be reached
 * and scrolled from the keyboard.
 */
export function DataTable({
  caption,
  columns,
  rows,
  className,
}: {
  caption: string;
  columns: string[];
  rows: { id: string; cells: React.ReactNode[] }[];
  className?: string;
}) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={caption}
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      <table className="w-full min-w-[42rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border-strong">
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="px-5 py-4 type-label text-muted-foreground"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-border last:border-b-0 align-top"
            >
              {row.cells.map((cell, index) => (
                <td
                  key={index}
                  className={cn(
                    "px-5 py-5 type-small",
                    index === 0
                      ? "font-heading type-h3 text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Sequences ────────────────────────────────────────────────────────── */

/**
 * An ordered sequence with the numeral set as a rule down the left.
 *
 * Used where the order is real — a landing sequence, a countdown to an
 * all-aboard time — and never as decoration for an unordered list.
 */
export function NumberedSteps({
  items,
  tone = "default",
  className,
}: {
  items: { title: string; body: string }[];
  tone?: "default" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <ol className={cn("space-y-0", className)}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            "grid gap-x-5 gap-y-1 border-l-2 py-5 pl-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:pl-7",
            deep ? "border-accent-glow/40" : "border-accent/35",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "font-heading type-h3 tabular-nums",
              deep ? "text-accent-glow" : "text-accent-ink",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>
            <span
              className={cn(
                "block font-heading type-h3",
                deep ? "text-deep-foreground" : "text-foreground",
              )}
            >
              {item.title}
            </span>
            <span
              className={cn(
                "mt-2 block max-w-[62ch] type-body",
                deep ? "text-deep-muted" : "text-muted-foreground",
              )}
            >
              {item.body}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ── Named things with an explanation each ────────────────────────────── */

export function DefinitionList({
  items,
  tone = "default",
  className,
}: {
  items: { term: string; detail: string }[];
  tone?: "default" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <dl className={cn("divide-y", deep ? "divide-deep-line" : "divide-border", className)}>
      {items.map((item) => (
        <div
          key={item.term}
          className="grid gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
        >
          <dt
            className={cn(
              "font-heading type-h3",
              deep ? "text-deep-foreground" : "text-foreground",
            )}
          >
            {item.term}
          </dt>
          <dd
            className={cn(
              "max-w-[62ch] type-body",
              deep ? "text-deep-muted" : "text-muted-foreground",
            )}
          >
            {item.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ── Checklists ───────────────────────────────────────────────────────── */

export function Checklist({
  heading,
  items,
  tone = "default",
  className,
}: {
  heading?: string;
  items: string[];
  tone?: "default" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <div className={className}>
      {heading ? (
        <h3
          className={cn(
            "type-label",
            deep ? "text-accent-glow" : "text-accent-ink",
          )}
        >
          {heading}
        </h3>
      ) : null}
      <ul className={cn("space-y-3", heading && "mt-4")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className={cn(
                "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full",
                deep ? "bg-accent-glow" : "bg-accent",
              )}
            />
            <span
              className={cn(
                "max-w-[60ch] type-small",
                deep ? "text-deep-muted" : "text-muted-foreground",
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── A point that needs to stand apart from the prose ─────────────────── */

export function Callout({
  heading,
  children,
  tone = "default",
  className,
}: {
  heading?: string;
  children: React.ReactNode;
  tone?: "default" | "accent" | "deep";
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-lg border p-6 sm:p-7",
        tone === "default" && "border-border bg-surface",
        tone === "accent" && "border-accent/30 bg-accent-wash",
        tone === "deep" && "border-deep-line bg-deep text-deep-foreground",
        className,
      )}
    >
      {heading ? (
        <h3
          className={cn(
            "font-heading type-h3",
            tone === "deep" ? "text-deep-foreground" : "text-foreground",
          )}
        >
          {heading}
        </h3>
      ) : null}
      <div
        className={cn(
          "max-w-[64ch] space-y-3 type-body",
          heading && "mt-3",
          tone === "deep" ? "text-deep-muted" : "text-muted-foreground",
        )}
      >
        {children}
      </div>
    </aside>
  );
}

/* ── An index of pages ────────────────────────────────────────────────── */

export function LinkIndex({
  items,
  columns = 2,
  tone = "default",
  className,
}: {
  items: { id: string; href: string; label: string; detail?: string }[];
  columns?: 1 | 2;
  tone?: "default" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <ul
      className={cn(
        "grid gap-x-10",
        columns === 2 && "sm:grid-cols-2",
        deep ? "divide-deep-line" : "divide-border",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            "border-t",
            deep ? "border-deep-line" : "border-border",
          )}
        >
          <Link
            href={item.href}
            className="group block py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span
              className={cn(
                "block type-body font-medium underline decoration-transparent underline-offset-4 transition-colors",
                deep
                  ? "text-deep-foreground group-hover:decoration-accent-glow"
                  : "text-foreground group-hover:decoration-accent",
              )}
            >
              {item.label}
            </span>
            {item.detail ? (
              <span
                className={cn(
                  "mt-1 block max-w-[48ch] type-small",
                  deep ? "text-deep-muted" : "text-muted-foreground",
                )}
              >
                {item.detail}
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ── Questions ────────────────────────────────────────────────────────── */

/**
 * Questions and answers, each one expandable.
 *
 * ── Why `details` and not an ARIA accordion ───────────────────────────────
 * This used to be a plain description list, on the argument that the answers
 * are the reason the page is useful to someone arriving from a search result,
 * and that hiding them behind a control would cost client-side JavaScript to
 * make the page less useful. Both halves of that argument still hold, and
 * `details` is what satisfies them: the browser does the opening and closing,
 * so there is no JavaScript, no hydration boundary and no bundle — and the
 * answers stay in the server-rendered HTML, readable by anything that reads
 * the page at all, including the structured data that mirrors them.
 *
 * A hand-built accordion with `aria-expanded` and `aria-controls` would need a
 * client component on every page that has questions, which is all of them. A
 * native `summary` is already exposed as a button with its expanded state, and
 * already answers to Enter and Space.
 *
 * This is the same construction the homepage has used since it was built; the
 * two now share a shape as well as a behaviour.
 *
 * ── Composition ──────────────────────────────────────────────────────────
 * Full-width rows separated by rules, rather than the two-column grid this
 * block used before — a row that opens needs the width, and a right-aligned
 * control needs an edge to sit against.
 *
 * The question becomes an `h3`, as it is on the homepage, so the questions
 * appear in the document outline instead of being invisible to it.
 *
 * The marker is one square with two bars: the horizontal one is always drawn,
 * the vertical one fades out when the row opens, so a plus becomes a minus
 * without a second icon or a swap. `globals.css` already neutralises every
 * transition under `prefers-reduced-motion`, so the movement needs no guard
 * of its own.
 */
export function QuestionList({
  items,
  tone = "default",
  illustration,
  className,
}: {
  items: { question: string; answer: string }[];
  tone?: "default" | "deep";
  /**
   * Optional ornament beside the questions. Pages without one are laid out
   * exactly as before, so adding it changed nothing for the pages that have
   * none yet.
   */
  illustration?: { src: string; width: number; height: number };
  className?: string;
}) {
  const deep = tone === "deep";
  const line = deep ? "border-deep-line" : "border-border";

  const rows = (
    <div className={cn("border-t", line, !illustration && className)}>
      {items.map((item) => (
        <details key={item.question} className={cn("group border-b", line)}>
          <summary className="flex cursor-pointer list-none items-start gap-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <h3
              className={cn(
                "font-heading type-h3",
                deep ? "text-deep-foreground" : "text-foreground",
              )}
            >
              {item.question}
            </h3>
            <span
              aria-hidden="true"
              className="relative mt-2 ml-auto block size-3.5 shrink-0"
            >
              <span
                className={cn(
                  "absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full",
                  deep ? "bg-accent-glow" : "bg-accent",
                )}
              />
              <span
                className={cn(
                  "absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full transition-opacity duration-200 group-open:opacity-0",
                  deep ? "bg-accent-glow" : "bg-accent",
                )}
              />
            </span>
          </summary>
          <p
            className={cn(
              "max-w-[68ch] pb-6 type-body",
              deep ? "text-deep-muted" : "text-muted-foreground",
            )}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );

  if (!illustration) return rows;

  return (
    <div
      className={cn(
        "grid items-start gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)]",
        className,
      )}
    >
      {rows}
      {/* Ornament: the heading above already names the section in words. */}
      <Image
        src={illustration.src}
        alt=""
        aria-hidden="true"
        width={illustration.width}
        height={illustration.height}
        unoptimized
        className="order-first h-auto w-full max-w-[17rem] justify-self-center lg:order-none lg:sticky lg:top-28"
      />
    </div>
  );
}

/* ── Two zones, one inside the other ──────────────────────────────────── */

/**
 * Milan's traffic restrictions, drawn as what they are: nested.
 *
 * Almost every explanation of Area B and Area C elsewhere treats them as two
 * items in a list, which is the one thing they are not — Area C sits inside
 * Area B, so a journey into the centre crosses both. Two boxes, one within
 * the other, says that before a word is read.
 *
 * Built from elements and real text rather than an image, so it reflows on a
 * phone, scales with the type scale and is read aloud in a sensible order.
 * The frames are decorative; every fact in it is text.
 */
export function ZoneDiagram({
  outer,
  inner,
  className,
}: {
  outer: { label: string; name: string; detail: string; hours: string };
  inner: { label: string; name: string; detail: string; hours: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 border-dashed border-border-strong bg-surface p-5 sm:p-7",
        className,
      )}
    >
      <p className="type-label text-muted-foreground">{outer.label}</p>
      <h3 className="mt-2 font-heading type-h3 text-foreground">
        {outer.name}
      </h3>
      <p className="mt-2 max-w-[52ch] type-small text-muted-foreground">
        {outer.detail}
      </p>
      <p className="mt-2 type-small font-medium text-foreground">
        {outer.hours}
      </p>

      <div className="mt-6 rounded-md border-2 border-accent/50 bg-accent-wash p-5 sm:mx-6 sm:mt-7 sm:p-6">
        <p className="type-label text-accent-ink">{inner.label}</p>
        <h3 className="mt-2 font-heading type-h3 text-foreground">
          {inner.name}
        </h3>
        <p className="mt-2 max-w-[48ch] type-small text-muted-foreground">
          {inner.detail}
        </p>
        <p className="mt-2 type-small font-medium text-foreground">
          {inner.hours}
        </p>
      </div>
    </div>
  );
}

/* ── A place that is really several places ────────────────────────────── */

/**
 * Towns on a lake, each with the arm of water it sits on.
 *
 * The branch label is not decoration: on Lake Como it is the fact that
 * decides the road, and two towns facing each other across the water can be
 * an hour apart by car. Each entry carries its own anchor so the selector in
 * the hero can reach it.
 */
export function TownIndex({
  towns,
  className,
}: {
  towns: {
    id: string;
    name: string;
    branch: string;
    detail: string;
  }[];
  className?: string;
}) {
  return (
    <ul className={cn("border-t border-border", className)}>
      {towns.map((town) => (
        <li
          key={town.id}
          id={town.id}
          className="scroll-mt-28 border-b border-border py-6"
        >
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
            <div>
              <h3 className="font-heading type-h3 text-foreground">
                {town.name}
              </h3>
              <p className="mt-1.5 type-label text-accent-ink">{town.branch}</p>
            </div>
            <p className="max-w-[62ch] type-body text-muted-foreground">
              {town.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
