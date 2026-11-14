---
status: accepted
last-reviewed: 2026-11-13
---

# Non-functional Requirements

Quality attributes and constraints that apply **across** stories. Functional scope lives in [epics and stories](epics/index.md); stories reference the NFR IDs that matter for them.

## Conventions

- Every NFR has a stable ID `NFR-<AREA>-<NN>`. IDs are never renumbered or reused; obsolete NFRs are struck through and marked `dropped`.
- **Priority:** `MVP` · `MVP+` · `Later` — same meaning as for stories.

## Security & privacy (`SEC`)

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-SEC-01 | Security by design; OWASP Top 10 addressed by default. | MVP |
| NFR-SEC-02 | No passwords, tokens, PII, or financial figures in logs. | MVP |
| NFR-SEC-03 | Passwords hashed with BCrypt; refresh tokens stored hashed. | MVP |
| NFR-SEC-04 | HTTPS enforced in production; security headers (CSP, X-Frame-Options, HSTS) set. | MVP |
| NFR-SEC-05 | Privacy-aware data storage and auditability of sensitive operations. | MVP |
| NFR-SEC-06 | Public unauthenticated endpoints (register, login, demo start) are rate-limited. | MVP |

Implementation rules for these live in the [development guide](../guides/development.md#security).

## Platform & clients (`PLAT`)

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-PLAT-01 | The first client is a **web app** (Angular SPA). | MVP |
| NFR-PLAT-02 | The web app is **mobile-friendly**: responsive layouts for desktop, tablet, and phone (breakpoints per [design system](../design/design-system.md#layout--spacing)); touch-friendly controls; core flows (esp. fast transaction entry) fully usable on a phone. | MVP |
| NFR-PLAT-03 | The backend is **client-agnostic** so a native mobile app can be added later without backend rewrites: all functionality exposed via a versioned REST API (`/api/v1/...`), no business logic only in the web client, no server-rendered UI. | MVP |
| NFR-PLAT-04 | The OpenAPI specification is the API contract for all clients and is kept accurate. | MVP |
| NFR-PLAT-05 | Authentication works for non-browser clients (bearer tokens), not only for browser cookies. | MVP |
| NFR-PLAT-06 | User preferences (language, theme, …) are stored server-side so they follow the user across clients and devices. | MVP |
| NFR-PLAT-07 | A native mobile app using the same backend API. | Later |

## Deployment & operations (`OPS`)

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-OPS-01 | The whole system (frontend, backend, database) is **really deployable** to the public internet, not only runnable locally. | MVP |
| NFR-OPS-02 | First deployment target: **Render**. Later target: **AWS**. | MVP (Render) · Later (AWS) |
| NFR-OPS-03 | Deployment stays **provider-agnostic**: services ship as Docker images; all configuration and secrets come from environment variables (12-factor); no provider-specific code in the application. | MVP |
| NFR-OPS-04 | Reproducible local environment via Docker Compose. | MVP |
| NFR-OPS-05 | CI builds and tests every push; CD deploys from the main branch. | MVP |
| NFR-OPS-06 | Database schema changes only via Flyway migrations, applied automatically on deploy. | MVP |
| NFR-OPS-07 | Observability: structured logging, health checks, metrics; tracing and error tracking when feasible. | MVP (logs, health) · MVP+ (rest) |
| NFR-OPS-08 | Kubernetes and Terraform-based infrastructure. | Later |
| NFR-OPS-09 | Telemetry uses OpenTelemetry (vendor-neutral), so traces span all services (backend, ML service). | MVP+ |

## Scalability (`SCAL`)

Scalability is demonstrated through justified design decisions and measurements, not through infrastructure the current load does not need.

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-SCAL-01 | The backend is stateless (no server-side session state) and can run as multiple instances behind a load balancer. | MVP |
| NFR-SCAL-02 | Long-running work (file import, ML inference, report generation) runs asynchronously, not in the request thread. | MVP+ |
| NFR-SCAL-03 | Reproducible load tests for core endpoints; results and target values are documented. | MVP+ |
| NFR-SCAL-04 | Every scaling step beyond the current architecture (message broker, service extraction, read replicas, cache layer) is introduced only with a measurable trigger documented in an ADR. | MVP |
| NFR-SCAL-05 | All list endpoints are paginated. | MVP |

## Quality (`QUAL`)

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-QUAL-01 | Production-grade, maintainable, testable code; business logic covered by tests. | MVP |
| NFR-QUAL-02 | Performance sufficient for personal finance workloads. | MVP |
| NFR-QUAL-03 | Stable API contracts; breaking changes only via a new API version. | MVP |

## UX (`UX`)

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-UX-01 | Modern, minimalistic, informative UI following one coherent [design system](../design/design-system.md). | MVP |
| NFR-UX-02 | Animations are clean and tasteful, never distracting. | MVP |
| NFR-UX-03 | Fast and intuitive for repeated daily use; clarity of financial data has priority. | MVP |
| NFR-UX-04 | All user-facing text is translatable (no hardcoded strings). | MVP |
| NFR-UX-05 | Both themes meet WCAG AA contrast for text and data visualizations. | MVP |
