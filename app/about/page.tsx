import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { AboutTimeline } from '@/components/AboutTimeline';
import { CertificateViewer } from '@/components/CertificateViewer';
import { Navbar } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { certificates, portfolio } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'About Chamreun Vira — Developer Portfolio',
  description: 'Experience, education, certifications, and background for Chamreun Vira.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="mx-auto w-[min(calc(100%-48px),var(--max-width))] pb-[115px] pt-[145px] max-[680px]:w-[min(calc(100%-32px),var(--max-width))] max-[680px]:pb-[75px] max-[680px]:pt-[120px]">
        <div className="flex items-center justify-between gap-5 border-b-2 border-[var(--ink)] pb-[23px] max-[680px]:flex-col-reverse max-[680px]:items-start max-[680px]:gap-4">
          <Link
            className="inline-flex items-center gap-[7px] border-b-[1.5px] border-[var(--ink)] pb-[3px] text-[0.8rem] font-extrabold"
            href="/"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to home
          </Link>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">About / CV</span>
        </div>

        <section
          className="grid grid-cols-[1.1fr_0.9fr] items-end gap-[clamp(35px,8vw,120px)] py-[80px_75px] max-[900px]:grid-cols-1 max-[900px]:gap-[35px] max-[680px]:py-[54px_60px]"
          aria-labelledby="about-page-title"
        >
          <Reveal className="col-span-full grid grid-cols-[1.1fr_0.9fr] items-end gap-[clamp(35px,8vw,120px)] max-[900px]:grid-cols-1 max-[900px]:gap-[35px]">
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">{portfolio.role}</span>
              <h1
                className="mb-0 mt-5 max-w-[780px] text-[clamp(4rem,8.5vw,9rem)] leading-[0.84] tracking-[-0.095em] max-[680px]:text-[clamp(4rem,18vw,6.7rem)]"
                id="about-page-title"
              >
                The person behind the work.
              </h1>
            </div>
            <div className="pb-1.5">
              <p className="mb-[25px] mt-0 max-w-[480px] text-[1.05rem] leading-[1.6] text-[var(--muted)]">
                {portfolio.description}
              </p>
              <div className="flex flex-wrap gap-x-[23px] gap-y-[9px] font-mono text-[0.66rem] uppercase tracking-[0.05em] text-[var(--muted)]">
                <a
                  className="border-b border-[var(--ink)] pb-[3px] text-[var(--ink)] transition-colors duration-150 hover:text-[var(--muted)]"
                  href={`mailto:${portfolio.contact.email}`}
                >
                  {portfolio.contact.email}
                </a>
                <span>{portfolio.contact.location}</span>
              </div>
            </div>
          </Reveal>
        </section>

        <AboutTimeline />

        <section
          className="mt-[125px] border-t-2 border-[var(--ink)] pt-[30px] max-[680px]:mt-[85px]"
          aria-labelledby="certificate-title"
        >
          <Reveal className="mb-[37px]">
            <div className="grid grid-cols-[1fr_0.55fr] items-end gap-[30px] max-[900px]:grid-cols-1 max-[900px]:gap-5">
              <div>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">Credentials</span>
                <h2
                  className="mb-0 mt-5 max-w-[560px] text-[clamp(2.8rem,6vw,6rem)] leading-[0.88] tracking-[-0.08em]"
                  id="certificate-title"
                >
                  Certificates worth keeping.
                </h2>
              </div>
              <p className="m-0 max-w-[270px] text-[0.88rem] leading-[1.5] text-[var(--muted)]">
                Certificates are shown normally below. Click one to open a larger view, then click outside to close it.
              </p>
            </div>
          </Reveal>
          <CertificateViewer certificates={certificates} />
        </section>

        <div className="mt-[65px] flex justify-center">
          <Link
            className="inline-flex min-h-[50px] items-center justify-center gap-[11px] border-2 border-[var(--ink)] bg-[var(--ink)] px-[17px] py-[13px] text-[0.8rem] font-extrabold text-[var(--paper)] shadow-[4px_4px_0_var(--pink)] transition-[transform,box-shadow] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            href="/#contact"
          >
            Start a conversation <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </main>
    </div>
  );
}
