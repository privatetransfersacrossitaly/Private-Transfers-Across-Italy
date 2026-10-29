/**
 * Renders a JSON-LD graph into the page.
 *
 * `JSON.stringify` output is escaped so a `<` inside any string cannot close
 * the script element early.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
