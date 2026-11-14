---
id: US-004
epic: EP-01
status: in-progress
priority: MVP
milestone: 4
last-reviewed: 2026-11-13
---

# US-004 — Frontend skeleton

Epic: [EP-01 — Platform foundation](../epics/ep-01-platform-foundation.md)

**As** the developer, **I want** an Angular app shell with routing, layout, and charting, **so that** features can be built into a consistent frame.

## Acceptance criteria

- [ ] Standalone-component Angular app with strict TypeScript
- [ ] Routes `/dashboard`, `/transactions`, `/budgets`, `/reports`, `/settings` exist
- [ ] The shell (sidebar, header, content) is responsive: the sidebar collapses to mobile navigation

## Tasks

- [x] Angular app with standalone components
- [x] Charting library (ECharts)
- [x] Routes
- [x] Layout shell: sidebar, header, content area
- [x] Environment files with `apiBaseUrl`
- [ ] Responsive shell: sidebar collapses to mobile navigation

## Technical notes

Theme and i18n infrastructure of milestone 4 are tracked in [US-016](us-016-switch-the-ui-language.md) and [US-017](us-017-switch-between-light-and-dark-theme.md).

## Related

- NFRs: NFR-PLAT-01, NFR-PLAT-02 ([nfr.md](../nfr.md))
