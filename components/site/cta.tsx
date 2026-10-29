import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * The site's calls to action.
 *
 * A link, not a button: every one of these navigates, so none of them needs
 * button behaviour, and keeping them as anchors means the homepage ships no
 * JavaScript for them. The three variants are the whole set — a solid accent
 * for the primary action, a quiet outline for the secondary, and a version
 * that works on the dark band.
 *
 * Height is at least 44px on every variant, which is the touch-target size
 * the primary actions are expected to meet.
 */
const ctaVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border type-small font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-accent text-accent-foreground hover:bg-accent-hover",
        outline:
          "border-border-strong bg-transparent text-foreground hover:bg-surface-sunken",
        onDeep:
          "border-deep-muted bg-transparent text-deep-foreground hover:bg-deep-foreground/10",
      },
      size: {
        md: "px-5 py-2.5",
        lg: "px-6 py-3 type-body sm:px-7",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CtaProps = React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof ctaVariants>;

export function Cta({ className, variant, size, ...props }: CtaProps) {
  return (
    <Link className={cn(ctaVariants({ variant, size }), className)} {...props} />
  );
}

export { ctaVariants };
