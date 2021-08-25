import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListTabComponent } from './menu-list-tab.component';

describe('MenuListTabComponent', () => {
  let component: MenuListTabComponent;
  let fixture: ComponentFixture<MenuListTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
