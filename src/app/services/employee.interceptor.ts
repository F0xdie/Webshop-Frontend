import { AuthService } from './auth.service';
import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) {}

    // intercept(request: HttpRequest<Employee>, next: HttpHandler): Observable<HttpEvent<Employee>> {
    //     request = request.clone({
    //         setHeaders: {
    //           Authorization: `Bearer ${this.authService.getToken()}`
    //         }
    //       });
    //     return next.handle(request);
    // }
}

