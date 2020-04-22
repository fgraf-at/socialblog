import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { LoginComponent } from "./auth/login/login.component";
import { ChatComponent } from "./chat/chat.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signUp", component: SignupComponent },
  { path: "chat", component: ChatComponent },
  { path: "list", component: PostListComponent },
  { path: "create", component: PostCreateComponent },
  { path: "edit/:postId", component: PostCreateComponent },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
