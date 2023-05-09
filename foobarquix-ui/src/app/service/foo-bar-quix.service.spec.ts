import { TestBed } from '@angular/core/testing';

import { FooBarQuixService } from './foo-bar-quix.service';

describe('FooBarQuixService', () => {
  let service: FooBarQuixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooBarQuixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
