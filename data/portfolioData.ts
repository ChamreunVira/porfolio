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
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  /** 1-based position used in the "[ PROJECT 01 / 04 ]" tag. */
  index: number;
  title: string;
  /** Optional real project preview shown in the project list. */
  thumbnail: string;
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
    slug: 'est4re',
    index: 1,
    title: 'eSt4re',
    thumbnail: '/projects/estore_preview.png',
    tagline: 'A full-stack e-commerce platform with inventory and QR payment integration.',
    liveUrl: 'https://est4re.vercel.app',
    summary:
      'A Laravel and Next.js e-commerce platform with product management, inventory tracking, order processing, and digital payments.',
    idea: [
      'eSt4re provides an online shopping experience where customers can browse products, manage their shopping carts, place orders, and complete payments through QR-based payment integration.',
      'The Laravel backend manages products, categories, customers, inventory, and orders, with PostgreSQL for data storage. Laravel Sanctum handles API authentication, while role-based access control separates customer and administrator permissions.',
      'The platform integrates ABA PayWay Dynamic QR payments and supports order processing, stock management, and invoice generation to simplify daily e-commerce operations.',
    ],
    keyFlows: [
      'Customers browse products, manage their cart, and place orders.',
      'Customers complete payments through QR-based payment integration.',
      'Administrators manage products, categories, customers, inventory, and orders.',
      'The system processes orders, updates stock, and generates invoices.',
    ],
    techStackIds: ['laravel', 'php', 'postgresql', 'sanctum', 'next-js', 'typescript', 'tailwind', 'khqr'],
    accentColor: '#e1232e',
    heroVariant: 'storefront',
    gallery: [
      { src: '/projects/estore_01.png', caption: 'Online storefront' },
      { src: '/projects/estore_02.png', caption: 'Product management' },
      { src: '/projects/estore_03.png', caption: 'Order management' },
    ],
  },
  {
    slug: 'vst4re',
    index: 2,
    title: 'vSt4re',
    thumbnail: '/projects/ecommerce_preview.png',
    tagline: 'An e-commerce platform featuring Bakong KHQR payments.',
    liveUrl: 'https://vst4re.vercel.app',
    summary:
      'A Spring Boot and Next.js store with order management, inventory control, and QR payments verified through secure webhooks.',
    idea: [
      'vSt4re is an online shopping platform built around Cambodia’s QR payment experience. Customers can browse products, add items to their cart, and pay by scanning a Bakong KHQR code.',
      'The Spring Boot backend handles product, inventory, customer, shipping, promotion, and order management. Order processing uses database transactions to maintain stock consistency, while payment webhooks use HMAC verification and idempotency to prevent duplicate processing.',
      'The Next.js frontend uses JWT authentication and middleware for role-based navigation, while Spring Security enforces access control on the backend.',
    ],
    keyFlows: [
      'Customers browse products, add items to their cart, and check out using KHQR.',
      'Payment webhooks verify transactions and automatically update order status.',
      'Administrators manage products, banners, inventory, and customer orders.',
    ],
    techStackIds: ['spring-boot', 'java', 'mongodb', 'khqr', 'jwt', 'next-js', 'typescript', 'tailwind'],
    accentColor: '#e1232e',
    heroVariant: 'storefront',
    gallery: [
      { src: '/projects/ecommerce_01.png', caption: 'KHQR checkout' },
      { src: '/projects/ecommerce_02.png', caption: 'Admin dashboard' },
      { src: '/projects/ecommerce_08.png', caption: 'Shopping on mobile' },
    ],
  },
  {
    slug: 'journal',
    index: 3,
    title: 'Journal',
    thumbnail: '/projects/journal_preview.png',
    tagline: 'A bilingual academic journal platform for student research.',
    liveUrl: 'https://journal-academic.vercel.app',
    summary:
      'A university journal platform that supports research submissions, editorial reviews, and published academic issues in Khmer and English.',
    idea: [
      'Journal provides a centralized platform for university research, allowing students to submit academic papers and follow their publication progress instead of managing submissions through separate emails and messages.',
      'The platform uses Next.js with bilingual routing through next-intl and an Express.js API connected to MongoDB. Redux Toolkit manages application data, while role-based permissions separate administrators, editors, and students.',
      'The editorial workflow supports paper submissions, review processes, revision requests, acceptance, and publication. Editors can organize accepted research into academic issues for readers to explore.',
    ],
    keyFlows: [
      'Students register, submit research papers, and track their submission status.',
      'Editors review submissions, request revisions, and manage publication decisions.',
      'Administrators manage users, roles, categories, and journal issues.',
      'Readers browse published issues and explore academic articles in Khmer and English.',
    ],
    techStackIds: ['next-js', 'typescript', 'redux-toolkit', 'tailwind', 'express', 'mongodb', 'i18n'],
    accentColor: '#1c1b19',
    heroVariant: 'journal',
    gallery: [
      { src: '/projects/journal_01.png', caption: 'Current issue' },
      { src: '/projects/journa_02.png', caption: 'Editor dashboard' },
      { src: '/projects/journal_03.png', caption: 'Reading on mobile' },
    ],
  },
  {
    slug: 'khmer-social',
    index: 4,
    title: 'Khmer Social',
    thumbnail: '/projects/social_preview.png',
    tagline: 'A social networking platform for sharing posts and connecting with friends.',
    liveUrl: 'http://khmer-social.vercel.app',
    summary:
      'A Spring Boot and React social network featuring user profiles, posts, interactions, and friend relationship management.',
    idea: [
      'Khmer Social is a social networking application designed to let users connect with others, share updates, and interact through a familiar social media experience.',
      'The Spring Boot backend provides REST APIs for user profiles, posts, comments, likes, shares, and friend relationships. The friend system supports sending, accepting, rejecting, and removing friend requests.',
      'The React frontend uses TypeScript and shared application context to manage authenticated user information and notifications, providing immediate feedback when users interact with the platform.',
    ],
    keyFlows: [
      'Users create profiles, publish posts, and browse the social feed.',
      'Users interact with posts through comments, likes, and shares.',
      'Users send friend requests and accept or reject incoming requests.',
      'Users manage their friends list and remove existing connections.',
    ],
    techStackIds: ['spring-boot', 'java', 'react', 'typescript', 'vite', 'tailwind'],
    accentColor: '#149eca',
    heroVariant: 'feed',
    gallery: [
      { src: '/projects/social_01.png', caption: 'Posts feed' },
      { src: '/projects/social_03.png', caption: 'Friend requests' },
      { src: '/projects/social_04.png', caption: 'Mobile feed' },
    ],
  },
  {
    slug: 'bacii',
    index: 5,
    title: 'bacii',
    thumbnail: '/projects/bacii_preview.png',
    tagline: 'A BAC II calculator designed to help Cambodian students calculate exam results.',
    liveUrl: 'https://bacii.online',
    summary:
      'A responsive calculator that simplifies BAC II score calculations using examination grading criteria and saves calculation history for students.',
    idea: [
      'bacii.online was created to help Cambodian students calculate and check their BAC II examination results more easily. Instead of calculating subject scores manually, students can enter their results and get their calculated scores through a simple interface.',
      'The application provides structured input forms, score calculation logic, and validation to help students enter their subject results and understand their examination scores.',
      'To make it more convenient, calculation history is saved using browser Local Storage, allowing students to revisit previous calculations without needing an account. The responsive interface also supports both desktop and mobile devices.',
    ],
    keyFlows: [
      'Students enter their subject scores into the calculator.',
      'The application validates inputs and calculates examination results based on grading criteria.',
      'Students review their calculated scores and save their calculation history.',
      'Students revisit previous calculations from their browser.',
    ],
    techStackIds: ['next-js', 'typescript', 'tailwind'],
    accentColor: '#336791',
    heroVariant: 'dashboard',
    gallery: [
      { src: '/projects/bacii_01.png', caption: 'Score calculator' },
      { src: '/projects/bacii_02.png', caption: 'Calculation results' },
      { src: '/projects/bacii_05.png', caption: 'Mobile layout' },
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
