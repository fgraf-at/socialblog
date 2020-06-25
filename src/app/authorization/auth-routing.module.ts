
// TODO copy file to better location
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    {
        path: '',
        component: PostsComponent,
        children: [
            { path: 'list', component: PostListComponent },
            { path: 'create', component: PostCreateComponent },
            { path: 'edit/:postId', component: PostCreateComponent },
            { path: '**', redirectTo: 'list' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
