import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { RouteName } from "@/components/sicily/airport-shared";
import { AllAboard } from "@/components/sicily/port-shared";
import { cataniaPortPage } from "@/content/sicily";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Catania cruise port.
 *
 * -- The device: a fan of choices ------------------------------------------
 * The whole page is about picking one of several days, so the shore section
 * is a grid of equal, top-ruled cards -- no ordering and no ranking, the
 * options standing side by side. The meeting steps use the same card unit.
 *
 * It deliberately echoes the Catania AIRPORT page's grid rather than the
 * Catania town page's dark vertical axis, because the two Catania arrival
 * points pose the same question: one point of entry, several directions.
 *
 * -- Palette, scoped -------------------------------------------------------
 * Lighter than the town page's basalt but carrying the same lava accent, so
 * the family resemblance holds without repeating the page.
 *
 * -- No photographs --------------------------------------------------------
 * None licensed. This port also has no encyclopedic entry at all; see the
 * content file for what that means for the claims the page makes.
 */

const theme = {
  "--cp-page": "#f7f5f1",
  "--cp-page-deep": "#ece8e1",
  "--cp-deepsea": "#232523",
  "--cp-sea": "#3b4a46",
  "--cp-accent": "#9d4a21",
  "--cp-ink": "#262320",
  "--cp-muted": "#4e4a45",
  "--cp-rule": "#d8d2c7",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--cp-accent)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--cp-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function CataniaPortPageView({ locale }: { locale: Locale }) {
  const c = cataniaPortPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={theme}>
      <header style={{ background: "var(--cp-deepsea)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="catania-cruise-port" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "#e09a6e" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[22ch] font-heading type-h1" style={{ color: "#f6f4f0" }}>
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "#c9c7c1" }}>
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
            style={{ borderColor: "#454a46" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "#aaaaa4" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "#f6f4f0" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--cp-page)" }}>
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.identity.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.identity.paragraphs.map((x) => (
                <p key={x.slice(0, 24)} className="type-body" style={{ color: "var(--cp-muted)" }}>
                  {x}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--cp-rule)", background: "var(--cp-page-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "At the quayside" : "In banchina"}>{c.meeting.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--cp-muted)" }}>
              {c.meeting.lead}
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {c.meeting.steps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--cp-rule)", background: "var(--cp-page)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--cp-ink)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--cp-muted)" }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--cp-accent)", color: "var(--cp-ink)" }}
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
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--cp-muted)" }}>
              {c.shore.lead}
            </p>

            <AllAboard
              heading={
                en
                  ? "The all-aboard time decides the day"
                  : "L'orario di rientro a bordo decide la giornata"
              }
              background="var(--cp-page-deep)"
              headingColor="var(--cp-ink)"
              bodyColor="var(--cp-muted)"
              accent="var(--cp-accent)"
            >
              {c.shore.allAboard}
            </AllAboard>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.shore.options.map((o) => (
                <li
                  key={o.id ?? o.name}
                  className="rounded-xl border-x border-b border-t-4 p-6"
                  style={{
                    borderTopColor: "var(--cp-accent)",
                    borderLeftColor: "var(--cp-rule)",
                    borderRightColor: "var(--cp-rule)",
                    borderBottomColor: "var(--cp-rule)",
                    background: "var(--cp-page-deep)",
                  }}
                >
                  <h3 className="font-heading type-h3">
                    <RouteName route={o} locale={locale} color="var(--cp-ink)" />
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--cp-muted)" }}>
                    {o.note}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="mt-8 max-w-[72ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--cp-sea)", color: "var(--cp-muted)" }}
            >
              {c.shore.footnote}
            </p>
          </Container>
        </section>

        {c.airports ? (
          <section
            className="border-y py-14 sm:py-18"
            style={{ borderColor: "var(--cp-rule)", background: "var(--cp-page-deep)" }}
          >
            <Container size="content">
              <Heading>{c.airports.heading}</Heading>
              <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--cp-muted)" }}>
                {c.airports.lead}
              </p>
              <ul className="mt-8 space-y-4">
                {c.airports.items.map((a) => (
                  <li
                    key={a.id ?? a.name}
                    className="rounded-xl border p-6"
                    style={{ borderColor: "var(--cp-rule)", background: "var(--cp-page)" }}
                  >
                    <h3 className="font-heading type-h3">
                      <RouteName route={a} locale={locale} color="var(--cp-ink)" />
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--cp-muted)" }}>
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
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--cp-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--cp-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--cp-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--cp-rule)", background: "var(--cp-page-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--cp-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--cp-muted)" }}>
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
              style={{ background: "var(--cp-deepsea)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f6f4f0" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#c9c7c1" }}>
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
