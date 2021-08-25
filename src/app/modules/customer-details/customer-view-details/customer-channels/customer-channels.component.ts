import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-customer-channels",
  templateUrl: "./customer-channels.component.html",
  styleUrls: ["./customer-channels.component.scss"],
})
export class CustomerChannelsComponent implements OnInit {
  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Customer Details");
      this.subheader.setBreadcrumbs([
        {
          title: "Channel",
          linkText: "Channel",
          linkPath: "customer-details/channels",
        },
      ]);
    }, 1);
  }
}
