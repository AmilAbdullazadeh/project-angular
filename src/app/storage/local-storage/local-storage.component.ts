import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-local-storage",
  templateUrl: "./local-storage.component.html",
  styleUrls: ["./local-storage.component.scss"]
})
export class LocalStorageComponent implements OnInit {
  name = "";
  localStorageVal = "";
  localStorageObjVal;

  objName = "";
  objSurname = "";
  objAge = "";

  constructor() {}

  ngOnInit(): void {}

  setItem(value) {
    localStorage.setItem("name", value);
  }

  getItem() {
    this.localStorageVal = localStorage.getItem("name");
  }

  clearItem() {
    localStorage.removeItem("name");
  }

  clearAll() {
    localStorage.clear();
  }

  setObject() {
    const obj = {
      name: this.objName,
      surname: this.objSurname,
      age: this.objAge
    };
    localStorage.setItem("object", JSON.stringify(obj));
  }

  getObject() {
    this.localStorageObjVal = localStorage.getItem("object");
  }
}
