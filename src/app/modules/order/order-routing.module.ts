import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderComponent } from "./order.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
  {
    path: "",
    component: OrderComponent,
    children: [
      {
        path: "order-list",
        component: OrderListComponent,
      },

      { path: "", redirectTo: "order-list", pathMatch: "full" },
      { path: "**", redirectTo: "order-list", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
