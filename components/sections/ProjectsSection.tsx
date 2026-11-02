'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectFilters, projects } from '@/data/portfolioData';
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
                {filter.label}font
              </button>
            );
          })}
        </div>
        <span className="font-hand text-hand-note text-red-500/90 -rotate-1">// Let see my work ✦</span>
      </div>

      {/* 2-Column Grid Layout matching reference card style */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
