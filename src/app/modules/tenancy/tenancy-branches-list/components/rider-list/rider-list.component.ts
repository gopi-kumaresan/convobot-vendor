import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rider-list",
  templateUrl: "./rider-list.component.html",
  styleUrls: ["./rider-list.component.scss"],
})
export class RiderListComponent implements OnInit {
  riderListData: any = [
    {
      riderName: "Muzzafar",
      email: "zan@gmail.com ",
      mobileNumber: "32001089",
      cityName: "riffa",
      onlineStatus: "Online",
    },
    {
      riderName: "Muzzafar",
      email: "Muzzafar@gmai.com",
      mobileNumber: "32001076",
      cityName: "Manama",
      onlineStatus: "Offline",
    },
    {
      riderName: "SHAH",
      email: "shah@gmail.com",
      mobileNumber: "34223428",
      cityName: "MANAMA",
      onlineStatus: "Inactive",
    },
    {
      riderName: "sojib ahmed",
      email: "mdsojib3927@gmail.com",
      mobileNumber: "39279382",
      cityName: "Saar",
      onlineStatus: "Online",
    },
    {
      riderName: "Khairul Abdul Hamid",
      email: "hmd308962@gmail.com",
      mobileNumber: "33902803",
      cityName: "manama",
      onlineStatus: "Inactive",
    },
    {
      riderName: "Mohd Ansari",
      email: "shahzadansari988@gmail.com",
      mobileNumber: "39293573",
      cityName: "Hamala ",
      onlineStatus: "Inactive",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
