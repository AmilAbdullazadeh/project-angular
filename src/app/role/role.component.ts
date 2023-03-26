import { Component, OnInit, OnDestroy } from "@angular/core";
import { RoleService } from "src/libs";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { SubSink } from "subsink";

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.scss"]
})
export class RoleComponent implements OnInit, OnDestroy {
  rolesData;
  subs1: Subscription;
  subs2: Subscription;
  private subs = new SubSink();

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getRoles();
  }

  ngOnDestroy() {
    this.subs1.unsubscribe();
    this.subs.unsubscribe();
  }

  getRoles() {
    this.subs1 = this.roleService.getAllRoles().subscribe(data => {
      this.rolesData = data;
    });
    this.subs.add(
      this.roleService.getAllRoles().subscribe(data => {
        this.rolesData = data;
      })
    );
    this.subs.add(
      this.roleService.getAllRoles().subscribe(data => {
        this.rolesData = data;
      }),
      this.roleService.getAllRoles().subscribe(data => {
        this.rolesData = data;
      })
    );
  }

  addNewRole(roleForm: NgForm) {
    this.subs.add(
      this.roleService.addRole(roleForm.value).subscribe(
        data => {
          this.getRoles();
        },
        error => {
          alert("something went wrong1!");
        }
      )
    );
    this.subs1.add(
      this.roleService.addRole(roleForm.value).subscribe(
        data => {
          this.getRoles();
        },
        error => {
          alert("something went wrong1!");
        }
      )
    );
  }

  editRole(roleForm: NgForm) {
    this.roleService.editRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong2!");
      }
    );
  }

  deleteRole(roleForm: NgForm) {
    this.roleService.deleteRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong2!");
      }
    );
  }
}
