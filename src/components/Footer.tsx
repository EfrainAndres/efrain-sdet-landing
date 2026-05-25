import type { ProfileContent } from "@/data/profile";

type FooterProps = {
  content: ProfileContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 py-8 text-sm text-slate-600">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p>{content.footer}</p>
        <p className="font-semibold text-slate-800">{content.footerSignature}</p>
      </div>
    </footer>
  );
}
