import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "dark";
};

export function BentoCard({
  children,
  className = "",
  tone = "default",
}: BentoCardProps) {
  const toneClasses = {
    default:
      "border-slate-200/85 bg-white text-slate-950 shadow-slate-950/[0.04]",
    accent:
      "border-cyan-300/40 bg-cyan-50 text-slate-950 shadow-cyan-950/[0.08]",
    dark:
      "border-white/12 bg-slate-950 text-white shadow-slate-950/20",
  };

  return (
    <section
      className={`rounded-lg border p-6 shadow-sm ${toneClasses[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
