import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";
import { pathFor } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import { photo } from "@/content/photos";

/**
 * Destination discovery.
 *
 * The four cities are presented editorially, with a photograph and a line
 * that says something true about transfers there. A card becomes a link the
 * moment its `page` is set, and stays plain text until then — a tile that
 * looks clickable and is not is worse than one that never pretended. Rome is
 * the first to have a page behind it; the other three follow when their
 * clusters are built.
 *
 * The cities listed underneath are text for the same reason.
 */
export function DestinationGrid({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const { destinations } = content;

  return (
    <Section
      id={destinations.id}
      eyebrow={destinations.eyebrow}
      heading={destinations.heading}
      lead={destinations.lead}
      tone="sunken"
      size="wide"
    >
      <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.cards.map((card) => (
          <li key={card.id} id={card.id} className="scroll-mt-28">
            {card.page ? (
              <Link
                href={pathFor(card.page, locale)}
                className="group block rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {card.photo ? (
                  <Photo
                    photo={photo(card.photo)}
                    locale={locale}
                    aspect="aspect-[4/5]"
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 92vw"
                  />
                ) : null}
                <h3 className="mt-4 type-h3 text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent">
                  {card.name}
                </h3>
                <p className="mt-2 type-small text-muted-foreground">
                  {card.blurb}
                </p>
              </Link>
            ) : (
              <>
                {card.photo ? (
                  <Photo
                    photo={photo(card.photo)}
                    locale={locale}
                    aspect="aspect-[4/5]"
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 92vw"
                  />
                ) : null}
                <h3 className="mt-4 type-h3 text-foreground">{card.name}</h3>
                <p className="mt-2 type-small text-muted-foreground">
                  {card.blurb}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-border pt-6">
        <h3 className="type-label text-accent-ink">
          {destinations.alsoHeading}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {destinations.also.map((place) => (
            <li key={place} className="type-small text-muted-foreground">
              {place}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[70ch] type-small text-muted-foreground">
          {destinations.note}
        </p>
      </div>

    </Section>
  );
}
