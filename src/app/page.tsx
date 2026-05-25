import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { profileContent } from "@/data/profile";

export const metadata: Metadata = {
  title: "Efrain Vergara | Senior Mobile SDET",
  description:
    "Senior Mobile SDET and QA Automation Engineer focused on mobile automation, CI/CD failure analysis, API/UI validation, release readiness, and AI-assisted QA workflows.",
};

export default function Home() {
  return <LandingPage content={profileContent.en} />;
}
