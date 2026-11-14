import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>Settings</h1>
      <p>Account preferences, security and language settings.</p>
    </div>
    <div class="card placeholder-card">
      <span class="placeholder-icon">⚙</span>
      <p>Settings coming in Phase 5.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
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
export class SettingsComponent {}
