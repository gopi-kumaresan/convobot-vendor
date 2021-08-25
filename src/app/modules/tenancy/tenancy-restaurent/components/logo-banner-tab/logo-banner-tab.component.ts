import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logo-banner-tab",
  templateUrl: "./logo-banner-tab.component.html",
  styleUrls: ["./logo-banner-tab.component.scss"],
})
export class LogoBannerTabComponent implements OnInit {
  logoBannerList = [
    {
      imgPath: "assets/media/books/7.png",
    },
    {
      imgPath: "assets/media/books/8.png",
    },
    {
      imgPath: "assets/media/books/9.png",
    },
    {
      imgPath: "assets/media/books/10.png",
    },
    {
      imgPath: "assets/media/books/11.png",
    },
    {
      imgPath: "assets/media/books/12.png",
    },
  ];
  addLogoBannerPopupStatus: boolean = false;
  uploadedFiles: any = [];
  constructor() {}

  ngOnInit(): void {}
}
