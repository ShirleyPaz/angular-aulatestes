import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;
  let element: HTMLDivElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    element =  fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('deve aumentar o valor da div counter ao executar método aumentar', () => {
    component.aumentar();
    fixture.detectChanges();
    expect(element.querySelector('#contador').textContent).toBe('1');
  });

  it('deve diminuir o valor da div counter ao executar método diminuir', () => {
    component.diminuir();
    fixture.detectChanges();
    expect(element.querySelector('#contador').textContent).toBe('-1');
  });
});
