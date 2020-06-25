import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {ErrorComponent} from './components/error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private dialog: MatDialog) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            // tslint:disable-next-line:no-shadowed-variable
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'An error occured';
                if (error.error.message) {
                    errorMessage = error.error.message;
                    this.dialog.open(ErrorComponent, {
                        data: { message: errorMessage },
                    });
                    return throwError(error);
                }
            })
        );
    }
}
