import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
};

export function BentoCard({
  children,
  className = "",
  accent = false,
}: BentoCardProps) {
  return (
    <section
      className={`rounded-lg border p-6 shadow-sm backdrop-blur ${
        accent
          ? "border-emerald-200 bg-emerald-50/90 shadow-emerald-100"
          : "border-slate-200/80 bg-white/90 shadow-slate-200/80"
      } ${className}`}
    >
      {children}
    </section>
  );
}
