import { Component } from '@angular/core';

@Component({
  selector: 'app-budgets',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>Budgets</h1>
      <p>Set spending limits per category and track progress.</p>
    </div>
    <div class="card placeholder-card">
      <span class="placeholder-icon">◎</span>
      <p>Budget management coming in Phase 7.</p>
    </div>
  `,
  styles: [`
    .placeholder-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      min-height: 240px;
      color: var(--color-on-surface-variant);
    }
    .placeholder-icon {
      font-size: 2rem;
      opacity: 0.4;
    }
    p { font-size: 0.875rem; }
  `],
})
export class BudgetsComponent {}
