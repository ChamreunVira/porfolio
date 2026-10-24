import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, GitBranch } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Reveal } from '@/components/Reveal';
import { portfolio } from '@/data/portfolio';

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

  const previousProject =
    portfolio.projects[(projectIndex - 1 + portfolio.projects.length) % portfolio.projects.length];
  const nextProject = portfolio.projects[(projectIndex + 1) % portfolio.projects.length];

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="mx-auto w-[min(calc(100%-48px),var(--max-width))] pb-[90px] pt-[145px] max-[680px]:w-[min(calc(100%-32px),var(--max-width))] max-[680px]:pb-[55px] max-[680px]:pt-[120px]">
        <div className="flex items-center justify-between gap-5 border-b-2 border-[var(--ink)] pb-[23px] max-[680px]:flex-col-reverse max-[680px]:items-start max-[680px]:gap-4">
          <Link
            className="inline-flex items-center gap-[7px] border-b-[1.5px] border-[var(--ink)] pb-[3px] text-[0.8rem] font-extrabold"
            href="/#work"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to selected work
          </Link>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">
            Case study / {String(projectIndex + 1).padStart(2, '0')}
          </span>
        </div>

        <section
          className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-center gap-[clamp(35px,7vw,100px)] py-[75px_100px] max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-12 max-[680px]:py-[54px_70px]"
          aria-labelledby="project-title"
        >
          <Reveal className="col-span-full grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-center gap-[clamp(35px,7vw,100px)] max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-12">
            <div className="min-w-0">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">{project.eyebrow}</span>
              <h1
                className="mb-[25px] mt-[19px] max-w-full text-[clamp(3.3rem,7.5vw,7.8rem)] leading-[0.86] tracking-[-0.09em] [overflow-wrap:break-word] max-[680px]:text-[clamp(3.7rem,17vw,6.5rem)]"
                id="project-title"
              >
                {project.title}
              </h1>
              <p className="mb-7 mt-0 max-w-[450px] text-[1.05rem] leading-[1.6] text-[var(--muted)]">
                {project.description}
              </p>
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
              {project.liveUrl || project.sourceUrl ? (
                <div className="mt-[25px] flex flex-wrap gap-x-5 gap-y-3">
                  {project.liveUrl ? (
                    <a
                      className="inline-flex items-center gap-[7px] border-b border-[var(--ink)] pb-1 text-[0.78rem] font-extrabold"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View live site <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      className="inline-flex items-center gap-[7px] border-b border-[var(--ink)] pb-1 text-[0.78rem] font-extrabold"
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
            <div className="group/project-cover relative aspect-[16/10] overflow-hidden border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[7px_7px_0_var(--ink)] max-[680px]:aspect-[4/3]">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover/project-cover:scale-[1.02]"
                sizes="(max-width: 680px) 88vw, 52vw"
              />
              <span className="absolute bottom-[17px] right-[17px] grid size-[45px] place-items-center border-2 border-[var(--ink)] bg-[var(--yellow)] font-mono text-[0.7rem] font-extrabold">
                {String(projectIndex + 1).padStart(2, '0')}
              </span>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <ProjectGallery title={project.title} images={project.gallery} />
        </Reveal>

        <nav
          className="mt-20 grid grid-cols-2 gap-5 border-y-2 border-[var(--ink)] max-[680px]:gap-2.5"
          aria-label="Project navigation"
        >
          <Link
            className="group/previous flex min-h-[103px] items-center gap-[15px] text-[1.05rem] font-extrabold transition-colors duration-150 hover:text-[var(--muted)] max-[680px]:min-h-[93px] max-[680px]:gap-2 max-[680px]:text-[0.84rem] [&_svg]:transition-transform [&_svg]:duration-150 group-hover/previous:[&_svg]:-translate-x-1"
            href={`/projects/${previousProject.id}`}
          >
            <ArrowLeft aria-hidden="true" size={18} />
            <span>
              <small className="mb-[7px] block font-mono text-[0.62rem] font-normal uppercase tracking-[0.07em] text-[var(--muted)]">
                Previous project
              </small>
              {previousProject.title}
            </span>
          </Link>
          <Link
            className="group/next flex min-h-[103px] items-center justify-end gap-[15px] text-right text-[1.05rem] font-extrabold transition-colors duration-150 hover:text-[var(--muted)] max-[680px]:min-h-[93px] max-[680px]:gap-2 max-[680px]:text-[0.84rem] [&_svg]:transition-transform [&_svg]:duration-150 group-hover/next:[&_svg]:translate-x-1"
            href={`/projects/${nextProject.id}`}
          >
            <span>
              <small className="mb-[7px] block font-mono text-[0.62rem] font-normal uppercase tracking-[0.07em] text-[var(--muted)]">
                Next project
              </small>
              {nextProject.title}
            </span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </nav>

        <Link
          className="mx-auto mt-[55px] flex w-fit items-center gap-[7px] border-b border-[var(--ink)] pb-1 text-[0.8rem] font-extrabold"
          href="/#contact"
        >
          Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </main>
    </div>
  );
}
