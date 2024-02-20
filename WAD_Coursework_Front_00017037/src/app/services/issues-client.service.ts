import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../enums/url.enum';
import { IIssue } from '../interfaces/issue.interface';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class IssuesClient {

  constructor(private apiClient:ApiClientService) { }


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
