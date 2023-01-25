import { TestBed } from '@angular/core/testing';

import { ServicioEmpladosService } from './servicio-emplados.service';

describe('ServicioEmpladosService', () => {
  let service: ServicioEmpladosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpladosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
