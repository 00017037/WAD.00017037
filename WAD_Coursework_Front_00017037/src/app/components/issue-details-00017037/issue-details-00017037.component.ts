import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue-00017037.interface';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IssuesClient00017037 } from '../../services/issues-client-00017037.service';
import {
  BehaviorSubject,
  Observable,
  filter,
  shareReplay,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  ICommenDialogData,
  IDeleteDialogData,
  IDialogData,
} from '../../interfaces/dialog-data-00017037.interface';
import { IssueForm00017037Component } from '../issue-form-00017037/issue-form-00017037.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { IComment } from '../../interfaces/comment-0001703.interface';
import { MatButtonModule } from '@angular/material/button';
import { Comment00017037Component } from '../comment-form-00017037/comment-form-00017037.component';
import { ConfirmationDialog00017037Component } from '../confirmation-dialog-00017037/confirmation-dialog-00017037.component';
import { CommentsClient00017037 } from '../../services/comments-client-00017037.service';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [
    CommonModule,
    IssueForm00017037Component,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './issue-details-00017037.component.html',
  styleUrl: './issue-details-00017037.component.scss',
})
export class IssueDetails00017037Component {
  constructor(
    private issueClient: IssuesClient00017037,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private commentsClient: CommentsClient00017037,
    private location: Location
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
    const dialogRef = this.dialog.open(IssueForm00017037Component, { data });
    this.updateAfterDialogClose(dialogRef);
  }

  editComment(comment: IComment) {
    const data: ICommenDialogData = {
      isEditMode: true,
      item: comment,
      issueId: comment.issueId,
    };
    const dialogRef = this.dialog.open(Comment00017037Component, { data });

    this.updateAfterDialogClose(dialogRef);
  }

  deleteComment(comment: IComment) {
    const data: IDeleteDialogData = {
      title: 'Comment',
    };

    const dialogRef = this.dialog.open(ConfirmationDialog00017037Component, {
      data,
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((isConfirmed) => isConfirmed),
        switchMap(() => {
          return this.commentsClient.deleteCommentById(comment.id);
        }),
        tap(() => {
          this.updateIssueAction$.next(true);
        }),
        take(1)
      )
      .subscribe();
  }

  addComment(issueId: number) {
    const data: ICommenDialogData = {
      isEditMode: false,
      issueId,
    };
    const dialogRef = this.dialog.open(Comment00017037Component, { data });
    this.updateAfterDialogClose(dialogRef);
  }

  deleteIssue(issue: IIssue) {
    const data: IDeleteDialogData = {
      title: 'Issue',
    };

    const dialogRef = this.dialog.open(ConfirmationDialog00017037Component, {
      data,
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((isConfirmed) => isConfirmed),
        switchMap(() => {
          return this.issueClient.deleteIssueById(issue.id);
        }),
        tap(() => this.location.back()),
        take(1)
      )
      .subscribe();
  }

  updateAfterDialogClose(dialogRef: MatDialogRef<any>) {
    dialogRef
      .afterClosed()
      .pipe(
        tap(() => this.updateIssueAction$.next(true)),
        take(1)
      )
      .subscribe();
  }
}
