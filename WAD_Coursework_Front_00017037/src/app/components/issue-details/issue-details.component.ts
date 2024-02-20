import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss'
})
export class IssueDetailsComponent {
   constructor(private route:ActivatedRoute){}

}
