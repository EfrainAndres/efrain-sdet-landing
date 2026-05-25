import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { profileContent } from "@/data/profile";

export const metadata: Metadata = {
  title: "Efrain Vergara | Senior Mobile SDET",
  description:
    "Senior Mobile SDET y QA Automation Engineer enfocado en automatización mobile, análisis de fallas CI/CD, validación API/UI, release readiness y flujos QA asistidos con IA.",
};

export default function SpanishHome() {
  return <LandingPage content={profileContent.es} />;
}
