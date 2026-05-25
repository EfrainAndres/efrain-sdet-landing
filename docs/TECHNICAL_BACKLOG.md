# Technical Improvement Backlog

This backlog captures future improvements and considerations for the Efrain SDET Landing project. Items are not implemented unless the code or documentation already includes them.

## Architecture and Structure

- Keep the app simple and static.
- Centralize profile content in `src/data/profile.ts`.
- Keep reusable UI under `src/components`.
- Avoid large `page.tsx` files.
- Avoid unnecessary dependencies.

## Content Maintainability

- Store bilingual copy, links, skills, CTAs, highlights, and project data in a centralized data file.
- Avoid duplicating content between `/` and `/es` when possible.

## SEO and Metadata

- Improve page title and description.
- Add Open Graph metadata.
- Add the production URL after Vercel deployment.
- Consider an OG image later.

## Accessibility

- Maintain a logical heading hierarchy.
- Keep links and buttons keyboard-friendly.
- Use readable contrast.
- Add accessible labels where needed.
- Keep font sizes readable on mobile.

## Performance

- Keep the bundle lightweight.
- Avoid heavy animations.
- Avoid unnecessary UI libraries.
- Review Lighthouse after deployment.

## CI and Quality Gates

- Add GitHub Actions with `npm ci`, `npm run lint`, and `npm run build`.
- Require CI to pass before merging PRs into `main`.
- Consider typecheck or smoke tests later only if needed.

## Git Workflow

- Use dedicated branches.
- Use Conventional Commits.
- Push branches to `origin` after validation.
- Prefer Pull Requests.
- Keep `main` stable and deployable.

## Changelog

- Maintain `CHANGELOG.md` for visible, SEO, deployment, CI, documentation, and accessibility changes.
- Do not update `CHANGELOG.md` for tiny formatting-only changes.

## Privacy and Public Information

- Do not expose Efrain's phone number unless explicitly requested.
- Do not commit secrets, tokens, or `.env` files.
- Avoid confidential client details.

## Featured Project Positioning

- Present SDET Interview Practice AI as a personal project or MVP.
- Do not invent metrics, users, testimonials, or commercial claims.
