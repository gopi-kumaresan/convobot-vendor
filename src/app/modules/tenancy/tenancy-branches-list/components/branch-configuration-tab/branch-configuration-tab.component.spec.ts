import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchConfigurationTabComponent } from './branch-configuration-tab.component';

describe('BranchConfigurationTabComponent', () => {
  let component: BranchConfigurationTabComponent;
  let fixture: ComponentFixture<BranchConfigurationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchConfigurationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchConfigurationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
