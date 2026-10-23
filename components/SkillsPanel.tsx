import { portfolio } from '@/data/portfolio';

type SkillIconProps = {
  name: string;
};

function SkillIcon({ name }: SkillIconProps) {
  const normalizedName = name.toLowerCase();

  if (['postgresql', 'mysql', 'mongodb'].includes(normalizedName)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v9c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </svg>
    );
  }

  if (['docker', 'docker compose'].includes(normalizedName)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 9h4V5h4v4h4V5h4v5h2c0 4-3 7-8 7H7a4 4 0 0 1-3-2" />
        <path d="M4 13h16M8 5v4M12 5v4M16 5v4" />
      </svg>
    );
  }

  if (['git', 'postman'].includes(normalizedName)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m7 4 10 10-4 4-6-6V4Z" />
        <circle cx="7" cy="4" r="2" />
        <circle cx="13" cy="18" r="2" />
        <circle cx="17" cy="14" r="2" />
      </svg>
    );
  }

  if (['express.js', 'spring boot', 'laravel (basic)', 'rest apis', 'jwt authentication'].includes(normalizedName)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="4" width="16" height="5" />
        <rect x="4" y="15" width="16" height="5" />
        <path d="M8 9v6M12 9v6M16 9v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  );
}

export function SkillsPanel() {
  return (
    <div className="skills-panel">
      <div className="skills-panel__intro">
        <div className="eyebrow-row">
          <span className="skills-panel__intro-icon">
            <SkillIcon name="TypeScript" />
          </span>
          <span className="eyebrow">The toolkit</span>
        </div>
        <h2 id="skills-title">Tools I use to build and ship.</h2>
      </div>
      <div className="skills-panel__list" aria-label="Technical skills">
        {portfolio.skillGroups.map((group, groupIndex) => (
          <section className="skill-group" key={group.title}>
            <div className="skill-group__heading">
              <div>
                <span className="skill-group__eyebrow">
                  {String(groupIndex + 1).padStart(2, '0')} / {group.title}
                </span>
              </div>
            </div>
            <div className="skill-group__skills">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-item__icon">
                    <SkillIcon name={skill} />
                  </span>
                  <strong>{skill}</strong>
                </div>
              ))}
            </div>
          </section>
        ))}
        {/* <a className="skill-item skill-item--link" href="/about">
          <span className="skill-item__icon"><ArrowUpRight aria-hidden="true" size={18} /></span>
          <strong>See the full profile</strong>
          <ArrowUpRight aria-hidden="true" size={17} />
        </a> */}
      </div>
    </div>
  );
}
