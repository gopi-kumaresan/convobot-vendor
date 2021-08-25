import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-profile-tab",
  templateUrl: "./profile-tab.component.html",
  styleUrls: ["./profile-tab.component.scss"],
})
export class ProfileTabComponent implements OnInit {
  editMode: boolean = false;
  image="/assets/media/convobot-icon/edit-icon.svg"
  constructor(private sanitizer: DomSanitizer) {
    // this.html = "<h1>DomSanitizer</h1><script>attackerCode()</script>";
  }

  ngOnInit(): void {}
}
