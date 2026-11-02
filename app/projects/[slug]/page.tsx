import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Annotation } from '@/components/ui/Annotation';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { SketchDivider } from '@/components/ui/SketchDivider';
import { Tape } from '@/components/ui/Tape';
import { TechChip } from '@/components/ui/TechChip';
import { getProjectBySlug, getTechSkills, projects } from '@/data/portfolioData';
import { formatProjectTag } from '@/lib/format';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return { title: project.title, description: project.tagline };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const techStack = getTechSkills(project.techStackIds);
  const nextProject = projects[project.index % projects.length];

  return (
    <article className="page-container pb-20 pt-8">
      <Link href="/#projects" className="font-hand text-3xl text-ink underline-offset-4 hover:underline">
        ← back to projects
      </Link>

      <header className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-mono-tag text-ink-soft">{formatProjectTag(project.index, projects.length)}</p>
          <h1 className="mt-2 font-sans text-title text-ink">{project.title}</h1>
          <p className="mt-2 max-w-136 font-sans text-body text-ink-soft">{project.tagline}</p>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-mono-tag text-paper shadow-crisp-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Live →
          </a>
        ) : null}
      </header>

      <figure className="relative mb-16 mt-12 border border-ink bg-card p-3 shadow-crisp sm:p-4">
        <Tape className="-top-3.5 left-1/2 h-8 w-32 -translate-x-1/2 -rotate-1" />
        <Image
          src={project.gallery[0].src}
          alt={`${project.title} featured screen`}
          width={1920}
          height={1080}
          className="h-auto max-h-[34rem] w-full object-contain"
          priority
        />
        <Annotation className="absolute -bottom-10 right-2" tilt="right">
          the real thing
        </Annotation>
      </figure>

      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <section aria-labelledby="idea-title">
          <h2 id="idea-title" className="font-hand text-hand-heading text-ink">
            // The idea
          </h2>
          <div className="mt-6 space-y-4 font-sans text-body text-ink-soft">
            {project.idea.map((paragraph) => (
              <p key={paragraph} className="max-w-[40rem]">
                {paragraph}
              </p>
            ))}
          </div>
          <h3 className="mb-3 mt-8 font-mono text-mono-tag text-ink-soft">Key user flows</h3>
          <ul className="space-y-2">
            {project.keyFlows.map((flow) => (
              <li key={flow} className="flex gap-3 font-sans text-body-sm text-ink">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-pen" />
                {flow}
              </li>
            ))}
          </ul>
        </section>

        <aside aria-labelledby="built-with-title" className="self-start">
          <div className="border border-ink bg-card p-6 shadow-crisp-sm">
            <h2 id="built-with-title" className="font-hand text-hand-heading text-ink">
              Built with
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TechChip key={tech.id} tech={tech} />
              ))}
            </ul>
          </div>
          <Annotation className="mt-3 pl-2" tilt="right">
            hover a chip, it colors in ✦
          </Annotation>
        </aside>
      </div>

      <div className="my-16">
        <SketchDivider />
      </div>

      <section aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="font-hand text-hand-heading text-ink">
          // More views
        </h2>
        <ImageLightbox images={project.gallery} projectTitle={project.title} />
      </section>

      <nav aria-label="Next project" className="mt-16 border-t border-ink pt-6">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="font-hand text-3xl text-ink underline-offset-4 hover:underline"
        >
          next up: {nextProject.title} →
        </Link>
      </nav>
    </article>
  );
}
