import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TenancyComponent } from "./tenancy.component";
import { TenancyRestaurentComponent } from "./tenancy-restaurent/tenancy-restaurent.component";
import { TenancyBranchesListComponent } from "./tenancy-branches-list/tenancy-branches-list.component";

const routes: Routes = [
  {
    path: "",
    component: TenancyComponent,
    children: [
      {
        path: "tenancy-restaurent",
        component: TenancyRestaurentComponent,
      },
      {
        path: "tenancy-branch",
        component: TenancyBranchesListComponent,
      },
      // {
      //   path: "tenancy-branch-details",
      //   component: TenancyBranchDetailsComponent,
      // },
      // {
      //   path: "customer-orders",
      //   component: CustomerOrderComponent,
      // },
      // {
      //   path: "channels",
      //   component: CustomerChannelsComponent,
      // },
      // {
      //   path: "order-address",
      //   component: CustomerOrdersAddressListComponent,
      // },
      // {
      //   path: "email-settings",
      //   component: EmailSettingsComponent,
      // },
      // {
      //   path: "saved-credic-cards",
      //   component: SavedCreditCardsComponent,
      // },
      // {
      //   path: "tax-information",
      //   component: TaxInformationComponent,
      // },
      // {
      //   path: "statements",
      //   component: StatementsComponent,
      // },
      { path: "", redirectTo: "tenancy-restaurent", pathMatch: "full" },
      { path: "**", redirectTo: "tenancy-restaurent", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenancyRoutingModule {}
