import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-customer-view-details",
  templateUrl: "./customer-view-details.component.html",
  styleUrls: ["./customer-view-details.component.scss"],
})
export class CustomerViewDetailsComponent implements OnInit {
  totalHeight: number = window.innerHeight;
  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Customer Details");
      // this.subheader.setBreadcrumbs([
      //   {
      //     title: "Cutomer",
      //     linkText: "Cutomer",
      //     linkPath: "/menu",
      //   },
      // ]);
    }, 1);
  }
}
