import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  ICommenDialogData,
  IDialogData,
} from '../../interfaces/dialog-data-00017037.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { IComment } from '../../interfaces/comment-0001703.interface';
import { CommentsClient00017037 } from '../../services/comments-client-00017037.service';
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
  templateUrl: './comment-form-00017037.component.html',
  styleUrl: './comment-form-00017037.component.scss',
})
export class Comment00017037Component implements OnInit {
  form = this.fb.group({
    text: ['', Validators.required],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICommenDialogData,
    private fb: FormBuilder,
    private commentsClient: CommentsClient00017037,
    private dialogRef: MatDialogRef<Comment00017037Component>
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
