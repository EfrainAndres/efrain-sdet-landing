import type { SkillGroup } from "@/data/profile";
import { BentoCard } from "./BentoCard";

type SkillsGridProps = {
  title: string;
  subtitle: string;
  groups: SkillGroup[];
};

export function SkillsGrid({ title, subtitle, groups }: SkillsGridProps) {
  return (
    <section aria-labelledby="skills-title" className="space-y-4">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 id="skills-title" className="text-2xl font-bold text-slate-950">
          {title}
        </h2>
        <p className="text-sm font-medium text-slate-500">
          {subtitle}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {groups.map((group) => (
          <BentoCard key={group.title} className="p-5">
            <h3 className="text-base font-bold leading-6 text-slate-950">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
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
