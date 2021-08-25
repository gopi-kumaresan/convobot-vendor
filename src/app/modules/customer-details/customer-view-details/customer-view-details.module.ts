import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerViewDetailsRoutingModule } from "./customer-view-details-routing.module";
import { CustomerViewDetailsComponent } from "./customer-view-details.component";
import { CustomerProfileCardComponent } from "./customer-profile-card/customer-profile-card.component";
import { InlineSVGModule } from "ng-inline-svg";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomerOrderComponent } from "./customer-order/customer-order.component";
import { CustomerChannelsComponent } from "./customer-channels/customer-channels.component";
import { CustomerOrdersAddressListComponent } from "./customer-orders-address-list/customer-orders-address-list.component";
import { OrderDetailsModelComponent } from "./customer-order/components/order-details-model/order-details-model.component";
import { FormsModule } from "@angular/forms";

// UI components
import { DialogModule } from "primeng-lts/dialog";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
// import { ConfirmDialogModule } from "primeng-lts/confirmdialog";
import { ConfirmationService } from "primeng-lts/api";
import { SelectButtonModule } from "primeng-lts/selectbutton";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    CustomerViewDetailsComponent,
    CustomerProfileCardComponent,
    CustomerOrderComponent,
    CustomerChannelsComponent,
    CustomerOrdersAddressListComponent,
    OrderDetailsModelComponent,
  ],
  imports: [
    CommonModule,
    CustomerViewDetailsRoutingModule,
    FormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    DialogModule,
    MatStepperModule,
    MatButtonModule,
    SelectButtonModule,
    MatTabsModule,
    // ConfirmDialogModule,
    // ButtonModule
  ],
  exports: [CustomerOrderComponent],
})
export class CustomerViewDetailsModule {}
