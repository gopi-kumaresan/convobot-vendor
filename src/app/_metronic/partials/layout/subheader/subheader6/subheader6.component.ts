import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BreadcrumbItemModel } from "../_models/breadcrumb-item.model";
import { LayoutService } from "../../../../core";
import { SubheaderService } from "../_services/subheader.service";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

import KTLayoutQuickPanel from "../../../../../../assets/js/layout/extended/quick-panel";
import KTLayoutQuickUser from "../../../../../../assets/js/layout/extended/quick-user";
import { KTUtil } from "../../../../../../assets/js/components/util";
import { UserModel, AuthService } from "src/app/modules/auth";

@Component({
  selector: "app-subheader6",
  templateUrl: "./subheader6.component.html",
})
export class Subheader6Component implements OnInit {
  subheaderCSSClasses = "";
  subheaderContainerCSSClasses = "";
  subheaderMobileToggle = false;
  subheaderDisplayDesc = false;
  subheaderDisplayDaterangepicker = false;
  title$: Observable<string>;
  breadcrumbs$: Observable<BreadcrumbItemModel[]>;
  description$: Observable<string>;

  // Model variable
  extrasQuickPanelDisplay: boolean;
  extrasUserDisplay: boolean;
  extrasUserLayout: "offcanvas" | "dropdown";
  user$: Observable<UserModel>;
  constructor(
    private layout: LayoutService,
    private subheader: SubheaderService,
    private auth: AuthService
  ) {
    this.title$ = this.subheader.titleSubject.asObservable();
    this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
    this.description$ = this.subheader.descriptionSubject.asObservable();
    console.log("breadcrumbs", this.breadcrumbs$);
  }

  ngOnInit() {
    this.subheaderCSSClasses = this.layout.getStringCSSClasses("subheader");
    this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses(
      "subheader_container"
    );
    this.subheaderMobileToggle = this.layout.getProp("subheader.mobileToggle");
    this.subheaderDisplayDesc = this.layout.getProp("subheader.displayDesc");
    this.subheaderDisplayDaterangepicker = this.layout.getProp(
      "subheader.displayDaterangepicker"
    );

    // Model boolean data get
    this.extrasQuickPanelDisplay = this.layout.getProp(
      "extras.quickPanel.display"
    );

    this.extrasUserDisplay = this.layout.getProp("extras.user.display");
    this.extrasUserLayout = this.layout.getProp("extras.user.layout");
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  ngAfterViewInit(): void {
    KTUtil.ready(() => {
      if (this.extrasQuickPanelDisplay) {
        // Init Quick Offcanvas Panel
        KTLayoutQuickPanel.init("kt_quick_panel");
      }

      if (this.extrasUserDisplay && this.extrasUserLayout === "offcanvas") {
        // Init Quick User Panel
        KTLayoutQuickUser.init("kt_quick_user");
      }
    });
  }
}
