import { cn } from "cn";

/**
 * The comuni of a valley, each keyed to the station nearest it.
 *
 * ── Why this is not `TownIndex` ───────────────────────────────────────────
 * The Veneto's `TownIndex` keys a town to the arm of Lake Como it sits on,
 * because on that lake the branch decides the road entirely. The organising
 * fact here is a different one, and it is an absence: no railway reaches the
 * Val d'Orcia, so each comune is keyed to the station someone would otherwise
 * have to arrive at and travel on from.
 *
 * That difference is structural rather than cosmetic, which is why the
 * rendering differs too. `TownIndex` sets its key as a label under the name;
 * this one gives the station its own column with its own term, because the
 * reader is meant to compare the column down the page and notice that no two
 * entries point at the same place — and that none of them points here.
 */
export function ComuneIndex({
  stationLabel,
  comuni,
  className,
}: {
  /** The term above the station column, e.g. "Nearest station". */
  stationLabel: string;
  comuni: { id: string; name: string; station: string; detail: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("border-t border-border", className)}>
      {comuni.map((comune) => (
        <li
          key={comune.id}
          id={comune.id}
          className="scroll-mt-28 border-b border-border py-6"
        >
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[minmax(0,14rem)_minmax(0,11rem)_minmax(0,1fr)]">
            <h3 className="font-heading type-h3 text-foreground">
              {comune.name}
            </h3>
            <div>
              <p className="type-label text-muted-foreground">{stationLabel}</p>
              <p className="mt-1.5 type-small text-accent-ink">
                {comune.station}
              </p>
            </div>
            <p className="max-w-[58ch] type-body text-muted-foreground">
              {comune.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
