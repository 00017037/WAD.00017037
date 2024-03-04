import { IComment } from './comment-0001703.interface';

export interface IIssue {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  severity: Severity;
  comments: IComment[];
}

export enum Severity {
  minor,
  major,
  critical,
}
