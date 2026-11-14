import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { path: '/dashboard',    label: 'Dashboard'     },
    { path: '/transactions', label: 'Transactions'  },
    { path: '/budgets',      label: 'Budgets'       },
    { path: '/reports',      label: 'Reports'       },
    { path: '/settings',     label: 'Settings'      },
  ];
}
