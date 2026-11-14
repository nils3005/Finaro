---
id: US-008
epic: EP-01
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-008 — Load tests

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** reproducible load tests for core endpoints, **so that** scalability claims are backed by numbers.

## Acceptance criteria

- [ ] Load test scripts for login, transaction list / create, and dashboard exist in the repo
- [ ] Target values (throughput, p95 latency) are defined
- [ ] Results are documented and compared against the targets

## Tasks

- [ ] Choose tool (k6 or Gatling)
- [ ] Scripts for core endpoints
- [ ] Run against a production-like setup
- [ ] Document results

## Technical notes

—

## Related

- NFRs: NFR-SCAL-03, NFR-QUAL-02 ([nfr.md](../nfr.md))
