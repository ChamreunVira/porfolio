import type { CSSProperties } from "react";
import type { TechSkill } from "@/data/portfolioData";

interface TechChipProps {
  tech: TechSkill;
}

export function TechChip({ tech }: TechChipProps) {
  const Icon = tech.icon;

  return (
    <li
      tabIndex={0}
      className="tech-chip font-mono text-mono-tag"
      style={{ "--brand": tech.brandColor } as CSSProperties}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {tech.name}
    </li>
  );
}
