# CLAUDE.md

Finaro is a personal finance intelligence platform (Spring Boot + PostgreSQL + Angular), built as a portfolio project to commercial-product quality. Modular monolith, web-first, backend ready for a later native app, deployed to Render (later AWS).

## Read before working

| Before you … | read |
|--------------|------|
| implement anything | [docs/guides/development.md](docs/guides/development.md) — binding code, security, i18n, testing rules and definition of done |
| pick or scope work | [docs/product/roadmap.md](docs/product/roadmap.md) — current milestone and MVP scope |
| build a feature | the story in [docs/product/stories/](docs/product/stories/) (via its epic in [docs/product/epics/index.md](docs/product/epics/index.md)) and the NFRs it references in [docs/product/nfr.md](docs/product/nfr.md) |
| touch architecture, modules, deployment | [docs/architecture/overview.md](docs/architecture/overview.md) and [ADRs](docs/architecture/adr/) |
| touch UI / styling | [docs/design/design-system.md](docs/design/design-system.md) |

Full index: [docs/README.md](docs/README.md).

## Non-negotiables

- Production-grade code; OWASP Top 10; never log secrets, PII, or financial figures.
- Stay within the current milestone and MVP scope; don't build `Later` items. Avoid overengineering.
- Keep module boundaries (ADR 001); business logic lives in the backend, exposed via `/api/v1/...` and OpenAPI — never only in the Angular client.
- Frontend: no hardcoded UI text (ngx-translate, `en` + `de`), no hardcoded colors (design tokens, light + dark theme), mobile-first responsive.
- Configuration and secrets only via environment variables; nothing provider-specific (Render/AWS) in application code.
- Every schema change via a new Flyway migration; never edit an applied migration.

## Documentation rules

Docs are part of the change. When you change code, update the affected docs **in the same change**:

- **Functional scope added/changed/dropped** → epic / story in `docs/product/epics/` and `docs/product/stories/`, created from `docs/templates/`. Next free ID (`EP-NN`, `US-NNN` — global sequence); link new stories from their epic and, if scheduled, from the roadmap. Never renumber or reuse IDs; dropped stories keep their file with `status: dropped`.
- **Quality attribute added/changed/dropped** → `docs/product/nfr.md` (`NFR-<AREA>-<NN>`, same ID rules).
- **Story progress** → the story's `status` frontmatter and its task / acceptance-criteria checkboxes. Story status lives **only** there.
- **Milestone progress or plan change** → `docs/product/roadmap.md`. Milestone status lives **only** there — don't duplicate it in README or elsewhere.
- **Non-trivial story** → fill in the story's *Technical notes* (API, data model, UI, security, tests) before implementing; keep them current.
- **Architectural or technology decision** (new library, pattern, module, infrastructure) → new ADR in `docs/architecture/adr/` from `docs/templates/adr.md`; never rewrite an accepted ADR, supersede it.
- **Stack, modules, deployment, config** → `docs/architecture/overview.md` (and `.env.example` / `README.md` for setup changes).
- **Design tokens, components, themes** → `docs/design/design-system.md`.

Rules for all docs:

- One topic, one home — link instead of copying content.
- Files: English, lowercase kebab-case; ADRs `NNN-name.md`, epics `ep-nn-name.md`, stories `us-nnn-name.md`.
- Links: relative Markdown links, never `[[wikilinks]]` (docs must work on GitHub and in Obsidian).
- Bump `last-reviewed` in the frontmatter when you edit a living document.
- If new information conflicts with existing docs, ask the user before resolving it.

## Commands

```bash
docker compose up                                   # full stack (needs .env from .env.example)
cd backend && ./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
cd backend && ./mvnw test                           # needs Docker (Testcontainers)
cd frontend && npm start                            # http://localhost:4200, proxies /api → :8080
cd frontend && npm test
```
