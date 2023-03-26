import { Component, OnInit } from "@angular/core";
import { UserService } from "src/libs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  userData;
  users = [];

  randomUsers = [
    {
      id: 1,
      name: "kullanıcı 1"
    },
    {
      id: 2,
      name: "kullanıcı 2"
    },
    {
      id: 3,
      name: "kullanıcı 3"
    },
    {
      id: 4,
      name: "kullanıcı 4"
    },
    {
      id: 5,
      name: "kullanıcı 5"
    },
    {
      id: 6,
      name: "kullanıcı 6"
    },
    {
      id: 7,
      name: "kullanıcı 7"
    }
  ];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.userData = data;
      },
      error => {
        alert(`${error.error.exception.message}`);
        console.log("error", error);
      }
    );
  }

  addRandomUser() {
    const index = Math.floor(Math.random() * 7);
    this.users.push(this.randomUsers[index]);
  }
}
