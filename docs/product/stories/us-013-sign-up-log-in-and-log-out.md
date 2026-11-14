---
id: US-013
epic: EP-02
status: planned
priority: MVP
milestone: 6
last-reviewed: 2026-11-13
---

# US-013 — Sign up, log in, and log out

Epic: [EP-02 — Identity & account](../epics/ep-02-identity-account.md)

**As** a user, **I want** to create an account and sign in securely, **so that** my financial data is only accessible to me.

## Acceptance criteria

- [ ] Users can register with email and password, log in, and log out
- [ ] Access tokens are short-lived; refresh tokens rotate and are stored hashed
- [ ] Passwords are hashed with BCrypt
- [ ] Bearer-token auth works for non-browser clients; the backend keeps no session state
- [ ] All endpoints except the explicitly public ones require authentication (deny by default)
- [ ] Register and login are rate-limited
- [ ] End-to-end: register → login → protected route → token expiry

## Tasks

- [ ] `users` table (id, email, password_hash, created_at, roles)
- [ ] `refresh_tokens` table (hashed)
- [ ] Register / login / refresh / logout endpoints
- [ ] Spring Security filter chain (deny by default)
- [ ] Rate limiting
- [ ] Angular: login page, token handling, auth guard, HTTP interceptor
- [ ] Tests incl. e2e

## Technical notes

—

## Related

- NFRs: NFR-SEC-01, NFR-SEC-03, NFR-SEC-06, NFR-PLAT-05, NFR-SCAL-01 ([nfr.md](../nfr.md))
