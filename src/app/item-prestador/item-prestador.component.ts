import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-prestador',
  template: `
              <ul class="item-list">
                <li><p class="text-item">{{nome}}</p></li>
                <li><p class="text-item">{{endereco}}</p></li>
                <li><p class="text-item">Whatsapp.: {{celular}}</p></li>
                <li>
                <a class="text-item" target="_blank" href="{{url}}" (click)="countClick()">{{url}}</a>
                </li>
                <li>
                <a class="text-item" target="_blank" href="{{redesocial}}" (click)="countClick()">{{redesocial}}</a>
                </li>
              </ul>
            `
})
export class ItemPrestadorComponent implements OnInit {

  @Input() nome: string;
  @Input() endereco: string;
  @Input() celular: string;
  @Input() url: string;
  @Input() redesocial: string;

  constructor() { }

  ngOnInit() {
  }

  countClick = () => {
    console.log('Clicou!');
  }
}
