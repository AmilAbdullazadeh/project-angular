import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoleComponent } from "./role/role.component";
import { AuthGuard, AuthExitGuard } from "src/libs";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "role",
    loadChildren: () => import("./role/role.module").then(m => m.RoleModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "data-binding",
    loadChildren: () =>
      import("./data-binding/data-binding.module").then(
        m => m.DataBindingModule
      )
  },
  {
    path: "storage",
    loadChildren: () =>
      import("./storage/storage.module").then(m => m.StorageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "directives",
    loadChildren: () =>
      import("./directives/directives.module").then(m => m.DirectivesModule),
    canDeactivate: [AuthExitGuard]
  },
  {
    path: "pipes",
    loadChildren: () => import("./pipes/pipes.module").then(m => m.PipesModule)
  },
  {
    path: "parents",
    loadChildren: () =>
      import("./parents/parents.module").then(m => m.ParentsModule)
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./forms/forms.module").then(m => m.AngularFormsModule)
  },
  {
    path: "map",
    loadChildren: () => import("./map/map.module").then(m => m.MapModule)
  },
  {
    path: "file-upload",
    loadChildren: () =>
      import("./file-upload/file-upload.module").then(m => m.FileUploadModule)
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
