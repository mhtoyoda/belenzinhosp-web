import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { KeyValue } from './keyValue';

@Component({
  selector: 'app-formulario-prestador',
  templateUrl: './formulario-prestador.component.html',
  styleUrls: ['./formulario-prestador.component.css']
})
export class FormularioPrestadorComponent implements OnInit {

  formPrestadorServico: FormGroup;

  mensagem: string;
  logradouros: KeyValue[] = [];
  atividades: KeyValue[] = [];
  dataCadastro = '17/01/2019';

  @Input() nome: string;
  @Input() logradouro: string;
  @Input() numero: string;
  @Input() bairro: string;
  @Input() cep: string;
  @Input() cpf: string;
  @Input() atividadeProfissional: string;
  @Input() telefone: string;
  @Input() celular: string;
  @Input() avaliacao: string;
  @Input() linkedin: string;
  @Input() facebook: string;
  @Input() website: string;
  @Input() observacao: string;

  constructor(private http: HttpService, formBuilder: FormBuilder, private router: Router) {
    this.http.get('http://localhost:8080/api/atividade-profissional').subscribe(resposta =>
      this.atividades = resposta);

    this.http.get('http://localhost:8080/api/logradouro').subscribe(resposta =>
      this.logradouros = resposta);

    this.formPrestadorServico = formBuilder.group({
      nome: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      cpf: '',
      atividadeProfissional: ['', Validators.required],
      telefone: '',
      celular: ['', Validators.required],
      avaliacao: '',
      dataCadastro: '',
      linkedin: '',
      facebook: '',
      website: '',
      observacao: ''
    });
  }

  ngOnInit() {}

  cadastrarPrestador = (event: Event) => {
    event.preventDefault();

  }
}
