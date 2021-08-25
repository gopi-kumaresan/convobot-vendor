import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu-list-tab",
  templateUrl: "./menu-list-tab.component.html",
  styleUrls: ["./menu-list-tab.component.scss"],
})
export class MenuListTabComponent implements OnInit {
  createMenuModelStatus: boolean = false;
  
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
