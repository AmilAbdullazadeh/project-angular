import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectivesComponent } from "./directives/directives.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "src/libs";

const routes: Routes = [
  {
    path: "",
    component: DirectivesComponent
  }
];

@NgModule({
  declarations: [DirectivesComponent, HighlightDirective],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]
})
export class DirectivesModule {}
