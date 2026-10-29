import { cn } from "cn";
import { Container } from "./container";

/**
 * A page section with its heading, its anchor and its surface.
 *
 * Every section on the homepage goes through this, which is what keeps the
 * vertical rhythm and the heading hierarchy consistent without each section
 * re-deciding them. `tone` picks one of the three surfaces in the design
 * system; the dark one flips the type colours with it.
 */
export function Section({
  id,
  eyebrow,
  heading,
  lead,
  tone = "default",
  size = "content",
  className,
  headerClassName,
  children,
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  lead?: string;
  tone?: "default" | "sunken" | "deep";
  size?: "prose" | "content" | "wide";
  className?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}) {
  const deep = tone === "deep";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "sunken" && "bg-surface-sunken",
        deep && "bg-deep text-deep-foreground",
        className,
      )}
    >
      <Container size={size}>
        <div className={cn("max-w-[52ch]", headerClassName)}>
          {eyebrow ? (
            <p
              className={cn(
                "flex items-center gap-3 type-label",
                deep ? "text-accent-glow" : "text-accent-ink",
              )}
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-accent"
              />
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className={cn(
              "mt-4 type-h2",
              deep ? "text-deep-foreground" : "text-foreground",
            )}
          >
            {heading}
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
        {children}
      </Container>
    </section>
  );
}
