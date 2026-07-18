import { Fragment } from "react";
import { Thumbnail } from "@/components/thumbnail";
import {
  publicationCategoryOrder,
  publications,
  type Publication,
} from "@/data/profile";

/** Renders `**Your Name**` segments in bold so you stand out in the byline. */
function Authors({ value }: { value: string }) {
  return (
    <>
      {value.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
        chunk.startsWith("**") && chunk.endsWith("**") ? (
          <strong key={i} className="font-semibold text-fg-default">
            {chunk.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{chunk}</Fragment>
        ),
      )}
    </>
  );
}

function Entry({ pub }: { pub: Publication }) {
  return (
    <li className="group flex flex-col gap-4 rounded-xl border border-border-default bg-card-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-fg/50 hover:shadow-[0_16px_40px_-24px_rgba(32,29,23,0.4)] sm:flex-row sm:gap-5 sm:p-5">
      <Thumbnail src={pub.thumbnail} alt={pub.title} fallback={pub.year} />
      <div className="min-w-0">
        <p className="font-semibold leading-snug text-fg-default">{pub.title}</p>
        <p className="mt-1.5 text-sm text-fg-muted">
          <Authors value={pub.authors} />
        </p>
        <p className="mt-1 text-sm italic text-fg-muted">
          {pub.venue}, {pub.year}
        </p>
        {pub.links?.length ? (
          <p className="mt-2 flex flex-wrap gap-x-3 font-mono text-sm">
            {pub.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                [{link.label}]
              </a>
            ))}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export function PublicationList() {
  // Keep the author's preferred category order, then append any stragglers so
  // a new category never silently disappears from the page.
  const present = publicationCategoryOrder.filter((c) =>
    publications.some((p) => p.category === c),
  );
  const extra = [...new Set(publications.map((p) => p.category))].filter(
    (c) => !publicationCategoryOrder.includes(c),
  );

  return (
    <div className="space-y-8">
      {[...present, ...extra].map((category) => (
        <div key={category}>
          <h3 className="mb-3 font-mono text-xs font-normal uppercase tracking-[0.2em] text-fg-subtle">
            {category}
          </h3>
          <ul className="space-y-4">
            {publications
              .filter((p) => p.category === category)
              .map((pub) => (
                <Entry key={pub.title} pub={pub} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
