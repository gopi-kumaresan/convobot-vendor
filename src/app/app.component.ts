import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs";
import { TranslationService } from "./modules/i18n/translation.service";
import { CookieService } from "ngx-cookie-service";

// language list
import { locale as enLang } from "./modules/i18n/vocabs/en";
import { locale as chLang } from "./modules/i18n/vocabs/ch";
import { locale as esLang } from "./modules/i18n/vocabs/es";
import { locale as jpLang } from "./modules/i18n/vocabs/jp";
import { locale as deLang } from "./modules/i18n/vocabs/de";
import { locale as frLang } from "./modules/i18n/vocabs/fr";
import { SplashScreenService } from "./_metronic/partials/layout/splash-screen/splash-screen.service";
import { TableExtendedService } from "./_metronic/shared/crud-table";
import { MessageService } from "primeng-lts/api";
// import { PrimeNGConfig } from 'primeng/api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: "body[root]",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  vendorOnboardModelStatus: boolean = true;
  welcomeMsgStatus: boolean = false;

  constructor(
    private translationService: TranslationService,
    private splashScreenService: SplashScreenService,
    private router: Router,
    private tableService: TableExtendedService,
    private messageService: MessageService,
    private cookieService: CookieService // private primengConfig: PrimeNGConfig
  ) {
    console.log("cookies data", JSON.parse(this.cookieService.get("_token")));

    // register translations
    this.translationService.loadTranslations(
      enLang,
      chLang,
      esLang,
      jpLang,
      deLang,
      frLang
    );
  }

  ngOnInit() {
    // this.primengConfig.ripple = true;

    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // clear filtration paginations and others
        this.tableService.setDefaults();
        // hide splash screen
        this.splashScreenService.hide();

        // scroll to top on every route change
        window.scrollTo(0, 0);

        // to display back the body content
        setTimeout(() => {
          document.body.classList.add("page-loaded");
        }, 500);
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  toastMessage(header: string, toastType: string, message: string) {
    this.messageService.add({
      life: 2000,
      severity: toastType,
      summary: header,
      detail: message,
    });
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
