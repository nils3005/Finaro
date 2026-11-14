---
id: US-022
epic: EP-04
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-022 — Get category suggestions automatically

Epic: [EP-04 — Transactions](../epics/ep-04-transactions.md)

**As** a user, **I want** categories suggested automatically, **so that** I spend less time on manual work.

## Acceptance criteria

- [ ] New and imported transactions get a suggested category
- [ ] Users can accept or correct suggestions; corrections are recorded as training feedback
- [ ] The model is evaluated against rule-based and LLM baselines; results are documented
- [ ] If the ML service is unavailable, rules are used

## Tasks

- [ ] Rule-based baseline
- [ ] Training data (synthetic + imported + corrections)
- [ ] Classifier in the ML service
- [ ] Evaluation vs. baselines
- [ ] Retraining from corrections
- [ ] Suggestion UI

## Technical notes

Depends on [US-010](us-010-ml-service-foundation.md) and [US-021](us-021-import-transactions-from-csv.md).

## Related

- NFRs: — ([nfr.md](../nfr.md))
