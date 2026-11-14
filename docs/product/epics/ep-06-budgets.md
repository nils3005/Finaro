---
id: EP-06
last-reviewed: 2026-11-13
---

# EP-06 — Budgets

Users set spending limits per category and period, see progress against them, and get help adjusting them.

- **Backend module:** `budgets`
- **Related NFRs:** NFR-UX-03 ([nfr.md](../nfr.md))

## Stories

- [US-028 — Set budgets and track progress](../stories/us-028-set-budgets-and-track-progress.md)
- [US-029 — Get budget alerts](../stories/us-029-get-budget-alerts.md)
- [US-030 — Review proposed budget adjustments](../stories/us-030-review-proposed-budget-adjustments.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-06"
SORT id ASC
```
