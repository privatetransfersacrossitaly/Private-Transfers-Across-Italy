import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";

/**
 * How a request becomes a journey. Numbered because the order is the content:
 * the third step is the only one that is a booking, and that is the point the
 * section exists to make.
 */
export function Steps({
  content,
}: {
  content: HomeContent;
}) {
  const { how } = content;

  return (
    <Section
      id={how.id}
      eyebrow={how.eyebrow}
      heading={how.heading}
      lead={how.lead}
      tone="deep"
      size="wide"
    >
      <ol className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-3">
        {how.steps.map((step, index) => (
          <li key={step.title} className="border-t border-deep-line pt-5">
            <p
              aria-hidden="true"
              className="font-heading type-h3 font-semibold text-accent-glow tabular-nums"
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 type-h3 text-deep-foreground">{step.title}</h3>
            <p className="mt-2.5 type-small text-deep-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-12 max-w-[74ch] border-t border-deep-line pt-6 type-small text-deep-muted">
        {how.note}
      </p>
    </Section>
  );
}
