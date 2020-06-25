import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../authorization/auth.service';
import {Subscription} from 'rxjs';
import {FriendsService} from '../public/services/friends.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    showSideBar: boolean;
    isAuthenticated = false;
    private authSub: Subscription;

    searchResults: {nickname: string, email: string}[] = [];

    constructor(private authService: AuthService, private friendsService: FriendsService) {}

    ngOnInit(): void {
        this.authSub = this.authService
            .getAuthStatusListener()
            .subscribe((value) => {
                this.isAuthenticated = !!value;
            });
    }

    ngOnDestroy(): void {
        this.authSub.unsubscribe();
    }

    onLogout() {
        this.authService.logOut();
    }



    storeFriends() {
       this.friendsService.storeFriends();
    }
    showFriends(nickname: string) {
       this.friendsService.getFriends(nickname).subscribe((friends) => {
         this.searchResults = friends;
         console.log(this.searchResults)
      });
    }
}
