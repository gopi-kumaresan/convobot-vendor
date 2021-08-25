import { Component, OnInit } from "@angular/core";
import { AuthService, UserModel } from "src/app/modules/auth";
import { Observable } from "rxjs";

@Component({
  selector: "app-customer-profile-card",
  templateUrl: "./customer-profile-card.component.html",
  styleUrls: ["./customer-profile-card.component.scss"],
})
export class CustomerProfileCardComponent implements OnInit {
  user$: Observable<UserModel>;
  constructor(public userService: AuthService) {
    this.user$ = this.userService.currentUserSubject.asObservable();
  }

  ngOnInit(): void {}
}
