---
id: US-005
epic: EP-01
status: planned
priority: MVP
milestone: 5
last-reviewed: 2026-11-13
---

# US-005 — CI pipeline

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** every push and pull request built and tested automatically, **so that** regressions are caught before they reach `main`.

## Acceptance criteria

- [ ] Backend (Maven) and frontend build and tests run on every push and PR
- [ ] Docker images are built in CI
- [ ] Quality gates fail the build: Checkstyle / SpotBugs (Java), ESLint (Angular)

## Tasks

- [ ] GitHub Actions workflow for backend
- [ ] GitHub Actions workflow for frontend
- [ ] Docker image build step
- [ ] Quality gates

## Technical notes

—

## Related

- NFRs: NFR-OPS-05, NFR-QUAL-01 ([nfr.md](../nfr.md))
