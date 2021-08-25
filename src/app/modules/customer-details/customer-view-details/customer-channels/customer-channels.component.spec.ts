import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChannelsComponent } from './customer-channels.component';

describe('CustomerChannelsComponent', () => {
  let component: CustomerChannelsComponent;
  let fixture: ComponentFixture<CustomerChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
