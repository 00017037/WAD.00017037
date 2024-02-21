import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectItems } from './severy-sel-items';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDialogData } from '../../interfaces/dialog-data.interface';
import { IIssue } from '../../interfaces/issue.interface';
import { MatButtonModule } from '@angular/material/button';
import { IssuesClient } from '../../services/issues-client.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-issue-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
  ],
  templateUrl: './issue-form.component.html',
  styleUrl: './issue-form.component.scss',
})
export class IssueFormComponent implements OnInit {
  severities = selectItems;

  issueForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    severity: [0, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    private issuesClient: IssuesClient,
    private dialogRef: MatDialogRef<IssueFormComponent>
  ) {}

  ngOnInit(): void {
    this.setInitialFormValue();
  }

  setInitialFormValue() {
    if (this.data.isEditMode) {
      const issue = this.data.item as IIssue;
      this.issueForm.patchValue(issue);
    }
  }

  save() {
    const issue = { ...this.data.item, ...this.issueForm.value } as IIssue;
    let res$ = this.data.isEditMode
      ? this.updateIssue(issue)
      : this.createIssue(issue);

    res$.pipe(tap((issue) => this.dialogRef.close(issue), take(1))).subscribe();
  }

  updateIssue(issue: IIssue) {
    return this.issuesClient.updateIssueById(issue.id, issue);
  }

  createIssue(issue: IIssue) {
    return this.issuesClient.createIssue(issue);
  }

  close() {}
}
