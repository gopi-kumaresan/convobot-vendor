import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodsComponent } from './fods.component';

describe('FodsComponent', () => {
  let component: FodsComponent;
  let fixture: ComponentFixture<FodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
