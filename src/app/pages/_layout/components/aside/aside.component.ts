import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { LayoutService } from "../../../../_metronic/core";
import { KTUtil } from "../../../../../assets/js/components/util";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Router } from "@angular/router";

@Component({
  selector: "app-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"],
})
export class AsideComponent implements OnInit {
  TABS: string[] = [
    "kt_aside_tab_0",
    "kt_aside_tab_1",
    "kt_aside_tab_2",
    "kt_aside_tab_3",
    "kt_aside_tab_4",
    "kt_aside_tab_5",
    "kt_aside_tab_6",
    "kt_aside_tab_7",
    "kt_aside_tab_8",
    "kt_aside_tab_9",
    "kt_aside_tab_10",
    "kt_aside_tab_11",
    "kt_aside_tab_12",
  ];
  activeTabId;
  disableAsideSelfDisplay: boolean;
  asideMenuStatic: true;
  disableAsideSecondaryDisplay: boolean;
  ulCSSClasses: string;
  asideMenuHTMLAttributes: any = {};
  asideMenuCSSClasses: string;
  asideMenuDropdown;
  brandClasses: string;
  asideMenuScroll = 1;
  asideSelfMinimizeToggle = false;

  svg =
    "<svg class='svg-icon' viewBox='0 0 20 20'> <path d='M18.084,11.639c0.168,0.169,0.168,0.442,0,0.611c-0.084,0.084-0.195,0.127-0.306,0.127c-0.111,0-0.221-0.043-0.306-0.127l-1.639-1.639l-1.639,1.639c-0.084,0.084-0.195,0.127-0.306,0.127c-0.111,0-0.222-0.043-0.307-0.127c-0.168-0.169-0.168-0.442,0-0.611L15.223,10l-1.64-1.639c-0.168-0.168-0.168-0.442,0-0.61c0.17-0.169,0.442-0.169,0.612,0l1.639,1.639l1.639-1.639c0.169-0.169,0.442-0.169,0.611,0c0.168,0.168,0.168,0.442,0,0.61L16.445,10L18.084,11.639z M12.161,2.654v14.691c0,0.175-0.105,0.333-0.267,0.4c-0.054,0.021-0.109,0.032-0.166,0.032c-0.111,0-0.223-0.043-0.305-0.127l-3.979-3.979H2.222c-0.237,0-0.432-0.194-0.432-0.432V6.759c0-0.237,0.195-0.432,0.432-0.432h5.222l3.979-3.978c0.123-0.125,0.309-0.163,0.471-0.095C12.056,2.322,12.161,2.479,12.161,2.654 M7.192,7.192H2.654v5.617h4.538V7.192z M11.296,3.698l-3.24,3.241v6.123l3.24,3.24V3.698z'></path></svg>";

  currentUrl: any = [];
  constructor(
    private layout: LayoutService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    console.log("current URL", this.router.url.split("/"));
    this.currentUrl = this.router.url.split("/");
  }

  ngOnInit(): void {
    this.activeTabId = this.TABS[1];
    // load view settings
    this.disableAsideSelfDisplay =
      this.layout.getProp("aside.self.display") === false;
    this.asideMenuStatic = this.layout.getProp("aside.menu.static");
    this.ulCSSClasses = this.layout.getProp("aside_menu_nav");
    this.asideMenuCSSClasses = this.layout.getStringCSSClasses("aside_menu");
    this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes("aside_menu");
    this.asideMenuDropdown = this.layout.getProp("aside.menu.dropdown")
      ? "1"
      : "0";
    this.brandClasses = this.layout.getProp("brand");
    this.asideSelfMinimizeToggle = this.layout.getProp(
      "aside.self.minimize.toggle"
    );
    this.asideMenuScroll = this.layout.getProp("aside.menu.scroll") ? 1 : 0;
    this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${
      this.asideMenuScroll === 1 ? "scroll my-4 ps ps--active-y" : ""
    }`;
    this.disableAsideSecondaryDisplay = this.layout.getProp(
      "aside.secondary.display"
    );

    if (this.currentUrl[2] == "tenancy") {
      console.log("ok");

      this.activeTabId = "kt_aside_tab_6";
    }
  }

  setTab(id) {
    console.log("id", id);

    this.activeTabId = id;
    const asideWorkspace = KTUtil.find(
      document.getElementById("kt_aside"),
      ".aside-secondary .aside-workspace"
    );
    if (asideWorkspace) {
      KTUtil.scrollUpdate(asideWorkspace);
    }
    this.cdr.detectChanges();
  }
}
