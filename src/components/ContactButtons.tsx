import type { ContactLink } from "@/data/profile";

type ContactButtonsProps = {
  links: ContactLink[];
};

export function ContactButtons({ links }: ContactButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:min-h-11 ${
            link.variant === "primary"
              ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              : "border border-slate-300 bg-white text-slate-900 hover:border-cyan-400 hover:text-slate-950"
          }`}
          aria-label={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
