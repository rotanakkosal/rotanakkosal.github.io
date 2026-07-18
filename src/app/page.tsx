import type { ReactNode } from "react";
import { ProfileHeader } from "@/components/profile-header";
import { PublicationList } from "@/components/publication-list";
import { Section } from "@/components/section";
import { Thumbnail } from "@/components/thumbnail";
import {
  education,
  experiences,
  honors,
  news,
  profile,
  projects,
  researchInterests,
  service,
  skills,
  talks,
  teaching,
} from "@/data/profile";

type SectionDef = { id: string; title: string; body: ReactNode };

/**
 * Sections are declared as a flat list so they get sequential numbers and the
 * sticky nav stays in sync automatically. A section with empty data is simply
 * not pushed.
 */
function buildSections(): SectionDef[] {
  const sections: SectionDef[] = [];

  if (news.length) {
    sections.push({
      id: "news",
      title: "News",
      body: (
        <ol className="relative ml-1 space-y-6 border-l border-border-default pl-7">
          {news.map((item) => (
            <li key={item.date + item.text} className="relative">
              <span
                aria-hidden
                className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent-fg bg-canvas-default"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                {item.date}
              </p>
              <p className="mt-1 text-fg-default">{item.text}</p>
            </li>
          ))}
        </ol>
      ),
    });
  }

  if (researchInterests.length) {
    sections.push({
      id: "interests",
      title: "Research Interests",
      body: (
        <ul className="grid gap-3 sm:grid-cols-2">
          {researchInterests.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-border-default bg-card-bg p-4 transition-colors hover:border-accent-fg/50"
            >
              <p className="font-display text-lg font-medium text-fg-default">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-fg-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (education.length) {
    sections.push({
      id: "education",
      title: "Education",
      body: (
        <ul className="space-y-5">
          {education.map((item) => (
            <li key={item.degree + item.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-semibold text-fg-default">{item.school}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                  {item.period}
                </p>
              </div>
              <p className="text-fg-muted">{item.degree}</p>
              {item.detail ? (
                <p className="mt-0.5 text-sm text-fg-subtle">{item.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ),
    });
  }

  sections.push({
    id: "publications",
    title: "Publications",
    body: <PublicationList />,
  });

  if (experiences.length) {
    sections.push({
      id: "experience",
      title: "Experience",
      body: (
        <ul className="space-y-7">
          {experiences.map((item) => (
            <li key={item.role + item.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-semibold text-fg-default">
                  {item.role}{" "}
                  <span className="font-normal text-fg-muted">· {item.org}</span>
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                  {item.period}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-fg-muted marker:text-accent-fg/60">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (projects.length) {
    sections.push({
      id: "projects",
      title: "Projects",
      body: (
        <ul className="space-y-4">
          {projects.map((item) => (
            <li
              key={item.name}
              className="flex gap-4 rounded-xl border border-border-default bg-card-bg p-4 transition-colors hover:border-accent-fg/50 sm:gap-5 sm:p-5"
            >
              <Thumbnail src={item.thumbnail} alt={item.name} />
              <div className="min-w-0">
                <p className="font-semibold text-fg-default">{item.name}</p>
                <p className="mt-0.5 text-sm text-fg-muted">{item.description}</p>
                {item.tags.length ? (
                  <p className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-default bg-canvas-subtle px-2 py-0.5 font-mono text-xs text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                ) : null}
                {item.links?.length ? (
                  <p className="mt-1.5 flex flex-wrap gap-x-3 font-mono text-sm">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (talks.length) {
    sections.push({
      id: "talks",
      title: "Talks & Presentations",
      body: (
        <ul className="space-y-4">
          {talks.map((item) => (
            <li key={item.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-semibold text-fg-default">{item.title}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                  {item.date}
                </p>
              </div>
              <p className="text-sm text-fg-muted">
                {item.venue}
                {item.links?.map((link) => (
                  <a key={link.label} href={link.href} className="ml-2 font-mono">
                    [{link.label}]
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (teaching.length) {
    sections.push({
      id: "teaching",
      title: "Teaching",
      body: (
        <ul className="space-y-2">
          {teaching.map((item) => (
            <li
              key={item.course}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <span>
                <span className="font-semibold text-fg-default">{item.course}</span>
                <span className="text-fg-muted">, {item.role}</span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                {item.term}
              </span>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (service.length) {
    sections.push({
      id: "service",
      title: "Academic Service",
      body: (
        <ul className="list-disc space-y-1 pl-5 text-fg-muted marker:text-accent-fg/60">
          {service.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    });
  }

  if (honors.length) {
    sections.push({
      id: "honors",
      title: "Honors & Scholarships",
      body: (
        <ul className="space-y-2">
          {honors.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <span>
                <span className="font-semibold text-fg-default">{item.title}</span>
                <span className="text-fg-muted">, {item.detail}</span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (skills.length) {
    sections.push({
      id: "skills",
      title: "Skills",
      body: (
        <dl className="space-y-4">
          {skills.map((group) => (
            <div
              key={group.group}
              className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline"
            >
              <dt className="w-32 shrink-0 font-mono text-xs uppercase tracking-widest text-fg-subtle">
                {group.group}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-default bg-card-bg px-3 py-0.5 text-sm text-fg-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      ),
    });
  }

  return sections;
}

export default function Home() {
  const sections = buildSections();

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-border-default/70 bg-canvas-default/85 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="font-display text-lg font-semibold text-fg-default no-underline hover:no-underline"
          >
            CR<span className="text-accent-fg">.</span>
          </a>
          <div className="hidden gap-5 md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-xs uppercase tracking-widest text-fg-muted no-underline transition-colors hover:text-accent-fg hover:no-underline"
              >
                {s.title}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs uppercase tracking-widest text-accent-fg no-underline hover:no-underline md:hidden"
          >
            Email
          </a>
        </nav>
      </div>

      <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <ProfileHeader />

        <div className="mt-20 space-y-16 sm:mt-24 sm:space-y-20">
          {sections.map((s, i) => (
            <Section key={s.id} id={s.id} number={i + 1} title={s.title}>
              {s.body}
            </Section>
          ))}
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-2 border-t border-border-default pt-6 font-mono text-xs uppercase tracking-widest text-fg-subtle">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="text-fg-subtle hover:text-accent-fg">
            Back to top ↑
          </a>
        </footer>
      </main>
    </>
  );
}
