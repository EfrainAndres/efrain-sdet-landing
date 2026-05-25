import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { profileContent } from "@/data/profile";

const content = profileContent.en;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    url: "/",
    siteName: "Efrain Vergara",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    type: "website",
  },
};

export default function Home() {
  return <LandingPage content={content} />;
}
