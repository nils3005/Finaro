---
id: US-042
epic: EP-10
status: planned
priority: MVP
milestone: 11
last-reviewed: 2026-11-13
---

# US-042 — Get AI insights on my month

Epic: [EP-10 — AI insights](../epics/ep-10-ai-insights.md)

**As** a user, **I want** an AI summary with recommendations based on my data and goals, **so that** I know concretely what to improve.

## Acceptance criteria

- [ ] The summary and recommendations are based on the user's own data and aligned with their goals
- [ ] Each recommendation shows the data it was derived from
- [ ] AI output never changes user data without explicit confirmation
- [ ] Prompts contain only aggregated, minimal data

## Tasks

- [ ] API contract `GET /api/v1/insights/monthly-summary`
- [ ] Spring AI integration; provider via env vars
- [ ] Insights panel on the dashboard
- [ ] Tests with a stubbed model

## Technical notes

—

## Related

- NFRs: NFR-SEC-02 ([nfr.md](../nfr.md))
