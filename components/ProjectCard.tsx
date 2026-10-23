import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '@/types';

type ProjectCardProps = {
  project: PortfolioProject;
  number: string;
};

export function ProjectCard({ project, number }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.tone}`}>
      <Link className="project-card__image" href={`/projects/${project.id}`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 680px) 88vw, (max-width: 900px) 43vw, 38vw"
        />
        <span className="project-card__image-label">
          View case study <ArrowUpRight aria-hidden="true" size={16} />
        </span>
      </Link>
      <div className="project-card__content">
        <div className="project-card__topline">
          <span className="project-card__number">{number}</span>
          <span className="project-card__eyebrow">{project.eyebrow}</span>
        </div>
        <div className="project-card__body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-card__footer">
          <div className="tag-list" aria-label={`${project.title} categories`}>
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
          <div className="project-card__links">
            <Link className="project-card__link" href={`/projects/${project.id}`}>
              <span>Open project</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            {project.liveUrl ? (
              <a
                className="project-card__link"
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
