---
id: EP-10
last-reviewed: 2026-11-13
---

# EP-10 — AI insights

Personal, explainable AI guidance grounded in the user's own data and goals — never acting on data without confirmation.

- **Backend module:** `insights`
- **Related NFRs:** NFR-SEC-02 (no PII in prompts beyond need) ([nfr.md](../nfr.md))

## Stories

- [US-042 — Get AI insights on my month](../stories/us-042-get-ai-insights-on-my-month.md)
- [US-043 — Ask questions about my finances](../stories/us-043-ask-questions-about-my-finances.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-10"
SORT id ASC
```
