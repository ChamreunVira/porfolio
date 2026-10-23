import { ChevronDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";

function ExperienceTimeline() {
  return (
    <section className="cv-timeline-section" aria-labelledby="experience-title">
      <div className="cv-timeline-section__intro">
        <span className="eyebrow">01 / Experience</span>
        <h2 id="experience-title">Where I&apos;ve been putting the work in.</h2>
      </div>
      <div className="timeline" aria-label="Experience timeline">
        {portfolio.experience.map((experience, index) => (
          <article className="timeline-item" key={experience.title}>
            <div className="timeline-item__marker">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-item__card timeline-item__card--experience">
              <div className="timeline-item__header">
                <div>
                  <span className="timeline-item__type">Experience</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.organization}</p>
                </div>
                <span className="timeline-item__period">{experience.period}</span>
              </div>
              <details className="timeline-item__details">
                <summary>
                  <span>Read more about this role</span>
                  <ChevronDown aria-hidden="true" size={17} />
                </summary>
                <div className="timeline-item__details-body">
                  <p>{experience.description}</p>
                  <div className="tag-list" aria-label="Experience technologies">
                    {experience.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
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
    <section className="cv-timeline-section" aria-labelledby="education-title">
      <div className="cv-timeline-section__intro">
        <span className="eyebrow">02 / Education</span>
        <h2 id="education-title">The foundations behind the practice.</h2>
      </div>
      <div className="timeline" aria-label="Education timeline">
        {portfolio.education.map((education, index) => (
          <article className="timeline-item" key={education.institution}>
            <div className="timeline-item__marker">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-item__card timeline-item__card--education">
              <div className="timeline-item__header">
                <div>
                  <span className="timeline-item__type">Education</span>
                  <h3>{education.institution}</h3>
                  <p>{education.program}</p>
                </div>
                <span className="timeline-item__period">{education.period}</span>
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
    <div className="cv-profile-timelines">
      <ExperienceTimeline />
      <EducationTimeline />
    </div>
  );
}
