import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodsItemComponent } from './fods-item.component';

describe('FodsItemComponent', () => {
  let component: FodsItemComponent;
  let fixture: ComponentFixture<FodsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
