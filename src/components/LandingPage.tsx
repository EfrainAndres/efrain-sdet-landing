import type { ProfileContent } from "@/data/profile";
import { BentoCard } from "./BentoCard";
import { ContactButtons } from "./ContactButtons";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { SkillsGrid } from "./SkillsGrid";

type LandingPageProps = {
  content: ProfileContent;
};

export function LandingPage({ content }: LandingPageProps) {
  return (
    <>
      <main lang={content.locale} className="min-h-screen bg-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-5 sm:gap-6 sm:py-8">
          <Hero content={content} />

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <BentoCard>
              <p className="text-sm font-semibold uppercase text-sky-700">
                {content.about.title}
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {content.about.body}
              </p>
            </BentoCard>

            <BentoCard>
              <h2 className="text-2xl font-bold text-slate-950">
                {content.highlights.title}
              </h2>
              <ul className="mt-5 grid gap-4">
                {content.highlights.items.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500"
                      aria-hidden="true"
                    />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </div>

          <SkillsGrid title={content.skills.title} groups={content.skills.groups} />

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <BentoCard accent>
              <p className="text-sm font-semibold uppercase text-sky-800">
                {content.project.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                {content.project.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                {content.project.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {content.project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-700">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950"
                      aria-hidden="true"
                    />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            <BentoCard>
              <h2 className="text-2xl font-bold text-slate-950">
                {content.contact.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {content.contact.description}
              </p>
              <div className="mt-6">
                <ContactButtons links={content.contact.links} />
              </div>
            </BentoCard>
          </div>
        </div>
      </main>
      <Footer content={content} />
    </>
  );
}
