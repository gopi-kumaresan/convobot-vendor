import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {
  categoriesCardShow: boolean = false;
  expandCategories: boolean = true;
  
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
          status: false,
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

  constructor() {}

  ngOnInit(): void {
    
  }

}
