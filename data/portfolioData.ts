import {
  Atom,
  Boxes,
  Code,
  Coffee,
  Cpu,
  Database,
  KeyRound,
  Languages,
  Layers,
  Leaf,
  QrCode,
  Server,
  Triangle,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/* ----------------------------- Types ----------------------------- */

export type WireframeVariant = 'journal' | 'storefront' | 'checkout' | 'dashboard' | 'feed' | 'mobile';
export type ExperienceCategory = 'EDUCATION' | 'CAREER' | 'AWARD';
export type TechCategory = 'Backend' | 'Frontend' | 'Data' | 'Hardware' | 'Tools';

export interface TechSkill {
  id: string;
  name: string;
  category: TechCategory;
  icon: string;
  /** Color the chip fills with on hover. */
  brandColor: string;
}

export interface GalleryImage {
  caption: string;
  variant: WireframeVariant;
}

export interface Project {
  slug: string;
  /** 1-based position used in the "[ PROJECT 01 / 04 ]" tag. */
  index: number;
  title: string;
  /** Optional real project preview shown in the project list. */
  thumbnail?: string;
  tagline: string;
  /** Leave undefined until the project is deployed; the Live button is hidden without it. */
  liveUrl?: string;
  summary: string;
  /** Paragraphs for the "// The idea" column. */
  idea: string[];
  keyFlows: string[];
  techStackIds: string[];
  accentColor: string;
  heroVariant: WireframeVariant;
  gallery: GalleryImage[];
}

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  period: string;
  title: string;
  organization: string;
  summary: string;
  details: string[];
}

export interface ProjectFilter {
  id: string;
  label: string;
}

/* ----------------------------- Profile ----------------------------- */

export const profile = {
  name: 'Chamreun Vira',
  role: 'Full-Stack Developer',
  location: 'Phnom Penh, Cambodia',
  phone: '+855 97 3056 747',
  telegramHandle: 'ChamreunVira',
  email: 'virachamreun@gmail.com',
  githubUrl: 'https://github.com/ChamreunVira',
  githubHandle: 'ChamreunVira',
  intro: 'I turn coffee, curiosity, and questionable ideas into things that actually work.',
  photo: {
    src: '/images/ChamreunVira_Profile.png',
    width: 1448,
    height: 1086,
    alt: 'Two friends taking a selfie on a sunny open-air corridor, with a table of lunch in the foreground and Phnom Penh buildings behind them',
    caption: 'lunch break, no bugs',
  },
  desk: [
    { label: 'backend', value: 'Java, Spring Boot, Node.js' },
    { label: 'data', value: 'PostgreSQL, MongoDB' },
    { label: 'frontend', value: 'React, Next.js, Vue, Angular' },
    { label: 'hardware', value: 'ESP32, Raspberry Pi' },
  ],
} as const;

/* ----------------------------- Tech stack ----------------------------- */

export const techSkills: TechSkill[] = [
  // Backend
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    brandColor: '#ea2d2e',
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    brandColor: '#4f9a2b',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    brandColor: '#777bb4',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    brandColor: '#ff2d20',
  },
  {
    id: 'express',
    name: 'Node.js / Express',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    brandColor: '#5fa04e',
  },
  {
    id: 'jwt',
    name: 'JWT Auth',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
    brandColor: '#d63aff',
  },

  // Data
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Data',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    brandColor: '#336791',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Data',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    brandColor: '#47a248',
  },

  // Frontend
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    brandColor: '#3178c6',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    brandColor: '#149eca',
  },
  {
    id: 'next-js',
    name: 'Next.js',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    brandColor: '#000000',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    brandColor: '#06b6d4',
  },
  {
    id: 'redux-toolkit',
    name: 'Redux Toolkit',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    brandColor: '#764abc',
  },

  // Tools & DevOps
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    brandColor: '#f05032',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    brandColor: '#181717',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    brandColor: '#2496ed',
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    brandColor: '#ff6c37',
  },

  // Hardware
  {
    id: 'esp32',
    name: 'ESP32',
    category: 'Hardware',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    brandColor: '#e7352c',
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi',
    category: 'Hardware',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
    brandColor: '#c51a4a',
  },
];

export const techCategories: TechCategory[] = ['Backend', 'Data', 'Frontend', 'Hardware'];

export function getTechSkills(techIds: string[]): TechSkill[] {
  return techIds
    .map((techId) => techSkills.find((skill) => skill.id === techId))
    .filter((skill): skill is TechSkill => skill !== undefined);
}

/* ----------------------------- Projects ----------------------------- */

export const projects: Project[] = [
  {
    slug: 'journal',
    index: 1,
    title: 'Journal',
    thumbnail: '/images/Journal_Preview.png',
    tagline: 'A bilingual academic journal platform for student research.',
    liveUrl: 'https://journal-academic.vercel.app',
    summary:
      'Students submit papers, editors review them, and readers browse issues in two languages from one codebase.',
    idea: [
      'Student research rarely has a proper home. Papers get emailed around, reviews live in chat threads, and nothing ends up in a searchable archive. Journal gives a university one place for the whole life of a paper, from first submission to a published issue.',
      'The frontend is a Next.js app with locale-prefixed routes such as /en, and an Express and MongoDB API behind it. Redux Toolkit thunks keep articles, categories and issues in a flat, predictable state so every page reads the same data the same way.',
      'The design is deliberately quiet: black and white, sharp corners, one accent for the actions that matter, so the research is the loudest thing on the screen.',
    ],
    keyFlows: [
      'A student registers, submits a paper, and tracks its review status.',
      'An editor reviews a submission, requests changes, and assigns it to an issue.',
      'A reader browses the current issue, searches the archive, and opens an article.',
    ],
    techStackIds: ['next-js', 'typescript', 'redux-toolkit', 'tailwind', 'express', 'mongodb', 'i18n'],
    accentColor: '#1c1b19',
    heroVariant: 'journal',
    gallery: [
      { caption: 'Current issue', variant: 'journal' },
      { caption: 'Editor dashboard', variant: 'dashboard' },
      { caption: 'Reading on mobile', variant: 'mobile' },
    ],
  },
  {
    slug: 'vst4re',
    index: 2,
    title: 'vSt4re',
    thumbnail: '/images/vStr4re_KH_Preview.png',
    tagline: 'An e-commerce platform that takes Bakong KHQR payments.',
    summary: 'A Spring Boot and Next.js store with full order management and QR payments confirmed by signed webhooks.',
    idea: [
      'Most shoppers in Cambodia pay with a bank app and a QR code, so checkout had to be built around KHQR rather than a card form. vSt4re generates a Bakong QR for each order, polls for its status, and confirms payment through an HMAC-verified webhook.',
      'Orders are transactional on the Spring Boot side: stock is decremented, the cart is cleared, ownership is checked, and cancellation is restricted once an order moves forward. Webhooks are idempotent, so a repeated callback never double-charges or double-ships.',
      'On the frontend, Next.js middleware verifies the JWT and routes people by role, while Spring Security stays the authority that actually enforces access.',
    ],
    keyFlows: [
      'A customer adds items to the cart, checks out, and scans a KHQR code to pay.',
      'The order flips to paid when the payment webhook arrives, with no manual refresh.',
      'An admin manages products, banners and orders behind role-based access.',
    ],
    techStackIds: ['spring-boot', 'java', 'mongodb', 'khqr', 'jwt', 'next-js', 'typescript', 'tailwind'],
    accentColor: '#e1232e',
    heroVariant: 'storefront',
    gallery: [
      { caption: 'KHQR checkout', variant: 'checkout' },
      { caption: 'Admin dashboard', variant: 'dashboard' },
      { caption: 'Shopping on mobile', variant: 'mobile' },
    ],
  },
  {
    slug: 'bacii',
    index: 3,
    title: 'bacii',
    thumbnail: '/images/BACII_Preview.png',
    tagline: 'A full-stack web application, live at bacii.online.',
    liveUrl: 'https://bacii.online',
    summary: 'Designed and built end to end, from the database schema to the deployed frontend.',
    idea: [
      'bacii is a web application I took from an empty repository to a public domain. That meant modelling the data, building the API, designing the screens and deploying it all myself.',
      'Replace this paragraph with what bacii does for people and the main problem it solves. A good version names who uses it, what they were doing before, and what is faster or clearer now.',
      'Replace this one with a technical decision you are proud of, for example how you structured the API, handled authentication, or kept the interface fast on slow connections.',
    ],
    keyFlows: [
      'A new visitor signs up and reaches the main screen in a few steps.',
      'A returning user picks up where they left off, on any device.',
      'An admin manages content and accounts from one place.',
    ],
    techStackIds: ['next-js', 'typescript', 'tailwind', 'spring-boot', 'java', 'postgresql'],
    accentColor: '#336791',
    heroVariant: 'dashboard',
    gallery: [
      { caption: 'Main dashboard', variant: 'dashboard' },
      { caption: 'Detail view', variant: 'journal' },
      { caption: 'Mobile layout', variant: 'mobile' },
    ],
  },
  {
    slug: 'khmer-social',
    index: 4,
    title: 'Khmer Social',
    thumbnail: '/images/KhmerSocail_Preview.png',
    tagline: 'A social network with a posts feed and friend requests.',
    liveUrl: 'http://khmer-social.vercel.app',
    summary: 'A Spring Boot API and a React, Vite and TypeScript client for sharing posts and building a friends list.',
    idea: [
      'Khmer Social is a full-stack social media app built to understand what makes a social product feel alive: a feed that loads fast, and relationships that behave the way people expect.',
      'The friend system is a small state machine on the Spring Boot side. You can send a request, accept or reject it, list pending requests, and remove a friend, each as its own endpoint with the current user resolved by an auth service.',
      'The React client uses a shared app context for the signed-in user and toast notifications, so every action answers back immediately.',
    ],
    keyFlows: [
      'A user publishes a post and sees it at the top of the feed.',
      'A user sends a friend request, and the receiver accepts or rejects it.',
      'A user opens their friends list and removes a friend.',
    ],
    techStackIds: ['spring-boot', 'java', 'react', 'typescript', 'vite', 'tailwind'],
    accentColor: '#149eca',
    heroVariant: 'feed',
    gallery: [
      { caption: 'Posts feed', variant: 'feed' },
      { caption: 'Friend requests', variant: 'dashboard' },
      { caption: 'Mobile feed', variant: 'mobile' },
    ],
  },
];

export const projectFilters: ProjectFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'spring-boot', label: 'Spring Boot' },
  { id: 'next-js', label: 'Next.js' },
  { id: 'react', label: 'React' },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/* ----------------------------- The Journey ----------------------------- */

/** Newest first. Edit the periods to match your real dates. */
export const experienceItems: ExperienceItem[] = [
  {
    id: 'personal-projects',
    category: 'CAREER',
    period: '2024 — Present',
    title: 'Full-Stack & Backend Developer',
    organization: 'Independent Projects',
    summary:
      'Building and deploying full-stack applications to strengthen backend engineering skills and explore career opportunities.',
    details: [
      'vSt4re: E-commerce platform with a Spring Boot backend, Next.js storefront, and Bakong KHQR payment integration.',
      'Camnoi Journal: Bilingual academic publishing platform supporting research submissions, peer review, and publication workflows.',
      'bacii.online: Full-stack web application developed and deployed end to end.',
      'Khmer Social: Social networking application with a posts feed and friend request functionality.',
    ],
  },
  {
    id: 'journal-teaching-assistant',
    category: 'CAREER',
    period: 'Mar 2026 — Present',
    title: 'Teaching Assistant & Journal Developer',
    organization: 'Royal University of Phnom Penh (RUPP)',
    summary: 'Collaborating with Prof. Ouk Khean on an academic journal platform for publishing research papers.',
    details: [
      'Developing a platform to support academic research submissions and publication workflows.',
      'Implementing backend APIs, authentication, and role-based access control.',
      'Building a bilingual interface for academic publishing and content management.',
    ],
  },
  {
    id: 'rupp-computer-science',
    category: 'EDUCATION',
    period: '2024 — Present',
    title: 'Bachelor of Computer Science',
    organization: 'Royal University of Phnom Penh (RUPP)',
    summary: 'Studying computer science fundamentals and applying them to practical software development projects.',
    details: [
      'Algorithms, data structures, and database systems.',
      'Software engineering and web application development.',
      'Embedded systems and IoT projects using ESP32 and Raspberry Pi.',
    ],
  },
  {
    id: 'instinct-frontend-course',
    category: 'EDUCATION',
    period: '2024 — 2025',
    title: 'Professional Front-End Development',
    organization: 'Instinct Institute',
    summary: 'Completed a short course focused on modern front-end development.',
    details: [
      'Practiced building responsive user interfaces.',
      'Learned modern JavaScript and front-end development workflows.',
    ],
  },
];
