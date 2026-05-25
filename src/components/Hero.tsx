import Link from "next/link";
import type { ProfileContent } from "@/data/profile";
import { ContactButtons } from "./ContactButtons";

type HeroProps = {
  content: ProfileContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.22fr_0.78fr]">
      <div className="rounded-lg border border-white/10 bg-slate-950 p-5 text-white shadow-sm shadow-slate-950/20 sm:p-8 lg:p-10">
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm font-semibold uppercase text-cyan-200">
            {content.hero.eyebrow}
          </p>
          <Link
            href={content.languageHref}
            className="inline-flex min-h-10 w-fit items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label={`Switch language to ${content.languageLabel}`}
          >
            {content.languageLabel}
          </Link>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
              {content.hero.name}
            </h1>
            <p className="mt-4 text-lg font-semibold text-cyan-200 sm:text-xl">
              {content.hero.role}
            </p>
          </div>
          <p className="max-w-3xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            {content.hero.headline}
          </p>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {content.hero.summary}
          </p>
          <ContactButtons links={content.contact.links.slice(0, 2)} />
        </div>
      </div>

      <aside
        className="rounded-lg border border-slate-200 bg-white p-6 text-slate-950 shadow-sm shadow-slate-950/[0.04]"
        aria-label="Quality engineering focus areas"
      >
        <div className="flex h-full min-h-[320px] flex-col justify-between gap-8">
          <div className="flex items-start justify-between gap-5">
            <div
              className="flex size-20 items-center justify-center rounded-lg bg-cyan-300 text-2xl font-black text-slate-950"
              aria-hidden="true"
            >
              EV
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase text-slate-700">
              QA Signal
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {content.hero.tags.map((tag, index) => (
              <div key={tag} className="py-4 first:pt-0 last:pb-0">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-cyan-700">
                    0{index + 1}
                  </span>
                  <span className="h-px w-10 bg-slate-300" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-slate-950">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
