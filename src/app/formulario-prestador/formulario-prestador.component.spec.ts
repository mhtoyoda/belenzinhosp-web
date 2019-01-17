import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPrestadorComponent } from './formulario-prestador.component';

describe('FormularioPrestadorComponent', () => {
  let component: FormularioPrestadorComponent;
  let fixture: ComponentFixture<FormularioPrestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPrestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
