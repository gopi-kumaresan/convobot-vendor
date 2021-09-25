import { Component, OnInit } from "@angular/core";
import { EventSettingsModel } from "@syncfusion/ej2-schedule";

@Component({
  selector: "app-menu-list-tab",
  templateUrl: "./menu-list-tab.component.html",
  styleUrls: ["./menu-list-tab.component.scss"],
})
export class MenuListTabComponent implements OnInit {
  createMenuModelStatus: boolean = false;

  //  syncfucion schedule calender
  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Paris",
        StartTime: new Date(2018, 1, 15, 9, 0),
        EndTime: new Date(2018, 1, 15, 10, 0),
      },
    ],
  };
  public selectedDate: Date = new Date(2018, 1, 15);

  menuListData: any = [
    {
      menuName: "French Fries",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      itemNo: "2",
      timeslot: "",
    },
    {
      menuName: "Plain Sandwich",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      itemNo: "3",
      timeslot: "",
    },
    {
      menuName: "Grilled Sandwich",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      itemNo: "2",
      timeslot: "",
    },
    {
      menuName: "Plain Cheese Pizza",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      itemNo: "6",
      timeslot: "",
    },
    {
      menuName: "Capsicum, Onion Pizza",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      itemNo: "6",
      timeslot: "",
    },
    {
      menuName: "Lasanana Roll",
      descripton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      itemNo: "6",
      timeslot: "",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
