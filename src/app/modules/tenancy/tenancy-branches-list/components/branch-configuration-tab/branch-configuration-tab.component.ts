import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-branch-configuration-tab",
  templateUrl: "./branch-configuration-tab.component.html",
  styleUrls: ["./branch-configuration-tab.component.scss"],
})
export class BranchConfigurationTabComponent implements OnInit {
  editMode: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
