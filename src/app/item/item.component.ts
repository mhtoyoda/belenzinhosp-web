import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
              <ul class="item-list">
                <li><p class="text-item">{{nomeFantasia}}</p></li>
                <li><p class="text-item">{{endereco}}</p></li>
                <li><p class="text-item">Tel.: {{telefone}}</p></li>
                <li><p class="text-item">Abre: {{horarioAbertura}}  Fecha: {{horarioFechamento}}</p></li>
                <li>
                <a class="text-item" target="_blank" href="{{url}}" (click)="countClick()">{{url}}</a>
                </li>
                <li>
                <a class="text-item" target="_blank" href="{{redesocial}}" (click)="countClick()">{{redesocial}}</a>
                </li>
              </ul>
            `
})
export class ItemComponent implements OnInit {

  @Input() nome: string;
  @Input() nomeFantasia: string;
  @Input() endereco: string;
  @Input() telefone: string;
  @Input() horarioAbertura: string;
  @Input() horarioFechamento: string;
  @Input() url: string;
  @Input() redesocial: string;

  constructor() { }

  ngOnInit() {
  }

  countClick = () => {
    console.log('Clicou!');
  }
}
