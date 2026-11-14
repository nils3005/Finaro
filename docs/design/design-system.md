---
status: accepted
last-reviewed: 2026-11-14
source: https://claude.ai/artifact/SDDMpinY4pRYvs5qZA84h9
---
# Design System

The binding visual reference for the Finaro web app. It is derived from the **[Finaro UI prototype](https://claude.ai/artifact/SDDMpinY4pRYvs5qZA84h9)** (9 screens: landing, auth, dashboard, transactions, budgets, goals, monthly report, AI insights, settings). Where the prototype and this document disagree, this document wins; fix the prototype or raise the conflict.

## Brand & Style

Calm, precise, trustworthy. **Modern minimalism**: content (financial data) over decoration, hierarchy through typography, spacing and tonal layering rather than ornament. Navy-anchored, cool neutrals, color used only where it carries meaning.

- No gradients, no decorative illustrations, no emoji.
- Every figure is explained in plain language next to it (e.g. "ggü. Oktober (gleicher Zeitraum)", "Differenz = was übrig bleibt").
- Color never carries meaning alone: status chips always have a text label, charts have legends and value labels.

## Themes

Finaro has a **light** and a **dark** theme, switchable by the user ([US-017](../product/stories/us-017-switch-between-light-and-dark-theme.md)).

- All colors are consumed through the semantic tokens below, exposed as CSS custom properties (`--bg`, `--surface`, …). Components never use raw hex values — this includes badges and chart series.
- Both themes use the same token names; only the values differ. The theme is applied by a `dark` class on the app root.
- Semantic meaning is identical in both themes: `pos` = positive, `warn` = needs attention, `err` = error / over limit / destructive.
- Dark theme has no card shadows (`--shadow: none`); separation comes from surface tones and the `line` border.
- Both themes must meet WCAG AA (NFR-UX-05); see [Accessibility](#accessibility).

## Color tokens

### Neutrals & surfaces

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `bg` | `#f6f8fd` | `#0a111d` | Page background |
| `surface` | `#ffffff` | `#111a29` | Cards, sidebar, inputs, dialogs |
| `surface-2` | `#eff3ff` | `#172235` | Hover, segmented-control track, subtle callouts, neutral chips |
| `surface-3` | `#e6eeff` | `#1e2b42` | Active nav item, progress track, avatar, icon tiles |
| `text` | `#121c2a` | `#e7eefb` | Primary text, figures |
| `text-2` | `#43474f` | `#b6c0d1` | Secondary text, nav items, form labels |
| `text-3` | `#585c6a` | `#97a2b6` | Muted text: captions, table headers, section labels |
| `line` | `#e1e6f2` | `#243149` | Card borders, dividers, table rows (decorative separators only) |
| `outline` | `#858a96` | `#66728a` | Borders that identify a control: text inputs, selects (≥ 3:1 against `surface`, `bg`, `surface-2`) |

### Brand & interaction

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `primary` | `#001736` | `#a9c7ff` | Primary buttons, logo tile, selected filter pill ("Trust Blue") |
| `on-primary` | `#ffffff` | `#001b3d` | Content on `primary` |
| `accent` | `#405f91` | `#7594ca` | Text links, link-buttons, default progress fill, focus ring on inputs, icon tint, selected option border |
| `focus` | `#405f91` | `#a9c7ff` | Keyboard focus outline |
| `band` | `#001736` | `#172235` | Dark brand band (auth side panel, landing sections) |
| `on-band` | `#ebf1ff` | `#e7eefb` | Text on `band` |
| `on-band-2` | `#a9c7ff` | `#a9c7ff` | Secondary text on `band` |

> In the prototype `accent` is named `--c3`.

### Semantic

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `pos` | `#006c49` | `#4edea3` | Positive: savings, income amounts, "Auf Kurs", decrease in spending ("Growth Green") |
| `pos-bg` | `#d7f7e8` | `rgba(78,222,163,.12)` | Positive chip background |
| `warn` | `#8a5300` | `#ffb95f` | Needs attention: budget nearly used, goal behind plan, rate limit (text) |
| `warn-bg` | `#ffeed9` | `rgba(255,185,95,.12)` | Warning chip / banner background |
| `warn-bar` | `#cd8300` | `#ffb95f` | Warning progress fill and notification dot (graphics only, not text) |
| `err` | `#ba1a1a` | `#ffb4ab` | Error, budget exceeded, destructive actions, unread-count badge |
| `err-bg` | `#ffdad6` | `rgba(255,180,171,.12)` | Error chip / banner background |
| `on-err` | `#ffffff` | `#410002` | Content on `err` (destructive button, badge) |

Orange (`warn`) is a **status** color only. It is never used for buttons or links.

### Overlay & elevation

| Token | Light | Dark |
|-------|-------|------|
| `shadow` | `0 4px 20px rgba(0,23,54,.05)` | `none` |
| `shadow-2` | `0 12px 40px rgba(0,23,54,.18)` | `0 12px 40px rgba(0,0,0,.5)` |
| `scrim` | `rgba(18,28,42,.45)` | `rgba(0,0,0,.6)` |

### Data visualization

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `chart-1` … `chart-7` | `#002b5b` `#264778` `#405f91` `#7594ca` `#a9c7ff` `#d6e3ff` `#c4c6d0` | `#d6e3ff` `#a9c7ff` `#7594ca` `#557ab0` `#405f91` `#2c4672` `#4a5366` | Categorical series (categories by share, largest first); `chart-7` = "Sonstiges" |
| `inc` | `#6b8bc3` | `#4f73a8` | Income bars |
| `exp` | `#002b5b` | `#a9c7ff` | Expense bars |

The chart scale is a single blue tonal ramp, inverted in dark mode so the strongest series always has the most contrast against the surface. Positive/negative deltas in charts use `pos` / `err`, not the ramp.

`inc` and `exp` both reach ≥ 3:1 against `surface` (light 3.4 / 14.0, dark 3.6 / 10.2) and differ in lightness from each other (4.1 light, 2.8 dark); the fixed order (income left, expenses right) and the legend disambiguate them further. The light ramp steps `chart-5`–`chart-7` are below 3:1 against `surface`; in the category share bar this is acceptable because every segment is repeated with name, percentage and amount in the list below it.

## Typography

**Geist** (Google Fonts, weights 400/500/600/700), fallback `system-ui, sans-serif`. All financial figures use **tabular numerals** (`font-variant-numeric: tabular-nums`) so columns align.

| Role | Size / line height | Weight | Extra | Use |
|------|--------------------|--------|-------|-----|
| `display` | 52 / 60 (mobile 36 / 44) | 600 | −0.02em | Landing hero only |
| `headline-lg` | 36 / 44 | 600 | −0.02em | Landing section titles, auth brand panel |
| `page-title` | 28 / 36 | 600 | −0.01em | One `h1` per screen |
| `figure-lg` | 28 / 36 | 600 | tabular | KPI value in metric cards |
| `figure-md` | 26 / 32 | 600 | tabular | Goal amount, report totals |
| `title-md` | 18 / 26 | 600–700 | | Goal card title, logo word mark (700, −0.02em) |
| `title-sm` | 16 / 24 | 600 | | Card titles (`h2`) |
| `body-lg` | 15 / 22 | 400–600 | | Landing/auth body, larger buttons |
| `body` | 14 / 20 | 400–500 | | Default text, table cells, nav, buttons |
| `body-sm` | 13 / 20 | 400–600 | | Sub-headings under titles, captions, link actions |
| `label` | 12 / 16 | 500 | 0.02em | Form labels, table headers, chart axis |
| `overline` | 12 / 16 | 500 | 0.04em, uppercase, `text-3` | Section labels in cards ("EINNAHMEN") |
| `micro` | 11 / 14 | 600–700 | | Badges, chart value labels, source hints |

Rules: one `h1` per screen; card titles are `h2`; never go below 11px; secondary information uses `text-2`/`text-3`, not smaller sizes.

## Layout & Spacing

**Spacing scale** (4px base): 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 32 · 48 px. Gaps between cards and sections are **24px**; inside cards 8–20px depending on density.

**App shell**

- Sidebar 248px (`surface`, right border `line`, padding 24px 16px): logo, main nav, footer with settings, user and logout.
- Main area: padding **32px** (mobile **16px**), max-width **1240px**, vertical stack with 24px gap.
- Page header: `h1` + one-line subtitle on the left; actions (month picker, notifications, theme toggle, primary action) on the right, wrapping on narrow screens.
- Marketing pages (landing): centered container, max-width 1200px, side padding 32px (mobile 16px).

**Grids** are fluid (`auto-fit`/`auto-fill` with `minmax`), not a fixed column count:

| Content | Rule |
|---------|------|
| Metric cards | `repeat(auto-fit, minmax(240px, 1fr))` |
| Dashboard widgets | `repeat(auto-fit, minmax(300px, 1fr))` |
| Goal cards | `repeat(auto-fill, minmax(380px, 1fr))` |
| Chart + side panel | flex-wrap, `2 1 520px` / `1 1 320px` |
| Forms in a row | flex-wrap, fields with sensible `flex-basis` (140–220px) |

**Breakpoints** (implement mobile-first, i.e. base styles are the phone layout):

| Width | Behavior |
|-------|----------|
| < 761px (phone) | Sidebar becomes a full-width top bar with horizontally scrolling nav; sidebar footer hidden; main padding 16px; settings tabs scroll horizontally; landing top links hidden, hero 36/44 |
| < 861px | Auth: brand band hidden, form only |
| ≥ 761px (tablet/desktop) | Sidebar layout; grids reflow via `minmax` |

Wide tables scroll horizontally inside their card; dialogs are `width: 100%` with a max-width and 16px page inset.

## Shape & Elevation

| Radius | Use |
|--------|-----|
| 4px | Small chart marks, legend swatches (3px) |
| 8px | Buttons, inputs, segmented-control items, ghost buttons |
| 9–10px | Nav items, icon buttons, icon tiles, segmented-control track, logo tile |
| 12px | Callouts (hint boxes), selectable option cards, feature icons |
| 16px | Cards, dialogs, popovers |
| 999px | Chips, pills, progress bars, badges, avatars |

**Elevation levels**

1. **Flat** — page background (`bg`), sidebar.
2. **Raised** — cards: `surface` + 1px `line` border + `shadow`.
3. **Overlay** — dialogs, popovers (notifications), inline creation panels: `surface` + `shadow-2`; modal dialogs sit on a `scrim`.

## Iconography

Inline SVG line icons, 24×24 viewBox, `stroke="currentColor"`, stroke width **1.75** (2–2.2 for small/emphasis icons like "+" or check), round caps/joins, no fill. Sizes: 20px in nav and icon buttons, 16–18px inline with text. Decorative icons get `aria-hidden="true"`; icon-only buttons get an `aria-label`.

## Components

### Buttons

| Variant | Style |
|---------|-------|
| Primary | `primary` background, `on-primary` text |
| Secondary | transparent, 1px `line` border, `text`; hover `surface-2` |
| Destructive | `err` background, `on-err` text — final confirmation of deletions only |
| Destructive outline | transparent, `err` border and text — entry point to a destructive flow |
| Icon button | 44×44, radius 10, `surface`, 1px `line`, `text-2` |
| Ghost (row actions) | 36×36, radius 8, transparent, `text-3`; hover `surface-3` |
| Link button | no background, 13px/600, `accent` ("Alle gelesen", "Warum?") |

Height **44px** in the app, **48px** on landing and auth; padding 0 16px (0 18–20px at 48px); 14px/600; icon + label gap 8px; disabled = 45% opacity. There is no orange "action" button.

### Inputs & forms

- Label always visible above the field (`label`, `text-2`), 6px gap.
- Input: min-height 44px (48px on auth), radius 8, 1px `outline` border, `surface` background, 14px text (15px on auth).
- Focus: border `accent` + 3px ring of `accent` at ~18% opacity.
- Amount fields use `inputmode="decimal"` and tabular numerals.
- Errors: inline message below the field in `err`; form-level errors as a banner (`err-bg` / `err`, `role="alert"`); rate limiting uses `warn-bg` / `warn`.
- Live validation hints (e.g. password rules) show a check icon in `pos` when met, a dot in `text-3` when not.
- Live calculation feedback (e.g. required monthly savings) appears in the form footer in `text-2`.

### Navigation

- Nav item: 44px min height, radius 10, 20px icon + label, `text-2`; hover `surface-2`; active `surface-3` + `text` + 600 + `aria-current="page"`.
- Main nav: Übersicht, Transaktionen, Budgets, Ziele, Monatsreport, KI-Insights; footer: Einstellungen, user, logout.
- Settings use a secondary vertical tab list (active = `surface` + light shadow), horizontal on phones.

### Segmented control

Track `surface-2`, radius 10, 4px padding; items radius 8, 13px/500, min-height 36px; selected item `surface` + `0 1px 3px rgba(0,0,0,.08)`. Used for period switches (6/12 Monate), type filters and login/register tabs (`role="tablist"`).

### Filter pills

Category filters: radius 999, 1px `line`, `surface`, 13px, min-height 36px; selected = `primary` / `on-primary`.

### Cards

`surface`, 1px `line`, radius 16, `shadow`, padding **24px**. Header: `title-sm` title, optional `body-sm` subtitle in `text-3`, optional right-aligned link action (`accent`, 13px/500).

**Metric card:** `overline` label → `figure-lg` value → context line (13px, `text-3`) with an optional delta chip or progress bar.

### Chips & badges

- Status chip: radius 999, padding 2px 8px, 12px/600, always with text. Tones: `pos` (`pos-bg`/`pos`), `warn` (`warn-bg`/`warn`), `err` (`err-bg`/`err`), neutral (`surface-2`/`text-2`), done (`surface-3`/`text`).
- Count badge (unread notifications): 18px pill on the icon button corner, `err` / `on-err`, 11px/700.
- Pill (metadata like category, "Standard"): `surface-2`, `text-2`/`text-3`, 11–12px.

### Progress bars

Track `surface-3`, height 8px (dashboard) / 10–12px (detail cards), radius 999. Fill `accent` by default; `pos` on track/achieved, `warn-bar` near the limit or behind plan, `err` over budget. Always accompanied by the figures as text ("850 € von 2.400 €", "32 % Sparquote").

### Tables

`surface`, no vertical borders, 1px `line` between rows; header 12px/500 `text-3`, `scope="col"`; cells padding 12–14px 16px, 14px; row hover `surface-2`. Amounts right-aligned, tabular, income in `pos`, expenses in `text` (a leading "−"/"+" sign carries the meaning, not color alone). Row actions are ghost buttons. Empty state: centered 14px `text-3` message inside the card.

### Lists

List rows (recent transactions, notifications, categories): 12px 8px padding, radius 10, hover `surface-2`, leading 40×40 icon tile (`surface-2` + `accent` icon, radius 10).

### Notifications popover

Opens from the bell icon button: 380px wide (max `100vw − 32px`), radius 16, `shadow-2`, `role="region"`. Header with title and "Alle gelesen" link button; rows with an 8px status dot (`err`, `warn-bar`, `accent`), title (600 when unread), body in `text-3`, time stamp.

### Dialogs

Modal on `scrim`, aligned to the top third, `card` + `shadow-2`, max-width 420–480px, padding 24px, 16–18px gap. `role="dialog"` / `role="alertdialog"` for destructive confirmations, `aria-modal="true"`, labelled by its heading. Actions right-aligned: secondary (cancel) then primary/destructive.

### Inline creation panel

"Neues Ziel"/"Neues Budget" can open as an inline card above the list with `shadow-2`, fields in a wrapping row and a footer (divider, live calculation, actions).

### AI insights

AI output is shown as **insight cards**, not as a chat:

- Leading 36×36 tile in `primary` with a sparkle icon, title, plain-language finding, optional tone chip.
- A "Warum?" link button expands the **Datenbasis** (which figures the insight is based on) — every AI statement must be traceable.
- Contextual AI hints elsewhere (e.g. under a goal) are callouts: `surface-2`, radius 12, sparkle icon in `accent`, text, "Ansehen" link.
- Loading uses a spinning icon; feedback actions are secondary buttons.

### Data visualization

- **Income vs. expenses:** grouped bars per month (`inc` / `exp`), radius 6px top / 2px bottom, max 22px wide; surplus label above each pair in `pos` (11px/600); baseline 1px `line`; month labels 12px `text-3`; legend below.
- **Spending by category:** 14px stacked share bar (2px gaps, radius 999, `role="img"` + `aria-label`) above a list with swatch, name, percentage and amount.
- Trend lines: 2px stroke.
- Tooltips follow the overlay level and show exact figures in tabular numerals. Every chart has a legend and a text alternative.

### Brand elements

- Logo: 32×32 tile (radius 9) with a three-bar chart glyph + "Finaro" word mark (18px/700, −0.02em). On `band` the tile inverts (`on-band` background).
- Brand band (`band` / `on-band`): auth side panel and landing sections.
- Theme toggle (moon/sun icon button) and language toggle (DE/EN icon button) sit in the page header.

## Accessibility

- Touch targets ≥ **44×44px** (inline link buttons ≥ 32px high with enough spacing).
- Keyboard focus: 2px `focus` outline, 2px offset, on every interactive element (`:focus-visible`).
- Use real `<button>`, `<a href>`, `<label for>`; icon-only controls have `aria-label`; state via `aria-expanded`, `aria-selected`, `aria-current`.
- Verified text contrast (WCAG AA ≥ 4.5:1) for the main pairs: `text-3` on `bg`/`surface-2` (≥ 6.0 light / 6.2 dark), `accent` on `surface` (6.4 / 5.7), chip text on chip backgrounds (≥ 5.0 / 7.9), `on-primary` on `primary`, `on-err` on `err`.
- Verified non-text contrast (WCAG 1.4.11 ≥ 3:1): input borders (`outline` on `surface`: 3.5 light / 3.6 dark), income/expense bars (see [Data visualization](#data-visualization)), default progress fill `accent` on its `surface-3` track (5.5 light). Progress bars are always accompanied by their figures as text, so the tone fills (`warn-bar` etc.) are not the only carrier of information.
- `line` is below 3:1 by design and must only be used for decorative separation (cards, dividers, table rows), never as the only boundary of a control.
