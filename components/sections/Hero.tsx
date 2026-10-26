import { ArrowDown, GitBranch } from "lucide-react";
import { Annotation } from "@/components/ui/Annotation";
import { Tape } from "@/components/ui/Tape";
import { profile } from "@/data/portfolioData";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="page-container grid gap-12 pb-16 pt-14 md:grid-cols-[3fr_2fr] md:items-center md:pt-20">
      <div>
        <Annotation className="mb-2">hi there, i&apos;m</Annotation>
        <h1 id="hero-title" className="font-hand text-hand-hero text-ink">
          {profile.name}
        </h1>
        <p className="mt-4 font-mono text-mono-tag text-ink-soft">{profile.role}</p>
        <p className="mt-6 max-w-[34rem] font-sans text-body text-ink-soft">
          {profile.intro} Based in {profile.location} 📍
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-mono-tag text-paper shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            See projects
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink bg-card px-5 py-2.5 font-mono text-mono-tag text-ink shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            {profile.githubHandle}
          </a>
        </div>
      </div>

      <aside aria-label="What is on my desk" className="relative mt-4 rotate-1 border border-ink bg-card p-6 pt-8 shadow-crisp md:mt-0">
        <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
        <p className="mb-4 font-hand text-hand-note text-pen">on my desk right now</p>
        <dl className="space-y-3">
          {profile.desk.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-mono-tag text-ink-soft">{item.label}</dt>
              <dd className="font-sans text-body-sm text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
