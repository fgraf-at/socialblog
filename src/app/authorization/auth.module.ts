import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ChatComponent } from './chat/chat.component';
import { PostsComponent } from './posts/posts.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        ChatComponent,
        PostListComponent,
        PostCreateComponent,
        PostsComponent,
    ],
    imports: [ComponentsModule, AuthRoutingModule],
    exports: [
        ChatComponent,
        PostListComponent,
        PostCreateComponent,
        PostsComponent,
    ],
})
export class AuthModule {}
