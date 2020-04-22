import { Component, OnDestroy, OnInit } from "@angular/core";

import { Post } from "../../model/post.model";
import { PostsService } from "../posts.service";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit, OnDestroy {
  isLoading = false;
  posts: Post[] = [];
  totalPosts = 0;
  pagesize = 2;
  page = 0;
  pageSizeOptions = [2, 5, 10];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

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
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.totalPosts = pageData.length;
    this.pagesize = pageData.pageSize;
    this.page = pageData.pageIndex;
    console.log("pagesize: " + this.pagesize + " page: " + this.page);
    console.log(pageData);
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
