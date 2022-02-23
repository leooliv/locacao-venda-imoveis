import { TestBed } from '@angular/core/testing';

import { CepFinderService } from './cep-finder.service';

describe('CepFinderService', () => {
  let service: CepFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
