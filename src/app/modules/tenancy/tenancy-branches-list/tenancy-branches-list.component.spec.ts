import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyBranchesListComponent } from './tenancy-branches-list.component';

describe('TenancyBranchesListComponent', () => {
  let component: TenancyBranchesListComponent;
  let fixture: ComponentFixture<TenancyBranchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenancyBranchesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenancyBranchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
