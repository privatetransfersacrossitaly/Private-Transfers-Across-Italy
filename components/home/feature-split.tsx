import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import { photo } from "@/content/photos";
import type { PhotoSlug } from "@/content/photos";
import { pathFor } from "@/lib/routes";
import type { PageId } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * Prose on one side, a photograph on the other, with an optional list of
 * what to send. Used by the intercity and cruise sections, which have the
 * same shape of argument and should not each invent a layout for it.
 */
export function FeatureSplit({
  locale,
  id,
  eyebrow,
  heading,
  lead,
  paragraphs,
  photoSlug,
  reverse = false,
  tone = "default",
  checklist,
  note,
  link,
}: {
  locale: Locale;
  id: string;
  eyebrow: string;
  heading: string;
  lead: string;
  paragraphs: readonly string[];
  photoSlug?: PhotoSlug;
  reverse?: boolean;
  tone?: "default" | "sunken";
  checklist?: { heading: string; items: readonly string[] };
  note?: string;
  /** A page that covers one of the places this section talks about. */
  link?: { page: PageId; label: string };
}) {
  return (
    <Section id={id} eyebrow={eyebrow} heading={heading} lead={lead} tone={tone} size="wide">
      <div className="mt-12 grid items-start gap-x-14 gap-y-10 lg:grid-cols-2">
        {photoSlug ? (
        <div className={reverse ? "lg:order-last" : undefined}>
          <Photo
            photo={photo(photoSlug)}
            locale={locale}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 34rem, 92vw"
          />
        </div>
        ) : null}

        <div>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-0 mb-5 max-w-[60ch] type-body text-muted-foreground last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          {link ? (
            <Link
              href={pathFor(link.page, locale)}
              className="mt-6 inline-flex min-h-11 items-center type-small font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {link.label}
            </Link>
          ) : null}

          {checklist ? (
            <div className="mt-8 border-t border-border pt-5">
              <h3 className="type-label text-accent-ink">
                {checklist.heading}
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {checklist.items.map((item) => (
                  <li key={item} className="flex gap-3 type-small text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {note ? (
            <p className="mt-7 max-w-[64ch] type-small text-muted-foreground">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
