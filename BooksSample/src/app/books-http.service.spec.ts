import { TestBed, inject } from '@angular/core/testing';

import { BooksHttpService } from './books-http.service';

describe('BooksHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksHttpService]
    });
  });

  it('should ...', inject([BooksHttpService], (service: BooksHttpService) => {
    expect(service).toBeTruthy();
  }));
});
