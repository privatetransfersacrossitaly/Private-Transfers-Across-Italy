import { cn } from "cn";
import { Container } from "./container";

/**
 * A section shell with no opinion about what goes in it.
 *
 * `Section` carries a fixed header — eyebrow, h2, lead — which is right for
 * the homepage, where every section is introduced the same way. The cluster
 * pages need the opposite: each one leads with a different kind of module,
 * and several open with a table or a timeline rather than a paragraph.
 *
 * So this is the surface, the rhythm and the anchor, and nothing else. The
 * heading, where there is one, is written by the page.
 */
export function Band({
  id,
  tone = "default",
  size = "content",
  spacing = "normal",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: "default" | "sunken" | "deep";
  size?: "prose" | "content" | "wide";
  spacing?: "tight" | "normal" | "loose";
  className?: string;
  children: React.ReactNode;
  /** Id of the heading that names this section, when it has one. */
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        spacing === "tight" && "py-10 sm:py-12",
        spacing === "normal" && "py-14 sm:py-18 lg:py-20",
        spacing === "loose" && "py-16 sm:py-20 lg:py-28",
        tone === "sunken" && "bg-surface-sunken",
        tone === "deep" && "bg-deep text-deep-foreground",
        className,
      )}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}
