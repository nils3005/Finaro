---
id: US-001
epic: EP-01
status: done
priority: MVP
milestone: 1
last-reviewed: 2026-11-13
---

# US-001 — Repository foundation

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** a clean repository skeleton with documented conventions, **so that** every later change has a clear place.

## Acceptance criteria

- [x] Repository contains `backend/`, `frontend/`, `docs/`, `infra/`, `.github/`
- [x] `.gitignore` covers Java, Node, IDE files, and `.env`
- [x] Root README explains the project; ADR 001 records the modular monolith decision

## Tasks

- [x] Git repository and `.gitignore`
- [x] Directory skeleton
- [x] Root `README.md`
- [x] [ADR 001 — modular monolith](../../architecture/adr/001-modular-monolith.md)

## Technical notes

—

## Related

- NFRs: — ([nfr.md](../nfr.md))
