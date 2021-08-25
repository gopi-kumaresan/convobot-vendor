import { Component, OnInit } from "@angular/core";
import { UserModel, AuthService } from "../../auth";
import { Observable } from "rxjs";

@Component({
  selector: "app-tenancy-profile-card",
  templateUrl: "./tenancy-profile-card.component.html",
  styleUrls: ["./tenancy-profile-card.component.scss"],
})
export class TenancyProfileCardComponent implements OnInit {
  user$: Observable<UserModel>;
  constructor(public userService: AuthService) {
    this.user$ = this.userService.currentUserSubject.asObservable();
  }

  ngOnInit(): void {}
}
