import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from '../../model/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<{ posts: Post[]; maxPosts: number }>();

    constructor(private httpClient: HttpClient, private router: Router) {}

    getPosts(pagesize: number, page: number) {
        const queryParams = `?pagesize=${pagesize}&page=${page}`;
        return this.httpClient
            .get<{ posts: Post[]; maxPosts: number }>(
                'http://localhost:3000/api/posts' + queryParams
            )
            .subscribe((x) => {
                this.posts = x.posts;
                this.postsUpdated.next({
                    posts: [...this.posts],
                    maxPosts: x.maxPosts,
                });
            });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    getPost(id: string) {
        return this.httpClient.get<{
            _id: string;
            title: string;
            content: string;
            imagePath: string;
            currentDate: string;
        }>('http://localhost:3000/api/posts/' + id);
    }
    addPost(title: string, content: string, image: File) {
        const date = new Date().toLocaleDateString('de-AT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const postData = new FormData();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('image', image, title);
        postData.append('currentDate', date);
        this.httpClient
            .post<{ message: string; post: Post }>(
                'http://localhost:3000/api/posts',
                postData
            )
            .subscribe((x) => {
                this.redirectToBlog();
            });
    }
    updatePost(
        id: string,
        title: string,
        content: string,
        image: File | string
    ) {
        let postData;
        if (typeof image === 'object') {
            postData = new FormData();
            postData.append('id', id);
            postData.append('title', title);
            postData.append('content', content);
            postData.append('image', image, title);
        } else {
            postData = {
                id: id,
                title,
                content: content,
                imagePath: image,
            };
        }
        this.httpClient
            .put('http://localhost:3000/api/posts/' + id, postData)
            // tslint:disable-next-line:no-shadowed-variable
            .subscribe((response) => {
                this.redirectToBlog();
            });
    }
    deletePost(id: string) {
        return this.httpClient.delete<{ message: string }>(
            'http://localhost:3000/api/posts/' + id
        );
    }
    redirectToBlog() {
        this.router.navigate(['/p/list']);
    }
}
