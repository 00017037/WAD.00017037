import { Injectable } from '@angular/core';
import { ApiClient00017037Service } from './api-client-00017037.service';
import { Observable } from 'rxjs';
import { IIssue } from '../interfaces/issue-00017037.interface';
import { Url } from '../enums/url-00017037.enum';
import { IComment } from '../interfaces/comment-0001703.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsClient00017037 {
  constructor(private apiClient: ApiClient00017037Service) {}

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
