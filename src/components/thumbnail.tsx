import Image from "next/image";

/**
 * Fixed-size figure for publication and project entries. Falls back to a
 * neutral placeholder block when no image path is set, so the layout stays
 * stable while you are still filling content in.
 */
export function Thumbnail({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div
        aria-hidden
        className="flex h-[88px] w-[152px] shrink-0 items-center justify-center rounded-md border border-border-default bg-canvas-subtle text-xs text-fg-subtle"
      >
        no image
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={152}
      height={88}
      className="h-[88px] w-[152px] shrink-0 rounded-md border border-border-default bg-canvas-subtle object-cover"
    />
  );
}
