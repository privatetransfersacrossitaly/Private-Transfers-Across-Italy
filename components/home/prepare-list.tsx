import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";

/**
 * What to have ready. A description list, because that is what it is: five
 * terms and what each one means in practice.
 */
export function PrepareList({
  content,
}: {
  content: HomeContent;
}) {
  const { prepare } = content;

  return (
    <Section
      id={prepare.id}
      eyebrow={prepare.eyebrow}
      heading={prepare.heading}
      lead={prepare.lead}
      size="wide"
    >
      <dl className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {prepare.items.map((item) => (
          <div key={item.title} className="border-t border-border pt-5">
            <dt className="type-h3 text-foreground">{item.title}</dt>
            <dd className="mt-2.5 type-small text-muted-foreground">
              {item.body}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
