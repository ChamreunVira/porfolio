import type { Metadata } from 'next';
import { portfolio } from '@/data/portfolio';
import './globals.css';

const siteUrl = 'https://virachamreun.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Chamreun Vira | Backend Developer Portfolio',
  applicationName: 'Chamreun Vira Portfolio',
  authors: [{ name: portfolio.name, url: siteUrl }],
  creator: portfolio.name,
  publisher: portfolio.name,
  description:
    'Explore Chamreun Vira’s developer portfolio, projects, and experience in backend development, Java, Spring Boot, Node.js, Express.js, REST APIs, and databases in Cambodia.',

  keywords: [
    'Chamreun Vira',
    'Vira Chamreun',
    'Chamreun vira',
    'Vira Dev',
    'Vira Fontend Developer',
    'Vira Backend Developer',
    'Chamreun Vira Dev',
    'Vira Chamreun Dev',
    'Chamreun Vira Software Engineering',
    'Vira Software Engineering',
    'Vira Web Dev',
    'Vira DevOps',
    'ចំរើន វីរ៉ា',
    'ចំរើន វីរ៉ា dev',
    'ចំរើន វីរ៉ា អ្ននកអភិវឌ្ឍន៍កម្មវិធី',
    'វីរ៉ា អ្ននកអភិវឌ្ឍន៍កម្មវិធី',
    'អ្ចំរើន វីរ៉ា នកអភិវឌ្ឍន៍ Backend',
    'ចំរើន វីរ៉ា អ្នកសរសេរកម្មវិធីនៅកម្ពុជា',
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
    images: [
      {
        url: '/assets/ChamreunVira_Profile.png',
        alt: 'Chamreun Vira, backend developer in Phnom Penh',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chamreun Vira | Backend Developer Portfolio',
    description: 'Backend development projects, technical skills, and software engineering experience.',
    images: ['/assets/ChamreunVira_Profile.png'],
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
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: portfolio.name,
    url: siteUrl,
    image: `${siteUrl}/assets/ChamreunVira_Profile.png`,
    jobTitle: portfolio.role,
    description: portfolio.description,
    email: `mailto:${portfolio.contact.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressCountry: 'KH',
    },
    sameAs: portfolio.socials.map((social) => social.href),
    knowsAbout: portfolio.technologies,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chamreun Vira Portfolio',
    url: siteUrl,
    description: metadata.description,
    author: { '@id': `${siteUrl}/#person` },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script id="person-schema" type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
