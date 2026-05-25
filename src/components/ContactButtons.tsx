import type { ContactLink } from "@/data/profile";

type ContactButtonsProps = {
  links: ContactLink[];
};

export function ContactButtons({ links }: ContactButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
            link.variant === "primary"
              ? "bg-slate-950 text-white hover:bg-slate-800"
              : "border border-slate-300 bg-white text-slate-900 hover:border-sky-300 hover:text-sky-800"
          }`}
          aria-label={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
