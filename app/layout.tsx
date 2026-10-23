import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://virachamreun.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Chamreun Vira | Backend Developer Portfolio',
  description:
    'Explore Chamreun Vira’s developer portfolio, projects, and experience in backend development, Java, Spring Boot, Node.js, Express.js, REST APIs, and databases in Cambodia.',

  keywords: [
    'Chamreun Vira',
    'Vira Chamreun',
    'Developer Portfolio Cambodia',
    'Backend Developer Cambodia',
    'Backend Developer Phnom Penh',
    'Java Developer Cambodia',
    'Spring Boot Developer',
    'Node.js Developer',
    'Express.js Developer',
    'Full Stack Developer Cambodia',
    'Software Developer Portfolio',
    'REST API Development',
    'PostgreSQL',
    'MongoDB',
    'អ្នកអភិវឌ្ឍន៍កម្មវិធី',
    'អ្នកអភិវឌ្ឍន៍ Backend',
    'អ្នកសរសេរកម្មវិធីនៅកម្ពុជា',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Chamreun Vira | Backend Developer Portfolio',
    description:
      'Discover my software development projects, backend engineering skills, and experience building web applications and REST APIs.',
    url: '/',
    siteName: 'Chamreun Vira Portfolio',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chamreun Vira | Backend Developer Portfolio',
    description: 'Backend development projects, technical skills, and software engineering experience.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: 'nFDGQyiyBE-ZajWVj8nMkBqpBBW93WCtLZJI32PeYWM',
  },
};
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
