import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodSecondaryMenusComponent } from './fod-secondary-menus.component';

describe('FodSecondaryMenusComponent', () => {
  let component: FodSecondaryMenusComponent;
  let fixture: ComponentFixture<FodSecondaryMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodSecondaryMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodSecondaryMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
