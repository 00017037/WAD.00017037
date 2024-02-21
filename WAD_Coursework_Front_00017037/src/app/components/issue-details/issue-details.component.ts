import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IssuesClient } from '../../services/issues-client.service';
import {
  BehaviorSubject,
  Observable,
  shareReplay,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IDialogData } from '../../interfaces/dialog-data.interface';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { IComment } from '../../interfaces/comment..interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [
    CommonModule,
    IssueFormComponent,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss',
})
export class IssueDetailsComponent {
  constructor(
    private issueClient: IssuesClient,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  updateIssueAction$ = new BehaviorSubject(true);

  issueByID$: Observable<IIssue> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => {
      const id = parseInt(params.get('id') as string, 10);
      return this.issueClient.getIssueById(id);
    })
  );

  issue$ = this.updateIssueAction$.pipe(
    switchMap(() => this.issueByID$),
    shareReplay(1)
  );

  editIssue(issue: IIssue) {
    const data: IDialogData = {
      isEditMode: true,
      item: issue,
    };
    const dialogRef = this.dialog.open(IssueFormComponent, { data });
    return dialogRef
      .afterClosed()
      .pipe(
        tap(() => this.updateIssueAction$.next(true)),
        take(1)
      )
      .subscribe();
  }

  editComment(comment: IComment) {}

  deleteComment(comment: IComment) {}

  addComment() {}

  deleteIssue(issue: IIssue) {}
}
