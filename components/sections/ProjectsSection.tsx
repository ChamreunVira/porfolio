"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tape } from "@/components/ui/Tape";
import { TechChip } from "@/components/ui/TechChip";
import { Wireframe } from "@/components/ui/Wireframe";
import { getTechSkills, projectFilters, projects } from "@/data/portfolioData";
import { cn } from "@/lib/cn";
import { formatProjectTag } from "@/lib/format";

export function ProjectsSection() {
  const [activeFilterId, setActiveFilterId] = useState<string>("all");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const visibleProjects = useMemo(
    () =>
      activeFilterId === "all"
        ? projects
        : projects.filter((project) => project.techStackIds.includes(activeFilterId)),
    [activeFilterId],
  );

  function handleFilterChange(filterId: string) {
    setActiveFilterId(filterId);
    setExpandedSlug(null);
  }

  function handleToggleProject(slug: string) {
    setExpandedSlug((currentSlug) => (currentSlug === slug ? null : slug));
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="page-container py-16">
      <SectionHeading id="projects-title" title="Projects" note="// stuff i actually built" />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div role="group" aria-label="Filter projects by technology" className="flex flex-wrap gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilterId === filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={cn(
                "border border-ink px-3 py-1.5 font-mono text-mono-tag transition-colors",
                activeFilterId === filter.id ? "bg-ink text-paper" : "bg-paper text-ink-soft hover:bg-card",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="font-hand text-hand-note text-pen">// click a card to expand ↓</span>
      </div>

      <ul className="space-y-6">
        {visibleProjects.map((project) => {
          const isExpanded = expandedSlug === project.slug;
          const panelId = `project-panel-${project.slug}`;

          return (
            <li key={project.slug} className="border border-ink bg-card shadow-crisp-sm">
              <h3>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => handleToggleProject(project.slug)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="block">
                    <span className="block font-mono text-mono-tag text-ink-soft">
                      {formatProjectTag(project.index, projects.length)}
                    </span>
                    <span className="mt-2 block font-sans text-title text-ink">{project.title}</span>
                    <span className="mt-2 block max-w-[34rem] font-sans text-body-sm text-ink-soft">
                      {project.tagline}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn("mt-1 h-5 w-5 shrink-0 transition-transform duration-300", isExpanded && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <div
                id={panelId}
                inert={!isExpanded}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 border-t border-ink px-5 pb-6 pt-6 sm:px-6 md:grid-cols-2">
                    <div>
                      <p className="font-sans text-body text-ink">{project.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {project.keyFlows.map((flow) => (
                          <li key={flow} className="flex gap-3 font-sans text-body-sm text-ink-soft">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-pen" />
                            {flow}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
                        {getTechSkills(project.techStackIds).map((tech) => (
                          <TechChip key={tech.id} tech={tech} />
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 font-mono text-mono-tag text-paper"
                        >
                          Read the case study →
                        </Link>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-mono-tag text-ink underline underline-offset-4"
                          >
                            Live site
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <figure className="relative mt-3 self-start border border-ink bg-paper p-2 shadow-crisp-sm md:mt-0">
                      <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-1" />
                      <Wireframe
                        variant={project.heroVariant}
                        accentColor={project.accentColor}
                        label={`${project.title} wireframe preview`}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
