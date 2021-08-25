import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TenancyRoutingModule } from "./tenancy-routing.module";
import { TenancyComponent } from "./tenancy.component";
import { TenancyProfileCardComponent } from "./tenancy-profile-card/tenancy-profile-card.component";
import { TenancyRestaurentComponent } from "./tenancy-restaurent/tenancy-restaurent.component";
import { InlineSVGModule } from "ng-inline-svg";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileTabComponent } from "./tenancy-restaurent/components/profile-tab/profile-tab.component";
import { ConfigurationTabComponent } from "./tenancy-restaurent/components/configuration-tab/configuration-tab.component";
import { DocumentTabComponent } from "./tenancy-restaurent/components/document-tab/document-tab.component";
import { LogoBannerTabComponent } from "./tenancy-restaurent/components/logo-banner-tab/logo-banner-tab.component";

// UI components
import { DialogModule } from "primeng-lts/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { FileUploadModule } from "primeng-lts/fileupload";
import { ToggleButtonModule } from "primeng-lts/togglebutton";
import { CalendarModule } from "primeng-lts/calendar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

// Components
import { TenancyBranchesListComponent } from "./tenancy-branches-list/tenancy-branches-list.component";
import { RiderListComponent } from "./tenancy-branches-list/components/rider-list/rider-list.component";
import { CustomerViewDetailsModule } from "../customer-details/customer-view-details/customer-view-details.module";
import { ActivityLogComponent } from "./tenancy-branches-list/components/activity-log/activity-log.component";
import { BranchSupportComponent } from "./tenancy-branches-list/components/branch-support/branch-support.component";
import { MenuTabComponent } from "./tenancy-branches-list/components/menu-tab/menu-tab.component";
import { EarningReportTabComponent } from "./tenancy-branches-list/components/earning-report-tab/earning-report-tab.component";
import { BranchProfileTabComponent } from "./tenancy-branches-list/components/branch-profile-tab/branch-profile-tab.component";
import { BranchConfigurationTabComponent } from "./tenancy-branches-list/components/branch-configuration-tab/branch-configuration-tab.component";

@NgModule({
  declarations: [
    TenancyComponent,
    TenancyProfileCardComponent,
    TenancyRestaurentComponent,
    ProfileTabComponent,
    ConfigurationTabComponent,
    DocumentTabComponent,
    LogoBannerTabComponent,
    TenancyBranchesListComponent,
    RiderListComponent,
    ActivityLogComponent,
    BranchSupportComponent,
    MenuTabComponent,
    EarningReportTabComponent,
    BranchProfileTabComponent,
    BranchConfigurationTabComponent,
  ],
  imports: [
    CommonModule,
    TenancyRoutingModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    DialogModule,
    FileUploadModule,
    ToggleButtonModule,
    CalendarModule,
    CustomerViewDetailsModule,
    MatSidenavModule,
    MatSlideToggleModule,
  ],
})
export class TenancyModule {}
