import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"]
})
export class DataBindingComponent implements OnInit {
  user = {
    name: "Ahmet",
    surname: "Aydın",
    job: "Software Developer",
    favorite_place: "Kız Kulesi",
    favorite_place_image:
      "https://res.cloudinary.com/dlth9ls92/image/upload/v1581248618/dzzduewcvpyiaevn55ew.png",
    isEditable: true
  };

  type = "text";

  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    alert("clicked");
  }

  inputSubmit(value: any) {
    // console.log(value);
    alert(value.target.value + " geldi...");
  }
}
