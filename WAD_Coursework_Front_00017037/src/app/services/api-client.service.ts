import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient:HttpClient) { }

  getById<T>(url:string,id:number):Observable<T>{
    const httParams = new HttpParams()
    httParams.set('id',id);
    return this.httpClient.get<T>(url,{params:httParams})
  }

  getAll<T>(url:string):Observable<T[]>{
     return this.httpClient.get<T[]>(url);
  }

  deleteByID(id:number,url:string) {
    const params = new HttpParams().set('id',id)
    return this.httpClient.delete(url,{params});
  }

  updateByID<T>(id:number,url:string,body:T):Observable<T>{
    const params = new HttpParams().set('id',id)
    return this.httpClient.put<T>(url,body,{params});

  }
}
