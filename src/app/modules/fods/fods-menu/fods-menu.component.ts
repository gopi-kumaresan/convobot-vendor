import { Component, OnInit } from "@angular/core";
import { EventSettingsModel } from "@syncfusion/ej2-schedule";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-fods-menu",
  templateUrl: "./fods-menu.component.html",
  styleUrls: ["./fods-menu.component.scss"],
})
export class FodsMenuComponent implements OnInit {
  totalHeight = window.innerHeight;

  //  syncfucion schedule calender
  eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Paris",
        StartTime: new Date(2018, 1, 15, 9, 0),
        EndTime: new Date(2018, 1, 15, 10, 0),
      },
    ],
  };
  selectedDate: Date = new Date(2018, 1, 15);

  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("FODS");
      this.subheader.setBreadcrumbs([
        {
          title: "Menu",
          linkText: "Menu",
          linkPath: "/setting/fods/menu",
        },
      ]);
    }, 1);
  }
}
