import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Parent1Component } from "./parent1/parent1.component";
import { Parent2Component } from "./parent2/parent2.component";
import { ChildModule } from "src/libs";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "parent1",
        component: Parent1Component
      },
      {
        path: "parent2",
        component: Parent2Component
      },
      {
        path: "",
        redirectTo: "parent1",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  declarations: [Parent1Component, Parent2Component],
  imports: [
    CommonModule,
    ChildModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ParentsModule {}
