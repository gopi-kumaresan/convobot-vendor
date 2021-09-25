import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

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

  subCategories: any = [
    {
      title: "Daily Specials",
      status: false,
      collapseStatus: false,
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
      collapseStatus: false,
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
      collapseStatus: false,
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
  constructor() { }

  ngOnInit(): void { }

  addNewCategoryFunction(category: string) {
    if (category == "category") {
      this.CategoriesList.unshift({ name: this.addNewCategory, status: true });
    } else {
      this.subCategories.unshift({
        title: this.addNewSubCategory,
        status: false,
        collapseStatus: false,
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

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(
      this.subCategories,
      event.previousIndex,
      event.currentIndex
    );
  }
  dropOne(
    event: CdkDragDrop<{ title: string; poster: string }[]>,
    index: number
  ) {
    console.log("index", index);

    moveItemInArray(
      this.subCategories[index].datas,
      event.previousIndex,
      event.currentIndex
    );
  }
}
