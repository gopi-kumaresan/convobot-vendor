import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineSVGModule } from "ng-inline-svg";

// UI Components
import { CRUDTableModule } from "src/app/_metronic/shared/crud-table";
import {
  NgbModalModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { OrderComponent } from "./order.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatBadgeModule } from "@angular/material/badge";
import { MatExpansionModule } from "@angular/material/expansion";
import { TooltipModule } from "primeng-lts/tooltip";
import { MatCardModule } from "@angular/material/card";
import { DialogModule } from "primeng-lts/dialog";
import { TenancyModule } from "../tenancy/tenancy.module";

@NgModule({
  declarations: [OrderListComponent, OrderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    TooltipModule,
    DialogModule,
  ],
})
export class OrderModule {}
