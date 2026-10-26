import type { Metadata, Viewport } from "next";
import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Chamreun Vira | Full-Stack Developer",
    template: "%s | Chamreun Vira",
  },
  description:
    "Portfolio of Chamreun Vira, a full-stack developer in Phnom Penh building Spring Boot backends and React and Next.js frontends.",
};

export const viewport: Viewport = {
  themeColor: "#f8f6f0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${caveat.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
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
