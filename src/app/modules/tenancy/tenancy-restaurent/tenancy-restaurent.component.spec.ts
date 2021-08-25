import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyRestaurentComponent } from './tenancy-restaurent.component';

describe('TenancyRestaurentComponent', () => {
  let component: TenancyRestaurentComponent;
  let fixture: ComponentFixture<TenancyRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenancyRestaurentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenancyRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
