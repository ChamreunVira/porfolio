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
        <rect
          x={isPill ? 2 : 3}
          y={isPill ? 6 : 3}
          width={isPill ? 20 : 18}
          height={isPill ? 12 : 18}
          rx={isPill ? 6 : 3}
          fill={color}
        />
      )}
      <text
        x="12"
        y="15.2"
        fill={foreground}
        fontFamily="Arial, sans-serif"
        fontSize={label.length > 2 ? 5.3 : 7.3}
        fontWeight="800"
        textAnchor="middle"
      >
        {label}
      </text>
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#f89820"
        d="M8 8h8v5.2c0 2.2-1.5 3.8-4 3.8s-4-1.6-4-3.8V8Zm8 2h2.4c1.2 0 1.6.7 1.6 1.4 0 1.1-1 2-2.4 2H16v-1.2h1.4c.4 0 .6-.2.6-.6 0-.3-.2-.5-.6-.5H16V10Z"
      />
      <path
        fill="#5382a1"
        d="M9 18h7c-.5 1.2-1.9 1.8-4.1 1.8-1.9 0-3.4-.5-4.1-1.4L9 18Zm1.1-13.5c1.5 1.2 1.4 2.1.4 3.1-.7.7-.9 1.2-.4 1.8-1.6-1.1-1.8-2.4 0-4.9Z"
      />
    </svg>
  );
}

function SpringIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#6db33f"
        d="M19.7 4.2C13.2 4.4 8.3 6.1 6 9.3c-1.3 1.8-1.4 3.8-.5 5.4 1.5-1.8 3.7-3.1 6.4-3.8-2.4 1.3-4.1 3-5.1 5.2 2.6.2 5.4-1 7.5-3.2 2.3-2.4 3.6-5.4 5.4-8.7Z"
      />
      <path fill="#6db33f" d="M4.3 19.7c2.6-3 5.6-4.8 9.1-5.5-2.2 1.3-4.2 3.2-5.8 5.5H4.3Z" />
    </svg>
  );
}

function LaravelIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#ff2d20"
        d="M3.5 6.2h6.3l2.1 3.1h4.3l4.3 4.3-2.1 4.2h-6.1l-2.2-3.3H6.1L3.5 11V6.2Zm2 2v2.1l1.7 2.2h3.9L9.7 8.2H5.5Zm7.4 3.1 1.5 2.3h4l1.4 1.4-1 2h-4.1l-1.8-2.7-1.4-2.1 1.4-.9Z"
      />
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#47a248"
        d="M12.3 2.4c.4 2.1 2.9 3.4 3.8 5.8 1.3 3.7-.9 7.4-3.2 9.1l-.3 3.1h-1.2l-.2-3.1c-2.2-1.8-3.1-4.4-2.4-7.3.6-2.6 2.8-4.8 3.5-7.6Z"
      />
      <path
        fill="#ffffff"
        d="M12.3 5.4c-.3 3.2-.3 7.6.1 12.7.7-1.3 1.4-3.1 1.6-5.1.3-2.6-.9-5.5-1.7-7.6l-.1-0Z"
        opacity=".9"
      />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#f05032"
        d="m20.3 10.8-7.1-7.1a1.8 1.8 0 0 0-2.5 0l-2 2 2.6 2.6a2.1 2.1 0 0 1 2.5 2.7l2.5 2.5a2.1 2.1 0 1 1-1.3 1.3l-2.4-2.4v6.2a2.1 2.1 0 1 1-1.7 0v-6.3a2.1 2.1 0 0 1-.8-3.4L7.5 8.3l-2 2a1.8 1.8 0 0 0 0 2.5l7.1 7.1a1.8 1.8 0 0 0 2.5 0l5.2-5.2a1.8 1.8 0 0 0 0-2.5Z"
      />
      <circle cx="10.9" cy="9.5" r="1.1" fill="#ffffff" />
      <circle cx="15.2" cy="14.2" r="1.1" fill="#ffffff" />
    </svg>
  );
}

function DockerIcon({ compose = false }: { compose?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#2496ed"
        d="M3.5 13.3h2.3v-2.2h2.2v2.2h2.1v-2.2h2.2v2.2h2.2v-2.2h2.2v2.3h2.2c.5 0 1 .1 1.5.3-.8 2.5-2.8 4.1-5.9 4.5H8c-2.4 0-4-1.1-4.5-2.9Zm2.3-4.1H8V7H5.8v2.2Zm2.9 0h2.1V7H8.7v2.2Zm2.9 0h2.2V7h-2.2v2.2Zm-2.9-2.9h2.1V4.1H8.7v2.2Z"
      />
      {compose ? <path fill="#2496ed" d="M4 19.5h16v1.4H4z" opacity=".55" /> : null}
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" fill="#ff6c37" />
      <path
        fill="#ffffff"
        d="m7 13.2 5.5-5.5 4.5 4.5h-3.2l-1.4 1.4H16l-1.7 1.7h-4.5L7 13.2Zm5.5-3.5-2.4 2.4h4.8l-2.4-2.4Z"
      />
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
    <div className="grid grid-cols-[0.75fr_1.25fr] gap-[55px] border-2 border-[var(--ink)] bg-[var(--blue)] p-[clamp(28px,5vw,60px)] shadow-[7px_7px_0_var(--ink)] max-[900px]:gap-10 max-[680px]:block max-[680px]:p-[27px_22px_22px]">
      <div>
        <div className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
          <span>{'//'} The toolkit</span>
        </div>
        <h2
          className="mb-[18px] mt-[25px] max-w-[420px] text-[clamp(2rem,4vw,3.6rem)] leading-[0.94] tracking-[-0.07em] max-[680px]:mt-6"
          id="skills-title"
        >
          Tools I use to build and ship.
        </h2>
      </div>
      <div
        className="grid grid-cols-2 content-start gap-[9px] max-[680px]:mt-10 max-[680px]:grid-cols-1"
        aria-label="Technical skills"
      >
        {portfolio.skillGroups.map((group, groupIndex) => (
          <section className="min-w-0 border border-[var(--ink)] bg-[rgb(255_248_231_/_24%)] p-4" key={group.title}>
            <div className="border-b border-[var(--ink)] pb-[13px]">
              <div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.07em] text-[#245267]">
                  {String(groupIndex + 1).padStart(2, '0')} / {group.title}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-[13px]">
              {group.skills.map((skill) => (
                <div
                  className="grid min-h-[55px] min-w-0 flex-1 basis-[145px] grid-cols-[35px_minmax(0,1fr)_auto] items-center gap-2.5 border border-[var(--ink)] bg-[rgb(255_248_231_/_38%)] p-2.5 text-[var(--ink)] transition-[transform,background,box-shadow] duration-150 ease-out hover:translate-x-[3px] hover:-translate-y-[3px] hover:bg-[var(--yellow)] hover:shadow-[3px_3px_0_var(--ink)] [&_svg]:block [&_svg]:size-[17px]"
                  key={skill}
                >
                  <span className="grid size-8 place-items-center border border-[var(--ink)] bg-[var(--yellow)] text-[var(--ink)]">
                    <SkillIcon name={skill} />
                  </span>
                  <strong className="min-w-0 text-[0.76rem] leading-[1.15] [overflow-wrap:anywhere]">{skill}</strong>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
