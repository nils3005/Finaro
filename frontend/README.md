# Finaro — Frontend

Angular SPA (standalone components, zoneless, strict TypeScript); versions in the [architecture overview](../docs/architecture/overview.md#tech-stack). Project overview and full-stack setup: [root README](../README.md).

Requires the Node.js version from `.nvmrc` (`nvm use`).

```bash
npm install
npm start                    # http://localhost:4200, proxies /api → http://localhost:8080
npm test                     # Vitest in watch mode
npm test -- --watch=false    # single run, e.g. before a push or in CI
npm run build                # output in dist/
```

Rules for frontend code (i18n, design tokens, light/dark theme, responsiveness): [development guide](../docs/guides/development.md#frontend-code-style). UI reference: [design system](../docs/design/design-system.md).
