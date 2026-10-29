import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";

/**
 * The questions, as native `details` elements.
 *
 * No JavaScript: `details` opens and closes on its own, is keyboard operable
 * by default and is announced correctly, which is more than most accordion
 * implementations manage. The answers are plain text in the page, so they are
 * readable by anything that reads the page at all — including the structured
 * data that mirrors them exactly.
 */
export function Faq({
  content,
}: {
  content: HomeContent;
}) {
  const { faq } = content;

  return (
    <Section
      id={faq.id}
      eyebrow={faq.eyebrow}
      heading={faq.heading}
      lead={faq.lead}
      tone="sunken"
    >
      <div className="mt-10 border-t border-border">
        {faq.items.map((item) => (
          <details key={item.question} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-start gap-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <h3 className="font-heading type-h3 text-foreground">
                {item.question}
              </h3>
              {/* The same plus/minus the rest of the site now uses. */}
              <span
                aria-hidden="true"
                className="relative mt-2 ml-auto block size-3.5 shrink-0"
              >
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-accent" />
                <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 group-open:opacity-0" />
              </span>
            </summary>
            <p className="max-w-[68ch] pb-6 type-body text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
