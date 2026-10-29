import { AirportDirectory } from "@/components/home/airport-directory";
import { DayTrips } from "@/components/home/day-trips";
import { DestinationGrid } from "@/components/home/destination-grid";
import { Faq } from "@/components/home/faq";
import { FeatureSplit } from "@/components/home/feature-split";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { PrepareList } from "@/components/home/prepare-list";
import { ServiceCards } from "@/components/home/service-cards";
import { Steps } from "@/components/home/steps";
import { homeContent } from "@/content/home";
import type { Locale } from "@/lib/site";

/**
 * The homepage, in whichever language it is asked for.
 *
 * One composition serves both routes: `/` and `/it`. The sections are server
 * components and take their copy as a prop, so there is exactly one layout
 * and two content files rather than two parallel pages that can drift apart.
 */
export function HomePage({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <>
      <Hero content={content} locale={locale} />
      <ServiceCards content={content} locale={locale} />
      <DestinationGrid content={content} locale={locale} />
      <AirportDirectory content={content} locale={locale} />
      <FeatureSplit
        locale={locale}
        id={content.intercity.id}
        eyebrow={content.intercity.eyebrow}
        heading={content.intercity.heading}
        lead={content.intercity.lead}
        paragraphs={content.intercity.paragraphs}
        photoSlug={content.intercity.photo}
        note={content.intercity.note}
        tone="sunken"
      />
      <FeatureSplit
        locale={locale}
        id={content.cruise.id}
        eyebrow={content.cruise.eyebrow}
        heading={content.cruise.heading}
        lead={content.cruise.lead}
        paragraphs={content.cruise.paragraphs}
        photoSlug={content.cruise.photo}
        link={content.cruise.link}
        checklist={{
          heading: content.cruise.checklistHeading,
          items: content.cruise.checklist,
        }}
        reverse
      />
      <DayTrips content={content} locale={locale} />
      <Steps content={content} />
      <PrepareList content={content} />
      <Faq content={content} />
      <FinalCta content={content} />
    </>
  );
}
