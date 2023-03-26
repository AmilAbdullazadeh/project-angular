import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  connection = environment.api.fleek.host;
  constructor(private http: HttpClient) {}

  upload(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload);
    return this.http.post<any>(this.connection + "/upload", formData);
  }
}
