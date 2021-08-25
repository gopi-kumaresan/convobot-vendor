import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationTabComponent } from './configuration-tab.component';

describe('ConfigurationTabComponent', () => {
  let component: ConfigurationTabComponent;
  let fixture: ComponentFixture<ConfigurationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
