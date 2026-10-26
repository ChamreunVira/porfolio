'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tape } from '@/components/ui/Tape';
import { Wireframe } from '@/components/ui/Wireframe';
import { getTechSkills, projectFilters, projects } from '@/data/portfolioData';
import { cn } from '@/lib/cn';

export function ProjectsSection() {
  const [activeFilterId, setActiveFilterId] = useState<string>('all');

  const visibleProjects = useMemo(
    () =>
      activeFilterId === 'all' ? projects : projects.filter((project) => project.techStackIds.includes(activeFilterId)),
    [activeFilterId],
  );

  return (
    <section id="projects" aria-labelledby="projects-title" className="page-container py-16">
      <SectionHeading id="projects-title" title="Projects" note="// stuff i actually built" />

      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-ink/20 pb-4">
        <div role="group" aria-label="Filter projects by technology" className="flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const isActive = activeFilterId === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilterId(filter.id)}
                className={cn(
                  'border px-3.5 py-1.5 font-mono text-mono-tag transition-all',
                  isActive
                    ? 'border-ink bg-ink text-paper shadow-crisp-sm -translate-y-0.5'
                    : 'border-ink/40 bg-paper text-ink-soft hover:border-ink hover:bg-card hover:text-ink',
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <span className="font-hand text-hand-note text-red-500/90 rotate-[-1deg]">// Let see my work ✦</span>
      </div>

      {/* 2-Column Grid Layout matching reference card style */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {visibleProjects.map((project) => {
          const techList = getTechSkills(project.techStackIds);

          return (
            <article
              key={project.slug}
              className="group relative flex flex-col justify-between border-2 border-ink bg-card shadow-crisp-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md overflow-hidden"
            >
              <div>
                {/* Top Banner / Preview Box (Like the Sayyesly reference card header) */}
                <div className="relative">
                  {/* Optional Tape at top center */}
                  <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-1" />

                  <div className="overflow-hidden border border-ink/40 bg-paper shadow-sm">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} preview`}
                        width={800}
                        height={450}
                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-102"
                      />
                    ) : (
                      <Wireframe
                        variant={project.heroVariant}
                        accentColor={project.accentColor}
                        label={`${project.title} wireframe`}
                      />
                    )}
                  </div>
                </div>

                {/* Content Area Below */}
                <div className="p-5 sm:p-6">
                  {/* Handwritten Title in Red */}
                  <h3 className="font-hand text-3xl font-bold text-red-600 tracking-wide">{project.title}</h3>

                  {/* Description Paragraph */}
                  <p className="mt-3 font-sans text-body-sm text-ink leading-relaxed">
                    {project.tagline || project.summary}
                  </p>

                  {/* Text-based Tech Stack List (matching reference image style) */}
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-soft">
                    {techList.map((tech, idx) => (
                      <span key={tech.id} className="inline-flex items-center">
                        {tech.name}
                        {idx < techList.length - 1 && <span className="ml-3 text-ink/20"></span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="flex items-center justify-between border-t border-dashed border-ink/20 px-5 py-4 sm:px-6 bg-paper/30">
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
                    className="inline-flex items-center gap-1 font-mono text-mono-tag text-ink-soft hover:text-ink underline underline-offset-4"
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
        })}
      </div>
    </section>
  );
}
