---
id: US-049
epic: EP-13
status: planned
priority: MVP+
milestone: 13
last-reviewed: 2026-11-13
---

# US-049 — Upgrade and manage my subscription

Epic: [EP-13 — Plans & billing](../epics/ep-13-plans-billing.md)

**As** a user, **I want** to upgrade to Pro and manage or cancel my subscription, **so that** I control my plan myself.

## Acceptance criteria

- [ ] Upgrade via Stripe Checkout; management via the Stripe customer portal
- [ ] Subscription state changes only through verified, idempotently processed webhooks
- [ ] Stripe runs in test mode only; the app refuses to start with live keys
- [ ] Checkout is clearly marked as a demo, including a test card hint

## Tasks

- [ ] Stripe integration (test mode)
- [ ] Webhook endpoint with signature check and idempotency
- [ ] Live-key guard on startup
- [ ] Billing UI

## Technical notes

—

## Related

- NFRs: NFR-SEC-01, NFR-SEC-02 ([nfr.md](../nfr.md))
