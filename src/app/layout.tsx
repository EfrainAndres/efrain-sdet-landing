import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://example.com"; // TODO: Replace with the production Vercel URL after deployment.

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Efrain Vergara | Senior Mobile SDET & QA Automation Engineer",
  description:
    "Senior Mobile SDET focused on mobile automation, CI/CD failure analysis, API/UI validation, release readiness, and AI-assisted QA workflows.",
  applicationName: "Efrain Vergara Landing Page",
  authors: [{ name: "Efrain Vergara" }],
  creator: "Efrain Vergara",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Efrain Vergara | Senior Mobile SDET & QA Automation Engineer",
    description:
      "Senior Mobile SDET focused on mobile automation, CI/CD failure analysis, API/UI validation, release readiness, and AI-assisted QA workflows.",
    siteName: "Efrain Vergara",
    type: "website",
  },
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
