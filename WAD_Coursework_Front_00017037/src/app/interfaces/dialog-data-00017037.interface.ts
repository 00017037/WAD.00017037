import { Observable } from 'rxjs';
import { IComment } from './comment-0001703.interface';
import { IIssue } from './issue-00017037.interface';

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
