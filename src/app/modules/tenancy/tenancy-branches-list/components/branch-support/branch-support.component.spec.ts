import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSupportComponent } from './branch-support.component';

describe('BranchSupportComponent', () => {
  let component: BranchSupportComponent;
  let fixture: ComponentFixture<BranchSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
