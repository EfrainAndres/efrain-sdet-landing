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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        {content.skipLinkLabel}
      </a>
      <main
        id="main-content"
        lang={content.locale}
        className="min-h-screen bg-slate-100"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-6 lg:gap-6 lg:py-8">
          <Hero content={content} />

          <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
            <BentoCard className="flex flex-col justify-between gap-6">
              <h2 className="text-sm font-semibold uppercase text-cyan-800">
                {content.about.title}
              </h2>
              <p className="text-lg leading-8 text-slate-700">
                {content.about.body}
              </p>
            </BentoCard>

            <BentoCard className="p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-slate-950">
                {content.highlights.title}
              </h2>
              <ul className="mt-5 grid gap-3">
                {content.highlights.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-700"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600"
                      aria-hidden="true"
                    />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </div>

          <SkillsGrid
            title={content.skills.title}
            subtitle={content.skills.subtitle}
            groups={content.skills.groups}
          />

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <BentoCard tone="accent" className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase text-cyan-900">
                {content.project.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950">
                {content.project.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                {content.project.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {content.project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-700">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-800"
                      aria-hidden="true"
                    />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            <BentoCard tone="dark" className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white">
                {content.contact.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
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
