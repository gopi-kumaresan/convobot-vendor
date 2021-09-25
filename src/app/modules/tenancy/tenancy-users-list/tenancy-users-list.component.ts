import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tenancy-users-list",
  templateUrl: "./tenancy-users-list.component.html",
  styleUrls: ["./tenancy-users-list.component.scss"],
})
export class TenancyUsersListComponent implements OnInit {
  totalHeight: number = window.innerHeight;
  userModalStatus: boolean = false;
  userViweMoalStatus: boolean = false;

  branchListData: any = [
    {
      name: "Abdul",
      branch_name: "Jasmi's  saar",
      email: "saar@gmail.com",
      mobile_number: "56986565",
      role: "manager",
    },
    {
      name: "Abdulaziz",
      branch_name: "Jasmi's Zinj",
      email: "Zinj@gamil.com",
      mobile_number: "12326598",
      role: "manager",
    },
    {
      name: "Akhil",
      branch_name: "Jasmi's Exhibition",
      email: "Exhibition@gmail.com",
      mobile_number: "78986578",
      role: "manager",
    },
    {
      name: "Aladdin",
      branch_name: "Jasmi's Hidd Mall",
      email: "Hidd-Mall@gamil.com",
      mobile_number: "52636352",
      role: "manager",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
