import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl = 'http://localhost:5187/api'

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Only prepend the base URL if the request - is not already absolute
    if (!request.url.startsWith('http')) {
      const apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });
      return next.handle(apiReq);
    }
    return next.handle(request);
  }
}
