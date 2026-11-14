---
status: accepted
last-reviewed: 2026-11-13
---

# Product Vision

## Vision

Finaro is a personal finance analysis and guidance application. It centralizes financial data from multiple accounts, helps users understand where their money goes, and provides AI-generated feedback that helps them reach their financial goals faster.

## Core product goals

1. Provide a centralized overview of income, expenses, and financial trends.
2. Help users classify and understand spending behavior.
3. Let users define and track financial goals.
4. Use AI to generate forecasts, budgeting advice, and improvement suggestions.
5. Present data through strong visualizations and periodic reports.
6. Start as a mobile-friendly web app; keep the backend ready for a later native mobile app.

## Example AI feedback

- "You exceeded your leisure budget this month."
- "I recommend reducing next month's leisure budget by 50 €."
- "Your restaurant spending increased by 18% compared to last month."
- "You are on track for your savings goal, but only if discretionary spending stays below X."

## Design differentiators

Finaro should stand out through:

- better planning, not only visualization
- a more intuitive UI and faster interaction than typical bank apps
- stronger report storytelling (weekly summaries inspired by "Spotify Wrapped")
- personalized AI feedback grounded in the user's own data
- a cohesive design language
- spending is judged by its value to the user, not only its amount (e.g. expensive textbooks for university are not "savings potential")

## Constraints

- Monetization is demonstrated, not operated: the paywall runs in Stripe **test mode** only; no real payments are taken.
- Data handling must be privacy-conscious.

## Portfolio goal

Besides being a usable product, Finaro is a portfolio / CV project. It should demonstrate commercial-grade engineering: good README, architecture documentation, ADRs, screenshots, a demoable workflow, a real deployment, and a clear value proposition. It should also showcase data engineering skills (see [architecture overview](../architecture/overview.md#data-engineering-angle)).

## Definition of success

The product is successful if a user can:

- understand their finances quickly
- see what changed over time
- know whether they are on track for their goals
- receive useful AI guidance
- act on budget recommendations
- feel motivated to continue using the app regularly
