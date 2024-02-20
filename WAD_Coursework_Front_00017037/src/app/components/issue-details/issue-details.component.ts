import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IssuesClient } from '../../services/issues-client.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss'
})
export class IssueDetailsComponent {
   constructor(private issueClient:IssuesClient,private route:ActivatedRoute){}

   issue$:Observable<IIssue>= this.route.paramMap.pipe(switchMap((params:ParamMap)=>{
     const id = parseInt(params.get('id') as string,10);
     return this.issueClient.getIssueById(id)
   }))




}
