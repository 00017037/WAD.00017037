import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { SeverityDirective } from '../../directives/serverity.directive';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [CommonModule,SeverityDirective,MatButtonModule,RouterModule],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss'
})
export class IssuesComponent {
  issues: IIssue[] = [
    {
      id:1,
      title: 'Sample Issue 1',
      description: 'This is a sample issue description.',
      createdAt: new Date(),
      severity: Severity.minor,
      comments: []
    },
    {
      id:2,
      title: 'Sample Issue 2',
      description: 'This is another sample issue description.',
      createdAt: new Date(),
      severity: Severity.major,
      comments: []
    }
  ];
}
