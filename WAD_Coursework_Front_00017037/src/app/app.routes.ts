import { Routes } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';

export const routes: Routes = [
     {
      path:'',
      redirectTo:'issues',
      pathMatch:'full',
     },

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
];

