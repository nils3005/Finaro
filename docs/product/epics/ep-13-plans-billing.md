---
id: EP-13
last-reviewed: 2026-11-13
---

# EP-13 — Plans & billing

A realistic SaaS setup with a free and a Pro plan. Runs in Stripe test mode only; no real payments are taken.

- **Backend module:** `billing`
- **Related NFRs:** NFR-SEC-01, NFR-SEC-02 ([nfr.md](../nfr.md))

## Stories

- [US-048 — Free and Pro plans](../stories/us-048-free-and-pro-plans.md)
- [US-049 — Upgrade and manage my subscription](../stories/us-049-upgrade-and-manage-my-subscription.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-13"
SORT id ASC
```
