import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Efrain Vergara | Senior Mobile SDET",
  description:
    "Professional landing page for Efrain Vergara, Senior Mobile SDET and QA Automation Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-950">{children}</body>
    </html>
  );
}
