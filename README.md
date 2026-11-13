# New site (Vite + React)

Started from a Noverk Web Code template. A static site: Vite 7, React 19, TypeScript and Tailwind CSS 4, tested with Vitest and Testing Library. npm run build writes plain files to dist/ that any static host serves.

## Run it
- `npm install` once, then `npm run dev` (http://localhost:5173)
- `npm test` runs the tests, `npm run lint` and `npm run typecheck` the checks
- `npm run build` writes the site to dist/

Environment variables go in `.env` (see `.env.example`); never commit real values.
