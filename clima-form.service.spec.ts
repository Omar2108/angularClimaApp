import { TestBed } from '@angular/core/testing';

import { ClimaFormService } from './clima-form.service';

describe('ClimaFormService', () => {
  let service: ClimaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
