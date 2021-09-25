import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FodsComponent } from "./fods.component";
import { FodsMenuComponent } from "./fods-menu/fods-menu.component";
import { FodsItemComponent } from './fods-item/fods-item.component';
import { DeliveryAreasViewComponent } from "./delivery-areas-view/delivery-areas-view.component";

const routes: Routes = [
  {
    path: "",
    component: FodsComponent,
    children: [
      {
        path: "menu",
        component: FodsMenuComponent,
      },
      {
        path: "item",
        component: FodsItemComponent,
      },
      {
        path: "delivery-area-view",
        component: DeliveryAreasViewComponent,
      },
      // {
      //   path: "tenancy-branch",
      //   component: TenancyBranchesListComponent,
      // },
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
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "**", redirectTo: "menu", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FodsRoutingModule { }
