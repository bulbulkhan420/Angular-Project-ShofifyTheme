import { TestBed } from '@angular/core/testing';

import { GetCardListService } from './get-card-list.service';

describe('GetCardListService', () => {
  let service: GetCardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
