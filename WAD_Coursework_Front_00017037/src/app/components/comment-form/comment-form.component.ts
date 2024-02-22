import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  ICommenDialogData,
  IDialogData,
} from '../../interfaces/dialog-data.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { IComment } from '../../interfaces/comment..interface';
import { CommentsClient } from '../../services/comments-client.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent implements OnInit {
  form = this.fb.group({
    text: ['', Validators.required],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICommenDialogData,
    private fb: FormBuilder,
    private commentsClient: CommentsClient,
    private dialogRef: MatDialogRef<CommentFormComponent>
  ) {}

  ngOnInit(): void {
    this.setInitialFormValue();
  }

  save(): void {
    const text = this.form.value.text as string;
    let res$ = this.data.isEditMode
      ? this.updateComment(text)
      : this.createComment(text);

    res$
      .pipe(
        tap((comment) => this.dialogRef.close(comment)),
        take(1)
      )
      .subscribe();
  }

  setInitialFormValue() {
    if (this.data.isEditMode) {
      const issue = this.data.item as IComment;
      this.form.patchValue(issue);
    }
  }

  updateComment(text: string) {
    const commentId = this.data.item?.id as number;
    return this.commentsClient.updateCommentById(commentId, { text: text });
  }

  createComment(text: string) {
    const issueID = this.data.issueId;
    return this.commentsClient.createComment({ text, issueId: issueID });
  }

  close() {
    this.dialogRef.close();
  }
}
