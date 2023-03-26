import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"]
})
export class DirectivesComponent implements OnInit {
  title = false;
  name = "";
  username = "";

  cities = [
    {
      id: 1,
      name: "İstanbul",
      region: "Marmara"
    },
    {
      id: 3,
      name: "İzmir",
      region: "Ege"
    },
    {
      id: 6,
      name: "Samsun",
      region: "Karadeniz"
    },
    {
      id: 9,
      name: "Antalya",
      region: "Akdeniz"
    }
  ];

  color = "";
  constructor() {}

  ngOnInit(): void {}

  changeTitle() {
    this.title = !this.title;
  }
}
