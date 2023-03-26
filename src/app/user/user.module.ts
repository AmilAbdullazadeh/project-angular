import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user/user.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserRoleComponent } from "./user/user-role/user-role.component";
import { Routes, RouterModule } from "@angular/router";
import { IgxButtonModule } from "igniteui-angular";
import { AuthChildGuard } from "src/libs/guards/auth-child.guard";

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: ":id",
    component: UserComponent,
    children: [
      {
        path: "details",
        component: UserDetailsComponent
      },
      {
        path: "role",
        component: UserRoleComponent
      }
      // {
      //   path: "",
      //   redirectTo: "details",
      //   pathMatch: "full"
      // }
    ],
    canActivateChild: [AuthChildGuard]
  }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    UserDetailsComponent,
    UserRoleComponent
  ],
  imports: [CommonModule, IgxButtonModule, RouterModule.forChild(routes)]
})
export class UserModule {}
