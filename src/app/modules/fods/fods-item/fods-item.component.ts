import { Component, OnInit } from "@angular/core";
import { SubheaderService } from "src/app/_metronic/partials/layout";

@Component({
  selector: "app-fods-item",
  templateUrl: "./fods-item.component.html",
  styleUrls: ["./fods-item.component.scss"],
})
export class FodsItemComponent implements OnInit {
  itemModelStatus: boolean = false;
  totalHeight: number = window.innerHeight;

  itemListData: any = [
    {
      itemName: "Mirinda Strawberry Large",
      descripton: "Mirinda Strawberry Large",
      price: "BD 0.700",
      imgUrl:
        "https://d1vu57prolzyp.cloudfront.net/adminblv2/items/etYZ1Z0UqHBvb99lIUI1MoiOuKAA5B8r9jMgO8EK.png",
    },
    {
      itemName: "Chicken Strips",
      descripton: "Chicken Strips",
      price: "BD 1.800",
      imgUrl:
        "https://d1vu57prolzyp.cloudfront.net/adminblv2/items/YCIBqBpLgs1OyhBMCbfbEJpcpe4VzERyN7w4ekjj.jpg",
    },
    {
      itemName: "Chicken Strips Value Meal",
      descripton: "Chicken Strips Value Meal",
      price: "BD 2.200",
      imgUrl:
        "https://d1vu57prolzyp.cloudfront.net/adminblv2/items/SihudAAchQ64UErpB98gUd7wic1Ah4IDSDvNO2pT.jpg",
    },
    {
      itemName: "Pepsi Diet Large",
      descripton: "Pepsi Diet Large",
      price: "BD 0.700",
      imgUrl:
        "https://d1vu57prolzyp.cloudfront.net/adminblv2/items/2sv4V2x9umOp2XUK9hF4bmf7hUCjgFxb0dXMKTxo.png",
    },
    {
      itemName: "Mirinda Orange Large",
      descripton: "Mirinda Orange Large",
      price: "BD 0.700",
      imgUrl:
        "https://d1vu57prolzyp.cloudfront.net/adminblv2/items/4fiEZAD4Mmb8ZqpPcyR2whoYfDgd8421kAGZb2xY.png",
    },
    {
      itemName: "7 Up Large",
      descripton: "7 Up Large",
      price: "BD 0.700",
      imgUrl:
        "https://d1vu57prolzyp.cloudfront.net/adminblv2/items/5to1lW4Jj7mEj2xIbp5aHxrGdWf50yhVgkkHOHDh.png",
    },
  ];
  constructor(private subheader: SubheaderService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subheader.setTitle("FODS");
      this.subheader.setBreadcrumbs([
        {
          title: "Item",
          linkText: "Item",
          linkPath: "/setting/fods/item",
        },
      ]);
    }, 1);
  }
}
