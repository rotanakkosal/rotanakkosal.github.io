/**
 * Every piece of content on the site lives here.
 * Edit this file to make the site yours — you should not need to touch the
 * components. To drop a section entirely, empty its array (the section then
 * renders nothing) or remove it from `src/app/page.tsx`.
 *
 * Placeholders are marked TODO so you can grep for what's left.
 */

export type Link = { label: string; href: string };

export const profile = {
  name: "Your Name", // TODO
  headline: "M.S. Student, Computer Science", // TODO
  affiliation: "Your University", // TODO
  // Short intro paragraph under the photo. Keep it to 2–3 sentences.
  bio:
    "TODO: One or two sentences on what you research and why it matters. " +
    "Mention your lab, your advisor, and the through-line of your work.",
  // Drop a square photo in `public/` and point this at it (e.g. "/profile.jpg").
  photo: "/profile.svg",
  email: "you@example.com", // TODO
  cv: "/cv.pdf", // Drop your CV at `public/cv.pdf`, or set to "" to hide the link.
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=TODO" },
    { label: "GitHub", href: "https://github.com/TODO" },
    { label: "X", href: "https://x.com/TODO" },
    { label: "LinkedIn", href: "https://linkedin.com/in/TODO" },
  ] satisfies Link[],
};

/** Dated one-liners. Newest first. This is the first thing visitors read. */
export const news: { date: string; text: string }[] = [
  { date: "Jul. 2026", text: "TODO: Paper accepted to <venue>." },
  { date: "May. 2026", text: "TODO: Started a research internship at <company>." },
  { date: "Feb. 2026", text: "TODO: Released <project> — code and models are public." },
];

export const researchInterests: string[] = [
  "TODO: Multimodal Large Language Models (MLLMs)",
  "TODO: Reasoning and planning in LLM agents",
  "TODO: Efficient training and inference",
];

export const education: {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}[] = [
  {
    degree: "M.S. in Computer Science",
    school: "Your University",
    period: "Mar. 2025 – present",
    detail: "TODO: Advisor: Prof. <name>. Lab: <lab name>.",
  },
  {
    degree: "B.S. in Computer Science",
    school: "Your Undergrad University",
    period: "Mar. 2021 – Feb. 2025",
    detail: "TODO: GPA, honors, or thesis title.",
  },
];

export type Publication = {
  title: string;
  authors: string; // Wrap your own name in ** ** to bold it.
  venue: string;
  year: string;
  /** Grouping header, e.g. "International Conference", "Workshop", "Preprint". */
  category: string;
  /** Thumbnail in `public/pubs/`. Leave "" for a placeholder block. */
  thumbnail?: string;
  links?: Link[];
};

export const publications: Publication[] = [
  {
    title: "TODO: Title of your first paper",
    authors: "**Your Name**, Coauthor One, Coauthor Two",
    venue: "NeurIPS",
    year: "2026",
    category: "International Conference",
    thumbnail: "", // e.g. "/pubs/paper-1.png"
    links: [
      { label: "arXiv", href: "#" },
      { label: "PDF", href: "#" },
      { label: "Code", href: "#" },
      { label: "Project", href: "#" },
    ],
  },
  {
    title: "TODO: Title of a workshop paper",
    authors: "**Your Name**, Coauthor One",
    venue: "ICML Workshop on <topic>",
    year: "2025",
    category: "Workshop",
    thumbnail: "",
    links: [{ label: "arXiv", href: "#" }],
  },
  {
    title: "TODO: Title of a preprint",
    authors: "**Your Name**, Coauthor One, Coauthor Two",
    venue: "arXiv:2501.00000",
    year: "2025",
    category: "Preprint",
    thumbnail: "",
    links: [
      { label: "arXiv", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
];

/** Order in which publication categories are rendered. */
export const publicationCategoryOrder = [
  "International Conference",
  "Findings",
  "Workshop",
  "Preprint",
];

export const experiences: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}[] = [
  {
    role: "Research Intern",
    org: "TODO: Company / Lab",
    period: "Sep. 2025 – present",
    bullets: [
      "TODO: What you built or studied, and the result.",
      "TODO: Quantify the outcome if you can — a number lands harder than an adjective.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "TODO: Lab name",
    period: "Mar. 2024 – Feb. 2025",
    bullets: ["TODO: Project description and outcome."],
  },
];

export type Project = {
  name: string;
  description: string;
  /** Small tech tags shown as pills. */
  tags: string[];
  thumbnail?: string;
  links?: Link[];
};

export const projects: Project[] = [
  {
    name: "TODO: Project name",
    description:
      "TODO: One or two sentences on what it does and why you built it.",
    tags: ["PyTorch", "CUDA"],
    thumbnail: "", // e.g. "/projects/project-1.png"
    links: [
      { label: "Repo", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    name: "TODO: Another project",
    description: "TODO: Short description.",
    tags: ["Next.js", "TypeScript"],
    thumbnail: "",
    links: [{ label: "Repo", href: "#" }],
  },
];

export const talks: { title: string; venue: string; date: string; links?: Link[] }[] =
  [
    {
      title: "TODO: Talk title",
      venue: "TODO: Venue or seminar",
      date: "Jun. 2026",
      links: [{ label: "Slides", href: "#" }],
    },
  ];

export const teaching: { course: string; role: string; term: string }[] = [
  { course: "TODO: CS101 — Intro to Programming", role: "Teaching Assistant", term: "Fall 2025" },
];

export const service: string[] = [
  "TODO: Reviewer — NeurIPS 2026, ICML 2026",
  "TODO: Student volunteer — ACL 2025",
];

export const honors: { title: string; detail: string; date: string }[] = [
  { title: "TODO: Scholarship or award name", detail: "TODO: Awarding body", date: "2025" },
  { title: "TODO: Another honor", detail: "TODO: Awarding body", date: "2024" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "C++"] },
  { group: "ML", items: ["PyTorch", "JAX", "Hugging Face"] },
  { group: "Tools", items: ["Git", "Docker", "Slurm"] },
];
