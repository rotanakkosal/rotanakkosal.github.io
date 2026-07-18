"use client";

import Image from "next/image";
import { ExternalLink, FlaskConical, Mail } from "lucide-react";
import { CoolMode } from "@/components/ui/cool-mode";
import { profile } from "@/data/profile";

/* Brand marks (lucide dropped its brand icons); paths from Simple Icons. */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

/** Icon for a contact link, keyed by its label in profile.ts. */
function LinkIcon({ label, className }: { label: string; className?: string }) {
  switch (label.toLowerCase()) {
    case "github":
      return <GitHubIcon className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "lab":
      return <FlaskConical className={className} />;
    default:
      return <ExternalLink className={className} />;
  }
}

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
          className="inline-flex items-center gap-2 rounded-full bg-fg-default px-4 py-1.5 font-mono text-sm text-canvas-default no-underline transition-colors hover:bg-accent-emphasis hover:no-underline"
        >
          <Mail aria-hidden className="h-4 w-4 shrink-0" />
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-default bg-card-bg px-4 py-1.5 text-sm text-fg-default no-underline transition-colors hover:border-accent-fg hover:text-accent-fg hover:no-underline"
          >
            <LinkIcon label={link.label} className="h-4 w-4 shrink-0" />
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
