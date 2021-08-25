import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerListRoutingModule } from "./customer-list-routing.module";
import { CustomerListComponent } from "./customer-list.component";
import { InlineSVGModule } from "ng-inline-svg";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerListRoutingModule,
    InlineSVGModule,
    MatCardModule,
    MatRadioModule,
    NgbModalModule,
    FormsModule,
  ],
})
export class CustomerListModule {}
