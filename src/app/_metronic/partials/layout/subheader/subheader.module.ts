import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { InlineSVGModule } from "ng-inline-svg";
import { Subheader1Component } from "./subheader1/subheader1.component";
import { Subheader2Component } from "./subheader2/subheader2.component";
import { Subheader3Component } from "./subheader3/subheader3.component";
import { Subheader4Component } from "./subheader4/subheader4.component";
import { Subheader5Component } from "./subheader5/subheader5.component";
import { Subheader6Component } from "./subheader6/subheader6.component";
import { Subheader7Component } from "./subheader7/subheader7.component";
import { SubheaderWrapperComponent } from "./subheader-wrapper/subheader-wrapper.component";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownMenusModule } from "../../content/dropdown-menus/dropdown-menus.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NotificationsOffcanvasComponent } from "../extras/offcanvas/notifications-offcanvas/notifications-offcanvas.component";
import { ExtrasModule } from "../extras/extras.module";
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
    Subheader4Component,
    Subheader5Component,
    Subheader6Component,
    Subheader7Component,
    SubheaderWrapperComponent,
    // NotificationsOffcanvasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule,
    NgbDropdownModule,
    DropdownMenusModule,
    MatSlideToggleModule,
    ExtrasModule,
    MatBadgeModule
  ],
  exports: [SubheaderWrapperComponent, Subheader6Component],
})
export class SubheaderModule {}
