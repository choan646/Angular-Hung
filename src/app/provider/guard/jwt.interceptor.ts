import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Get the auth token from the service
    let authToken = "";
    if(localStorage.getItem("accountFE62")){
      const user = JSON.parse(localStorage.getItem("accountFE62") as string);
      authToken = `Bearer ${user.accessToken}`;

    }

    //Clone the request and replace the original header with
    //Clone headers, update with the authorization
    const authReq = request.clone({
      headers: request.headers.set('Authorization',authToken)

    })
    return next.handle(authReq);
  }
}
