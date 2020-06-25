// TODO copy file to better location
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return this.authService.getAuthStatusListener().pipe(
            take(1),
            mergeMap((auth) => {
                if (!auth) {
                    return next.handle(req);
                }
                const modRequest = req.clone({
                    headers: req.headers.set(
                        'authorization',
                        'Bearer ' + auth.token
                    ),
                });
                return next.handle(modRequest);
            })
        );
    }
}
