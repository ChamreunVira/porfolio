import Image from 'next/image';
import { ArrowDown, ArrowUpRight, GitBranch, MoveUpRight, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillsPanel } from '@/components/SkillsPanel';
import { portfolio } from '@/data/portfolio';
import { currentYear } from '@/utils';

const frameClass =
  'mx-auto w-[min(calc(100%-48px),var(--max-width))] max-[680px]:w-[min(calc(100%-32px),var(--max-width))]';
const eyebrowClass = 'font-mono text-[0.68rem] uppercase tracking-[0.08em]';
const buttonClass =
  'inline-flex min-h-[50px] shrink-0 items-center justify-center gap-[11px] whitespace-nowrap border-2 border-[var(--ink)] px-[17px] py-[13px] text-[0.8rem] font-extrabold leading-none transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none';
const textLinkClass =
  'inline-flex items-center gap-[7px] border-b-[1.5px] border-[var(--ink)] pb-[3px] text-[0.8rem] font-extrabold [&_svg]:transition-transform [&_svg]:duration-150 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5';
const tickerItems = ['Curious by default', 'Useful by design', 'Made in Cambodia'];

export default function Home() {
  return (
    <div id="top" className="overflow-hidden">
      <Navbar />

      <main>
        <section
          className={`${frameClass} relative flex min-h-[780px] flex-col justify-between pb-16 pt-40`}
          aria-labelledby="hero-title"
        >
          <div className="grid flex-1 grid-cols-[minmax(0,1.1fr)_minmax(370px,0.9fr)] items-center gap-[clamp(48px,8vw,124px)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)] max-[900px]:gap-[45px] max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-[58px]">
            <div className="relative z-[1] max-[680px]:pb-0">
              <div className="flex animate-[intro-in_500ms_cubic-bezier(0.22,1,0.36,1)_both] items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
                <span
                  className="inline-block size-[9px] border-[1.5px] border-[var(--ink)] bg-[var(--green)] shadow-[2px_2px_0_var(--ink)]"
                  aria-hidden="true"
                />
                <span>{portfolio.role}</span>
                <span className="ml-[7px] text-[var(--muted)]">2026</span>
              </div>
              <h1
                id="hero-title"
                className="my-[28px] mb-[25px] max-w-[700px] animate-[intro-in_700ms_80ms_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(4.5rem,9.5vw,9.25rem)] font-black leading-[0.84] tracking-[-0.09em] max-[900px]:text-[clamp(4rem,10vw,6.5rem)] max-[680px]:mt-[25px] max-[680px]:text-[clamp(4.25rem,19vw,7.4rem)]"
              >
                Build with
                <span className="block translate-x-[0.3em] text-[var(--pink)] [-webkit-text-stroke:2px_var(--ink)] max-[680px]:translate-x-[0.08em]">
                  {' '}
                  intention.
                </span>
              </h1>
              <p className="m-0 max-w-[420px] animate-[intro-in_700ms_160ms_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(1.02rem,1.6vw,1.2rem)] leading-[1.55] text-[var(--muted)]">
                I&apos;m <strong className="text-[var(--ink)]">{portfolio.name}</strong> —{' '}
                {portfolio.intro.toLowerCase()}
              </p>
              <div className="mt-[34px] flex animate-[intro-in_700ms_240ms_cubic-bezier(0.22,1,0.36,1)_both] flex-wrap items-center gap-[27px]">
                <a
                  className={`${buttonClass} text-white bg-[var(--ink)] text-[var(--paper)] shadow-[4px_4px_0_var(--pink)]`}
                  href="#work"
                >
                  <span className="text-white">See the work</span>
                  <ArrowDown aria-hidden="true" size={18} className="text-white" />
                </a>
                <a className={textLinkClass} href="#contact">
                  Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </div>

            <div
              className="group/hero-image relative w-full max-w-[500px] justify-self-end p-[21px_20px_27px_0] animate-[intro-in_800ms_180ms_cubic-bezier(0.22,1,0.36,1)_both] before:absolute before:inset-0 before:left-5 before:z-[-1] before:translate-x-3 before:translate-y-3 before:border-2 before:border-[var(--ink)] before:bg-[var(--blue)] max-[680px]:ml-auto max-[680px]:w-[calc(100%-27px)] max-[680px]:pt-[15px]"
              aria-label="Portrait of Chamreun Vira"
            >
              <div className="absolute -left-[13px] -top-[3px] z-[2] flex origin-top-left items-center gap-[7px] font-mono text-[0.68rem] uppercase tracking-[0.08em] [transform:rotate(-90deg)_translateX(-100%)] max-[680px]:left-[-3px]">
                01 / hello
              </div>
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[var(--ink)] bg-[var(--blue)]">
                <Image
                  src="/assets/ChamreunVira_Profile_Forma_-4x6.png"
                  alt="Portrait of Chamreun Vira"
                  fill
                  className="object-cover object-[center_top] transition-transform duration-500 ease-out group-hover/hero-image:scale-[1.02]"
                  priority
                  sizes="(max-width: 768px) 82vw, 42vw"
                />
                <span className="absolute bottom-[15px] right-[15px] grid size-[49px] rotate-[-7deg] place-items-center border-2 border-[var(--ink)] bg-[var(--yellow)] font-mono text-[0.72rem] font-extrabold">
                  CV
                </span>
              </div>
              <div className="absolute bottom-1 right-[11px] flex items-center gap-[7px] font-mono text-[0.68rem] uppercase tracking-[0.08em]">
                <span>digital / human</span>
                <MoveUpRight aria-hidden="true" size={16} />
              </div>
              <div
                className="absolute bottom-[21%] left-[-62px] grid size-[94px] rotate-[-11deg] place-items-center gap-0.5 border-2 border-[var(--ink)] bg-[var(--yellow)] p-2 text-center font-mono text-[0.65rem] uppercase leading-[1.05] shadow-[4px_4px_0_var(--ink)] max-[680px]:bottom-[13%] max-[680px]:left-[-24px] max-[680px]:size-[76px] max-[680px]:text-[0.55rem]"
                aria-hidden="true"
              >
                <Sparkles size={19} />
                <span>
                  make it
                  <br />
                  clear
                </span>
              </div>
            </div>
          </div>
          <a
            className="mt-[46px] inline-flex w-fit animate-[intro-in_600ms_420ms_cubic-bezier(0.22,1,0.36,1)_both] items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[var(--muted)] transition-colors duration-150 hover:text-[var(--ink)] max-[680px]:mt-[35px]"
            href="#about"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="[animation:nudge_1.7s_ease-in-out_infinite]" aria-hidden="true" size={16} />
          </a>
        </section>

        <div
          className="group/ticker overflow-hidden border-y-2 border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] focus-visible:outline-offset-[-4px]"
          aria-label="Portfolio themes"
          aria-describedby="ticker-description"
          role="region"
          tabIndex={0}
        >
          <p className="sr-only" id="ticker-description">
            Curious by default. Useful by design. Made in Cambodia.
          </p>
          <div
            className="flex w-max text-[0.82rem] font-extrabold tracking-[-0.02em] [animation:ticker_28s_linear_infinite] [will-change:transform] group-hover/ticker:[animation-play-state:paused] group-focus-within/ticker:[animation-play-state:paused] max-[680px]:text-[0.78rem]"
            aria-hidden="true"
          >
            {[0, 1].map((sequence) => (
              <div className="flex shrink-0 items-center gap-[25px] py-3.5 pr-[25px] max-[680px]:py-3" key={sequence}>
                {tickerItems.map((item) => (
                  <span className="flex shrink-0 items-center gap-[25px]" key={`${sequence}-${item}`}>
                    <span>{item}</span>
                    <span className="text-[1.05rem] text-[var(--yellow)]">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section
          id="about"
          className={`${frameClass} py-[116px] max-[680px]:py-[82px]`}
          aria-labelledby="about-title"
        >
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="A little context"
              title="About the person behind the pixels."
              titleId="about-title"
              description="A compact introduction, without the performance."
            />
            <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(230px,0.64fr)_minmax(240px,0.7fr)] items-start gap-[clamp(28px,5vw,75px)] pt-[55px] max-[900px]:grid-cols-[1fr_0.7fr] max-[900px]:gap-10 max-[680px]:flex max-[680px]:flex-col max-[680px]:gap-[50px] max-[680px]:pt-10">
            <div className="max-[680px]:order-1">
              <p className="m-0 max-w-[610px] text-[clamp(2.2rem,4.5vw,4.4rem)] leading-[0.96] tracking-[-0.07em]">
                Backend-minded.{' '}
                <span className="bg-[var(--yellow)] px-[0.1em] [box-decoration-break:clone]">Product curious.</span>
              </p>
              <p className="mb-0 mt-[31px] max-w-[450px] text-base leading-[1.65] text-[var(--muted)]">
                {portfolio.description}
              </p>
              <div className="mt-12 flex items-center gap-3 font-mono text-[0.68rem] uppercase">
                <span className="h-px w-[47px] bg-[var(--ink)]" aria-hidden="true" />
                <span>{portfolio.role}</span>
              </div>
              <a
                className={`${textLinkClass} mt-[26px]`}
                href="/assets/cv/Chamreun_Vira_Backend_Developer_Intern_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Read the full CV <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="relative p-[10px_10px_23px_0] max-[680px]:order-2 max-[680px]:mx-auto max-[680px]:w-[min(88%,340px)] before:absolute before:inset-0 before:bottom-[14px] before:left-[9px] before:z-[-1] before:rotate-[3deg] before:border-2 before:border-[var(--ink)] before:bg-[var(--pink)]">
              <div className="relative aspect-[3/4] overflow-hidden border-2 border-[var(--ink)] bg-[var(--blue)]">
                <Image
                  src="/assets/ChamreunVira_Profile.png"
                  alt="Chamreun Vira on a sunny balcony"
                  fill
                  className="object-cover object-[57%_center] transition-transform duration-300 ease-out hover:scale-[1.035]"
                  sizes="(max-width: 768px) 88vw, 31vw"
                />
              </div>
              <span className="mt-[13px] block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--muted)]">
                A moment between ideas.
              </span>
            </div>
            <div className="border-t-2 border-[var(--ink)] pt-1 max-[900px]:col-span-full max-[900px]:grid max-[900px]:grid-cols-3 max-[900px]:gap-[15px] max-[900px]:border-t-0 max-[680px]:order-3 max-[680px]:block">
              <div className="grid grid-cols-[31px_1fr] gap-[7px] border-b border-[var(--ink)] py-[17px] max-[900px]:block max-[900px]:border-b-0 max-[900px]:border-t-2 max-[680px]:grid max-[680px]:grid-cols-[30px_1fr] max-[680px]:border-t max-[680px]:py-[15px]">
                <span className="font-mono text-[0.66rem] text-[var(--muted)]">01</span>
                <strong className="text-[0.85rem] max-[900px]:mb-2 max-[900px]:block">Role</strong>
                <em className="col-start-2 text-[0.84rem] not-italic text-[var(--muted)] max-[900px]:mb-2 max-[900px]:block max-[680px]:col-start-2 max-[680px]:mb-0">
                  {portfolio.role}
                </em>
              </div>
              <div className="grid grid-cols-[31px_1fr] gap-[7px] border-b border-[var(--ink)] py-[17px] max-[900px]:block max-[900px]:border-b-0 max-[900px]:border-t-2 max-[680px]:grid max-[680px]:grid-cols-[30px_1fr] max-[680px]:border-t max-[680px]:py-[15px]">
                <span className="font-mono text-[0.66rem] text-[var(--muted)]">02</span>
                <strong className="text-[0.85rem] max-[900px]:mb-2 max-[900px]:block">Studies</strong>
                <em className="col-start-2 text-[0.84rem] not-italic text-[var(--muted)] max-[900px]:mb-2 max-[900px]:block max-[680px]:col-start-2 max-[680px]:mb-0">
                  Bachelor of Computer Science
                </em>
              </div>
              <div className="grid grid-cols-[31px_1fr] gap-[7px] border-b border-[var(--ink)] py-[17px] max-[900px]:block max-[900px]:border-b-0 max-[900px]:border-t-2 max-[680px]:grid max-[680px]:grid-cols-[30px_1fr] max-[680px]:border-t max-[680px]:py-[15px]">
                <span className="font-mono text-[0.66rem] text-[var(--muted)]">03</span>
                <strong className="text-[0.85rem] max-[900px]:mb-2 max-[900px]:block">Based</strong>
                <em className="col-start-2 text-[0.84rem] not-italic text-[var(--muted)] max-[900px]:mb-2 max-[900px]:block max-[680px]:col-start-2 max-[680px]:mb-0">
                  {portfolio.contact.location}
                </em>
              </div>
            </div>
            </div>
            <div className="mt-12">
              <a className={`${buttonClass} bg-[var(--ink)] text-white shadow-[4px_4px_0_var(--pink)]`} href="/about">
                Full Profile
                <ArrowUpRight className="text-white" aria-hidden="true" size={17} />
              </a>
            </div>
          </Reveal>
        </section>

        <section
          className={`${frameClass} pb-[116px] max-[680px]:pb-[82px]`}
          aria-labelledby="skills-title"
        >
          <Reveal>
            <SkillsPanel />
          </Reveal>
        </section>

        <section
          id="work"
          className={`${frameClass} py-[116px] max-[680px]:py-[82px]`}
          aria-labelledby="work-title"
        >
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Selected work"
              title="Small archive, strong point of view."
              titleId="work-title"
              description="A workbench for the things already in motion."
            />
          </Reveal>
          <div className="grid grid-cols-2 gap-[25px] pt-[55px] max-[680px]:block max-[680px]:pt-10">
            {portfolio.projects.map((project, index) => (
              <Reveal className="h-full" key={project.title}>
                <ProjectCard project={project} number={String(index + 1).padStart(2, '0')} />
              </Reveal>
            ))}
            <Reveal className="col-span-full">
              <div className="flex min-h-[220px] items-end justify-between gap-5 border-2 border-[var(--ink)] bg-[var(--green)] p-[27px] shadow-[7px_7px_0_var(--ink)] max-[680px]:mb-0 max-[680px]:min-h-[170px]">
                <span className="self-start text-[2.4rem]">✳</span>
                <p className="m-0 max-w-[190px] text-[1.05rem] font-extrabold leading-[1.15] tracking-[-0.04em]">
                  More work will live here as it is ready to be shared.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className={`${frameClass} py-[116px] max-[680px]:py-[82px]`}
          aria-labelledby="principles-title"
        >
          <Reveal>
            <div className="relative grid grid-cols-[0.27fr_1fr_0.3fr] gap-[30px] overflow-hidden bg-[var(--ink)] p-[clamp(28px,5vw,60px)] text-[var(--paper)] max-[900px]:grid-cols-[50px_1fr] max-[680px]:block max-[680px]:p-[27px_22px_35px]">
            <div className="font-mono text-[0.7rem] text-[var(--yellow)]">03</div>
            <div className="max-[680px]:mt-7">
              <span className={eyebrowClass}>Working principles</span>
              <h2
                className="mb-[42px] mt-5 max-w-[600px] text-[clamp(2.4rem,5.2vw,5rem)] leading-[0.9] tracking-[-0.08em] text-[var(--paper)] max-[680px]:mb-[35px]"
                id="principles-title"
              >
                Less decoration. More direction.
              </h2>
              <div className="border-t border-[var(--paper)]">
                <div className="grid grid-cols-[40px_1fr_1.2fr] items-center gap-3.5 border-b border-[#5b574e] py-[18px] max-[680px]:grid-cols-[35px_1fr] max-[680px]:gap-[9px]">
                  <span className={eyebrowClass + ' text-[var(--yellow)]'}>01</span>
                  <strong className="text-[0.9rem]">Make it clear.</strong>
                  <p className="m-0 text-[0.8rem] text-[#c9c1af] max-[680px]:col-start-2">
                    Clarity is a feature, not a finishing touch.
                  </p>
                </div>
                <div className="grid grid-cols-[40px_1fr_1.2fr] items-center gap-3.5 border-b border-[#5b574e] py-[18px] max-[680px]:grid-cols-[35px_1fr] max-[680px]:gap-[9px]">
                  <span className={eyebrowClass + ' text-[var(--yellow)]'}>02</span>
                  <strong className="text-[0.9rem]">Keep it human.</strong>
                  <p className="m-0 text-[0.8rem] text-[#c9c1af] max-[680px]:col-start-2">
                    Technology should make the next step feel easier.
                  </p>
                </div>
                <div className="grid grid-cols-[40px_1fr_1.2fr] items-center gap-3.5 border-b border-[#5b574e] py-[18px] max-[680px]:grid-cols-[35px_1fr] max-[680px]:gap-[9px]">
                  <span className={eyebrowClass + ' text-[var(--yellow)]'}>03</span>
                  <strong className="text-[0.9rem]">Stay curious.</strong>
                  <p className="m-0 text-[0.8rem] text-[#c9c1af] max-[680px]:col-start-2">
                    The best details usually begin with a better question.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="grid size-[145px] rotate-[14deg] place-items-center place-self-center border-2 border-[var(--yellow)] text-[5rem] text-[var(--yellow)] max-[900px]:absolute max-[900px]:right-[30px] max-[900px]:top-[27px] max-[900px]:size-[90px] max-[900px]:text-[3rem] max-[680px]:right-5 max-[680px]:top-[19px] max-[680px]:size-[65px] max-[680px]:text-[2rem]"
              aria-hidden="true"
            >
              <span>✦</span>
            </div>
            </div>
          </Reveal>
        </section>

        <section
          id="contact"
          className={`${frameClass} flex flex-col items-center border-2 border-[var(--ink)] bg-[var(--pink)] px-4 py-[135px] text-center max-[680px]:w-[min(calc(100%-32px),var(--max-width))] max-[680px]:px-[18px] max-[680px]:py-[90px]`}
          aria-labelledby="contact-title"
        >
          <Reveal className="flex w-full flex-col items-center">
          <div className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
            <span
              className="inline-block size-[9px] border-[1.5px] border-[var(--ink)] bg-[var(--green)] shadow-[2px_2px_0_var(--ink)]"
              aria-hidden="true"
            />{' '}
            Open to the next good idea
          </div>
          <h2
            className="mb-5 mt-8 text-[clamp(3.5rem,9vw,8.7rem)] leading-[0.8] tracking-[-0.095em] max-[680px]:text-[clamp(3.7rem,17vw,6rem)]"
            id="contact-title"
          >
            Let&apos;s make
            <br />
            <span className="text-[var(--paper)] [-webkit-text-stroke:2px_var(--ink)]">something useful.</span>
          </h2>
          <p className="mb-8 mt-0 max-w-[405px] text-[0.98rem] leading-[1.55]">
            Have a project, a question, or just a half-formed idea? Reach out directly or find me on GitHub.
          </p>
          <div className="-mt-2 mb-[30px] flex flex-wrap justify-center gap-x-7 gap-y-3 font-mono text-[0.7rem] uppercase">
            <a className="border-b border-[var(--ink)] pb-[3px]" href={`mailto:${portfolio.contact.email}`}>
              {portfolio.contact.email}
            </a>
            <a
              className="border-b border-[var(--ink)] pb-[3px]"
              href={`tel:${portfolio.contact.phone.replaceAll(' ', '')}`}
            >
              {portfolio.contact.phone}
            </a>
          </div>
          <a
            className={`${buttonClass} bg-[var(--paper)] text-[var(--ink)] shadow-[4px_4px_0_var(--yellow)]`}
            href={portfolio.socials[0].href}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch aria-hidden="true" size={19} />
            <span>Find me on GitHub</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          </Reveal>
        </section>
      </main>

      <footer className={`${frameClass} py-[29px] pb-6`}>
        <div className="flex items-center justify-between gap-5 border-b-2 border-[var(--ink)] pb-[27px] max-[680px]:flex-wrap max-[680px]:items-start">
          <a
            className="inline-flex items-center gap-[11px] text-[0.86rem] font-extrabold tracking-[-0.03em]"
            href="#top"
            aria-label="Back to top"
          >
            <span className="grid size-[31px] place-items-center bg-[var(--ink)] font-mono text-[0.63rem] tracking-[-0.08em] text-[var(--paper)]">
              CV
            </span>
            <span className="whitespace-nowrap">Chamreun Vira</span>
          </a>
          <span className="text-[0.77rem] text-[var(--muted)] max-[680px]:order-3 max-[680px]:mt-2 max-[680px]:basis-full">
            Built with intention, one detail at a time.
          </span>
          <a
            className="inline-flex items-center gap-2 text-[0.78rem] font-extrabold [&_svg]:transition-transform [&_svg]:duration-150 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5"
            href="#top"
          >
            Back to top <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="flex justify-between gap-5 pt-5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--muted)] max-[680px]:flex-col max-[680px]:gap-2.5 max-[680px]:leading-[1.4]">
          <span>
            © {currentYear} {portfolio.name}
          </span>
          <span>Personal portfolio / {portfolio.handle}</span>
        </div>
      </footer>
    </div>
  );
}
