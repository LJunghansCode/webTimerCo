import { TestBed, inject } from '@angular/core/testing';

import { TimerServiceService } from './timer-service.service';

describe('TimerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerServiceService]
    });
  });

  it('should ...', inject([TimerServiceService], (service: TimerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
