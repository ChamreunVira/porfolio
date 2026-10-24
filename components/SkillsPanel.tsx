import { portfolio } from '@/data/portfolio';

type SkillIconProps = {
  name: string;
};

type BrandWordmarkProps = {
  label: string;
  color: string;
  foreground?: string;
  shape?: 'square' | 'pill' | 'circle';
};

function BrandWordmark({ label, color, foreground = '#ffffff', shape = 'square' }: BrandWordmarkProps) {
  const isCircle = shape === 'circle';
  const isPill = shape === 'pill';

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {isCircle ? (
        <circle cx="12" cy="12" r="10" fill={color} />
      ) : (
        <rect x={isPill ? 2 : 3} y={isPill ? 6 : 3} width={isPill ? 20 : 18} height={isPill ? 12 : 18} rx={isPill ? 6 : 3} fill={color} />
      )}
      <text x="12" y="15.2" fill={foreground} fontFamily="Arial, sans-serif" fontSize={label.length > 2 ? 5.3 : 7.3} fontWeight="800" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#f89820" d="M8 8h8v5.2c0 2.2-1.5 3.8-4 3.8s-4-1.6-4-3.8V8Zm8 2h2.4c1.2 0 1.6.7 1.6 1.4 0 1.1-1 2-2.4 2H16v-1.2h1.4c.4 0 .6-.2.6-.6 0-.3-.2-.5-.6-.5H16V10Z" />
      <path fill="#5382a1" d="M9 18h7c-.5 1.2-1.9 1.8-4.1 1.8-1.9 0-3.4-.5-4.1-1.4L9 18Zm1.1-13.5c1.5 1.2 1.4 2.1.4 3.1-.7.7-.9 1.2-.4 1.8-1.6-1.1-1.8-2.4 0-4.9Z" />
    </svg>
  );
}

function SpringIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#6db33f" d="M19.7 4.2C13.2 4.4 8.3 6.1 6 9.3c-1.3 1.8-1.4 3.8-.5 5.4 1.5-1.8 3.7-3.1 6.4-3.8-2.4 1.3-4.1 3-5.1 5.2 2.6.2 5.4-1 7.5-3.2 2.3-2.4 3.6-5.4 5.4-8.7Z" />
      <path fill="#6db33f" d="M4.3 19.7c2.6-3 5.6-4.8 9.1-5.5-2.2 1.3-4.2 3.2-5.8 5.5H4.3Z" />
    </svg>
  );
}

function LaravelIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#ff2d20" d="M3.5 6.2h6.3l2.1 3.1h4.3l4.3 4.3-2.1 4.2h-6.1l-2.2-3.3H6.1L3.5 11V6.2Zm2 2v2.1l1.7 2.2h3.9L9.7 8.2H5.5Zm7.4 3.1 1.5 2.3h4l1.4 1.4-1 2h-4.1l-1.8-2.7-1.4-2.1 1.4-.9Z" />
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#47a248" d="M12.3 2.4c.4 2.1 2.9 3.4 3.8 5.8 1.3 3.7-.9 7.4-3.2 9.1l-.3 3.1h-1.2l-.2-3.1c-2.2-1.8-3.1-4.4-2.4-7.3.6-2.6 2.8-4.8 3.5-7.6Z" />
      <path fill="#ffffff" d="M12.3 5.4c-.3 3.2-.3 7.6.1 12.7.7-1.3 1.4-3.1 1.6-5.1.3-2.6-.9-5.5-1.7-7.6l-.1-0Z" opacity=".9" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#f05032" d="m20.3 10.8-7.1-7.1a1.8 1.8 0 0 0-2.5 0l-2 2 2.6 2.6a2.1 2.1 0 0 1 2.5 2.7l2.5 2.5a2.1 2.1 0 1 1-1.3 1.3l-2.4-2.4v6.2a2.1 2.1 0 1 1-1.7 0v-6.3a2.1 2.1 0 0 1-.8-3.4L7.5 8.3l-2 2a1.8 1.8 0 0 0 0 2.5l7.1 7.1a1.8 1.8 0 0 0 2.5 0l5.2-5.2a1.8 1.8 0 0 0 0-2.5Z" />
      <circle cx="10.9" cy="9.5" r="1.1" fill="#ffffff" />
      <circle cx="15.2" cy="14.2" r="1.1" fill="#ffffff" />
    </svg>
  );
}

function DockerIcon({ compose = false }: { compose?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#2496ed" d="M3.5 13.3h2.3v-2.2h2.2v2.2h2.1v-2.2h2.2v2.2h2.2v-2.2h2.2v2.3h2.2c.5 0 1 .1 1.5.3-.8 2.5-2.8 4.1-5.9 4.5H8c-2.4 0-4-1.1-4.5-2.9Zm2.3-4.1H8V7H5.8v2.2Zm2.9 0h2.1V7H8.7v2.2Zm2.9 0h2.2V7h-2.2v2.2Zm-2.9-2.9h2.1V4.1H8.7v2.2Z" />
      {compose ? <path fill="#2496ed" d="M4 19.5h16v1.4H4z" opacity=".55" /> : null}
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" fill="#ff6c37" />
      <path fill="#ffffff" d="m7 13.2 5.5-5.5 4.5 4.5h-3.2l-1.4 1.4H16l-1.7 1.7h-4.5L7 13.2Zm5.5-3.5-2.4 2.4h4.8l-2.4-2.4Z" />
    </svg>
  );
}

function SkillIcon({ name }: SkillIconProps) {
  const normalizedName = name.toLowerCase();

  switch (normalizedName) {
    case 'typescript':
      return <BrandWordmark label="TS" color="#3178c6" />;
    case 'php':
      return <BrandWordmark label="PHP" color="#777bb4" shape="pill" />;
    case 'java':
      return <JavaIcon />;
    case 'express.js':
      return <BrandWordmark label="ex" color="#171717" foreground="#ffffff" />;
    case 'spring boot':
      return <SpringIcon />;
    case 'laravel (basic)':
      return <LaravelIcon />;
    case 'rest apis':
      return <BrandWordmark label="API" color="#2563eb" />;
    case 'jwt authentication':
      return <BrandWordmark label="JWT" color="#d63aff" shape="pill" />;
    case 'postgresql':
      return <BrandWordmark label="PG" color="#4169e1" shape="circle" />;
    case 'mysql':
      return <BrandWordmark label="mySQL" color="#4479a1" />;
    case 'mongodb':
      return <MongoDbIcon />;
    case 'git':
      return <GitIcon />;
    case 'docker':
      return <DockerIcon />;
    case 'docker compose':
      return <DockerIcon compose />;
    case 'postman':
      return <PostmanIcon />;
    default:
      return <BrandWordmark label="DEV" color="#171717" />;
  }
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
