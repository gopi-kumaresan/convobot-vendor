import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodsMenuComponent } from './fods-menu.component';

describe('FodsMenuComponent', () => {
  let component: FodsMenuComponent;
  let fixture: ComponentFixture<FodsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
