import type { ReactNode } from "react";

/**
 * The all-aboard panel.
 *
 * Every cruise port page carries this, and it is the only part of the three
 * that is genuinely shared markup rather than shared behaviour. The reason
 * is editorial: the all-aboard time is the one fact a page about a cruise
 * call exists to communicate, and it should not be a paragraph that happens
 * to sit in a different place on each page. It is a panel, it looks the
 * same, and a reader who has seen one recognises it at the next port.
 *
 * Everything else about the three pages differs — Palermo is a quay-to-city
 * flow, Catania a fan of three choices, Messina a there-and-back axis.
 *
 * Colours come in as props because each page owns its palette.
 */
export function AllAboard({
  heading,
  children,
  background,
  headingColor,
  bodyColor,
  accent,
}: {
  heading: string;
  children: ReactNode;
  background: string;
  headingColor: string;
  bodyColor: string;
  accent: string;
}) {
  return (
    <aside
      className="mt-8 max-w-[72ch] rounded-xl border-l-4 p-6 sm:p-7"
      style={{ background, borderLeftColor: accent }}
    >
      <h3 className="font-heading type-h3" style={{ color: headingColor }}>
        {heading}
      </h3>
      <p className="mt-3 type-body" style={{ color: bodyColor }}>
        {children}
      </p>
    </aside>
  );
}
