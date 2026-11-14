---
id: EP-03
last-reviewed: 2026-11-13
---

# EP-03 — Preferences, language & theme

The app speaks the user's language, looks right in light and dark mode, and remembers these preferences across devices.

- **Backend module:** `identity` (preferences), frontend `core/`
- **Related NFRs:** NFR-PLAT-06, NFR-UX-01, NFR-UX-04, NFR-UX-05 ([nfr.md](../nfr.md))

## Stories

- [US-016 — Switch the UI language](../stories/us-016-switch-the-ui-language.md)
- [US-017 — Switch between light and dark theme](../stories/us-017-switch-between-light-and-dark-theme.md)
- [US-018 — Preferences follow me across devices](../stories/us-018-preferences-follow-me-across-devices.md)

## Status

Rendered by the Obsidian Dataview plugin; on GitHub, open the stories above.

```dataview
TABLE WITHOUT ID file.link AS Story, status, priority, milestone
FROM "product/stories"
WHERE epic = "EP-03"
SORT id ASC
```
