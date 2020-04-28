import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { BehaviorSubject } from 'rxjs';
import { AuthModel } from './auth.model';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authStatusListener = new BehaviorSubject<AuthModel>(null);

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    getAuthStatusListener() {
        return this.authStatusListener;
    }

    createUser(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };

        return this.http
            .post<{ _id: string; token: string }>(
                'http://localhost:3000/api/user/signup',
                authData
            )
            .pipe(
                tap((resData) => {
                    this.handleAuthentication(resData._id, resData.token);
                })
            )
            .subscribe(
                (value) => {
                    this.redirectToBlog();
                },
                (error) => {
                    console.error('test');
                    console.error(error);
                }
            );
    }

    login(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http
            .post<{ id: string; token: string }>(
                'http://localhost:3000/api/user/login',
                authData
            )
            .pipe(
                tap((resData) => {
                    this.handleAuthentication(resData.id, resData.token);
                })
            )
            .subscribe(
                (value) => {
                    this.redirectToBlog();
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    logOut() {
        this.authStatusListener.next(null);
        this.clearAuthData();
        this.router.navigate(['/login']);
    }

    public clearAuthData() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('id');
        this.authStatusListener.next(null);
    }

    public autoAuthUser() {
        const authData = this.getAuthData();
        if (authData) {
            if (authData.token && authData._id) {
                this.authStatusListener.next(authData);
            }
        }
    }

    private handleAuthentication(_id: string, token: string) {
        console.log('id:');
        console.log(_id);
        const auth = new AuthModel(_id, token);
        this.saveAuthData(_id, token);
        this.authStatusListener.next(auth);
    }

    private saveAuthData(id: string, token: string) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('id', id);
    }

    private getAuthData() {
        const token = sessionStorage.getItem('token');
        const id = sessionStorage.getItem('id');
        if (token && id) {
            return new AuthModel(id, token);
        } else {
            return null;
        }
    }

    private redirectToBlog() {
        this.router.navigate(['../p/list'], {
            relativeTo: this.route,
        });
    }
}
