import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ChatComponent } from './auth/chat/chat.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { PostListComponent } from './auth/posts/post-list/post-list.component';
import { PostCreateComponent } from './auth/posts/post-create/post-create.component';
import { PostsComponent } from './auth/posts/posts.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticationComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signUp', component: SignupComponent },
            { path: '**', redirectTo: 'login' },
        ],
    },
    {
        path: 'p',
        canActivate: [AuthGuard],
        children: [
            { path: 'chat', component: ChatComponent },

            {
                path: '',
                component: PostsComponent,
                children: [
                    { path: 'list', component: PostListComponent },
                    { path: 'create', component: PostCreateComponent },
                    { path: 'edit/:postId', component: PostCreateComponent },
                ],
            },
        ],
    },
    { path: '**', redirectTo: 'auth' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
