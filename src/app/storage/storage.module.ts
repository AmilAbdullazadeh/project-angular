import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocalStorageComponent } from "./local-storage/local-storage.component";
import { CookieComponent } from "./cookie/cookie.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "cookie",
        component: CookieComponent
      },
      {
        path: "local-storage",
        component: LocalStorageComponent
      },
      {
        path: "",
        redirectTo: "local-storage",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  declarations: [LocalStorageComponent, CookieComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]
})
export class StorageModule {}
