---
id: US-009
epic: EP-01
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-009 — Observability: metrics, tracing, error tracking

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the operator, **I want** metrics, distributed traces, and error tracking, **so that** problems are found and understood quickly.

## Acceptance criteria

- [ ] Structured logs without secrets, PII, or financial figures
- [ ] Application metrics are exported
- [ ] Traces span backend and ML service via OpenTelemetry
- [ ] Errors are tracked and alert the developer

## Tasks

- [ ] Metrics export
- [ ] OpenTelemetry instrumentation (Java + Python)
- [ ] Error tracking
- [ ] Dashboards

## Technical notes

—

## Related

- NFRs: NFR-OPS-07, NFR-OPS-09, NFR-SEC-02 ([nfr.md](../nfr.md))
