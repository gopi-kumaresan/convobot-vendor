import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-customer-orders-address-list",
  templateUrl: "./customer-orders-address-list.component.html",
  styleUrls: ["./customer-orders-address-list.component.scss"],
})
export class CustomerOrdersAddressListComponent implements OnInit {
  totalHeight: number = window.innerHeight;

  blockAddressOptions: any = [
    { name: "on", value: "on" },
    { name: "off", value: "off" },
  ];
  blockAddress = { name: "on", value: "on" };
  orderListData: any = [
    {
      address: "P.O. Box 5476, Manama, Kingdom of Bahrain",
      landmard: "Al Dur",
      noOfOrders: "5",
      delivered: "4",
      returned: "1",
    },
    {
      address: "P.O. Box 01, Budaiya, Kingdom of Bahrain",
      landmard: "Hidd",
      noOfOrders: "10",
      delivered: "8",
      returned: "2",
    },
    {
      address: "P.O. Box 6935, Riffa, Kingdom of Bahrain",
      landmard: "Arad",
      noOfOrders: "4",
      delivered: "2",
      returned: "2",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      landmard: "Aldair",
      noOfOrders: "6",
      delivered: "5",
      returned: "1",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      landmard: "Aldair",
      noOfOrders: "6",
      delivered: "5",
      returned: "1",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      landmard: "Aldair",
      noOfOrders: "6",
      delivered: "5",
      returned: "1",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      landmard: "Aldair",
      noOfOrders: "6",
      delivered: "5",
      returned: "1",
    },
    {
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      landmard: "Aldair",
      noOfOrders: "6",
      delivered: "5",
      returned: "1",
    },
  ];
  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Customer Details");
      this.subheader.setBreadcrumbs([
        {
          title: "Address",
          linkText: "Address",
          linkPath: "customer-details/order-address",
        },
      ]);
    }, 1);
  }
}
