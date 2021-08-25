import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-menus",
  templateUrl: "./menus.component.html",
  styleUrls: ["./menus.component.scss"],
})
export class MenusComponent implements OnInit {
  expandCategories: boolean = true;
  totalHeight = window.innerHeight;

  CategoriesList: any = [
    { name: "Quick Bite" },
    { name: "Started" },
    { name: "Main Course" },
    { name: "Meals" },
    { name: "Combos" },
    { name: "Curries" },
    { name: "Briyani" },
  ];

  subCategories: any = [
    {
      title: "Daily Specials",
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
  constructor(private subheader: SubheaderService) {
    // this.totalHeight = window.innerHeight - 180;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("Menu");
      // this.subheader.setBreadcrumbs([
      //   {
      //     title: "Menu",
      //     linkText: "Menu",
      //     linkPath: "/menu",
      //   },
      // ]);
    }, 1);
  }
}
