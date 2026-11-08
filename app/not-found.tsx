import Link from 'next/link';
import { Annotation } from '@/components/ui/Annotation';

export default function NotFound() {
  return (
    <section className="page-container py-24">
      <Annotation>page torn out of the notebook</Annotation>
      <h1 className="mt-2 font-hand text-hand-hero text-ink">404</h1>
      <p className="mt-4 max-w-136 font-sans text-body text-ink-soft">
        That page doesn&apos;t exist. Head back to the projects and pick another one.
      </p>
      <Link
        href="/#projects"
        className="mt-6 inline-flex border border-ink bg-ink px-5 py-2.5 font-mono text-mono-tag text-paper shadow-crisp-sm"
      >
        Back to projects →
      </Link>
    </section>
  );
}
