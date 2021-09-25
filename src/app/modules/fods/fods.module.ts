import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// UI components
import { DialogModule } from "primeng-lts/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CalendarModule } from "primeng-lts/calendar";
import { CheckboxModule } from "primeng-lts/checkbox";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RadioButtonModule } from "primeng-lts/radiobutton";
import { TooltipModule } from "primeng-lts/tooltip";
import { FileUploadModule } from "primeng-lts/fileupload";
import {
  AgendaService,
  DayService,
  ScheduleModule,
  WorkWeekService,
} from "@syncfusion/ej2-angular-schedule";

import { FodsRoutingModule } from "./fods-routing.module";
import { FodsComponent } from "./fods.component";
import { FodSecondaryMenusComponent } from "./fod-secondary-menus/fod-secondary-menus.component";
import { InlineSVGModule } from "ng-inline-svg";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FodsMenuComponent } from "./fods-menu/fods-menu.component";
import { MenuListTabComponent } from "./fods-menu/components/menu-list-tab/menu-list-tab.component";
import { CreateMenuComponent } from "./fods-menu/components/create-menu/create-menu.component";
import { MenuGivenTimeslotComponent } from "./fods-menu/components/menu-given-timeslot/menu-given-timeslot.component";
import { MenuslotTabComponent } from "./fods-menu/components/menuslot-tab/menuslot-tab.component";
import { FodsItemComponent } from "./fods-item/fods-item.component";
import { FodsAddItemComponent } from "./fods-item/components/fods-add-item/fods-add-item.component";
import { AgmCoreModule } from "@agm/core";
import { AgmDrawingModule } from "@agm/drawing";
import { DeliveryAreasViewComponent } from "./delivery-areas-view/delivery-areas-view.component";
import { AddDeliveryAreaComponent } from "./delivery-areas-view/components/add-delivery-area/add-delivery-area.component";
// import { AgmCoreModule } from "../../../agm/core";
import { WeekService, MonthService } from "@syncfusion/ej2-angular-schedule";

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
    FodsAddItemComponent,
    DeliveryAreasViewComponent,
    AddDeliveryAreaComponent,
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
    RadioButtonModule,
    TooltipModule,
    ReactiveFormsModule,
    FileUploadModule,
    DragDropModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI",
    // }),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBRfJhOzDidLI8Kk8q7DcFkmhA3HmoOI64",
      libraries: ["places", "drawing", "geometry"],
    }),
    AgmDrawingModule,
    ScheduleModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
  ],
})
export class FodsModule {}
