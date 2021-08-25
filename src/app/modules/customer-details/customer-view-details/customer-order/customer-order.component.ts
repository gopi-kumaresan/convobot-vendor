import { Component, OnInit } from "@angular/core";
import { LayoutService } from "src/app/_metronic/core";
import { KTUtil } from "../../../../../assets/js/components/util";
import KTLayoutQuickNotifications from "../../../../../assets/js/layout/extended/quick-notifications";
import { Router } from "@angular/router";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-customer-order",
  templateUrl: "./customer-order.component.html",
  styleUrls: ["./customer-order.component.scss"],
})
export class CustomerOrderComponent implements OnInit {
  display = false;
  orderListData: any = [
    {
      address: "P.O. Box 5476, Manama, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "gopinath@brigita.co",
      orderNumber: "5167",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      order_value: "BD 10.23",
      timestamp: "Received 6 minutes ago",
    },
    {
      address: "P.O. Box 01, Budaiya, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "Ramesh@brigita.co",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      orderNumber: "5168",
      order_value: "BD 60.23",
      timestamp: "Received 6 minutes ago",
    },
    {
      address: "P.O. Box 6935, Riffa, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "Devi@brigita.co",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      orderNumber: "5169",
      order_value: "BD 30.23",
      timestamp: "Received 6 minutes ago",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "Inba@brigita.co",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      orderNumber: "5110",
      order_value: "BD 20.23",
      timestamp: "Received 6 minutes ago",
    },
    {
      address: "P.O. Box 6935, Riffa, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "Inba@brigita.co",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      orderNumber: "5167",
      order_value: "BD 80.23",
      timestamp: "Received 6 minutes ago",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "Inba@brigita.co",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      orderNumber: "5111",
      order_value: "BD 60.23",
      timestamp: "Received 6 minutes ago",
    },
    {
      address: "P.O. Box 695, Saar, Kingdom of Bahrain",
      phonenumber: "+91889889889",
      email: "Inba@brigita.co",
      orderTime: "21-Jan-2020 22:00",
      status: "Active",
      orderNumber: "5112",
      order_value: "BD 80.23",
      timestamp: "Received 6 minutes ago",
    },
  ];

  currentURL: string;
  constructor(
    private layout: LayoutService,
    private router: Router,
    private subheader: SubheaderService
  ) {
    console.log("router", this.router.url);
    this.currentURL = this.router.url;
  }

  ngOnInit(): void {
    if (this.currentURL == "/customer-details/customer-orders") {
      setTimeout(() => {
        this.subheader.setTitle("Customer Details");
        this.subheader.setBreadcrumbs([
          {
            title: "Order",
            linkText: "Order",
            linkPath: "customer-details/customer-orders",
          },
        ]);
      }, 1);
    }
  }
}
