import { Annotation } from "@/components/ui/Annotation";

interface SectionHeadingProps {
  id: string;
  title: string;
  note?: string;
}

export function SectionHeading({ id, title, note }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end gap-x-5 gap-y-1">
      <h2 id={id} className="font-hand text-hand-heading text-ink">
        {title}
      </h2>
      {note ? <Annotation className="pb-1">{note}</Annotation> : null}
    </div>
  );
}
