import { Routes } from '@angular/router';
import { Issues00017037Component } from './components/issues-00017037/issues-00017037.component';
import { IssueDetails00017037Component } from './components/issue-details-00017037/issue-details-00017037.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'issues',
    pathMatch: 'full',
  },

  {
    path: 'issues',
    component: Issues00017037Component,
  },
  {
    path: 'issues/:id',
    component: IssueDetails00017037Component,
  },
];
