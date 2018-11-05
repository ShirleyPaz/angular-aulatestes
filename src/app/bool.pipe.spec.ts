import { BoolPipe } from './bool.pipe';

describe('BoolPipe', () => {
  it('deve ser sim', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(true)).toBe('Sim');
  });
  it('deve ser não', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(false)).toBe('Não');
  });
});
