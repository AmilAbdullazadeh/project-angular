import { Component, OnInit } from "@angular/core";
import { UploadService } from "src/libs";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  images = [];
  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFiles() {
    this.uploadService.upload(this.fileToUpload).subscribe(
      data => {
        this.images.push(data[0]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
