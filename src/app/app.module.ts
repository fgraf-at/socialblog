import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login/login.component';
import { InputFormComponent } from './components/form/input-form/input-form.component';
import { FormActionsComponent } from './components/form/form-actions/form-actions.component';
import { FormTextAreaComponent } from './components/form/form-text-area/form-text-area.component';
import { FormComponent } from './components/form/form.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { MaterialModule } from './public/material.module';
import { ChatComponent } from './auth/chat/chat.component';
import {
    MatDialogModule,
    MatIconModule,
    MatListModule,
} from '@angular/material';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ChatLayoutComponent } from './components/chat/chat-layout/chat-layout.component';
import { PostListComponent } from './auth/posts/post-list/post-list.component';
import { PostCreateComponent } from './auth/posts/post-create/post-create.component';
import { PostsComponent } from './auth/posts/posts.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        PostCreateComponent,
        HeaderComponent,
        PostListComponent,
        LoginComponent,
        InputFormComponent,
        FormActionsComponent,
        FormTextAreaComponent,
        FormComponent,
        SignupComponent,
        ChatComponent,
        ChatLayoutComponent,
        PostsComponent,
        AuthenticationComponent,
        SidebarComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        MaterialModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    entryComponents: [ErrorComponent],
})
export class AppModule {}
