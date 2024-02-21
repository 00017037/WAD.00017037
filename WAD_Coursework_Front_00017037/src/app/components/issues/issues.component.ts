import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { SeverityDirective } from '../../directives/serverity.directive';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IssuesClient } from '../../services/issues-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [CommonModule, SeverityDirective, MatButtonModule, RouterModule],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss',
})
export class IssuesComponent {
  issues$: Observable<IIssue[]> = this.issuesClient.getAllIssues();

  constructor(private issuesClient: IssuesClient) {}
}
