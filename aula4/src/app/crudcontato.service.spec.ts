import { TestBed } from '@angular/core/testing';

import { CrudcontatoService } from './crudcontato.service';

describe('CrudcontatoService', () => {
  let service: CrudcontatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudcontatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
