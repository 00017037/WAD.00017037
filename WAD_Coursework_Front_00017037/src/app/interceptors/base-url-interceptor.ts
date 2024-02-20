import { HttpInterceptorFn } from "@angular/common/http";


// Define the base URL
const baseUrl = 'http://localhost:5187/api';

export const baseUrlInterceptor:HttpInterceptorFn = (request, next) => {
  // Check if the URL is already absolute
  if (!request.url.startsWith('http')) {
    // Prepend the base URL to the request URL if it's not absolute
    const apiReq = request.clone({ url: `${baseUrl}/${request.url}` });
    return next(apiReq);
  }
  // For absolute URLs, proceed without modification
  return next(request);
}
