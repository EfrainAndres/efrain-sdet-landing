export type Locale = "en" | "es";

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type ProfileContent = {
  locale: Locale;
  languageLabel: string;
  languageHref: string;
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    headline: string;
    summary: string;
    tags: string[];
  };
  about: {
    title: string;
    body: string;
  };
  highlights: {
    title: string;
    items: string[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  project: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  contact: {
    title: string;
    description: string;
    links: ContactLink[];
  };
  footer: string;
};

const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "#linkedin",
    variant: "primary",
  },
  {
    label: "Resume PDF",
    href: "#resume",
    variant: "secondary",
  },
  {
    label: "GitHub",
    href: "#github",
    variant: "secondary",
  },
  {
    label: "Email",
    href: "#email",
    variant: "secondary",
  },
  {
    label: "Schedule a call",
    href: "#schedule",
    variant: "secondary",
  },
];

export const profileContent: Record<Locale, ProfileContent> = {
  en: {
    locale: "en",
    languageLabel: "ES",
    languageHref: "/es",
    hero: {
      eyebrow: "Senior Mobile SDET / QA Automation Engineer",
      name: "Efrain Vergara",
      role: "Senior Mobile SDET focused on release confidence",
      headline:
        "I help mobile teams ship with stronger automation, clearer failure analysis, and practical QA strategy.",
      summary:
        "Seven years of experience across mobile automation, API/UI validation, CI/CD failure analysis, release readiness, and AI-assisted QA workflows.",
      tags: ["Mobile automation", "CI/CD quality gates", "API/UI validation"],
    },
    about: {
      title: "About",
      body:
        "I work where product quality, engineering speed, and release confidence meet. My focus is building maintainable test automation, understanding failures quickly, and helping teams make better release decisions.",
    },
    highlights: {
      title: "Experience Highlights",
      items: [
        "Mobile test automation with Appium, WebdriverIO, Java, TypeScript, and JavaScript.",
        "API and UI validation using tools such as Postman, Selenium, Cypress, and Playwright.",
        "CI/CD failure analysis and release readiness support for mobile delivery workflows.",
        "QA strategy that balances automation coverage, risk, maintainability, and team feedback loops.",
        "AI-assisted QA workflows using GitHub Copilot, ChatGPT, and Codex to speed up analysis and implementation.",
      ],
    },
    skills: {
      title: "Key Skills",
      groups: [
        {
          title: "Mobile Automation",
          items: ["Appium", "WebdriverIO", "Java", "TypeScript", "JavaScript"],
        },
        {
          title: "Web and API Validation",
          items: ["Selenium", "Cypress", "Playwright", "Postman"],
        },
        {
          title: "Delivery and Quality",
          items: ["Jenkins", "AWS Device Farm", "Jira", "TestRail"],
        },
        {
          title: "AI-assisted QA",
          items: ["GitHub Copilot", "ChatGPT", "Codex"],
        },
      ],
    },
    project: {
      eyebrow: "Featured Project",
      title: "SDET Interview Practice AI",
      description:
        "A personal project / MVP designed to help QA and SDET candidates practice interview scenarios with guided prompts and realistic quality engineering topics.",
      points: [
        "Focused on SDET interview practice, QA reasoning, and automation discussion prompts.",
        "Positioned as a learning tool and personal MVP, not a commercial product claim.",
        "Explores how AI can support preparation, feedback loops, and technical confidence.",
      ],
    },
    contact: {
      title: "Let's talk about quality engineering.",
      description:
        "Open to conversations with international recruiters, clients, and teams looking for senior mobile QA automation support.",
      links: contactLinks,
    },
    footer: "Built as a lightweight bilingual landing page.",
  },
  es: {
    locale: "es",
    languageLabel: "EN",
    languageHref: "/",
    hero: {
      eyebrow: "Senior Mobile SDET / QA Automation Engineer",
      name: "Efrain Vergara",
      role: "Senior Mobile SDET enfocado en confianza de release",
      headline:
        "Ayudo a equipos mobile a entregar con mejor automatización, análisis claro de fallas y estrategia QA práctica.",
      summary:
        "Siete años de experiencia en automatización mobile, validación API/UI, análisis de fallas en CI/CD, preparación de releases y flujos QA asistidos con IA.",
      tags: ["Automatización mobile", "Calidad en CI/CD", "Validación API/UI"],
    },
    about: {
      title: "Sobre mí",
      body:
        "Trabajo en el punto donde se encuentran la calidad del producto, la velocidad de ingeniería y la confianza para liberar. Mi foco es construir automatización mantenible, entender fallas rápidamente y ayudar a los equipos a tomar mejores decisiones de release.",
    },
    highlights: {
      title: "Puntos de experiencia",
      items: [
        "Automatización de pruebas mobile con Appium, WebdriverIO, Java, TypeScript y JavaScript.",
        "Validación de APIs e interfaces con herramientas como Postman, Selenium, Cypress y Playwright.",
        "Análisis de fallas en CI/CD y soporte de release readiness para flujos de entrega mobile.",
        "Estrategia QA que equilibra cobertura automatizada, riesgo, mantenibilidad y feedback del equipo.",
        "Flujos QA asistidos con IA usando GitHub Copilot, ChatGPT y Codex para acelerar análisis e implementación.",
      ],
    },
    skills: {
      title: "Habilidades clave",
      groups: [
        {
          title: "Automatización Mobile",
          items: ["Appium", "WebdriverIO", "Java", "TypeScript", "JavaScript"],
        },
        {
          title: "Validación Web y API",
          items: ["Selenium", "Cypress", "Playwright", "Postman"],
        },
        {
          title: "Entrega y Calidad",
          items: ["Jenkins", "AWS Device Farm", "Jira", "TestRail"],
        },
        {
          title: "QA asistido con IA",
          items: ["GitHub Copilot", "ChatGPT", "Codex"],
        },
      ],
    },
    project: {
      eyebrow: "Proyecto destacado",
      title: "SDET Interview Practice AI",
      description:
        "Un proyecto personal / MVP para ayudar a candidatos QA y SDET a practicar escenarios de entrevista con prompts guiados y temas reales de quality engineering.",
      points: [
        "Enfocado en práctica de entrevistas SDET, razonamiento QA y conversaciones sobre automatización.",
        "Presentado como herramienta de aprendizaje y MVP personal, no como producto comercial.",
        "Explora cómo la IA puede apoyar preparación, ciclos de feedback y confianza técnica.",
      ],
    },
    contact: {
      title: "Hablemos sobre quality engineering.",
      description:
        "Disponible para conversaciones con recruiters internacionales, clientes y equipos que buscan apoyo senior en automatización QA mobile.",
      links: contactLinks,
    },
    footer: "Construido como una landing bilingüe, ligera y mantenible.",
  },
};
