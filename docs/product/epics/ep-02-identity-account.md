---
id: EP-02
last-reviewed: 2026-11-13
---

# EP-02 — Identity & account

Users can create an account, sign in securely from any client, and keep control over their personal data (GDPR export and deletion).

- **Backend module:** `identity`
- **Related NFRs:** NFR-SEC-01..06, NFR-PLAT-05 ([nfr.md](../nfr.md))

## Stories

- [US-013 — Sign up, log in, and log out](../stories/us-013-sign-up-log-in-and-log-out.md)
- [US-014 — Export my data](../stories/us-014-export-my-data.md)
- [US-015 — Delete my account](../stories/us-015-delete-my-account.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-02"
SORT id ASC
```
