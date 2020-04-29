import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mimeType } from './mime-type.validator';
import { ExtendedFormControl } from '../../../model/ExtendedFormControl';
import { Post } from '../../../model/post.model';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
    post: Post;
    form: FormGroup;
    imagePreview: string;
    private mode = 'create';
    private postId: string;
    private isLoading = false;

    constructor(
        public postsService: PostsService,
        public route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            title: new ExtendedFormControl(null, 'Title', [
                Validators.required,
                Validators.minLength(3),
            ]),
            content: new ExtendedFormControl(null, 'Content', [
                Validators.required,
            ]),
            image: new FormControl(null, [Validators.required], [mimeType]),
        });
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.get('postId')) {
                this.mode = 'edit';
                this.postId = paramMap.get('postId');
                this.isLoading = true;
                this.postsService.getPost(this.postId).subscribe((postData) => {
                    this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath,
                        currentDate: postData.currentDate,
                    };
                    this.isLoading = false;
                    this.form.patchValue({
                        title: this.post.title,
                        content: this.post.content,
                        image: this.post.imagePath,
                    });
                });
            }
        });
    }
    getTitle(): ExtendedFormControl {
        return <ExtendedFormControl>this.form.get('title');
    }
    getContent(): ExtendedFormControl {
        return <ExtendedFormControl>this.form.get('content');
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    onSavePost() {
        if (this.form.invalid) {
            return;
        }
        if (this.mode === 'create') {
            this.postsService.addPost(
                this.form.value.title,
                this.form.value.content,
                this.form.value.image
            );
        } else {
            this.postsService.updatePost(
                this.postId,
                this.form.value.title,
                this.form.value.content,
                this.form.value.image
            );
        }
    }
}
