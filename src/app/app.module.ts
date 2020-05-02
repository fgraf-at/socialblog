import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { MaterialModule } from './public/material.module';

import { AuthenticationComponent } from './authentication/authentication.component';
import { ErrorInterceptor } from './error-interceptor';

import { AuthInterceptor } from './authorization/auth-interceptor';
import { ErrorComponent } from './components/error/error.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        SignupComponent,
        AuthenticationComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        MaterialModule,
        ComponentsModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    entryComponents: [ErrorComponent],
})
export class AppModule {}
