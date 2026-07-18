"use client";

import Image from "next/image";
import { CoolMode } from "@/components/ui/cool-mode";
import { profile } from "@/data/profile";

/**
 * Asymmetric hero: kicker + oversized serif name + bio on the left, photo in
 * an offset accent frame on the right. Client-side because CoolMode attaches
 * pointer listeners — fine under `output: "export"`.
 */
export function ProfileHeader() {
  // Family name upright, given name in italic accent serif.
  const [familyName, ...givenParts] = profile.name.split(" ");
  const givenName = givenParts.join(" ");

  // Lift the first sentence of the bio out as a pull-quote line.
  const splitAt = profile.bio.indexOf(". ");
  const pullQuote = splitAt === -1 ? "" : profile.bio.slice(0, splitAt + 1);
  const bioRest = splitAt === -1 ? profile.bio : profile.bio.slice(splitAt + 2);

  return (
    <header id="top" className="grid items-center gap-10 sm:grid-cols-[1fr_auto]">
      <div>
        <p className="rise font-mono text-xs uppercase tracking-[0.25em] text-accent-fg">
          {profile.headline}
          {profile.affiliation ? ` · ${profile.affiliation}` : ""}
        </p>

        <h1 className="rise rise-1 mt-4 text-5xl sm:text-6xl">
          {familyName}{" "}
          {givenName ? (
            <em className="italic text-accent-fg">{givenName}</em>
          ) : null}
        </h1>

        {pullQuote ? (
          <p className="rise rise-2 mt-6 max-w-xl font-display text-xl italic leading-snug text-fg-default sm:text-2xl">
            “{pullQuote.replace(/\.$/, "")}.”
          </p>
        ) : null}

        <p className="rise rise-3 mt-4 max-w-xl text-fg-muted">{bioRest}</p>
      </div>

      {/* Click the photo for a burst of particles. */}
      <div className="rise rise-2 relative mx-auto w-fit sm:mx-0">
        <div
          aria-hidden
          className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-2xl border-2 border-accent-fg/70"
        />
        <CoolMode options={{ particleCount: 24, speedUp: 2 }}>
          <button
            type="button"
            aria-label={`Photo of ${profile.name}`}
            className="relative block cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-emphasis"
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              width={208}
              height={208}
              priority
              className="h-[176px] w-[176px] rounded-2xl border border-border-default bg-canvas-subtle object-cover sm:h-52 sm:w-52"
            />
          </button>
        </CoolMode>
      </div>

      <nav className="rise rise-4 flex flex-wrap items-center gap-2 sm:col-span-2">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-fg-default px-4 py-1.5 font-mono text-sm text-canvas-default no-underline transition-colors hover:bg-accent-emphasis hover:no-underline"
        >
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-default bg-card-bg px-4 py-1.5 text-sm text-fg-default no-underline transition-colors hover:border-accent-fg hover:text-accent-fg hover:no-underline"
          >
            {link.label}
          </a>
        ))}
        {profile.cv ? (
          <a
            href={profile.cv}
            className="rounded-full border border-accent-fg bg-accent-subtle px-4 py-1.5 text-sm font-medium text-accent-fg no-underline hover:bg-accent-fg hover:text-canvas-default hover:no-underline"
          >
            CV
          </a>
        ) : null}
      </nav>
    </header>
  );
}
