import { Routes } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path:'issues',
        component: IssuesComponent,
        children:[
          {
            path:':id',
            component:IssueDetailsComponent
          }
        ]
      }
    ]
  },

];

