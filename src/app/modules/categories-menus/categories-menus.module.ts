import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesMenusRoutingModule } from "./categories-menus-routing.module";
import { CategoriesMenusComponent } from "./categories-menus.component";
import { MenusComponent } from "./menus/menus.component";

// UI components
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineSVGModule } from "ng-inline-svg";
import { CRUDTableModule } from "src/app/_metronic/shared/crud-table";
import {
  NgbModalModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";

// UI components
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";
import {InputSwitchModule} from 'primeng-lts/inputswitch';

@NgModule({
  declarations: [CategoriesMenusComponent, MenusComponent],
  imports: [
    CommonModule,
    CategoriesMenusRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    InputSwitchModule
  ],
})
export class CategoriesMenusModule {}
