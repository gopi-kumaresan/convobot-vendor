import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-activity-log",
  templateUrl: "./activity-log.component.html",
  styleUrls: ["./activity-log.component.scss"],
})
export class ActivityLogComponent implements OnInit {
  activityListData: any = [
    {
      causerName: "Admin",
      Description: "Country has been saved By AppAdminUser - Admin",
      ipAddress: "109.161.144.191",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 12:10",
    },
    {
      causerName: "Admin",
      Description: "Cuisine has been deleted By AppAdminUser - Admin",
      ipAddress: "88.201.31.17",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 22:10",
    },
    {
      causerName: "Admin",
      Description: "Country has been saved By AppAdminUser - Admin",
      ipAddress: "106.51.48.24",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 12:10",
    },
    {
      causerName: "Admin",
      Description: "Cuisine has been deleted By AppAdminUser - Admin",
      ipAddress: "84.255.165.44",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 12:10",
    },
    {
      causerName: "Admin",
      Description: "Addresstype Save has been changed By AppAdminUser - Admin",
      ipAddress: "77.69.200.229",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 12:10",
    },
    {
      causerName: "Admin",
      Description: "City has been saved By AppAdminUser - Admin",
      ipAddress: "193.188.99.246",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 12:10",
    },
    {
      causerName: "Admin",
      Description: "Category has been saved By AppAdminUser - Admin",
      ipAddress: "88.201.31.28",
      Browser: "Google Chrome",
      dateTime: "04/04/2019 12:10",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
