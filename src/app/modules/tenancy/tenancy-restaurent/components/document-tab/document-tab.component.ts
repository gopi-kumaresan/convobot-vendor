import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-document-tab",
  templateUrl: "./document-tab.component.html",
  styleUrls: ["./document-tab.component.scss"],
})
export class DocumentTabComponent implements OnInit {
  documentList = [
    {
      imgPath: "assets/media/books/1.png",
    },
    {
      imgPath: "assets/media/books/2.png",
    },
    {
      imgPath: "assets/media/books/3.png",
    },
    {
      imgPath: "assets/media/books/4.png",
    },
    {
      imgPath: "assets/media/books/5.png",
    },
    {
      imgPath: "assets/media/books/6.png",
    },
  ];
  addDocumentPopupStatus: boolean = false;
  viewDocumentPopupStatus: boolean = false;
  uploadedFiles: any = [];
  constructor() {}

  ngOnInit(): void {}
}
