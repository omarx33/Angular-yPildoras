import { TestBed } from '@angular/core/testing';

import { SegundoServicioService } from './segundo-servicio.service';

describe('SegundoServicioService', () => {
  let service: SegundoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegundoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
