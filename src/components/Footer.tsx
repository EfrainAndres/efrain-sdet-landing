import type { ProfileContent } from "@/data/profile";

type FooterProps = {
  content: ProfileContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 py-8 text-sm text-slate-500">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p>{content.footer}</p>
        <p>{content.hero.name}</p>
      </div>
    </footer>
  );
}
