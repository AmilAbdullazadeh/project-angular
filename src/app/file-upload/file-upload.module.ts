import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { UploadService } from "src/libs";

const routes: Routes = [
  {
    path: "",
    component: FileUploadComponent
  }
];

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [UploadService]
})
export class FileUploadModule {}
