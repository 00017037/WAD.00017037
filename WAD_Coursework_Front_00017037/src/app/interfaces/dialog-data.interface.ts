import { IComment } from "./comment..interface";
import { IIssue } from "./issue.interface";

export interface IDialogData {
  item?: IIssue|IComment,
  isEditMode:Boolean

}
