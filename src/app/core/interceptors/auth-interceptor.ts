import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip for login API
    if (request.url.includes('/login')) {
      return next.handle(request);
    }

    // Skip for Register API
    if (request.url.includes('/register')) {
      return next.handle(request);
    }

    const token = localStorage.getItem('token');

    if (token) {
      const clonedRequest = request.clone({
        headers: request.headers.set('authorization', `Bearer ${token}`)
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(request);
    }


  }
}
