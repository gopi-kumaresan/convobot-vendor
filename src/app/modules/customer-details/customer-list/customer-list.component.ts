import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  activeButton = "2";
  totalHeight: number = window.innerHeight;
  orderListData: any = [
    {
      name: "Abdul",
      address: "P.O. Box 5476, Manama, Kingdom of Bahrain",
      phonenumber: "+973 39999468",
      email: "Abdul@gamil.co",
      orderNumber: "5167",
      initialSince: "21-Jan-2020",
      lastSince: "20-Mar-2202",
      Processed: "1",
      Cancelled: "2",
      TotalValue: "4",
      Refund: "2",
    },
    {
      name: "Abdulaziz",
      address: "P.O. Box 01, Budaiya, Kingdom of Bahrain",
      phonenumber: "+973 36775443",
      email: "Abdulaziz@gmail.co",
      initialSince: "21-Jan-2020",
      lastSince: "20-Mar-2202",
      orderNumber: "5167",
      Processed: "2",
      Cancelled: "1",
      TotalValue: "10",
      Refund: "1",
    },
    {
      name: "Akhil",
      address: "P.O. Box 6935, Riffa, Kingdom of Bahrain",
      phonenumber: "+973 32211975",
      email: "Akhil@gmail.co",
      initialSince: "21-Jan-2020",
      lastSince: "20-Mar-2202",
      orderNumber: "5167",
      Processed: "2",
      Cancelled: "0",
      TotalValue: "6",
      Refund: "0",
    },
    {
      name: "Aladdin",
      address: "P.O. Box 0022, Muharraq, Kingdom of Bahrain",
      phonenumber: "+973 33832411",
      email: "Aladdin@gmail.co",
      initialSince: "21-Jan-2020",
      lastSince: "20-Mar-2202",
      orderNumber: "5167",
      Processed: "0",
      Cancelled: "2",
      TotalValue: "6",
      Refund: "1",
    },
  ];
  constructor(private subheader: SubheaderService) {
    // this.totalHeight = window.innerHeight - 170;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Customer");
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
