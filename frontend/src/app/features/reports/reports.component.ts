import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>Reports</h1>
      <p>Monthly summaries, category breakdowns and trend analysis.</p>
    </div>
    <div class="card placeholder-card">
      <span class="placeholder-icon">▤</span>
      <p>Reports coming in Phase 8.</p>
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
export class ReportsComponent {}
