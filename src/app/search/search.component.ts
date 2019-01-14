import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() termEmpresa = '';
  @Input() termTipoNegocio = '';
  @Input() termPrestador = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  resetFocus() {
    this.termEmpresa = '';
    this.termTipoNegocio = '';
    this.termPrestador = '';
  }

  consultarEmpresa = () => {
    this.router.navigate(['/resultado', 'empresa', this.termEmpresa]);
  }

  consultarTipoNegocio = () => {
     console.log('Teste2: ' + this.termTipoNegocio.toUpperCase());
  }

  consultarPrestador = () => {
     console.log('Teste3: ' + this.termPrestador.toUpperCase());
  }
}
