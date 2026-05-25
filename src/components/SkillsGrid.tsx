import type { SkillGroup } from "@/data/profile";
import { BentoCard } from "./BentoCard";

type SkillsGridProps = {
  title: string;
  groups: SkillGroup[];
};

export function SkillsGrid({ title, groups }: SkillsGridProps) {
  return (
    <section aria-labelledby="skills-title" className="space-y-4">
      <h2 id="skills-title" className="text-2xl font-bold text-slate-950">
        {title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <BentoCard key={group.title}>
            <h3 className="text-base font-bold text-slate-950">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
