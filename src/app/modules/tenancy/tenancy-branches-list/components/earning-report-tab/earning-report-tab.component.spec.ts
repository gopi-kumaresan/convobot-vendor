import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningReportTabComponent } from './earning-report-tab.component';

describe('EarningReportTabComponent', () => {
  let component: EarningReportTabComponent;
  let fixture: ComponentFixture<EarningReportTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningReportTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningReportTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
