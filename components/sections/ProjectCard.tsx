import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getTechSkills, type Project } from '@/data/portfolioData';
import { Tape } from '@/components/ui/Tape';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techList = getTechSkills(project.techStackIds);

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden border-2 border-ink bg-card shadow-crisp-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="relative">
          <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-1" />

          <div className="relative overflow-hidden border border-ink/40 bg-paper shadow-sm">
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              width={800}
              height={450}
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="font-hand text-3xl font-bold tracking-wide text-red-600">{project.title}</h3>

          <p className="mt-3 font-sans text-body-sm leading-relaxed text-ink">{project.tagline || project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-soft">
            {techList.map((tech, index) => (
              <span key={tech.id} className="inline-flex items-center">
                {tech.name}
                {index < techList.length - 1 && <span className="ml-3 text-ink/20"></span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-dashed border-ink/20 bg-paper/30 px-5 py-4 sm:px-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 border border-ink bg-ink px-4 py-2 font-mono text-mono-tag text-paper shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <span>details</span>
          <span>→</span>
        </Link>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-mono-tag text-ink-soft underline underline-offset-4 hover:text-ink"
          >
            live preview
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="font-mono text-[11px] text-ink-soft/60">private release</span>
        )}
      </div>
    </article>
  );
}
