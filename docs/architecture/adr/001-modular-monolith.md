# ADR 001 — Start with a Modular Monolith

**Date:** 2026-06-03  
**Status:** Accepted

## Decision

Start with a **modular monolith**: a single Spring Boot application with distinct Java packages per domain. Each module owns its own:

- domain model (JPA entities)
- service layer (business logic)
- REST controller (API surface)
- Flyway migrations (schema ownership)
- tests

Cross-module calls go through defined service interfaces, never directly between repositories. No module may access another module's database tables via JPA. This enforces boundaries that make future extraction safe.

---

## Module Boundaries

| Module         | Package                            | Responsibility                                      |
|----------------|------------------------------------|-----------------------------------------------------|
| `identity`     | `de.nils.finaro.identity`          | User registration, login, JWT issuance, roles       |
| `transactions` | `de.nils.finaro.transactions`      | CRUD, CSV import, deduplication, enrichment         |
| `budgets`      | `de.nils.finaro.budgets`           | Budget definitions, period spend tracking, alerts   |
| `analytics`    | `de.nils.finaro.analytics`         | Monthly reports, category aggregation, MoM deltas   |
| `insights`     | `de.nils.finaro.insights`          | AI-generated summaries and recommendations          |
| `notifications`| `de.nils.finaro.notifications`     | In-app alerts, budget threshold notifications       |
