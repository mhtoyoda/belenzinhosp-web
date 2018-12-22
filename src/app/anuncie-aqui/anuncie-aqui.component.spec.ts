import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncieAquiComponent } from './anuncie-aqui.component';

describe('AnuncieAquiComponent', () => {
  let component: AnuncieAquiComponent;
  let fixture: ComponentFixture<AnuncieAquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncieAquiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncieAquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
