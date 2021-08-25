import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuslotTabComponent } from './menuslot-tab.component';

describe('MenuslotTabComponent', () => {
  let component: MenuslotTabComponent;
  let fixture: ComponentFixture<MenuslotTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuslotTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuslotTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
