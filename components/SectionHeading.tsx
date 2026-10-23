type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div>
        <h2 className="section-heading__title">{title}</h2>
        {description ? <p className="section-heading__description">{description}</p> : null}
      </div>
    </div>
  );
}
