---
status: accepted
last-reviewed: 2026-11-13
---

# Roadmap

Plans **when** stories are built. Milestone status lives here; story status lives in each [story](epics/index.md)'s frontmatter. Other documents (README, CLAUDE.md) link here instead of repeating status.

Status: ✅ done · 🔄 in progress · ⬜ planned

## Overview

| #   | Milestone                                                             | Phase | Status |
| --- | --------------------------------------------------------------------- | ----- | ------ |
| 1   | Repository foundation                                                 | MVP   | ✅      |
| 2   | Backend skeleton                                                      | MVP   | ✅      |
| 3   | Docker & local dev environment                                        | MVP   | ✅      |
| 4   | Frontend skeleton, theme & i18n                                       | MVP   | 🔄     |
| 5   | CI pipeline                                                           | MVP   | ⬜      |
| 6   | Authentication & user preferences                                     | MVP   | ⬜      |
| 7   | Transactions & categories                                             | MVP   | ⬜      |
| 8   | Budgets & notifications                                               | MVP   | ⬜      |
| 9   | Goals                                                                 | MVP   | ⬜      |
| 10  | Dashboard, monthly report & data rights                               | MVP   | ⬜      |
| 11  | AI insights                                                           | MVP   | ⬜      |
| 12  | Landing page, demo mode & first deployment (Render) — **MVP release** | MVP   | ⬜      |
| 13  | MVP+ (product, billing, data/ML, scalability tracks)                  | MVP+  | ⬜      |

Stories with priority `Later` are intentionally not scheduled.

In Obsidian, the stories of a milestone with their status:

```dataview
TABLE WITHOUT ID file.link AS Story, epic, status
FROM "product/stories"
WHERE milestone = 7
SORT id ASC
```

---

## Milestones

### 1 — Repository foundation ✅

- [US-001 — Repository foundation](stories/us-001-repository-foundation.md)

### 2 — Backend skeleton ✅

- [US-002 — Backend skeleton](stories/us-002-backend-skeleton.md)

### 3 — Docker & local dev environment ✅

- [US-003 — Local development environment with Docker](stories/us-003-local-development-environment-with-docker.md)

### 4 — Frontend skeleton, theme & i18n 🔄

- [US-004 — Frontend skeleton](stories/us-004-frontend-skeleton.md)
- [US-016 — Switch the UI language](stories/us-016-switch-the-ui-language.md)
- [US-017 — Switch between light and dark theme](stories/us-017-switch-between-light-and-dark-theme.md)

### 5 — CI pipeline ⬜

Set up early so every following milestone is checked automatically.

- [US-005 — CI pipeline](stories/us-005-ci-pipeline.md)

### 6 — Authentication & user preferences ⬜

- [US-013 — Sign up, log in, and log out](stories/us-013-sign-up-log-in-and-log-out.md)
- [US-018 — Preferences follow me across devices](stories/us-018-preferences-follow-me-across-devices.md)

### 7 — Transactions & categories ⬜

Decide module boundary verification (Spring Modulith, ADR) before starting — see [overview](../architecture/overview.md#backend-modules).

- [US-019 — Record a transaction quickly](stories/us-019-record-a-transaction-quickly.md)
- [US-020 — Browse, edit, and delete transactions](stories/us-020-browse-edit-and-delete-transactions.md)
- [US-025 — Use default categories](stories/us-025-use-default-categories.md)
- [US-026 — Manage my own categories](stories/us-026-manage-my-own-categories.md)

### 8 — Budgets & notifications ⬜

- [US-028 — Set budgets and track progress](stories/us-028-set-budgets-and-track-progress.md)
- [US-029 — Get budget alerts](stories/us-029-get-budget-alerts.md)
- [US-044 — See in-app notifications](stories/us-044-see-in-app-notifications.md)

### 9 — Goals ⬜

- [US-031 — Define a financial goal](stories/us-031-define-a-financial-goal.md)
- [US-032 — See whether I am on track](stories/us-032-see-whether-i-am-on-track.md)

### 10 — Dashboard, monthly report & data rights ⬜

- [US-033 — See my financial overview on the dashboard](stories/us-033-see-my-financial-overview-on-the-dashboard.md)
- [US-034 — Read my monthly report](stories/us-034-read-my-monthly-report.md)
- [US-014 — Export my data](stories/us-014-export-my-data.md)
- [US-015 — Delete my account](stories/us-015-delete-my-account.md)

### 11 — AI insights ⬜

Decision: [provider-agnostic via Spring AI](../architecture/overview.md#ai-layer).

- [US-042 — Get AI insights on my month](stories/us-042-get-ai-insights-on-my-month.md)

### 12 — Landing page, demo mode & first deployment (Render) — MVP release ⬜

- [US-047 — Synthetic transaction data generator](stories/us-047-synthetic-transaction-data-generator.md) — can be pulled forward after milestone 7
- [US-045 — Public landing page](stories/us-045-public-landing-page.md)
- [US-046 — Try the demo with one click](stories/us-046-try-the-demo-with-one-click.md)
- [US-006 — Production deployment on Render](stories/us-006-production-deployment-on-render.md)

### 13 — MVP+ ⬜

To be split into concrete milestones after the MVP release. **CSV import comes first**, because the data/ML track depends on real transaction data.

**Product track**

- [US-021 — Import transactions from CSV](stories/us-021-import-transactions-from-csv.md)
- [US-023 — Track multiple accounts](stories/us-023-track-multiple-accounts.md)
- [US-027 — Rate categories by necessity](stories/us-027-rate-categories-by-necessity.md)
- [US-038 — Plan future expenses](stories/us-038-plan-future-expenses.md)
- [US-035 — Get a weekly Wrapped-style report](stories/us-035-get-a-weekly-wrapped-style-report.md)
- [US-036 — See my net worth](stories/us-036-see-my-net-worth.md)
- [US-030 — Review proposed budget adjustments](stories/us-030-review-proposed-budget-adjustments.md)

**Billing track** (Stripe test mode only)

- [US-048 — Free and Pro plans](stories/us-048-free-and-pro-plans.md)
- [US-049 — Upgrade and manage my subscription](stories/us-049-upgrade-and-manage-my-subscription.md)

**Data / ML track**

- [US-010 — ML service foundation](stories/us-010-ml-service-foundation.md) — ADR first
- [US-022 — Get category suggestions automatically](stories/us-022-get-category-suggestions-automatically.md)
- [US-037 — Get notified about unusual transactions](stories/us-037-get-notified-about-unusual-transactions.md)
- [US-039 — Forecast my balance](stories/us-039-forecast-my-balance.md)

**Scalability & operations track**

- [US-007 — Asynchronous job processing](stories/us-007-asynchronous-job-processing.md)
- [US-008 — Load tests](stories/us-008-load-tests.md)
- [US-009 — Observability: metrics, tracing, error tracking](stories/us-009-observability-metrics-tracing-error-tracking.md)

---

## Out of scope for the MVP

- full banking integrations
- B2B / team accounts (multi-tenant SaaS)
- billing / paywall (planned for MVP+); real payments are never in scope — Stripe test mode only
- native mobile app (backend stays ready for it — NFR-PLAT-03)
- microservices, Kubernetes, Terraform (the Python ML service in MVP+ is the one planned additional service)
- advanced forecasting models
- complex AI orchestration
- AWS deployment
