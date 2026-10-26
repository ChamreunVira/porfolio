import { ArrowUpRight, GitBranch, Mail, Phone, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/portfolioData';

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="page-container py-16">
      <SectionHeading id="contact-title" title="Say hi" note="// no form, just a link" />
      <p className="max-w-[34rem] font-sans text-body text-ink-soft">
        Have a project, a question, or a bug in something I built? Open an issue or send a message on GitHub.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`tel:${profile.phone.replaceAll(' ', '')}`}
          className="inline-flex items-center gap-2 border border-ink bg-card px-5 py-2.5 font-mono text-mono-tag text-ink shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {profile.phone}
        </a>
        <a
          href={`https://t.me/${profile.telegramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-ink bg-card px-5 py-2.5 font-mono text-mono-tag text-ink shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <Send className="h-4 w-4" aria-hidden="true" />@{profile.telegramHandle}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 border border-ink bg-card px-5 py-2.5 font-mono text-mono-tag text-ink shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {profile.email}
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-ink bg-card px-5 py-2.5 font-mono text-mono-tag text-ink shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <GitBranch className="h-4 w-4" aria-hidden="true" />
          github.com/{profile.githubHandle}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
