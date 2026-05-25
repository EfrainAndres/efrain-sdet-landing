<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context

This repository is a professional personal landing page for Efrain Vergara, a Senior Mobile SDET / QA Automation Engineer with 7 years of experience.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `src/` directory
- `@/*` import alias
- ESLint
- Turbopack for local development

## Project Goals

- Build a clean, modern, responsive professional landing page.
- Use English as the default page at `/`.
- Provide a Spanish version at `/es`.
- Attract international recruiters and clients.
- Highlight Senior Mobile SDET experience, mobile automation, CI/CD failure analysis, release readiness, API/UI validation, and AI-assisted QA workflows.
- Keep the site simple, mostly static, fast, accessible, and easy to maintain.

## Content Rules

- Do not invent metrics.
- Do not invent achievements.
- Do not add fake testimonials.
- Do not add fake certifications.
- Do not add fake companies.
- Do not exaggerate English level.
- Do not expose private or sensitive information.
- Do not add Efrain's phone number to the public landing page unless explicitly requested.
- Use placeholder links when real links are missing.
- If unsure whether content is safe or accurate, ask before adding it.

## Technical Rules

- Do not recreate the project.
- Do not remove the existing Next.js setup.
- Do not add backend, database, authentication, payments, CMS, OpenAI API, Ollama, Supabase, or unnecessary server-side features.
- Keep the site lightweight and mostly static.
- Prefer reusable components under `src/components`.
- Prefer centralized content/data under `src/data` when practical.
- Use semantic HTML where appropriate.
- Keep accessibility in mind: readable contrast, keyboard-friendly links/buttons, meaningful labels, and proper heading hierarchy.
- Keep changes small and easy to review.
- Run `npm run lint` and `npm run build` when possible.
- Update `CHANGELOG.md` for visible user-facing changes.
- Explain files changed after each task.

## Git Workflow

- Never work directly on `main` for implementation changes.
- For every meaningful change, create a dedicated branch from `main`.
- Use clear branch names:
  - `feat/*` for new sections or functionality.
  - `fix/*` for corrections.
  - `style/*` for visual/design changes.
  - `docs/*` for documentation.
  - `chore/*` for configuration, metadata, links, deployment, or maintenance.
- Keep branches small and focused.
- Use clear Conventional Commit messages.
- Push the branch to `origin` after the task is complete and validated, unless explicitly told not to push.
- Prefer Pull Requests to merge changes into `main`.
- Keep `main` stable and deployable.
- Do not commit secrets, private tokens, local environment files, or sensitive personal data.
- If unsure whether a file should be committed, ask before committing.
