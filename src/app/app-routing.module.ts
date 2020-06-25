import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {SignupComponent} from './authentication/signup/signup.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthGuard} from './authorization/guard/auth.guard';

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
        loadChildren: () =>
            import('./authorization/auth.module').then((m) => m.AuthModule),
    },
    { path: '**', redirectTo: 'auth' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
