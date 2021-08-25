import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGivenTimeslotComponent } from './menu-given-timeslot.component';

describe('MenuGivenTimeslotComponent', () => {
  let component: MenuGivenTimeslotComponent;
  let fixture: ComponentFixture<MenuGivenTimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGivenTimeslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGivenTimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
