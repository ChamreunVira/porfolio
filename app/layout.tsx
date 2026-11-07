import type { Metadata, Viewport } from 'next';
import { Caveat, Inter, JetBrains_Mono } from 'next/font/google';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import './globals.css';
import { profile } from '@/data/portfolioData';

const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });

const siteUrl = 'https://virachamreun.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Chamreun Vira | Software Developer Portfolio',
  applicationName: 'Chamreun Vira Portfolio',
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
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
    title: 'Chamreun Vira | Software Developer Portfolio',
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

export const viewport: Viewport = {
  themeColor: '#f8f6f0',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/assets/ChamreunVira_Profile.png`,
    jobTitle: profile.role,
    description: profile.intro,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressCountry: 'KH',
    },
    // sameAs: profile.socials.map((social) => social.href),
    // knowsAbout: profile.technologies,
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
    <html lang="en" className={`${caveat.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script id="person-schema" type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </head>
      <body className="bg-grid-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
