import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";
import { techCategories, techSkills } from "@/data/portfolioData";

export function StackSection() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="page-container py-16">
      <SectionHeading id="stack-title" title="Stack" note="hover a chip, it colors in ✦" />

      <div className="grid gap-8 sm:grid-cols-2">
        {techCategories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-mono text-mono-tag text-ink-soft">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {techSkills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <TechChip key={skill.id} tech={skill} />
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
