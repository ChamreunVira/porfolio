import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { ProjectGallery } from "@/components/ProjectGallery";
import { portfolio } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolio.projects.find((item) => item.id === id);

  if (!project) return {};

  return {
    title: `${project.title} — Chamreun Vira`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Chamreun Vira`,
      description: project.description,
      images: [project.cover.src],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = portfolio.projects.findIndex((item) => item.id === id);
  const project = portfolio.projects[projectIndex];

  if (!project) notFound();

  const previousProject = portfolio.projects[(projectIndex - 1 + portfolio.projects.length) % portfolio.projects.length];
  const nextProject = portfolio.projects[(projectIndex + 1) % portfolio.projects.length];

  return (
    <div className="site-shell project-page">
      <Navbar />
      <main className="project-detail section-frame">
        <div className="project-detail__back-row">
          <Link className="text-link" href="/#work">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to selected work
          </Link>
          <span className="eyebrow">Case study / {String(projectIndex + 1).padStart(2, "0")}</span>
        </div>

        <section className="project-detail__hero" aria-labelledby="project-title">
          <div className="project-detail__copy">
            <span className="eyebrow">{project.eyebrow}</span>
            <h1 id="project-title">{project.title}</h1>
            <p>{project.description}</p>
            <div className="tag-list" aria-label={`${project.title} categories`}>
              {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
            </div>
            {project.liveUrl || project.sourceUrl ? (
              <div className="project-detail__actions">
                {project.liveUrl ? (
                  <a className="project-detail__action" href={project.liveUrl} target="_blank" rel="noreferrer">
                    View live site <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                ) : null}
                {project.sourceUrl ? (
                  <a
                    className="project-detail__action"
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    View source code <GitBranch aria-hidden="true" size={16} />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="project-detail__cover">
            <Image src={project.cover.src} alt={project.cover.alt} fill priority sizes="(max-width: 680px) 88vw, 52vw" />
            <span className="project-detail__cover-stamp">{String(projectIndex + 1).padStart(2, "0")}</span>
          </div>
        </section>

        <ProjectGallery title={project.title} images={project.gallery} />

        <nav className="project-detail__pagination" aria-label="Project navigation">
          <Link className="project-switch project-switch--previous" href={`/projects/${previousProject.id}`}>
            <ArrowLeft aria-hidden="true" size={18} />
            <span><small>Previous project</small>{previousProject.title}</span>
          </Link>
          <Link className="project-switch project-switch--next" href={`/projects/${nextProject.id}`}>
            <span><small>Next project</small>{nextProject.title}</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </nav>

        <Link className="project-detail__home-link" href="/#contact">
          Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </main>
    </div>
  );
}
