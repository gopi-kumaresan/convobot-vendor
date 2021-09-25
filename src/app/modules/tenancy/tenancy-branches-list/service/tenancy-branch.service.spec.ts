import { TestBed } from '@angular/core/testing';

import { TenancyBranchService } from './tenancy-branch.service';

describe('TenancyBranchService', () => {
  let service: TenancyBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenancyBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
