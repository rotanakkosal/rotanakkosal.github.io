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
    <li className="flex gap-4">
      <Thumbnail src={pub.thumbnail} alt={pub.title} />
      <div className="min-w-0">
        <p className="font-semibold text-fg-default">{pub.title}</p>
        <p className="mt-0.5 text-sm text-fg-muted">
          <Authors value={pub.authors} />
        </p>
        <p className="mt-0.5 text-sm italic text-fg-muted">
          {pub.venue}, {pub.year}
        </p>
        {pub.links?.length ? (
          <p className="mt-1.5 flex flex-wrap gap-x-3 text-sm">
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
    <div className="space-y-6">
      {[...present, ...extra].map((category) => (
        <div key={category}>
          <h3 className="mb-3 text-base text-fg-muted">{category}</h3>
          <ul className="space-y-5">
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
