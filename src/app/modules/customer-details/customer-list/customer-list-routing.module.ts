import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "./customer-list.component";

const routes: Routes = [
  {
    path: "",
    component: CustomerListComponent,
    // children: [
    //   {
    //     path: "order-list",
    //     component: OrderListComponent,
    //   },

    //   { path: "", redirectTo: "order-list", pathMatch: "full" },
    //   { path: "**", redirectTo: "order-list", pathMatch: "full" },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerListRoutingModule {}
