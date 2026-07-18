import Image from "next/image";

/**
 * Fixed-size figure for publication and project entries. When no image path is
 * set it falls back to a typographic placeholder (e.g. the publication year in
 * the display serif) so the layout stays stable while content is filled in.
 */
export function Thumbnail({
  src,
  alt,
  fallback,
}: {
  src?: string;
  alt: string;
  fallback?: string;
}) {
  if (!src) {
    return (
      <div
        aria-hidden
        className="flex h-[88px] w-[132px] shrink-0 items-center justify-center rounded-lg border border-border-default bg-canvas-subtle sm:w-[152px]"
      >
        <span className="font-display text-2xl italic text-fg-subtle">
          {fallback ?? "—"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={152}
      height={88}
      className="h-[88px] w-[132px] shrink-0 rounded-lg border border-border-default bg-canvas-subtle object-cover sm:w-[152px]"
    />
  );
}
