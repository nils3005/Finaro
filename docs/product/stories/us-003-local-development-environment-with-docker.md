---
id: US-003
epic: EP-01
status: done
priority: MVP
milestone: 3
last-reviewed: 2026-11-13
---

# US-003 — Local development environment with Docker

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** to start the whole stack with one command, **so that** the environment is reproducible on any machine.

## Acceptance criteria

- [x] `docker compose up` starts db, backend, and frontend with health checks
- [x] Images are multi-stage builds; containers run as non-root
- [x] `.env.example` documents every variable

## Tasks

- [x] Multi-stage Dockerfiles: backend (Maven → JRE, non-root), frontend (build → nginx)
- [x] `docker-compose.yml` with `db`, `backend`, `frontend` and health checks
- [x] `.env.example`

## Technical notes

—

## Related

- NFRs: NFR-OPS-04 ([nfr.md](../nfr.md))
