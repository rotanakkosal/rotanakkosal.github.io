import type { ReactNode } from "react";

/**
 * A titled block in the editorial style: mono index number, serif heading,
 * and a hairline rule running out to the right margin.
 */
export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="reveal scroll-mt-24">
      <div className="mb-6 flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent-fg">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="text-[1.75rem] sm:text-3xl">{title}</h2>
        <span
          aria-hidden
          className="h-px flex-1 self-center bg-border-default"
        />
      </div>
      {children}
    </section>
  );
}
