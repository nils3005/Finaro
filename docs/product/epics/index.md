---
status: accepted
last-reviewed: 2026-11-13
---

# Epics

## Conventions

- **IDs:** epics `EP-NN`, stories `US-NNN` (global, sequential). IDs are never renumbered or reused.
- **Files:** `ep-nn-<name>.md` in `epics/`, `us-nnn-<name>.md` in `stories/`, created from [templates](../../templates/).
- **Status** lives only in the story frontmatter: `planned` → `in-progress` → `done` (or `dropped` — the file is kept).
- **Priority:** `MVP` (first release) · `MVP+` (directly after) · `Later` (not scheduled).
- Commits, PRs, and tests reference story IDs where it helps traceability.

## All epics

| Epic | Scope |
|------|-------|
| [EP-01 — Platform foundation](ep-01-platform-foundation.md) | Repo, skeletons, Docker, CI/CD, deployment, observability, async jobs, load tests, ML service runtime |
| [EP-02 — Identity & account](ep-02-identity-account.md) | Sign-up, login, GDPR export and deletion |
| [EP-03 — Preferences, language & theme](ep-03-preferences-language-theme.md) | `en` / `de`, light / dark, server-side preferences |
| [EP-04 — Transactions](ep-04-transactions.md) | Fast entry, list, CSV import, auto-categorization, multiple accounts |
| [EP-05 — Categories](ep-05-categories.md) | Default and own categories, necessity rating |
| [EP-06 — Budgets](ep-06-budgets.md) | Budgets, alerts, adjustment proposals |
| [EP-07 — Goals](ep-07-goals.md) | Financial goals and on-track status |
| [EP-08 — Analytics & reports](ep-08-analytics-reports.md) | Dashboard, monthly and weekly reports, net worth, anomalies |
| [EP-09 — Planning & forecasting](ep-09-planning-forecasting.md) | Planned expenses, forecasts, financial plan |
| [EP-10 — AI insights](ep-10-ai-insights.md) | Explainable AI summaries and recommendations, Q&A |
| [EP-11 — Notifications](ep-11-notifications.md) | In-app notifications |
| [EP-12 — Landing page & demo](ep-12-landing-page-demo.md) | Public landing page, one-click demo, synthetic data |
| [EP-13 — Plans & billing](ep-13-plans-billing.md) | Free / Pro plans, Stripe (test mode only) |
| [EP-14 — Gamification & social](ep-14-gamification-social.md) | Streaks, friend comparison, sharing |
| [EP-15 — Investments](ep-15-investments.md) | Depot tracking |

## Backlog (Obsidian)

Rendered by the Dataview plugin.

```dataview
TABLE WITHOUT ID file.link AS Story, epic, status, priority, milestone
FROM "product/stories"
WHERE status != "done" AND status != "dropped"
SORT choice(priority = "MVP", 1, choice(priority = "MVP+", 2, 3)) ASC, milestone ASC, id ASC
```

Progress per epic:

```dataview
TABLE WITHOUT ID epic AS Epic, length(rows) AS Stories, length(filter(rows, (r) => r.status = "done")) AS Done
FROM "product/stories"
GROUP BY epic
SORT epic ASC
```
