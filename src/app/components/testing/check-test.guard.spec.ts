import { TestBed, async, inject } from '@angular/core/testing';

import { CheckTestGuard } from './check-test.guard';

describe('CheckTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckTestGuard]
    });
  });

  it('should ...', inject([CheckTestGuard], (guard: CheckTestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
