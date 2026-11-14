---
id: US-002
epic: EP-01
status: in-progress
priority: MVP
milestone: 2
last-reviewed: 2026-11-13
---

# US-002 — Backend skeleton

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** a running Spring Boot backend connected to PostgreSQL, **so that** features can be added on a working base.

## Acceptance criteria

- [ ] The app starts with the `dev` profile and connects to PostgreSQL; DB credentials come from env vars
- [ ] `/actuator/health` returns 200 including the DB check
- [ ] Swagger UI is available at `/swagger-ui.html`
- [ ] Smoke test (context loads, health 200) runs green with Testcontainers

## Tasks

- [x] Spring Boot via Initializr: web, data-jpa, security, flyway, postgresql, actuator, validation, springdoc
- [x] `application.yaml` with `dev` / `prod` profiles
- [x] Flyway migration `V1__init_schema.sql` (placeholder)
- [x] `/actuator/health` confirms startup and DB connection
- [x] OpenAPI / Swagger UI
- [ ] Verify the smoke test is green

## Technical notes

—

## Related

- NFRs: NFR-OPS-03, NFR-OPS-06, NFR-PLAT-04 ([nfr.md](../nfr.md))
