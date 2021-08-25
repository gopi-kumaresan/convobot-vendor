import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-configuration-tab",
  templateUrl: "./configuration-tab.component.html",
  styleUrls: ["./configuration-tab.component.scss"],
})
export class ConfigurationTabComponent implements OnInit {
  editMode: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
