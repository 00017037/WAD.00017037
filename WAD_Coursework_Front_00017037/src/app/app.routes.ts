import { Routes } from '@angular/router';
import { IssuesComponent } from './components/issues-00017037/issues-00017037.component';
import { IssueDetails00017037Component } from './components/issue-details-00017037/issue-details-00017037.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'issues',
    pathMatch: 'full',
  },

  {
    path: 'issues',
    component: IssuesComponent,
  },
  {
    path: 'issues/:id',
    component: IssueDetails00017037Component,
  },
];
