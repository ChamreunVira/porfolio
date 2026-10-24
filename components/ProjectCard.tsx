import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '@/types';

type ProjectCardProps = {
  project: PortfolioProject;
  number: string;
};

export function ProjectCard({ project, number }: ProjectCardProps) {
  const toneClass = {
    yellow: 'bg-[var(--yellow)]',
    pink: 'bg-[var(--pink)]',
    blue: 'bg-[var(--blue)]',
    paper: 'bg-[var(--paper)]',
  }[project.tone];
  return (
    <article
      className={`group/card mb-0 flex min-h-[575px] flex-col overflow-hidden border-2 border-[var(--ink)] shadow-[7px_7px_0_var(--ink)] transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0_var(--ink)] focus-within:translate-x-[3px] focus-within:translate-y-[3px] focus-within:shadow-[4px_4px_0_var(--ink)] max-[680px]:mb-6 max-[680px]:min-h-[510px] ${toneClass}`}
    >
      <Link
        className="group/image relative block min-h-[235px] overflow-hidden border-b-2 border-[var(--ink)] bg-[var(--paper)] max-[680px]:min-h-[210px]"
        href={`/projects/${project.id}`}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover/card:scale-[1.035]"
          sizes="(max-width: 680px) 88vw, (max-width: 900px) 43vw, 38vw"
        />
        <span className="absolute bottom-[15px] right-[15px] inline-flex translate-y-[5px] items-center gap-1.5 border-2 border-[var(--ink)] bg-[var(--paper)] px-2.5 py-2 text-[0.68rem] font-extrabold opacity-0 transition-[opacity,transform] duration-150 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus/image:translate-y-0 group-focus/image:opacity-100">
          View case study <ArrowUpRight aria-hidden="true" size={16} />
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-[27px] pb-[27px] pt-[23px] max-[680px]:p-[22px]">
        <div className="flex items-start justify-between gap-[15px]">
          <span className="grid size-[38px] place-items-center border-2 border-[var(--ink)] bg-[var(--paper)] font-mono text-[0.68rem] uppercase tracking-[0.08em]">
            {number}
          </span>
          <span className="font-mono text-right text-[0.68rem] uppercase tracking-[0.08em]">{project.eyebrow}</span>
        </div>
        <div className="my-auto max-w-[470px] py-[34px] max-[680px]:pb-10 max-[680px]:pt-[50px]">
          <h3 className="mb-4 mt-0 text-[clamp(2rem,4.4vw,4rem)] leading-[0.88] tracking-[-0.08em]">{project.title}</h3>
          <p className="m-0 max-w-[370px] text-[0.98rem] leading-[1.5]">{project.description}</p>
        </div>
        <div className="flex items-end justify-between gap-4 max-[680px]:flex-col max-[680px]:items-start">
          <div className="flex flex-wrap gap-1.5" aria-label={`${project.title} categories`}>
            {project.technologies.map((technology) => (
              <span
                className="border border-[var(--ink)] bg-[var(--paper)] px-2 py-1.5 font-mono text-[0.61rem]"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-end gap-x-[15px] gap-y-2.5">
            <Link
              className="inline-flex shrink-0 items-center gap-1.5 border-b border-[var(--ink)] pb-1 text-[0.76rem] font-extrabold transition-colors duration-150 hover:text-[var(--muted)] [&_svg]:transition-transform [&_svg]:duration-150 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5"
              href={`/projects/${project.id}`}
            >
              <span>Open project</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            {project.liveUrl ? (
              <a
                className="inline-flex shrink-0 items-center gap-1.5 border-b border-[var(--ink)] pb-1 text-[0.76rem] font-extrabold transition-colors duration-150 hover:text-[var(--muted)] [&_svg]:transition-transform [&_svg]:duration-150 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit live ${project.title} site`}
              >
                <span>Live site</span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
