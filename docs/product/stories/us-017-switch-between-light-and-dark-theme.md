---
id: US-017
epic: EP-03
status: planned
priority: MVP
milestone: 4
last-reviewed: 2026-11-14
---

# US-017 — Switch between light and dark theme

Epic: [EP-03 — Preferences, language & theme](../epics/ep-03-preferences-language-theme.md)

**As** a user, **I want** to choose a light or dark theme, **so that** the app is comfortable in any environment.

## Acceptance criteria

- [ ] Light and dark themes exist; the user can switch at any time without reload
- [ ] Before login and on first visit, the OS setting (`prefers-color-scheme`) is used
- [ ] The switcher is reachable from the main navigation or settings
- [ ] Components and charts use design tokens only; both themes meet WCAG AA

## Tasks

- [x] Define the dark palette in the design system
- [ ] Tokens as CSS custom properties
- [ ] Theme service
- [ ] Switcher in the shell
- [ ] Charts read theme tokens

## Technical notes

Tokens: [design system](../../design/design-system.md#themes).

## Related

- NFRs: NFR-UX-01, NFR-UX-05 ([nfr.md](../nfr.md))
