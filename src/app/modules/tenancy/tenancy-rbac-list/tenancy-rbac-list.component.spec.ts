import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyRBACListComponent } from './tenancy-rbac-list.component';

describe('TenancyRBACListComponent', () => {
  let component: TenancyRBACListComponent;
  let fixture: ComponentFixture<TenancyRBACListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenancyRBACListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenancyRBACListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
