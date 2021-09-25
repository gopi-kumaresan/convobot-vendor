import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fods-add-item",
  templateUrl: "./fods-add-item.component.html",
  styleUrls: ["./fods-add-item.component.scss"],
})
export class FodsAddItemComponent implements OnInit {
  actionStatus: string = "";
  addOnGroupType: string = "new";
  addOnType: string = "new";
  uploadedFiles: any = [];
  addOnGroupList: any = [
    {
      addOnGroupName: "Extra",
      status: false,
      collapseStatus: false,
      datas: [
        {
          addOnName: "Extra Cheese (2 Sliders)",
          price: "BD 1.600",
          status: true,
        },
        {
          addOnName: "Cheddar Cheese Dip",
          price: "BD 1.600",
          status: false,
        },
      ],
    },
    {
      addOnGroupName: "Choose Your Beverage",
      status: false,
      collapseStatus: false,
      datas: [
        {
          addOnName: "Tea",
          price: "BD 3.600",
          status: false,
        },
        {
          addOnName: "Coffee",
          price: "BD 3.600",
          status: false,
        },
      ],
    },
    {
      addOnGroupName: "Add Sides Salad",
      status: false,
      collapseStatus: false,
      datas: [
        {
          addOnName: "Garden Fresh salad",
          price: "BD 2.600",
          status: false,
        },
        {
          addOnName: "Grilled Chicken Salad",
          price: "BD 2.600",
          status: false,
        },
      ],
    },
  ];

  AddOnList = [
    {
      addOnName: "Extra Cheese (2 Sliders)",
    },
    {
      addOnName: "Extra Cheese (3 Sliders)",
    },
    {
      addOnName: "Chili Dip",
    },
    {
      addOnName: "BBQ Dip",
    },
    {
      addOnName: "Mushroom Dip",
    },
    {
      addOnName: "BBQ Dip",
    },
  ];

  existingAddOnGroupList: any = [
    { name: "Extra", status: false },
    { name: "Choose Your Beverage", status: false },
    { name: "Add Sides Salad", status: false },
  ];

  baseListData: any = [
    {
      baseName: "Extra Cheese (2 Sliders)",
    },
    {
      baseName: "Extra Cheese (3 Sliders)",
    },
    {
      baseName: "Chili Dip",
    },
    {
      baseName: "BBQ Dip",
    },
    {
      baseName: "Mushroom Dip",
    },
    {
      baseName: "BBQ Dip",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
