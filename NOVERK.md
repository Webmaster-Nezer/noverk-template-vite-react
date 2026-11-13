# Notes for Noverk Web Code

A static site: Vite 7, React 19, TypeScript and Tailwind CSS 4, tested with Vitest and Testing Library. npm run build writes plain files to dist/ that any static host serves.

## Commands
- `npm install` once, then `npm run dev` (http://localhost:5173)
- `npm test` runs the tests, `npm run lint` and `npm run typecheck` the checks
- `npm run build` writes the site to dist/

## Conventions
- Keep changes small and tested: add or update a test with every change.
- Secrets never go in the code: read them from environment variables and list their names in .env.example.
- CI runs the same commands on every pull request; keep it green.
