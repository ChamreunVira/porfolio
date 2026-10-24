type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, titleId, description }: SectionHeadingProps) {
  return (
    <div className="group grid grid-cols-[0.27fr_1fr] gap-[30px] border-b-2 border-[var(--ink)] pb-[35px] max-[680px]:block">
      <div className="flex items-start gap-3 pt-[9px] font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--muted)] max-[680px]:mb-[26px]">
        <span className="text-[var(--ink)]">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2
          className="m-0 max-w-[720px] text-[clamp(2.3rem,5vw,4.9rem)] leading-[0.94] tracking-[-0.075em] transition-transform duration-200 ease-out group-hover:translate-x-[5px]"
          id={titleId}
        >
          {title}
        </h2>
        {description ? (
          <p className="m-[18px_0_0] max-w-[370px] text-[0.98rem] leading-[1.5] text-[var(--muted)]">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
