import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() termEmpresa = '';
  @Input() termTipoNegocio = '';
  @Input() termPrestador = '';

  constructor() { }

  ngOnInit() {
  }

  resetFocus() {
    this.termEmpresa = '';
    this.termTipoNegocio = '';
    this.termPrestador = '';
  }

  consultarEmpresa = () => {
     console.log('Teste1: ' + this.termEmpresa.toUpperCase());
  }

  consultarTipoNegocio = () => {
     console.log('Teste2: ' + this.termTipoNegocio.toUpperCase());
  }

  consultarPrestador = () => {
     console.log('Teste3: ' + this.termPrestador.toUpperCase());
  }
}
