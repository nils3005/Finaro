# Finaro — Personal Finance Intelligence Platform

Finaro helps you understand where your money goes. Import transactions, set budgets, track goals, and receive AI-generated recommendations based on your own financial data.

---

## Tech Stack

| Layer          | Technology                                       |
|----------------|--------------------------------------------------|
| Backend        | Spring Boot 3.5, Java 21, Spring Security, Flyway |
| Database       | PostgreSQL 16                                    |
| Frontend       | Angular 19, standalone components, ngx-translate  |
| AI             | Spring AI (OpenAI-compatible)                    |
| API docs       | OpenAPI 3 / Springdoc                            |
| Infrastructure | Docker, Docker Compose                           |
| CI/CD          | GitHub Actions                                   |

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
│   ├── design/           UI mockups and design assets
│   ├── nginx.conf        production nginx config (routing + API proxy)
│   └── Dockerfile
├── infra/                Terraform / K8s manifests (future)
├── docs/
│   ├── adr/              Architecture Decision Records
│   └── *.md              Project briefs and instructions
├── .github/
│   └── workflows/        CI/CD pipelines
├── docker-compose.yml
├── .env.example
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
# Edit .env — fill in DB password and JWT secret
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

The backend waits for the database to pass its health check before starting; the frontend waits for the backend. No manual ordering required.

### 3. Run backend locally (without Docker)

Requires a running PostgreSQL instance (e.g. via `docker compose up db`).

```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

The `dev` profile picks up `application-dev.yaml` which defaults to `localhost:5432` if `SPRING_DATASOURCE_URL` is not set.

### 4. Run frontend locally (without Docker)

```bash
cd frontend
npm install
npm start
# App: http://localhost:4200
# Proxies /api/* to http://localhost:8080 via Angular dev-server proxy
```

---

## Milestone Status

| # | Milestone                                  | Status         |
|---|--------------------------------------------|----------------|
| 1 | Repository structure, docs, build skeleton | ✅ Done        |
| 2 | Backend skeleton: health endpoint + DB     | 🔄 In progress |
| 3 | Transaction flow end to end                | ⬜ Planned     |
| 4 | Authentication and budget logic            | ⬜ Planned     |
| 5 | Reporting and AI-generated feedback        | ⬜ Planned     |
| 6 | CI/CD and deployment preparation           | ⬜ Planned     |
| 7 | Docker-based hosting / cloud deployment    | ⬜ Planned     |

---

## Architecture

Finaro is a **modular monolith** — a single deployable unit with strict domain boundaries. Services are extracted only when there is a clear operational reason to do so.

Domain modules:

- `identity` — authentication, authorization, user management
- `transactions` — transaction CRUD, CSV import, deduplication, enrichment
- `budgets` — budget definitions, period-aware spend tracking
- `analytics` — monthly reports, category aggregation, trend calculation
- `insights` — AI-generated summaries and recommendations
- `notifications` — budget alerts and in-app messages

See [`docs/adr/001-modular-monolith.md`](docs/adr/001-modular-monolith.md) for the architectural rationale.

---

## Configuration

All runtime configuration is injected via environment variables. The `.env.example` file documents every variable with its purpose.

| Profile | How to activate          | Datasource defaults |
|---------|--------------------------|---------------------|
| `dev`   | `SPRING_PROFILES_ACTIVE=dev` | Falls back to `localhost:5432/finaro` |
| `prod`  | `SPRING_PROFILES_ACTIVE=prod` | All vars **required** — app refuses to start if unset |

---

## Security

- JWT-based authentication (access + refresh tokens)
- All endpoints require authentication except `/auth/**` and `/actuator/health`
- Passwords hashed with BCrypt
- No sensitive data in logs
- Input validation on all API boundaries
- CORS configured per environment
- Backend container runs as non-root user
- OWASP Top 10 treated as first-class requirements

---

## i18n

The UI supports language selection. Currently available: **English** and **German**.
Language preference is persisted per user account.

---

## Contributing / Development Guidelines

- Small, focused commits — one concern per commit
- Tests required for all business logic
- Flyway migration required for every schema change
- API contracts kept stable; breaking changes via versioning
- Production-grade code: security-by-design, no debug code in main, consistent style

---

## License

Private — not licensed for redistribution.
