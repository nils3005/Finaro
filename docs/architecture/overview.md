---
status: accepted
last-reviewed: 2026-11-13
---

# Architecture Overview

How Finaro is built. Individual decisions and their rationale are recorded as [ADRs](adr/).

## Tech stack

| Layer | Technology |
|-------|------------|
| Backend | Spring Boot 3.5, Java 21, Spring Security, Spring Data JPA, Flyway |
| Database | PostgreSQL 16 |
| Frontend | Angular 19 (standalone components, strict TypeScript), ECharts, ngx-translate |
| AI | Spring AI — provider-agnostic |
| API docs | OpenAPI 3 / Springdoc |
| Local runtime | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Hosting | Render (first), AWS (later) |

Planned for MVP+ (each needs its decision recorded before introduction):

| Area | Candidate |
|------|-----------|
| Billing | Stripe (test mode only — [US-049](../product/stories/us-049-upgrade-and-manage-my-subscription.md)) |
| ML service | Python, FastAPI, scikit-learn, MLflow — [ML service](#ml-service-planned-mvp) |
| Observability | OpenTelemetry (NFR-OPS-09) |
| Load testing | k6 or Gatling (NFR-SCAL-03) |

## System context

```text
 ┌──────────────┐      ┌──────────────────────────┐      ┌────────────┐
 │ Web client   │      │ Backend (Spring Boot)    │      │ PostgreSQL │
 │ Angular SPA  │─────▶│ REST API /api/v1         │─────▶│            │
 └──────────────┘ JWT  │ modular monolith         │      └────────────┘
 ┌──────────────┐      │                          │      ┌────────────┐
 │ Native app   │─────▶│                          │─────▶│ LLM API    │
 │ (later)      │      │                          │      └────────────┘
 └──────────────┘      │                          │      ┌────────────┐
                       │                          │◀────▶│ Stripe     │
                       │                          │      │ (test mode,│
                       │                          │      │  MVP+)     │
                       │                          │      └────────────┘
                       │                          │      ┌────────────┐
                       │                          │─────▶│ ML service │
                       └──────────────────────────┘      │ (Python,   │
                                                         │  MVP+)     │
                                                         └────────────┘
```

## Backend modules

Package root: `de.nils.finaro`. Details and boundary rules: [ADR 001](adr/001-modular-monolith.md).

| Module | Responsibility |
|--------|----------------|
| `identity` | Registration, login, JWT, roles, user preferences |
| `transactions` | Transaction CRUD, import, deduplication, enrichment, categories |
| `budgets` | Budget definitions, period spend tracking, alerts |
| `analytics` | Reports, aggregation, trends, forecasts |
| `insights` | AI-generated summaries and recommendations |
| `notifications` | In-app alerts and messages |
| `demo` | Demo account provisioning, synthetic data generator, scheduled demo cleanup ([EP-12](../product/epics/ep-12-landing-page-demo.md)) — uses `identity` and `transactions` only via their public interfaces |
| `billing` | Plans, Stripe Checkout / customer portal, webhook handling, subscription state, entitlements ([EP-13](../product/epics/ep-13-plans-billing.md)) — MVP+ |
| `common` | Cross-cutting concerns only — no business logic |

`demo` and `billing` extend the module list of ADR 001 under the same boundary rules.

## Frontend structure

```text
frontend/src/app/
├── core/        singletons: auth, interceptors, theme & i18n services (planned)
├── layout/      shell: header, sidebar
├── features/    one folder per feature/route (dashboard, transactions, budgets, …)
└── shared/      reusable presentational components (planned)
```

- **Public area** ([US-045](../product/stories/us-045-public-landing-page.md), [US-046](../product/stories/us-046-try-the-demo-with-one-click.md)): landing page and demo entry live outside the auth guard; everything else requires login.
- **Theming** ([US-017](../product/stories/us-017-switch-between-light-and-dark-theme.md)): design tokens from the [design system](../design/design-system.md) are exposed as CSS custom properties; light and dark values are switched via an attribute on the root element (e.g. `data-theme="dark"`). Components use tokens only — never hardcoded colors. Charts read the same tokens.
- **Responsiveness** (NFR-PLAT-02): mobile-first SCSS with the breakpoints from the design system.

## Configuration & profiles

All runtime configuration is injected via environment variables; `.env.example` documents every variable.

| Profile | Activation | Datasource |
|---------|------------|------------|
| `dev` | `SPRING_PROFILES_ACTIVE=dev` | defaults to `localhost:5432/finaro` |
| `prod` | `SPRING_PROFILES_ACTIVE=prod` | all variables required — app refuses to start if unset |

Billing (MVP+) adds the Stripe secret key and webhook signing secret as environment variables. The application refuses to start if a live key is configured ([US-049](../product/stories/us-049-upgrade-and-manage-my-subscription.md)).

## Deployment

- **Local:** `docker compose up` (db, backend, frontend with health checks).
- **First target — Render:** backend and frontend as Docker-based web services, Render-managed PostgreSQL, secrets in Render env settings, CD from `main`. The public demo ([US-046](../product/stories/us-046-try-the-demo-with-one-click.md)) needs an always-on (paid) backend instance — free instances spin down and cause long cold starts — and a database plan that does not expire.
- **Later — AWS:** same images; infrastructure as code in `infra/` (Terraform) when introduced.

Evolution path: modular monolith → dockerized local runtime → CI → first deployment (Render) → targeted service extraction → Kubernetes / cloud hardening (AWS).

## AI layer

- Spring AI as abstraction; the concrete provider (Claude, OpenAI, …) is chosen by configuration (`.env`), not code.
- AI is used for summaries, recommendations, and categorization support.
- Prompts receive aggregated, minimal data — no unnecessary PII.
- Outputs must be explainable and reference the underlying data.
- **Questions about figures** ([US-043](../product/stories/us-043-ask-questions-about-my-finances.md)) are answered via tool calling: the LLM calls the backend's own analytics services, and the numbers are computed in SQL. No vector search (RAG) over transactions — aggregation questions need exact computation, not similarity search. A vector store (e.g. pgvector) is only considered for free-text content if such a need arises.

## ML service (planned, MVP+)

A separate Python service for classic ML: categorization ([US-022](../product/stories/us-022-get-category-suggestions-automatically.md)), anomaly detection ([US-037](../product/stories/us-037-get-notified-about-unusual-transactions.md)), forecasting ([US-039](../product/stories/us-039-forecast-my-balance.md)).

- **Why a separate service:** different language and runtime (Python ML ecosystem), independent resource profile and release cycle. This is a new service, not an extraction under the [ADR 001 trigger criteria](adr/001-modular-monolith.md#evolution-trigger-criteria) — it needs its own ADR before implementation.
- **Contract:** versioned REST API (OpenAPI); the backend calls it with timeouts and falls back to rule-based logic if it is unavailable. The backend remains the system of record; the ML service holds no user data beyond what a request needs.
- **Training data:** synthetic data from the generator ([US-047](../product/stories/us-047-synthetic-transaction-data-generator.md)), imported transactions, and user corrections ([US-019](../product/stories/us-019-record-a-transaction-quickly.md)).
- **MLOps:** experiment and model tracking with MLflow; every model is evaluated against a simple baseline (rules, seasonal naive forecast) and an LLM baseline where applicable.

## Data engineering angle

The transaction pipeline doubles as a data engineering showcase:

- raw import → normalization → deduplication → enrichment → aggregation → reporting layer
- data quality checks on import; synthetic data generation ([US-047](../product/stories/us-047-synthetic-transaction-data-generator.md)); feedback loop from user corrections into model training ([US-019](../product/stories/us-019-record-a-transaction-quickly.md))
- possible later additions: batch jobs, analytics schema, event-based processing

The architecture should keep this integration possible without restructuring. Offline analytics experiments (e.g. dbt + DuckDB on anonymized exports) live outside this repository.

## Scaling path

The current architecture is sized for the current load. Each next step has a measurable trigger and gets an ADR when it is taken (NFR-SCAL-04).

| Concern | Now | Next step | Trigger |
|---------|-----|-----------|---------|
| Request load | One stateless backend instance | Multiple instances behind a load balancer | Sustained CPU or p95 latency above target in load tests / production |
| Async work | In-process async jobs / job table in PostgreSQL | Message broker (e.g. RabbitMQ, Kafka) | Job throughput or fan-out to multiple consumers exceeds what a DB-backed queue handles, or more services need the same events |
| Read load | Indexed queries on the primary DB | Read replica for analytics; cache for hot aggregates | Analytics queries measurably slow down transactional requests |
| Module scaling | Modular monolith | Extract a module as a service | All [ADR 001 trigger criteria](adr/001-modular-monolith.md#evolution-trigger-criteria) met |
| Infrastructure | Render, Docker images | AWS with Terraform, container orchestration | Render limits reached, or needs that require cloud-native services |
