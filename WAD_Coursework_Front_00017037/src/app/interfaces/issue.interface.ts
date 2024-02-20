import { IComment } from "./comment..interface";

export interface IIssue {
   id:number,
   title:string;
   description:string;
   createdAt:Date;
   severity:Severity;
   comments:IComment[]

}

export enum Severity {
  minor,
  major,
  critical
}
