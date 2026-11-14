---
id: US-010
epic: EP-01
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-010 — ML service foundation

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** a separate Python ML service with a stable contract, **so that** ML features can be built and deployed independently.

## Acceptance criteria

- [ ] An ADR records the decision for the separate service
- [ ] FastAPI service with a versioned OpenAPI contract, Dockerized, part of `docker compose`
- [ ] The backend calls it with timeouts and falls back to rule-based logic if it is unavailable
- [ ] Training runs and model versions are tracked with MLflow
- [ ] Every model is evaluated against a simple baseline

## Tasks

- [ ] ADR: separate Python ML service
- [ ] Service skeleton (FastAPI, Docker)
- [ ] Backend client with timeout and fallback
- [ ] MLflow tracking
- [ ] CI for the Python service

## Technical notes

Details: [ML service](../../architecture/overview.md#ml-service-planned-mvp).

## Related

- NFRs: NFR-OPS-03, NFR-OPS-09 ([nfr.md](../nfr.md))
