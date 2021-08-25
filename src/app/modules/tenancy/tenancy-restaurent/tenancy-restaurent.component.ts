import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-tenancy-restaurent",
  templateUrl: "./tenancy-restaurent.component.html",
  styleUrls: ["./tenancy-restaurent.component.scss"],
})
export class TenancyRestaurentComponent implements OnInit {
  totalHeight = window.innerHeight;
  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Tenancy");
      this.subheader.setBreadcrumbs([
        {
          title: "Restaurants",
          linkText: "Restaurants",
          linkPath: "/setting/tenancy/tenancy-restaurent",
        },
      ]);
    }, 1);
  }
}
