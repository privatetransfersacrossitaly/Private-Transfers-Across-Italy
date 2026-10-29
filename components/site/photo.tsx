import Image from "next/image";
import { cn } from "cn";
import type { SitePhoto } from "@/content/photos";
import type { Locale } from "@/lib/site";

/**
 * A photograph.
 *
 * No visible source caption. Every photograph used on this site is licensed
 * in a way that permits presentation without a credit line, which is what
 * makes a clean presentation lawful rather than merely tidy — the licence,
 * the source and the creator are recorded in `content/photos.ts`, which is
 * internal documentation and is never rendered.
 *
 * A caption is only ever shown when it says something useful about the place
 * in the picture. It is not a mechanism for disclosing where a file came
 * from, and alt text is not either: alt describes what is visible, for
 * someone who cannot see it.
 *
 * Sizing is explicit — intrinsic dimensions inside an aspect-ratio box — so
 * the space is reserved before the file arrives and nothing moves when it
 * does. `priority` belongs to the one image above the fold.
 */
export function Photo({
  photo,
  locale,
  aspect = "aspect-[16/9]",
  sizes = "100vw",
  priority = false,
  className,
  rounded = true,
  caption,
}: {
  photo: SitePhoto;
  locale: Locale;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
  /** Only for genuine information about the subject. */
  caption?: string;
}) {
  const frame = (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-surface-sunken",
        aspect,
        rounded && "rounded-lg",
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt[locale]}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-full w-full object-cover"
      />
    </div>
  );

  if (!caption) return <div className={className}>{frame}</div>;

  return (
    <figure className={className}>
      {frame}
      <figcaption className="mt-2 type-caption text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
