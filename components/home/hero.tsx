import type { HomeContent } from "@/content/home";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { Photo } from "@/components/site/photo";
import { photo } from "@/content/photos";
import type { Locale } from "@/lib/site";
import { quotePathFor } from "@/lib/site";

/**
 * The first screen.
 *
 * A photograph of the country rather than a gradient, the one h1 on the page,
 * one sentence that says what can be asked for, and two actions. The caveat
 * sits inside the hero rather than in the small print at the bottom, because
 * it is the kind of thing a visitor should read before, not after, forming an
 * expectation.
 *
 * The photograph is the page's largest contentful paint, so it is the only
 * eagerly loaded image on the site.
 */
export function Hero({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden bg-deep text-deep-foreground">
      <Container size="wide" className="relative py-14 sm:py-18 lg:py-24">
        <div className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
          <div>
            <p className="flex items-center gap-3 type-label text-accent-glow">
              <span aria-hidden="true" className="h-px w-8 bg-accent-glow/70" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 max-w-[16ch] type-display text-deep-foreground">
              {hero.h1}
            </h1>

            <p className="mt-6 max-w-[58ch] type-lead text-deep-muted">
              {hero.lead}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta href={quotePathFor(locale)} size="lg">
                {hero.primaryCta}
              </Cta>
              <Cta href={`#${content.destinations.id}`} variant="onDeep" size="lg">
                {hero.secondaryCta}
              </Cta>
            </div>

            <p className="mt-9 max-w-[62ch] border-t border-deep-line pt-5 type-small text-deep-muted">
              {hero.caveat}
            </p>
          </div>

          <Photo
            photo={photo(hero.photo)}
            locale={locale}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 30rem, 92vw"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
