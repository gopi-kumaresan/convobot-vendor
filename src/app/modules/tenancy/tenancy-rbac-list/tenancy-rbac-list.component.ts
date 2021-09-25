import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tenancy-rbac-list",
  templateUrl: "./tenancy-rbac-list.component.html",
  styleUrls: ["./tenancy-rbac-list.component.scss"],
})
export class TenancyRBACListComponent implements OnInit {
  totalHeight: number = window.innerHeight;
  roleModalStatus: boolean = false;
  branchListData: any = [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      role: "Super Admin",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      role: "manager",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      role: "manager",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      role: "manager",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
