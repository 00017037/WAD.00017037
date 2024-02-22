import { Component } from '@angular/core';
import { IIssue, Severity } from '../../interfaces/issue.interface';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IssuesClient } from '../../services/issues-client.service';
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
} from '../../interfaces/dialog-data.interface';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { IComment } from '../../interfaces/comment..interface';
import { MatButtonModule } from '@angular/material/button';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CommentsClient } from '../../services/comments-client.service';

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
    private dialog: MatDialog,
    private commentsClient: CommentsClient,
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
    const dialogRef = this.dialog.open(IssueFormComponent, { data });
    this.updateAfterDialogClose(dialogRef);
  }

  editComment(comment: IComment) {
    const data: ICommenDialogData = {
      isEditMode: true,
      item: comment,
      issueId: comment.issueId,
    };
    const dialogRef = this.dialog.open(CommentFormComponent, { data });

    this.updateAfterDialogClose(dialogRef);
  }

  deleteComment(comment: IComment) {
    const data: IDeleteDialogData = {
      title: 'Comment',
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data });
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
    const dialogRef = this.dialog.open(CommentFormComponent, { data });
    this.updateAfterDialogClose(dialogRef);
  }

  deleteIssue(issue: IIssue) {
    const data: IDeleteDialogData = {
      title: 'Issue',
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data });
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
