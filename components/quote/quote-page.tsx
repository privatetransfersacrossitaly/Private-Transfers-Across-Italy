import { Band } from "@/components/site/band";
import { Checklist, Eyebrow } from "@/components/site/blocks";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { QuoteForm } from "@/components/quote/quote-form";
import { quote } from "@/content/quote";
import type { Locale } from "@/lib/site";

/**
 * Get a Quote.
 *
 * ── Why this page has no hero component ───────────────────────────────────
 * Every hero in `heroes.tsx` ends in a call to action, and the call to
 * action on this page is the page. Putting a button above a form that the
 * button would scroll to is noise. So the opening is a plain heading, a
 * lead, and three short lines about what the form does — then the form,
 * immediately, with nothing decorative between the two.
 *
 * ── The aside, and why it is beside rather than below ─────────────────────
 * "What happens next" answers the question a visitor has *while* filling the
 * form in, not after. On a wide screen it sits in a sticky column alongside;
 * below the large breakpoint it drops under the opening and above the form,
 * which is the same reading order a screen reader gets.
 */
export function QuotePage({ locale }: { locale: Locale }) {
  const c = quote[locale];

  return (
    <>
      <header className="border-b border-border bg-surface-sunken">
        <Container size="content" className="py-10 sm:py-14">
          <Breadcrumbs id="quote" locale={locale} label={c.breadcrumbLabel} />
          <div className="mt-9 max-w-[58ch]">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 type-h1 text-foreground">{c.hero.h1}</h1>
            <p className="mt-6 type-lead text-muted-foreground">{c.hero.lead}</p>
          </div>
          <Checklist items={c.hero.assurances} className="mt-8 max-w-[62ch]" />
        </Container>
      </header>

      <Band spacing="normal" size="wide">
        {/* The form keeps the wider track: addresses and email are the long
            values on this page, and squeezing them to make room for an aside
            would be the wrong trade. The gap is narrower than it was, which
            is what stopped the two columns reading as unrelated. */}
        <div className="grid gap-x-10 gap-y-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] xl:items-start xl:gap-x-14">
          {/* No `order-*` here on purpose.

              This used to carry `order-last`, which put "What happens next"
              above the form on every screen narrower than the two-column
              breakpoint. On a phone that meant the hero, then a long aside,
              and the first field only after two screens of scrolling — on a
              page whose entire job is the form. DOM order is form first, so
              removing the override is the fix, and the aside now reads as
              the footnote it is. */}
          <div>
            <QuoteForm content={c} locale={locale} />
          </div>

          {/* The two columns start at `xl`, not `lg`. At 1024 the split left
              the form 585px wide, which squeezed the address fields and
              pushed the passenger counts under a comfortable width; a
              full-width form with the aside beneath it is better at that
              size. `top-28` clears the sticky header. */}
          <aside className="xl:sticky xl:top-28">
            <div className="rounded-lg border border-border-strong bg-surface p-6 sm:p-7">
              <h2 className="font-heading type-h3 text-foreground">
                {c.aside.heading}
              </h2>
              {/* Stacked rather than `DefinitionList`, which lays its term and
                  detail side by side on a 14rem track. That is right in a
                  full-width band and wrong in a 21rem column, where it leaves
                  the detail nowhere to wrap and pushes the page sideways. */}
              <dl className="mt-6 divide-y divide-border">
                {c.aside.items.map((item) => (
                  <div key={item.term} className="py-4 first:pt-0 last:pb-0">
                    <dt className="font-heading type-h3 text-foreground">
                      {item.term}
                    </dt>
                    <dd className="mt-1.5 type-small text-muted-foreground">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-border pt-5 type-caption text-muted-foreground">
                {c.aside.note}
              </p>
            </div>
          </aside>
        </div>
      </Band>
    </>
  );
}
