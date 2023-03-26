import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  connection = environment.api.nestjs.role + "/role";
  constructor(private http: HttpClient) {}

  getAllRoles() {
    return this.http.get<any>(this.connection);
  }

  addRole(role: any) {
    return this.http.post<any>(this.connection, role);
  }

  editRole(role: any) {
    return this.http.put<any>(this.connection + `/${role.id}`, role);
  }

  deleteRole(role: any) {
    return this.http.delete<any>(this.connection + `/${role.id}`, role);
  }
}
