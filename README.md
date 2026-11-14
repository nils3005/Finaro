# Finaro — Personal Finance Intelligence Platform

Finaro helps you understand where your money goes. Import transactions, set budgets, track goals, and receive AI-generated recommendations based on your own financial data.

---

## Tech Stack

| Layer          | Technology                                       |
|----------------|--------------------------------------------------|
| Backend        | Spring Boot 3.5, Java 21, Spring Security, Flyway |
| Database       | PostgreSQL 16                                    |
| Frontend       | Angular 19, standalone components, ngx-translate  |
| AI             | Spring AI (provider-agnostic)                    |
| API docs       | OpenAPI 3 / Springdoc                            |
| Infrastructure | Docker, Docker Compose                           |
| CI/CD          | GitHub Actions                                   |
| Hosting        | Render (first), AWS (later)                      |

---

## Project Structure

```
Finaro/
├── backend/              Spring Boot modular monolith
│   ├── src/
│   │   └── main/
│   │       └── resources/
│   │           ├── application.yaml          base config
│   │           ├── application-dev.yaml      local overrides (env-var defaults)
│   │           ├── application-prod.yaml     production (all values required)
│   │           └── db/migration/             Flyway versioned migrations
│   └── Dockerfile
├── frontend/             Angular SPA
│   ├── src/
│   │   ├── app/
│   │   └── environments/ environment.ts / environment.prod.ts
│   ├── nginx.conf        production nginx config (routing + API proxy)
│   └── Dockerfile
├── infra/                Terraform / K8s manifests (future)
├── docs/                 Product, architecture, design, guides — see docs/README.md
├── .github/
│   └── workflows/        CI/CD pipelines
├── docker-compose.yml
├── .env.example
├── CLAUDE.md             Instructions for AI coding agents
└── README.md
```

---

## Quick Start (local development)

### Prerequisites

- Docker and Docker Compose
- Java 21 (to run backend outside Docker)
- Node.js 22+ (to run frontend outside Docker)

### 1. Configure environment

```bash
cp .env.example .env
# Edit .env — fill in DB password
```

### 2. Start the full stack

```bash
docker compose up
```

Services started:

| Service   | URL                                      |
|-----------|------------------------------------------|
| Frontend  | http://localhost                         |
| Backend   | http://localhost:8080                    |
| API docs  | http://localhost:8080/swagger-ui.html    |
| Health    | http://localhost:8080/actuator/health    |
| Postgres  | localhost:5432                           |

---

## Documentation

| Topic | Document |
|-------|----------|
| Vision & product goals | [docs/product/vision.md](docs/product/vision.md) |
| Epics & user stories | [docs/product/epics/index.md](docs/product/epics/index.md) |
| Non-functional requirements | [docs/product/nfr.md](docs/product/nfr.md) |
| Roadmap & milestone status | [docs/product/roadmap.md](docs/product/roadmap.md) |
| Architecture | [docs/architecture/overview.md](docs/architecture/overview.md) |
| Design system | [docs/design/design-system.md](docs/design/design-system.md) |
| Development guidelines | [docs/guides/development.md](docs/guides/development.md) |

Full index: [docs/README.md](docs/README.md).

---

## Configuration

All runtime configuration is injected via environment variables. The `.env.example` file documents every variable with its purpose.

| Profile | How to activate          | Datasource defaults |
|---------|--------------------------|---------------------|
| `dev`   | `SPRING_PROFILES_ACTIVE=dev` | Falls back to `localhost:5432/finaro` |
| `prod`  | `SPRING_PROFILES_ACTIVE=prod` | All vars **required** — app refuses to start if unset |

---

## Contributing / Development Guidelines

See the [development guide](docs/guides/development.md) — code style, security, i18n, testing, and definition of done.

---

## License

Private — not licensed for redistribution.
