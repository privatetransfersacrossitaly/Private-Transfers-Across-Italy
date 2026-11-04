import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { RouteName } from "@/components/sicily/airport-shared";
import { AllAboard } from "@/components/sicily/port-shared";
import { messinaPortPage } from "@/content/sicily";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Messina cruise port.
 *
 * -- The device: there and back --------------------------------------------
 * Every job from this quay is a round trip against a deadline, so the page
 * is narrow and linear and marks each shore option with a return arrow.
 * There is no grid anywhere: a fan of equal choices would misrepresent a
 * call where the honest advice is to pick one thing and leave margin.
 *
 * -- Palette, scoped -------------------------------------------------------
 * Strait blue-grey with a signal accent, on this wrapper only.
 *
 * -- No photographs --------------------------------------------------------
 * No licensed image of this quayside exists.
 */

const theme = {
  "--mp-page": "#f5f6f5",
  "--mp-page-deep": "#e8eae9",
  "--mp-deepsea": "#1f3540",
  "--mp-sea": "#2c4d5a",
  "--mp-accent": "#97401f",
  "--mp-ink": "#242726",
  "--mp-muted": "#4b4f4e",
  "--mp-rule": "#d0d4d2",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--mp-accent)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--mp-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function MessinaPortPageView({ locale }: { locale: Locale }) {
  const c = messinaPortPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={theme}>
      <header style={{ background: "var(--mp-deepsea)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="messina-cruise-port" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "#e0a07a" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[22ch] font-heading type-h1" style={{ color: "#f2f5f5" }}>
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "#c2ced2" }}>
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#shore" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "#3c5663" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "#a6b4b8" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "#f2f5f5" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--mp-page)" }}>
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.identity.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.identity.paragraphs.map((x) => (
                <p key={x.slice(0, 24)} className="type-body" style={{ color: "var(--mp-muted)" }}>
                  {x}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--mp-rule)", background: "var(--mp-page-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "At the quayside" : "In banchina"}>{c.meeting.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mp-muted)" }}>
              {c.meeting.lead}
            </p>
            <ol className="mt-9 max-w-[72ch]">
              {c.meeting.steps.map((s) => (
                <li key={s.title} className="border-t py-5" style={{ borderColor: "var(--mp-rule)" }}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--mp-ink)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--mp-muted)" }}>
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--mp-accent)", color: "var(--mp-ink)" }}
            >
              {c.meeting.note}
            </p>
          </Container>
        </section>

        {/* The all-aboard panel comes before the destinations, because it
            is the constraint they are chosen under rather than a caveat
            appended after them. */}
        <section id="shore" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <Heading eyebrow={en ? "Hours ashore" : "Ore a terra"}>{c.shore.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mp-muted)" }}>
              {c.shore.lead}
            </p>

            <AllAboard
              heading={
                en
                  ? "The all-aboard time decides the day"
                  : "L'orario di rientro a bordo decide la giornata"
              }
              background="var(--mp-page-deep)"
              headingColor="var(--mp-ink)"
              bodyColor="var(--mp-muted)"
              accent="var(--mp-accent)"
            >
              {c.shore.allAboard}
            </AllAboard>

            <ul className="mt-10 max-w-[72ch]">
              {c.shore.options.map((o) => (
                <li
                  key={o.id ?? o.name}
                  className="flex gap-5 border-t py-5"
                  style={{ borderColor: "var(--mp-rule)" }}
                >
                  {/* There and back: the shape of every job from this quay. */}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 type-small"
                    style={{ color: "var(--mp-accent)" }}
                  >
                    &#8646;
                  </span>
                  <div>
                    <h3 className="font-heading type-h3">
                      <RouteName route={o} locale={locale} color="var(--mp-ink)" />
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--mp-muted)" }}>
                      {o.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p
              className="mt-8 max-w-[72ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--mp-sea)", color: "var(--mp-muted)" }}
            >
              {c.shore.footnote}
            </p>
          </Container>
        </section>

        {c.airports ? (
          <section
            className="border-y py-14 sm:py-18"
            style={{ borderColor: "var(--mp-rule)", background: "var(--mp-page-deep)" }}
          >
            <Container size="content">
              <Heading>{c.airports.heading}</Heading>
              <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mp-muted)" }}>
                {c.airports.lead}
              </p>
              <ul className="mt-8 space-y-4">
                {c.airports.items.map((a) => (
                  <li
                    key={a.id ?? a.name}
                    className="rounded-xl border p-6"
                    style={{ borderColor: "var(--mp-rule)", background: "var(--mp-page)" }}
                  >
                    <h3 className="font-heading type-h3">
                      <RouteName route={a} locale={locale} color="var(--mp-ink)" />
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--mp-muted)" }}>
                      {a.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mp-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--mp-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--mp-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--mp-rule)", background: "var(--mp-page-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--mp-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--mp-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--mp-deepsea)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f2f5f5" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#c2ced2" }}>
                {c.close.body}
              </p>
              <Cta href={quoteHref} className="mt-8">
                {c.close.cta}
              </Cta>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
