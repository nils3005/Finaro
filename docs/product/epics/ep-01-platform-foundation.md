---
id: EP-01
last-reviewed: 2026-11-13
---

# EP-01 — Platform foundation

Technical enablers that every feature builds on: repository, backend and frontend skeletons, local environment, CI/CD, deployment, observability, asynchronous processing, load tests, and the ML service runtime.

- **Backend module:** all (cross-cutting)
- **Related NFRs:** NFR-OPS-*, NFR-QUAL-*, NFR-SCAL-*, NFR-PLAT-01, NFR-PLAT-03, NFR-PLAT-04, NFR-PLAT-07 ([nfr.md](../nfr.md))

## Stories

- [US-001 — Repository foundation](../stories/us-001-repository-foundation.md)
- [US-002 — Backend skeleton](../stories/us-002-backend-skeleton.md)
- [US-003 — Local development environment with Docker](../stories/us-003-local-development-environment-with-docker.md)
- [US-004 — Frontend skeleton](../stories/us-004-frontend-skeleton.md)
- [US-005 — CI pipeline](../stories/us-005-ci-pipeline.md)
- [US-006 — Production deployment on Render](../stories/us-006-production-deployment-on-render.md)
- [US-007 — Asynchronous job processing](../stories/us-007-asynchronous-job-processing.md)
- [US-008 — Load tests](../stories/us-008-load-tests.md)
- [US-009 — Observability: metrics, tracing, error tracking](../stories/us-009-observability-metrics-tracing-error-tracking.md)
- [US-010 — ML service foundation](../stories/us-010-ml-service-foundation.md)
- [US-011 — AWS infrastructure with Terraform](../stories/us-011-aws-infrastructure-with-terraform.md)
- [US-012 — Native mobile app](../stories/us-012-native-mobile-app.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-01"
SORT id ASC
```
