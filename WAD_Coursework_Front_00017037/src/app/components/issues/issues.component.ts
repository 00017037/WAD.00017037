import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { SeverityDirective } from '../../directives/serverity.directive';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IssuesClient } from '../../services/issues-client.service';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { IDialogData } from '../../interfaces/dialog-data.interface';
import { IssueFormComponent } from '../issue-form/issue-form.component';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [
    CommonModule,
    SeverityDirective,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesComponent {
  updateIssuesAction$ = new BehaviorSubject(true);

  issues$: Observable<IIssue[]> = this.updateIssuesAction$.pipe(
    switchMap(() => this.issuesClient.getAllIssues())
  );

  constructor(private issuesClient: IssuesClient, private dialog: MatDialog) {}

  addIssue() {
    const data: IDialogData = {
      isEditMode: false,
    };

    const dialogRef = this.dialog.open(IssueFormComponent, { data });
    dialogRef
      .afterClosed()
      .pipe(
        tap(() => this.updateIssuesAction$.next(true)),
        take(1)
      )
      .subscribe();
  }
}
