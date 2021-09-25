import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tenancy-user',
  templateUrl: './add-tenancy-user.component.html',
  styleUrls: ['./add-tenancy-user.component.scss']
})
export class AddTenancyUserComponent implements OnInit {
  uploadedFiles: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
