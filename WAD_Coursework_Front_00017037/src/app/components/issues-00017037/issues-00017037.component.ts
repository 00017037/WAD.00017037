import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue-00017037.interface';
import { Severity00017037Directive } from '../../directives/serverity-00017037.directive';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IssuesClient00017037 } from '../../services/issues-client-00017037.service';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { IDialogData } from '../../interfaces/dialog-data-00017037.interface';
import { IssueForm00017037Component } from '../issue-form-00017037/issue-form-00017037.component';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [
    CommonModule,
    Severity00017037Directive,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './issues-00017037.component.html',
  styleUrl: './issues-00017037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesComponent {
  updateIssuesAction$ = new BehaviorSubject(true);

  issues$: Observable<IIssue[]> = this.updateIssuesAction$.pipe(
    switchMap(() => this.issuesClient.getAllIssues())
  );

  constructor(
    private issuesClient: IssuesClient00017037,
    private dialog: MatDialog
  ) {}

  addIssue() {
    const data: IDialogData = {
      isEditMode: false,
    };

    const dialogRef = this.dialog.open(IssueForm00017037Component, { data });
    dialogRef
      .afterClosed()
      .pipe(
        tap(() => this.updateIssuesAction$.next(true)),
        take(1)
      )
      .subscribe();
  }
}
