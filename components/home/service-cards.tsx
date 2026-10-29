import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/lib/site";
import { photo } from "@/content/photos";

/**
 * The eight kinds of request, as an editorial run rather than a card grid.
 *
 * The first two are given room and a photograph each; the rest follow in a
 * tighter two-column rhythm with smaller images. That mix is deliberate — a
 * uniform three-up grid of identical tiles is what makes directory sites look
 * like directory sites, and it flattens the difference between a category
 * someone arrives looking for and one they discover.
 *
 * Every card carries its own id, so the navigation can link straight to it.
 */
export function ServiceCards({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const { services } = content;
  const [first, second, ...rest] = services.cards;

  return (
    <Section
      id={services.id}
      eyebrow={services.eyebrow}
      heading={services.heading}
      lead={services.lead}
      size="wide"
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {[first, second].map((card) => (
          <article key={card.id} id={card.id} className="scroll-mt-28">
            {card.photo ? (

              <Photo
                photo={photo(card.photo)}
              locale={locale}
              aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 34rem, 92vw"
                />
            ) : null}
            <h3 className="mt-5 type-h3 text-foreground">{card.title}</h3>
            <p className="mt-3 max-w-[54ch] type-body text-muted-foreground">
              {card.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((card) => (
          <article
            key={card.id}
            id={card.id}
            className="scroll-mt-28 border-t border-border pt-6"
          >
            {card.photo ? (

              <Photo
                photo={photo(card.photo)}
              locale={locale}
              aspect="aspect-[3/2]"
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
                />
            ) : null}
            <h3 className="mt-4 type-h3 text-foreground">{card.title}</h3>
            <p className="mt-2.5 type-small text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
