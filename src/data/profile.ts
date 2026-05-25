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
  metadata: {
    title: string;
    description: string;
  };
  skipLinkLabel: string;
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
    subtitle: string;
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
    href: "https://www.linkedin.com/in/efrain-vergara",
    variant: "primary",
  },
  {
    label: "Resume PDF",
    href: "/Efrain_Vergara_Senior_Mobile_SDET_Resume.pdf",
    variant: "secondary",
  },
  {
    label: "GitHub",
    href: "https://github.com/EfrainAndres",
    variant: "secondary",
  },
  {
    label: "Email",
    href: "mailto:efrainvergara.udec@gmail.com",
    variant: "secondary",
  },
  {
    label: "Schedule a call (coming soon)",
    href: "#schedule",
    variant: "secondary",
  },
];

export const profileContent: Record<Locale, ProfileContent> = {
  en: {
    locale: "en",
    metadata: {
      title: "Efrain Vergara | Senior Mobile SDET & QA Automation Engineer",
      description:
        "Senior Mobile SDET helping teams improve mobile automation, CI/CD failure analysis, API/UI validation, release readiness, and AI-assisted QA workflows.",
    },
    skipLinkLabel: "Skip to main content",
    languageLabel: "ES",
    languageHref: "/es",
    hero: {
      eyebrow: "Senior Mobile SDET / QA Automation Engineer",
      name: "Efrain Vergara",
      role: "Senior Mobile SDET / QA Automation Engineer",
      headline:
        "Mobile QA automation that turns CI failures into release-ready decisions.",
      summary:
        "Seven years of experience helping product teams strengthen mobile automation, validate API and UI behavior, analyze pipeline failures, and apply AI-assisted QA workflows with discipline.",
      tags: ["Mobile automation", "CI/CD failure analysis", "Release readiness"],
    },
    about: {
      title: "About",
      body:
        "I work at the point where mobile quality, engineering velocity, and release confidence meet. My focus is maintainable automation, practical QA strategy, and clear signals that help distributed teams decide what is ready to ship.",
    },
    highlights: {
      title: "Experience Highlights",
      items: [
        "Senior mobile SDET experience with Appium, WebdriverIO, Java, TypeScript, and JavaScript.",
        "API and UI validation across mobile and web workflows with Postman, Selenium, Cypress, and Playwright.",
        "CI/CD failure analysis focused on separating product issues, test instability, device behavior, and environment drift.",
        "Release readiness support that balances risk, coverage, maintainability, and engineering feedback loops.",
        "Collaboration with international recruiters, clients, and distributed engineering teams.",
        "AI-assisted QA workflows using GitHub Copilot, ChatGPT, and Codex to support analysis and implementation.",
      ],
    },
    skills: {
      title: "Key Skills",
      subtitle: "Focused skills for mobile automation, validation, delivery, and AI-assisted QA",
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
        "A personal MVP for QA and SDET candidates to practice interview scenarios with guided prompts, automation topics, and quality engineering reasoning.",
      points: [
        "Covers SDET interview practice, QA reasoning, mobile automation, API validation, and release-quality discussions.",
        "Positioned as a learning tool and personal MVP, not a commercial product claim.",
        "Explores how AI can support preparation, feedback loops, and technical confidence.",
      ],
    },
    contact: {
      title: "Need stronger mobile release confidence?",
      description:
        "Open to international recruiter, client, and team conversations around senior mobile QA automation, release readiness, and practical SDET leadership.",
      links: contactLinks,
    },
    footer: "Built as a lightweight bilingual landing page.",
  },
  es: {
    locale: "es",
    metadata: {
      title: "Efrain Vergara | Senior Mobile SDET y QA Automation Engineer",
      description:
        "Senior Mobile SDET que ayuda a equipos a mejorar automatización mobile, análisis de fallas CI/CD, validación API/UI, release readiness y flujos QA asistidos con IA.",
    },
    skipLinkLabel: "Saltar al contenido principal",
    languageLabel: "EN",
    languageHref: "/",
    hero: {
      eyebrow: "Senior Mobile SDET / QA Automation Engineer",
      name: "Efrain Vergara",
      role: "Senior Mobile SDET / QA Automation Engineer",
      headline:
        "Automatización QA mobile para convertir fallas de CI en decisiones listas para release.",
      summary:
        "Siete años de experiencia ayudando a equipos de producto a fortalecer automatización mobile, validar comportamiento API/UI, analizar fallas de pipeline y aplicar flujos QA asistidos con IA de forma práctica.",
      tags: ["Automatización mobile", "Análisis CI/CD", "Release readiness"],
    },
    about: {
      title: "Sobre mí",
      body:
        "Trabajo donde se encuentran la calidad mobile, la velocidad de ingeniería y la confianza para liberar. Mi foco es automatización mantenible, estrategia QA práctica y señales claras para que equipos distribuidos decidan qué está listo para producción.",
    },
    highlights: {
      title: "Puntos de experiencia",
      items: [
        "Experiencia senior en SDET mobile con Appium, WebdriverIO, Java, TypeScript y JavaScript.",
        "Validación API y UI en flujos mobile y web con Postman, Selenium, Cypress y Playwright.",
        "Análisis de fallas CI/CD para separar problemas de producto, inestabilidad de pruebas, comportamiento de devices y entorno.",
        "Soporte de release readiness equilibrando riesgo, cobertura, mantenibilidad y feedback de ingeniería.",
        "Colaboración con recruiters internacionales, clientes y equipos de ingeniería distribuidos.",
        "Flujos QA asistidos con IA usando GitHub Copilot, ChatGPT y Codex para apoyar análisis e implementación.",
      ],
    },
    skills: {
      title: "Habilidades clave",
      subtitle: "Habilidades enfocadas en automatización mobile, validación, delivery y QA asistido con IA",
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
        "Un MVP personal para que candidatos QA y SDET practiquen entrevistas con prompts guiados, temas de automatización y razonamiento de quality engineering.",
      points: [
        "Cubre práctica de entrevistas SDET, razonamiento QA, automatización mobile, validación API y conversaciones de calidad para release.",
        "Presentado como herramienta de aprendizaje y MVP personal, no como producto comercial.",
        "Explora cómo la IA puede apoyar preparación, ciclos de feedback y confianza técnica.",
      ],
    },
    contact: {
      title: "¿Necesitas más confianza en releases mobile?",
      description:
        "Disponible para conversaciones con reclutadores internacionales, clientes y equipos que buscan apoyo senior en automatización QA mobile, release readiness y liderazgo SDET práctico.",
      links: contactLinks,
    },
    footer: "Construido como una landing bilingüe, ligera y mantenible.",
  },
};
