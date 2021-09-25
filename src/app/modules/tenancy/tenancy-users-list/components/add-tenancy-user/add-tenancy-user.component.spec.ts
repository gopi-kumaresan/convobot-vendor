import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenancyUserComponent } from './add-tenancy-user.component';

describe('AddTenancyUserComponent', () => {
  let component: AddTenancyUserComponent;
  let fixture: ComponentFixture<AddTenancyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTenancyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTenancyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
