---
id: EP-08
last-reviewed: 2026-11-13
---

# EP-08 — Analytics & reports

Turn transactions into understanding: a dashboard, explainable monthly and weekly reports, net worth, and automatic detection of unusual transactions. Visually clearly better than standard banking apps.

- **Backend module:** `analytics`
- **Related NFRs:** NFR-UX-01, NFR-UX-02, NFR-UX-05, NFR-QUAL-02 ([nfr.md](../nfr.md))

## Stories

- [US-033 — See my financial overview on the dashboard](../stories/us-033-see-my-financial-overview-on-the-dashboard.md)
- [US-034 — Read my monthly report](../stories/us-034-read-my-monthly-report.md)
- [US-035 — Get a weekly Wrapped-style report](../stories/us-035-get-a-weekly-wrapped-style-report.md)
- [US-036 — See my net worth](../stories/us-036-see-my-net-worth.md)
- [US-037 — Get notified about unusual transactions](../stories/us-037-get-notified-about-unusual-transactions.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-08"
SORT id ASC
```
