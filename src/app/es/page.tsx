import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { profileContent } from "@/data/profile";

const content = profileContent.es;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    url: "/es",
    siteName: "Efrain Vergara",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function SpanishHome() {
  return <LandingPage content={content} />;
}
