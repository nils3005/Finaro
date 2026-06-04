import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard — Finaro',
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/transactions.component').then(m => m.TransactionsComponent),
    title: 'Transactions — Finaro',
  },
  {
    path: 'budgets',
    loadComponent: () =>
      import('./features/budgets/budgets.component').then(m => m.BudgetsComponent),
    title: 'Budgets — Finaro',
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports.component').then(m => m.ReportsComponent),
    title: 'Reports — Finaro',
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings.component').then(m => m.SettingsComponent),
    title: 'Settings — Finaro',
  },
];
