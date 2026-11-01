import { whatsappHref } from "@/lib/site";

/**
 * A floating WhatsApp button, on every public page in both languages.
 *
 * ── The number is never printed ───────────────────────────────────────────
 * The brief was that the telephone number must not appear on the site, so
 * nothing here renders it: the button is an icon with an accessible name,
 * and the name says "WhatsApp", not a number.
 *
 * It does, unavoidably, travel in the `href`. A wa.me link *is* the number —
 * `https://wa.me/<digits>` is the whole addressing scheme — so the value is
 * present in the page source, shows in a desktop browser's status bar on
 * hover, and appears in the address bar once the link is followed. There is
 * no version of a WhatsApp deep link that avoids this. Keeping it out of the
 * markup altogether would mean giving up the deep link and sending people
 * through a redirect on our own domain instead, which is a different piece
 * of work. See the note on `whatsappNumber` in `lib/site.ts`.
 *
 * ── Why it is a server component ──────────────────────────────────────────
 * It has no state and no path dependency — unlike the sticky quote button,
 * which has to hide itself on the quotation page. WhatsApp is a separate
 * channel from the quote form, so there is no page it needs to disappear on,
 * and it therefore ships no JavaScript.
 *
 * ── Why the offsets are what they are ─────────────────────────────────────
 * Below `md` the sticky quote button occupies the full width of the bottom
 * strip, so this one is lifted clear of it — `bottom-24` rather than
 * `bottom-6` — and the safe-area inset is added so it clears the home
 * indicator on a phone. From `md` the sticky button is hidden and this drops
 * back down to the corner.
 *
 * The icon is inline SVG rather than an image: one fewer request, it
 * inherits `currentColor`, and it cannot 404.
 */
export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed right-4 bottom-[calc(6rem+env(safe-area-inset-bottom))] z-40 inline-flex size-13 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-foreground/25 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:right-6 md:bottom-6"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        className="size-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.688 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
      </svg>
    </a>
  );
}
