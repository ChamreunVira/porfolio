import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AboutTimeline } from "@/components/AboutTimeline";
import { CertificateViewer } from "@/components/CertificateViewer";
import { Navbar } from "@/components/Navbar";
import { certificates, portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Chamreun Vira — Developer Portfolio",
  description: "Experience, education, certifications, and background for Chamreun Vira.",
};

export default function AboutPage() {
  return (
    <div className="site-shell about-page-shell">
      <Navbar />
      <main className="about-page section-frame">
        <div className="about-page__back-row">
          <Link className="text-link" href="/">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to home
          </Link>
          <span className="eyebrow">About / CV</span>
        </div>

        <section className="about-page__hero" aria-labelledby="about-page-title">
          <div>
            <span className="eyebrow">{portfolio.role}</span>
            <h1 id="about-page-title">The person behind the work.</h1>
          </div>
          <div className="about-page__hero-copy">
            <p>{portfolio.description}</p>
            <div className="about-page__contact-row">
              <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
              <span>{portfolio.contact.location}</span>
            </div>
          </div>
        </section>

        <AboutTimeline />

        <section className="certificate-section" aria-labelledby="certificate-title">
          <div className="certificate-section__heading">
            <div>
              <span className="eyebrow">Credentials</span>
              <h2 id="certificate-title">Certificates worth keeping.</h2>
            </div>
            <p>Certificates are shown normally below. Click one to open a larger view, then click outside to close it.</p>
          </div>
          <CertificateViewer certificates={certificates} />
        </section>

        <div className="about-page__footer-link">
          <Link className="button button--dark" href="/#contact">
            Start a conversation <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </main>
    </div>
  );
}
