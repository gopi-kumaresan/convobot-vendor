import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMenusComponent } from './categories-menus.component';

describe('CategoriesMenusComponent', () => {
  let component: CategoriesMenusComponent;
  let fixture: ComponentFixture<CategoriesMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
