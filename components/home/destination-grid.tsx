import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";
import { pathFor } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import { photo } from "@/content/photos";

/**
 * What stands where a photograph would, when there is no photograph.
 *
 * Puglia has no licensed image in the library yet, and a generic landscape
 * printed under a region's name is the one thing this project has refused
 * throughout the cluster. An empty cell would have made the newest and
 * largest destination look like an afterthought, so the tile carries a
 * typographic plate instead — the same device the airport pages use with
 * their IATA codes. It is decorative: the heading beneath it already names
 * the place, so this is hidden from assistive technology rather than read
 * out twice.
 */
function Plate({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/5] items-end rounded-md border border-border bg-accent-wash p-5"
    >
      <span className="font-heading text-accent-ink type-h2">{label}</span>
    </div>
  );
}

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
 * A card with no photograph gets a typographic plate instead of an empty
 * cell, so a destination without licensed imagery still reads as finished.
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
                ) : (
                  <Plate label={card.plate ?? card.name} />
                )}
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
                ) : (
                  <Plate label={card.plate ?? card.name} />
                )}
                <h3 className="mt-4 type-h3 text-foreground">{card.name}</h3>
                <p className="mt-2 type-small text-muted-foreground">
                  {card.blurb}
                </p>
              </>
            )}

            {/* Deliberately a sibling of the tile link rather than a child:
                nesting an anchor inside an anchor is invalid, and the two
                destinations here are genuinely separate places to go. */}
            {card.links?.length ? (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {card.links.map((link) => (
                  <li key={link.page}>
                    <Link
                      href={pathFor(link.page, locale)}
                      className="type-small text-accent-ink underline decoration-1 underline-offset-4 hover:no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
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
