import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchProfileTabComponent } from './branch-profile-tab.component';

describe('BranchProfileTabComponent', () => {
  let component: BranchProfileTabComponent;
  let fixture: ComponentFixture<BranchProfileTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchProfileTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchProfileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
