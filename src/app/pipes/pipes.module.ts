import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipesComponent } from "./pipes/pipes.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TlPipe, MyFilteringPipe } from "src/libs";

const routes: Routes = [
  {
    path: "",
    component: PipesComponent
  }
];

@NgModule({
  declarations: [PipesComponent, TlPipe, MyFilteringPipe],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]
})
export class PipesModule {}
