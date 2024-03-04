import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../enums/url-00017037.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiClient00017037Service {
  constructor(private httpClient: HttpClient) {}

  getById<T>(url: string, id: number): Observable<T> {
    const httParams = new HttpParams();
    url = this.generateUrl(url, Url.GetById, id);
    return this.httpClient.get<T>(url);
  }

  create<T>(url: string, body: Partial<T>): Observable<T> {
    url = this.generateUrl(url, Url.Create);
    return this.httpClient.post<T>(url, body);
  }

  getAll<T>(url: string): Observable<T[]> {
    url = this.generateUrl(url, Url.GetAll);
    return this.httpClient.get<T[]>(url);
  }

  deleteByID(id: number, url: string) {
    url = this.generateUrl(url, Url.Delete, id);

    return this.httpClient.delete(url);
  }

  updateByID<T>(id: number, url: string, body: Partial<T>): Observable<T> {
    url = this.generateUrl(url, Url.Update, id);

    return this.httpClient.put<T>(url, body);
  }

  generateUrl(...params: (string | number)[]): string {
    return params.join('/');
  }
}
