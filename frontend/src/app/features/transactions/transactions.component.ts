import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>Transactions</h1>
      <p>Import, manage and categorise your transactions.</p>
    </div>
    <div class="card placeholder-card">
      <span class="placeholder-icon">↕</span>
      <p>Transaction list coming in Phase 6.</p>
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
export class TransactionsComponent {}
