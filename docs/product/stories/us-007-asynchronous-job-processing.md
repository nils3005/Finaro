---
id: US-007
epic: EP-01
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-007 — Asynchronous job processing

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** long-running work processed outside the request thread, **so that** the API stays responsive and the work scales independently.

## Acceptance criteria

- [ ] File imports, ML inference, and report generation run as background jobs
- [ ] Job state (queued, running, done, failed) is persisted and visible to the user where relevant
- [ ] Failed jobs are retried with a limit and never lose data

## Tasks

- [ ] Decide mechanism (in-process async / job table / Spring Modulith events) — ADR
- [ ] Job model and persistence
- [ ] Retry and failure handling
- [ ] Tests

## Technical notes

A message broker is only introduced when its trigger on the [scaling path](../../architecture/overview.md#scaling-path) is reached.

## Related

- NFRs: NFR-SCAL-02 ([nfr.md](../nfr.md))
