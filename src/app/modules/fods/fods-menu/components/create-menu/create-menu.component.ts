import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-menu",
  templateUrl: "./create-menu.component.html",
  styleUrls: ["./create-menu.component.scss"],
})
export class CreateMenuComponent implements OnInit {
  addOnStatus: boolean = false;
  actionStatus: string = "category";
  categoryAddType: string = "newCategory";
  addNewCategory: string;

  subCategoryAddType: string = "newCategory";
  addNewSubCategory: string;

  CategoriesList: any = [
    { name: "Quick Bite", status: false },
    { name: "Started", status: false },
    { name: "Main Course", status: false },
    { name: "Meals", status: false },
    { name: "Combos", status: false },
    { name: "Curries", status: false },
    { name: "Briyani", status: false },
  ];

  subCategories: any = [
    {
      title: "Daily Specials",
      status: false,
      collapseStatus:false,
      datas: [
        {
          sub_categories_name: "Classic Wrap",
          price: "BD 1.600",
          status: true,
        },
        { sub_categories_name: "Spicy Wrap", price: "BD 1.600", status: false },
      ],
    },
    {
      title: "Starters",
      status: false,
      collapseStatus:false,
      datas: [
        {
          sub_categories_name: "Tacos & Strip Box",
          price: "BD 3.600",
          status: false,
        },
        {
          sub_categories_name: "Tacos & Bites Box",
          price: "BD 3.600",
          status: false,
        },
      ],
    },
    {
      title: "Main Course",
      status: false,
      collapseStatus:false,
      datas: [
        {
          sub_categories_name: "Chips Oman Crispy",
          price: "BD 2.600",
          status: false,
        },
        {
          sub_categories_name: "Chicken Meal",
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

  itemList = [
    { itemName: "Classic Wrap" },
    { itemName: "Spicy Wrap" },
    { itemName: "Tacos & Strip Box" },
    { itemName: "Tacos & Bites Box" },
    { itemName: "Chips Oman Crispy" },
    { itemName: "Chicken Meal" },
  ];
  constructor() {}

  ngOnInit(): void {}

  addNewCategoryFunction(category: string) {
    if (category == "category") {
      this.CategoriesList.unshift({ name: this.addNewCategory, status: true });
    } else {
      this.subCategories.unshift({
        title: this.addNewSubCategory,
        status: false,
        collapseStatus:false,
        datas: [
          {
            sub_categories_name: "Classic Wrap",
            price: "BD 1.600",
            status: true,
          },
          {
            sub_categories_name: "Spicy Wrap",
            price: "BD 1.600",
            status: false,
          },
        ],
      });
    }
  }
}
