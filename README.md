# Efrain SDET Landing

Professional personal landing page for Efrain Vergara, a Senior Mobile SDET / QA Automation Engineer.

## Purpose

This site presents Efrain's quality engineering profile for international recruiters and clients. It is intended to highlight Senior Mobile SDET experience, mobile automation, CI/CD failure analysis, release readiness, API/UI validation, and AI-assisted QA workflows in a clean, fast, accessible landing page.

English is the default experience at `/`. The Spanish version is available at `/es`.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `src/` directory
- `@/*` import alias
- ESLint
- Turbopack for local development

## Project Structure

```text
.
|-- AGENTS.md
|-- CHANGELOG.md
|-- README.md
|-- public/
|-- src/
|   |-- app/
|   |   |-- es/
|   |   |   `-- page.tsx
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/
|   `-- data/
|-- package.json
|-- next.config.ts
`-- tsconfig.json
```

Future reusable UI should live under `src/components`. Shared content or profile data should live under `src/data` when practical.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run lint checks:

```bash
npm run lint
```

## Build

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## CI

GitHub Actions runs validation for pull requests targeting `main` and pushes to `main`.

The CI workflow installs dependencies with `npm ci`, runs `npm run lint` when available, and runs `npm run build`. Pull Requests should not be merged into `main` unless CI passes.

## Git Workflow

- Do not work directly on `main` for implementation changes.
- Start task branches from the latest `origin/main`.
- Use focused branch names such as `docs/*`, `feat/*`, `fix/*`, `style/*`, or `chore/*`.
- Keep branches small and easy to review.
- Use Conventional Commit messages.
- Run validation before committing when possible.
- Push the task branch to `origin` after validation when a remote is configured.
- Prefer Pull Requests for merging into `main`.
- Keep `main` stable and deployable.

## Deployment

This project is intended for deployment on Vercel.

Recommended setup:

- Import the GitHub repository into Vercel.
- Use the default Next.js framework settings.
- Build command: `npm run build`.
- Development command: `npm run dev`.
- Do not commit secrets, tokens, `.env` files, or sensitive personal data.
- Configure any future environment variables in Vercel project settings instead of source control.

## Author

Efrain Vergara

Senior Mobile SDET / QA Automation Engineer
