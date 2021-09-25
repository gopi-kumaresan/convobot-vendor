import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyUsersListComponent } from './tenancy-users-list.component';

describe('TenancyUsersListComponent', () => {
  let component: TenancyUsersListComponent;
  let fixture: ComponentFixture<TenancyUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenancyUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenancyUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
