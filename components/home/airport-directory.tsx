import Link from "next/link";
import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";
import { pathFor } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * The airport list, grouped by the part of the country each group serves.
 *
 * A description list rather than a table: there are only two facts per
 * airport, and a table of twenty rows is a worse thing to read on a phone
 * than five short groups. Codes sit alongside the names in tabular figures so
 * they line up down the column.
 *
 * The note under the list is doing real work. Listing an airport is not a
 * claim that a car is available at it, and that distinction is the one most
 * easily lost on a page like this.
 *
 * An airport name becomes a link only where that airport has a page. Today
 * that is Fiumicino and Ciampino; the rest are text until their clusters are
 * built.
 */
export function AirportDirectory({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const { airports } = content;

  return (
    <Section
      id={airports.id}
      eyebrow={airports.eyebrow}
      heading={airports.heading}
      lead={airports.lead}
      size="wide"
    >
      <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:items-start">
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {airports.groups.map((group) => (
            <section key={group.id} aria-labelledby={`${group.id}-heading`}>
              <h3
                id={`${group.id}-heading`}
                className="border-b border-border pb-2 type-label text-accent-ink"
              >
                {group.region}
              </h3>
              <dl className="mt-3">
                {group.airports.map((airport) => (
                  <div key={airport.code} className="py-2.5">
                    <dt className="flex items-baseline gap-3">
                      {airport.page ? (
                        <Link
                          href={pathFor(airport.page, locale)}
                          className="type-small font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        >
                          {airport.name}
                        </Link>
                      ) : (
                        <span className="type-small font-medium text-foreground">
                          {airport.name}
                        </span>
                      )}
                      <span className="ml-auto font-heading type-caption tracking-[0.18em] text-accent-ink tabular-nums">
                        {airport.code}
                      </span>
                    </dt>
                    <dd className="mt-1 type-caption text-muted-foreground">
                      {airport.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <aside className="rounded-lg bg-accent-wash p-6">
          <h3 className="type-label text-accent-ink">
            {airports.checklistHeading}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {airports.checklist.map((item) => (
              <li
                key={item}
                className="flex gap-3 type-small text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <p className="mt-10 max-w-[74ch] border-l-2 border-accent pl-5 type-small text-muted-foreground">
        {airports.note}
      </p>
    </Section>
  );
}
