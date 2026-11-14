---
id: US-016
epic: EP-03
status: planned
priority: MVP
milestone: 4
last-reviewed: 2026-11-13
---

# US-016 — Switch the UI language

Epic: [EP-03 — Preferences, language & theme](../epics/ep-03-preferences-language-theme.md)

**As** a user, **I want** to use Finaro in English or German, **so that** I understand everything in my language.

## Acceptance criteria

- [ ] Locales `en` and `de` are available
- [ ] On first visit the browser language is used
- [ ] The language switcher is reachable from the main navigation
- [ ] No hardcoded UI text; dates, numbers, and currency follow the active locale

## Tasks

- [ ] ngx-translate setup with `en` and `de`
- [ ] Language switcher in the shell
- [ ] Locale-aware pipes

## Technical notes

—

## Related

- NFRs: NFR-UX-04 ([nfr.md](../nfr.md))
