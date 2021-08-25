import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileCardComponent } from './customer-profile-card.component';

describe('CustomerProfileCardComponent', () => {
  let component: CustomerProfileCardComponent;
  let fixture: ComponentFixture<CustomerProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
