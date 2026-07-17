/**
 * Every piece of content on the site lives here.
 * Edit this file to make the site yours — you should not need to touch the
 * components. To drop a section entirely, empty its array (the section then
 * renders nothing) or remove it from `src/app/page.tsx`.
 *
 * Sources:
 *   - CHHUN_ROTANAKKOSAL_Resume-V4.pdf
 *   - https://aiconvergencelab.com/members/chhun-rotanakkosal.html
 *
 * Deliberately NOT published here (they are in the CV, but do not belong on a
 * public page): personal mobile number, home address, date of birth, gender,
 * marital status, and referees' private contact details.
 */

export type Link = { label: string; href: string };

export const profile = {
  name: "CHHUN Rotanakkosal",
  headline: "M.S. Student, Big Data",
  affiliation: "Chungbuk National University",
  bio:
    "I want machines to understand what they see well enough to act on it. " +
    "I am an integrated M.S. student in Big Data at Chungbuk National " +
    "University, working at the AI Convergence Lab (AICLab) on multimodal " +
    "models that connect vision and language, and on the perception that " +
    "stands between a model and a robot that can pick something up.",
  // Square 400x400 crop of the formal portrait, resized for the web.
  photo: "/profile.jpg",
  email: "ch.rotanakkosal@chungbuk.ac.kr",
  // Hidden until a public-safe CV exists (the current PDF contains personal
  // details and referees' private contact info). Set to "/cv.pdf" to re-enable.
  cv: "",
  links: [
    { label: "GitHub", href: "https://github.com/rotanakkosal" },
    {
      label: "LinkedIn",
      href: "https://kh.linkedin.com/in/chhun-rotanakkosal-717a6222b",
    },
    {
      label: "Lab",
      href: "https://aiconvergencelab.com/members/chhun-rotanakkosal.html",
    },
    // TODO: add Google Scholar once you have a profile.
  ] satisfies Link[],
};

/** Dated one-liners. Newest first. This is the first thing visitors read. */
export const news: { date: string; text: string }[] = [
  {
    date: "Sep. 2025",
    text: "Began my integrated M.S. in Big Data at Chungbuk National University, joining the AI Convergence Lab.",
  },
  {
    date: "2025",
    text: "Presented work on continuous integration and deployment in modern DevOps practices at FITAT 2025.",
  },
  {
    date: "Aug. 2024",
    text: "Presented work on RAG ranking with leave-one-out reward supervision and DPO at BIGDAS 2024, Jeju Island.",
  },
];

/** Four topics, one short line each. Keep them terse. */
export const researchInterests: { title: string; text: string }[] = [
  {
    title: "Large language models",
    text: "agents, retrieval, and preference optimization.",
  },
  {
    title: "Computer vision",
    text: "object detection and visual perception.",
  },
  {
    title: "Multimodal models",
    text: "grounding language in what a model sees.",
  },
  {
    title: "Physical AI",
    text: "perception for autonomous robotic manipulation.",
  },
];

export const education: {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}[] = [
  {
    degree: "M.S. in Big Data (Integrated)",
    school: "Chungbuk National University",
    period: "Sep. 2025 – present",
    detail: "AI Convergence Lab (AICLab).", // TODO: add your advisor's name.
  },
  {
    degree: "B.S. in Computer Science",
    school: "Royal University of Phnom Penh",
    period: "Nov. 2019 – Jun. 2023",
  },
  {
    degree: "Software Engineering Trainee",
    school: "Foundation for Korea Software Global Aid",
    period: "Feb. 2022 – Dec. 2022",
    detail:
      "Intensive program in Java/J2EE, Spring, web development, and databases, " +
      "followed by an advanced DevOps track: Linux, Docker, Kubernetes, Jenkins, " +
      "Ansible, GitOps (ArgoCD), and AWS.",
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
    title:
      "The Role of Continuous Integration and Continuous Deployment in Modern DevOps Practices",
    authors:
      "**Rotanakkosal Chhun**, Vungsovanreach Kong, Sokheang Chan, Naro Vorn, Tae-Kyung Kim",
    venue:
      "17th International Conference on Frontiers of Information Technology, Application and Tools (FITAT)",
    year: "2025",
    category: "International Conference",
    thumbnail: "", // e.g. "/pubs/fitat-2025.png"
    links: [], // TODO: add [PDF] / [Code] links if available.
  },
  {
    title:
      "Enhancing RAG Ranking with Leave-One-Out Reward Supervision and Direct Preference Optimization",
    authors:
      "**Rotanakkosal Chhun**, Sokheang Chan, Vungsovanreach Kong, Tae-Kyung Kim",
    venue:
      "12th International Conference on Big Data Applications and Services (BIGDAS), Jeju Island, Korea",
    year: "2024",
    category: "International Conference",
    thumbnail: "",
    links: [],
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
    role: "Researcher",
    org: "AI Convergence Lab, Chungbuk National University",
    period: "Sep. 2025 – present",
    bullets: [
      "Research on computer vision and LLM integration for multimodal systems.",
      "Robotic vision for autonomous manipulation.",
      // TODO: add specifics — what you are building, and the result so far.
    ],
  },
  {
    role: "IT Instructor",
    org: "Foundation for Korea Software Global Aid / Korea Software HRD Center",
    period: "Jan. 2023 – mid 2025",
    bullets: [
      "Set up and maintained the center's server infrastructure.",
      "Self-directed research alongside teaching: ran LLM agents locally on a GPU server with Ollama, and explored OpenManus for web research, code generation, and multi-agent workflows.",
      "Built ML and computer vision foundations: classical algorithms, CNNs, and YOLO object detection, including training YOLO on custom data.",
    ],
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

/**
 * Empty by choice — the web-development work is deliberately not showcased here.
 * The section hides itself while this array is empty; add entries to bring it back.
 */
export const projects: Project[] = [];

// TODO: add talks. Empty array = the section is hidden.
export const talks: { title: string; venue: string; date: string; links?: Link[] }[] =
  [];

// Empty by choice — the teaching record is deliberately not showcased here.
// The section hides itself while this array is empty.
export const teaching: { course: string; role: string; term: string }[] = [];

// TODO: add reviewing / organizing roles. Empty array = the section is hidden.
export const service: string[] = [];

// Empty by choice — the section hides itself while this array is empty.
// (Removed: Best Employee Award, Korea Software HRD Center, 2024.)
export const honors: { title: string; detail: string; date: string }[] = [];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "C++", "Swift", "SQL"] },
  {
    group: "ML & Vision",
    items: ["CNNs", "YOLO", "Classical ML", "Ollama", "LLM agents"],
  },
  // Condensed from separate Web and DevOps groups: kept as supporting evidence
  // that you can build and run systems, without competing with the research.
  {
    group: "Engineering",
    items: ["Linux", "Docker", "Kubernetes", "CI/CD", "Next.js", "PostgreSQL"],
  },
  { group: "Spoken", items: ["Khmer (native)", "English"] },
];
