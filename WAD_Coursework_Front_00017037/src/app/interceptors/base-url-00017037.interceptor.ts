import { HttpInterceptorFn } from '@angular/common/http';

const baseUrl = 'http://localhost:5187/api';

export const baseUrlInterceptor: HttpInterceptorFn = (request, next) => {
  if (!request.url.startsWith('http')) {
    const apiReq = request.clone({ url: `${baseUrl}/${request.url}` });
    return next(apiReq);
  }
  return next(request);
};
