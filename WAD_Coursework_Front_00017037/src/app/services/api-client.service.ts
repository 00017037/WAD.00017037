import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient:HttpClient) { }

  getById<T>(url:string,id:number):Observable<T>{
    const httParams = new HttpParams()
    url = this.generateUrl(url,Url.GetById,id);
    console.log(url)
    return this.httpClient.get<T>(url)
  }

  create<T>(url:string,body:T):Observable<T>{
    url = this.generateUrl(url,Url.Create)
    return this.httpClient.post<T>(url,body)


  }

  getAll<T>(url:string):Observable<T[]>{
    url = this.generateUrl(url,Url.GetAll)
     return this.httpClient.get<T[]>(url);
  }

  deleteByID(id:number,url:string) {
    url = this.generateUrl(url,Url.Delete)
    const params = new HttpParams().set('id',id)
    return this.httpClient.delete(url,{params});
  }

  updateByID<T>(id:number,url:string,body:Partial<T>):Observable<T>{
    url = this.generateUrl(url,Url.Update)
    const params = new HttpParams().set('id',id)
    return this.httpClient.put<T>(url,body,{params});
  }

  generateUrl(...params:(string|number)[]):string{
    return params.join('/')
  }

}
