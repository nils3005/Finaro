---
id: US-021
epic: EP-04
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-021 — Import transactions from CSV

Epic: [EP-04 — Transactions](../epics/ep-04-transactions.md)

**As** a user, **I want** to import my bank statement as CSV, **so that** I don't have to type every transaction.

## Acceptance criteria

- [ ] Common German bank CSV formats can be imported (column mapping)
- [ ] Data is normalized (dates, amounts, encodings) and validated; data quality issues are reported
- [ ] Duplicates are detected and skipped
- [ ] The import runs asynchronously and shows its progress and result

## Tasks

- [ ] Parser and column mapping
- [ ] Normalization and validation
- [ ] Deduplication
- [ ] Async import job
- [ ] Import UI

## Technical notes

First item of MVP+: the data/ML track depends on real transaction data.

## Related

- NFRs: NFR-SCAL-02 ([nfr.md](../nfr.md))
