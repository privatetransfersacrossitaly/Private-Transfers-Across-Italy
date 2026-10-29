import type { HomeContent } from "@/content/home";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";

/**
 * The closing call to action, and the destination every "Request a quote" on
 * the site points at today.
 *
 * It is honest about what it is: the quotation form is a later phase, so this
 * section tells the visitor what to have ready rather than pretending to
 * accept a submission. The note saying so is part of the section, not hidden
 * in a footer.
 */
export function FinalCta({
  content,
}: {
  content: HomeContent;
}) {
  const { finalCta, prepare } = content;

  return (
    <section
      id={finalCta.id}
      aria-labelledby={`${finalCta.id}-heading`}
      className="bg-deep py-16 text-deep-foreground sm:py-20 lg:py-24"
    >
      <Container size="wide">
        <div className="grid items-start gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
          <div>
            <p className="flex items-center gap-3 type-label text-accent-glow">
              <span aria-hidden="true" className="h-px w-8 bg-accent-glow/70" />
              {finalCta.eyebrow}
            </p>
            <h2
              id={`${finalCta.id}-heading`}
              className="mt-5 max-w-[20ch] type-h1 text-deep-foreground"
            >
              {finalCta.heading}
            </h2>
            <p className="mt-5 max-w-[60ch] type-lead text-deep-muted">
              {finalCta.body}
            </p>
          </div>

          <div className="lg:pt-4">
            {/* No button back to this section: every "Request a quote" on
                the site already lands here, and a primary action that links
                to its own anchor is a button that does nothing. Until the
                quotation form exists, the useful next step is the list of
                what to have ready. */}
            <Cta href={`#${prepare.id}`} variant="onDeep" size="lg" className="w-full">
              {finalCta.secondaryCta}
            </Cta>
            <p className="mt-8 border-t border-deep-line pt-5 type-caption text-deep-muted">
              {finalCta.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
