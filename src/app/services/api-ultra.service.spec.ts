import { TestBed, inject } from '@angular/core/testing';

import { ApiUltraService } from './api-ultra.service';

describe('ApiUltraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUltraService]
    });
  });

  it('should be created', inject([ApiUltraService], (service: ApiUltraService) => {
    expect(service).toBeTruthy();
  }));
});
