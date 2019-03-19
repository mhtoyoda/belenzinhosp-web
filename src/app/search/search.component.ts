import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KeyValue } from '../formulario-prestador/keyValue';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  atividades: KeyValue[] = [];
  negocios: KeyValue[] = [];

  @Input() termEmpresa = '';
  @Input() termTipoNegocio = '';
  @Input() termPrestador = '';

  constructor(private http: HttpService, private router: Router) {
    this.http.get('http://18.228.163.212:8080/api/atividade-profissional').subscribe(resposta =>
      this.atividades = resposta);
    
    this.http.get('http://18.228.163.212:8080/api/tipo-negocio').subscribe(resposta =>
      this.negocios = resposta);
  }

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
     this.router.navigate(['/resultado', 'tiponegocio', this.termTipoNegocio]);
  }

  consultarPrestador = () => {
     this.router.navigate(['/resultado', 'prestadorservico', this.termPrestador]);
  }
}
