---
status: accepted
last-reviewed: 2026-11-13
---

# Development Guide

Binding rules for everyone working on Finaro — humans and AI agents.

## Working rules

- Make small, focused changes; one concern per commit. Avoid giant refactors.
- Keep the app runnable and deployable after every meaningful change.
- Keep domain boundaries clean (see [ADR 001](../architecture/adr/001-modular-monolith.md)).
- Prefer explicit code over clever abstractions; don't introduce unnecessary frameworks.
- Respect the MVP scope in the [roadmap](../product/roadmap.md); don't build `Later` items early.
- Keep API contracts stable; breaking changes only via a new API version.
- Every schema change ships with a Flyway migration.
- No `TODO` / `FIXME` in committed code unless tracked in an issue.

## Security

Implements NFR-SEC-*.

- Follow the OWASP Top 10 by default.
- Validate and sanitize all input at API boundaries; never trust client-supplied data.
- Never log passwords, tokens, PII, or financial figures.
- Parameterized queries / JPA only; never concatenate SQL strings.
- Spring Security: deny by default, permit explicitly (least privilege). Public endpoints are limited to `/api/v1/auth/**`, `/actuator/health`, `/actuator/info`, and the OpenAPI docs. (The current skeleton `SecurityConfig` still permits everything; this is closed in milestone 6.)
- BCrypt for passwords — no MD5, SHA-1, or plain text.
- Short-lived JWT access tokens; refresh tokens stored hashed.
- Production: enforce HTTPS, secure cookie flags, CSP, X-Frame-Options, HSTS; CORS configured per environment.
- Secrets only via environment variables — never committed. Containers run as non-root.

## Backend code style

- Google Java Style Guide.
- No `System.out.println` — use SLF4J.
- Public API methods get a one-line Javadoc when their purpose is non-obvious.
- REST endpoints live under `/api/v1/...` and are documented in OpenAPI (NFR-PLAT-04).
- Business logic belongs in the backend, not only in a client (NFR-PLAT-03).

## Frontend code style

- [Angular style guide](https://angular.dev/style-guide); standalone components; `strict: true` TypeScript.
- No `console.log` in committed code.
- RxJS: prefer the `async` pipe; no manual subscriptions without `takeUntilDestroyed` / equivalent.
- **Styling:** use design tokens (CSS custom properties) only — no hardcoded colors, so both themes work ([US-017](../product/stories/us-017-switch-between-light-and-dark-theme.md)). Every new component must look correct in light **and** dark theme.
- **Responsive:** mobile-first layouts using the design system breakpoints; every screen must be usable on a phone (NFR-PLAT-02).

## Internationalisation (i18n)

Implements [US-016](../product/stories/us-016-switch-the-ui-language.md), [US-018](../product/stories/us-018-preferences-follow-me-across-devices.md), and NFR-UX-04.

- Library: **ngx-translate**. Locales: `en`, `de`.
- All labels, messages, errors, button captions, and placeholders are translation keys — no hardcoded text in templates. New keys are added to **all** locale files.
- Dates, numbers, and currency use Angular locale pipes with the active locale.
- Language preference is persisted server-side; first visit falls back to the browser language.

## Testing

- Service classes have unit tests; controllers are tested via MockMvc or integration tests.
- Integration tests use Testcontainers (PostgreSQL).
- Business rules always have tests.

## Documentation

Docs live in [`docs/`](../README.md) and are updated **in the same change** as the code:

| When you … | update … |
|------------|----------|
| add / change / drop functional scope | an epic or story in `docs/product/epics/` / `docs/product/stories/` (from `docs/templates/`) |
| add / change / drop a quality attribute | `docs/product/nfr.md` |
| start or finish a story | the story's `status` and its task / acceptance-criteria checkboxes |
| build a non-trivial story | the story's *Technical notes* — before implementing |
| finish or start a milestone, change plans | `docs/product/roadmap.md` |
| make an architectural or technology decision | a new ADR in `docs/architecture/adr/` |
| change modules, stack, deployment | `docs/architecture/overview.md` |
| change colors, typography, components | `docs/design/design-system.md` |
| change setup, env vars, commands | `README.md` / `.env.example` |

## Definition of done

A change is done only when:

- the story's acceptance criteria are met
- functionality works end to end (UI and/or API)
- tests pass
- migrations are included if needed
- the UI works in light and dark theme, on mobile and desktop, in all locales (if UI changed)
- documentation is updated (see above)
- the change fits the architecture and the system remains deployable
