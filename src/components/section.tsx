import type { ReactNode } from "react";

/**
 * A titled block with GitHub's underlined h2 rule, mirroring the horizontal
 * dividers that separate sections on the reference layout.
 */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="mb-4 border-b border-border-default pb-2">{title}</h2>
      {children}
    </section>
  );
}
