import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Observable } from 'rxjs';
import { IIssue } from '../interfaces/issue.interface';
import { Url } from '../enums/url.enum';
import { IComment } from '../interfaces/comment..interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsClient {
  constructor(private apiClient: ApiClientService) {}

  getAllComments(): Observable<IComment[]> {
    return this.apiClient.getAll<IComment>(Url.Comment);
  }

  getCommentById(id: number): Observable<IComment> {
    return this.apiClient.getById<IComment>(Url.Comment, id);
  }

  deleteCommentById(id: number): Observable<any> {
    return this.apiClient.deleteByID(id, Url.Comment);
  }

  updateCommentById(id: number, body: Partial<IComment>) {
    return this.apiClient.updateByID<IComment>(id, Url.Comment, body);
  }

  createComment(body: Partial<IComment>) {
    return this.apiClient.create<IComment>(Url.Comment, body);
  }
}
