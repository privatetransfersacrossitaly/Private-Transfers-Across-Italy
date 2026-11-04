import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { RouteName } from "@/components/sicily/airport-shared";
import { AllAboard } from "@/components/sicily/port-shared";
import { palermoPortPage } from "@/content/sicily";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Palermo cruise port.
 *
 * -- The device: a flow from the quay --------------------------------------
 * A working port several kilometres long, so the page runs as a sequence:
 * numbered steps off the ship, then the hours ashore, then the airport. It
 * reads in the order the day actually happens.
 *
 * Distinct from its siblings: Catania's port page is a fan of equal choices
 * and Messina's is a there-and-back axis. This one is a line.
 *
 * -- Palette, scoped -------------------------------------------------------
 * Harbour slate and a rope-coloured accent, declared on this component's
 * wrapper only and never added to the global theme.
 *
 * -- No photographs --------------------------------------------------------
 * No licensed image of this quayside exists in the library.
 */

const theme = {
  "--pp-page": "#f6f5f0",
  "--pp-page-deep": "#eae8e0",
  "--pp-deepsea": "#1d3a46",
  "--pp-sea": "#2a5464",
  "--pp-accent": "#8a5520",
  "--pp-ink": "#252624",
  "--pp-muted": "#4c4f4c",
  "--pp-rule": "#d4d1c4",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--pp-accent)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--pp-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function PalermoPortPageView({ locale }: { locale: Locale }) {
  const c = palermoPortPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={theme}>
      <header style={{ background: "var(--pp-deepsea)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="palermo-cruise-port" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "#d9a86f" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[22ch] font-heading type-h1" style={{ color: "#f3f5f2" }}>
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "#c3cfd2" }}>
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
            style={{ borderColor: "#3b5a66" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "#a7b6ba" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "#f3f5f2" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--pp-page)" }}>
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.identity.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.identity.paragraphs.map((x) => (
                <p key={x.slice(0, 24)} className="type-body" style={{ color: "var(--pp-muted)" }}>
                  {x}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pp-rule)", background: "var(--pp-page-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "At the quayside" : "In banchina"}>{c.meeting.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pp-muted)" }}>
              {c.meeting.lead}
            </p>
            <ol className="mt-9">
              {c.meeting.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="grid gap-x-6 gap-y-1 border-t py-5 sm:grid-cols-[3rem_minmax(0,1fr)]"
                  style={{ borderColor: "var(--pp-rule)" }}
                >
                  <span
                    aria-hidden="true"
                    className="type-small font-medium tabular-nums"
                    style={{ color: "var(--pp-accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading type-h3" style={{ color: "var(--pp-ink)" }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-[66ch] type-small" style={{ color: "var(--pp-muted)" }}>
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--pp-accent)", color: "var(--pp-ink)" }}
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
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pp-muted)" }}>
              {c.shore.lead}
            </p>

            <AllAboard
              heading={
                en
                  ? "The all-aboard time decides the day"
                  : "L'orario di rientro a bordo decide la giornata"
              }
              background="var(--pp-page-deep)"
              headingColor="var(--pp-ink)"
              bodyColor="var(--pp-muted)"
              accent="var(--pp-accent)"
            >
              {c.shore.allAboard}
            </AllAboard>

            <ul className="mt-10 grid gap-5 lg:grid-cols-3">
              {c.shore.options.map((o) => (
                <li
                  key={o.id ?? o.name}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--pp-sea)" }}
                >
                  <h3 className="font-heading type-h3">
                    <RouteName route={o} locale={locale} color="var(--pp-ink)" />
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--pp-muted)" }}>
                    {o.note}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="mt-8 max-w-[72ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--pp-sea)", color: "var(--pp-muted)" }}
            >
              {c.shore.footnote}
            </p>
          </Container>
        </section>

        {c.airports ? (
          <section
            className="border-y py-14 sm:py-18"
            style={{ borderColor: "var(--pp-rule)", background: "var(--pp-page-deep)" }}
          >
            <Container size="content">
              <Heading>{c.airports.heading}</Heading>
              <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pp-muted)" }}>
                {c.airports.lead}
              </p>
              <ul className="mt-8 space-y-4">
                {c.airports.items.map((a) => (
                  <li
                    key={a.id ?? a.name}
                    className="rounded-xl border p-6"
                    style={{ borderColor: "var(--pp-rule)", background: "var(--pp-page)" }}
                  >
                    <h3 className="font-heading type-h3">
                      <RouteName route={a} locale={locale} color="var(--pp-ink)" />
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--pp-muted)" }}>
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
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pp-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--pp-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--pp-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pp-rule)", background: "var(--pp-page-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pp-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--pp-muted)" }}>
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
              style={{ background: "var(--pp-deepsea)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f3f5f2" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#c3cfd2" }}>
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
