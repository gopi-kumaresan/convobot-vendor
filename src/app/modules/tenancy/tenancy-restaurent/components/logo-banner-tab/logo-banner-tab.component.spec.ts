import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBannerTabComponent } from './logo-banner-tab.component';

describe('LogoBannerTabComponent', () => {
  let component: LogoBannerTabComponent;
  let fixture: ComponentFixture<LogoBannerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBannerTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBannerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
