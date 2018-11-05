import { TestBed } from '@angular/core/testing';

import { OperadoresService } from './operadores.service';

describe('OperadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Não deve dar 4 ao somar os parâmetros passados.', () => {
    const service: OperadoresService = TestBed.get(OperadoresService);
    expect(service.add(1,2)).not.toBe(4);
  });
});
