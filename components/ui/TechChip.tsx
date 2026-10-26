import type { CSSProperties } from 'react';
import type { TechSkill } from '@/data/portfolioData';

interface TechChipProps {
  tech: TechSkill;
}

export function TechChip({ tech }: TechChipProps) {
  return (
    <li
      tabIndex={0}
      className="tech-chip font-mono text-mono-tag inline-flex items-center gap-2"
      style={{ '--brand': tech.brandColor } as CSSProperties}
    >
      <img src={tech.icon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
      <span>{tech.name}</span>
    </li>
  );
}
