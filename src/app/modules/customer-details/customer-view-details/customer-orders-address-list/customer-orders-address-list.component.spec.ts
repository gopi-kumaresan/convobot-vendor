import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdersAddressListComponent } from './customer-orders-address-list.component';

describe('CustomerOrdersAddressListComponent', () => {
  let component: CustomerOrdersAddressListComponent;
  let fixture: ComponentFixture<CustomerOrdersAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrdersAddressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrdersAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
