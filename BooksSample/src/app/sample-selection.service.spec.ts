import { TestBed, inject } from '@angular/core/testing';

import { SampleSelectionService } from './sample-selection.service';

describe('SampleSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleSelectionService]
    });
  });

  it('should ...', inject([SampleSelectionService], (service: SampleSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
