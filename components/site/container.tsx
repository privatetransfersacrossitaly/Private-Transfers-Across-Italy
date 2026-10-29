import { cn } from "cn";

/**
 * The three measures the site uses, and nothing else.
 *
 * `content` is the default and holds most sections. `wide` is for full-bleed
 * photography and anything that wants to breathe. `prose` is a reading
 * measure — around 68 characters — used wherever there is a paragraph someone
 * is expected to actually read.
 */
export function Container({
  size = "content",
  className,
  children,
}: {
  size?: "prose" | "content" | "wide";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "prose" && "max-w-prose",
        size === "content" && "max-w-content",
        size === "wide" && "max-w-wide",
        className,
      )}
    >
      {children}
    </div>
  );
}
