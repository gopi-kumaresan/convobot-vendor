import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerViewDetailsComponent } from "./customer-view-details.component";
import { CustomerProfileCardComponent } from "./customer-profile-card/customer-profile-card.component";
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerChannelsComponent } from './customer-channels/customer-channels.component';
import { CustomerOrdersAddressListComponent } from './customer-orders-address-list/customer-orders-address-list.component';

const routes: Routes = [
  {
    path: "",
    component: CustomerViewDetailsComponent,
    children: [
      // {
      //   path: "profile-overview",
      //   component: CustomerProfileCardComponent,
      // },
      {
        path: "customer-orders",
        component: CustomerOrderComponent,
      },
      {
        path: "channels",
        component: CustomerChannelsComponent,
      },
      {
        path: "order-address",
        component: CustomerOrdersAddressListComponent,
      },
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
      { path: "", redirectTo: "customer-orders", pathMatch: "full" },
      { path: "**", redirectTo: "customer-orders", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerViewDetailsRoutingModule {}
