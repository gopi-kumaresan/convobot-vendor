import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAreasViewComponent } from './delivery-areas-view.component';

describe('DeliveryAreasViewComponent', () => {
  let component: DeliveryAreasViewComponent;
  let fixture: ComponentFixture<DeliveryAreasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAreasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAreasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
