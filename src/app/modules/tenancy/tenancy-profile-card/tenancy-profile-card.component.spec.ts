import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyProfileCardComponent } from './tenancy-profile-card.component';

describe('TenancyProfileCardComponent', () => {
  let component: TenancyProfileCardComponent;
  let fixture: ComponentFixture<TenancyProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenancyProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenancyProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
