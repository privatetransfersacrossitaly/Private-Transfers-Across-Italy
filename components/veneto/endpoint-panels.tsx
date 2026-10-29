import { cn } from "cn";
import type { EndpointSplit } from "@/content/veneto/types";

/**
 * The Venice distinction, rendered.
 *
 * Two panels: where a road vehicle can finish, and where it cannot. The same
 * structure appears in the Venice hub's hero and in the body of the Marco
 * Polo page, so a reader meets it twice in the same shape rather than having
 * to re-learn the idea in different words.
 *
 * The second panel carries an accent border and the accent wash, because it
 * is the half that contradicts what most people assume — and because its
 * closing note is the cluster's central refusal: a boat, a vaporetto, a water
 * taxi or a porter is not part of a road transfer.
 *
 * `children` is appended inside the water panel, which is where the Marco
 * Polo page puts its photograph of a vaporetto: an image of the thing being
 * excluded rather than a decorative canal view.
 */
export function EndpointPanels({
  split,
  className,
  children,
  headingLevel = "h3",
}: {
  split: EndpointSplit;
  className?: string;
  children?: React.ReactNode;
  /**
   * The level the two panel headings render at. In the Venice hero they sit
   * directly under the `h1`, so they are `h2` there; in the body of the Marco
   * Polo page they sit under a band's `h2`, so they are `h3`. Getting this
   * wrong produces a heading-level jump, which is how it was caught.
   */
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className={cn("grid gap-5 lg:grid-cols-2", className)}>
      <section
        aria-labelledby="panel-road"
        className="rounded-lg border-2 border-border-strong bg-surface p-6 sm:p-7"
      >
        <p className="type-label text-muted-foreground">{split.road.label}</p>
        <Heading
          id="panel-road"
          className="mt-2 font-heading type-h3 text-foreground"
        >
          {split.road.heading}
        </Heading>
        <ul className="mt-5 space-y-3.5">
          {split.road.items.map((item) => (
            <li key={item.id} className="border-t border-border pt-3.5">
              <span className="block type-small font-medium text-foreground">
                {item.name}
              </span>
              <span className="mt-1 block max-w-[46ch] type-small text-muted-foreground">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-border pt-4 type-caption text-muted-foreground">
          {split.road.note}
        </p>
      </section>

      <section
        aria-labelledby="panel-water"
        className="rounded-lg border-2 border-accent/55 bg-accent-wash p-6 sm:p-7"
      >
        <p className="type-label text-accent-ink">{split.water.label}</p>
        <Heading
          id="panel-water"
          className="mt-2 font-heading type-h3 text-foreground"
        >
          {split.water.heading}
        </Heading>
        <ul className="mt-5 space-y-3.5">
          {split.water.items.map((item) => (
            <li key={item.id} className="border-t border-accent/30 pt-3.5">
              <span className="block type-small font-medium text-foreground">
                {item.name}
              </span>
              <span className="mt-1 block max-w-[46ch] type-small text-muted-foreground">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-accent/30 pt-4 type-caption text-foreground">
          {split.water.note}
        </p>
        {children}
      </section>
    </div>
  );
}
