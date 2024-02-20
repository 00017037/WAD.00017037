import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss'
})
export class IssueDetailsComponent {
  issues: IIssue[] = [
    {
      id: 1,
      title: 'Sample Issue 1',
      description: 'This is a sample issue description.',
      createdAt: new Date(),
      severity: Severity.minor,
      comments: []
    },
    {
      id: 2,
      title: 'Sample Issue 2',
      description: 'This is another sample issue description.',
      createdAt: new Date(),
      severity: Severity.major,
      comments: []
    }
  ];

}
