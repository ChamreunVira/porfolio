import type { CertificateAsset, PortfolioProfile } from '@/types';

export const certificates: CertificateAsset[] = [
  {
    title: 'Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    src: '/assets/certificate/CCNA-_Introduction_to_Networks_certificate_virachamreun-gmail-com_8f2ec895-5aa5-4370-ba10-9d5b9b03054a.pdf',
    type: 'pdf',
  },
  {
    title: 'HCIA-Datacom V1.0 Course',
    issuer: 'Huawei',
    year: '2026',
    src: '/assets/certificate/_HCIA-Datacom V1.0 Course.png',
    type: 'image',
  },
  {
    title: 'HCIA-Cloud Computing V5.5 Course',
    issuer: 'Huawei',
    year: '2026',
    src: '/assets/certificate/HCIA-Cloud Computing V5.5 Course.png',
    type: 'image',
  },
];

export const portfolio: PortfolioProfile = {
  name: 'Chamreun Vira',
  handle: 'ChamreunVira',
  role: 'Full Stack Developer',
  intro: 'a full stack developer focused Computer Science student and developer',
  description:
    'I am a Computer Science student with a strong interest in backend development and practical experience building RESTful APIs and authentication systems. I am currently working as a Teaching Assistant, contributing to the development of a full-stack academic journal platform.',
  contact: {
    phone: '+855 97 305 6747',
    email: 'virachamreun@gmail.com',
    website: 'https://virachamreun.vercel.app',
    location: 'Toul Kork, Phnom Penh',
  },
  education: [
    {
      institution: 'Royal University of Phnom Penh',
      program: 'Bachelor of Computer Science in Information Technology',
      period: '2024 — Expected 2028',
    },
    {
      institution: 'Instinct Institute',
      program: 'Short course in frontend development',
      period: '2024 — 2025',
    },
  ],
  experience: [
    {
      title: 'Teaching Assistant — Academic Journal',
      organization: 'Royal University of Phnom Penh',
      period: 'August 2026',
      description:
        'Assisted in building a full-stack Academic Journal Platform with REST APIs, JWT authentication, OTP password reset, role-based middleware, and Redux Toolkit integration. Supported author, user, profile, category, submission, and article management features, plus AWS EC2 deployment and S3 file storage.',
      technologies: ['Next.js', 'Express.js', 'TypeScript', 'MongoDB', 'AWS'],
    },
  ],
  certifications: [
    'Cisco Networking Academy — Introduction to Networks, 2026',
    'Huawei — HCIA-Datacom V1.0, 2026',
    'Huawei — HCIA-Cloud Computing V5.5, 2026',
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/ChamreunVira',
    },
  ],
  technologies: [
    'TypeScript',
    'PHP',
    'Java',
    'Express.js',
    'Spring Boot',
    'Laravel (Basic)',
    'REST APIs',
    'JWT Authentication',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Docker Compose',
    'Postman',
  ],
  skillGroups: [
    {
      title: 'Programming',
      skills: ['TypeScript', 'PHP', 'Java'],
    },
    {
      title: 'Backend',
      skills: ['Express.js', 'Spring Boot', 'Laravel (Basic)', 'REST APIs', 'JWT Authentication'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Docker Compose', 'Postman'],
    },
  ],
  projects: [
    {
      id: 'journal-academic-platform',
      title: 'Journal',
      eyebrow: 'Academic platform / 01',
      description:
        'An academic journal platform direction shaped around institutional identity, editorial content, and a clear path through research work.',
      technologies: ['Web platform', 'Editorial UI', 'Khmer-first'],
      liveUrl: 'https://journal-academic.vercel.app',
      cover: {
        src: '/assets/projects/journal_preview.png',
        alt: 'Journal Academic Platform dashboard preview',
      },
      gallery: ['journal_preview.png', 'journal_01.png', 'journal_03.png', 'journal_04.png'].map((filename, index) => ({
        src: `/assets/projects/${filename}`,
        alt: `Journal Academic Platform interface view ${index + 1}`,
      })),
      tone: 'yellow',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce',
      eyebrow: 'Commerce experience / 02',
      description:
        'A storefront interface with product discovery, campaign-led merchandising, catalog controls, and a clear shopping path.',
      technologies: ['Storefront', 'Product UI', 'Responsive web'],
      sourceUrl: 'https://github.com/ChamreunVira/ecommerce-web',
      cover: {
        src: '/assets/projects/ecommerce_preview.png',
        alt: 'Ecommerce storefront homepage preview',
      },
      gallery: [
        'ecommerce_preview.png',
        'ecommerce_01.png',
        'ecommerce_02.png',
        'ecommerce_03.png',
        'ecommerce_04.png',
        'ecommerce_05.png',
        'ecommerce_06.png',
        'ecommerce_07.png',
        'ecommerce_08.png',
      ].map((filename, index) => ({
        src: `/assets/projects/${filename}`,
        alt: `Ecommerce interface view ${index + 1}`,
      })),
      tone: 'pink',
    },
    {
      id: 'khmer-social',
      title: 'Khmer Social',
      eyebrow: 'Social platform / 03',
      description:
        'A social platform interface for sharing posts, discovering people, and keeping everyday conversations close to home.',
      technologies: ['Social platform', 'Khmer UI', 'Community'],
      cover: {
        src: '/assets/projects/social_preview.png',
        alt: 'Khmer Social platform feed preview',
      },
      gallery: [
        'social_preview.png',
        'khmer-social.png',
        'social_01.png',
        'social_02.png',
        'social_03.png',
        'social_04.png',
      ].map((filename, index) => ({
        src: `/assets/projects/${filename}`,
        alt: `Khmer Social interface view ${index + 1}`,
      })),
      tone: 'blue',
    },
    {
      id: 'bacii-calculator',
      title: 'BACII Calculator',
      eyebrow: 'Calculation tool / 04',
      description:
        'A Khmer-first calculation dashboard with score inputs, progress cards, history controls, and localized navigation.',
      technologies: ['Calculator', 'Dashboard UI', 'Khmer-first'],
      cover: {
        src: '/assets/projects/bacii_preview.png',
        alt: 'BACII Calculator dashboard preview',
      },
      gallery: [
        'bacii_preview.png',
        'bacii_01.png',
        'bacii_02.png',
        'bacii_03.png',
        'bacii_04.png',
        'bacii_05.png',
      ].map((filename, index) => ({
        src: `/assets/projects/${filename}`,
        alt: `BACII Calculator interface view ${index + 1}`,
      })),
      tone: 'paper',
    },
  ],
};
