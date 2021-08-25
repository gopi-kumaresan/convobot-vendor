import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-fods-menu",
  templateUrl: "./fods-menu.component.html",
  styleUrls: ["./fods-menu.component.scss"],
})
export class FodsMenuComponent implements OnInit {
  totalHeight = window.innerHeight;
  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("FODS");
      this.subheader.setBreadcrumbs([
        {
          title: "Menu",
          linkText: "Menu",
          linkPath: "/setting/fods/menu",
        },
      ]);
    }, 1);
  }
}
