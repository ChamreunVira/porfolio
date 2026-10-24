import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { portfolio } from '@/data/portfolio';

function ExperienceTimeline() {
  return (
    <section
      className="grid grid-cols-[minmax(210px,0.38fr)_minmax(0,1fr)] gap-x-[clamp(35px,7vw,105px)] border-t-2 border-[var(--ink)] pt-[29px] max-[900px]:grid-cols-1 max-[900px]:gap-y-[30px] max-[680px]:gap-y-[25px]"
      aria-labelledby="experience-title"
    >
      <div>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">01 / Experience</span>
        <h2
          className="mb-0 mt-5 max-w-[285px] text-[clamp(1.9rem,3vw,3rem)] leading-[0.95] tracking-[-0.07em] max-[680px]:max-w-[330px]"
          id="experience-title"
        >
          Where I&apos;ve been putting the work in.
        </h2>
      </div>
      <div
        className="relative grid gap-[17px] before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-[var(--ink)] max-[680px]:before:left-4"
        aria-label="Experience timeline"
      >
        {portfolio.experience.map((experience, index) => (
          <article
            className="relative grid grid-cols-[42px_minmax(0,1fr)] items-start gap-4 max-[680px]:grid-cols-[34px_minmax(0,1fr)] max-[680px]:gap-2.5"
            key={experience.title}
          >
            <div className="relative z-[1] grid size-[42px] place-items-center border-2 border-[var(--ink)] bg-[var(--paper)] font-mono text-[0.63rem] max-[680px]:size-[34px]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="border-2 border-[var(--ink)] bg-[var(--yellow)] px-6 py-[22px] max-[680px]:px-[17px] max-[680px]:py-[19px]">
              <div className="flex items-start justify-between gap-[25px] max-[680px]:block">
                <div>
                  <span className="font-mono text-[0.63rem] uppercase tracking-[0.08em] text-[var(--muted)]">
                    Experience
                  </span>
                  <h3 className="mb-[7px] mt-2.5 max-w-[560px] text-[clamp(1.35rem,2.6vw,2.35rem)] leading-[0.95] tracking-[-0.06em]">
                    {experience.title}
                  </h3>
                  <p className="m-0 max-w-[520px] text-[0.86rem] leading-[1.45] text-[var(--muted)]">
                    {experience.organization}
                  </p>
                </div>
                <span className="shrink-0 text-right font-mono text-[0.64rem] uppercase tracking-[0.05em] text-[var(--muted)] max-[680px]:mt-[17px] max-[680px]:block max-[680px]:text-left">
                  {experience.period}
                </span>
              </div>
              <details className="group/details mt-[23px] border-t border-[var(--ink)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[15px] pt-[15px] text-[0.76rem] font-extrabold marker:hidden">
                  <span>Read more about this role</span>
                  <ChevronDown
                    className="transition-transform duration-150 group-open/details:rotate-180"
                    aria-hidden="true"
                    size={17}
                  />
                </summary>
                <div className="pt-4">
                  <p className="mb-[18px] mt-0 max-w-[640px] text-[0.86rem] leading-[1.6]">{experience.description}</p>
                  <div className="flex flex-wrap gap-1.5" aria-label="Experience technologies">
                    {experience.technologies.map((technology) => (
                      <span
                        className="border border-[var(--ink)] bg-[var(--paper)] px-2 py-1.5 font-mono text-[0.61rem]"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationTimeline() {
  return (
    <section
      className="grid grid-cols-[minmax(210px,0.38fr)_minmax(0,1fr)] gap-x-[clamp(35px,7vw,105px)] border-t-2 border-[var(--ink)] pt-[29px] max-[900px]:grid-cols-1 max-[900px]:gap-y-[30px] max-[680px]:gap-y-[25px]"
      aria-labelledby="education-title"
    >
      <div>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em]">02 / Education</span>
        <h2
          className="mb-0 mt-5 max-w-[285px] text-[clamp(1.9rem,3vw,3rem)] leading-[0.95] tracking-[-0.07em] max-[680px]:max-w-[330px]"
          id="education-title"
        >
          The foundations behind the practice.
        </h2>
      </div>
      <div
        className="relative grid gap-[17px] before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-[var(--ink)] max-[680px]:before:left-4"
        aria-label="Education timeline"
      >
        {portfolio.education.map((education, index) => (
          <article
            className="relative grid grid-cols-[42px_minmax(0,1fr)] items-start gap-4 max-[680px]:grid-cols-[34px_minmax(0,1fr)] max-[680px]:gap-2.5"
            key={education.institution}
          >
            <div className="relative z-[1] grid size-[42px] place-items-center border-2 border-[var(--ink)] bg-[var(--paper)] font-mono text-[0.63rem] max-[680px]:size-[34px]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="border-2 border-[var(--ink)] bg-[var(--paper)] px-6 py-[22px] max-[680px]:px-[17px] max-[680px]:py-[19px]">
              <div className="flex items-start justify-between gap-[25px] max-[680px]:block">
                <div>
                  <span className="font-mono text-[0.63rem] uppercase tracking-[0.08em] text-[var(--muted)]">
                    Education
                  </span>
                  <h3 className="mb-[7px] mt-2.5 max-w-[560px] text-[clamp(1.35rem,2.6vw,2.35rem)] leading-[0.95] tracking-[-0.06em]">
                    {education.institution}
                  </h3>
                  <p className="m-0 max-w-[520px] text-[0.86rem] leading-[1.45] text-[var(--muted)]">
                    {education.program}
                  </p>
                </div>
                <span className="shrink-0 text-right font-mono text-[0.64rem] uppercase tracking-[0.05em] text-[var(--muted)] max-[680px]:mt-[17px] max-[680px]:block max-[680px]:text-left">
                  {education.period}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutTimeline() {
  return (
    <div className="mt-[76px] grid gap-[86px] max-[680px]:mt-[54px] max-[680px]:gap-[60px]">
      <Reveal>
        <ExperienceTimeline />
      </Reveal>
      <Reveal>
        <EducationTimeline />
      </Reveal>
    </div>
  );
}
