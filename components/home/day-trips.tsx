import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/lib/site";
import { photo } from "@/content/photos";

/**
 * Days out and event travel. Two photographs side by side rather than one
 * large plate, because the section covers two different kinds of day — a
 * garden outside Rome and a business quarter in Milan — and one image would
 * quietly argue that it only covers whichever it showed.
 */
export function DayTrips({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const { dayTrips } = content;

  return (
    <Section
      id={dayTrips.id}
      eyebrow={dayTrips.eyebrow}
      heading={dayTrips.heading}
      lead={dayTrips.lead}
      tone="sunken"
      size="wide"
    >
      <div className="mt-12 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-start">
        <div>
          {dayTrips.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-0 mb-5 max-w-[60ch] type-body text-muted-foreground last:mb-0"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-8 max-w-[64ch] border-l-2 border-accent pl-5 type-small text-muted-foreground">
            {dayTrips.note}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {dayTrips.photos.map((slug) => (
            <Photo
              key={slug}
              photo={photo(slug)}
              locale={locale}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 17rem, (min-width: 640px) 45vw, 92vw"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
