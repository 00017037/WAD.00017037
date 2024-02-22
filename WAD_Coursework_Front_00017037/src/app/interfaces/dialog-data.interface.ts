import { Observable } from 'rxjs';
import { IComment } from './comment..interface';
import { IIssue } from './issue.interface';

export interface IDialogData {
  item?: IIssue | IComment;
  isEditMode: Boolean;
}

export interface ICommenDialogData extends IDialogData {
  issueId: number;
}
export interface IDeleteDialogData {
  title: string;
}
