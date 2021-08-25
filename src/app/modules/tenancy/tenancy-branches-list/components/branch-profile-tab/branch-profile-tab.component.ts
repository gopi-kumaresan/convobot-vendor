import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-profile-tab',
  templateUrl: './branch-profile-tab.component.html',
  styleUrls: ['./branch-profile-tab.component.scss']
})
export class BranchProfileTabComponent implements OnInit {
  editMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
