import type { AirportTheme } from "@/components/puglia/airport-page";

/**
 * The two airports' palettes.
 *
 * Both pages share a spine (see `airport-page.tsx`); these are what tell
 * them apart at a glance, along with the IATA code set large in each hero.
 *
 * They are deliberately drawn from the same families as the matching town
 * pages — Bari cold Adriatic navy, Brindisi warmer Ionian teal — so that a
 * visitor moving between the airport page and the town page feels the same
 * place, while the two airports never feel like one another.
 *
 * Every value is a scoped custom property set on the page wrapper. Nothing
 * is added to the global theme, and the site's own accent and focus ring
 * are untouched.
 *
 * Contrast is checked in the airport QA script rather than asserted here.
 */

/** Bari: deep Adriatic harbour navy with a warm terracotta accent. */
export const bariAirportTheme: AirportTheme = {
  code: "BRI",
  vars: {
    "--ap-deep": "#13303f",
    "--ap-deep-rule": "#2b4e60",
    "--ap-on-deep": "#f7f4ee",
    "--ap-on-deep-soft": "#cfdbe2",
    "--ap-on-deep-muted": "#9ab3bf",
    "--ap-page": "#f6f4ef",
    "--ap-page-deep": "#eae6dd",
    "--ap-accent": "#c87a5c",
    "--ap-accent-deep": "#9c4a2f",
    "--ap-ink": "#21262a",
    "--ap-muted": "#4a5259",
    "--ap-rule": "#d6d0c4",
  } as React.CSSProperties,
};

/** Brindisi: Ionian teal, lighter and cooler, with a sandstone accent. */
export const brindisiAirportTheme: AirportTheme = {
  code: "BDS",
  vars: {
    "--ap-deep": "#15454a",
    "--ap-deep-rule": "#2d6066",
    "--ap-on-deep": "#f3f8f7",
    "--ap-on-deep-soft": "#cbdedc",
    "--ap-on-deep-muted": "#93b5b2",
    "--ap-page": "#f8f7f2",
    "--ap-page-deep": "#ecebe2",
    "--ap-accent": "#c79a56",
    "--ap-accent-deep": "#8a6322",
    "--ap-ink": "#23262a",
    "--ap-muted": "#4c5358",
    "--ap-rule": "#d8d4c6",
  } as React.CSSProperties,
};
