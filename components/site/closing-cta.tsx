import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { cn } from "cn";

/**
 * The last thing on a cluster page.
 *
 * One action, and a line under it saying exactly what happens when it is
 * taken. The note is not decoration: the quotation flow is an enquiry, and a
 * button that implied a booking would be a promise the site cannot keep.
 */
export function ClosingCta({
  id,
  heading,
  body,
  primaryCta,
  secondaryCta,
  note,
  tone = "deep",
}: {
  id: string;
  heading: string;
  body: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  note: string;
  tone?: "deep" | "sunken";
}) {
  const deep = tone === "deep";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "py-16 sm:py-20",
        deep ? "bg-deep text-deep-foreground" : "bg-surface-sunken",
      )}
    >
      <Container size="content">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end">
          <div>
            <h2
              id={`${id}-heading`}
              className={cn(
                "max-w-[20ch] type-h2",
                deep ? "text-deep-foreground" : "text-foreground",
              )}
            >
              {heading}
            </h2>
            <p
              className={cn(
                "mt-5 max-w-[62ch] type-body",
                deep ? "text-deep-muted" : "text-muted-foreground",
              )}
            >
              {body}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Cta href={primaryCta.href} size="lg" className="w-full sm:w-auto">
              {primaryCta.label}
            </Cta>
            {secondaryCta ? (
              <Cta
                href={secondaryCta.href}
                variant={deep ? "onDeep" : "outline"}
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCta.label}
              </Cta>
            ) : null}
          </div>
        </div>
        <p
          className={cn(
            "mt-10 max-w-[70ch] border-t pt-5 type-small",
            deep
              ? "border-deep-line text-deep-muted"
              : "border-border text-muted-foreground",
          )}
        >
          {note}
        </p>
      </Container>
    </section>
  );
}
