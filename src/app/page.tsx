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

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <ProfileHeader />

      <div className="mt-12 space-y-10">
        {news.length ? (
          <Section id="news" title="News">
            <ul className="space-y-1.5">
              {news.map((item) => (
                <li key={item.date + item.text} className="flex gap-3">
                  <span className="w-20 shrink-0 font-mono text-sm text-fg-subtle">
                    {item.date}
                  </span>
                  <span className="text-fg-default">{item.text}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {researchInterests.length ? (
          <Section id="interests" title="Research Interests">
            <ul className="list-disc space-y-1 pl-5 marker:text-fg-subtle">
              {researchInterests.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-fg-default">
                    {item.title}:
                  </span>{" "}
                  <span className="text-fg-muted">{item.text}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {education.length ? (
          <Section id="education" title="Education">
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item.degree + item.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-semibold text-fg-default">{item.school}</p>
                    <p className="font-mono text-sm text-fg-subtle">{item.period}</p>
                  </div>
                  <p className="text-fg-muted">{item.degree}</p>
                  {item.detail ? (
                    <p className="mt-0.5 text-sm text-fg-muted">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <Section id="publications" title="Publications">
          <PublicationList />
        </Section>

        {experiences.length ? (
          <Section id="experience" title="Experience">
            <ul className="space-y-5">
              {experiences.map((item) => (
                <li key={item.role + item.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-semibold text-fg-default">
                      {item.role} · {item.org}
                    </p>
                    <p className="font-mono text-sm text-fg-subtle">{item.period}</p>
                  </div>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-fg-muted marker:text-fg-subtle">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {projects.length ? (
          <Section id="projects" title="Projects">
            <ul className="space-y-5">
              {projects.map((item) => (
                <li key={item.name} className="flex gap-4">
                  <Thumbnail src={item.thumbnail} alt={item.name} />
                  <div className="min-w-0">
                    <p className="font-semibold text-fg-default">{item.name}</p>
                    <p className="mt-0.5 text-sm text-fg-muted">{item.description}</p>
                    {item.tags.length ? (
                      <p className="mt-2 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border-default bg-canvas-subtle px-2 py-0.5 text-xs text-fg-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                    ) : null}
                    {item.links?.length ? (
                      <p className="mt-1.5 flex flex-wrap gap-x-3 text-sm">
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
          </Section>
        ) : null}

        {talks.length ? (
          <Section id="talks" title="Talks & Presentations">
            <ul className="space-y-3">
              {talks.map((item) => (
                <li key={item.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-semibold text-fg-default">{item.title}</p>
                    <p className="font-mono text-sm text-fg-subtle">{item.date}</p>
                  </div>
                  <p className="text-sm text-fg-muted">
                    {item.venue}
                    {item.links?.map((link) => (
                      <a key={link.label} href={link.href} className="ml-2">
                        [{link.label}]
                      </a>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {teaching.length ? (
          <Section id="teaching" title="Teaching">
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
                  <span className="font-mono text-sm text-fg-subtle">{item.term}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {service.length ? (
          <Section id="service" title="Academic Service">
            <ul className="list-disc space-y-1 pl-5 marker:text-fg-subtle">
              {service.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        ) : null}

        {honors.length ? (
          <Section id="honors" title="Honors & Scholarships">
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
                  <span className="font-mono text-sm text-fg-subtle">{item.date}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {skills.length ? (
          <Section id="skills" title="Skills">
            <dl className="space-y-2">
              {skills.map((group) => (
                <div key={group.group} className="flex flex-wrap gap-x-3">
                  <dt className="w-24 shrink-0 font-semibold text-fg-default">
                    {group.group}
                  </dt>
                  <dd className="text-fg-muted">{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </Section>
        ) : null}
      </div>

      <footer className="mt-16 border-t border-border-default pt-6 text-center text-sm text-fg-subtle">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
