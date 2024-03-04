import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../enums/url-00017037.enum';
import { IIssue } from '../interfaces/issue-00017037.interface';
import { ApiClient00017037Service } from './api-client-00017037.service';

@Injectable({
  providedIn: 'root',
})
export class IssuesClient00017037 {
  constructor(private apiClient: ApiClient00017037Service) {}

  getAllIssues(): Observable<IIssue[]> {
    return this.apiClient.getAll<IIssue>(Url.Issue);
  }

  getIssueById(id: number): Observable<IIssue> {
    return this.apiClient.getById<IIssue>(Url.Issue, id);
  }

  deleteIssueById(id: number): Observable<any> {
    return this.apiClient.deleteByID(id, Url.Issue);
  }

  updateIssueById(id: number, body: Partial<IIssue>): Observable<IIssue> {
    return this.apiClient.updateByID<IIssue>(id, Url.Issue, body);
  }

  createIssue(body: IIssue): Observable<IIssue> {
    return this.apiClient.create<IIssue>(Url.Issue, body);
  }
}
