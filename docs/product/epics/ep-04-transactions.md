---
id: EP-04
last-reviewed: 2026-11-13
---

# EP-04 — Transactions

Getting money flows into Finaro with as little effort as possible — fast manual entry first, then file import, automatic categorization, and multiple accounts.

- **Backend module:** `transactions`
- **Related NFRs:** NFR-UX-03, NFR-PLAT-02, NFR-SCAL-02, NFR-SCAL-05 ([nfr.md](../nfr.md))

## Stories

- [US-019 — Record a transaction quickly](../stories/us-019-record-a-transaction-quickly.md)
- [US-020 — Browse, edit, and delete transactions](../stories/us-020-browse-edit-and-delete-transactions.md)
- [US-021 — Import transactions from CSV](../stories/us-021-import-transactions-from-csv.md)
- [US-022 — Get category suggestions automatically](../stories/us-022-get-category-suggestions-automatically.md)
- [US-023 — Track multiple accounts](../stories/us-023-track-multiple-accounts.md)
- [US-024 — Bank synchronization](../stories/us-024-bank-synchronization.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-04"
SORT id ASC
```
