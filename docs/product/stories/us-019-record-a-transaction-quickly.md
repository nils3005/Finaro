---
id: US-019
epic: EP-04
status: planned
priority: MVP
milestone: 7
last-reviewed: 2026-11-13
---

# US-019 — Record a transaction quickly

Epic: [EP-04 — Transactions](../epics/ep-04-transactions.md)

**As** a user, **I want** to record income and expenses in a few seconds, **so that** logging becomes a daily habit.

## Acceptance criteria

- [ ] Users can create income and expense transactions with amount, date, category, and description
- [ ] Entry is optimized for speed: sensible defaults (today, last category), keyboard-friendly, fully usable on a phone
- [ ] Every transaction has a category
- [ ] The raw description and the category source (`manual` / `rule` / `model`) are stored
- [ ] Amounts are validated (no zero, correct precision, currency)

## Tasks

- [ ] `transactions` table incl. `raw_description`, `category_source`
- [ ] Create endpoint `/api/v1/transactions`
- [ ] Fast-entry UI (desktop + mobile)
- [ ] Unit tests for amount validation and business rules

## Technical notes

Storing `raw_description` and `category_source` from the start provides training data for [US-022](us-022-get-category-suggestions-automatically.md).

## Related

- NFRs: NFR-UX-03, NFR-PLAT-02 ([nfr.md](../nfr.md))
