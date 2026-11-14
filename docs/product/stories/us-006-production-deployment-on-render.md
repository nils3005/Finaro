---
id: US-006
epic: EP-01
status: planned
priority: MVP
milestone: 12
last-reviewed: 2026-11-13
---

# US-006 — Production deployment on Render

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** the system deployed to the public internet automatically from `main`, **so that** Finaro is really usable and demoable.

## Acceptance criteria

- [ ] Backend, frontend, and managed PostgreSQL run on Render from the Docker images
- [ ] Every merge to `main` deploys; Flyway migrations run on startup
- [ ] Secrets exist only in Render's environment configuration
- [ ] HTTPS, security headers, and CORS for the production domain are set
- [ ] The backend instance is always-on (no cold start for demo visitors)
- [ ] A smoke test against the live system passes; README shows the live URL and screenshots

## Tasks

- [ ] Render services and database
- [ ] CD from `main`
- [ ] Production env configuration
- [ ] Security headers and CORS
- [ ] Live smoke test
- [ ] README: live URL, screenshots

## Technical notes

—

## Related

- NFRs: NFR-OPS-01..03, NFR-OPS-05, NFR-OPS-06, NFR-SEC-04 ([nfr.md](../nfr.md))
