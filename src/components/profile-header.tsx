"use client";

import Image from "next/image";
import { CoolMode } from "@/components/ui/cool-mode";
import { profile } from "@/data/profile";

/**
 * Name, photo, bio and contact links. Client-side because CoolMode attaches
 * pointer listeners — that is fine under `output: "export"`, it just ships a
 * little JS for this subtree.
 */
export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <h1 className="tracking-tight">{profile.name}</h1>

      <p className="mt-1 text-fg-muted">
        {profile.headline}
        {profile.affiliation ? ` · ${profile.affiliation}` : ""}
      </p>

      {/* Click the photo for a burst of particles. */}
      <CoolMode options={{ particleCount: 24, speedUp: 2 }}>
        <button
          type="button"
          aria-label={`Photo of ${profile.name}`}
          className="mt-6 block cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-emphasis"
        >
          <Image
            src={profile.photo}
            alt={profile.name}
            width={180}
            height={180}
            priority
            className="h-[180px] w-[180px] rounded-full border border-border-default bg-canvas-subtle object-cover"
          />
        </button>
      </CoolMode>

      <p className="mt-6 max-w-2xl text-left text-fg-muted">{profile.bio}</p>

      <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-border-default px-3 py-1 text-sm no-underline hover:bg-canvas-subtle hover:no-underline"
        >
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border-default px-3 py-1 text-sm no-underline hover:bg-canvas-subtle hover:no-underline"
          >
            {link.label}
          </a>
        ))}
        {profile.cv ? (
          <a
            href={profile.cv}
            className="rounded-md border border-border-default bg-canvas-subtle px-3 py-1 text-sm font-medium no-underline hover:bg-accent-subtle hover:no-underline"
          >
            CV
          </a>
        ) : null}
      </nav>
    </header>
  );
}
