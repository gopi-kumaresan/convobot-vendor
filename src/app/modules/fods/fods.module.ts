import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// UI components
import { DialogModule } from "primeng-lts/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CalendarModule } from "primeng-lts/calendar";
import { CheckboxModule } from "primeng-lts/checkbox";
import { FullCalendarModule } from "primeng-lts/fullcalendar";
import { RadioButtonModule } from "primeng-lts/radiobutton";
import { TooltipModule } from "primeng-lts/tooltip";

import { FodsRoutingModule } from "./fods-routing.module";
import { FodsComponent } from "./fods.component";
import { FodSecondaryMenusComponent } from "./fod-secondary-menus/fod-secondary-menus.component";
import { InlineSVGModule } from "ng-inline-svg";
import { FormsModule } from "@angular/forms";
import { FodsMenuComponent } from "./fods-menu/fods-menu.component";
import { MenuListTabComponent } from "./fods-menu/components/menu-list-tab/menu-list-tab.component";
import { CreateMenuComponent } from "./fods-menu/components/create-menu/create-menu.component";
import { MenuGivenTimeslotComponent } from "./fods-menu/components/menu-given-timeslot/menu-given-timeslot.component";
import { MenuslotTabComponent } from "./fods-menu/components/menuslot-tab/menuslot-tab.component";
import { FodsItemComponent } from "./fods-item/fods-item.component";

@NgModule({
  declarations: [
    FodsComponent,
    FodSecondaryMenusComponent,
    FodsMenuComponent,
    MenuListTabComponent,
    CreateMenuComponent,
    MenuGivenTimeslotComponent,
    MenuslotTabComponent,
    FodsItemComponent,
  ],
  imports: [
    CommonModule,
    FodsRoutingModule,
    InlineSVGModule,
    FormsModule,
    DialogModule,
    MatTabsModule,
    MatSlideToggleModule,
    CalendarModule,
    CheckboxModule,
    FullCalendarModule,
    RadioButtonModule,
    TooltipModule,
  ],
})
export class FodsModule {}
