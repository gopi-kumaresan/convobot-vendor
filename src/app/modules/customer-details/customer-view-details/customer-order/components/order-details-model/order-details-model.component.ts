import { Component, OnInit } from "@angular/core";
import { LayoutService } from "src/app/_metronic/core";

@Component({
  selector: "app-order-details-model",
  templateUrl: "./order-details-model.component.html",
  styleUrls: ["./order-details-model.component.scss"],
})
export class OrderDetailsModelComponent implements OnInit {
  extrasQuickPanelOffcanvasDirectionCSSClass = "offcanvas-right";
  activeTabId:
    | "kt_quick_panel_logs"
    | "kt_quick_panel_notifications"
    | "kt_quick_panel_settings" = "kt_quick_panel_logs";

  firstFormGroup: any;
  secondFormGroup: any;

  viewOrderDetails = [
    { name: "Order Number", value: "5644" },
    { name: "Branch", value: "adyar, chennai" },
    { name: "Order Date & Time", value: "22-05-2000 05:00 AM" },
    { name: "Order Status", value: "Delivered" },
    { name: "Order Type", value: "" },
    { name: "Order Channel", value: "Whatsspp" },
    {
      name: "Items list summary",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      name: "Instructions",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    { name: "Total | Discount details", value: "RS 150.2" },
    { name: "Payment Type", value: "COD" },
    { name: "Payment Status", value: "Success" },
    {
      name: "Delivery Address",
      value:
        "Raj Rathna Building, 253, 254, 2nd Floor, Lawley Rd, Coimbatore, Tamil Nadu 641003",
    },
    { name: "DeliveryTime", value: "22-02-2020 12:00 AM" },
    { name: "Rider details", value: "Kumar" },
  ];
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    // this.extrasQuickPanelOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp(
    //   'extras.quickPanel.offcanvas.direction'
    // )}`;
  }

  setActiveTabId(tabId) {
    this.activeTabId = tabId;
  }

  getActiveCSSClasses(tabId) {
    if (tabId !== this.activeTabId) {
      return "";
    }
    return "active show";
  }
}
