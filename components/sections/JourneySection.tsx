"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceItems, type ExperienceCategory } from "@/data/portfolioData";
import { cn } from "@/lib/cn";

const badgeClassByCategory: Record<ExperienceCategory, string> = {
  EDUCATION: "border-ink bg-paper text-ink",
  CAREER: "border-ink bg-ink text-paper",
  AWARD: "border-pen bg-pen text-paper",
};

const nodeClassByCategory: Record<ExperienceCategory, string> = {
  EDUCATION: "bg-paper",
  CAREER: "bg-ink",
  AWARD: "bg-pen",
};

export function JourneySection() {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  function handleToggleItem(itemId: string) {
    setExpandedIds((currentIds) =>
      currentIds.includes(itemId) ? currentIds.filter((id) => id !== itemId) : [...currentIds, itemId],
    );
  }

  return (
    <section id="journey" aria-labelledby="journey-title" className="page-container py-16">
      <SectionHeading id="journey-title" title="The Journey" note="// school, work and everything in between" />

      <ol className="relative ml-2 space-y-8 border-l-2 border-ink pl-8 sm:ml-3 sm:pl-10">
        {experienceItems.map((item) => {
          const isExpanded = expandedIds.includes(item.id);
          const drawerId = `journey-drawer-${item.id}`;

          return (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -left-[2.55rem] top-6 h-4 w-4 rounded-full border-2 border-ink sm:-left-[3.05rem]",
                  nodeClassByCategory[item.category],
                )}
              />
              <article className="border border-ink bg-card p-5 shadow-crisp-sm sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-mono-tag text-ink-soft">{item.period}</p>
                  <span className={cn("border px-2 py-0.5 font-mono text-mono-tag", badgeClassByCategory[item.category])}>
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-3 font-sans text-subtitle text-ink">{item.title}</h3>
                <p className="font-sans text-body-sm text-ink-soft">{item.organization}</p>
                <p className="mt-3 max-w-[40rem] font-sans text-body-sm text-ink">{item.summary}</p>

                <div
                  id={drawerId}
                  inert={!isExpanded}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-4 space-y-2 border-t border-dashed border-ink pt-4">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3 font-sans text-body-sm text-ink-soft">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-pen" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={drawerId}
                  onClick={() => handleToggleItem(item.id)}
                  className="mt-4 font-mono text-mono-tag text-ink underline underline-offset-4"
                >
                  {isExpanded ? "View less ↑" : "View more →"}
                </button>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
