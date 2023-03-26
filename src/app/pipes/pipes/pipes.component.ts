import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.scss"]
})
export class PipesComponent implements OnInit {
  title = "aNkaRa türKiYEnin başkenTidir!";
  today;
  cashValue = 14343.344;
  percentVal = 3213.43;
  turkishUpperCaseVal;
  objectVal: Object = {
    foo: "bar",
    baz: "qux",
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] }
  };
  cityName = "istanbul";
  cash = 1500;

  cities = [
    "istanbul",
    "izmir",
    "ankara",
    "edirne",
    "mersin",
    "antalya",
    "samsun"
  ];

  constructor() {}

  ngOnInit() {
    this.today = new Date().toDateString();
    this.turkishUpperCaseVal = (this.title as any).toLocaleUpperCase("tr-TR");
  }
}
