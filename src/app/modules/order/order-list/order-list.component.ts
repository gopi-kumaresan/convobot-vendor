import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  expandOrder: boolean = false;
  orderListData: any = [
    {
      name: "Abdul",
      address: "P.O. Box 5476, Manama, Kingdom of Bahrain",
      orderNumber: "5167",
      itemPrice: "2 Item for BD 100.00",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Abdulaziz",
      address: "P.O. Box 01, Budaiya, Kingdom of Bahrain",
      orderNumber: "5168",
      itemPrice: "1 Item for BD 50.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Akhil",
      address: "P.O. Box 6935, Riffa, Kingdom of Bahrain",
      orderNumber: "5169",
      itemPrice: "2 Item for BD 15.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },

    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      orderNumber: "5170",
      itemPrice: "2 Item for BD 87.20",
      timestamp: "Received 6 minutes ago",
    },
  ];

  totalHeight = window.innerHeight;

  constructor(private subheader: SubheaderService) {
    // this.totalHeight = window.innerHeight - 200;
    console.log("totalHeight", this.totalHeight);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Orders");
      // this.subheader.setBreadcrumbs([
      //   {
      //     title: "Order",
      //     linkText: "Order",
      //     linkPath: "/order",
      //   },
      // ]);
    }, 1);
  }
}
