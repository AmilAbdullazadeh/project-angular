import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RoleComponent } from "./role.component";
import { FormsModule } from "@angular/forms";
import { RoleService } from "src/libs";

const routes: Routes = [
  {
    path: "",
    component: RoleComponent
  }
];

@NgModule({
  declarations: [RoleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [RoleService]
})
export class RoleModule {}
