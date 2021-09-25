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
import { TooltipModule } from "primeng-lts/tooltip";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { TableModule } from "primeng-lts/table";
import { CheckboxModule } from "primeng-lts/checkbox";
import { RadioButtonModule } from "primeng-lts/radiobutton";
import { DropdownModule } from "primeng-lts/dropdown";

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
import { TenancyUsersListComponent } from "./tenancy-users-list/tenancy-users-list.component";
import { AddTenancyUserComponent } from "./tenancy-users-list/components/add-tenancy-user/add-tenancy-user.component";
import { UserDetailsViewComponent } from "./tenancy-users-list/components/user-details-view/user-details-view.component";
import { TenancyRBACListComponent } from "./tenancy-rbac-list/tenancy-rbac-list.component";
import { AddRoleModalComponent } from "./tenancy-rbac-list/components/add-role-modal/add-role-modal.component";
import { BusinessDetailsComponent } from "./tenancy-branches-list/components/business-details/business-details.component";
import { CreateBranchComponent } from "./tenancy-branches-list/components/create-branch/create-branch.component";
import { AgmCoreModule } from "@agm/core";

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
    TenancyUsersListComponent,
    AddTenancyUserComponent,
    UserDetailsViewComponent,
    TenancyRBACListComponent,
    AddRoleModalComponent,
    BusinessDetailsComponent,
    CreateBranchComponent,
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
    TooltipModule,
    MatStepperModule,
    MatButtonModule,
    TableModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBRfJhOzDidLI8Kk8q7DcFkmhA3HmoOI64",
      libraries: ["places", "drawing", "geometry"],
    }),
  ],
  exports: [BusinessDetailsComponent, CreateBranchComponent],
})
export class TenancyModule {}
