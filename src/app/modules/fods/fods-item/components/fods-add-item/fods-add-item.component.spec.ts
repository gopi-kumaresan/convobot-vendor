import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodsAddItemComponent } from './fods-add-item.component';

describe('FodsAddItemComponent', () => {
  let component: FodsAddItemComponent;
  let fixture: ComponentFixture<FodsAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodsAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodsAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
