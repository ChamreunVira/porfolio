import Image from 'next/image';
import { ArrowDown, ArrowUpRight, GitBranch, MoveUpRight, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillsPanel } from '@/components/SkillsPanel';
import { portfolio } from '@/data/portfolio';
import { currentYear } from '@/utils';

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <Navbar />

      <main>
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero__grid">
            <div className="hero__copy">
              <div className="eyebrow-row">
                <span className="status-dot" aria-hidden="true" />
                <span className="eyebrow">{portfolio.role}</span>
                <span className="eyebrow-row__year">2026</span>
              </div>
              <h1 id="hero-title" className="hero__title">
                Build with
                <span className="hero__title-accent"> intention.</span>
              </h1>
              <p className="hero__lead">
                I&apos;m <strong>{portfolio.name}</strong> — {portfolio.intro.toLowerCase()}
              </p>
              <div className="hero__actions">
                <a className="button button--dark" href="#work">
                  <span>See the work</span>
                  <ArrowDown aria-hidden="true" size={18} />
                </a>
                <a className="text-link" href="#contact">
                  Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </div>

            <div className="hero__visual" aria-label="Portrait of Chamreun Vira">
              <div className="hero__visual-note hero__visual-note--top">01 / hello</div>
              <div className="portrait-frame portrait-frame--hero">
                <Image
                  src="/assets/ChamreunVira_Profile_Forma_-4x6.png"
                  alt="Portrait of Chamreun Vira"
                  fill
                  priority
                  sizes="(max-width: 768px) 82vw, 42vw"
                />
                <span className="portrait-frame__stamp">CV</span>
              </div>
              <div className="hero__visual-note hero__visual-note--bottom">
                <span>digital / human</span>
                <MoveUpRight aria-hidden="true" size={16} />
              </div>
              <div className="hero__sticker" aria-hidden="true">
                <Sparkles size={19} />
                <span>
                  make it
                  <br />
                  clear
                </span>
              </div>
            </div>
          </div>
          <a className="hero__scroll" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </section>

        <div className="ticker" aria-label="Portfolio themes">
          <div className="ticker__track">
            <span>Curious by default</span>
            <span className="ticker__star">✳</span>
            <span>Useful by design</span>
            <span className="ticker__star">✳</span>
            <span>Made in Cambodia</span>
            <span className="ticker__star">✳</span>
            <span>Curious by default</span>
            <span className="ticker__star">✳</span>
            <span>Useful by design</span>
            <span className="ticker__star">✳</span>
            <span>Made in Cambodia</span>
            <span className="ticker__star">✳</span>
          </div>
        </div>

        <section id="about" className="section-frame section-block" aria-labelledby="about-title">
          <SectionHeading
            index="01"
            eyebrow="A little context"
            title="About the person behind the pixels."
            description="A compact introduction, without the performance."
          />
          <div className="about-grid">
            <div className="about-grid__statement">
              <p className="display-copy" id="about-title">
                Backend-minded. <span>Product curious.</span>
              </p>
              <p className="body-copy">{portfolio.description}</p>
              <div className="about-grid__signature">
                <span className="signature-line" aria-hidden="true" />
                <span>{portfolio.role}</span>
              </div>
              <a
                className="text-link about-cv-link"
                href="/assets/cv/Chamreun_Vira_Backend_Developer_Intern_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Read the full CV <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="about-grid__photo">
              <div className="portrait-frame portrait-frame--casual">
                <Image
                  src="/assets/ChamreunVira_Profile.png"
                  alt="Chamreun Vira on a sunny balcony"
                  fill
                  sizes="(max-width: 768px) 88vw, 31vw"
                />
              </div>
              <span className="photo-caption">A moment between ideas.</span>
            </div>
            <div className="about-grid__facts">
              <div className="fact-row">
                <span>01</span>
                <strong>Role</strong>
                <em>{portfolio.role}</em>
              </div>
              <div className="fact-row">
                <span>02</span>
                <strong>Studies</strong>
                <em>Bachelor of Computer Science</em>
              </div>
              <div className="fact-row">
                <span>03</span>
                <strong>Based</strong>
                <em>{portfolio.contact.location}</em>
              </div>
            </div>
          </div>
          <div className="about-profile-link-wrap">
            <a className="button button--dark" href="/about">
              Full Profile
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </section>

        <section className="section-frame section-block section-block--skills" aria-labelledby="skills-title">
          <SkillsPanel />
        </section>

        <section id="work" className="section-frame section-block" aria-labelledby="work-title">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Small archive, strong point of view."
            description="A workbench for the things already in motion."
          />
          <div className="project-grid" id="work-title">
            {portfolio.projects.map((project, index) => (
              <ProjectCard project={project} number={String(index + 1).padStart(2, '0')} key={project.title} />
            ))}
            <div className="project-note">
              <span className="project-note__mark">✳</span>
              <p>More work will live here as it is ready to be shared.</p>
            </div>
          </div>
        </section>

        <section className="section-frame section-block" aria-labelledby="principles-title">
          <div className="principles-card">
            <div className="principles-card__number">03</div>
            <div className="principles-card__content">
              <span className="eyebrow">Working principles</span>
              <h2 id="principles-title">Less decoration. More direction.</h2>
              <div className="principles-list">
                <div>
                  <span>01</span>
                  <strong>Make it clear.</strong>
                  <p>Clarity is a feature, not a finishing touch.</p>
                </div>
                <div>
                  <span>02</span>
                  <strong>Keep it human.</strong>
                  <p>Technology should make the next step feel easier.</p>
                </div>
                <div>
                  <span>03</span>
                  <strong>Stay curious.</strong>
                  <p>The best details usually begin with a better question.</p>
                </div>
              </div>
            </div>
            <div className="principles-card__shape" aria-hidden="true">
              <span>✦</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-frame section-block" aria-labelledby="contact-title">
          <div className="contact__label">
            <span className="status-dot" aria-hidden="true" /> Open to the next good idea
          </div>
          <h2 id="contact-title">
            Let&apos;s make
            <br />
            <span>something useful.</span>
          </h2>
          <p>Have a project, a question, or just a half-formed idea? Reach out directly or find me on GitHub.</p>
          <div className="contact__details">
            <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
            <a href={`tel:${portfolio.contact.phone.replaceAll(' ', '')}`}>{portfolio.contact.phone}</a>
          </div>
          <a className="button button--light" href={portfolio.socials[0].href} target="_blank" rel="noreferrer">
            <GitBranch aria-hidden="true" size={19} />
            <span>Find me on GitHub</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <div className="site-footer__top">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand__mark">CV</span>
            <span className="brand__name">Chamreun Vira</span>
          </a>
          <span className="site-footer__note">Built with intention, one detail at a time.</span>
          <a className="footer-top-link" href="#top">
            Back to top <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>
            © {currentYear} {portfolio.name}
          </span>
          <span>Personal portfolio / {portfolio.handle}</span>
        </div>
      </footer>
    </div>
  );
}
