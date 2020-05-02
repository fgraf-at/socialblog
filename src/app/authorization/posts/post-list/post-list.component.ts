import { Component, OnDestroy, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { Post } from '../../../model/post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
    isLoading = false;
    posts: Post[] = [];
    totalPosts = 0;
    pagesize = 2;
    page = 0;
    pageSizeOptions = [2, 5, 10];

    isAuthenticated = false;

    private postsSub: Subscription;

    constructor(
        public postsService: PostsService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.isLoading = true;
        this.postsService.getPosts(this.pagesize, this.page);
        this.postsSub = this.postsService
            .getPostUpdateListener()
            .subscribe((postData) => {
                this.isLoading = false;
                this.posts = postData.posts;
                this.totalPosts = postData.maxPosts;
            });
        this.authService.getAuthStatusListener().subscribe((x) => {
            this.isAuthenticated = !!x;
        });
    }

    onChangePage(pageData: PageEvent) {
        this.isLoading = true;
        this.totalPosts = pageData.length;
        this.pagesize = pageData.pageSize;
        this.page = pageData.pageIndex;
        this.postsService.getPosts(this.pagesize, this.page);
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }

    onDelete(id: string) {
        this.postsService.deletePost(id).subscribe(() => {
            this.postsService.getPosts(this.pagesize, this.page);
        });
    }
}
