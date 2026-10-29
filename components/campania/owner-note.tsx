import { cn } from "cn";
import type { OwnerClaim } from "@/content/campania/types";

/**
 * Something the business says about itself, marked as such.
 *
 * ── Why this is a component and not a `Callout` ───────────────────────────
 * Until Campania, every claim on this site was either supported by a named
 * publisher or explicitly refused. The owner has now confirmed operational
 * facts no public source states: coverage of the Amalfi Coast road, and
 * arrangements for collecting cruise passengers at Naples.
 *
 * That information is usable and worth telling a reader. It is also a
 * *different kind of claim* from an operator's published timetable, and the
 * worst thing this cluster could do is let the two read alike — a visitor who
 * cannot tell "the airport publishes this" from "the company says this" has
 * been quietly misled, however true both are.
 *
 * So it gets its own treatment: a neutral surface rather than the accent
 * reserved for refusals, and a label above the heading that names whose
 * statement it is. `SourceNote` points outward at a publisher; this points
 * inward at us, and says so.
 *
 * The label is content rather than a hard-coded string because it has to work
 * in both languages, and because the precise phrasing differs by page.
 */
export function OwnerNote({
  claim,
  headingId,
  className,
}: {
  claim: OwnerClaim;
  headingId: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-strong bg-surface p-6 sm:p-7",
        className,
      )}
    >
      <p className="type-label text-muted-foreground">{claim.label}</p>
      <h2
        id={headingId}
        className="mt-3 font-heading type-h3 text-foreground"
      >
        {claim.heading}
      </h2>
      <p className="mt-4 max-w-[68ch] type-body text-muted-foreground">
        {claim.body}
      </p>
    </div>
  );
}
