import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    showSideBar: boolean;
    isAuthenticated = false;
    private authSub: Subscription;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authSub = this.authService
            .getAuthStatusListener()
            .subscribe((value) => {
                if (value) {
                    this.isAuthenticated = true;
                } else {
                    this.isAuthenticated = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.authSub.unsubscribe();
    }

    onLogout() {
        this.authService.logOut();
    }
}
