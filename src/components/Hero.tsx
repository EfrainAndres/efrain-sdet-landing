import Link from "next/link";
import type { ProfileContent } from "@/data/profile";
import { ContactButtons } from "./ContactButtons";

type HeroProps = {
  content: ProfileContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/80 sm:p-9">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase text-sky-700">
            {content.hero.eyebrow}
          </p>
          <Link
            href={content.languageHref}
            className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label={`Switch language to ${content.languageLabel}`}
          >
            {content.languageLabel}
          </Link>
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-6xl">
              {content.hero.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-sky-800 sm:text-xl">
              {content.hero.role}
            </p>
          </div>
          <p className="max-w-3xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            {content.hero.headline}
          </p>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {content.hero.summary}
          </p>
          <ContactButtons links={content.contact.links.slice(0, 2)} />
        </div>
      </div>

      <aside className="rounded-lg border border-slate-900 bg-slate-950 p-6 text-white shadow-sm shadow-slate-300">
        <div className="flex h-full min-h-[340px] flex-col justify-between gap-8">
          <div className="flex items-start justify-between gap-4">
            <div
              className="flex size-20 items-center justify-center rounded-lg bg-sky-400 text-2xl font-black text-slate-950"
              aria-hidden="true"
            >
              EV
            </div>
            <div className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase text-sky-100">
              QA Signal
            </div>
          </div>

          <div className="divide-y divide-white/15">
            {content.hero.tags.map((tag, index) => (
              <div key={tag} className="py-4 first:pt-0 last:pb-0">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-sky-100">
                    0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                </div>
                <p className="text-lg font-semibold">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
