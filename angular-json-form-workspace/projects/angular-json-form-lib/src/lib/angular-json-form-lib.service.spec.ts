import { TestBed } from '@angular/core/testing';

import { AngularJsonFormLibService } from './angular-json-form-lib.service';

describe('AngularJsonFormLibService', () => {
  let service: AngularJsonFormLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularJsonFormLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
