import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-tenancy-branches-list",
  templateUrl: "./tenancy-branches-list.component.html",
  styleUrls: ["./tenancy-branches-list.component.scss"],
})
export class TenancyBranchesListComponent implements OnInit {
  branchTabViewStatus: boolean = false;
  totalHeight: number = window.innerHeight;
  
  branchListData: any = [
    {
      branch_name: "Jasmi's  saar",
      email: "saar@gmail.com",
      availablity_status: "Open",
      mobile_number: "56986565",
      approved_status: "Approved",
      status: "Active",
    },
    {
      branch_name: "Jasmi's Zinj",
      email: "Zinj@gamil.com",
      availablity_status: "Open",
      mobile_number: "12326598",
      approved_status: "Approved",
      status: "Active",
    },
    {
      branch_name: "Jasmi's Exhibition",
      email: "Exhibition@gmail.com",
      availablity_status: "Open",
      mobile_number: "78986578",
      approved_status: "Approved",
      status: "Active",
    },
    {
      branch_name: "Jasmi's Hidd Mall",
      email: "Hidd-Mall@gamil.com",
      availablity_status: "Open",
      mobile_number: "52636352",
      approved_status: "Approved",
      status: "Active",
    },
    {
      branch_name: "Jasmi's Hamala",
      email: "Hamala@gmail.com",
      availablity_status: "Open",
      mobile_number: "6598465",
      approved_status: "Approved",
      status: "Active",
    },
    {
      branch_name: "Jasmi's Al Najma Club",
      email: "NajmaClub@gmail.com",
      availablity_status: "Open",
      mobile_number: "98896565",
      approved_status: "Approved",
      status: "Active",
    },
    {
      branch_name: "Jasmi's Zallaq",
      email: "Zallaq@gamil.com",
      availablity_status: "Open",
      mobile_number: "02658985",
      approved_status: "Approved",
      status: "Active",
    },
  ];

  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Tenancy");
      this.subheader.setBreadcrumbs([
        {
          title: "Branch",
          linkText: "Branch",
          linkPath: "/setting/tenancy/tenancy-branch",
        },
      ]);
    }, 1);
  }

  branchDetailsViewFunction(branchData: any) {
    console.log("branchData", branchData);

    this.branchTabViewStatus = true;

    this.subheader.setTitle("Tenancy");
    this.subheader.setBreadcrumbs([
      {
        title: "Branch",
        linkText: "Branch",
        linkPath: "/setting/tenancy/tenancy-branch",
      },
      {
        title: branchData.branch_name,
        linkText: branchData.branch_name,
        linkPath: "/setting/tenancy/tenancy-branch",
      },
    ]);
  }
}
