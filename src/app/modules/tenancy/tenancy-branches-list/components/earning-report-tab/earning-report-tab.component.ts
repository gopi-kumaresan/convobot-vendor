import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-earning-report-tab",
  templateUrl: "./earning-report-tab.component.html",
  styleUrls: ["./earning-report-tab.component.scss"],
})
export class EarningReportTabComponent implements OnInit {
  documentList = [
    {
      imgPath: "/assets/media/stock-600x400/img-1.jpg",
      name:"No of orders",
      value:"80"
    },
    {
      imgPath: "/assets/media/stock-600x400/img-2.jpg",
      name:"No of orders delivered",
      value:"75"
    },
    {
      imgPath: "/assets/media/stock-600x400/img-3.jpg",
      name:"No of orders cancelled",
      value:"5"
    },
    {
      imgPath: "/assets/media/stock-600x400/img-4.jpg",
      name:"Total order value",
      value:"BD 150.00"
    },
    {
      imgPath: "/assets/media/stock-600x400/img-5.jpg",
      name:"Rider commission",
      value:"-"
    },
    {
      imgPath: "/assets/media/stock-600x400/img-6.jpg",
      name:"Gross earnings",
      value:"-"
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
